document.addEventListener("DOMContentLoaded", () => {
  const words = ["AMBIENTE", "ESTRUTURA", "PROFESSORES", "TREINOS", "RESULTADOS","MOTIVAÇÃO"];
  const el = document.querySelector("#word");
  if (!el) return;

  let i = 0;
  let timer = null;
  let running = false;

  function renderWord(word) {
    el.innerHTML = "";
    [...word].forEach((ch) => {
      const span = document.createElement("span");
      span.className = "char";
      span.textContent = ch;
      el.appendChild(span);
    });
  }

  // palavra inicial
  renderWord(words[i]);

  // entrada suave ao carregar
  if (typeof gsap !== "undefined") {
    gsap.fromTo(
      el.querySelectorAll(".char"),
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }

  function flipToNext() {
    const currentChars = el.querySelectorAll(".char");

    gsap.to(currentChars, {
      y: -14,
      rotateX: 90,
      opacity: 0,
      duration: 0.28,
      ease: "power2.in",
      onComplete: () => {
        i = (i + 1) % words.length;
        renderWord(words[i]);

        const nextChars = el.querySelectorAll(".char");
        gsap.set(nextChars, { y: 14, rotateX: -90, opacity: 0 });

        gsap.to(nextChars, {
          y: 0,
          rotateX: 0,
          opacity: 1,
          duration: 0.34,
          ease: "power2.out",
        });
      },
    });
  }

  function start() {
    if (running) return;
    running = true;

    // começa com atraso (mais suave)
    timer = setInterval(flipToNext, 1800);
  }

  function stop() {
    running = false;
    if (timer) clearInterval(timer);
    timer = null;
  }

  // Começa suave após 1.2s
  setTimeout(start, 1200);

  // Pausa/retoma quando o hero sai/entra na tela (suaviza muito ao navegar)
  const hero = document.querySelector("#topo");
  if (hero && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries[0]?.isIntersecting;
        if (visible) {
          // dá um respiro antes de voltar a trocar
          stop();
          setTimeout(start, 700);
        } else {
          stop();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(hero);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector(".hero-character");
  if (!img || typeof gsap === "undefined") return;

  gsap.fromTo(
    img,
    { opacity: 0, y: 40, scale: 0.96 },
    { opacity: 1, y: 0, scale: 1, duration: 1.0, ease: "power3.out", delay: 0.2 }
  );
});
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat-number");

  function formatValue(el, value) {
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";

    // caso especial: "49" virar "4,9/5"
    if (suffix === "/5") {
      const v = (value / 10).toFixed(1).replace(".", ",");
      return `${prefix}${v}${suffix}`;
    }

    return `${prefix}${value.toLocaleString("pt-BR")}${suffix}`;
  }

  function animateCount(el, to, duration = 1200) {
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const value = Math.floor(to * eased);

      el.textContent = formatValue(el, value);

      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      if (el.dataset.done === "1") return;
      el.dataset.done = "1";

      const to = Number(el.dataset.to || "0");
      animateCount(el, to, 1200);
    });
  }, { threshold: 0.4 });

  counters.forEach((c) => io.observe(c));
});
// script.js — animação SOMENTE da seção "Sobre nós" (SEM parallax no mouse)
document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const about = document.querySelector(".about");
  if (!about) return;

  const mainImg = about.querySelector(".about-img-main");
  const video = about.querySelector(".about-video");
  const offer = about.querySelector(".offer-card");
  const play = about.querySelector(".play");
  const text = about.querySelector(".about-text");

  ScrollTrigger.create({
    trigger: about,
    start: "top 75%",
    once: true,
    onEnter: () => {
      if (reduceMotion) return;

      // Timeline de entrada
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (mainImg) tl.from(mainImg, { x: 20, y: 20, opacity: 0, duration: 0.6 }, 0);
      if (video)   tl.from(video,   { x: -20, y: 20, opacity: 0, duration: 0.6 }, 0.1);
      if (offer)   tl.from(offer,   { y: -16, opacity: 0, duration: 0.5 }, 0.15);
      if (text)    tl.from(text,    { x: 24, opacity: 0, duration: 0.6 }, 0.05);

      // Pulse no botão play
      if (play) {
        gsap.to(play, {
          scale: 1.08,
          duration: 0.9,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1
        });
      }

      // “Levitando” o card vermelho (bem leve)
      if (offer) {
        gsap.to(offer, {
          y: -4,
          duration: 1.6,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1
        });
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector("#openVideo");
  const modal = document.querySelector("#videoModal");
  const frame = document.querySelector("#videoFrame");

  if (!openBtn || !modal || !frame) return;

  function openModal() {
    const url = openBtn.dataset.video;
    frame.src = url; // carrega e toca
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // trava scroll
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    frame.src = ""; // para o vídeo
    document.body.style.overflow = ""; // destrava scroll
  }

  openBtn.addEventListener("click", openModal);

  // Fecha clicando no fundo ou no X
  modal.addEventListener("click", (e) => {
    if (e.target.matches("[data-close]")) closeModal();
  });

  // Fecha com ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown");
  if (!dropdown) return;

  const btn = dropdown.querySelector(".dropdown-btn");

  function open() {
    dropdown.classList.add("is-open");
    btn.setAttribute("aria-expanded", "true");
  }
  function close() {
    dropdown.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
  }

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.contains("is-open") ? close() : open();
  });

  // clicar fora fecha
  document.addEventListener("click", close);

  // apertar ESC fecha
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  // ao clicar em um item, fecha (e ainda desce suave por causa do scroll-behavior)
  dropdown.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", close);
  });
});
// ── Adicione este bloco no seu script.js ──────────────────────
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("navToggle");
  const menu   = document.getElementById("mobileMenu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open);
    menu.setAttribute("aria-hidden", !open);
  });

  // fecha ao clicar em qualquer link do drawer
  menu.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", false);
      menu.setAttribute("aria-hidden", true);
    });
  });
});