// =====================================================
//  PORTFOLIO DATA — Edit this to update your portfolio
// =====================================================
const DATA = {
  hero: {
    name: "UKAH-COLUMBA CHINAZA HOWARD",
    subtitle: "Business Intelligence Analyst Professional-In-Training",
    bio: "An aspiring technologist and researcher with strong interests in artificial intelligence, data analysis, and software development. Building intelligent systems and digital solutions aimed at solving real-world problems and improving information accessibility.",
    photo: "profile p.jpeg",
    cv: "CV.pdf"
  },
  about: {
    para1: "Ukah-Columba Chinaza Howard is a B.Tech Information Technology student at Marwadi University, driven by a passion for building technology that makes a meaningful difference. His work spans web development, mobile applications, and machine learning — with a particular focus on intelligent systems that improve how people access and interact with information.",
    para2: "Beyond coursework, Howard actively pursues research in artificial intelligence and natural language processing, exploring how data-driven approaches can address civic challenges and enhance digital safety.",
    eduPeriod: "2022 — 2026",
    eduDegree: "BACHELOR OF TECHNOLOGY",
    eduSchool: "Marwadi University",
    focus: ["Artificial Intelligence & ML", "Civic Technology", "Data-Driven Systems", "Mobile & Web Development"]
  },
  skills: {
    languages: ["Kotlin", "Java", "Python", "JavaScript", "SQL"],
    frontend: ["Android", "HTML/CSS"],
    backend: ["Node.js", "Pandas", "NumPy", "NLP", "Machine Learning"],
    tools: ["Git", "Firebase"]
  },
  projects: [
    { title: "TOXIC SHIELD", desc: "A toxic content moderation system built using machine learning techniques to detect and filter harmful or abusive content online.", tags: ["MACHINE LEARNING", "NLP", "PYTHON"], color: "accent", link: "#", pdf: "POLYDUB_reasearch paper.pdf" },
    { title: "CIVIC FIX", desc: "A civic technology platform designed to help citizens report local infrastructure or community issues.", tags: ["CIVIC TECH", "WEB", "MOBILE"], color: "secondary", link: "#", pdf: "CIVICFIX.pdf" }
  ],
  research: [
    { title: "ARTIFICIAL INTELLIGENCE", desc: "Exploring ML models for classification, prediction, and intelligent automation in real-world applications.", color: "primary" },
    { title: "NATURAL LANGUAGE PROCESSING", desc: "Investigating text analysis, sentiment detection, and content moderation through computational linguistics.", color: "accent" },
    { title: "INTELLIGENT SYSTEMS", desc: "Designing adaptive systems that learn from user behavior to deliver personalized, context-aware experiences.", color: "secondary" },
    { title: "DATA-DRIVEN PLATFORMS", desc: "Building platforms that leverage data pipelines and analytics to enable informed decision-making at scale.", color: "pink" }
  ],
  contact: [
    { icon: "✉", label: "EMAIL", value: "howardukah@gmail.com", href: "mailto:howardukah@gmail.com" },
    { icon: "📞", label: "PHONE", value: "+234 8105531826", href: "tel:+2348105531826" },
    { icon: "⌨", label: "GITHUB", value: "Howardukah", href: "https://github.com/Howardukah" },
    { icon: "🔗", label: "LINKEDIN", value: "Howard Ukah", href: "https://www.linkedin.com/in/howard-ukah-237810269" }
  ]
};

// =====================================================
//  COLOR MAPS
// =====================================================
const COLOR_CSS = { primary: "var(--primary)", accent: "var(--accent)", secondary: "var(--secondary)", pink: "var(--pink)" };
const BORDER_CSS = { primary: "hsla(236,100%,72%,.3)", accent: "hsla(175,70%,45%,.3)", secondary: "hsla(270,60%,60%,.3)", pink: "hsla(330,70%,55%,.3)" };

// =====================================================
//  RENDERERS
// =====================================================
function renderAll() {
  document.getElementById('portfolio').innerHTML =
    renderHero() + renderAbout() + renderSkills() + renderProjects() + renderResearch() + renderContact();
}

function renderHero() {
  const h = DATA.hero;
  const parts = h.name.split(' ');
  const first = parts[0];
  const rest = parts.slice(1).join(' ');
  const cvFile = h.cv || 'CV.pdf';
  return `
  <section id="home" class="section hero">
    <div class="hero-inner">
      <div class="profile-wrap">
        <img src="${h.photo}" alt="${h.name} portrait" class="profile-img"/>
        <div class="profile-ring"></div>
      </div>
      <p class="hero-subtitle">${h.subtitle}</p>
      <h1><span class="grad-text">${first}</span><br><span>${rest}</span></h1>
      <p class="text-muted hero-desc">${h.bio}</p>
      <div class="btn-group">
        <div class="cv-btn-wrap">
          <button class="btn btn-primary" onclick="toggleCVDropdown(event)">⬇ DOWNLOAD CV</button>
          <div class="cv-dropdown" id="cvDropdown">
            <a href="${cvFile}" download>📄 Download CV (PDF)</a>
            <a href="${cvFile}" target="_blank" rel="noopener">🔗 Open in new tab</a>
          </div>
        </div>
        <a href="#contact" class="btn btn-outline">✉ CONTACT ME</a>
      </div>
    </div>
  </section>`;
}

