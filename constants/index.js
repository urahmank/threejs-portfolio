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
    name: 'Experience',
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
    title: 'AI Resume Parser',
    desc: 'A resume parser that uses Gemini to extract information from resumes and convert them into structured data.',
    subdesc:
      'This project leverages Gemini (free-tier) to parse PDF and text resumes, extracting key information and presenting it in a user-friendly, editable format. PDF parsing is handled on the client side using pdfjs-dist, ensuring smooth and secure processing within the browser. The application is deployed on Vercel and features a modern, responsive UI for an optimal user experience across devices.',
    href: 'https://github.com/urahmank/ai-resume-parser',
    texture: '/textures/project/ai-resume-parser.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Typescript',
        path: '/assets/typescript.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
    ],
  },
  {
    title: 'KYC Verification Dashboard',
    desc: 'A modern, frontend-heavy KYC (Know Your Customer) and KYB (Know Your Business) verification platform built with Next.js, TypeScript, and Tailwind CSS. This application allows users to submit verification documents and admins to review and approve/reject submissions.',
    subdesc:
      'This project includes a multi-step applicant form with live validation, allowing for a smooth and user-friendly data entry process. Users can upload ID documents with instant file preview functionality, enhancing the overall experience. An admin panel provides role-based views and action buttons for efficient user management. Built with the Next.js App Router and Zustand for state management, the application is fully responsive and deployed on Vercel, ensuring modern performance and accessibility across all devices.',
    href: 'https://github.com/urahmank/verification-dashboard',
    texture: '/textures/project/verif-dash.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      
    ],
  },
  {
    title: 'Team Pulse - Team & Collaboration',
    desc: 'A modern team collaboration platform built with Next.js, TypeScript, and real-time features. Team Pulse provides project management, task tracking, and real-time communication for teams.',
    subdesc:
      'This project features a modern, responsive UI built with Tailwind CSS and offers a range of powerful tools for efficient team collaboration and project management. Users can organize tasks using drag-and-drop Kanban boards, communicate instantly through real-time chat, and track performance with a detailed analytics dashboard. It supports the creation and management of multiple workspaces, making it ideal for handling various projects simultaneously. Secure user authentication is implemented using NextAuth.js, while real-time updates powered by Socket.IO ensure seamless collaboration across teams.',
    href: 'https://github.com/urahmank/team-pulse',
    texture: '/textures/project/team-pulse.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      
    ],
  },
  {
    title: 'Wallan - Ecommerce Platform',
    desc: 'Wallan as a company had 4 different lines of business including Alektiar, Hyundai, Geely and RentaCar. I was responsible for creating individual ecommerce stores for them powered by Magento.',
    subdesc:
      'Built as a unique ecommerce platform, Wallan offers a seamless shopping experience with advanced features like product customization, real-time inventory tracking, and secure payment processing. The platform is designed to cater to the diverse needs of its customers.',
    href: 'https://github.com/urahmank',
    texture: '/textures/project/proj_2.mp4',
    logo: '/assets/project-logo1.png',
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
        name: 'Magento',
        path: '/assets/magento.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Regly - RegTech Compliance and FinCrime Solutions',
    desc: 'Regly is a leading SaaS platform that specializes in providing advanced RegTech, Compliance & FinCrime solutions. I am responsible for creating and maintaining the user interface of the platform, ensuring a seamless and intuitive experience for our users while shaping the future of the products.',
    subdesc:
      'Regly is a cutting-edge platform that revolutionizes RegTech, Compliance, and FinCrime solutions. It leverages advanced technologies to provide users with a seamless experience in managing regulatory compliance and financial crime prevention.',
    href: 'https://github.com/urahmank',
    texture: '/textures/project/proj_1.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
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
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  }
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
    name: 'Regly',
    pos: 'Sr. Frontend Engineer',
    duration: '2023 - Present',
    title: "Regly is a leading SaaS platform that specializes in providing advanced RegTech, Compliance & FinCrime solutions. As a Senior Frontend Engineer, I am responsible for creating and maintaining the user interface of the platform, ensuring a seamless and intuitive experience for our users while shaping the future of the products.",
    icon: '/assets/regly-logo.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'GetFledge',
    pos: 'Frontend Engineer',
    duration: '2022 - 2023',
    title: "GetFledge is a cutting-edge platform that revolutionizes FinTech and leverages AI while reducing manual labour. As a Frontend Engineer, I played a pivotal role in developing and maintaining the user interface of the platform, optimized user experience and engaged in product developmemnt.",
    icon: '/assets/getfledge_logo.jpeg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'United Sol Pvt. Ltd.',
    pos: 'Junior Frontend Engineer',
    duration: '2020 - 2022',
    title: "United Sol is a leading software development company that specializes in providing innovative solutions to clients worldwide. As a Junior Frontend Engineer, I was responsible for developing and maintaining e-commerce applications, collaborating with cross-functional teams, and ensuring high-quality code standards.",
    icon: '/assets/unitedsol_logo.jpeg',
    animation: 'salute',
  },
];
