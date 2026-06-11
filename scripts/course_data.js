import { courses } from '../main.js';

const params = new URLSearchParams(window.location.search);
const courseCode = params.get("course");
let courseObject;

for (let index = 0; index < courses.length; index++) {
    if (courses[index]["courseCode"] === courseCode) {
        courseObject = courses[index];
        break;
    }
}

console.log(courseObject);

const titleFunc = () => {
    const titleContainer = document.createElement("div");

    const commonNameEl = document.createElement("h2");
    const courseCodeEl = document.createElement("h3");
    const departmentEl = document.createElement("h4");
    const descriptionEl = document.createElement("p");

    commonNameEl.textContent = courseObject.commonName;
    courseCodeEl.textContent = courseObject.courseCode;
    departmentEl.textContent = courseObject.department;
    descriptionEl.textContent = courseObject.descriptionEl; 

    titleContainer.appendChild(commonNameEl);
    titleContainer.appendChild(courseCodeEl);
    titleContainer.appendChild(departmentEl);
    titleContainer.appendChild(descriptionEl);

    document.body.appendChild(titleContainer);
}

titleFunc();