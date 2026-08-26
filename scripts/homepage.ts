// Import the jobs array from main.ts and the Job type from types.ts 
import { jobs } from './main';
import type { Job } from './types';

// Important education array from main.ts and Education type from types.ts
import { education } from './main';
import type { Education } from './types';


// Import project data from main.ts and Project type from types.ts
import { projects } from './main';
import type { Project } from './types';

import { filterEvent, displayFilter } from './filterFunc';


const projectContainerDiv = document.querySelector(".section.projects"); 

const jobCardsDivContainer = document.getElementById('jobs');
const jobFilterId = "job-types";

const educationExperience = document.getElementById('education-cards');






const displayProjects = (projects: Project[], projectLimit: number) => {
    let projectCardsDiv = document.getElementById("project-cards-div");
    if (projectLimit > projects.length) {
        projectLimit = projects.length;
    }

    if (!projectCardsDiv) {
        projectCardsDiv = document.createElement("div");
        projectCardsDiv.id = "project-cards-div";
        projectContainerDiv?.appendChild(projectCardsDiv);
    }

    for (let projIndex = 0; projIndex < projectLimit; projIndex++) {

        let {
            type,
            projImgs,
            projTitle,
            projStart,
            projFinish
        } = projects[projIndex] as Project;


        if (projTitle.length > 40) {
            projTitle = `${projTitle.slice(0, 40)}...`;
        }


        const projectCardA = document.createElement("a");
        projectCardA.classList.add("project-card");

        const projectInfo = document.createElement("div");
        projectInfo.classList.add('proj-info');
        const projectTypeP = document.createElement("p");
        projectTypeP.classList.add("proj-type");
        const projectImg = document.createElement("img");
        const projectTitleh4 = document.createElement("h4");
        projectTitleh4.classList.add('proj-title');
        const projectIntervalP = document.createElement("p");
        projectIntervalP.classList.add('proj-interval');

        projectCardA.href = `projects/index.html?project-name=${encodeURI(projTitle)}`;


        projectTypeP.textContent = type.join(", ");

        projectImg.src = (projImgs[0] && projImgs[0] !== "#") ? projImgs[0] : "https://placehold.net/600x400.png";
        projectImg.className = "proj-img";

        projectTitleh4.textContent = projTitle;

        projectIntervalP.textContent = `${projStart} - ${projFinish}`

        
        projectCardA.appendChild(projectImg);
        projectInfo.appendChild(projectTypeP);
        projectInfo.appendChild(projectTitleh4);
        projectInfo.appendChild(projectIntervalP);
        projectCardA.appendChild(projectInfo);
        
        projectCardsDiv.appendChild(projectCardA);


    }




}


const displayJobs = (jobArray: Job[]) => {
    // Retrieve the job cards container
    let jobCardsDiv = document.getElementById('job-cards');
    // If the container doesn't exist, then create it and append to the outer container div
    if (!jobCardsDiv) {
        jobCardsDiv = document.createElement('div');
        jobCardsDiv.id = 'job-cards';
        jobCardsDivContainer?.appendChild(jobCardsDiv);
    }

    // Delete the previous children to allow for filtering
    jobCardsDiv.replaceChildren(); 

    // For every job within the job array, create a card
    jobArray.forEach((job) => {
        // Create a card container called jobCard, this is the container that each job will go into
        const jobCard = document.createElement("div");
        // Add the card class to this card container

        // Destructure each property within the jobs
        const { type,
                jobTitle, 
                companyName, 
                datesDisplay, 
                timeInPos,
                jobDesc,
                skillsDeveloped } = job;
        
        // Make the corresponding elements for each property.
        const cardBody = document.createElement("div");

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
        skillsDevUl.classList.add("list");

        const skillsP = document.createElement("p");

        

        // Assign the corresponding text content
        typeP.textContent = type.join(', ');
        titleh3.textContent = jobTitle;
        compNameh5.textContent = companyName;
        dateDisplayP.textContent = datesDisplay;
        timeInPosP.textContent = timeInPos;
        jobDescP.textContent = jobDesc;
        skillsP.textContent = "Skills: ";
        
        // Create a list item for every skill listed within the skills developed property
        skillsDeveloped.forEach((skill) => {
            const skillLi = document.createElement("li");
            skillLi.textContent = skill;

            skillsDevUl.appendChild(skillLi);
        })
        

        // Append children  sequentially
        cardBody.appendChild(typeP);
        cardBody.appendChild(titleh3);
        cardBody.appendChild(compNameh5);
        cardBody.appendChild(dateDisplayP);
        cardBody.appendChild(timeInPosP);
        cardBody.appendChild(jobDescP);
        cardBody.appendChild(skillsP);
        cardBody.appendChild(skillsDevUl);

        // Retreive every job and their index within the list of jobs from main.js
        jobCard.appendChild(cardBody);
        jobCardsDiv?.appendChild(jobCard);
        
    })

}


/*
 * 
 * 
 * 
 * Education section
 */

const educationDisplay = (education: Education[]) => {
    // For each degree or education item, dynamically create a card
    education.forEach((degree) => {
        // Destructure the current degree item
        const {
            degType,
            degreeName,
            datesDisplay,
            timeInPos,
            degFocus
        } = degree

        // Create the inital container and set the class to card
        const educationCard = document.createElement('div');

        const cardBody = document.createElement("div");

        // Create all elements within this card
        const degreeTypeP = document.createElement('p');

        const degreeNameh3 = document.createElement('h3');

        const datesDisplayP = document.createElement('p');

        const timeInPosP = document.createElement('p');

        const degFocusUl = document.createElement("ul");

        const focusP = document.createElement("p");

        // Set elements to their corresponding text
        degreeTypeP.textContent = degType;
        degreeNameh3.textContent = degreeName;
        datesDisplayP.textContent = datesDisplay;
        timeInPosP.textContent = timeInPos;
        focusP.textContent = "Focus: ";
        
        // Create list items for the corresponding ul to ensure the focus property is displayed correctly
        degFocus.forEach(point => {
            const pointLi = document.createElement("li");
            pointLi.textContent = point;
            degFocusUl.appendChild(pointLi);
        });

        
        // Append each element onto the card container
        cardBody.appendChild(degreeTypeP);
        cardBody.appendChild(degreeNameh3);
        cardBody.appendChild(datesDisplayP);
        cardBody.appendChild(timeInPosP);
        cardBody.appendChild(focusP);
        cardBody.appendChild(degFocusUl);

        educationCard.appendChild(cardBody);
        // Append the card onto the div container for education cards
        educationExperience?.appendChild(educationCard);
    });


}
  
displayProjects(projects, 3);


// Initialize both the job filter and the jobs display
displayFilter(jobs, "by Job Type", jobFilterId, jobCardsDivContainer as HTMLDivElement);
displayJobs(jobs);
// Initialize the education display
educationDisplay(education);

/*
 * 
 * 
 * Event Listener Section
 */

// Select the job filter to add an event listener
const jobFilterSelect = document.getElementById(jobFilterId);


// On every change of the jobFilter, do the following...
jobFilterSelect?.addEventListener('change', (event) => {
    const filteredJobs = filterEvent(event, jobs);
    displayJobs(filteredJobs);
});

/*
 *
 *
 * Skills section
 * 
 */


