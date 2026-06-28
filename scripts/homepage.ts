import { jobs } from './main';
import type { Job } from './types';

const jobExperience = document.getElementById('jobs');
const educationExperience = document.getElementById('education');

const getUniqueJobTypes = (): string[] => {

    const allTypes: string[] = jobs.flatMap((job: Job) => job.jobType);

    return ["All", ...new Set(allTypes)];
}

const displayJobFilter = () => {
    // Build a functional JS filter
    const jobTypes = getUniqueJobTypes();
    const selectElement = document.createElement("select");
    selectElement.id = "job-types";
    selectElement.name = "job-types"; 

    jobTypes.forEach((jobtype, index) => {
        const jobTypeOption = document.createElement("option");
        jobTypeOption.value = jobtype;
        jobTypeOption.textContent = jobtype;
        selectElement.appendChild(jobTypeOption);
    });
    
    jobExperience?.appendChild(selectElement);

}

function displayJobs() {
    displayJobFilter();

    // Retreive every job and their index within the list of jobs from main.js
    jobs.forEach((job, index) => {
        // Create a card container called jobCard, this is the container that each job will go into
        const jobCard = document.createElement("div");
        // Add the card class to this card container
        jobCard.classList.add('card');

        // Destructure each property within the jobs
        const { jobType, 
                jobTitle, 
                companyName, 
                datesDisplay, 
                timeInPos,
                jobDesc,
                skillsDeveloped } = job;
        
        // Make the corresponding elements for each property.
        // Job type needs a paragraph element
        const typeP = document.createElement("p");

        // The job title needs a heading element
        const titleh3 = document.createElement("h3");

        // The job company name needs a smaller heading element
        const compNameh5 = document.createElement("h5");

        // The dates listed require a paragraph element
        const dateDisplayP = document.createElement("p");

        // The time in position needs a paragraph element
        const timeInPosP = document.createElement("p");

        // The job description needs a paragraph element
        const jobDescP = document.createElement("p");

        // The skills developed requires an unordered list element
        const skillsDevUl = document.createElement("ul");

        const skillsP = document.createElement("p");

        

        // Assign the corresponding text content
        typeP.textContent = jobType.join(', ');
        titleh3.textContent = jobTitle;
        compNameh5.textContent = companyName;
        dateDisplayP.textContent = datesDisplay;
        timeInPosP.textContent = timeInPos;
        jobDescP.textContent = jobDesc;
        skillsP.textContent = "Skills: ";
        
        skillsDeveloped.forEach((skill) => {
            const skillLi = document.createElement("li");
            skillLi.textContent = skill;

            skillsDevUl.appendChild(skillLi);
        })
        

        // Append children  sequentially
        jobCard.appendChild(typeP);
        jobCard.appendChild(titleh3);
        jobCard.appendChild(compNameh5);
        jobCard.appendChild(dateDisplayP);
        jobCard.appendChild(timeInPosP);
        jobCard.appendChild(jobDescP);
        jobCard.appendChild(skillsP);
        jobCard.appendChild(skillsDevUl);

        jobExperience?.appendChild(jobCard);

        
    })
    
}

displayJobs();