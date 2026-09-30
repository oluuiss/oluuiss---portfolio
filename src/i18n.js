export const SITE_LANGUAGES = [
  { id: 'en', label: 'English', html: 'en' },
  { id: 'de', label: 'Deutsch', html: 'de' },
  { id: 'pt', label: 'Português (Brasil)', html: 'pt-BR' },
];

export const DEFAULT_LANGUAGE = 'en';

const en = {
  nav: {
    about: 'about',
    projects: 'projects',
    experience: 'experience',
    links: 'links',
    contact: 'contact',
  },
  ui: {
    lightMode: 'Light mode',
    darkMode: 'Dark mode',
    toLight: 'Switch to light mode',
    toDark: 'Switch to dark mode',
    language: 'Change language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  home: {
    title: 'FullStack Developer',
  },
  about: {
    title: 'About me',
    paragraphs: [
      'My name is Luis, I am 20 years old and a sixth-semester Computer Engineering student at Faculdade das Américas (FAM). Born in Fernandópolis, in the countryside of São Paulo, I moved to the capital looking for new opportunities, professional growth and challenges that would add to my education.',
      'My path with technology started early. At 13 I was already building small projects with JavaScript, Node.js and Replit, mostly Discord bots. That experience sparked my interest in programming and, over the years, grew into a real passion for technology and software development. At 18 I began my Computer Engineering degree at UNIFEV, where I stayed until the fourth semester, when I moved to São Paulo and carried my studies on at FAM. Since then I have been building academic and personal projects that let me put into practice what I learn throughout the degree.',
      'My main focus is Back-end development, with a particular interest in the Java and Spring Boot ecosystem, where I have been concentrating my studies and projects. I aim to build robust, scalable and well-structured applications, applying clean code principles, good development practices and solid software organisation. Beyond Java and Spring Boot, I have experience with Swift for development in the Apple ecosystem, MySQL and PostgreSQL for modelling and managing relational databases, Node.js for back-end solutions and C for programming fundamentals and low-level systems. I also use Git and GitHub for version control and collaboration on projects.',
      'My education is driven by a constant pursuit of technical and professional growth. I try to turn every project and every challenge into a learning opportunity, deepening both my hands-on knowledge and my theoretical foundation. My goal is to keep growing as a developer, contributing to efficient, scalable solutions with real impact.',
    ],
    skills: 'Skills:',
    os: 'O.S:',
    languages: 'Languages:',
    spoken: [
      { name: 'Portuguese', level: 'Native' },
      { name: 'English', level: 'B2' },
      { name: 'German', level: 'A2' },
    ],
    education: 'Education',
    certificates: 'Certificates',
    viewCertificate: 'View certificate',
  },
  education: {
    fam: {
      course: 'Computer Engineering',
      school: 'Faculdade das Americas (FAM) - São Paulo - SP, Brazil.',
      kind: "Bachelor's Degree",
    },
  },
  certificates: {
    'via-certa': {
      course: 'Web Programming with emphasis on PHP and Java',
      hours: '121 hours',
    },
  },
  projects: {
    title: 'Projects',
    viewOnGithub: 'View on GitHub',
    viewNameOnGithub: 'View {name} on GitHub',
    items: {
      'digital-menu': {
        name: 'Digital Menu',
        description:
          'Menu for a grill restaurant where customers browse the dishes, fill a cart and book a table, available in English, German and Portuguese. Java, React and PostgreSQL.',
      },
      'spring-crud': {
        name: 'Spring CRUD',
        description:
          'Spring with Lombok, DevTools, PostgreSQL Driver, Spring Web, JPA, Validation and FlyWay Migration.',
      },
      crud: {
        name: 'CRUD (Create, Read, Update, Delete)',
        description: 'Create, search, edit and delete users in Java using a database through JDBC.',
      },
      'local-business': {
        name: 'Website for a local business',
        description:
          'Group project built for a local business to strengthen customer trust. HTML, CSS and JavaScript.',
      },
    },
  },
  experience: {
    title: 'Experience',
    present: 'Present',
    skills: 'Skills:',
    projects: 'Projects:',
    items: {
      lwn: {
        period: 'Jul 2026',
        role: 'Full-Stack Intern',
        summary:
          'Development and maintenance of technology solutions that optimise internal processes, focused on automation, data control and operational improvement.',
        bullets: [
          'Development and maintenance of web & mobile applications.',
          'Design and integration of PostgreSQL databases.',
          'Analysis and troubleshooting of issues in existing systems.',
          'Development of dashboards and data analysis solutions.',
          'Involvement in identifying needs and turning operational demands into technology solutions.',
        ],
        projects: {
          'lwn-engenharia': {
            caption: 'Company website',
            description:
              "The company's main website and its showcase to the market. It presents LWN's history, culture and leadership, the full range of services (cleanroom certification and qualification, HVAC-R testing, smoke tests and industrial gas qualification) and a direct channel for requesting a quote.",
          },
          'lwn-customers': {
            caption: 'Customer journey',
            description:
              "Internal platform that tracks each customer's journey from the sale to the work on site. Every stage (sale, scheduling, preparation and execution) is recorded in one place, giving the team full traceability and a clear view of where each customer stands. Access is restricted to the team, with email/CPF or Microsoft sign-in.",
          },
          'lwn-control': {
            caption: 'Warehouse & tool control',
            description:
              'My first project at the company. A warehouse system that controls the tools and measuring instruments used by the technical team, showing what is in stock, what is going out and what is already in the field, with traceability of every item from the warehouse to the job site.',
          },
        },
      },
    },
  },
  links: {
    title: 'I am all over the internet',
    intro:
      'My curiosity has always taken me far: between code, games, study and conversation, this is where you find me.',
    email: 'Email',
  },
  contact: {
    title: 'Get in touch',
    name: 'Your name',
    email: 'Your email',
    message: 'Write your message',
    send: 'Send',
    subject: 'Portfolio contact — {name}',
  },
  privacy: {
    title: 'Privacy Policy',
    updated: 'Last updated: September 30, 2026',
    sections: [
      {
        title: '1. General information',
        body: 'This Privacy Policy describes how this website handles the information of those who visit it. By browsing these pages, you agree to the practices described here.',
      },
      {
        title: '2. Data collected',
        body: 'This is a static website with no server or database of its own. No personal data such as name, email, phone number or IP address is collected, stored or processed. The form on the Contact page does not send anything anywhere: clicking Send simply opens your own email client with the message already filled in, and you are the one who sends it. Whatever you type stays on your device.',
      },
      {
        title: '3. Cookies',
        body: 'No tracking, advertising or analytics cookies are used. The site only stores your theme (light or dark) and language preferences in your own browser local storage. That information never leaves your device and can be erased at any time by clearing your browser data.',
      },
      {
        title: '4. Third-party services',
        body: 'Typefaces are loaded from Google Fonts, which may log the IP address of the request under Google own privacy policy. The site also links to external services such as GitHub, LinkedIn and WhatsApp. Once you click them, you are covered by the privacy policies of those services, over which this site has no control.',
      },
      {
        title: '5. Hosting',
        body: 'The hosting provider may keep access logs for technical and security reasons, according to its own policies.',
      },
      {
        title: '6. Security',
        body: 'This site is fully static: there is no login area, no payments and no field that transmits your information to a server. The only form is the contact one, and it merely composes a message in your own email client. Since nothing is sent or stored here, there is no personal data on this site that could leak. The connection is served over HTTPS, which encrypts everything travelling between your browser and the server. No page on this site asks for a password, banking details or an identity document number — if anything like that is ever requested in the name of this site, be suspicious.',
      },
      {
        title: '7. Your rights',
        body: 'Since no personal data is collected, there is no information of yours held here to access, correct or delete. Even so, you can reach out through the channels listed on the site to clear up any question about this policy.',
      },
      {
        title: '8. Changes',
        body: 'This policy may be updated at any time to reflect changes to the site. Checking this page periodically is recommended.',
      },
      {
        title: '9. Contact',
        body: 'If you have any questions about this Privacy Policy, get in touch at {email}.',
      },
    ],
  },
};

