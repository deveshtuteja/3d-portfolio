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
    bootstrap,
    shadcn,
    headless,
    radix,
    express,
    firebase,
    jest,
    java,
    cpp,
    c,
    sql,
    vite,
    parcel,
    vscode,
    codsoft,
    heromotocorp,
    streamai,
    leavemanagement,
    eatezy,
    mytube,
    threejs,
    passwordgenerator,
    simonsays,
    vikasmalhotra,
    anilkumarsingh,
    amitjangid,
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
        title: "React.Js Developer",
        icon: mobile,
    },
    {
        title: "DSA Enthusiast",
        icon: backend,
    },
    {
        title: "Tech Community Leader",
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
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    {
        name: "React.js",
        icon: reactjs,
    },
    {
        name: "Redux",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node.js",
        icon: nodejs,
    },
    {
        name: "Express.js",
        icon: express,
    },
    {
        name: "MongoDb",
        icon: mongodb,
    },
    {
        name: "Three.js",
        icon: threejs,
    },
    // {
    //     name: "Firebase",
    //     icon: firebase,
    // },
    // {
    //     name: "Git",
    //     icon: git,
    // },
    {
        name: "Jest",
        icon: jest,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "C++",
        icon: cpp,
    },
    // {
    //     name: "C",
    //     icon: c,
    // },
    // {
    //     name: "SQL",
    //     icon: sql,
    // },
    // {
    //     name: "Vite.js",
    //     icon: vite,
    // },
    // {
    //     name: "Parcel",
    //     icon: parcel,
    // },
    // {
    //     name: "Bootstrap",
    //     icon: bootstrap,
    // },
    // {
    //     name: "shadcn/ui",
    //     icon: shadcn,
    // },
    // {
    //     name: "Radix",
    //     icon: radix,
    // },
    // {
    //     name: "Headless UI",
    //     icon: headless,
    // },
    // {
    //     name: "Figma",
    //     icon: figma,
    // },
    // {
    //     name: "VS Code",
    //     icon: vscode,
    // },
];

const experiences = [
    {
        title: "Web Development Intern",
        company_name: "CodSoft",
        icon: codsoft,
        iconBg: "#383E56",
        date: "August 2023 - September 2023",
        points: [
            "Designed a personalized portfolio using HTML and CSS.",
            "Developed a landing page as part of the second task.",
            "Created a calculator as part of the third task.",
        ],
    },
    {
        title: "IT Intern",
        company_name: "Hero MotoCorp Ltd.",
        icon: heromotocorp,
        iconBg: "#E6DEDD",
        date: "July 2024 - September 2024",
        points: [
            "Designed the frontend for a leave management system for plant workers using React.js, Redux, ShadCN/UI, Headless UI, Radix, and Tailwind CSS.",
            "Improved user satisfaction by 60% with a modern application.",
            "Reduced support requests by 35% by creating an easy-to-use interface.",
            "Implemented a dark mode feature.",
            "Enhanced accuracy and usability of attendance features, reducing discrepancies by 30%."
        ],
    },

    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#383E56",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

const testimonials = [
    {
        testimonial:
            "Devesh quickly mastered front-end technologies and applied them expertly. His commitment and willingness to go the extra mile were impressive.",
        name: "Anil Singh",
        designation: "AGM - Digital and IT",
        company: "Hero Motocorp",
        image: anilkumarsingh,
    },
    {
        testimonial:
            "Devesh's rapid learning, technical prowess, and innovative approach make him invaluable. I highly recommend him for cutting-edge tech projects.",
        name: "Vikas Malhotra",
        designation: "Head - Business Solutions",
        company: "Hero MotoCorp",
        image: vikasmalhotra,
    },
    {
        testimonial:
            "Devesh consistently delivered top-notch work with enthusiasm and attention to detail. His clean, efficient code stood out in all projects.",
        name: "Amit Jangid",
        designation: "Senior Software Engineer",
        company: "Q3 technologies",
        image: amitjangid,
    },
];

const projects = [
    {
        name: "StreamAI",
        description:
            "AI-powered OTT platform with improved recommendations, increasing user engagement by 35%. Optimized performance, reducing load times by 30% and unnecessary re-renders by 25%. Developed secure user authentication, boosting retention by 15%.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "firebase",
                color: "orange-text-gradient",
            },
            {
                name: "gemini-api",
                color: "purple-text-gradient",
            },
        ],
        image: streamai,
        source_code_link: "https://github.com/deveshtuteja/streamAI",
        website_link: "https://stream-ai.netlify.app/",
    },
    {
        name: "Leave Management System",
        description:
            "Revamped the leave management system for Hero MotoCorp Ltd, improving user satisfaction by 60%. Created an easy-to-use, modern application for plant workers, reducing support requests by 35%. Enhanced accuracy and usability of attendance features, reducing discrepancies by 30%.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "shadcn/ui",
                color: "purple-text-gradient",
            },
            // {
            //     name: "headless-ui",
            //     color: "orange-text-gradient",
            // },
        ],
        image: leavemanagement,
        source_code_link: "https://github.com/deveshtuteja/hero-lms",
    },
    {
        name: "My-Tube",
        description:
            "YouTube-like video platform with dark mode, enhancing user engagement by 25%. Implemented caching and debouncing in search, improving search efficiency by 30% and reducing latency by 20%. Built a live chat feature, boosting real-time interaction and user retention by 15%.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "youtube-api",
                color: "red-text-gradient",
            },
        ],
        image: mytube,
        source_code_link: "https://github.com/deveshtuteja/my-tube",
        website_link: "https://myy-tube.vercel.app/",
    },
    {
        name: "EatEzy",
        description:
            "Food ordering app with real-time restaurant data. Streamlined cart management with Redux, improving order speed by 25%. Enhanced UI with Tailwind CSS & Shimmer UI, increasing user engagement by 20%.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "swiggy-api",
                color: "orange-text-gradient",
            },
            {
                name: "jest",
                color: "red-text-gradient",
            },
        ],
        image: eatezy,
        source_code_link: "https://github.com/deveshtuteja/EatEzy",
        website_link: "https://eat-ezy.vercel.app/",
    },
    {
        name: "Password Generator",
        description:
            "A responsive password generator that creates secure passwords with customizable length, numbers, and special characters. Includes a copy button for convenience. Built using React, JavaScript, and regex for robust password creation and validation.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "yellow-text-gradient",
            },
            {
                name: "regex",
                color: "green-text-gradient",
            },
            {
                name: "responsive",
                color: "pink-text-gradient",
            },
        ],
        image: passwordgenerator,
        source_code_link: "https://github.com/deveshtuteja/password-generator",
        website_link: "https://password-generator-num-char.vercel.app/",
    },
    {
        name: "Simon Says Game",
        description:
            "A simple JavaScript project that replicates the classic Simon Says game. Players must memorize and repeat sequences of colors, which get progressively longer and more challenging. This project demonstrates the use of JavaScript for game logic.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: simonsays,
        source_code_link: "https://github.com/deveshtuteja/Simon-Says-Game",
        website_link: "https://simon-says-js.vercel.app/",
    },
];

export { services, technologies, experiences, testimonials, projects };