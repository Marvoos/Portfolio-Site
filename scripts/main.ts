import type { Job } from './types';
import type { Education } from './types';
import type { Project } from './types';
import type { Skill } from './types';

export const isValidDate = (date: Date) : boolean => {
    return !isNaN(date.getTime());
}

export const getDateInPosition = (startDate: Date, endDate: Date): string => {
    if (!isValidDate(startDate) || !isValidDate(endDate)) return "Duration Unknown";

    // 1. Calculate total months difference
    let totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    totalMonths += endDate.getMonth() - startDate.getMonth();

    // Prevent negative results if dates are accidentally swapped
    if (totalMonths <= 0) return "0 months";

    // 2. Extract years and leftover months
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    // 3. Build the output parts dynamically
    const parts: string[] = [];
    
    if (years > 0) {
        parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
    }
    
    if (months > 0) {
        parts.push(`${months} ${months === 1 ? 'month' : 'months'}`);
    }

    // Join with a comma if both exist (e.g., "1 year, 4 months")
    return parts.join(", ");
}

export const getMonthYearDate = (startDate: Date): string => {
    if (!isValidDate(startDate)) return "N/A";
    const monthKey = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const startMonth = startDate.getMonth();
    const startYear = startDate.getFullYear();
    return `${monthKey[startMonth]} ${startYear}`;
}

export const skills : { [key: string]: Skill[] } = {
        languages: [
        {
            icon: 'fa-solid fa-code',
            skillName: "HTML",
            searchName: "html",
        },
        {
            icon: 'fa-brands fa-css',
            skillName: "CSS",
            searchName: "css",
        },
        {
            icon: 'fa-brands fa-square-js',
            skillName: "JavaScript",
            searchName: "js",
        },
        {
            icon: 'fa-brands fa-typescript',
            skillName: "TypeScript",
            searchName: "html",
        },
        {
            icon: 'fa-brands fa-php',
            skillName: "PHP",
            searchName: "php",
        },
        {
            icon: 'fa-solid fa-database',
            skillName: "SQL",
            searchName: "sql",
        }

    ],

    frameworks: [
        {
            icon: 'fa-brands fa-bootstrap',
            skillName: "Bootstrap",
            searchName: "bootstrap",
        },
        {
            icon: 'fa-brands fa-react',
            skillName: "ReactJs",
            searchName: "react", 
        },
        {
            icon: 'fa-brands fa-node-js',
            skillName: "Nodejs",
            searchName: "node",
        },
    ]
}
export const projects: Project[] = [
   {
        type: ["Web Development", "Full Stack"],
        projLink: "https://github.com/Mini1Git/project3340",
        projImgs: ["#"],
        projTitle: "Food Ordering & Delivery Web Application (PHP + MariaDB)",
        projStart: getMonthYearDate(new Date("2026-01-07")),
        projFinish: getMonthYearDate(new Date("2026-03-26")),
        projLanguages: ["HTML", "CSS", "JavaScript", "PHP", "MariaDB", "MySQL"],
        projDesc: "Built a full-stack food ordering web application that simulates a real-world delivery platform, allowing users to browse items, place orders, and interact with a backend database system. The application includes secure server-side logic for handling data, user actions, and database transactions using PHP and MariaDB, with a responsive frontend built in HTML, CSS, and JavaScript.",
        projFeatures: ["Dynamic food ordering interface with interactive UI",
                        "Backend order processing and database integration",
                        "Secure data handling using PHP server-side logic",
                        "MariaDB database design for storing users and orders"]
   },
   {
        type: ["Web Development", "Full Stack"],
        projLink: "https://github.com/Marvoos/project3077",
        projImgs: ["#"],
        projTitle: "Full-Stack Library Management System (PHP + MariaDB)",
        projStart: getMonthYearDate(new Date("2026-01-07")),
        projFinish: getMonthYearDate(new Date("2026-04-18")),
        projLanguages: ["HTML", "CSS", "JavaScript", "PHP", "MariaDB", "MySQL"],
        projDesc: "Developed a fully functional web-based library management system that allows users to register, log in securely, and manage book borrowing and returns.",
        projFeatures: [
            "Authentication during sign up process",
            "Session handling to provide features for signed in users",
            "Secure data handling using PHP server-side logic",
            "MariaDB database design for storing users and book borrows/returns"
        ]
   },
   {
        type: ["Web Development", "Front End"],
        projLink: "https://github.com/Marvoos/PortfolioSite",
        projImgs: ["#"],
        projTitle: "Personal Portfolio using Front-End Technologies",
        projStart: getMonthYearDate(new Date("2026-06-11")),
        projFinish: "NOW",
        projLanguages: ["HTML", "CSS", "TypeScript"],
        projDesc: "Developed an interactive, dynamic porfolio site to display experience and skills to employers and other passerbys. Experimented with TypeScript and transpiled using Vite",
        projFeatures: [
            "Designed using UI/UX design principles in tandem with CSS and semantic HTML",
            "Running on AWS to experiment with modern server hosting technologies",
            "Developed with the backend in mind. Uses TypeScript to separate the data from logic and dynamically creates filters using data.",
            "Includes projects, experience, education, resume, and contact information if needed."
        ]
   }  
   
]


