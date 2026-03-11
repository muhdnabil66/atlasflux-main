// script.js
// Initialize EmailJS
emailjs.init("FYRViqFN2k-AxknhK");

// ========== Single Page Navigation with Smooth Scroll ==========
const mainContent = document.getElementById("main-content");
const policyContent = document.getElementById("policy-content");
const policyText = document.getElementById("policy-text");

// Store scroll position when leaving home
let homeScrollPosition = 0;

// Content for each page (same as before)
const pages = {
  about: `
        <h1>About AtlasFlux</h1>
        <h2>The Architecture of Next-Generation Intelligence</h2>
        <p>AtlasFlux is a sophisticated digital ecosystem engineered to redefine the intersection of Artificial Intelligence and technical education. Founded as a high-performance technological project, AtlasFlux operates as a unified hub for innovation, providing users with the tools necessary to navigate the rapidly evolving landscape of 2026.</p>
        <p>Our infrastructure is built upon two core pillars:</p>
        <ul>
            <li><strong>AtlasFlux AI (ai.atlasflux.my):</strong> A high-fidelity interface designed to harness the power of frontier AI models, including OpenAI GPT-5.4 Pro, Claude 4.6 Opus, Deepseek R1 and many more. It provides a seamless environment for complex problem-solving and creative generation.</li>
            <li><strong>AtlasFlux Academy (learn.atlasflux.my):</strong> A gamified learning platform focused on technical mastery. By implementing XP-based progression and real-time leaderboards, we transform the educational journey into an engaging, high-growth experience.</li>
        </ul>
        <p>AtlasFlux is not merely a website; it is an ongoing engineering endeavor. By integrating industry-standard technologies such as Clerk for identity management, and a robust dual-database architecture using Supabase and Neon, we ensure that our users experience world-class performance and security in every session.</p>
    `,
  terms: `
        <h1>Terms of Service</h1>
        <h2>1. Agreement to Terms</h2>
        <p>By accessing atlasflux.my and its subdomains, you agree to be bound by these Terms of Service. These terms govern your use of the AtlasFlux ecosystem and all associated services.</p>
        <h2>2. Daily Credit System</h2>
        <p>AtlasFlux operates on a proprietary Daily Credit System. Users are allocated a specific quota of credits every 24 hours to access AI services. Credits are non-transferable and do not have any monetary value. AtlasFlux reserves the right to adjust daily credit allocations, reset quotas, or limit access to services to maintain system stability and fair usage. There are no financial transactions or paid subscriptions facilitated through this platform.</p>
        <h2>3. User Conduct and Account Security</h2>
        <p>Authentication is managed via Clerk. You are responsible for maintaining the security of your account. Any attempt to exploit the credit system, reverse-engineer the API calls, or bypass the daily limits will result in immediate termination of access.</p>
        <h2>4. Service Availability</h2>
        <p>As a project in active development, AtlasFlux does not guarantee 100% uptime. Services may be interrupted for maintenance, system updates, or API provider outages.</p>
    `,
  privacy: `
        <h1>Privacy Policy</h1>
        <h2>1. Data Governance</h2>
        <p>In alignment with the Personal Data Protection Act (PDPA) 2010 of Malaysia, AtlasFlux is committed to the ethical handling of user data. We prioritize transparency in how your information is stored and processed.</p>
        <h2>2. Data Infrastructure & Storage</h2>
        <p>Your data is managed through a multi-layered cloud infrastructure: Identity Management is managed by Clerk, ensuring your login credentials never touch our local servers. Database Management utilizes Supabase and Neon for high-performance data storage. Security is enforced through Supabase Row Level Security (RLS) to ensure that your data is logically isolated and accessible only by you.</p>
        <h2>3. Information We Collect</h2>
        <p>We collect minimal data required for service functionality: email addresses for account identification and metadata related to your usage of the Daily Credit System.</p>
        <h2>4. Data Retention</h2>
        <p>AtlasFlux retains data only as long as necessary to provide the services. You have the right to request the deletion of your account and associated data at any time through our support channels.</p>
    `,
  disclaimer: `
        <h1>Disclaimer</h1>
        <h2>Artificial Intelligence Content Disclosure</h2>
        <p>All content generated, outputted, or displayed through AtlasFlux AI (ai.atlasflux.my) and AtlasFlux Academy (learn.atlasflux.my) is produced by Artificial Intelligence algorithms.</p>
        <h2>1. Accuracy of Information</h2>
        <p>While we utilize the most advanced AI models available in 2026, the technology is prone to "hallucinations" or providing outdated and incorrect information. AtlasFlux makes no guarantees regarding the absolute accuracy, completeness, or reliability of any AI-generated content.</p>
        <h2>2. User Responsibility</h2>
        <p>The use of any information provided by AtlasFlux is solely at your own risk. It is the responsibility of the user to cross-reference and verify any critical data, especially in technical, legal, or financial contexts.</p>
        <h2>3. No Professional Advice</h2>
        <p>Content provided is for informational and educational purposes only. It does not constitute professional advice. AtlasFlux shall not be held liable for any loss, damage, or consequence resulting from decisions made based on AI-generated outputs.</p>
    `,
  cookie: `
        <h1>Cookie Policy</h1>
        <h2>1. Use of Cookies</h2>
        <p>AtlasFlux uses cookies and similar tracking technologies to enhance your browsing experience and maintain your session across our subdomains.</p>
        <h2>2. Category of Cookies</h2>
        <ul>
            <li><strong>Necessary Cookies:</strong> These are essential for the operation of our site, specifically for Clerk authentication and maintaining your secure login state.</li>
            <li><strong>Functional Cookies:</strong> These allow the system to remember your preferences, such as your progress in AtlasFlux Academy or your remaining daily AI credits.</li>
            <li><strong>Analytical Cookies:</strong> Used to monitor system performance and identify technical bottlenecks in our Neon/Supabase database calls.</li>
        </ul>
        <h2>3. Managing Cookies</h2>
        <p>You can choose to disable cookies through your browser settings; however, doing so will prevent you from logging in and accessing the core features of the AtlasFlux ecosystem.</p>
    `,
  legal: `
        <h1>Legal & Compliance</h1>
        <h2>Technological Compliance & Status</h2>
        <p>AtlasFlux is a non-commercial technological entity dedicated to research and development in the field of AI and education.</p>
        <ul>
            <li><strong>Entity Status:</strong> AtlasFlux is not a registered business entity under the Companies Commission of Malaysia (SSM) and does not engage in commercial trading or the sale of services.</li>
            <li><strong>Intellectual Property:</strong> All original code, UI designs, and the "AtlasFlux" brand identity are protected. Users may not reproduce or distribute any part of the platform without explicit permission.</li>
            <li><strong>Regulatory Compliance:</strong> We strive to adhere to the Communications and Multimedia Act 1998 (Malaysia), ensuring our platform remains a safe and ethical space for digital innovation.</li>
        </ul>
    `,
  systems: `
        <h1>Systems Update</h1>
        <p>We continuously improve our systems to provide better service. Check here for the latest updates, maintenance schedules, and new features.</p>
        <p><strong>Current Status:</strong> All systems operational. Supabase RLS fully implemented, Neon database optimized.</p>
        <p>Last update: March 2025</p>
    `,
  faq: `
        <h1>Frequently Asked Questions</h1>
        <p><strong>Q: How do I access AI tools?</strong><br>A: Visit ai.atlasflux.my and learn.atlasflux.my to sign up for free.</p>
        <p><strong>Q: Are coding tutorials free?</strong><br>A: Yes, all tutorials are free. No subscription needed.</p>
        <p><strong>Q: What is the Daily Credit System?</strong><br>A: Users receive a daily quota of credits to use AI services. Credits reset every 24 hours and are non-transferable.</p>
        <p><strong>Q: How do I delete my account?</strong><br>A: Contact support via email and we'll assist you.</p>
    `,
  contact: `
        <h1>Contact Us</h1>
        <h2>Administrative and Technical Inquiries</h2>
        <p>For support regarding your account, technical feedback, or legal notices, please contact our administrative team.</p>
        <p><strong>Primary Email:</strong> support.atlasflux@gmail.com</p>
        <p><strong>System Status:</strong> Updates regarding Supabase RLS implementation and Neon database status can be found on our main landing page.</p>
        <h3>Digital Ecosystem:</h3>
        <ul>
            <li>Main Portal: <a href="https://atlasflux.my" target="_blank" style="color:#fff;">atlasflux.my</a></li>
            <li>AI Research: <a href="https://ai.atlasflux.my" target="_blank" style="color:#fff;">ai.atlasflux.my</a></li>
            <li>Academy: <a href="https://learn.atlasflux.my" target="_blank" style="color:#fff;">learn.atlasflux.my</a></li>
        </ul>
        <div style="margin-top: 40px;">
            <p>Or send us a message directly:</p>
            <form id="contact-form">
                <label for="name">Full name</label>
                <input type="text" name="from_name" id="name" required>
                
                <label for="email">Email address</label>
                <input type="email" name="user_email" id="email" required>
                
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="5" required></textarea>
                
                <button type="submit" id="submit-btn">Send Message</button>
            </form>
        </div>
    `,
};

