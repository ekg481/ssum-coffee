/* ============================================================
   ssum coffee — interactions
   Vanilla JS, no build step. Each block no-ops if its markup
   isn't on the current page.
   ============================================================ */
(function () {
  "use strict";

  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const data = window.SSUM;

  /* ---------- icons ---------- */
  const ICON = {
    star: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5L2.6 9.4l6.5-.9L12 2.6z"/></svg>',
    starOutline: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.2l2.75 5.6 6.15.9-4.45 4.35 1.05 6.15L12 17.3l-5.5 2.9 1.05-6.15L3.1 9.7l6.15-.9L12 3.2z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
    car: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16v2.5M20 16v2.5"/><path d="M3.5 16v-3.4l1.8-4.4A2 2 0 0 1 7.1 7h9.8a2 2 0 0 1 1.8 1.2l1.8 4.4V16z"/><circle cx="7.5" cy="16" r="1.3"/><circle cx="16.5" cy="16" r="1.3"/></svg>',
    wifi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 9a15 15 0 0 1 19 0"/><path d="M6 12.5a10 10 0 0 1 12 0"/><path d="M9.3 16a5 5 0 0 1 5.4 0"/><path d="M12 19.3h.01"/></svg>',
    paw: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="7" cy="9" rx="1.9" ry="2.5"/><ellipse cx="12" cy="6.8" rx="1.9" ry="2.6"/><ellipse cx="17" cy="9" rx="1.9" ry="2.5"/><path d="M12 12.2c2.6 0 4.6 2 4.6 4.1 0 1.7-1.3 2.9-3 2.9-.8 0-1.1-.3-1.6-.3s-.8.3-1.6.3c-1.7 0-3-1.2-3-2.9 0-2.1 2-4.1 4.6-4.1z"/></svg>',
    empty: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>'
  };

  /* black-and-white shade ramp — the whole gallery stays monochrome */
  const SHADES = {
    cream:    { c1: "#f1f1ed", c2: "#d7d7d1", cup: "#c9c9c2" },
    light:    { c1: "#e6e6e1", c2: "#c3c3bc", cup: "#aeaea7" },
    mid:      { c1: "#d3d3cd", c2: "#9d9d97", cup: "#82827c" },
    dark:     { c1: "#aaaaa4", c2: "#616160", cup: "#46463f" },
    espresso: { c1: "#878782", c2: "#333331", cup: "#211f1e" }
  };
  const shadeOf = (d) => SHADES[d.shade] || SHADES.mid;
  const catLabel = (id) => (data.cats.find((c) => c.id === id) || {}).label || "";

  /* Cup illustration used on drink cards + modal */
  function cupSVG(fill, opts = {}) {
    const size = opts.size || "100%";
    return `<svg class="drink__cup" width="${size}" viewBox="0 0 120 160" fill="none" aria-hidden="true">
      <path d="M22 34h76l-9 106a10 10 0 0 1-10 9H41a10 10 0 0 1-10-9L22 34z" fill="rgba(255,255,255,.55)"/>
      <path d="M26 62h68l-6.2 78a10 10 0 0 1-10 9H42.2a10 10 0 0 1-10-9L26 62z" fill="${fill}"/>
      <path d="M26 62h68l-1.6 20H27.6L26 62z" fill="rgba(255,255,255,.45)"/>
      <rect x="16" y="24" width="88" height="14" rx="7" fill="rgba(255,255,255,.85)"/>
      <rect x="66" y="2" width="9" height="40" rx="4.5" transform="rotate(12 66 2)" fill="rgba(255,255,255,.8)"/>
      <circle cx="60" cy="104" r="23" fill="#ffffff" opacity=".95"/>
      <g fill="none" stroke="#14120f" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
        <path d="M 47.93 107.22 A 4.90 4.90 0 0 1 48.25 100.91 A 5.26 5.26 0 0 1 52.83 95.90 A 5.75 5.75 0 0 1 60.00 94.00 A 5.75 5.75 0 0 1 67.17 95.90 A 5.26 5.26 0 0 1 71.75 100.91 A 4.90 4.90 0 0 1 72.07 107.22"/>
        <path d="M56.3 110.4 Q 58.1 112.6, 60 110.7 Q 61.9 112.6, 63.7 110.4"/>
      </g>
      <g fill="#14120f">
        <circle cx="55.6" cy="105.6" r="1.45"/>
        <circle cx="64.4" cy="105.4" r="1.45"/>
        <path d="M57.9 107.2 Q 60 106.1, 62.1 107.2 Q 61.1 110, 60 110 Q 58.9 110, 57.9 107.2 Z"/>
      </g>
    </svg>`;
  }

  function starsHTML(rating, cls = "") {
    let out = `<span class="stars ${cls}" role="img" aria-label="${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) out += i <= Math.round(rating) ? ICON.star : `<span style="opacity:.26">${ICON.star}</span>`;
    return out + "</span>";
  }

  function fmtTime(dec) {
    const h24 = Math.floor(dec);
    const m = Math.round((dec - h24) * 60);
    const ampm = h24 >= 12 ? "PM" : "AM";
    const h = h24 % 12 === 0 ? 12 : h24 % 12;
    return `${h}${m ? ":" + String(m).padStart(2, "0") : ":00"} ${ampm}`;
  }

  /* ---------- toast ---------- */
  let toastTimer;
  function toast(msg) {
    let el = $(".toast");
    if (!el) {
      el = document.createElement("div");
      el.className = "toast";
      el.setAttribute("role", "status");
      document.body.appendChild(el);
    }
    el.innerHTML = `${ICON.check}<span></span>`;
    $("span", el).textContent = msg;
    requestAnimationFrame(() => el.classList.add("is-on"));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("is-on"), 2600);
  }

  /* ---------- theme ---------- */
  function initTheme() {
    const KEY = "ssum-theme";
    const saved = localStorage.getItem(KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const set = (t) => {
      document.documentElement.setAttribute("data-theme", t);
      const meta = $('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", t === "dark" ? "#100f0d" : "#f7f4ef");
    };
    set(saved || (prefersDark ? "dark" : "light"));
    $$("[data-theme-toggle]").forEach((btn) =>
      btn.addEventListener("click", () => {
        const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        set(next);
        localStorage.setItem(KEY, next);
      })
    );
  }

  /* ---------- sticky nav shadow ---------- */
  function initNav() {
    const nav = $(".nav");
    if (!nav) return;
    const onScroll = () => nav.classList.toggle("is-stuck", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- scroll reveal ---------- */
  function initReveal(root = document) {
    const items = $$(".reveal:not(.is-in)", root);
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) return items.forEach((el) => el.classList.add("is-in"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (!e.isIntersecting) return;
        const delay = Number(e.target.dataset.delay || 0) + i * 55;
        setTimeout(() => e.target.classList.add("is-in"), delay);
        io.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach((el) => io.observe(el));
  }

  /* ---------- hours + open / closed ---------- */
  function openState(now = new Date()) {
    const d = now.getDay();
    const dec = now.getHours() + now.getMinutes() / 60;
    const today = data.hours[d];
    if (today && dec >= today.open && dec < today.close) {
      return { open: true, text: `Open until ${fmtTime(today.close)}` };
    }
    // find the next opening
    for (let i = 0; i < 8; i++) {
      const idx = (d + i) % 7;
      const slot = data.hours[idx];
      if (!slot || slot.open === null) continue;
      if (i === 0 && dec < slot.open) return { open: false, text: `Opens today at ${fmtTime(slot.open)}` };
      if (i > 0) return { open: false, text: `Opens ${i === 1 ? "tomorrow" : slot.day} at ${fmtTime(slot.open)}` };
    }
    return { open: false, text: "Closed" };
  }

  function initHours() {
    const state = openState();
    $$("[data-status]").forEach((el) => {
      el.classList.add(state.open ? "is-open" : "is-closed");
      el.innerHTML = `<span class="status__dot"></span><span>${state.text}</span>`;
    });
    $$("[data-status-text]").forEach((el) => { el.textContent = state.text; });

    const list = $("[data-hours]");
    if (!list) return;
    const today = new Date().getDay();
    list.innerHTML = data.hours
      .map((h, i) => `
        <div class="hours__row ${i === today ? "is-today" : ""}">
          <span class="hours__day">${h.day}</span>
          <span class="hours__time">${h.open === null ? "Closed" : `${fmtTime(h.open)} — ${fmtTime(h.close)}`}</span>
        </div>`)
      .join("");
  }

  /* ---------- shop details injected from data ---------- */
  function initShopDetails() {
    const s = data.shop;
    const map = {
      "shop-street": s.street,
      "shop-city": s.city,
      "shop-phone": s.phone,
      "shop-email": s.email,
      "shop-rating": s.ratingAverage.toFixed(1),
      "shop-count": s.ratingCount.toLocaleString()
    };
    Object.entries(map).forEach(([key, val]) => {
      $$(`[data-field="${key}"]`).forEach((el) => { el.textContent = val; });
    });
    const mapsURL = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(s.mapsQuery);
    $$("[data-maps]").forEach((el) => { el.href = mapsURL; });
    $$("[data-tel]").forEach((el) => { el.href = "tel:" + s.phone.replace(/[^\d+]/g, ""); });
    $$("[data-mailto]").forEach((el) => { el.href = "mailto:" + s.email; });
    $$("[data-instagram]").forEach((el) => { el.href = s.instagram; });
    $$("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });

    $$("[data-copy-address]").forEach((btn) =>
      btn.addEventListener("click", async () => {
        const text = `${s.name} — ${s.street}, ${s.city}`;
        try {
          await navigator.clipboard.writeText(text);
          toast("Address copied");
        } catch {
          toast(text);
        }
      })
    );
  }

  /* ---------- drinks ---------- */
  function drinkCard(d) {
    const sh = shadeOf(d);
    return `<button class="drink reveal" type="button" data-drink="${d.id}" data-cat="${d.cat}" style="--c1:${sh.c1};--c2:${sh.c2}">
      ${d.tag ? `<span class="drink__tag">${escapeHTML(d.tag)}</span>` : ""}
      <span class="drink__art" aria-hidden="true">${cupSVG(sh.cup)}</span>
      <span class="drink__body">
        <span class="drink__row"><span class="drink__name">${escapeHTML(d.name)}</span><span class="drink__price">${d.price}</span></span>
        <span class="drink__note">${escapeHTML(d.note)}</span>
        <span class="drink__foot">
          <span class="drink__caf">${catLabel(d.cat)}</span><span class="drink__more">details →</span>
        </span>
      </span>
    </button>`;
  }

  function initDrinks() {
    const grid = $("[data-drink-grid]");
    if (!grid) return;
    const limit = Number(grid.dataset.limit || 0);
    const source = limit ? data.drinks.slice(0, limit) : data.drinks;
    grid.innerHTML = source.map(drinkCard).join("");

    /* filters, built from the category list */
    const bar = $("[data-filters]");
    if (bar) {
      bar.innerHTML = data.cats
        .map((c, i) => `<button class="chip" type="button" data-filter="${c.id}" aria-pressed="${i === 0}">${c.label}</button>`)
        .join("");
    }
    const chips = $$("[data-filter]");
    chips.forEach((chip) =>
      chip.addEventListener("click", () => {
        const cat = chip.dataset.filter;
        chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
        let shown = 0;
        $$(".drink", grid).forEach((card) => {
          const match = cat === "all" || card.dataset.cat === cat;
          card.style.display = match ? "" : "none";
          if (match) shown++;
        });
        const empty = $("[data-drink-empty]");
        if (empty) empty.hidden = shown > 0;
      })
    );

    /* modal */
    grid.addEventListener("click", (e) => {
      const card = e.target.closest("[data-drink]");
      if (card) openDrink(card.dataset.drink);
    });
    initReveal(grid);
  }

  let lastFocused = null;
  function openDrink(id) {
    const d = data.drinks.find((x) => x.id === id);
    const modal = $("[data-modal]");
    if (!d || !modal) return;
    lastFocused = document.activeElement;
    const sh = shadeOf(d);
    $("[data-modal-art]", modal).style.background = `linear-gradient(150deg, ${sh.c1}, ${sh.c2})`;
    $("[data-modal-art]", modal).innerHTML = cupSVG(sh.cup, { size: 92 });
    $("[data-modal-title]", modal).textContent = d.name;
    $("[data-modal-price]", modal).textContent = `${d.price} · ${catLabel(d.cat)}`;
    $("[data-modal-desc]", modal).textContent = d.desc;
    const specs = d.specs || [];
    const list = $("[data-modal-specs]", modal);
    list.hidden = specs.length === 0;
    list.innerHTML = specs.map((x) => `<li>${ICON.check}<span>${escapeHTML(x)}</span></li>`).join("");
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $(".modal__close", modal).focus();
  }

  function closeDrink() {
    const modal = $("[data-modal]");
    if (!modal || !modal.classList.contains("is-open")) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  function initModal() {
    const modal = $("[data-modal]");
    if (!modal) return;
    modal.addEventListener("click", (e) => {
      if (e.target === modal || e.target.closest("[data-modal-close]")) closeDrink();
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeDrink(); });
  }

  /* ---------- add-ons ---------- */
  function initAddOns() {
    const el = $("[data-addons]");
    if (!el || !data.addOns) return;
    el.textContent = `Add ${data.addOns.items.join(", ").toLowerCase()} — ${data.addOns.price} each.`;
  }

  /* ---------- visit page notes + good-to-know ---------- */
  function initVisitLists() {
    const notes = $("[data-visit-notes]");
    if (notes && data.visitNotes) {
      notes.innerHTML = data.visitNotes
        .map((n) => `<div class="info-row">${ICON[n.icon] || ""}<div><dt>${escapeHTML(n.title)}</dt><dd>${escapeHTML(n.text)}</dd></div></div>`)
        .join("");
    }
    const know = $("[data-good-to-know]");
    if (know && data.goodToKnow) {
      know.innerHTML = data.goodToKnow.map((t) => `<li>${ICON.check}<span>${escapeHTML(t)}</span></li>`).join("");
    }
  }

  /* ---------- reviews ---------- */
  const REVIEW_KEY = "ssum-reviews";

  const loadLocal = () => {
    try { return JSON.parse(localStorage.getItem(REVIEW_KEY)) || []; }
    catch { return []; }
  };
  const saveLocal = (list) => {
    try { localStorage.setItem(REVIEW_KEY, JSON.stringify(list)); } catch { /* private mode */ }
  };

  const initials = (name) =>
    name.trim().split(/\s+/).slice(0, 2).map((w) => w[0] || "").join("").toUpperCase() || "?";

  function reviewCard(r) {
    return `<article class="card review reveal">
      <div class="review__head">
        <span class="avatar" aria-hidden="true">${initials(r.name)}</span>
        <div>
          <div class="review__who">${escapeHTML(r.name)}</div>
          <div class="review__meta">${escapeHTML(r.date)}${r.mine ? ' · <span class="review__badge">your review</span>' : ""}</div>
        </div>
      </div>
      ${starsHTML(r.rating)}
      <p class="review__text">${escapeHTML(r.text)}</p>
      ${r.drink ? `<span class="review__drink">☕ ${escapeHTML(r.drink)}</span>` : ""}
    </article>`;
  }

  function escapeHTML(str) {
    return String(str).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );
  }

  function allReviews() {
    return loadLocal().concat(data.reviews);
  }

  function renderReviews(filter = "all") {
    const wrap = $("[data-reviews]");
    if (!wrap) return;
    const limit = Number(wrap.dataset.limit || 0);
    let list = allReviews();
    if (filter !== "all") list = list.filter((r) => String(r.rating) === filter);
    if (limit) list = list.slice(0, limit);
    wrap.innerHTML = list.length
      ? list.map(reviewCard).join("")
      : `<div class="empty">${ICON.empty}<p>No reviews at that rating yet.</p></div>`;
    initReveal(wrap);
  }

  function renderRatingSummary() {
    const s = data.shop;
    const mine = loadLocal();
    const total = s.ratingCount + mine.length;
    const sum = s.ratingAverage * s.ratingCount + mine.reduce((a, r) => a + r.rating, 0);
    const avg = total ? sum / total : 0;

    $$("[data-field='shop-rating']").forEach((el) => { el.textContent = avg.toFixed(1); });
    $$("[data-field='shop-count']").forEach((el) => { el.textContent = total.toLocaleString(); });
    $$("[data-avg-stars]").forEach((el) => { el.innerHTML = starsHTML(avg, "stars--lg"); });

    const bars = $("[data-bars]");
    if (!bars) return;
    const counts = { ...s.ratingBreakdown };
    mine.forEach((r) => { counts[r.rating] = (counts[r.rating] || 0) + 1; });
    bars.innerHTML = [5, 4, 3, 2, 1]
      .map((n) => {
        const pct = total ? Math.round(((counts[n] || 0) / total) * 100) : 0;
        return `<div class="bar-row">
          <span>${n} star</span>
          <span class="bar"><i data-w="${pct}"></i></span>
          <span>${pct}%</span>
        </div>`;
      })
      .join("");
    // animate once visible
    const fills = $$("i", bars);
    const run = () => fills.forEach((f) => { f.style.width = f.dataset.w + "%"; });
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((en) => {
        if (en[0].isIntersecting) { run(); io.disconnect(); }
      }, { threshold: .3 });
      io.observe(bars);
    } else run();
  }

  function initReviewFilters() {
    const chips = $$("[data-review-filter]");
    chips.forEach((chip) =>
      chip.addEventListener("click", () => {
        chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
        renderReviews(chip.dataset.reviewFilter);
      })
    );
  }

  function initStarPicker() {
    const pick = $("[data-starpick]");
    if (!pick) return;
    const input = $("#review-rating");
    pick.innerHTML = [1, 2, 3, 4, 5]
      .map((n) => `<button type="button" data-val="${n}" aria-label="${n} star${n > 1 ? "s" : ""}">${ICON.star}</button>`)
      .join("");
    const paint = (val) => $$("button", pick).forEach((b) => b.classList.toggle("is-on", Number(b.dataset.val) <= val));
    pick.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      input.value = btn.dataset.val;
      paint(Number(btn.dataset.val));
    });
    pick.addEventListener("mouseover", (e) => {
      const btn = e.target.closest("button");
      if (btn) paint(Number(btn.dataset.val));
    });
    pick.addEventListener("mouseleave", () => paint(Number(input.value || 0)));
    paint(Number(input.value || 0));
  }

  function initReviewForm() {
    const form = $("[data-review-form]");
    if (!form) return;

    // drink dropdown fed from the menu
    const select = $("#review-drink", form);
    if (select) {
      select.innerHTML =
        '<option value="">Pick a drink (optional)</option>' +
        data.drinks.map((d) => `<option value="${escapeHTML(d.name)}">${escapeHTML(d.name)}</option>`).join("");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = $("#review-name", form).value.trim();
      const text = $("#review-text", form).value.trim();
      const rating = Number($("#review-rating", form).value);
      if (!rating) return toast("Tap a star rating first");
      if (name.length < 2) return toast("Add your name");
      if (text.length < 10) return toast("Tell us a little more");

      const entry = {
        name, text, rating,
        drink: select ? select.value : "",
        date: "just now",
        mine: true
      };
      saveLocal([entry].concat(loadLocal()));
      form.reset();
      $("#review-rating", form).value = "";
      initStarPicker();
      renderRatingSummary();
      $$("[data-review-filter]").forEach((c) => c.setAttribute("aria-pressed", String(c.dataset.reviewFilter === "all")));
      renderReviews("all");
      toast("Thanks — your review is posted");
      const wrap = $("[data-reviews]");
      if (wrap) wrap.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    const clear = $("[data-clear-reviews]");
    if (clear) {
      clear.addEventListener("click", () => {
        saveLocal([]);
        renderRatingSummary();
        renderReviews("all");
        toast("Your reviews were cleared");
      });
    }
  }

  /* ---------- boot ---------- */
  function boot() {
    initTheme();
    initNav();
    initShopDetails();
    initHours();
    initDrinks();
    initModal();
    initAddOns();
    initVisitLists();
    renderRatingSummary();
    renderReviews("all");
    initReviewFilters();
    initStarPicker();
    initReviewForm();
    initReveal();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
