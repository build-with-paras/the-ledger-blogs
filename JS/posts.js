// One place for all post data — edit this array, not HTML, to add/change posts.
const posts = [
  {
    index: "01",
    title: "The Silent Evolution of Local Web Infrastructure",
    excerpt: "Why modern engineering teams are trading bulky monolithic architectures for lean, edge-first deployment pipelines.",
    author: "Sarah Jenkins",
    date: "July 14, 2026",
    topic: "Engineering",
    url: "./Blogs/silent-evolution-of-local-web-infrastructure.html",
    wordCount: 214 // real count from the actual article body
  },
  {
    index: "02",
    title: "Why Upcoming Townships in Bangalore Are Shaping Modern Urban Living",
    excerpt: "Discover key factors to evaluate upcoming Bangalore townships for smarter property decisions, long-term value, and modern living.",
    author: "Abhinav Sinha",
    date: "July 22, 2026",
    topic: "Real Estate",
    url: "./Blogs/why-upcoming-townships-in-bangalore-are-shaping-modern-urban-living.html",
    wordCount: 221
  },
  {
    index: "03",
    title: "How to Choose the Right Real Estate Builder in Bangalore for Long-Term Value",
    excerpt: "Discover essential tips for choosing a reliable real estate builder in Bangalore with confidence and clarity.",
    author: "Abhinav Sinha",
    date: "July 23, 2026",
    topic: "Real Estate",
    url: "./Blogs/how-to-choose-the-right-real-estate-builder-in-bangalore-for-long-term-value.html",
    wordCount: 215
  },
  {
    index: "04",
    title: "Understanding the Early Signs of Endometriosis: Symptoms Every Woman Should Know",
    excerpt: "Recognise symptoms early, understand diagnosis options, and support better reproductive health through timely medical evaluation.",
    author: "Abhinav Sinha",
    date: "July 22, 2026",
    topic: "Healthcare",
    url: "./Blogs/understanding-the-early-signs-of-endometriosis-symptoms-every-woman-should-know.html",
    wordCount: 656
  },
  {
    index: "05",
    title: "Understanding Robotic Cataract in Chennai for Better Vision Care",
    excerpt: "Understand robotic cataract surgery, its benefits, recovery process, and informed treatment decisions for clearer vision.",
    author: "Abhinav Sinha",
    date: "July 30, 2026",
    topic: "Healthcare",
    url: "./Blogs/understanding-robotic-cataract-in-chennai-for-better-vision-care.html",
    wordCount: 215
  }
];

// IMPORTANT: replace these wordCount numbers with real counts from each
// article. Quick way: paste the article body into wordcounter.net, or
// run this in your terminal per file: `wc -w Blogs/filename.html`
// (that'll overcount slightly since it includes HTML tags, but gets you close).