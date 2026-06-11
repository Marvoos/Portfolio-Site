import { courses } from '../main.js';
import { jobs } from '../main.js';
const courseContainer = document.getElementById("courses");
// Beginning of Jumbotron button programming

/*const jumboDescTxt = document.getElementById("jumbo-desc");
const jumboRoundBtnDiv = document.querySelector(".round-btn-div");
let roundBtnSelected = 0;
const currYear = "Fourth year";
const currUniversity = ["https://www.uwindsor.ca/", "the University of Windsor"];
const currProgram = ["https://www.future.uwindsor.ca/program/computer-science-general/", "Computer Science"];
const ageOfMe = parseInt(((new Date()) - (new Date("2004-11-24"))) / 3.154e+10);
const jumboBodyText = [
    `<p>I'm Kayden! Of course, you already know that. So let's get into it...<br></p>`,
    `<p>At <span class="highlight-txt">${ageOfMe} years old</span> I am an aspiring <span class="highlight-txt">programmer</span> and <span class="highlight-txt">creative</span> dedicated to bringing an <span class="highlight-txt">imaginative mind</span> to the field.</p>`,
    `<p>I am a <span class="highlight-txt">lifelong learner</span> who will attempt to learn anything when given the right resources and time.</p>`,
    `<p>On this page, I have given you the chance to view my projects, my resume, and my skills development experience.</p>`
];


function changeTextIndex(newIndex) {
    jumboDescTxt.innerHTML = "";
    jumboDescTxt.innerHTML = jumboBodyText[newIndex];
    roundBtnSelected = newIndex;
}

changeTextIndex(roundBtnSelected);

jumboBodyText.forEach(() => {
    const jumboRoundBtn = document.createElement('button');
    jumboRoundBtn.classList.add('round-btn');
    jumboRoundBtnDiv.appendChild(jumboRoundBtn);
    
});

const jumboRoundBtns = document.querySelectorAll('.round-btn');

jumboRoundBtns.forEach((val, i) => {
    jumboRoundBtns[roundBtnSelected].classList.add('selected');
    jumboRoundBtns[i].addEventListener('click', () => {
        
        jumboRoundBtns[roundBtnSelected].classList.remove('selected');

        roundBtnSelected = i;
        changeTextIndex(i);
        jumboRoundBtns[i].classList.add('selected');
    });
});*/




courses.forEach((course) => {
    const courseName = course.commonName;
    const department = course.department;
    const courseCode = course.courseCode;
    //const description = course.description;
    
    const courseCardDiv = document.createElement("div");
    const titleDiv = document.createElement("div");
    const courseNameh3 = document.createElement("h3");
    const courseCodeh4 = document.createElement("h4");
    const departmentP = document.createElement("p");
    const seeMoreBtn = document.createElement("a");

    seeMoreBtn.classList.add("button");
    seeMoreBtn.href = `courses/index.html?course=${courseCode}`;
    

    seeMoreBtn.textContent = "See More";

    courseCardDiv.classList.add("course-card", "half-col");
   

    courseNameh3.textContent = courseName;
    departmentP.textContent = department;
    courseCodeh4.textContent = courseCode;

    titleDiv.appendChild(courseNameh3);
    titleDiv.appendChild(courseCodeh4)
    titleDiv.appendChild(departmentP);
    courseCardDiv.appendChild(titleDiv);
    courseCardDiv.appendChild(seeMoreBtn);
    courseContainer.appendChild(courseCardDiv);


})