export const jobs: Job[] = [
    {   
        type: ["Tech"],
        jobTitle: "Clerical IT",
        companyName: "Lambton Kent District School Board",
        datesDisplay: `${getMonthYearDate(new Date("2023-05-02"))} - ${getMonthYearDate(new Date("2023-08-02"))}, ${getMonthYearDate(new Date("2024-05-02"))} - ${getMonthYearDate(new Date("2024-08-02"))}, ${getMonthYearDate(new Date("2025-05-02"))} - ${getMonthYearDate(new Date("2025-08-02"))}`,
        timeInPos: getDateInPosition(new Date("2023-05-02"), new Date("2025-08-02")),
        jobDesc: "Work in an office to check OSR folders, their contents, and then add a scanned and filled out copy to the database.",
        skillsDeveloped: ["Office work", "Document Scanning via Laserfiche", "Data Entry"]
    },

    {
        type: ["Education"],
        jobTitle: "Resident Assistant",
        companyName: "University of Windsor",
        datesDisplay: `${getMonthYearDate(new Date("2023-08-02"))} - ${getMonthYearDate(new Date("2024-05-02"))}`,
        timeInPos: getDateInPosition(new Date("2023-08-02"), new Date("2024-05-02")),
        jobDesc: "Within one of three residence building on the university of campus. A resident assistants job is to build a community around a given floor through attending committee meetings, planning a floor event each month, one-on-one chats with every student, collaborating with other RAs to ensure all students feel welcome, and be on call for a night to watch each building and make sure everyone is safe.",
        skillsDeveloped: ["Time Management", "Event Planning", "Community Building", "Team Building", "Problem Solving", "Communication Skills"]
    },
    
    {
        type: ["Tech", "Education"],
        jobTitle: "Teaching Assistant",
        companyName: `University of Windsor`,
        datesDisplay: `${getMonthYearDate(new Date("2024-09-02"))} - ${getMonthYearDate(new Date("2025-01-02"))}`,
        timeInPos: getDateInPosition(new Date("2023-09-02"), new Date("2025-01-02")),
        jobDesc: "The job of a Teaching assistant at the University of Windsor is to assist an assigned professor with teaching a specific subject. In this case, in COMP2120 'Object Oriented Programming', assisting the professor means hosting labs for students, proctoring for exams, answering emails and holding weekly office hours, and marking exams, labs, and assignments.",
        skillsDeveloped: ["Teaching", "Furthering Programming Skills", "Communication Skills", "Professionalism", "Time Management"]
    },

    {
        type: ["General Labour"],
        jobTitle: "Kennel Attendent",
        companyName: "Blenheim Veterinary Hospital",
        datesDisplay: `${getMonthYearDate(new Date("2018-11-24"))} - ${getMonthYearDate(new Date("2022-08-02"))}`,
        timeInPos: getDateInPosition(new Date("2018-11-24"), new Date("2022-08-02")),
        jobDesc: "Nightly clean of the veterinary hospital. This includes taking out the garbage, washing dishes, cleaning kennels and cages, disinfecting surfaces, vacuuming, mopping, and ensuring the building is locked up and clean for the next day.",
        skillsDeveloped: ["Time Management","Organization","Cleaning"]
    },

]

export const education: Education[] = [
    {
        degType: "Bachelors of Science",
        degreeName: "Computer Science",
        datesDisplay: `${getMonthYearDate(new Date("2022-09-07"))} - ${getMonthYearDate(new Date("2026-06-04"))}`,
        timeInPos: `${getDateInPosition(new Date("2022-09-07"), new Date("2026-06-04"))}`,
        degFocus: [
            "With a focus on computing fundamentals and low-level architecture.",
            "Low-level programming languages like Assembly and C are heavily used throughout the program.",
            "This program also places a focus on foundational math and logic used inside every program.",
            "As a CS student, I focused on the network architecture and full-stack website development in my later courses."
        ],
    }
]

