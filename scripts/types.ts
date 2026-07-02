export interface Project {
    projType: string[];
    projTitle: string;
    projStart: string;
    projFinish: string;
    projLanguages: string[];
    projDesc: string[];
}

export interface Job {
    jobType: string[];
    jobTitle: string;
    companyName: string;
    datesDisplay: string;
    timeInPos: string;
    jobDesc: string;
    skillsDeveloped: string[]; 
}

export interface Education {
    degreeType: string;
    degreeName: string;
    datesDisplay: string;
    timeInPos: string;
    degFocus: string[];
}