function renderAbout() {
  const a = DATA.about;
  return `
  <section id="about" class="section">
    <div class="section-inner">
      <h2 class="section-title"><span class="grad-text">ABOUT</span></h2>
      <div class="section-bar" style="background:var(--grad-a)"></div>
      <div class="about-grid">
        <div>
          <p class="text-muted" style="margin-bottom:1.5rem">${a.para1}</p>
          <p class="text-muted">${a.para2}</p>
        </div>
        <div class="timeline">
          <div class="tl-item">
            <div class="tl-dot"></div>
            <p class="tl-date">${a.eduPeriod}</p>
            <h3 class="tl-title">${a.eduDegree}</h3>
            <p class="text-muted">Information Technology</p>
            <p class="text-muted" style="font-size:.75rem;margin-top:.25rem">${a.eduSchool}</p>
          </div>
          <div class="tl-item">
            <div class="tl-dot sec"></div>
            <p class="tl-date" style="color:var(--secondary)">FOCUS AREAS</p>
            <ul style="list-style:none;color:var(--muted-fg);font-size:.875rem">
              ${(a.focus || []).map(f => `<li>${f}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function renderSkills() {
  const s = DATA.skills;
  const cats = [
    { title: 'LANGUAGES', items: s.languages, col: 'primary' },
    { title: 'FRONTEND & MOBILE', items: s.frontend, col: 'accent' },
    { title: 'BACKEND & DATA', items: s.backend, col: 'secondary' },
    { title: 'TOOLS & DEVOPS', items: s.tools, col: 'pink' }
  ];

  const html = cats.map((cat, i) => {
    const side = i % 2 === 0 ? 'left' : 'right';
    return `
      <div class="stl-item ${side}">
        <div class="stl-dot" style="background:var(--${cat.col})"></div>
        <p class="tl-date" style="color:var(--${cat.col});margin-bottom:.75rem">${cat.title}</p>
        <ul style="list-style:none;color:var(--muted-fg);font-size:.875rem;line-height:1.8">
          ${cat.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    `;
  }).join('');

  return `
  <section id="skills" class="section">
    <div class="section-inner">
      <h2 class="section-title"><span class="grad-text">SKILLS</span></h2>
      <div class="section-bar" style="background:var(--grad-p)"></div>
      <div class="skills-timeline-wrap">
        <div class="skills-timeline">
          ${html}
        </div>
      </div>
    </div>
  </section>`;
}

function renderProjects() {
  const cards = DATA.projects.map(p => `
    <div class="project-card" style="border-color:${BORDER_CSS[p.color] || BORDER_CSS.primary}">
      <div class="proj-header">
        <h3 style="font-size:1.125rem;font-weight:600;color:${COLOR_CSS[p.color] || COLOR_CSS.primary}">${p.title}</h3>
        ${p.pdf
      ? `<button onclick="openPDF('${p.pdf}','${p.title} \u2014 REPORT')" style="background:none;border:1px solid ${BORDER_CSS[p.color] || BORDER_CSS.primary};color:${COLOR_CSS[p.color] || COLOR_CSS.primary};border-radius:.375rem;padding:.25rem .625rem;font-family:var(--fh);font-size:.55rem;letter-spacing:.1em;cursor:pointer">VIEW REPORT \u2197</button>`
      : p.link && p.link !== '#' ? `<a href="${p.link}" target="_blank" rel="noopener" style="color:var(--primary)">&#x2197;</a>` : ''
    }
      </div>
      <div class="proj-tags">${(p.tags || []).map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <p class="text-muted">${p.desc}</p>
    </div>`).join('');
  return `
  <section id="projects" class="section">
    <div class="section-inner">
      <h2 class="section-title"><span class="grad-text">PROJECTS</span></h2>
      <div class="section-bar" style="background:var(--grad-p)"></div>
      <div class="projects-grid">${cards}</div>
      <div class="ongoing-card">
        <h3 class="cpk" style="font-size:.875rem;font-weight:600;margin-bottom:.5rem">ONGOING RESEARCH PROJECTS</h3>
        <p class="text-muted">Additional experimental projects in intelligent systems and data-driven platforms are currently in development.</p>
      </div>
    </div>
  </section>`;
}

function renderResearch() {
  const cards = DATA.research.map(r => `
    <div class="research-card">
      <h3 style="font-size:.75rem;letter-spacing:.2em;margin-bottom:.75rem;color:${COLOR_CSS[r.color] || COLOR_CSS.primary}">${r.title}</h3>
      <p class="text-muted">${r.desc}</p>
    </div>`).join('');
  return `
  <section id="research" class="section">
    <div class="section-inner">
      <h2 class="section-title"><span class="grad-text">RESEARCH</span></h2>
      <div class="section-bar" style="background:var(--grad-a)"></div>
      <p class="text-muted" style="max-width:500px;margin-bottom:3rem">Active and forthcoming research interests. Publications and preprints will be listed here as they become available.</p>
      <div class="research-grid">${cards}</div>
    </div>
  </section>`;
}

function renderContact() {
  const cards = DATA.contact.map(c => `
    <a href="${c.href}" class="contact-card" target="_blank" rel="noopener">
      <span style="font-size:1.25rem">${c.icon}</span>
      <div>
        <p class="contact-label">${c.label}</p>
        <p class="text-muted">${c.value}</p>
      </div>
    </a>`).join('');
  return `
  <section id="contact" class="section">
    <div class="section-inner">
      <h2 class="section-title"><span class="grad-text">CONTACT</span></h2>
      <div class="section-bar" style="background:var(--grad-w)"></div>
      <div class="contact-grid">${cards}</div>
      <div class="footer"><p>© 2025 Ukah-Columba Chinaza Howard</p></div>
    </div>
  </section>`;
}

// =====================================================
//  CV DROPDOWN
// =====================================================
function toggleCVDropdown(e) {
  e.stopPropagation();
  document.getElementById('cvDropdown').classList.toggle('open');
}
document.addEventListener('click', () => {
  const dd = document.getElementById('cvDropdown');
  if (dd) dd.classList.remove('open');
});

// =====================================================
//  PDF VIEWER (PDF.js)
// =====================================================
let pdfDoc = null, pdfPage = 1, pdfRendering = false;

async function openPDF(src, title) {
  document.getElementById('pdfTitle').textContent = title || 'DOCUMENT VIEWER';
  document.getElementById('pdfOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
  document.getElementById('pdfPageInfo').textContent = 'LOADING…';
  document.getElementById('pdfPrev').disabled = true;
  document.getElementById('pdfNext').disabled = true;

  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';

  try {
    const encodedSrc = src.startsWith('http') ? src : encodeURIComponent(src).replace(/%2F/g, '/');
    pdfDoc = await pdfjsLib.getDocument(encodedSrc).promise;
    pdfPage = 1;
    await renderPDFPage(pdfPage);
  } catch (e) {
    document.getElementById('pdfPageInfo').textContent = 'ERROR';
    console.error('PDF load failed:', e);
  }
}

async function renderPDFPage(num) {
  if (pdfRendering) return;
  pdfRendering = true;
  const page = await pdfDoc.getPage(num);
  const container = document.getElementById('pdfContainer');
  const scale = Math.min((container.clientWidth - 48) / page.getViewport({ scale: 1 }).width, 2);
  const viewport = page.getViewport({ scale });
  const canvas = document.getElementById('pdfCanvas');
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
  pdfRendering = false;
  document.getElementById('pdfPageInfo').textContent = `${num} / ${pdfDoc.numPages}`;
  document.getElementById('pdfPrev').disabled = num <= 1;
  document.getElementById('pdfNext').disabled = num >= pdfDoc.numPages;
  document.getElementById('pdfContainer').scrollTop = 0;
}

function pdfPrevPage() { if (pdfPage > 1) renderPDFPage(--pdfPage); }
function pdfNextPage() { if (pdfDoc && pdfPage < pdfDoc.numPages) renderPDFPage(++pdfPage); }

function closePDF() {
  document.getElementById('pdfOverlay').classList.remove('show');
  document.body.style.overflow = '';
  pdfDoc = null; pdfPage = 1;
  const canvas = document.getElementById('pdfCanvas');
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
}

// =====================================================
//  INIT — script is at bottom of body so DOM is ready
// =====================================================
try {
  renderAll();

  // Force top scroll on load/refresh
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);
  if (window.location.hash) {
    window.history.replaceState('', document.title, window.location.pathname + window.location.search);
  }

  // Active Navigation Highlight
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-links a');

  function updateNav() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateNav);
  updateNav(); // initialize

} catch (e) {
  console.error('renderAll failed:', e);
}

// Disable right-click on PDF canvas
const _canvas = document.getElementById('pdfCanvas');
if (_canvas) _canvas.addEventListener('contextmenu', e => e.preventDefault());

document.addEventListener('keydown', e => { if (e.key === 'Escape') closePDF(); });

