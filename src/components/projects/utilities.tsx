import { ProjectType } from "./types";
// PROJECT IMAGES
import remedial from "../../assets/images/remedial.webp";
import studentFirst from "../../assets/images/studentFirst.webp";
import valdymasDashboard from "../../assets/images/valdymas_dashboard.webp";
import scoreboxRegister from "../../assets/images/scorebox_registration.webp";
import openseasons from "../../assets/images/openseasons.webp";
import invoiceLight from "../../assets/images/invoice-app-light.webp";
import kanban from "../../assets/images/kanban.webp";

export const projects: ProjectType[] = [
  {
    projectNumber: "01",
    title: "Valdymas Dashboard",
    direction: "left",
    description:
      "I build an edtech iternal tool which is an administrative dashboard that streamlines administrative tasks, improves data management, fosters collaboration, and enables informed decision-making for smooth school operations.",
    githubLink:
      "https://github.com/codewithjohnson/valdymas-college-admin-dashboard",
    liveLink: "https://valdymas-admin-dashboard-b0f2b.web.app/",
    image: valdymasDashboard,
    alt: "valdymas",
    stacks: "React, JavaScript, Tailwind, Firebase",
  },
  {
    projectNumber: "02",
    title: "remedial",
    direction: "right",
    description:
      "I led the front end team that built Remedial which platform in progress that offers an end to end financial solution to schools and parents to help them focus on their core responsibilities.",
    githubLink: "https://github.com/codewithjohnson/remedial",
    liveLink: "https://remedial.vercel.app/",
    image: remedial,
    alt: "remedial",
    stacks: "Next JS, Typescript, Tailwind, Firebase",
  },
  {
    projectNumber: "03",
    title: "Scorebox",
    direction: "left",
    description:
      "I led the first round development for ScoreBox which is a web application built with React and Tailwind CSS that provides a user-friendly interface and logic for managing dancing competitions. It offers separate dashboards for competition owners and studio owners, catering to their specific needs.",
    githubLink: "",
    liveLink: "",
    image: scoreboxRegister,
    alt: "scorebox",
    stacks: "private",
  },
  {
    projectNumber: "03",
    title: "invoice app",
    direction: "right",
    description:
      "The invoice app I built is a user-friendly web application that simplifies invoice creation and management. It provides essential features for generating professional invoices, tracking payment statuses, and organizing client information. Users can easily create and customize invoices, manage client details, and generate reports.",
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
      "The kanban app I built is a simple and intuitive web application for managing tasks and projects using the kanban board methodology. It allows users to create boards, add and organize tasks, and track progress in a visual and efficient manner. ",
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
      "An A-levels platform that offers Alevels students a platform to learn, practice and test their knowledge in different subjects.",
    githubLink: "",
    liveLink: "",
    image: studentFirst,
    alt: "student first",
    stacks: "private",
    blur: true,
  },
  {
    projectNumber: "06",
    title: "openseasons",
    direction: "left",
    description:
      "A platform inprogress that plans to offers an end to end data analysis in different field,e.g soild texture, finance, education, etc.",
    githubLink: "",
    liveLink: "penseasons-cf1063.ingress-erytho.ewp.live",
    image: openseasons,
    alt: "openseasons",
    stacks: "private",
  },
];
