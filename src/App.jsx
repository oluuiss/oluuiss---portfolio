import { Fragment, useEffect, useRef, useState } from 'react';
import './styles/global.css';
import { DEFAULT_LANGUAGE, SITE_LANGUAGES, TEXTS } from './i18n';

function useReveal() {
  const ref = useRef(null);

  const [shown, setShown] = useState(() => typeof IntersectionObserver === 'undefined');

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  return [ref, shown];
}

function Reveal({ children, tag: Tag = 'div', className = '', delay = 0, title }) {
  const [ref, shown] = useReveal();
  return (
    <Tag
      ref={ref}
      title={title}
      className={`reveal${shown ? ' is-visible' : ''}${className ? ' ' + className : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

const typedNodes = new Set();
const lastTyped = new WeakMap();
const typedProgress = new WeakMap();
let rafPending = false;

function resetTyped() {
  for (const el of typedNodes) {
    typedProgress.delete(el);
    lastTyped.delete(el);
  }
  scheduleTyped();
}

function paintTyped() {
  rafPending = false;
  const alturaTela = window.innerHeight;
  const linhaInicial = alturaTela * 0.92;
  const restante = Math.max(
    0,
    document.documentElement.scrollHeight - window.scrollY - alturaTela
  );

  for (const el of typedNodes) {
    const rect = el.getBoundingClientRect();
    const percurso = Math.max(alturaTela * 0.45, rect.height * 0.85);
    const folga = Math.max(0, percurso - restante);
    const bruto = (linhaInicial - rect.top + folga) / percurso;

    const anterior = typedProgress.get(el) || 0;
    const atual = Math.max(anterior, Math.min(1, Math.max(0, bruto)));
    if (atual !== anterior) typedProgress.set(el, atual);

    const v = atual >= 1 ? '1' : atual.toFixed(3);
    if (lastTyped.get(el) === v) continue;
    lastTyped.set(el, v);
    el.style.setProperty('--typed', v);
  }
}

function scheduleTyped() {
  if (!rafPending) {
    rafPending = true;
    requestAnimationFrame(paintTyped);
  }
}

function registerTyped(el) {
  if (typedNodes.size === 0) {
    addEventListener('scroll', scheduleTyped, { passive: true });
    addEventListener('resize', scheduleTyped);
  }
  typedNodes.add(el);
  scheduleTyped();
}

function unregisterTyped(el) {
  typedNodes.delete(el);
  typedProgress.delete(el);
  lastTyped.delete(el);
  if (typedNodes.size === 0) {
    removeEventListener('scroll', scheduleTyped);
    removeEventListener('resize', scheduleTyped);
  }
}

function ScrollTyped({ children, tag: Tag = 'p', className = '' }) {
  const ref = useRef(null);
  const chars = [...String(children)];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    registerTyped(el);
    return () => unregisterTyped(el);
  }, []);

  return (
    <Tag
      ref={ref}
      data-n={chars.length}
      className={`scroll-typed${className ? ' ' + className : ''}`}
      style={{ '--n': chars.length }}
    >
      {chars.map((c, i) => (
        <span key={i} style={{ '--i': i }}>
          {c}
        </span>
      ))}
    </Tag>
  );
}

const GitHubIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" {...p}>
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58l-.01-2.05c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.24-.12-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.24a11.5 11.5 0 0 1 6.01 0c2.29-1.56 3.3-1.24 3.3-1.24.66 1.65.24 2.87.12 3.18.77.85 1.24 1.92 1.24 3.24 0 4.63-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
  </svg>
);

const LinkedInIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" {...p}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const MailIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" {...p}>
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const DocIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" {...p}>
    <path d="M14 2.5H7.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V7z" />
    <path d="M14 2.5V7h4.5" />
    <path d="M9 12.5h6M9 16h4" />
  </svg>
);

const CloseIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" width="26" height="26" {...p}>
    <path d="M6 6 18 18M18 6 6 18" />
  </svg>
);

const ThemeIcon = () => (
  <svg className="theme-icon" viewBox="0 0 24 24" width="20" height="20">
    <mask id="moon-cut">
      <circle cx="12" cy="12" r="10" fill="white" />
      <circle className="theme-bite" cx="20.5" cy="7.5" r="8.2" fill="black" />
    </mask>
    <circle className="theme-orb" cx="12" cy="12" r="9" fill="currentColor" mask="url(#moon-cut)" />
    <g className="theme-rays" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="12" y1="1.4" x2="12" y2="3.6" />
      <line x1="12" y1="20.4" x2="12" y2="22.6" />
      <line x1="1.4" y1="12" x2="3.6" y2="12" />
      <line x1="20.4" y1="12" x2="22.6" y2="12" />
      <line x1="4.5" y1="4.5" x2="6.1" y2="6.1" />
      <line x1="17.9" y1="17.9" x2="19.5" y2="19.5" />
      <line x1="4.5" y1="19.5" x2="6.1" y2="17.9" />
      <line x1="17.9" y1="6.1" x2="19.5" y2="4.5" />
    </g>
  </svg>
);

const InstagramIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20" {...p}>
    <rect x="2.6" y="2.6" width="18.8" height="18.8" rx="5.4" />
    <circle cx="12" cy="12" r="4.4" />
    <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="11" height="11">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const WhatsAppIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" {...p}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const EMAIL = 'luispyim@icloud.com';
const PHONE_DISPLAY = '+55 (11) 94784-9239';
const PHONE_LINK =
  'https://api.whatsapp.com/send/?phone=5511947849239&text&type=phone_number&app_absent=0';

const SOCIALS = [
  { href: 'https://github.com/oluuiss', label: 'GitHub', Icon: GitHubIcon },
  { href: 'https://www.linkedin.com/in/oluuiss/', label: 'LinkedIn', Icon: LinkedInIcon },

  { href: PHONE_LINK, label: 'WhatsApp', sideLabel: PHONE_DISPLAY, Icon: WhatsAppIcon },
];

const PAGES = ['about', 'projects', 'experience', 'links', 'contact'];

const PROJECTS = [
  {
    id: 'crud',
    published: '2025-04-18',
    image: '/assets/projetos/project1.svg',
    href: 'https://github.com/oluuiss/crud',
  },
  {
    id: 'spring-crud',
    published: '2025-08-10',
    image: '/assets/projetos/springcrud.png',
    href: 'https://github.com/oluuiss/springcrud',
  },
  {
    id: 'local-business',
    published: '2024-08-31',
    image: '/assets/projetos/project1website.png',
    href: 'https://github.com/oluuiss/web-site-for-enterprise',
  },
  {
    id: 'digital-menu',
    published: '2026-09-29',
    image: '/assets/projetos/project4.png',
    href: 'https://github.com/oluuiss/demo-menu',
  },
  {
    id: 'saas',
    published: '2026-10-01',
    image: '/assets/projetos/project5saas.png',
    href: 'https://github.com/oluuiss/saas-restaurant',
  },
].sort((a, b) => b.published.localeCompare(a.published));

const TECH_ICONS = {
  Java: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 10.5h10v5a3.5 3.5 0 0 1-3.5 3.5h-3A3.5 3.5 0 0 1 6 15.5v-5Z" />
      <path d="M16 11.8h1.5a2.1 2.1 0 0 1 0 4.2H16" />
      <path d="M9.3 7.6c0-1.3 1.9-1.6 1.9-3.1M13 7.6c0-1.1 1.5-1.4 1.5-2.5" />
      <path d="M5 21.2h12" />
    </svg>
  ),

  macOS: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 12.53c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.1-2.01-3.77-2.04-1.6-.16-3.13.94-3.94.94-.82 0-2.07-.92-3.4-.9-1.75.03-3.36 1.02-4.26 2.58-1.82 3.15-.46 7.81 1.3 10.36.86 1.25 1.89 2.65 3.24 2.6 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.38.81 1.4-.02 2.28-1.27 3.13-2.53.99-1.45 1.39-2.85 1.42-2.92-.03-.01-2.72-1.04-2.75-4.13M14.6 4.6c.71-.86 1.19-2.06 1.06-3.25-1.02.04-2.26.68-3 1.54-.66.76-1.24 1.98-1.08 3.14 1.14.09 2.3-.58 3.02-1.43" />
    </svg>
  ),
  Windows: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 5.6 10.4 4.6v7.05H3V5.6Zm8.6-1.15L21 3.1v8.55h-9.4V4.45ZM3 12.9h7.4v7.05L3 18.95V12.9Zm8.6 0H21v8.55l-9.4-1.3V12.9Z" />
    </svg>
  ),

  Ubuntu: () => (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="19" cy="12" r="2.6" fill="currentColor" />
      <circle cx="8.5" cy="18.1" r="2.6" fill="currentColor" />
      <circle cx="8.5" cy="5.9" r="2.6" fill="currentColor" />
    </svg>
  ),
  React: () => (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="2.1" fill="currentColor" />
      <g fill="none" stroke="currentColor" strokeWidth="1.1">
        <ellipse cx="12" cy="12" rx="10.4" ry="4" />
        <ellipse cx="12" cy="12" rx="10.4" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10.4" ry="4" transform="rotate(120 12 12)" />
      </g>
    </svg>
  ),
  Swift: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.2 3.6c3 3 6.3 6 9.6 8.4-2.1-1.1-5.4-3.2-7.6-4.7 2.4 3.3 5.6 6.3 9 8.3-2.4 1.5-5.8 2-9 1.2 3.9 2.4 8.6 2.6 12 .9.7-.3 1.4.4 2.1 1.4.3-1.4.1-3-.8-4.5C16.7 11.1 12 6.9 8.6 3.9c1.5 1.8 3.5 4.2 5 6.1C10.6 8.3 7 5.7 4.2 3.6z" />
    </svg>
  ),
  Git: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
      <circle cx="6.5" cy="5" r="2.3" />
      <circle cx="6.5" cy="19" r="2.3" />
      <circle cx="17.5" cy="10.5" r="2.3" />
      <path d="M6.5 7.3v9.4" />
      <path d="M15.2 10.5H11a4.5 4.5 0 0 1-4.5-4.5" />
    </svg>
  ),
  'Node.js': () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <path d="M12 2.2 20.6 7v10L12 21.8 3.4 17V7z" />
      <path d="M10 10.4v4.4c0 .9-.6 1.4-1.5 1.4" strokeLinecap="round" />
      <path d="M16 11c0-.9-.8-1.4-2-1.4s-2 .5-2 1.4.7 1.2 2 1.4 2 .5 2 1.4-.8 1.4-2 1.4-2-.5-2-1.4" strokeLinecap="round" />
    </svg>
  ),
  PostgreSQL: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
      <ellipse cx="12" cy="5.6" rx="7.4" ry="3.1" />
      <path d="M4.6 5.6v12.8c0 1.7 3.3 3.1 7.4 3.1s7.4-1.4 7.4-3.1V5.6" />
      <path d="M4.6 12c0 1.7 3.3 3.1 7.4 3.1s7.4-1.4 7.4-3.1" />
    </svg>
  ),

  HTML: () => (
    <svg viewBox="0 0 24 24">
      <path d="M3.6 2.5h16.8l-1.5 16.6L12 21.5l-6.9-2.4L3.6 2.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <text x="12" y="15.5" textAnchor="middle" fontSize="9" fontWeight="bold" fill="currentColor" fontFamily="Arial, sans-serif">5</text>
    </svg>
  ),
  CSS: () => (
    <svg viewBox="0 0 24 24">
      <path d="M3.6 2.5h16.8l-1.5 16.6L12 21.5l-6.9-2.4L3.6 2.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <text x="12" y="15.5" textAnchor="middle" fontSize="9" fontWeight="bold" fill="currentColor" fontFamily="Arial, sans-serif">3</text>
    </svg>
  ),
  JavaScript: () => (
    <svg viewBox="0 0 24 24">
      <rect x="2.5" y="2.5" width="19" height="19" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <text x="12" y="16" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="currentColor" fontFamily="Arial, sans-serif">JS</text>
    </svg>
  ),
  'VS Code': () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 7.5-5 4.5 5 4.5" />
      <path d="m15 7.5 5 4.5-5 4.5" />
    </svg>
  ),
  Neon: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 0V24l-9.365-8.045V24H0V0ZM2.942 21.087h8.751V9.563l9.365 8.204V2.919L2.942 2.914Z" />
    </svg>
  ),
  Vercel: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3.2 22.4 20.8H1.6L12 3.2Z" />
    </svg>
  ),
};

const TECH_FILES = {
  'Spring Boot': '/assets/logos/spring.svg',
};

function TechIcon({ name }) {
  const file = TECH_FILES[name];
  if (file) return <img src={file} alt="" draggable="false" />;
  const Icon = TECH_ICONS[name];
  return Icon ? <Icon /> : null;
}

const TECHS = [
  { name: 'Spring Boot' },
  { name: 'React' },
  { name: 'Swift' },
  { name: 'Git' },
  { name: 'Node.js' },
  { name: 'PostgreSQL' },
];

const MAIN_SKILLS = ['Java', 'Spring Boot', 'React', 'Git', 'Swift', 'PostgreSQL'];
const OPERATING_SYSTEMS = ['macOS', 'Windows', 'Ubuntu'];

const MARQUEE_REPEATS = 1;

function LogoMarquee() {
  const group = (key) => (
    <div className="marquee-group" key={key}>
      {Array.from({ length: MARQUEE_REPEATS }).flatMap((_, r) =>
        TECHS.map(({ name }) => (
          <span className="marquee-item" key={`${name}-${r}`}>
            <TechIcon name={name} />
            <span>{name}</span>
          </span>
        ))
      )}
    </div>
  );

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">{[group('a'), group('b')]}</div>
    </div>
  );
}

function Home({ t }) {
  return (
    <section className="hero">

      <div className="hero-content">
        <h1 className="hero-title">
          <span>{t.home.title}</span>
        </h1>
        <h2 className="hero-name">Luis Gustavo da Silva Porto</h2>

        <div className="hero-socials">
          {SOCIALS.map(({ href, label, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" title={label} aria-label={label}>
              <Icon width="28" height="28" />
            </a>
          ))}
        </div>
      </div>

      <LogoMarquee />
    </section>
  );
}

const SHOW_PHOTO = true;
const PHOTO = '/assets/euabout.jpeg';

const EXPERIENCE = [
  {
    id: 'lwn',
    logo: '/assets/logos/lwn.png',
    current: true,
    company: 'LWN Team Análise',
    companyHref: 'https://lwnengenharia.com.br/',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'VS Code', 'Git', 'PostgreSQL', 'Neon', 'Vercel'],
    projects: [
      { id: 'lwn-engenharia', name: 'LWN Engenharia', href: 'https://lwnengenharia.vercel.app/' },
      { id: 'lwn-customers', name: 'LWN Customers', href: 'https://lwn-customers.vercel.app/' },
      { id: 'lwn-control', name: 'LWN Control', href: 'https://lwncontrol.vercel.app/' },
    ],
  },
];

const EDUCATION = [{ id: 'fam', period: '2024 — 2028' }];

const CERTIFICATES = [
  {
    id: 'via-certa',
    school: 'Via Certa Cursos — Fernandópolis',
    period: '2021 — 2022',
    href: 'https://drive.google.com/file/d/1h3GONblORzY8WXS76wM0N02nvdhYxcij/view?usp=sharing',
  },
];

function About({ t }) {
  const [photoOk, setPhotoOk] = useState(true);

  return (
    <section className="page about">
      <div className="about-main">
        <ScrollTyped tag="h1" className="about-title">
          {t.about.title}
        </ScrollTyped>

        {t.about.paragraphs.map((text, i) => (
          <ScrollTyped key={i}>{text}</ScrollTyped>
        ))}

        <div className="entry-skills">
          <span className="entry-skills-label">{t.about.skills}</span>
          {MAIN_SKILLS.map((name, i) => (
            <Reveal tag="span" className="tech-chip" key={name} delay={i * 60}>
              <TechIcon name={name} />
              {name}
            </Reveal>
          ))}
        </div>

        <div className="entry-skills">
          <span className="entry-skills-label">{t.about.os}</span>
          {OPERATING_SYSTEMS.map((name, i) => (
            <Reveal tag="span" className="os-chip" key={name} delay={i * 60} title={name}>
              <TechIcon name={name} />
            </Reveal>
          ))}
        </div>

        <div className="entry-skills">
          <span className="entry-skills-label">{t.about.languages}</span>
          {t.about.spoken.map(({ name, level }, i) => (
            <Reveal tag="span" className="tech-chip" key={i} delay={i * 60}>
              {name}
              <span className="lang-level">{level}</span>
            </Reveal>
          ))}
        </div>

        <ScrollTyped tag="h2">{t.about.education}</ScrollTyped>
        {EDUCATION.map(({ id, period }) => {
          const { course, school, kind } = t.education[id];
          return (
            <Reveal className="entry" key={id}>
              <ScrollTyped tag="h3">{course}</ScrollTyped>
              <ScrollTyped className="entry-meta">{`${school} · ${period} · ${kind}`}</ScrollTyped>
            </Reveal>
          );
        })}

        <ScrollTyped tag="h2">{t.about.certificates}</ScrollTyped>
        {CERTIFICATES.map(({ id, school, period, href }) => {
          const { course, hours } = t.certificates[id];
          return (
            <Reveal className="entry" key={id}>
              <h3>
                {course}
                <a
                  className="entry-doc"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title={t.about.viewCertificate}
                  aria-label={`${t.about.viewCertificate}: ${course}`}
                >
                  <DocIcon />
                </a>
              </h3>
              <ScrollTyped className="entry-meta">{`${school} · ${period} · ${hours}`}</ScrollTyped>
            </Reveal>
          );
        })}
      </div>

      <aside className="about-side">
        <div className="about-side-inner">
          {SHOW_PHOTO && photoOk && (
            <img
              className="about-photo"
              src={PHOTO}
              alt="Luis Gustavo da Silva Porto"
              onError={() => setPhotoOk(false)}
            />
          )}

          <div className="about-contact">
            <ul className="side-links">
              {SOCIALS.map(({ href, label, sideLabel, Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noreferrer">
                    <Icon width="20" height="20" />
                    <span>{sideLabel || label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="side-divider" />

            <a className="side-email" href={`mailto:${EMAIL}`}>
              <MailIcon width="20" height="20" />
              <span>{EMAIL}</span>
            </a>
          </div>
        </div>
      </aside>
    </section>
  );
}

function Projects({ t }) {

  const [aberto, setAberto] = useState(null);

  return (
    <section className="page">
      <ScrollTyped tag="h1" className="page-title">
        {t.projects.title}
      </ScrollTyped>
      <div className="project-grid">
        {PROJECTS.map(({ id, image, href }, i) => {
          const { name, description } = t.projects.items[id];
          const open = aberto === i;
          return (
            <Reveal
              tag="article"
              className={`project-card${open ? ' is-open' : ''}`}
              key={id}
              delay={i * 110}
            >

              <div className="project-inner">
                <button
                  type="button"
                  className="project-head"
                  aria-expanded={open}
                  onClick={() => setAberto(open ? null : i)}
                >
                  <ScrollTyped tag="h3" className="project-name">
                    {name}
                  </ScrollTyped>
                  <ChevronIcon />
                </button>

                <div className="project-fold">
                  <div className="project-fold-inner">
                    <p className="project-description">{description}</p>

                    <a
                      className="project-shot"
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      title={t.projects.viewNameOnGithub.replace('{name}', name)}
                    >
                      <img src={image} alt={name} loading="lazy" />
                      <span className="project-shot-label">
                        {t.projects.viewOnGithub}
                        <ArrowIcon />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Experience({ t }) {
  const [aberto, setAberto] = useState(null);

  return (
    <section className="page page-narrow">
      <ScrollTyped tag="h1" className="page-title">
        {t.experience.title}
      </ScrollTyped>
      <div className="xp-grid">
        {EXPERIENCE.map(({ id, logo, current, company, companyHref, skills, projects }) => {
          const { period, role, summary, bullets, projects: projectTexts } = t.experience.items[id];
          return (
            <Reveal tag="article" className="xp-entry" key={id}>

              <div className="xp-logo">
                <img src={logo} alt={company} />
              </div>

              <div className="xp-body">
                <h3 className="xp-company">
                  <a href={companyHref} target="_blank" rel="noreferrer">
                    {company}
                  </a>
                </h3>
                <p className="xp-role">{role}</p>
                <p className="xp-period">
                  {period} <span className="xp-dash">-</span>{' '}
                  <span className={current ? 'xp-current' : undefined}>
                    {current ? t.experience.present : ''}
                  </span>
                </p>

                <ScrollTyped className="xp-summary">{summary}</ScrollTyped>

                <ul className="xp-bullets">
                  {bullets.map((b, i) => (
                    <ScrollTyped tag="li" key={i}>
                      {b}
                    </ScrollTyped>
                  ))}
                </ul>

                <div className="entry-skills">
                  <span className="entry-skills-label">{t.experience.skills}</span>
                  {skills.map((name, i) => (
                    <Reveal tag="span" className="tech-chip" key={name} delay={i * 60}>
                      <TechIcon name={name} />
                      {name}
                    </Reveal>
                  ))}
                </div>

                {projects && (
                  <div className="xp-projects">
                    <span className="entry-skills-label">{t.experience.projects}</span>
                    {projects.map(({ id: projectId, name, href }, i) => {
                      const { caption, description } = projectTexts[projectId];
                      const open = aberto === projectId;
                      return (
                        <Reveal
                          className={`xp-project${open ? ' is-open' : ''}`}
                          key={projectId}
                          delay={i * 90}
                        >
                          <button
                            type="button"
                            className="xp-project-head"
                            aria-expanded={open}
                            onClick={() => setAberto(open ? null : projectId)}
                          >
                            <span className="xp-project-title">
                              <span className="xp-project-name">{name}</span>
                              <span className="xp-project-caption">{caption}</span>
                            </span>
                            <ChevronIcon />
                          </button>

                          <div className="xp-project-fold" aria-hidden={!open}>
                            <div className="xp-project-fold-inner">
                              <p className="xp-project-desc">{description}</p>
                              <a
                                className="xp-project-link"
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                tabIndex={open ? 0 : -1}
                              >
                                {t.experience.visitSite}
                                <ArrowIcon />
                              </a>
                            </div>
                          </div>
                        </Reveal>
                      );
                    })}
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

const ALL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/oluuiss', Icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/oluuiss/', Icon: LinkedInIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/oluuiss', Icon: InstagramIcon },

  { label: 'Discord', href: 'https://discord.gg/A6QeZc6p', icon: '/assets/logos/discord.png', breakAfter: true },
  { label: 'WhatsApp', href: PHONE_LINK, Icon: WhatsAppIcon },
  { label: 'Email', translated: true, href: `mailto:${EMAIL}`, Icon: MailIcon },
  { label: 'PlayStation', href: 'https://profile.playstation.com/yLuisss', icon: '/assets/logos/playstation.png' },
];

function Links({ t }) {
  return (
    <section className="page links-page">
      <Reveal tag="h1" className="links-title">
        {t.links.title}
      </Reveal>

      <Reveal tag="p" className="links-intro">
        {t.links.intro}
      </Reveal>

      <div className="links-grid">
        {ALL_LINKS.map(({ label, translated, href, Icon, icon, breakAfter }, i) => (
          <Fragment key={href}>
            <Reveal delay={i * 70}>
              <a
                className="link-item"
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
              >

                {icon ? <img src={icon} alt="" draggable="false" /> : <Icon width="19" height="19" />}
                <span>{translated ? t.links.email : label}</span>
              </a>
            </Reveal>

            {breakAfter && <span className="links-break" aria-hidden="true" />}
          </Fragment>
        ))}
      </div>
    </section>
  );
}

function Contact({ t }) {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });

  const campo = (chave) => (e) => setForm((f) => ({ ...f, [chave]: e.target.value }));

  const enviar = (e) => {
    e.preventDefault();
    const assunto = t.contact.subject.replace('{name}', form.nome);
    const corpo = `${form.mensagem}\n\n—\n${form.nome}\n${form.email}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
  };

  return (
    <section className="page contact-page">
      <Reveal tag="h1" className="contact-title">
        {t.contact.title}
      </Reveal>

      <Reveal>
        <form className="contact-form" onSubmit={enviar}>
          <input
            type="text"
            placeholder={t.contact.name}
            aria-label={t.contact.name}
            required
            value={form.nome}
            onChange={campo('nome')}
          />
          <input
            type="email"
            placeholder={t.contact.email}
            aria-label={t.contact.email}
            required
            value={form.email}
            onChange={campo('email')}
          />
          <textarea
            rows="3"
            placeholder={t.contact.message}
            aria-label={t.contact.message}
            required
            value={form.mensagem}
            onChange={campo('mensagem')}
          />

          <div className="contact-form-foot">
            <a className="contact-mail" href={`mailto:${EMAIL}`}>
              <MailIcon width="18" height="18" />
              <span>{EMAIL}</span>
              <ArrowIcon />
            </a>
            <button type="submit" className="contact-send">
              {t.contact.send}
            </button>
          </div>
        </form>
      </Reveal>

      <div className="contact-links">
        {SOCIALS.map(({ href, label, Icon }, i) => (
          <Reveal key={label} delay={i * 110}>
            <a className="contact-link" href={href} target="_blank" rel="noreferrer">
              <Icon width="19" height="19" />
              <span>{label}</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Privacy({ t }) {
  return (
    <section className="page policy">
      <Reveal tag="h1" className="page-title">
        {t.privacy.title}
      </Reveal>
      <p className="policy-updated">{t.privacy.updated}</p>

      {t.privacy.sections.map(({ title, body }, i) => (
        <Reveal className="policy-block" key={i}>
          <h2>{title}</h2>
          <p>{body.replace('{email}', EMAIL)}</p>
        </Reveal>
      ))}
    </section>
  );
}

const US_STRIPES = [0, 2, 4, 6, 8, 10, 12];

const FLAGS = {
  en: () => (
    <svg viewBox="0 0 30 20">
      <rect width="30" height="20" fill="#ffffff" />
      {US_STRIPES.map((i) => (
        <rect key={i} y={(i * 20) / 13} width="30" height={20 / 13} fill="#b22234" />
      ))}
      <rect width="13" height={(7 * 20) / 13} fill="#3c3b6e" />
    </svg>
  ),
  de: () => (
    <svg viewBox="0 0 30 20">
      <rect width="30" height="20" fill="#ffce00" />
      <rect width="30" height="13.34" fill="#dd0000" />
      <rect width="30" height="6.67" fill="#000000" />
    </svg>
  ),
  pt: () => (
    <svg viewBox="0 0 30 20">
      <rect width="30" height="20" fill="#009c3b" />
      <path d="M15 2.5 27.5 10 15 17.5 2.5 10Z" fill="#ffdf00" />
      <circle cx="15" cy="10" r="5.2" fill="#002776" />
      <path d="M9.9 9.2Q15 7.6 20.1 11" fill="none" stroke="#ffffff" strokeWidth="0.9" />
    </svg>
  ),
};

function LanguagePicker({ lang, onChange, label }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onPointer = (e) => {
      if (!ref.current.contains(e.target)) setOpen(false);
    };

    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };

    addEventListener('pointerdown', onPointer);
    addEventListener('keydown', onKey);
    return () => {
      removeEventListener('pointerdown', onPointer);
      removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="nav-lang" ref={ref}>
      <button
        type="button"
        className={`nav-lang-toggle${open ? ' is-open' : ''}`}
        title={label}
        aria-label={label}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <ChevronIcon />
      </button>

      <ul className={`nav-lang-menu${open ? ' is-open' : ''}`} aria-hidden={!open}>
        {SITE_LANGUAGES.map(({ id, label: name, html }) => {
          const Flag = FLAGS[id];
          return (
            <li key={id}>
              <button
                type="button"
                lang={html}
                className={lang === id ? 'active' : undefined}
                aria-current={lang === id ? 'true' : undefined}
                tabIndex={open ? 0 : -1}
                onClick={() => {
                  onChange(id);
                  setOpen(false);
                }}
              >
                <span className="nav-lang-flag" aria-hidden="true">
                  <Flag />
                </span>
                {name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const VIEWS = {
  home: Home,
  privacy: Privacy,
  about: About,
  projects: Projects,
  experience: Experience,
  links: Links,
  contact: Contact,
};

export default function App() {
  const [page, setPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('tema') === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('tema', theme);
    } catch {

    }
  }, [theme]);

  const [lang, setLang] = useState(() => {
    try {
      const salvo = localStorage.getItem('idioma');
      return SITE_LANGUAGES.some(({ id }) => id === salvo) ? salvo : DEFAULT_LANGUAGE;
    } catch {
      return DEFAULT_LANGUAGE;
    }
  });

  useEffect(() => {
    document.documentElement.lang = SITE_LANGUAGES.find(({ id }) => id === lang).html;
    try {
      localStorage.setItem('idioma', lang);
    } catch {

    }
  }, [lang]);

  const t = TEXTS[lang];

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
    resetTyped();
  }, [page]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };

    const onResize = () => {
      if (window.innerWidth > 860) setMenuOpen(false);
    };

    const anterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    addEventListener('keydown', onKey);
    addEventListener('resize', onResize);

    return () => {
      document.body.style.overflow = anterior;
      removeEventListener('keydown', onKey);
      removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

  const View = VIEWS[page];

  return (
    <>

      <div className="bg-blobs" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
      </div>

      <header className="navbar-wrapper">
        <nav className="navbar-pill">
          <button type="button" className="nav-logo" onClick={() => setPage('home')}>
            Luis
          </button>

          <div className="nav-links">
            {PAGES.map((id) => (
              <button
                key={id}
                type="button"
                className={`nav-item${page === id ? ' active' : ''}`}
                onClick={() => setPage(id)}
              >
                {t.nav[id]}
              </button>
            ))}
          </div>

          <div className="nav-socials">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" title={label} aria-label={label}>
                <Icon />
              </a>
            ))}
            <span className="nav-divider" />
            <button
              type="button"
              className="nav-theme"
              title={theme === 'dark' ? t.ui.lightMode : t.ui.darkMode}
              aria-label={theme === 'dark' ? t.ui.toLight : t.ui.toDark}
              aria-pressed={theme === 'light'}
              onClick={() => setTheme((atual) => (atual === 'dark' ? 'light' : 'dark'))}
            >
              <ThemeIcon />
            </button>
            <LanguagePicker lang={lang} onChange={setLang} label={t.ui.language} />
          </div>

          <button
            type="button"
            className={`hamburger${menuOpen ? ' active' : ''}`}
            aria-label={t.ui.openMenu}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </nav>

        <div
          className={`mobile-backdrop${menuOpen ? ' is-open' : ''}`}
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />

        <aside className={`mobile-menu${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
          <button
            type="button"
            className="mobile-menu-close"
            aria-label={t.ui.closeMenu}
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
          >
            <CloseIcon />
          </button>

          <nav className="mobile-menu-links">
            {PAGES.map((id) => (
              <button
                key={id}
                type="button"
                className={page === id ? 'active' : undefined}
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => {
                  setPage(id);
                  setMenuOpen(false);
                }}
              >
                {t.nav[id]}
              </button>
            ))}
          </nav>
        </aside>

      </header>

      <main className="page-shell" key={page}>
        <View t={t} />
      </main>

      <footer className="site-footer">
        <span className="footer-copy">© 2026</span>

        <button type="button" className="footer-policy" onClick={() => setPage('privacy')}>
          {t.privacy.title}
        </button>

        <div className="footer-links">
          {SOCIALS.map(({ href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer">
              {label}
              <ArrowIcon />
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
