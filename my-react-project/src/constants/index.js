import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    cinima4d,
    adobe,
    xd,
    nomadic,
    dalian,
    theater,
    ks,
    mywork1,
    mywork22,
    mywork3,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Ui Ux Design",
      icon: backend,
    },
    {
      title: "Product Design",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "cinima4d",
      icon: cinima4d,
    },
    {
      name: "adobe",
      icon: adobe,
    },
    {
      name: "xd",
      icon: xd,
    },
  ];
  
  const experiences = [
    {
      title: "university lecturer",
      company_name: "Dalian University",
      icon: dalian,
      iconBg: "#383E56",
      date: "September 2003 - August 2017",
      points: [
        "My teaching philosophy nurtures a passion for design, fostering versatile creators. ",
        "Emphasizing strong foundations in graphic design, animation, and web design, I shape a new generation",
        " I inspire artistic exploration and critical design thinking in my courses.",
        "equipping students with technical expertise and a commitment to impactful creativity.",
      ],
    },
    {
      title: "Product Designer",
      company_name: "Klein S Marketing & Event",
      icon: ks,
      iconBg: "#E6DEDD",
      date: "Jan 2017 - Dec 2021",
      points: [
        "I specialize in graphic and product design, shaping visual identities and enhancing brand aesthetics. ",
        "My expertise extends to exhibition design, creating immersive and engaging brand experiences. ",
        " Moreover, I have designed and developed the company's website.",
        " merging functionality with visually compelling elements to establish a strong online presence.",
      ],
    },
    {
      title: "UX/UI Designer",
      company_name: "Freiberufler",
      icon: theater,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        " I focus on crafting seamless and visually appealing user experiences. ",
        "I specialize in crafting intuitive interfaces that optimize user interactions.  ",
        "Additionally, I am dedicated to incorporating both functionality and aesthetics to ensure a satisfying user journey. ",
        "My goal is to elevate digital experiences through thoughtful and user-centric design solutions.",
      ],
    },
    {
      title: "Product Designer",
      company_name: "Nomadic Systems GmbH",
      icon: nomadic,
      iconBg: "#E6DEDD",
      date: "Fan 2022 - Present",
      points: [
        "I am responsible for updating and maintaining the company's homepage, ensuring its relevance and functionality. ",
        "In addition to this, I specialize in creating visually compelling graphics that contribute to the company's branding. ",
        "Furthermore, my expertise extends to designing engaging exhibition experiences to enhance brand visibility. ",
        "My goal is to provide a cohesive and impactful online and offline presence for the company.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Tingting proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Tingting does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Tingting optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "porfiolio",
      description:
        "My website is a dedicated online platform highlighting skills and experience. Explore projects and achievements for a comprehensive view.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: mywork1,
      source_code_link: "https://github.com/",
    },
    {
      name: "nomadic systems",
      description:
        "Our user-friendly website and app provide a seamless experience for product browsing, ordering, and conducting secure online transactions.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: mywork22,
      link: "https://nomadic-systems.de/",
    },
    {
      name: "Trip Guide",
      description:
        "I collaborate with cross-functional teams to ensure a user-centric experience, combining dynamic forms and vibrant color schemes in the UI/UX design of the website.",
      tags: [
        {
          name: "ui",
          color: "blue-text-gradient",
        },
        {
          name: "ux",
          color: "green-text-gradient",
        },
        {
          name: "animations",
          color: "pink-text-gradient",
        },
      ],
      image: mywork3,
      link: "https://www.kleinsmarketing.de/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };