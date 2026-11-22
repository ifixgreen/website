/**
 * iFix Green Solutions — Official Website Main Scripts
 */
document.addEventListener('DOMContentLoaded', function() {
  // Header shadow on scroll & toTop button visibility
  var header = document.getElementById('siteHeader');
  var toTop = document.getElementById('toTop');
  function onScroll() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 10);
    if (toTop) toTop.classList.toggle('show', window.scrollY > 420);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var burger = document.getElementById('burger');
  var mob = document.getElementById('mobileNav');
  if (burger && mob) {
    burger.addEventListener('click', function() {
      var open = mob.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    mob.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        mob.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Back to top
  if (toTop) {
    toTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Scroll reveal
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && document.documentElement.classList.contains('js')) {
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: .08, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function(el) { obs.observe(el); });
    setTimeout(function() {
      revealEls.forEach(function(el, i) {
        if (!el.classList.contains('in')) {
          setTimeout(function() { el.classList.add('in'); }, i * 20);
        }
      });
    }, 2000);
  } else {
    revealEls.forEach(function(el) { el.classList.add('in'); });
  }

  // Animated KPI Counters
  function runCounter(el) {
    var raw = String(el.dataset.target);
    var dec = raw.indexOf('.') > -1 ? 1 : 0;          // "5.0" must read 5.0, never 5
    var target = parseFloat(raw), cur = 0, step = target / 60, isInt = dec === 0;
    var t = setInterval(function() {
      cur += step;
      if (cur >= target) {
        cur = target;
        clearInterval(t);
      }
      el.textContent = (isInt ? Math.floor(cur) : cur.toFixed(dec)) + '+';
    }, 22);
  }
  if ('IntersectionObserver' in window) {
    var cObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) {
          runCounter(e.target);
          cObs.unobserve(e.target);
        }
      });
    }, { threshold: .4 });
    document.querySelectorAll('.stat-num').forEach(function(el) { cObs.observe(el); });
  } else {
    document.querySelectorAll('.stat-num').forEach(function(el) { el.textContent = el.dataset.target + '+'; });
  }

  // Active navigation link tracking on scroll
  var secs = document.querySelectorAll('section[id]');
  var anchors = document.querySelectorAll('.nav a');
  function setActive() {
    var pos = window.scrollY + 140, current = '';
    secs.forEach(function(s) {
      if (s.offsetTop <= pos && s.offsetTop + s.offsetHeight > pos) current = s.id;
    });
    anchors.forEach(function(a) {
      a.classList.toggle('active', (a.getAttribute('href') || '') === '#' + current);
    });
  }
  window.addEventListener('scroll', setActive, { passive: true });
  setActive();
});

// WhatsApp Contact Form Action
function sendViaWhatsApp(e) {
  e.preventDefault();
  var f = e.target;
  var name = f.querySelector("input[name=name]").value.trim();
  var phone = f.querySelector("input[name=phone]").value.trim();
  var email = (f.querySelector("input[name=email]").value || "").trim();
  var msg = (f.querySelector("textarea[name=message]").value || "").trim();
  var text = "Hello iFix Green Solutions!\n\n";
  text += "Name: " + name + "\n";
  text += "Phone: " + phone + "\n";
  if (email) { text += "Email: " + email + "\n"; }
  if (msg) { text += "Message: " + msg + "\n"; }
  window.open("https://wa.me/94706511656?text=" + encodeURIComponent(text), "_blank");
  return false;
}
