export interface Project {
    type: string[];
    projLink: string;
    projImgs: string[];
    projTitle: string;
    projStart: string;
    projFinish: string;
    projLanguages: string[];
    projDesc: string;
    projFeatures: string[];
}

export interface Job {
    type: string[];
    jobTitle: string;
    companyName: string;
    datesDisplay: string;
    timeInPos: string;
    jobDesc: string;
    skillsDeveloped: string[]; 
}

export interface Education {
    degType: string;
    degreeName: string;
    datesDisplay: string;
    timeInPos: string;
    degFocus: string[];
}