import { InlineCode } from "@/once-ui/components";
import Image from "next/image";

const person = {
  firstName: "Vincenzo",
  lastName: "Maniscalco",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg", // optional: Leave the string empty if you don't want to display an avatar
  location: "Palermo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Italian", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/vincenzo-maniscalco-a84a96233",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:vincenzomani02@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer</>,
  subline: (
    <>
      Sono Vincenzo, <InlineCode>software engineer</InlineCode> presso Sistemi
      Informativi (IBM).
      <br />
      Nel tempo libero lavoro su progetti personali per esplorare nuove
      tecnologie e migliorare le mie competenze.
    </>
  ),
  Images: [
    {
      src: "/images/home/cover-01.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/home/cover-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/home/cover-03.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

const about = {
  label: "Profilo",
  title: "Info",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduzione",
    description: (
      <>
        Ciao, sono Vincenzo, un ingegnere informatico con una forte passione per
        lo sviluppo software. Attualmente lavoro presso Sistemi Informativi
        (IBM), dove contribuisco a soluzioni enterprise per il business. Nel
        tempo libero mi dedico a progetti personali che spaziano da applicazioni
        mobile a gestionali personalizzati. Mi piace imparare continuamente,
        esplorare nuove tecnologie e trasformare le idee in codice funzionale e
        ben progettato.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Esperienze lavorative",
    experiences: [
      {
        company: "Sistemi Informativi (IBM)",
        timeframe: "2025 - Presente",
        role: "Junior Software Engineer",
        achievements: [
          <>
            Ho collaborato a diversi progetti per la pubblica amministrazione,
            contribuendo allo sviluppo di soluzioni scalabili e performanti
            utilizzando tecnologie come <br />
            <InlineCode>.NET</InlineCode> <InlineCode>React</InlineCode>{" "}
            <InlineCode>SQL Server</InlineCode>.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studi",
    institutions: [
      {
        name: "Università degli Studi di Palermo",
        description: <>Laurea Triennale in Ingegneria Informatica</>,
        grade: "101",
      },
      {
        name: "Universidade da Coruña ",
        description: (
          <>Esperienza di studi all'estero presso La Coruña in Spagna</>
        ),
      },
      {
        name: "IISS Arena di Sciacca",
        description: (
          <>Diploma di Perito tecnico industriale,Elettronica ed Automazione</>
        ),
        grade: "100",
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: ".NET",
        description: (
          <>
            Possiedo una solida esperienza in .NET, focalizzandomi
            principalmente sulla realizzazione di API RESTful e microservizi.
            Utilizzo ASP.NET Core ed Entity Framework per sviluppare soluzioni
            web e servizi back-end robusti e scalabili, integrando database SQL
            Server e adottando best practices per garantire performance,
            sicurezza e manutenibilità.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "React",
        description: (
          <>
            Ho una conoscenza intermedia di React, con esperienza nello sviluppo
            di interfacce utente dinamiche e componenti riutilizzabili. Ho
            lavorato su progetti in cui ho gestito lo stato in modo efficace e,
            in un'occasione, ho utilizzato Redux per la gestione globale dello
            stato.
          </>
        ),
        images: [
          // Eventuali immagini relative a React
        ],
      },
      {
        title: "T-SQL",
        description: (
          <>
            Mi sono occupato di sviluppare query complesse, stored procedure e
            funzioni, garantendo performance e affidabilità nella gestione e
            analisi dei dati.
          </>
        ),
        images: [
          // Eventuali immagini relative a React
        ],
      },
      {
        title: "Java",
        description: (
          <>
            Ho acquisito solide basi in Java durante il mio percorso
            universitario, lavorando su progetti e applicazioni che mi hanno
            permesso di approfondire la programmazione orientata agli oggetti,
            la gestione delle eccezioni e l'utilizzo delle collezioni. Queste
            esperienze mi hanno fornito una solida comprensione dei principi
            fondamentali della programmazione e mi hanno preparato ad affrontare
            sfide complesse.
          </>
        ),
        images: [
          // Eventuali immagini relative a Java
        ],
      },
      {
        title: "C",
        description: (
          <>
            Durante il percorso universitario ho utilizzato il linguaggio C per
            sviluppare una comprensione profonda della programmazione
            procedurale. Ho lavorato su esercizi e progetti che mi hanno
            insegnato la gestione della memoria, l'implementazione di algoritmi
            efficienti e l'ottimizzazione del codice. Queste esperienze mi hanno
            fornito una solida base per la programmazione a basso livello.
          </>
        ),
        images: [
          // Eventuali immagini relative a C
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Lavori",
  title: "I miei progetti",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Galleria",
  title: "La mia galleria",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