function showPage(pageId) {
  // Save scroll position before leaving home
  if (mainContent.style.display !== "none") {
    homeScrollPosition = window.scrollY;
  }
  mainContent.style.display = "none";
  policyContent.style.display = "block";
  policyText.innerHTML = pages[pageId] || "<h1>Page not found</h1>";
  history.pushState({ page: pageId }, "", `/${pageId}`);
  // Update active class
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.dataset.page === pageId) link.classList.add("active");
  });
  // Smooth scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
  // If contact page, attach form handler
  if (pageId === "contact") {
    attachContactForm();
  }
}

function showHome() {
  mainContent.style.display = "block";
  policyContent.style.display = "none";
  history.pushState({ page: "home" }, "", "/");
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.dataset.page === "home") link.classList.add("active");
  });
  // Smooth scroll to saved position
  window.scrollTo({ top: homeScrollPosition, behavior: "smooth" });
  // Re-run scroll animations
  animateOnScroll();
}

// Contact form handler
function attachContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById("submit-btn");
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    try {
      const result = await emailjs.sendForm(
        "service_xkpkpeg",
        "template_2klhh0g",
        form,
        "FYRViqFN2k-AxknhK",
      );
      if (result.text === "OK") {
        // Show success modal
        showSuccessModal();
        form.reset();
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    }
  });
}

