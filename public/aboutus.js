//file          : aboutus.js
//Date          : 12/11/2024
//author(s)     : Harriet Smith
//Description   : javascript file for the aboutus page for the sustainable dev website
//Histroy       : 12/11/2024 -v1.0


document.querySelector('#people'); //adds the text in the article with the id people
var localJsonFile = "data.json";
document.addEventListener('DOMContentLoaded', ()=>{
    fetch(localJsonFile)
    .then(response => response.json())
    .then (responseData =>{console.log(responseData);
    for (item of responseData){ // loop to go through all the members and create seperate articles
        const People = document.createElement('article');
        const sectionElement =document.getElementById('people');
        sectionElement.appendChild(People);
        const header = document.createElement('h2');
        header.textContent = item.name;//name of the member
        People.appendChild(header);
        const para = document.createElement('p');
        para.textContent = item.personInfo;//info about member
        People.appendChild(para);
        }
    }) 
    .catch(error => console.error("Error fetching JSON data:", error));
});