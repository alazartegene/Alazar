import logo from "../assets/png/logo.png";
import store from "../assets/png/store.png";
import newone from "../assets/png/newone.png";
import ecomerce from "../assets/png/ecomerce.png";
import eye from "../assets/jpeg/eye.jpg";
import algo from "../assets/svg/projects/algo.svg";

export const projectsData = [
  {
    id: 1,
    projectName: "Github Users",
    projectDesc:
      "This project is all about utilizing external API, github API.",
    tags: ["React", "CSS"],
    code: "https://github.com/alazartegene/Github-Users-/blob/main/src/App.js",
    demo: "https://git-hub-users-mine.netlify.app/",
    image: newone,
  },
  {
    id: 2,
    projectName: "E-comerce Store",
    projectDesc: "This project aims to build a product of company",
    tags: ["React", "React-Loader", "CSS"],
    code: "https://github.com/alazartegene/E-comerce-Store-/blob/main/src/App.js",
    demo: "https://frankstore1.netlify.app/",
    image: ecomerce,
  },
  {
    id: 3,
    projectName: "HealEye Medium Ophthalmic Clinic patient managment system",
    projectDesc:
      "complete MERN App, consisting of patient management, booking, expense Stats and More.",
    tags: ["React", "nodejs", "Express", "mongoDB", "CSS", "Material Ui"],
    code: "https://github.com/alazartegene/Healeye",
    demo: "https://github.com/alazartegene/Healeye",
    image: eye,
  },
  {
    id: 4,
    projectName: "AlgoSpace, Modern E-Learning Platform",
    projectDesc:
      "Complete E-Learning System, with Resource, multiple User Accounts Roles, Authentication and Authorization",
    tags: ["Nodejs", "Node Mailer", "Express", "mongoDB", "CSS", "PUG", "JWT"],
    code: "https://github.com/samsonmeseret/algoSpace",
    demo: "https://github.com/samsonmeseret/algoSpace",
    image: algo,
  },
  {
    id: 5,
    projectName: "Store, API",
    projectDesc: "products store API",
    tags: ["React","Express", 'MongoDB'],
    code: "https://github.com/samsonmeseret/Node-Projects/tree/master/Store%20API",
    demo: "https://github.com/samsonmeseret/Node-Projects/tree/master/Store%20API",
    image: store,
  },
  {
    id: 6,
    projectName: "Logo Projects and Graphic Designs",
    projectDesc: "Logos for different projects and poster designs as well brouchers",
    tags: ["Adobe Illustrator",],
    image: logo,
  },

];
