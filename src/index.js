import _ from 'lodash';
import './style.css';



(function(){

    const content = document.getElementById("content");
    const header = document.getElementById("header");

    function newDiv(content,classList,id){
    const newDiv = document.createElement("div");
    newDiv.textContent = content
    if(classList !== ""){
    newDiv.classList.add(classList)
    }
    if(id !== undefined){
        newDiv.id = id;
    }
    return newDiv;
}

//Header nav bar
header.appendChild(newDiv("","menu-nav"))
const menuNav = document.querySelector(".menu-nav")
menuNav.appendChild(newDiv("Home","","home"));
menuNav.appendChild(newDiv("Menu","","menu"));
menuNav.appendChild(newDiv("Contact","","contact"));

const homeTab = document.getElementById("home");
homeTab.addEventListener("click",()=>{
    content.textContent = "";
    home();
})

const menuTab = document.getElementById("menu")
menuTab.addEventListener("click",()=>{
    content.textContent = "";
    menu();
})

const contactTab = document.getElementById("contact")
contactTab.addEventListener("click",()=>{
    content.textContent = "";
    contact();
})


//Menu
function menu(){
    content.appendChild(newDiv("","menu-title"))
    const menuTitle = document.querySelector(".menu-title");
    menuTitle.appendChild(newDiv("Menu","menu"))


    content.appendChild(newDiv("","steak-container"));
    const steakCont = document.querySelector(".steak-container");
    steakCont.appendChild(newDiv("","steak"));
    const steak = document.querySelector(".steak")
    steak.appendChild(newDiv("Big ol' Cowboy Steak","steak-name"))
    steak.appendChild(newDiv("Delicious cut of the finest MartianMooCow, 100% moondust fed. Free range. Organic.","steak-description"))
    steak.appendChild(newDiv("Price: 32 Rupees","cost"))
};

//Contact
function contact(){
    content.appendChild(newDiv("","contact-container"))
    const contactCont = document.querySelector(".contact-container")
    contactCont.appendChild(newDiv("","contact-inner"))
    const contactIn = document.querySelector(".contact-inner");
    contactIn.appendChild(newDiv("","crying"))
    const cry = document.querySelector(".crying")
}


//Home
function home(){
content.appendChild(newDiv("","heading-container"))
const headCont = document.querySelector(".heading-container");
headCont.appendChild(newDiv("","heading"))
const heading = document.querySelector(".heading");
heading.appendChild(newDiv(
    "MartianMooCow's Steakhouse",
    "name"
));

content.appendChild(newDiv("","review-container"))
const reviewCont = document.querySelector(".review-container");
reviewCont.appendChild(newDiv("","review"))
const review = document.querySelector(".review")
review.appendChild(newDiv(
    "Martian's has the best cut of steak in space! The atmosphere is nonexistent and the customer service will make you feel like you're out of this world! This is exactly the kind of planet you would visit again!",
    "description"
));
review.appendChild(newDiv(
    "-Chris P. Bacon",
    "customer"
));

content.appendChild(newDiv("","hours-container"));
const hoursCont = document.querySelector(".hours-container");
hoursCont.appendChild(newDiv("","hours"));
const hours = document.querySelector(".hours");
hours.appendChild(newDiv("Hours","times"));
hours.appendChild(newDiv("Sunday: Closed","sunday"));
hours.appendChild(newDiv("Monday: 8AM-8PM","monday"))
hours.appendChild(newDiv("Tuesday: 8AM-8PM","tuesday"))
hours.appendChild(newDiv("Wednesday: 8AM-8PM","wednesday"))
hours.appendChild(newDiv("Thursday: 8AM-8PM","thursday"))
hours.appendChild(newDiv("Friday: 8AM-8PM","friday"))
hours.appendChild(newDiv("Saturday: Closed","saturday"))

content.appendChild(newDiv("","location-container"));
const locCont = document.querySelector(".location-container");
locCont.appendChild(newDiv("","location-inner"));
const locInner = document.querySelector(".location-inner");
locInner.appendChild(newDiv("Location","location"));
locInner.appendChild(newDiv("420 Mars Platform, DeepSpace, Sector 9","address")) 
};

home();



})();