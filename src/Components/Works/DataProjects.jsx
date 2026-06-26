import wakeb from "../../assets/Projects/wakeb.png";
import roxCustody from "../../assets/Projects/rox custody.png";
import mesbaar from "../../assets/Projects/messbar.png";
import seven from "../../assets/Projects/seven.png";
import prosoft from "../../assets/Projects/prosoft.png";
import opd from "../../assets/Projects/opd.png";

export const projectsData = [
  {
    id: 1,
    image: wakeb,
    title: "Wakeb Platform",
    category: "Vue",
    description:
      "Enterprise dashboards with live video, LPR, maps, drone tracking, and Arabic RTL interfaces across 13+ production apps.",
    demo: "https://wakeb.tech/ar",
  },
  {
    id: 2,
    image: roxCustody,
    title: "Rox Custody",
    category: "Vue",
    description:
      "Institutional crypto custody platform with multi-wallet support, vault payments, and real-time trading features.",
    demo: "https://www.roxcustody.com/",
  },
  {
    id: 3,
    image: mesbaar,
    title: "Mesbaar",
    category: "React",
    description:
      "Candidate assessment platform with 165+ evaluation questions, session management, and English/Arabic RTL support.",
    demo: "https://mesbaar.com/",
  },
  {
    id: 4,
    image: seven,
    title: "Seven.eg",
    category: "Nuxt",
    description:
      "Responsive marketing website built with Nuxt 3 and modern UI patterns.",
    demo: "https://seven.eg/",
  },
  {
    id: 5,
    image: prosoft,
    title: "Prosoft",
    category: "Next.js",
    description:
      "Marketing website with Next.js 15, motion-driven UI using GSAP and Framer Motion.",
    demo: "https://prosoft.com.eg/",
  },
  {
    id: 6,
    image: opd,
    title: "Discovery Education OPD",
    category: "Vue",
    description:
      "Online Professional Development platform with WCAG accessibility, i18n, and dashboard redesign.",
    demo: "https://opd-de.com/",
  },
];

export const projectsNav = [
  { name: "All" },
  { name: "Vue" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Nuxt" },
];