function showSuccessModal() {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.style.display = "flex";
  modal.innerHTML = `
        <div style="background: #111; border: 1px solid #333; border-radius: 20px; padding: 30px; max-width: 400px; text-align: center;">
            <div style="width: 60px; height: 60px; background: #00aa00; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                <i class="fas fa-check" style="font-size: 30px; color: white;"></i>
            </div>
            <h3 style="margin-bottom: 10px;">Message Sent!</h3>
            <p style="color: #aaa; margin-bottom: 20px;">You will receive an auto-reply shortly. We'll get back to you as soon as possible.</p>
            <p style="color: #666;">Redirecting to homepage...</p>
        </div>
    `;
  document.body.appendChild(modal);
  setTimeout(() => {
    modal.remove();
    showHome();
  }, 2500);
}

// Event listeners for all links with data-page
document.querySelectorAll("[data-page]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = link.dataset.page;
    if (page === "home") {
      showHome();
    } else {
      showPage(page);
    }
  });
});

// Back button
document.getElementById("back-to-main").addEventListener("click", (e) => {
  e.preventDefault();
  showHome();
});

// Handle browser back/forward with smooth scroll
window.addEventListener("popstate", (event) => {
  if (event.state && event.state.page) {
    if (event.state.page === "home") {
      showHome();
    } else {
      showPage(event.state.page);
    }
  } else {
    showHome();
  }
});

// Navbar background on scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle (slide down)
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Intersection Observer for scroll animations (both ways)
function animateOnScroll() {
  const animatedElements = document.querySelectorAll(
    ".animate-on-scroll, .slide-left, .slide-right",
  );
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.2, rootMargin: "0px" },
  );
  animatedElements.forEach((el) => observer.observe(el));
}
animateOnScroll();

// ========== Flip Card Observer (70% threshold) ==========
const flipCard = document.getElementById("flipCard");
if (flipCard) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          flipCard.classList.add("flipped");
        } else {
          flipCard.classList.remove("flipped");
        }
      });
    },
    { threshold: 0.7 },
  );
  observer.observe(flipCard);
}

// ========== Rotating Hero Phrases (slide right) ==========
const phrases = document.querySelectorAll(".rotating-phrase");
let currentIndex = 0;

// Initially set the first phrase as active (it already has class 'active')
function rotatePhrase() {
  phrases[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % phrases.length;
  phrases[currentIndex].classList.add("active");
}

// Start rotation every 6 seconds (matches keyframe duration)
setInterval(rotatePhrase, 6000);

// ========== Cookie Consent ==========
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "; expires=" + date.toUTCString();
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

const cookieBanner = document.getElementById("cookie-banner");
const acceptBtn = document.getElementById("cookie-accept");
const rejectBtn = document.getElementById("cookie-reject");

// Show banner if no consent cookie
if (cookieBanner && !getCookie("cookieConsent")) {
  cookieBanner.style.display = "block";
}

if (acceptBtn) {
  acceptBtn.addEventListener("click", () => {
    setCookie("cookieConsent", "accepted", 365);
    cookieBanner.style.display = "none";
  });
}

if (rejectBtn) {
  rejectBtn.addEventListener("click", () => {
    setCookie("cookieConsent", "rejected", 365);
    cookieBanner.style.display = "none";
  });
}

// Make links inside banner work with SPA
document.querySelectorAll("#cookie-banner a[data-page]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = link.dataset.page;
    showPage(page);
  });
});
