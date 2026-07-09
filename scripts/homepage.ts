// Import the jobs array from main.ts and the Job type from types.ts 
import { jobs } from './main';
import type { Job } from './types';

// Important education array from main.ts and Education type from types.ts
import { education } from './main';
import type { Education } from './types';


// Import project data from main.ts and Project type from types.ts
import { projects } from './main';
import type { Project } from './types';




// Retrieve the outer container div to put the jobs inside.
const jobCardsDivContainer = document.getElementById('jobs');

const educationExperience = document.getElementById('education-cards');

// Helper function to retrieve a set of all types. This prevents any duplicates from appearing within the list.
const getUniqueTypes = (array: Array<any>): string[] => {
    // Map all job types into a flatmap to convert allTypes to a 1-dimensional array
    const allTypes: string[] = array.flatMap((item) => item.type);
    // Convert allTypes array to a set and return this value
    return [...new Set(allTypes)];
}

const filterEvent = (event: Event, array: Array<any>) : Array<any> => {
    // Retrieve the target of the filter's change event and cast as an HTMLInputElement
    const filterTarget = event.currentTarget as HTMLInputElement;
    // Retrieve the value of the event's target. This takes from the value attribute assigned in the filter creation function
    const filterValue = filterTarget.value;

    // If the filter value is equal to 'All' or 'all' then don't filter anything
    if (filterValue.toLowerCase() === "all") {
        return array;
    }
    else {
        // Otherwise, filter based on job types
        const filteredArray = array.filter((item: any) => {
            if (item.type.includes(filterValue)) return true;
        });
        return filteredArray;
        
    }
}

// Dynamically create a job filter element that retrieves job types and creates a select field
const displayFilter = (array: Array<any>, selectText: String, idName: String, container: HTMLDivElement) => {
    // Build a functional JS filter
    const arrayTypes = getUniqueTypes(array);

    const filterField = document.createElement("div");
    filterField.classList.add("flex-display", "flex-column", "filter-field");

    // Create the label for the input
    const labelSelect = document.createElement("label");
    labelSelect.textContent = `Filter ${selectText}: `;
    labelSelect.htmlFor = `${idName}`;

    // Create the select element
    const selectElement = document.createElement("select");
    // Assign id and name 
    selectElement.id = `${idName}`;
    selectElement.name = `${idName}`; 

    selectElement.classList.add('filter-input');

    const typeAll = document.createElement("option");
    typeAll.value = "All";
    typeAll.textContent = "All";
    selectElement.appendChild(typeAll);

    arrayTypes.forEach((type: any) => {
        const typeOption = document.createElement("option");
        typeOption.value = type;
        typeOption.textContent = type;
        selectElement.appendChild(typeOption);
    });

    filterField?.appendChild(labelSelect);
    filterField?.appendChild(selectElement);
    container?.appendChild(filterField);

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
        jobCard.classList.add('card');

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
        cardBody.classList.add("card-body");

        // Job type needs a paragraph element
        const typeP = document.createElement("p");
        typeP.classList.add("type");

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
        educationCard.className = "card";

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        // Create all elements within this card
        const degreeTypeP = document.createElement('p');
        degreeTypeP.classList.add("type");

        const degreeNameh3 = document.createElement('h3');

        const datesDisplayP = document.createElement('p');

        const timeInPosP = document.createElement('p');

        const degFocusUl = document.createElement("ul");
        degFocusUl.classList.add("list");

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

const jobFilterId = "job-types";
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
 * Projects section 
 * 
 */

const projectContainerDiv = document.getElementById("projects-div-container"); 
let currentProjCard: number = 0;

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
        projectCardsDiv.classList.add("project-grid");
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


        const projectInfo = document.createElement("div");
        const projectTypeP = document.createElement("p");
        projectTypeP.classList.add("type");
        const projectImg = document.createElement("img");
        const projectTitleh3 = document.createElement("h3");
        const projectIntervalP = document.createElement("p");

        projectCardA.href = `projects/index.html?${encodeURI(projTitle)}`;
        projectCardA.classList.add("card", "project-card");

        projectInfo.classList.add("card-body");

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

displayProjects(projects, 10);
const projCards : NodeList = document.querySelectorAll(".project-card");

const updateProjectDisplay = () => {
    
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

updateProjectDisplay();

const projLeftBtn = document.getElementById("btn-left");
const projRightBtn = document.getElementById("btn-right");

projLeftBtn?.addEventListener('click', () => {
    if (currentProjCard > 0) {
        currentProjCard -= 1;
    }
    updateProjectDisplay();

});

projRightBtn?.addEventListener('click', () => {
    if (currentProjCard < projCards.length - 1) {
        currentProjCard += 1;
    }
    updateProjectDisplay();
});

