import { ProjectType } from "./types";
// PROJECT IMAGES
import remedial from "../../assets/images/remedial.webp";
import studentFirst from "../../assets/images/studentFirst.webp";
import valdymasDashboard from "../../assets/images/valdymas_dashboard.webp";
import scoreboxRegister from "../../assets/images/scorebox_registration.webp";
import scoreboxDashboard from "../../assets/images/scorebox_dashboard.webp";
import openseasons from "../../assets/images/openseasons.webp";
import invoiceLight from "../../assets/images/invoice-app-light.webp";
import kanban from "../../assets/images/kanban.webp";

export const projects: ProjectType[] = [
  {
    projectNumber: "01",
    title: "Valdymas Dashboard",
    direction: "left",
    description:
      "A platform that offers an end to end financial solution to schools and parents to help them focus on their core responsibilities.",
    githubLink: "https://valdymas.netlify.app",
    liveLink: "https://valdymas.netlify.app",
    image: valdymasDashboard,
    alt: "valdymas",
    stacks: "React, JavaScript, Tailwind, Firebase",
  },
  {
    projectNumber: "02",
    title: "remedial",
    direction: "right",
    description:
      "A platform that offers an end to end financial solution to schools and parents to help them focus on their core responsibilities.",
    githubLink: "https://remedial.netlify.app",
    liveLink: "https://remedial.netlify.app",
    image: remedial,
    alt: "remedial",
    stacks: "Next JS, Typescript, Tailwind, Firebase",
  },
  {
    projectNumber: "03",
    title: "Scorebox",
    direction: "left",
    description:
      "A platform that offers an end to end financial solution to schools and parents to help them focus on their core responsibilities.",
    githubLink: "https://scorebox.netlify.app",
    liveLink: "https://scorebox.netlify.app",
    image: scoreboxRegister,
    alt: "scorebox",
    stacks: "React, JavaScript, Tailwind, Firebase",
  },
  {
    projectNumber: "03",
    title: "invoice app",
    direction: "right",
    description:
      "A platform that offers an end to end financial solution to schools and parents to help them focus on their core responsibilities.",
    githubLink: "https://github.com/codewithjohnson/invoice-web-app",
    liveLink: "https://invoice-app-flame.vercel.app/",
    image: invoiceLight,
    alt: "invoice app",
    stacks: "React, Typescript, Tailwind, Firebase",
  },
  {
    projectNumber: "04",
    title: "kanban board",
    direction: "left",
    description:
      "A platform that offers an end to end financial solution to schools and parents to help them focus on their core responsibilities.",
    githubLink: "https://github.com/codewithjohnson/kanban-app",
    liveLink: "https://kanban-fr.vercel.app/",
    image: kanban,
    alt: "kanban board",
    stacks: "React, Typescript,Redux, sass, Firebase",
  },
  {
    projectNumber: "05",
    title: "student first",
    direction: "right",
    description:
      "A platform that offers an end to end financial solution to schools and parents to help them focus on their core responsibilities.",
    githubLink: "",
    liveLink: "",
    image: studentFirst,
    alt: "student first",
    stacks: "React, Typescript, Tailwind, Firebase",
  },
];
