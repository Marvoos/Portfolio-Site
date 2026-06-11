export const getDateInPosition = (startDateInMs, endDateInMs) => {
    const timeDiffInMs = endDateInMs - startDateInMs;
    const timeDiffInYears = timeDiffInMs / 3.154e+10;
    const timeDiffInMonths = (timeDiffInMs / 2.628e+9) % 12;
    if (parseInt(timeDiffInYears) === 0) {
        return `${parseInt(timeDiffInMonths)} months`;
    }
    if (parseInt(timeDiffInMonths) === 0) {
        if (timeDiffInYears === 1) {
            return `${parseInt(timeDiffInYears)} year`;
        }
        return `${parseInt(timeDiffInYears)} years`;
    }
    return (parseInt(timeDiffInYears) === 1) ? `${parseInt(timeDiffInYears)} year, and ${parseInt(timeDiffInMonths)} months` : `${parseInt(timeDiffInYears)} years, and ${parseInt(timeDiffInMonths)} months`;
}

export const getMonthYearDate = (startDateInMs) => {
    const monthKey = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const startMonth = startDateInMs.getMonth();
    const startYear = startDateInMs.getFullYear();
    return `${monthKey[startMonth]} ${startYear}`;
}

export const jobs = [
    {   
        jobType: "Tech",
        jobTitle: "Clerical IT",
        companyName: "Lambton Kent District School Board",
        dateStarted: `${getMonthYearDate(new Date("2023-05-02"))} - ${getMonthYearDate(new Date("2023-08-02"))}, ${getMonthYearDate(new Date("2024-05-02"))} - ${getMonthYearDate(new Date("2024-08-02"))}, ${getMonthYearDate(new Date("2025-05-02"))} - ${getMonthYearDate(new Date("2025-08-02"))}`,
        timeInPos: getDateInPosition(new Date("2023-05-02"), new Date("2025-08-02")),
        jobDesc: "Work in an office to check OSR folders, their contents, and then add a scanned and filled out copy to the database.",
        skillsDeveloped: ["Office work", "Document Scanning via Laserfiche", "Data Entry"]
    },

    {
        jobType: "Education",
        jobTitle: "Resident Assistant",
        companyName: "University of Windsor",
        datesDisplay: `${getMonthYearDate(new Date("2023-08-02"))} - ${getMonthYearDate(new Date("2024-05-02"))}`,
        timeInPos: getDateInPosition(new Date("2023-08-02"), new Date("2024-05-02")),
        jobDesc: "Within one of three residence building on the university of campus. A resident assistants job is to build a community around a given floor through attending committee meetings, planning a floor event each month, one-on-one chats with every student, collaborating with other RAs to ensure all students feel welcome, and be on call for a night to watch each building and make sure everyone is safe.",
        skillsDeveloped: ["Time Management", "Event Planning", "Community Building", "Team Building", "Problem Solving", "Communication Skills"]
    },
    
    {
        jobType: "Education",
        jobTitle: "Teaching Assistant",
        companyName: `University of Windsor`,
        datesDisplay: `${getMonthYearDate(new Date("2024-09-02"))} - ${getMonthYearDate(new Date("2025-01-02"))}`,
        timeInPos: getDateInPosition(new Date("2023-09-02"), new Date("2025-01-02")),
        jobDesc: "The job of a Teaching assistant at the University of Windsor is to assist an assigned professor with teaching a specific subject. In this case, in COMP2120 'Object Oriented Programming', assisting the professor means hosting labs for students, proctoring for exams, answering emails and holding weekly office hours, and marking exams, labs, and assignments.",
        skillsDeveloped: ["Teaching", "Furthering Programming Skills", "Communication Skills", "Professionalism", "Time Management"]
    },

    {
        jobType: "General Labour",
        jobTitle: "Kennel Attendent",
        companyName: "Blenheim Veterinary Hospital",
        datesDisplay: `${getMonthYearDate(new Date("2018-11-24"))} - ${getMonthYearDate(new Date("2022-08-02"))}`,
        timeInPos: getDateInPosition(new Date("2018-11-24"), new Date("2022-08-02")),
        jobDesc: "Nightly clean of the veterinary hospital. This includes taking out the garbage, washing dishes, cleaning kennels and cages, disinfecting surfaces, vacuuming, mopping, and ensuring the building is locked up and clean for the next day.",
        skillsDeveloped: ["Time Management","Organization","Cleaning"]
    },
]



// End of jobs section


// Beginning of experiences section



export const courses = [
    {
        commonName: "Computer Networks",
        courseCode: "COMP3670",
        department: "Computer Science",
        description: "",
        learningGoals: "",
        projects: []
    },
    {
        commonName: "Web Information Systems Development",
        courseCode: "COMP3340",
        department: "Computer Science",
        description: "",
        learningGoals: "",
        projects: []
    },
    {
        commonName: "Advanced Website Design",
        courseCode: "COMP2707",
        department: "Computer Science",
        description: "",
        learningGoals: "",
        projects: []
    },
    {
        commonName: "Web Based Data Management",
        courseCode: "COMP3077",
        department: "Computer Science",
        description: "",
        learningGoals: "",
        projects: []
    },
    {
        commonName: "Database Management Systems",
        courseCode: "COMP3150",
        department: "Computer Science",
        description: "",
        learningGoals: "",
        projects: []

    },
    {
        commonName: "Data Analytics",
        courseCode: "COMP3250",
        department: "Computer Science",
        description: "",
        learningGoals: "",
        projects: []
    },
    {
        commonName: "Intro to Multimedia Systems",
        courseCode: "COMP3500",
        department: "Computer Science",
        description: "",
        learningGoals: "",
        projects: []
    },
    {
        commonName: "Intro to Computer Graphics",
        courseCode: "COMP3520",
        department: "Computer Science",
        description: "",
        learningGoals: "",
        projects: []
    },
    {
        commonName: "Language, Grammar Translators",
        courseCode: "COMP2140",
        department: "Computer Science",
        description: "",
        learningGoals: "",
        projects: []
    },
    {
        commonName: "Principles Of Programming Languages",
        courseCode: "COMP4400",
        department: "Computer Science",
        description: "",
        learningGoals: "",
        projects: [],
    },
];