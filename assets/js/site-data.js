/* ============================================================
   ssum coffee — site content
   Everything the owner needs to edit lives in this one file.
   Placeholder values are marked with  << EDIT >>
   ============================================================ */

const SSUM = {
  /* ---- shop details ---------------------------------------------------- */
  shop: {
    name: "ssum coffee",
    tagline: "Small-batch coffee, made with a soft heart.",
    street: "1234 Example Blvd, Suite B",      // << EDIT >> real street address
    city: "Rowland Heights, CA 91748",
    phone: "(626) 555-0142",                   // << EDIT >> real phone
    email: "hello@ssumcoffee.com",             // << EDIT >>
    instagram: "https://instagram.com/",       // << EDIT >>
    mapsQuery: "ssum coffee Rowland Heights CA",
    // Aggregate rating shown on the reviews page. << EDIT >> keep in sync with
    // whatever platform you quote (Yelp / Google).
    ratingAverage: 4.6,
    ratingCount: 230,
    ratingBreakdown: { 5: 168, 4: 34, 3: 15, 2: 7, 1: 6 }
  },

  /* ---- hours (24h clock, minutes as decimals: 17.5 = 5:30 PM) ----------- */
  /* day index matches JS getDay(): 0 = Sunday                               */
  hours: [
    { day: "Sunday",    open: 8,    close: 16 },
    { day: "Monday",    open: 7,    close: 17 },
    { day: "Tuesday",   open: 7,    close: 17 },
    { day: "Wednesday", open: 7,    close: 17 },
    { day: "Thursday",  open: 7,    close: 17 },
    { day: "Friday",    open: 7,    close: 18 },
    { day: "Saturday",  open: 8,    close: 18 }
  ],

  /* ---- drinks ---------------------------------------------------------- */
  /* c1 / c2 paint the card gradient, cup paints the liquid in the cup art   */
  drinks: [
    {
      id: "ssum-latte", name: "Ssum Signature Latte", price: "$6.25",
      cat: "signature", tag: "house favorite",
      note: "Brown sugar, oat milk, a whisper of sea salt cream.",
      desc: "Our namesake. Slow-steeped brown sugar syrup, double ristretto, oat milk poured cold, then finished with a salted cream cap that melts into the first sip.",
      specs: ["Oat milk by default — dairy on request", "Double ristretto, 14g dose", "Best iced, 16oz"],
      c1: "#e8d4bb", c2: "#c79b6c", cup: "#c8975f", roast: "medium", caffeine: "150mg"
    },
    {
      id: "dalgona", name: "Dalgona Cloud", price: "$6.75",
      cat: "signature", tag: "most posted",
      note: "Whipped coffee cloud over cold milk.",
      desc: "Hand-whipped for four minutes until it holds a peak, spooned over cold milk and ice. Stir it in slowly and watch the ribbons fall.",
      specs: ["Contains dairy — oat version available", "Lightly sweet", "Iced only, 16oz"],
      c1: "#f0e3cf", c2: "#d8b183", cup: "#d9b98f", roast: "medium", caffeine: "120mg"
    },
    {
      id: "black-sesame", name: "Black Sesame Latte", price: "$6.50",
      cat: "signature", tag: "regulars' pick",
      note: "Toasted sesame, honey, espresso.",
      desc: "House-ground toasted black sesame paste whisked with honey and milk, then espresso poured over the top for a nutty, almost dessert-like cup.",
      specs: ["Contains sesame", "Half-sweet by default", "Hot or iced, 12 / 16oz"],
      c1: "#d9d4cd", c2: "#6f6a66", cup: "#4a4542", roast: "dark", caffeine: "150mg"
    },
    {
      id: "einspanner", name: "Einspänner", price: "$6.00",
      cat: "espresso", tag: "cafe classic",
      note: "Cold brew under a thick vanilla cream.",
      desc: "Twelve-hour cold brew, no ice dilution, wearing a lid of lightly sweetened vanilla cream. Drink it without a straw so every sip pulls both layers.",
      specs: ["No straw, by design", "Unsweetened base", "Iced, 12oz"],
      c1: "#e6ded3", c2: "#8c6b4f", cup: "#5b3d29", roast: "dark", caffeine: "205mg"
    },
    {
      id: "cortado", name: "Cortado", price: "$4.50",
      cat: "espresso", tag: "",
      note: "Equal parts espresso and steamed milk.",
      desc: "Four ounces, two shots, milk steamed to 140°F so the sweetness stays intact. The cleanest way to taste the week's single origin.",
      specs: ["Rotating single origin", "No syrup — ask if you want one", "Hot, 4oz"],
      c1: "#ead9c6", c2: "#b98a56", cup: "#a97b4d", roast: "medium", caffeine: "130mg"
    },
    {
      id: "americano", name: "Iced Americano", price: "$4.25",
      cat: "espresso", tag: "",
      note: "Three shots, filtered water, lots of ice.",
      desc: "Deliberately simple. Three shots pulled long over ice with filtered water — bright at the top, mellow by the bottom.",
      specs: ["Triple shot standard", "Zero sugar", "Iced, 16oz"],
      c1: "#ded6cb", c2: "#6b5647", cup: "#432f21", roast: "medium", caffeine: "195mg"
    },
    {
      id: "matcha", name: "Ceremonial Matcha", price: "$6.00",
      cat: "non-coffee", tag: "caffeine, gently",
      note: "Uji matcha, whisked to order.",
      desc: "First-harvest Uji matcha sifted and whisked by hand, never pre-mixed. Sweet-grassy, no bitterness, served over milk of your choice.",
      specs: ["Unsweetened by default", "Hot or iced, 12 / 16oz", "Vegan with oat"],
      c1: "#dfe8d3", c2: "#8aa46a", cup: "#7f9c5b", roast: "—", caffeine: "70mg"
    },
    {
      id: "strawberry", name: "Strawberry Ssum", price: "$6.50",
      cat: "non-coffee", tag: "kid approved",
      note: "Muddled strawberries, milk, vanilla.",
      desc: "Real strawberries muddled with a little sugar, layered with cold milk and vanilla. Pink, honest, and gone in about four minutes.",
      specs: ["Caffeine free", "Seasonal fruit — subject to the market", "Iced, 16oz"],
      c1: "#f6dbdd", c2: "#d98a92", cup: "#e19aa2", roast: "—", caffeine: "0mg"
    },
    {
      id: "hojicha", name: "Hojicha Latte", price: "$5.75",
      cat: "non-coffee", tag: "",
      note: "Roasted green tea, toasty and low-caffeine.",
      desc: "Roasted rather than steamed, so it reads warm and nutty instead of grassy. Our go-to recommendation for an afternoon that still needs to end in sleep.",
      specs: ["Low caffeine", "Hot or iced", "Lightly sweetened"],
      c1: "#ecdcc8", c2: "#a5734a", cup: "#96623c", roast: "—", caffeine: "25mg"
    },
    {
      id: "yuzu-tonic", name: "Yuzu Espresso Tonic", price: "$6.75",
      cat: "seasonal", tag: "summer only",
      note: "Yuzu, tonic, espresso float.",
      desc: "Tonic over ice, a spoon of yuzu marmalade, espresso floated last so it sits in a stripe before you stir. Sharp, bittersweet, very awake.",
      specs: ["Carbonated", "Contains citrus peel", "Iced, 16oz"],
      c1: "#f4ecc8", c2: "#c9a63f", cup: "#d8b64a", roast: "light", caffeine: "130mg"
    },
    {
      id: "injeolmi", name: "Injeolmi Cream Latte", price: "$6.95",
      cat: "seasonal", tag: "cold months",
      note: "Roasted soybean powder, rice cake sweetness.",
      desc: "Built on injeolmi — the roasted soybean powder from Korean rice cakes — whisked into milk with espresso and a soft cream top. Tastes like a winter afternoon.",
      specs: ["Contains soy", "Hot or iced", "Seasonal, Nov–Feb"],
      c1: "#efe4cd", c2: "#c2a374", cup: "#b99a68", roast: "medium", caffeine: "150mg"
    },
    {
      id: "drip", name: "Pour Over of the Week", price: "$5.00",
      cat: "espresso", tag: "rotating",
      note: "One origin, brewed by hand, four minutes.",
      desc: "Whatever's singing on the shelf this week — usually a washed Ethiopian or a honey-process Colombian. We'll tell you what it tastes like before we make it.",
      specs: ["V60, 20g in / 320g out", "Black, please", "Hot, 12oz"],
      c1: "#e9e0d3", c2: "#9a7b5c", cup: "#7d5a3b", roast: "light", caffeine: "160mg"
    }
  ],

  /* ---- sample reviews -------------------------------------------------- */
  /* SAMPLE CONTENT — replace with real, permitted quotes before launch.     */
  reviews: [
    { name: "Jenna P.",  rating: 5, date: "2 weeks ago",  drink: "Ssum Signature Latte",
      text: "The signature latte is the reason I drive twenty minutes out of my way. Salted cream on top is not a gimmick — it actually balances the brown sugar. Staff remembered my order on visit two." },
    { name: "Marcus L.", rating: 5, date: "3 weeks ago",  drink: "Einspänner",
      text: "Finally an einspänner done properly — cream thick enough to hold up, cold brew underneath that isn't watered down. Quiet in the mornings, great light by the window seats." },
    { name: "Soo-Ah K.", rating: 4, date: "1 month ago",  drink: "Black Sesame Latte",
      text: "Black sesame latte tastes like home. Only knocking a star because parking gets rough around noon. The dog logo stickers are a nice touch, my kid collects them." },
    { name: "Dani R.",   rating: 5, date: "1 month ago",  drink: "Ceremonial Matcha",
      text: "They whisk the matcha to order instead of pulling it from a jug and you can taste the difference immediately. No bitterness, no chalky bottom." },
    { name: "Tommy V.",  rating: 5, date: "2 months ago", drink: "Dalgona Cloud",
      text: "Brought a friend who 'doesn't like coffee.' She ordered a dalgona cloud and then ordered a second one. Space is small but the vibe is calm and the wifi holds up." },
    { name: "Priya S.",  rating: 4, date: "2 months ago", drink: "Iced Americano",
      text: "Solid triple-shot americano, consistent every time. Would love a couple more outlets near the back bench, but that's my only note." },
    { name: "Alex H.",   rating: 5, date: "3 months ago", drink: "Pour Over of the Week",
      text: "Asked what the pour over tasted like and got an actual answer with actual enthusiasm. Washed Ethiopian that week — jasmine, no exaggeration. They care here." },
    { name: "Grace N.",  rating: 5, date: "3 months ago", drink: "Strawberry Ssum",
      text: "Real strawberries, not syrup. You can see the pieces at the bottom. My daughter calls it the puppy drink because of the cup sticker and now it's a weekend ritual." },
    { name: "Ben C.",    rating: 4, date: "4 months ago", drink: "Hojicha Latte",
      text: "Hojicha latte is the perfect 4pm drink — toasty, low caffeine, not too sweet. Gets busy on Saturdays so come early if you want a table." }
  ]
};

if (typeof window !== "undefined") window.SSUM = SSUM;
