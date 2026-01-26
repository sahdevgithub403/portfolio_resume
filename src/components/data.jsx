import { Coffee, Globe, Zap, Terminal, Cpu } from "lucide-react";

export const portfolioData = {
  name: "Sahdev Puran",
  realTitle: "(Software Engineer)",
  
  bio: "I don't always test my code, but when I do, I do it in production. Entry-level dev skilled in turning coffee into syntax errors.",
  about: "I’m a B.Tech student at Centurion University, learning and building web applications using Java, Spring Boot, and React. I enjoy solving problems and turning ideas into working software.",
  email: "sahdeva403@gmail.com",
  githubUrl: "https://github.com/sahdevgithub403",
  linkedinUrl: "https://linkedin.com/in/sahdev-puran403",
  resumeUrl: "https://drive.google.com/file/d/1OALHIHKUQXPtzSk8bWCCdgyMr0DQw9Kb/view?usp=drive_link",
};

export const TITLES = [
  "Chief StackOverflow Paster",
  "Professional Googler",
  "Coffee Converter",
  "Bug Manufacturer",
  "CSS Wrangler",
  "Java Whisperer",
];

export const SKILLS = [
  {
    name: "Java (Verbose Mode)",
    icon: <Coffee size={24} />,
    color: "bg-orange-300",
  },
  {
    name: "React (UseEffect Hell)",
    icon: <Globe size={24} />,
    color: "bg-blue-300",
  },
  {
    name: "Spring Boot (Magic)",
    icon: <Zap size={24} />,
    color: "bg-green-300",
  },
  {
    name: "MySQL (SELECT * FROM)",
    icon: <Terminal size={24} />,
    color: "bg-yellow-300",
  },
  { 
    name: "Ctrl+C / Ctrl+V", 
    icon: <Cpu size={24} />, 
    color: "bg-purple-300" 
  },
];

export const PROJECTS = [
  {
    title: "Shop Management System",
    description: "A web-based shop management system for managing products and inventory with a responsive user interface.",
    tags: ["React", "Tailwind CSS", "Spring Boot", "JWT", "WebSocket"],
    github: "https://github.com/sahdevgithub403/azoov-frontend",
    demo: "#",
    color: "bg-lime-200",
  },
  {
    title: "Mentoring App",
    description: "A mentor–mentee matching platform that connects users based on skills and interests. Secure authentication implemented using JWT, with 100+ users onboarded.",
    tags: ["React", "Spring Boot", "MySQL", "JWT"],
    github: "https://github.com/sahdevgithub403/mentor_frontend",
    demo: "#",
    color: "bg-pink-200",
  },
  {
    title: "Banking System",
    description: "A core banking system implementing ACID-compliant transactions with secure account handling and reliable balance management.",
    tags: ["Java", "JDBC", "MySQL"],
    github: "https://github.com/sahdevgithub403/BankingSystem-RGSDSA-Bank",
    demo: "#",
    color: "bg-cyan-200",
  },
];

export const TIMELINE = [
  {
    year: "2022 - 2023",
    title: "Started B.Tech",
    desc: "Realized that 'Hello World' is the only code that runs without errors.",
  },
  {
    year: "2024",
    title: "Learned Java",
    desc: "System.out.println('Why is this so verbose?');",
  },
  {
    year: "2025 - 2026",
    title: "Built Full Stack Projects",
    desc: "It actually worked. I was as surprised as you are.",
  },
  {
    year: "Now",
    title: "Hiring Me?",
    desc: "Waiting for you to click that email button.",
  },
];

export const FAQS = [
  {
    q: "Can you fix my printer?",
    a: "No. I write code, I don't perform miracles.",
  },
  {
    q: "Why is your website so chaotic?",
    a: "Because normal portfolios are boring. Also, I like yellow.",
  },
  { q: "Will you work for free?", a: "Will you pay my internet bill?" },
  { q: "Tabs or Spaces?", a: "I use whatever auto-format decides." },
];

export const EXCUSES = [
  "It works on my machine.",
  "That's a feature, not a bug.",
  "I didn't write that part.",
  "Cosmic rays flipped a bit.",
  "The API is feeling emotional today.",
  "It's a caching issue (it's always cache).",
  "I was testing you.",
  "Must be a leap year bug.",
];

export const TESTIMONIALS = [
  {
    name: "My Mom",
    quote: "He fixes the WiFi very fast. 10/10.",
    role: "Chief Supporter",
  },
  {
    name: "Elon Musk (Real)",
    quote: "I wanted to hire him, but he said he's busy watching cartoon.",
    role: "CEO of SpaceY",
  },
  {
    name: "ChatGPT",
    quote: "I generate code, he copies it. We make a great team.",
    role: "Co-pilot",
  },
  {
    name: "StackOverflow",
    quote: "Please stop copying our answers without upvoting.",
    role: "Knowledge Base",
  },
];

export const TOAST_MESSAGES = [
  "Achievement Unlocked: Scrolled 10px!",
  "Warning: High levels of sarcasm detected.",
  "Did you try restarting it?",
  "I see you looking at my code. Stop it.",
  "Hire me. I have a cat to feed. (I don't have a cat).",
  "Loading personality modules...",
  "Error: Too much awesomeness found.",
  "Fun fact: This toast does nothing.",
];