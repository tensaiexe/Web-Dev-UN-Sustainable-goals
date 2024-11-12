//file          : goals.js
//Date          : 12/11/2024
//author(s)     : Harriet Smith
//Description   : javascript file for the goals page for the sustainable dev website
//Histroy       : 12/11/2024 -v1.0

document.querySelector('#goals'); //adds the text in the article with the goals people
var localJsonFile = "data.json";
document.addEventListener('DOMContentLoaded', ()=>{
    fetch(localJsonFile)
    .then(response => response.json())
    .then (responseData =>{console.log(responseData);
    for (item of responseData){ // loop to go through all the members and create seperate articles
        const Goals = document.createElement('article');
        const sectionElement =document.getElementById('goals');
        sectionElement.appendChild(Goals);
        const header = document.createElement('h2');
        header.textContent = item.Goal;
        Goals.appendChild(header);//adds the Goal as a header
        const para = document.createElement('p');
        para.textContent = item.Info;
        Goals.appendChild(para);//adds the info as a paragraph 
        }
    }) 
    .catch(error => console.error("Error fetching JSON data:", error));
});