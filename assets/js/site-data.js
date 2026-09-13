/* ============================================================
   ssum coffee — site content
   Everything the owner needs to edit lives in this one file.
   Drink names and prices are transcribed from the shop's menu board.
   The one-line blurbs and longer descriptions are DRAFTS — please
   read them over and correct anything that isn't how you make it.
   ============================================================ */

const SSUM = {
  /* ---- shop details ---------------------------------------------------- */
  shop: {
    name: "ssum coffee",
    tagline: "Small-batch coffee, made with a soft heart.",
    street: "1841 W Lincoln Ave, Ste A",
    city: "Anaheim, CA 92801",
    phone: "(714) 981-7877",
    email: "hello@ssumcoffee.com",            // << EDIT >> real inbox
    instagram: "https://www.instagram.com/ssum.coffee/",
    mapsQuery: "SSUM Coffee 1841 W Lincoln Ave Anaheim CA 92801",
    // Aggregate rating. << EDIT >> keep in sync with whatever you quote.
    ratingAverage: 4.6,
    ratingCount: 230,
    ratingBreakdown: { 5: 168, 4: 34, 3: 15, 2: 7, 1: 6 }
  },

  /* ---- hours (24h clock, minutes as decimals: 17.5 = 5:30 PM) ----------- */
  /* day index matches JS getDay(): 0 = Sunday.  << CONFIRM >> currently set */
  /* to 7–5 every day; change any day here and the whole site follows.       */
  hours: [
    { day: "Sunday",    open: 7, close: 17 },
    { day: "Monday",    open: 7, close: 17 },
    { day: "Tuesday",   open: 7, close: 17 },
    { day: "Wednesday", open: 7, close: 17 },
    { day: "Thursday",  open: 7, close: 17 },
    { day: "Friday",    open: 7, close: 17 },
    { day: "Saturday",  open: 7, close: 17 }
  ],

  /* ---- visit page notes ------------------------------------------------ */
  /* << CONFIRM >> these are drafts — reword them to match the shop.          */
  visitNotes: [
    { icon: "car",  title: "Parking",      text: "Lot parking in front of the suite, off W Lincoln Ave." },
    { icon: "wifi", title: "Sitting in",   text: "A handful of tables — quietest before the mid-morning rush." },
    { icon: "paw",  title: "The dog",      text: "The ssum pup rides on the sticker of every cup that leaves the counter." }
  ],

  goodToKnow: [
    "Open 7am to 5pm, seven days a week.",
    "Oat milk, almond milk or an extra shot: +$1.00 on any drink.",
    "Flavour lattes are one price, six syrups — vanilla through spanish.",
    "Cream-top drinks come without a straw. Sip, don't stir."
  ],

  /* add-ons printed on the board */
  addOns: { price: "+$1.00", items: ["Oat milk", "Almond milk", "Extra espresso"] },

  /* ---- categories ------------------------------------------------------ */
  cats: [
    { id: "all",       label: "Everything" },
    { id: "signature", label: "Signature" },
    { id: "espresso",  label: "Espresso coffee" },
    { id: "latte",     label: "Flavor latte" },
    { id: "matcha",    label: "Matcha" },
    { id: "refresh",   label: "Refresh & sweet" }
  ],

  /* ---- drinks ---------------------------------------------------------- */
  /* shade paints the card gradient + the cup, on a black-to-white ramp     */
  drinks: [
    /* ---------- SIGNATURE ---------- */
    { id: "ssum-matcha", name: "Ssum Matcha", price: "$7.00", cat: "signature", tag: "the namesake",
      note: "Our matcha, built the way we like it best.",
      desc: "The drink the shop is named for, and the one to order if you only order one thing.",
      shade: "espresso" },
    { id: "lotus-cream", name: "Lotus Cream Top", price: "$6.95", cat: "signature", tag: "cream top",
      note: "Coffee under a lotus biscoff cream cap.",
      desc: "Espresso and milk with a thick spiced-biscuit cream poured over the top. Drink it without a straw so each sip pulls both layers.",
      shade: "dark" },
    { id: "sweet-corn", name: "Sweet Corn Cream Top", price: "$6.95", cat: "signature", tag: "cream top",
      note: "Sweet corn cream over coffee.",
      desc: "A Korean cafe favourite — sweet corn whipped into the cream cap, sitting on coffee and milk. Sweet, toasty and a little unexpected.",
      shade: "cream" },
    { id: "yuzu-bianca", name: "Yuzu Bianca", price: "$6.50", cat: "signature", tag: "",
      note: "Yuzu and milk, bright and soft.",
      desc: "Korean yuzu marmalade stirred through milk — citrus-sweet, floral, no coffee in the way.",
      shade: "light" },
    { id: "spicy-honey-oat", name: "Spicy Honey Oat", price: "$6.50", cat: "signature", tag: "regulars' pick",
      note: "Honey, oat milk and a little heat.",
      desc: "Honey and oat milk with a gentle chili warmth that arrives after the sweetness. Strange on paper, hard to stop drinking.",
      shade: "mid" },
    { id: "yuzu-tonic", name: "Yuzu Tonic", price: "$6.00", cat: "signature", tag: "",
      note: "Yuzu over tonic, sharp and fizzy.",
      desc: "Yuzu and tonic water over ice. Bitter-bright and carbonated — the one for a warm afternoon.",
      shade: "cream" },
    { id: "yuzucano", name: "Yuzucano", price: "$5.50", cat: "signature", tag: "",
      note: "Americano with yuzu.",
      desc: "An iced americano cut with yuzu, so the citrus lands on top of the coffee instead of hiding under milk.",
      shade: "dark" },

    /* ---------- ESPRESSO COFFEE ---------- */
    { id: "cold-brew", name: "Cold Brew", price: "$5.50", cat: "espresso", tag: "",
      note: "Slow-steeped, served cold.",
      desc: "Steeped cold and long, so it reads smooth and low-acid. Black by default.",
      shade: "espresso" },
    { id: "flat-white", name: "Flat White", price: "$4.75", cat: "espresso", tag: "",
      note: "Espresso with steamed milk, thin foam.",
      desc: "Espresso under steamed milk with only a whisper of foam — the coffee stays in front.",
      shade: "light" },
    { id: "cappuccino", name: "Cappuccino", price: "$4.75", cat: "espresso", tag: "",
      note: "Espresso, steamed milk, proper foam.",
      desc: "The classic ratio, with a real foam cap rather than a latte wearing a hat.",
      shade: "cream" },
    { id: "americano", name: "Americano", price: "$4.50", cat: "espresso", tag: "",
      note: "Espresso and water. Hot or iced.",
      desc: "Deliberately simple — espresso lengthened with water, so you taste exactly what's in the hopper this week.",
      shade: "espresso" },
    { id: "espresso", name: "Espresso", price: "$3.95", cat: "espresso", tag: "",
      note: "Straight shot, no hiding.",
      desc: "Short, dense, and over in three sips. The fastest way to know whether a shop can pull coffee.",
      shade: "espresso" },
    { id: "morning-brew", name: "Morning Brew", price: "$3.50", cat: "espresso", tag: "best value",
      note: "The everyday drip.",
      desc: "The cheapest thing on the board and the one the regulars carry out at 7am.",
      shade: "dark" },

    /* ---------- FLAVOR LATTE ---------- */
    { id: "flavor-latte", name: "Flavor Latte", price: "$5.75", cat: "latte", tag: "six flavors",
      note: "Vanilla, hazelnut, caramel, mocha, strawberry or spanish.",
      desc: "One price, six directions. Espresso and milk with the syrup of your choice — the spanish latte runs sweetest, the mocha darkest.",
      specs: ["Vanilla", "Hazelnut", "Caramel", "Mocha", "Strawberry", "Spanish latte"],
      shade: "mid" },

    /* ---------- MATCHA ---------- */
    { id: "matcha-einspanner", name: "Matcha Einspänner", price: "$6.95", cat: "matcha", tag: "cream top",
      note: "Matcha under a thick cream cap.",
      desc: "Matcha with cream floated on top instead of stirred in. No straw, by design.",
      shade: "light" },
    { id: "matcha-yuzu-tonic", name: "Matcha Yuzu Tonic", price: "$6.75", cat: "matcha", tag: "",
      note: "Matcha, yuzu and tonic.",
      desc: "Three sharp things that shouldn't work together and do — grassy, citrus and fizz, layered over ice.",
      shade: "cream" },
    { id: "strawberry-matcha", name: "Strawberry Matcha", price: "$6.50", cat: "matcha", tag: "most posted",
      note: "Strawberry under matcha and milk.",
      desc: "Strawberry at the bottom, milk in the middle, matcha poured last. Stir it slowly and watch it go.",
      shade: "mid" },
    { id: "matcha-latte", name: "Matcha Latte", price: "$6.00", cat: "matcha", tag: "",
      note: "Matcha and milk, hot or iced.",
      desc: "Whisked to order rather than poured from a jug — sweet-grassy, without the chalky finish.",
      shade: "light" },

    /* ---------- REFRESH & SWEET ---------- */
    { id: "yuzu-ade", name: "Yuzu Sparkling Ade", price: "$5.50", cat: "refresh", tag: "caffeine free",
      note: "Yuzu, soda, ice.",
      desc: "Yuzu marmalade and sparkling water over a full cup of ice. The one to order at 4pm if you still want to sleep.",
      shade: "cream" },
    { id: "strawberry-milk", name: "Strawberry Milk", price: "$4.95", cat: "refresh", tag: "kid approved",
      note: "Strawberry and cold milk.",
      desc: "Pink, honest, and gone in about four minutes.",
      shade: "light" },
    { id: "chocolate-milk", name: "Chocolate Milk", price: "$4.95", cat: "refresh", tag: "caffeine free",
      note: "Chocolate and cold milk.",
      desc: "Exactly what it says. No notes.",
      shade: "dark" }
  ],

  /* ---- sample reviews -------------------------------------------------- */
  /* SAMPLE CONTENT — replace with real, permitted quotes before launch.     */
  reviews: [
    { name: "Jenna P.",  rating: 5, date: "2 weeks ago",  drink: "Ssum Matcha",
      text: "The ssum matcha is the reason I drive out of my way. Whisked to order, no bitterness, no chalky bottom. Staff remembered my order on the second visit." },
    { name: "Marcus L.", rating: 5, date: "3 weeks ago",  drink: "Lotus Cream Top",
      text: "Lotus cream top done properly — the cream is thick enough to hold its shape and the coffee underneath isn't watered down. Quiet in the mornings, great light." },
    { name: "Soo-Ah K.", rating: 4, date: "1 month ago",  drink: "Sweet Corn Cream Top",
      text: "Sweet corn cream top tastes like home. Only knocking a star because parking gets rough around noon. My kid collects the dog stickers." },
    { name: "Dani R.",   rating: 5, date: "1 month ago",  drink: "Yuzu Bianca",
      text: "Yuzu bianca is so much better than it sounds — citrus and milk, not too sweet, and it actually tastes like real yuzu rather than syrup." },
    { name: "Tommy V.",  rating: 5, date: "2 months ago", drink: "Spicy Honey Oat",
      text: "Ordered the spicy honey oat expecting a gimmick and got something I now think about on the drive home. The heat shows up late and it works." },
    { name: "Priya S.",  rating: 4, date: "2 months ago", drink: "Cold Brew",
      text: "Solid cold brew, consistent every time. Would love a couple more outlets near the back, but that's my only note." },
    { name: "Alex H.",   rating: 5, date: "3 months ago", drink: "Morning Brew",
      text: "Three fifty for the morning brew and it's genuinely good coffee. Asked what was in the hopper and got an actual answer with actual enthusiasm." },
    { name: "Grace N.",  rating: 5, date: "3 months ago", drink: "Strawberry Matcha",
      text: "Real strawberry at the bottom, not syrup. My daughter calls it the puppy drink because of the cup sticker and now it's a weekend ritual." },
    { name: "Ben C.",    rating: 4, date: "4 months ago", drink: "Yuzu Tonic",
      text: "Yuzu tonic is the perfect warm-afternoon drink — sharp, fizzy, not sweet. Gets busy on Saturdays so come early if you want a table." }
  ]
};

if (typeof window !== "undefined") window.SSUM = SSUM;
