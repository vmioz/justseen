/* سلة سين: تحفظ الخدمات في المتصفح وتنتقل بين الصفحات. صفحة order.html هي صفحة السلة والطلب. */
(function () {
  var KEY = 'seen-cart';
  var W = window.SEEN = window.SEEN || {};
  function read() { try { var a = JSON.parse(localStorage.getItem(KEY) || '[]'); return Array.isArray(a) ? a : []; } catch (e) { return []; } }
  function write(a) { try { localStorage.setItem(KEY, JSON.stringify(a)); } catch (e) {} paint(); try { document.dispatchEvent(new CustomEvent('seen-cart')); } catch (e) {} }
  var cart = W.cart = {
    items: read,
    has: function (id) { return read().some(function (x) { return x.id === id; }); },
    add: function (id, tier) { var a = read(); if (!a.some(function (x) { return x.id === id; })) { a.push({ id: id, tier: tier || null }); write(a); } },
    remove: function (id) { write(read().filter(function (x) { return x.id !== id; })); },
    setTier: function (id, tier) { write(read().map(function (x) { return x.id === id ? { id: id, tier: tier } : x; })); },
    clear: function () { write([]); },
    count: function () { return read().length; }
  };
  function paint() {
    var n = cart.count();
    document.querySelectorAll('[data-cart-count]').forEach(function (el) { el.textContent = n; el.hidden = !n; });
    document.querySelectorAll('[data-add]').forEach(function (b) {
      if (b.dataset.label === undefined) b.dataset.label = b.textContent;
      var inCart = cart.has(b.dataset.add);
      b.classList.toggle('in-cart', inCart);
      b.textContent = inCart ? '✓ في السلة' : b.dataset.label;
    });
  }
  function toast(html) {
    var t = document.getElementById('toast'); if (!t) return;
    t.innerHTML = html; t.classList.add('show'); clearTimeout(t._t); t._t = setTimeout(function () { t.classList.remove('show'); }, 3200);
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-add]'); if (!b) return;
    e.preventDefault();
    var id = b.dataset.add;
    if (cart.has(id)) { location.href = 'order.html'; return; }
    cart.add(id);
    toast('أُضيفت للسلة · <a href="order.html">أكمل الطلب ←</a>');
    if (window.gtag) gtag('event', 'add_to_cart', { item_id: id });
  });
  addEventListener('storage', function (e) { if (e.key === KEY) paint(); });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', paint); else paint();
  W.paintCart = paint;
})();

/* عرض الافتتاح: بعد تاريخ الانتهاء ترجع الأسعار كاملة في صفحات الخدمات */
(function(){function f(){document.querySelectorAll('[data-end]').forEach(function(e){if(Date.now()<Date.parse(e.getAttribute('data-end')))return;
 if(e.classList.contains('offnote')){e.remove();return;}
 var b=e.querySelector('b'),full=e.getAttribute('data-full');if(b&&full)b.textContent=full;
 e.querySelectorAll('s,em.tag').forEach(function(x){x.remove();});e.removeAttribute('data-end');});}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',f);else f();})();
