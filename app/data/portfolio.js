export const personal = {
  name: "Shakshi Sharma",
  title: "Full Stack Developer",
  email: "sakshisharma1495@gmail.com",
  linkedin: "https://linkedin.com/in/shakshi-sharma-b2797213b",
  location: "Haryana, India",
  profileImage: "/profile.jpeg",
  tagline:
    "Full Stack Developer with experience in multi-tenant applications, AdTech integrations, and scalable web platforms.",
};

export const navItems = [
  { id: "home", label: "Home", icon: "home", color: "violet" },
  { id: "about", label: "About", icon: "user", color: "cyan" },
  { id: "experience", label: "Experience", icon: "briefcase", color: "amber" },
  { id: "projects", label: "Projects", icon: "folder", color: "rose" },
  { id: "stack", label: "Stack", icon: "layers", color: "emerald" },
  { id: "timeline", label: "Timeline", icon: "clock", color: "fuchsia" },
  { id: "contact", label: "Contact", icon: "mail", color: "sky" },
];

export const animatedPhrases = [
  "Scalable Systems",
  "Multi-tenant Platforms",
  "AdTech Solutions",
  "Quiz Experiences",
];

export const stats = [
  { value: "2+", label: "Years Experience", color: "text-violet-400" },
  { value: "80+", label: "Domains Supported", color: "text-cyan-400" },
  { value: "2024", label: "Professional Start", color: "text-amber-400" },
];

