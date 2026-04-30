export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Chat Web Application',
    desc: 'GroupChat is a real-time communication platform enabling seamless team collaboration through instant messaging, live group management, and interactive media sharing powered by Socket.io.',
    subdesc:
      'Built using the MERN stack and Tailwind CSS, this scalable application features persistent MongoDB storage and Socket.io integration for a responsive, high-performance chat experience',
    href: 'https://chat-application-c2uf.onrender.com',
    hasLiveLinlk:true,
    texture: '/textures/project/Chat.mp4',
    logo: '/assets/Chat-App.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/assets/MongoDB.png',
      },
      {
        id: 4,
        name: 'Socket',
        path: '/assets/SocketIO.png',
      },
      {
        id: 5,
        name: 'Nodejs',
        path: '/assets/NodeJS.png',
      },
    ],
  },
  {
    title: 'Studdy-Buddy - Real-Time Chat and Media Sharing Platform',
    desc: 'StudyBuddy is a high-performance mobile app enabling real-time academic collaboration through secure Clerk authentication, instant Stream messaging, and seamless WebRTC-powered video conferencing.',
    subdesc:
      'Built with React Native and Expo Router, this cross-platform solution integrates Sentry tracking and Stream SDKs to deliver a scalable, reliable educational experience.',
    href: 'https://github.com/CodedingWala/Study-Buddy',
    hasLiveLinlk:false,
    texture: '/textures/project/Study.mp4',
    logo: '/assets/Studdy-Buddy.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Expo',
        path: '/assets/Expo.png',
      },
      {
        id: 2,
        name: 'Native Wind',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'StreamChat',
        path: '/assets/StreamChat.png',
      },
      {
        id: 5,
        name: 'Sentry',
        path: '/assets/Sentry.png',
      },
    ],
  },
  {
    title: 'Twitter Clone',
    desc: "A high-performance social platform featuring native post interactions, seamless media uploads via Cloudinary, and instant UI feedback through TanStack Query's optimistic updates.",
    subdesc:
      'Built with React Native and NativeWind, this mobile app leverages Clerk for security and a MERN backend to ensure scalable, real-time data persistence.',
    href: 'https://github.com/CodedingWala/Twitter_Clone_ReactNative_App',
    hasLiveLinlk:false,
    texture: '/textures/project/project3.mp4',
    logo: '/assets/Twitter.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Expo',
        path: '/assets/Expo.png',
      },
      {
        id: 2,
        name: 'Native Wind',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'CloudINary',
        path: '/assets/Cloud.png',
      },
      {
        id: 5,
        name: 'Clerk',
        path: '/assets/Clerk.png',
      },
      
    ],
  },
  {
    title: 'GSAP SPA - Animated website powered by GSAP',
    desc: "An immersive single-page application showcasing high-performance animations, featuring dynamic ScrollTrigger effects and fluid transitions that react seamlessly to the user's interaction and navigation.",
    subdesc:
      'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    href: 'https://gsap-animation-project-weld.vercel.app',
    hasLiveLinlk:true,
    texture: '/textures/project/GSAP.mp4',
    logo: '/assets/K12.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'GSAP',
        path: '/assets/GSAP.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Ecommerece - Online Shoping Platform',
    desc: 'An e-commerce platform featuring comprehensive admin controls for product management, secure user shopping carts, and dynamic pricing updates to streamline the digital storefront experience.',
    subdesc:
      'Developed using Node.js, Express, and MongoDB with EJS, this responsive application leverages Tailwind CSS for a modern UI and efficient server-side data rendering.',
    href: 'https://github.com/CodedingWala/Ecommerce-with-user-and-admin-dashboard',
    hasLiveLinlk:false,
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Express.js',
        path: '/assets/Express.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/assets/MongoDB.png',
      },
      {
        id: 4,
        name: 'NodeJS',
        path: '/assets/NodeJS.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'CodeSoft',
    pos: 'Web Developer Intern',
    duration: '26-01-2026 to 26-02-2026 ',
    title: "During this remote internship, I focused on the foundations of web presence by completing three distinct projects. This phase was dedicated to understanding how professional digital platforms are built to be visually compelling and user-friendly. I mastered the art of creating responsive layouts and high-quality user interfaces, ensuring that every project met modern standards for aesthetic appeal and seamless navigation.",
    icon: '/assets/CodeSoft.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Staxtech',
    pos: 'Web Developer Intern',
    duration: 'Web Development Intern at StaxTech was a transformative period that bridged the gap between my academic studies and professional application. Working in a remote, online environment, I contributed to two distinct projects that served as the perfect playground for mastering the MERN stack (MongoDB, Express.js, React.js, and Node.js MongoDB to creating responsive UIs—I gained a deep, practical understanding of how full-stack applications function in the real world',
    icon: '/assets/Staxtech.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];