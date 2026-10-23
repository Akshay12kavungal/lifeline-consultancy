// Repeated content (lists, cards, links) rendered by the section components.
import { SITE, LINKS } from "../config/site";

export const NAV_LINKS = ["Home", "Services", "About", "Contact"];

export const HERO_TRUST = ["Trusted Student Support", "Personalized Guidance", "Quick Admission Help", "Student-Friendly Process"];

export const STATS = [
  { value: "500+", label: "Student Enquiries" },
  { value: "100+", label: "Guidance Sessions" },
  { value: "Trusted", label: "Educational Support" },
  { value: "Student", label: "Centered Approach" },
];

export const SERVICES = [
  {
    icon: "🔄",
    title: "B.Tech Credit Transfer",
    desc: "Students facing backlogs, discontinuation, or academic difficulties can continue their engineering education through proper credit transfer guidance and admission support.",
    tag: "Most Popular",
    highlight: true,
  },
  {
    icon: "🏫",
    title: "Admission Guidance",
    desc: "Complete assistance for choosing suitable colleges, courses, and educational pathways based on student goals and eligibility.",
    tag: "Featured",
  },
  {
    icon: "🎯",
    title: "Academic Counselling",
    desc: "One-on-one counselling sessions to help students understand career options, academic opportunities, and future growth paths.",
    tag: "Personalized",
  },
  {
    icon: "📅",
    title: "Career Support",
    desc: "Guidance for higher studies, skill development, and career-focused educational planning to help students move forward with confidence.",
    tag: "New",
  },
  {
    icon: "📋",
    title: "Documentation Assistance",
    desc: "Support with admission procedures, documentation, application processing, and student coordination from start to finish.",
    tag: "End-to-End",
  },
];

export const PROBLEMS = [
  "Too Many Backlogs?",
  "Lost Academic Year?",
  "Confused About Next Step?",
  "Want To Continue B.Tech?",
  "Need Expert Guidance?",
];

export const STEPS = [
  { step: "01", title: "Contact Our Team", desc: "Speak with our educational counsellors and explain your academic situation." },
  { step: "02", title: "Profile Evaluation", desc: "Our experts analyze your eligibility, academic status, and available opportunities." },
  { step: "03", title: "Guidance & Documentation", desc: "Receive complete support for choosing the right path and preparing necessary documents." },
  { step: "04", title: "Admission Support", desc: "Get end-to-end assistance until the process is completed successfully." },
];

export const WHY_US = [
  { icon: "✅", title: "Personalized Student Guidance", desc: "Every student gets a tailored plan based on their academic situation, goals, and eligibility." },
  { icon: "💬", title: "Supportive & Friendly Counselling", desc: "Our counsellors are approachable, patient, and genuinely invested in your success." },
  { icon: "⚡", title: "Simplified Admission Process", desc: "We handle all documentation and follow-ups so your journey is completed without unnecessary delays." },
  { icon: "🤝", title: "Transparent Communication", desc: "We keep you informed at every step — no hidden charges, no surprises, just honest guidance." },
  { icon: "📞", title: "Quick Response Team", desc: "Our team responds promptly so students and parents always feel supported and heard." },
  { icon: "🎯", title: "Focused on Student Success", desc: "From eligibility check to final admission — we are with you at every single step of the process." },
  { icon: "🗺️", title: "Guidance Across Kerala", desc: "We assist students from across Kerala with reliable educational assistance and counselling." },
  { icon: "📚", title: "Reliable Educational Assistance", desc: "Trusted by hundreds of students and families for honest, result-oriented academic support." },
];

export const ABOUT_STATS = [
  { value: "500+", label: "Student Enquiries" },
  { value: "100+", label: "Guidance Sessions" },
  { value: "Kerala", label: "Wide Support" },
];

export const ABOUT_BARS = [
  { label: "Student Satisfaction Score", val: 99 },
  { label: "Successful Guidance Sessions", val: 94 },
  { label: "On-Time Case Processing", val: 96 },
];

export const TEAM = [
  { name: "Academic Counsellors", role: "B.Tech Credit Transfer Experts", exp: "Personalized guidance", initials: "AC" },
  { name: "Documentation Team", role: "Transfer & Admission Processing", exp: "End-to-end support", initials: "DT" },
  { name: "Student Advisors", role: "Eligibility & Career Planning", exp: "Free consultation", initials: "SA" },
];

export const FAQS = [
  { q: "Who can apply for B.Tech credit transfer?", a: "Students with backlogs, discontinued studies, or students looking for academic continuation support can contact our team for guidance. We evaluate your case and advise on the best academic route forward." },
  { q: "Do you provide counselling support?", a: "Yes. We provide personalized counselling sessions based on the student's academic condition and future goals. Our advisors help you understand available opportunities and make confident decisions." },
  { q: "How long does the process take?", a: "The process depends on academic profile, documentation, and institution procedures. Our team handles all documentation and university follow-ups to make it as fast as possible." },
  { q: "Can parents contact directly?", a: "Yes. Parents and guardians can directly connect with our counselling team. We encourage family involvement and keep everyone informed throughout the process." },
  { q: "Is online consultation available?", a: "Yes. We provide phone and online consultation support so students across Kerala can access our guidance conveniently." },
  { q: "Is the initial consultation really free?", a: "Yes — your first eligibility check and consultation is completely free. No commitments or hidden charges. Just reach out and we will take it from there." },
];

export const CONTACT_ITEMS = [
  { icon: "📍", label: "Address", text: `${SITE.street}\n${SITE.locality}` },
  { icon: "📞", label: "Phone / WhatsApp", text: SITE.phone, href: LINKS.tel },
  { icon: "✉️", label: "Email", text: SITE.email, href: LINKS.email },
  { icon: "📸", label: "Instagram", text: `@${SITE.instagram}`, href: LINKS.instagram },
  { icon: "🕐", label: "Working Hours", text: "Mon – Sat: 9:00 AM – 6:00 PM" },
];

// [label, section id to scroll to] — items without an id render as plain text
export const FOOTER_COLS = [
  {
    heading: "Services",
    links: SERVICES.map(s => [s.title, "services"]),
  },
  {
    heading: "Company",
    links: [["Home", "home"], ["About Us", "about"], ["Services", "services"], ["FAQ", "faq"], ["Contact Us", "contact"]],
  },
  {
    heading: "Legal",
    links: [["Privacy Policy"], ["Terms & Conditions"], ["Refund Policy"], ["Cookie Policy"]],
  },
];