export const heroTags = [
  { label: "AdTech", color: "border-violet-500/30 bg-violet-500/10 text-violet-300" },
  { label: "Multi-tenant", color: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300" },
  { label: "Next.js", color: "border-rose-500/30 bg-rose-500/10 text-rose-300" },
  { label: "QuizTwiz", color: "border-amber-500/30 bg-amber-500/10 text-amber-300" },
];

export const heroDescription =
  "Full Stack Developer with 2+ years of experience building scalable web applications using Next.js, React.js, JavaScript, and MongoDB. I have experience working on multi-domain platforms supporting 80+ domains and their associated subdomains, where layouts, configurations, analytics, and advertisements dynamically adapt based on client requirements.";

export const aboutParagraphs = [
  "My journey into software development has been driven by continuous learning and persistence.",
  "I completed my Bachelor of Computer Applications (BCA) in 2015 and Master of Computer Applications (MCA) in 2018. To strengthen my practical development skills and transition into modern web technologies, I completed a 9-month Full Stack Web Development program in 2023, where I gained hands-on experience in Data Structures and Algorithms, Core Java, HTML, CSS, JavaScript, React.js, and Node.js.",
  "In February 2024, I started my professional journey as a Web Developer at Unibots. Since then, I have been working on large-scale web applications, contributing to both frontend and backend development using Next.js and MongoDB.",
  "I enjoy solving problems, debugging production issues, and building applications that provide value to users while meeting business requirements.",
];

export const experience = {
  role: "Full Stack Web Developer",
  company: "Unibots",
  period: "February 2024 – Present",
  highlights: [
    "Developed and maintained web applications using Next.js, JavaScript, and MongoDB.",
    "Worked on multi-domain platforms supporting 80+ domains and multiple subdomains with tenant-specific configurations.",
    "Built domain approval UI and configuration flows where layouts, themes, and features are reviewed before going live per tenant.",
    "Built and maintained QuizTwiz — a multi-tenant quiz platform with domain-specific layouts and integrated ad placements.",
    "Implemented dynamic layouts and features that varied based on domain and subdomain requirements.",
    "Developed and maintained REST APIs for data retrieval and configuration management.",
    "Contributed to Google Ad Manager integrations, ad placements, and ad refresh mechanisms.",
    "Worked on Header Bidding implementations and video player-related features.",
    "Diagnosed and resolved production issues to improve application performance and stability.",
    "Collaborated with cross-functional teams to deliver scalable and maintainable solutions.",
  ],
};

export const skills = {
  Frontend: {
    color: "violet",
    items: [
      "Next.js",
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Ant Design",
      "Responsive Web Design",
    ],
  },
  Backend: {
    color: "cyan",
    items: ["Node.js", "REST APIs", "Next.js API Routes", "MongoDB", "Mongoose"],
  },
  AdTech: {
    color: "amber",
    items: [
      "Google Ad Manager",
      "GPT.js",
      "Header Bidding",
      "Video Player Integrations",
      "Ad Refresh Logic",
    ],
  },
  "Other Skills": {
    color: "rose",
    items: ["Git", "Problem Solving", "Debugging", "Production Support"],
  },
};

export const projects = [
  {
    title: "QuizTwiz",
    category: "QUIZ · MULTI-TENANT",
    description:
      "Worked on QuizTwiz, a multi-tenant quiz platform where layouts, themes, and configurations adapt per domain. Integrated Google Ad Manager placements and ad refresh logic across tenant-specific quiz experiences.",
    tech: "Next.js | JavaScript | Google Ad Manager",
    gradient: "from-amber-500/50 via-orange-600/40 to-zinc-950",
    accent: "border-amber-500/30 hover:border-amber-400/50",
    categoryColor: "text-amber-400",
    images: ["/quiztwiz1.PNG"],
  },
  {
    title: "Multi-tenant Platform",
    category: "80+ DOMAINS · NEXT.JS",
    description:
      "Worked on a multi-tenant platform supporting 80+ domains and multiple subdomains. Built approval UI for domain configurations and implemented dynamic layouts, client-specific themes, and domain-based rendering logic — each subdomain gets its own unique UI.",
    tech: "Next.js | Multi-tenant Config | Approval UI",
    gradient: "from-violet-600/50 via-indigo-700/40 to-zinc-950",
    accent: "border-violet-500/30 hover:border-violet-400/50",
    categoryColor: "text-violet-400",
    galleryLayout: "vertical",
    images: [
      "/favanime.png",
      "/flavonest.png",
      "/mindcircuet.png",
      "/cinedeets.png",
      "/theshadowdiaries.png",
      "/themagicbeyound.png",
      "/seasonsandthoughts.png",
      "/brainotmy.png",
    ],
  },
  {
    title: "AdTech Solutions",
    category: "ADTECH",
    description:
      "Contributed to Google Ad Manager integrations, ad placements, ad refresh logic, and Header Bidding implementations for publisher websites.",
    tech: "Google Ad Manager | GPT.js | JavaScript",
    gradient: "from-rose-500/40 via-pink-700/30 to-zinc-950",
    accent: "border-rose-500/30 hover:border-rose-400/50",
    categoryColor: "text-rose-400",
    images: [],
  },
  {
    title: "Video Player Features",
    category: "JAVASCRIPT",
    description:
      "Worked on implementing and maintaining video player placement-related features and integrations within existing publisher platforms.",
    tech: "JavaScript",
    gradient: "from-cyan-500/40 via-teal-700/30 to-zinc-950",
    accent: "border-cyan-500/30 hover:border-cyan-400/50",
    categoryColor: "text-cyan-400",
    images: [],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Kurukshetra University",
    year: "2018",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Kurukshetra University",
    year: "2015",
  },
];

export const certification = {
  title: "Full Stack Web Development Program",
  completed: "2023",
  topics: [
    "Data Structures and Algorithms",
    "Core Java",
    "HTML & CSS",
    "JavaScript",
    "React.js",
    "Node.js",
  ],
};

export const timeline = [
  { year: "2015", event: "Completed BCA", color: "bg-violet-500" },
  { year: "2018", event: "Completed MCA", color: "bg-cyan-500" },
  {
    year: "2019–2022",
    event: "Career transition — focused on learning and personal responsibilities",
    color: "bg-zinc-500",
  },
  { year: "2023", event: "Completed Full Stack Web Development Program", color: "bg-amber-500" },
  { year: "Feb 2024", event: "Joined Unibots as Junior Web Developer", color: "bg-rose-500" },
  { year: "2025", event: "Progressed to Web Developer", color: "bg-emerald-500" },
  { year: "2026", event: "Working as Full Stack Web Developer", color: "bg-fuchsia-500" },
];

export const lookingFor =
  "I am currently exploring opportunities where I can contribute as a Full Stack Developer, work on challenging problems, and continue growing my expertise in modern web technologies and scalable systems.";
