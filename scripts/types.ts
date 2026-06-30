export interface Project {
    
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