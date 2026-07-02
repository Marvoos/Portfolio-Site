// Import the jobs array from main.ts and the Job type from types.ts 
import { jobs } from './main';
import type { Job } from './types';

// Important education array from main.ts and Education type from types.ts
import { education } from './main';
import type { Education } from './types';

// Retrieve the outer container div to put the jobs inside.
const jobCardsDivContainer = document.getElementById('jobs');

const educationExperience = document.getElementById('education-cards');

// Helper function to retrieve a set of all types. This prevents any duplicates from appearing within the list.
const getUniqueJobTypes = (): string[] => {
    // Map all job types into a flatmap to convert allTypes to a 1-dimensional array
    const allTypes: string[] = jobs.flatMap((job: Job) => job.jobType);
    // Convert allTypes array to a set and return this value
    return [...new Set(allTypes)];
}

// Dynamically create a job filter element that retrieves job types and creates a select field
const displayJobFilter = () => {
    // Build a functional JS filter
    const jobTypes = getUniqueJobTypes();

    // Create the label for the input
    const labelSelect = document.createElement("label");
    labelSelect.textContent = 'Filter by Job Type: ';
    labelSelect.htmlFor = "job-types";

    // Create the select element
    const selectElement = document.createElement("select");
    // Assign id and name 
    selectElement.id = "job-types";
    selectElement.name = "job-types"; 

    const jobTypeAll = document.createElement("option");
    jobTypeAll.value = "All";
    jobTypeAll.textContent = "All";
    selectElement.appendChild(jobTypeAll);

    jobTypes.forEach((jobtype, index) => {
        const jobTypeOption = document.createElement("option");
        jobTypeOption.value = jobtype;
        jobTypeOption.textContent = jobtype;
        selectElement.appendChild(jobTypeOption);
    });
    jobCardsDivContainer?.appendChild(labelSelect);
    jobCardsDivContainer?.appendChild(selectElement);

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
        
        // Create a list item for every skill listed within the skills developed property
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

        // Retreive every job and their index within the list of jobs from main.js
        jobCardsDiv?.appendChild(jobCard);
        
    })

}


/*
 * 
 * 
 * 
 * Education section
 */

const educationDisplay = () => {
    // For each degree or education item, dynamically create a card
    education.forEach((degree) => {
        // Destructure the current degree item
        const {
            degreeType,
            degreeName,
            datesDisplay,
            timeInPos,
            degFocus
        } = degree

        // Create the inital container and set the class to card
        const educationCard = document.createElement('div');
        educationCard.className = "card";

        // Create all elements within this card
        const degreeTypeP = document.createElement('p');
        const degreeNameh3 = document.createElement('h3');
        const datesDisplayP = document.createElement('p');
        const timeInPosP = document.createElement('p');
        const degFocusUl = document.createElement("ul");
        const focusP = document.createElement("p");

        // Set elements to their corresponding text
        degreeTypeP.textContent = degreeType;
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
        educationCard.appendChild(degreeTypeP);
        educationCard.appendChild(degreeNameh3);
        educationCard.appendChild(datesDisplayP);
        educationCard.appendChild(timeInPosP);
        educationCard.appendChild(focusP);
        educationCard.appendChild(degFocusUl);

        // Append the card onto the div container for education cards
        educationExperience?.appendChild(educationCard);
    });


}


// Initialize both the job filter and the jobs display
displayJobFilter();
displayJobs(jobs);
// Initialize the education display
educationDisplay();

/*
 * 
 * 
 * Event Listener Section
 */

// Select the job filter to add an event listener
const jobFilterSelect = document.getElementById("job-types");


// On every change of the jobFilter, do the following...
jobFilterSelect?.addEventListener('change', (event) => {
    // Retrieve the target of the filter's change event and cast as an HTMLInputElement
    const filterTarget = event.currentTarget as HTMLInputElement;
    // Retrieve the value of the event's target. This takes from the value attribute assigned in the filter creation function
    const filterValue = filterTarget.value;

    // If the filter value is equal to 'All' or 'all' then don't filter anything
    if (filterValue.toLowerCase() === "all") {
        displayJobs(jobs);
    }
    else {
        // Otherwise, filter based on job types
        const filteredJobs = jobs.filter((job) => {
            if (job.jobType.includes(filterValue)) return true;
        });

        console.log(filteredJobs);
        // Display the jobs once again
        displayJobs(filteredJobs);
    }

});

