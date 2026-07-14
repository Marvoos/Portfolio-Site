import { getUniqueTypes } from "./main";

export const filterEvent = (event: Event, array: Array<any>) : Array<any> => {
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
export const displayFilter = (array: Array<any>, selectText: String, idName: String, container: HTMLDivElement) => {
    // Build a functional JS filter
    const arrayTypes = getUniqueTypes(array);

    const filterField = document.createElement("div");

    // Create the label for the input
    const labelSelect = document.createElement("label");
    labelSelect.textContent = `Filter ${selectText}: `;
    labelSelect.htmlFor = `${idName}`;

    // Create the select element
    const selectElement = document.createElement("select");
    // Assign id and name 
    selectElement.id = `${idName}`;
    selectElement.name = `${idName}`; 


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