const de = {
  nav: {
    about: 'über mich',
    projects: 'projekte',
    experience: 'erfahrung',
    links: 'links',
    contact: 'kontakt',
  },
  ui: {
    lightMode: 'Heller Modus',
    darkMode: 'Dunkler Modus',
    toLight: 'Zum hellen Modus wechseln',
    toDark: 'Zum dunklen Modus wechseln',
    language: 'Sprache ändern',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
  },
  home: {
    title: 'FullStack-Entwickler',
  },
  about: {
    title: 'Über mich',
    paragraphs: [
      'Ich heiße Luis, bin 20 Jahre alt und studiere Technische Informatik im sechsten Semester an der Faculdade das Américas (FAM). Geboren in Fernandópolis, im Landesinneren von São Paulo, bin ich in die Hauptstadt gezogen – auf der Suche nach neuen Chancen, beruflicher Weiterentwicklung und Herausforderungen, die meine Ausbildung bereichern.',
      'Meine Reise mit der Technologie begann früh. Mit 13 Jahren entwickelte ich bereits kleine Projekte mit JavaScript, Node.js und Replit, vor allem Discord-Bots. Diese Erfahrung weckte mein Interesse am Programmieren und wurde im Laufe der Jahre zu einer echten Leidenschaft für Technologie und Softwareentwicklung. Mit 18 begann ich mein Studium der Technischen Informatik an der UNIFEV, wo ich bis zum vierten Semester blieb, bevor ich nach São Paulo zog und mein Studium an der FAM fortsetzte. Seitdem entwickle ich akademische und persönliche Projekte, in denen ich das im Studium Gelernte praktisch anwende.',
      'Mein Schwerpunkt liegt auf der Back-End-Entwicklung, mit besonderem Interesse am Java- und Spring-Boot-Ökosystem, auf das ich meine Studien und Projekte konzentriere. Mein Ziel ist es, robuste, skalierbare und gut strukturierte Anwendungen zu entwickeln und dabei Clean-Code-Prinzipien, bewährte Entwicklungspraktiken und eine saubere Softwareorganisation anzuwenden. Neben Java und Spring Boot habe ich Erfahrung mit Swift für die Entwicklung im Apple-Ökosystem, mit MySQL und PostgreSQL für die Modellierung und Verwaltung relationaler Datenbanken, mit Node.js für Back-End-Lösungen und mit C für Programmiergrundlagen und systemnahe Programmierung. Außerdem nutze ich Git und GitHub zur Versionskontrolle und für die Zusammenarbeit in Projekten.',
      'Meine Ausbildung ist vom ständigen Streben nach fachlicher und beruflicher Weiterentwicklung geprägt. Ich versuche, jedes Projekt und jede Herausforderung als Lernchance zu nutzen und dabei sowohl mein praktisches Wissen als auch meine theoretischen Grundlagen zu vertiefen. Mein Ziel ist es, mich als Entwickler stetig weiterzuentwickeln und zu effizienten, skalierbaren Lösungen mit echtem Mehrwert beizutragen.',
    ],
    skills: 'Skills:',
    os: 'Betriebssysteme:',
    languages: 'Sprachen:',
    spoken: [
      { name: 'Portugiesisch', level: 'Muttersprache' },
      { name: 'Englisch', level: 'B2' },
      { name: 'Deutsch', level: 'A2' },
    ],
    education: 'Ausbildung',
    certificates: 'Zertifikate',
    viewCertificate: 'Zertifikat ansehen',
  },
  education: {
    fam: {
      course: 'Technische Informatik',
      school: 'Faculdade das Americas (FAM) - São Paulo - SP, Brasilien.',
      kind: 'Bachelor',
    },
  },
  certificates: {
    'via-certa': {
      course: 'Webprogrammierung mit Schwerpunkt auf PHP und Java',
      hours: '121 Stunden',
    },
  },
  projects: {
    title: 'Projekte',
    viewOnGithub: 'Auf GitHub ansehen',
    viewNameOnGithub: '{name} auf GitHub ansehen',
    items: {
      'digital-menu': {
        name: 'Digitale Speisekarte',
        description:
          'Speisekarte für ein Grillrestaurant, in der Gäste die Gerichte durchstöbern, einen Warenkorb füllen und einen Tisch reservieren können – auf Englisch, Deutsch und Portugiesisch. Java, React und PostgreSQL.',
      },
      'spring-crud': {
        name: 'Spring CRUD',
        description:
          'Spring mit Lombok, DevTools, PostgreSQL Driver, Spring Web, JPA, Validation und FlyWay Migration.',
      },
      crud: {
        name: 'CRUD (Create, Read, Update, Delete)',
        description:
          'Anlegen, Suchen, Bearbeiten und Löschen von Benutzern in Java mit einer Datenbank über JDBC.',
      },
      'local-business': {
        name: 'Website für ein lokales Unternehmen',
        description:
          'Gruppenprojekt für ein lokales Unternehmen, um das Vertrauen der Kunden zu stärken. HTML, CSS und JavaScript.',
      },
    },
  },
  experience: {
    title: 'Erfahrung',
    present: 'Heute',
    skills: 'Skills:',
    projects: 'Projekte:',
    items: {
      lwn: {
        period: 'Juli 2026',
        role: 'Full-Stack-Praktikant',
        summary:
          'Entwicklung und Wartung technologischer Lösungen zur Optimierung interner Prozesse, mit Fokus auf Automatisierung, Datenkontrolle und betriebliche Verbesserungen.',
        bullets: [
          'Entwicklung und Wartung von Web- und Mobile-Anwendungen.',
          'Konzeption und Integration von PostgreSQL-Datenbanken.',
          'Analyse und Behebung von Problemen in bestehenden Systemen.',
          'Entwicklung von Dashboards und Lösungen zur Datenanalyse.',
          'Mitwirkung bei der Ermittlung von Anforderungen und der Umsetzung betrieblicher Bedürfnisse in technologische Lösungen.',
        ],
        projects: {
          'lwn-engenharia': {
            caption: 'Unternehmenswebsite',
            description:
              'Die Hauptwebsite des Unternehmens und sein Schaufenster zum Markt. Sie präsentiert die Geschichte, Kultur und Führung von LWN, das gesamte Leistungsspektrum (Zertifizierung und Qualifizierung von Reinräumen, HVAC-R-Prüfungen, Rauchtests und Qualifizierung von Industriegasen) sowie einen direkten Kanal für Angebotsanfragen.',
          },
          'lwn-customers': {
            caption: 'Customer Journey',
            description:
              'Interne Plattform, die den Weg jedes Kunden vom Verkauf bis zum Einsatz vor Ort verfolgt. Jede Phase (Verkauf, Terminplanung, Vorbereitung und Ausführung) wird an einem Ort erfasst. Das gibt dem Team volle Nachverfolgbarkeit und einen klaren Überblick, wo jeder Kunde gerade steht. Der Zugang ist auf das Team beschränkt, mit Anmeldung per E-Mail/CPF oder Microsoft.',
          },
          'lwn-control': {
            caption: 'Lager- und Werkzeugverwaltung',
            description:
              'Mein erstes Projekt im Unternehmen. Ein Lagersystem für die Werkzeuge und Messinstrumente des Technikteams, das zeigt, was auf Lager ist, was gerade hinausgeht und was sich bereits im Einsatz befindet – mit Rückverfolgbarkeit jedes Teils vom Lager bis zur Baustelle.',
          },
        },
      },
    },
  },
  links: {
    title: 'Ich bin überall im Internet',
    intro:
      'Meine Neugier hat mich schon immer weit gebracht: zwischen Code, Spielen, Lernen und Gesprächen – hier finden Sie mich.',
    email: 'E-Mail',
  },
  contact: {
    title: 'Kontakt aufnehmen',
    name: 'Ihr Name',
    email: 'Ihre E-Mail',
    message: 'Schreiben Sie Ihre Nachricht',
    send: 'Senden',
    subject: 'Kontakt über das Portfolio — {name}',
  },
  privacy: {
    title: 'Datenschutzerklärung',
    updated: 'Zuletzt aktualisiert: 30. September 2026',
    sections: [
      {
        title: '1. Allgemeine Informationen',
        body: 'Diese Datenschutzerklärung beschreibt, wie diese Website mit den Informationen ihrer Besucher umgeht. Mit der Nutzung dieser Seiten erklären Sie sich mit den hier beschriebenen Praktiken einverstanden.',
      },
      {
        title: '2. Erhobene Daten',
        body: 'Dies ist eine statische Website ohne eigenen Server und ohne Datenbank. Es werden keine personenbezogenen Daten wie Name, E-Mail-Adresse, Telefonnummer oder IP-Adresse erhoben, gespeichert oder verarbeitet. Das Formular auf der Kontaktseite sendet nichts: Ein Klick auf „Senden“ öffnet lediglich Ihr eigenes E-Mail-Programm mit der bereits ausgefüllten Nachricht, und Sie selbst schicken sie ab. Alles, was Sie eingeben, bleibt auf Ihrem Gerät.',
      },
      {
        title: '3. Cookies',
        body: 'Es werden keine Tracking-, Werbe- oder Analyse-Cookies verwendet. Die Website speichert lediglich Ihre Einstellungen für das Design (hell oder dunkel) und die Sprache im lokalen Speicher Ihres Browsers. Diese Informationen verlassen Ihr Gerät nie und können jederzeit durch das Löschen Ihrer Browserdaten entfernt werden.',
      },
      {
        title: '4. Dienste von Drittanbietern',
        body: 'Schriftarten werden von Google Fonts geladen, das gemäß der Datenschutzerklärung von Google die IP-Adresse der Anfrage protokollieren kann. Die Website enthält außerdem Links zu externen Diensten wie GitHub, LinkedIn und WhatsApp. Sobald Sie diese anklicken, gelten die Datenschutzrichtlinien dieser Dienste, auf die diese Website keinen Einfluss hat.',
      },
      {
        title: '5. Hosting',
        body: 'Der Hosting-Anbieter kann aus technischen und sicherheitsrelevanten Gründen gemäß seinen eigenen Richtlinien Zugriffsprotokolle speichern.',
      },
      {
        title: '6. Sicherheit',
        body: 'Diese Website ist vollständig statisch: Es gibt keinen Login-Bereich, keine Zahlungen und kein Feld, das Ihre Daten an einen Server überträgt. Das einzige Formular ist das Kontaktformular, und es erstellt lediglich eine Nachricht in Ihrem eigenen E-Mail-Programm. Da hier nichts gesendet oder gespeichert wird, gibt es auf dieser Website keine personenbezogenen Daten, die abhandenkommen könnten. Die Verbindung erfolgt über HTTPS, wodurch alle Daten zwischen Ihrem Browser und dem Server verschlüsselt werden. Keine Seite dieser Website fragt nach einem Passwort, Bankdaten oder einer Ausweisnummer – sollte so etwas jemals im Namen dieser Website verlangt werden, seien Sie misstrauisch.',
      },
      {
        title: '7. Ihre Rechte',
        body: 'Da keine personenbezogenen Daten erhoben werden, liegen hier keine Informationen über Sie vor, die eingesehen, berichtigt oder gelöscht werden könnten. Dennoch können Sie sich über die auf der Website angegebenen Kanäle melden, um Fragen zu dieser Richtlinie zu klären.',
      },
      {
        title: '8. Änderungen',
        body: 'Diese Richtlinie kann jederzeit aktualisiert werden, um Änderungen an der Website widerzuspiegeln. Es wird empfohlen, diese Seite regelmäßig zu besuchen.',
      },
      {
        title: '9. Kontakt',
        body: 'Bei Fragen zu dieser Datenschutzerklärung wenden Sie sich bitte an {email}.',
      },
    ],
  },
};

