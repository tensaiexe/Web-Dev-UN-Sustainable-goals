//file          : index.js
//Date          : 12/11/2024
//author(s)     : Harriet Smith
//Description   : javascript file for the index page for the sustainable dev website
//Histroy       : 12/11/2024 -v1.0

document.querySelector('#overview');
var localJsonFile = "data.json";
document.addEventListener('DOMContentLoaded', ()=>{
    fetch(localJsonFile)
    .then(response => response.json())
    .then (responseData =>{console.log(responseData);
    for (item of responseData){ //im going to remove the loop im just to lazy today
        const Overview = document.createElement('article');
        const sectionElement =document.getElementById('overview');
        sectionElement.appendChild(Overview);
        const header = document.createElement('h2');
        header.textContent = item.overview;
        Overview.appendChild(header);
        const para = document.createElement('p');
        para.textContent = item.page1Info;
        Overview.appendChild(para);
    }
    }) 
    .catch(error => console.error("Error fetching JSON data:", error));
});