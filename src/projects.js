import image1 from './public/carousel-pics/barbershop.png'
import image2 from './public/carousel-pics/sntss.png'
import image3 from './public/carousel-pics/xpence.png'
import image4 from './public/carousel-pics/batushka.png'
import image5 from './public/carousel-pics/rnm.png'
import image6 from './public/carousel-pics/dashboard.png'
import image7 from './public/carousel-pics/esg.png'
import image8 from './public/carousel-pics/skl.png'
import image9 from './public/carousel-pics/portfolio.png'
import image10 from './public/carousel-pics/imperio.png'
import image11 from './public/carousel-pics/myseed.png'
import image12 from './public/carousel-pics/localfood.png'


const projects = [
  {
    id: 1,
    name: "Mendez Barbershop",
    dscription: "I designed the website for a local barbershop, where they could showcase their services, the bigger picture was to develop an appointment system that would double as an ecomerce solution...",
    category: "Webapp",
    technology: "React",
    status: true, // if true link button is disabled- if true green light and live label
    image: image1,
    link: "https://barbershop-git-designgabriel-edsen.vercel.app/"
  },
  {
    id: 2,
    name: "SNTSS",
    dscription: "My team and i got tasked with developing a Webapp for the National Syndicate of Social Securityl Workes, the website makes it easier to find the location of their respective voting center based on the employees code",
    category: "Webapp",
    technology: "React",
    status: true,
    image: image2,
    link: "https://sntss.vercel.app/",
  },
  {
    id: 3,
    name: "xPence",
    dscription: "I teamed up with a friend of mine to develop an expense tracker for personal use, eventually we would like to release it in the appstores, this was the second design i made. pretty basic app.",
    category: "Mobile app",
    technology: "Figma",
    status: false,
    image: image3,
    link: "https://www.figma.com/proto/zcOnk3umCS59nbtQAwpG6w/Money-app---colaboration-with-Emilio?node-id=0%3A1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=114%3A570",
  },
  {
    id: 4,
    name: "Batushka fanpage",
    dscription: "A fan memeber of the r/Batushka subreddit and i wanted to make a website where he could post his music and new social networs, for unknown reasons the other fan decided to go with a more basic design.",
    category: "Webapp",
    technology: "Figma",
    status: false,
    image: image4,
    link: "https://www.figma.com/proto/H2y7Jaxw7nCgNnqQvU13nE59/Batushka's-Fanmade-Website?node-id=5%3A0&starting-point-node-id=2%3A20",
  },
  {
    id: 5,
    name: "Rick & Morty Characters",
    dscription: "A Colleage of mine asked me to design a User Interface for a practice project he had in mind, a simple front-end for to go with an existing api. i thought it was a good practice projects so im giving it a go.",
    category: "Design",
    technology: "React",
    status: false,
    image: image5,
    link: "https://www.figma.com/proto/ZbjDIIdcyv0vxcwuqoG8VM/R%26M-Collab?node-id=35%3A434&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=35%3A434",
  },
  {
    id: 6,
    name: "Rental system dashboard",
    dscription: "My team and i were tasked to develop a washing machine rental system, i was in charge of the UI design and frontend, sadly the project got canceled a month later and i kept the design for my portfolio.",
    category: "Design",
    technology: "Figma",
    status: false,
    image: image6,
    link: "",
  },
  {
    id: 7,
    name: "ESG website",
    dscription: "The first semester of college 2 other friends and i decided to join forces to develop applications as freelancers, the project is still going on but as of today it works as a collective, we share dev articles and help each other on our own projects.",
    category: "Webapp",
    technology: "Figma",
    status: false,
    image: image7,
    link: "",
  },
  {
    id: 8,
    name: "Skl.",
    dscription: "The idea of a class-manager was born when I grew tired of using my College's student site. I needed something that kept me up to date with my classes, where I could easily view the progress of my courses, announcements and more.",
    category: "PWA",
    technology: "React",
    status: false,
    image: image8,
    link: "",
  },
  {
    id: 9,
    name: "Portfolio",
    dscription: "I coded, designed and launched this website for showcasing my skills, projects and contact information, im an independent sel-taught developer from Colima, Mex. I use React and React Native for my projects amongst other tech tools.",
    category: "Webapp",
    technology: "React",
    status: false,
    image: image9,
    link: "https://bit.ly/g43ri3ldesign",
  },
  {
    id: 10,
    name: "Imperium Interactive",
    dscription: "Imperium interactive is the name of my gaming and motion developement projects, its still an early project of mine which i haven't really put time into it",
    category: "Website",
    technology: "React",
    status: false,
    image: image10,
    link: "",
  },
  {
    id: 11,
    name: "MySeed",
    dscription: "A couple of years ago i started to enjoy from buying Local made products, these people tend to advertise on social networks, and their workflow isnt the best, so im developing a customizable landing page and order system.",
    category: "PWA",
    technology: "React",
    status: false,
    image: image11,
    link: "https://www.figma.com/proto/4TfLC6cl5BN3o9j53jwsvf/mySeed?node-id=34%3A5386&scaling=scale-down&page-id=0%3A1&starting-point-node-id=34%3A5386&show-proto-sidebar=1",
  },
  {
    id: 12,
    name: "LocalFood",
    dscription: "This is my graduation project from BrightCoders, my team and i are developing a local order system for local shops in React Native (Mobile app), integrating firebase for the authorization systema and the data storage.",
    category: "Mobile app",
    technology: "React Native",
    status: false,
    image: image12,
    link: "https://www.figma.com/proto/F6zaRiwRr5KjaRa3CWzHG6/LocalFood.?node-id=101%3A252&scaling=scale-down&page-id=101%3A48&starting-point-node-id=103%3A306",
  },
]

export default projects;
