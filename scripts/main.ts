import type { Job } from './types';
import type { Education } from './types';


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



export const jobs: Job[] = [
    {   
        jobType: ["Tech"],
        jobTitle: "Clerical IT",
        companyName: "Lambton Kent District School Board",
        datesDisplay: `${getMonthYearDate(new Date("2023-05-02"))} - ${getMonthYearDate(new Date("2023-08-02"))}, ${getMonthYearDate(new Date("2024-05-02"))} - ${getMonthYearDate(new Date("2024-08-02"))}, ${getMonthYearDate(new Date("2025-05-02"))} - ${getMonthYearDate(new Date("2025-08-02"))}`,
        timeInPos: getDateInPosition(new Date("2023-05-02"), new Date("2025-08-02")),
        jobDesc: "Work in an office to check OSR folders, their contents, and then add a scanned and filled out copy to the database.",
        skillsDeveloped: ["Office work", "Document Scanning via Laserfiche", "Data Entry"]
    },

    {
        jobType: ["Education"],
        jobTitle: "Resident Assistant",
        companyName: "University of Windsor",
        datesDisplay: `${getMonthYearDate(new Date("2023-08-02"))} - ${getMonthYearDate(new Date("2024-05-02"))}`,
        timeInPos: getDateInPosition(new Date("2023-08-02"), new Date("2024-05-02")),
        jobDesc: "Within one of three residence building on the university of campus. A resident assistants job is to build a community around a given floor through attending committee meetings, planning a floor event each month, one-on-one chats with every student, collaborating with other RAs to ensure all students feel welcome, and be on call for a night to watch each building and make sure everyone is safe.",
        skillsDeveloped: ["Time Management", "Event Planning", "Community Building", "Team Building", "Problem Solving", "Communication Skills"]
    },
    
    {
        jobType: ["Tech", "Education"],
        jobTitle: "Teaching Assistant",
        companyName: `University of Windsor`,
        datesDisplay: `${getMonthYearDate(new Date("2024-09-02"))} - ${getMonthYearDate(new Date("2025-01-02"))}`,
        timeInPos: getDateInPosition(new Date("2023-09-02"), new Date("2025-01-02")),
        jobDesc: "The job of a Teaching assistant at the University of Windsor is to assist an assigned professor with teaching a specific subject. In this case, in COMP2120 'Object Oriented Programming', assisting the professor means hosting labs for students, proctoring for exams, answering emails and holding weekly office hours, and marking exams, labs, and assignments.",
        skillsDeveloped: ["Teaching", "Furthering Programming Skills", "Communication Skills", "Professionalism", "Time Management"]
    },

    {
        jobType: ["General Labour"],
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
        degreeType: "Bachelors of Science",
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

