// Reading time: 200 words/minute is the standard estimate used industry-wide.
function calculateReadingTime(wordCount) {
  const wordsPerMinute = 200;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Builds one post card's HTML from a post object.
// Using a template literal (Part 5's ES6 feature) to insert data cleanly.
function createPostCard(post, indexInList) {
  const thumbClasses = ["", "alt", "alt2"]; // rotates thumbnail colors like your original design
  const thumbClass = thumbClasses[indexInList % thumbClasses.length];
  const readingTime = calculateReadingTime(post.wordCount);

  const card = document.createElement("a");
  card.className = "post";
  card.href = post.url;
  card.dataset.topic = post.topic; // used by the filter below

  card.innerHTML = `
    <div class="post-index">${post.index}</div>
    <div class="post-body">
      <div class="post-meta">
        ${post.author} <span class="dot">&middot;</span> ${post.date}
        <span class="dot">&middot;</span> ${readingTime} min read
      </div>
      <h2>${post.title}</h2>
      <p class="excerpt">${post.excerpt}</p>
      <span class="post-tag">${post.topic}</span>
    </div>
    <div class="post-thumb ${thumbClass}"></div>
  `;
  return card;
}

// Renders posts into the page, optionally filtered by topic.
function renderPosts(filterTopic = "All") {
  const feed = document.querySelector(".feed");
  feed.innerHTML = ""; // clear whatever's currently shown

  const postsToShow = filterTopic === "All"
    ? posts
    : posts.filter(post => post.topic === filterTopic);

  if (postsToShow.length === 0) {
    feed.innerHTML = `<p style="color: var(--ink-soft);">No posts in this topic yet.</p>`;
    return;
  }

  postsToShow.forEach((post, i) => {
    feed.appendChild(createPostCard(post, i));
  });
}

// Wires up the topic links in the sidebar to actually filter.
function setupTopicFilters() {
  const topicLinks = document.querySelectorAll(".topics a");
  topicLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // stops the # link from jumping the page
      const topic = link.textContent.trim();
      renderPosts(topic);

      // visually mark the active filter
      topicLinks.forEach(l => l.style.borderColor = "var(--line)");
      link.style.borderColor = "var(--navy)";
    });
  });
}

// Fixes the vanishing mobile nav: adds a toggle button under 760px width.
function setupMobileNav() {
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelector(".nav-links");

  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Menu";
  toggleBtn.className = "mobile-nav-toggle";
  toggleBtn.style.display = "none"; // shown only on mobile via the CSS below
  nav.appendChild(toggleBtn);

  toggleBtn.addEventListener("click", function () {
    const isOpen = navLinks.style.display === "flex";
    navLinks.style.display = isOpen ? "none" : "flex";
  });
}

// Run everything once the page's HTML is fully loaded.
document.addEventListener("DOMContentLoaded", function () {
  renderPosts();
  setupTopicFilters();
  setupMobileNav();
});