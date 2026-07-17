// Import the jobs array from main.ts and the Job type from types.ts 
import { jobs } from './main';
import type { Job } from './types';

// Important education array from main.ts and Education type from types.ts
import { education } from './main';
import type { Education } from './types';


// Import project data from main.ts and Project type from types.ts
import { projects } from './main';
import type { Project } from './types';

import { skills } from './main';
import type { Skill } from './types';

import { filterEvent, displayFilter } from './filterFunc';

const techSkillsDiv = document.getElementById("technical-skills-container");
// Retrieve the outer container div to put the jobs inside.


const projectContainerDiv = document.getElementById("projects-div-container"); 
let currentProjCard: number = 0;
const projLeftBtn = document.getElementById("btn-left");
const projRightBtn = document.getElementById("btn-right");

const jobCardsDivContainer = document.getElementById('jobs');
const jobFilterId = "job-types";

const educationExperience = document.getElementById('education-cards');




const techSkillsList = () => {
    const skillTypes : string[] = Object.keys(skills);
    skillTypes.forEach((skillType) => {
        if (skills[skillType]) {
            const skillDiv = document.createElement("div");
            const skillh2 = document.createElement("h3");
            skillh2.textContent = `${skillType}`;

            techSkillsDiv?.appendChild(skillh2);

            skills[skillType].forEach((skill) => {
                const {
                    icon,
                    skillName,
                    searchName
                } = skill;


                const iconClassArr = icon.split(" ");
                const skillCardA = document.createElement("a");
                const skillCardIcon = document.createElement("i");
                const skillCardBody = document.createElement("div");
                const skillNameP = document.createElement("p");
                
                skillCardIcon.classList.add(...iconClassArr);
                skillNameP.textContent = skillName;
                skillCardA.href = `./projects/index.html?skill=${searchName}`;

                skillCardA.appendChild(skillCardIcon);
                skillCardBody.appendChild(skillNameP);
                skillCardA.appendChild(skillCardBody);
                skillDiv.appendChild(skillCardA);

            });

            techSkillsDiv?.appendChild(skillDiv);
            
        }
        
    });
}



const displayProjects = (projects: Project[], projectLimit: number) => {
    let projectCardsDiv = document.getElementById("project-cards-div");
    if (projectLimit > projects.length) {
        projectLimit = projects.length;
        currentProjCard = Math.ceil(projects.length / 2) - 1;
    }
    else {
        currentProjCard = Math.ceil(projectLimit / 2) - 1;
    }

    if (!projectCardsDiv) {
        projectCardsDiv = document.createElement("div");
        projectCardsDiv.id = "project-cards-div";
        projectContainerDiv?.appendChild(projectCardsDiv);
    }

    projectCardsDiv.replaceChildren();
    
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
        const projectTypeP = document.createElement("p");
        projectTypeP.classList.add("type");
        const projectImg = document.createElement("img");
        const projectTitleh3 = document.createElement("h4");
        const projectIntervalP = document.createElement("p");

        projectCardA.href = `projects/index.html?project-name=${encodeURI(projTitle)}`;


        projectTypeP.textContent = type.join(", ");

        projectImg.src = (projImgs[0] && projImgs[0] !== "#") ? projImgs[0] : "https://placehold.net/400x400.png";
        projectImg.className = "proj-img";

        projectTitleh3.textContent = projTitle;

        projectIntervalP.textContent = `${projStart} - ${projFinish}`

        
        projectCardA.appendChild(projectImg);
        projectInfo.appendChild(projectTypeP);
        projectInfo.appendChild(projectTitleh3);
        projectInfo.appendChild(projectIntervalP);
        projectCardA.appendChild(projectInfo);
        
        projectCardsDiv.appendChild(projectCardA);


    }




}

const updateProjectDisplay = (projCards: NodeList) => {
    
    if (projCards) {
        for (let i = 0; i < projCards.length ; i++) {
            (projCards[i] as HTMLElement).classList.add("proj-oov");
            (projCards[i] as HTMLElement).classList.remove("proj-prev");
            (projCards[i] as HTMLElement).classList.remove("proj-next");
            (projCards[i] as HTMLElement).classList.remove("proj-active");
        }

        (projCards[currentProjCard] as HTMLElement).classList.remove("proj-prev");
        (projCards[currentProjCard] as HTMLElement).classList.remove("proj-next");
        (projCards[currentProjCard] as HTMLElement).classList.add("proj-active");

        let nextCard = currentProjCard + 1;
        let prevCard = currentProjCard - 1;
        if (projCards[prevCard]) {
            (projCards[prevCard] as HTMLElement).classList.remove("proj-oov", "proj-prev", "proj-next");
            (projCards[prevCard] as HTMLElement).classList.add("proj-prev");
        }
        if (projCards[nextCard]) {
            (projCards[nextCard] as HTMLElement).classList.remove("proj-oov", "proj-prev", "proj-next");
            (projCards[nextCard] as HTMLElement).classList.add("proj-next");
        }

    }
    else {
        return;
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

techSkillsList();   
displayProjects(projects, 10);
const projCards : NodeList = document.querySelectorAll(".project-card");
updateProjectDisplay(projCards);
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

projLeftBtn?.addEventListener('click', () => {
    if (currentProjCard > 0) {
        currentProjCard -= 1;
    }
    updateProjectDisplay(projCards);

});

projRightBtn?.addEventListener('click', () => {
    if (currentProjCard < projCards.length - 1) {
        currentProjCard += 1;
    }
    updateProjectDisplay(projCards);
});

/*
 *
 *
 * Skills section
 * 
 */