const pt = {
  nav: {
    about: 'sobre',
    projects: 'projetos',
    experience: 'experiência',
    links: 'links',
    contact: 'contato',
  },
  ui: {
    lightMode: 'Modo claro',
    darkMode: 'Modo escuro',
    toLight: 'Ativar modo claro',
    toDark: 'Ativar modo escuro',
    language: 'Alterar idioma',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
  },
  home: {
    title: 'Desenvolvedor FullStack',
  },
  about: {
    title: 'Sobre mim',
    paragraphs: [
      'Me chamo Luis, tenho 20 anos e sou estudante do sexto período de Engenharia da Computação na Faculdade das Américas (FAM). Natural de Fernandópolis, no interior de São Paulo, mudei-me para a capital em busca de novas oportunidades, crescimento profissional e desafios que contribuíssem para minha formação.',
      'Minha trajetória com a tecnologia começou cedo. Aos 13 anos, já desenvolvia pequenos projetos utilizando JavaScript, Node.js e Replit, principalmente na criação de bots para Discord. Essa experiência despertou meu interesse pela programação e, ao longo dos anos, transformou-se em uma verdadeira paixão por tecnologia e desenvolvimento de software. Aos 18 anos, iniciei minha graduação em Engenharia da Computação na UNIFEV, onde permaneci até o quarto período, quando me mudei para São Paulo e dei continuidade à minha formação na FAM. Desde então, venho desenvolvendo projetos acadêmicos e pessoais que me permitem aplicar, na prática, os conhecimentos adquiridos ao longo da graduação.',
      'Tenho como principal foco o desenvolvimento Back-end, com especial interesse pelo ecossistema Java e Spring Boot, área na qual venho concentrando meus estudos e projetos. Busco desenvolver aplicações robustas, escaláveis e bem estruturadas, aplicando princípios de código limpo, boas práticas de desenvolvimento e organização de software. Além do desenvolvimento com Java e Spring Boot, possuo experiência com Swift para desenvolvimento no ecossistema Apple, MySQL e PostgreSQL para modelagem e gerenciamento de bancos de dados relacionais, Node.js para desenvolvimento de soluções back-end e C para fundamentos de programação e sistemas de baixo nível. Também utilizo Git e GitHub para controle de versão e colaboração em projetos.',
      'Minha formação é pautada pela busca constante por evolução técnica e profissional. Procuro transformar cada projeto e desafio em uma oportunidade de aprendizado, aprofundando tanto meus conhecimentos práticos quanto minha base teórica. Meu objetivo é continuar evoluindo como desenvolvedor, contribuindo para a construção de soluções eficientes, escaláveis e de impacto real.',
    ],
    skills: 'Skills:',
    os: 'S.O:',
    languages: 'Idiomas:',
    spoken: [
      { name: 'Português', level: 'Nativo' },
      { name: 'Inglês', level: 'B2' },
      { name: 'Alemão', level: 'A2' },
    ],
    education: 'Formação',
    certificates: 'Certificados',
    viewCertificate: 'Ver certificado',
  },
  education: {
    fam: {
      course: 'Engenharia da Computação',
      school: 'Faculdade das Americas (FAM) - São Paulo - SP, Brasil.',
      kind: 'Bacharelado',
    },
  },
  certificates: {
    'via-certa': {
      course: 'Programador Web com ênfase em PHP e Java',
      hours: '121 horas',
    },
  },
  projects: {
    title: 'Projetos',
    viewOnGithub: 'Ver no GitHub',
    viewNameOnGithub: 'Ver {name} no GitHub',
    items: {
      'digital-menu': {
        name: 'Cardápio Digital',
        description:
          'Cardápio para uma churrascaria, onde o cliente navega pelos pratos, monta o carrinho e reserva uma mesa, disponível em inglês, alemão e português. Java, React e PostgreSQL.',
      },
      'spring-crud': {
        name: 'Spring CRUD',
        description:
          'Spring com Lombok, DevTools, PostgreSQL Driver, Spring Web, JPA, Validation e FlyWay Migration.',
      },
      crud: {
        name: 'CRUD (Create, Read, Update, Delete)',
        description:
          'Cadastro, busca, edição e remoção de usuários em Java usando banco de dados via JDBC.',
      },
      'local-business': {
        name: 'Website para empresa local',
        description:
          'Projeto em grupo desenvolvido para uma empresa local com o objetivo de aumentar a confiabilidade dos clientes. HTML, CSS e JavaScript.',
      },
    },
  },
  experience: {
    title: 'Experiência',
    present: 'Atualmente',
    skills: 'Skills:',
    projects: 'Projetos:',
    items: {
      lwn: {
        period: 'Jul 2026',
        role: 'Estagiário Full-Stack',
        summary:
          'Atuação no desenvolvimento e manutenção de soluções tecnológicas para otimização de processos internos, com foco em automação, controle de dados e melhoria operacional.',
        bullets: [
          'Desenvolvimento e manutenção de aplicações web & mobile.',
          'Criação e integração de bancos de dados PostgreSQL.',
          'Análise e correção de problemas em sistemas existentes.',
          'Desenvolvimento de dashboards e soluções para análise de dados.',
          'Participação na identificação de necessidades e transformação de demandas operacionais em soluções tecnológicas.',
        ],
        projects: {
          'lwn-engenharia': {
            caption: 'Site institucional',
            description:
              'O site principal da empresa e sua vitrine para o mercado. Apresenta a história, a cultura e a liderança da LWN, todo o portfólio de serviços (certificação e qualificação de salas limpas, ensaios em HVAC-R, Smoke Test e qualificação de gases industriais) e um canal direto para solicitar orçamento.',
          },
          'lwn-customers': {
            caption: 'Trajetória de clientes',
            description:
              'Plataforma interna que acompanha a trajetória de cada cliente, da venda à obra. Cada etapa (venda, agendamento, elaboração e execução) fica registrada em um só lugar, dando à equipe rastreabilidade completa e uma visão clara de onde cada cliente está. O acesso é restrito à equipe, com login por e-mail/CPF ou Microsoft.',
          },
          'lwn-control': {
            caption: 'Controle de almoxarifado',
            description:
              'Meu primeiro projeto na empresa. Um sistema de almoxarifado que controla as ferramentas e os instrumentos de medição usados pela equipe técnica, mostrando o que está em estoque, o que está saindo e o que já está em campo, com rastreabilidade de cada item do almoxarifado até a obra.',
          },
        },
      },
    },
  },
  links: {
    title: 'Estou por toda a internet',
    intro:
      'Minha curiosidade sempre me levou longe: entre código, jogos, estudo e conversa, é por aqui que você me encontra.',
    email: 'E-mail',
  },
  contact: {
    title: 'Entre em contato',
    name: 'Seu nome',
    email: 'Seu e-mail',
    message: 'Escreva sua mensagem',
    send: 'Enviar',
    subject: 'Contato pelo portfólio — {name}',
  },
  privacy: {
    title: 'Política de Privacidade',
    updated: 'Última atualização: 30 de setembro de 2026',
    sections: [
      {
        title: '1. Informações gerais',
        body: 'Esta Política de Privacidade descreve como este site trata as informações de quem o visita. Ao navegar por estas páginas, você concorda com as práticas aqui descritas.',
      },
      {
        title: '2. Dados coletados',
        body: 'Este site é estático e não possui servidor próprio nem banco de dados. Não coletamos, armazenamos ou processamos dados pessoais como nome, e-mail, telefone ou endereço IP. O formulário da página de Contato não envia nada para lugar nenhum: ao clicar em Enviar, ele apenas abre o seu programa de e-mail com a mensagem já preenchida, e o envio parte de você. O que você digita permanece no seu dispositivo.',
      },
      {
        title: '3. Cookies',
        body: 'Não utilizamos cookies de rastreamento, publicidade ou análise de audiência. O site guarda apenas as suas preferências de tema (claro ou escuro) e de idioma no armazenamento local do próprio navegador. Essa informação nunca sai do seu dispositivo e pode ser apagada a qualquer momento limpando os dados do navegador.',
      },
      {
        title: '4. Serviços de terceiros',
        body: 'As fontes tipográficas são carregadas do Google Fonts, que pode registrar o endereço IP da requisição conforme a política de privacidade do Google. O site também contém links para serviços externos como GitHub, LinkedIn e WhatsApp. Ao clicar neles, você passa a ser regido pelas políticas de privacidade desses serviços, sobre as quais não temos controle.',
      },
      {
        title: '5. Hospedagem',
        body: 'O provedor de hospedagem pode manter registros de acesso (logs) por motivos técnicos e de segurança, conforme suas próprias políticas.',
      },
      {
        title: '6. Segurança',
        body: 'Este site é totalmente estático: não possui área de login, pagamentos ou qualquer campo que transmita informações suas para um servidor. O único formulário existente é o de contato, que apenas monta uma mensagem no seu próprio programa de e-mail. Como nada é enviado nem armazenado aqui, não existem dados pessoais neste site que possam vazar. A conexão é servida por HTTPS, o que criptografa todo o conteúdo trafegado entre o seu navegador e o servidor. Nenhuma página deste site solicita senha, dado bancário ou número de documento — se algo assim for pedido em nome deste site, desconfie.',
      },
      {
        title: '7. Direitos do titular',
        body: 'Como não realizamos coleta de dados pessoais, não há informações suas sob nossa guarda para acessar, corrigir ou excluir. Ainda assim, você pode entrar em contato pelos canais divulgados no site para esclarecer qualquer dúvida sobre esta política.',
      },
      {
        title: '8. Alterações',
        body: 'Esta política pode ser atualizada a qualquer momento para refletir mudanças no site. Recomendamos a consulta periódica a esta página.',
      },
      {
        title: '9. Contato',
        body: 'Em caso de dúvidas sobre esta Política de Privacidade, entre em contato pelo e-mail {email}.',
      },
    ],
  },
};

export const TEXTS = { en, de, pt };
