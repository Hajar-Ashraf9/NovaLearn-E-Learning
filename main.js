//dark and light mood 🌚
let icone = document.querySelector("#theme-toggle")
let body = document.body

icone.addEventListener("click", function(){
    if(body.classList.contains("light")){
        body.classList.replace("light","dark");
        localStorage.setItem("them","dark");
    }
    else{
        body.classList.replace("dark","light");
        localStorage.setItem("them","light");

    }

})

let saveThem = localStorage.getItem("them")
if(saveThem==="dark"){
    body.classList.replace("light","dark");
}
else if(saveThem==="light"){
    body.classList.replace("dark","light")
}

//Search Filtering

let seaRch = document.querySelector("#search")
let taBle = document.querySelectorAll("tbody tr,.stat-card, .faq-teaser-box, .inst-mini, .test-teaser-box, details, .info-card, .art, .price-table-wrap")

seaRch.addEventListener("input",function () {
    let modeFliter = seaRch.value.toLowerCase();
    taBle.forEach(element => {
        let teXt = element.textContent.toLowerCase();
        if(teXt.includes(modeFliter)){
            element.style.display="";
        }
        else{
            element.style.display="none";
        }
    });

})

//daynamic courses
let courses = {
    1: {
        name: "Web Development Fundamentals",
        overview: "This course provides a comprehensive introduction...",
        image: "img/1.png",
        syllabus: [
            { week: "Week 1", topic: "HTML5 Basics", desc: "Introduction to HTML5..." },
            { week: "Week 2", topic: "CSS3 Fundamentals", desc: "CSS3 Styling Basics..." },
            { week: "Week 3", topic: "Layouts", desc: "CSS Flexbox, Grid..." },
            { week: "Week 4", topic: "Responsive Design", desc: "Media Queries..." }
        ],
        prerequisites: [
            "Basic computer usage skills and internet access.",
            "A code editor installed (e.g., Visual Studio Code).",
            "Motivation to learn and practice daily.",
            "No prior programming experience required."
        ]
    },2: {
    name: "Interactive Web with JavaScript",
    overview: "Master JavaScript to create dynamic, interactive web pages. Learn DOM manipulation, event handling, ES6 features, and asynchronous JavaScript.",
    image: "img/2.png",
    syllabus: [
        { week: "Week 1", topic: "JS Syntax & DOM", desc: "Understanding JavaScript variables, functions, and manipulating HTML elements via DOM." },
            { week: "Week 2", topic: "Events & Interactivity", desc: "Handling user events, form validations, and interactive components." },
            { week: "Week 3", topic: "ES6+ Features", desc: "Working with arrow functions, array methods, destructuring, and template literals." },
            { week: "Week 4", topic: "Async JS & APIs", desc: "Understanding Promises, Fetch API, async/await, and working with external JSON data." },
            { week: "Week 5", topic: "Storage & State", desc: "Managing browser data using localStorage, sessionStorage, and basic state patterns." },
            { week: "Week 6", topic: "Final JS Project", desc: "Building a fully functional interactive web application from scratch." }
    ],
    prerequisites: [
        "Basic knowledge of HTML and CSS.",
        "Understanding of basic web page structure.",
        "A code editor (e.g., Visual Studio Code).",
        "Willingness to practice JavaScript logic daily."
    ]
},3: {
    name: "Modern Frontend with React",
    overview: "Learn how to build scalable, high-performance single-page applications using React.js, hooks, component-based architecture, and modern state management.",
    image: "img/3.png",
    syllabus: [
        { week: "Week 1", topic: "React Basics", desc: "Introduction to JSX, functional components, and React DOM." },
        { week: "Week 2", topic: "Props & State", desc: "Managing component state using useState and passing data with props." },
        { week: "Week 3", topic: "Hooks & Lifecycle", desc: "Deep dive into useEffect, side effects, and custom hooks." },
        { week: "Week 4", topic: "Router & Navigation", desc: "Creating multi-page navigation using React Router." },
        { week: "Week 5", topic: "Context & State Management", desc: "Managing global app state using React Context API." },
        { week: "Week 6", topic: "API Integration", desc: "Connecting React frontend with REST APIs." },
        { week: "Week 7", topic: "Styling & UI Libraries", desc: "Styling React components using CSS Modules and Tailwind/Bootstrap." },
        { week: "Week 8", topic: "Deployment & Capstone", desc: "Building, optimizing, and deploying a React production app." }
    ],
    prerequisites: [
        "Solid foundation in HTML, CSS, and modern JavaScript (ES6+).",
        "Familiarity with DOM manipulation and JS functions.",
        "Node.js installed on your computer."
    ]
}}
if(document.getElementById('courseName')){
// Read data from the URL using URLSearchParams
let urlData= new URLSearchParams(window.location.search);
// Get the "id" value from the URL
let getData =urlData.get("id")
// Get the matching course data dynamically using the id
let getCourse= courses[getData]
console.log(getCourse)
// Display basic course info
document.getElementById("courseName").textContent = getCourse.name;
document.getElementById("courseOverview").textContent= getCourse.overview;
document.getElementById("courseImage").src= getCourse.image;

//details courses
// Build the syllabus table rows dynamically
let deTails =document.getElementById('syllabusBody')
deTails.innerHTML = "";  
getCourse.syllabus.forEach(item =>{
    deTails.innerHTML+= `
    <tr>
            <td data-label="Week">${item.week}</td>
            <td data-label="Topic">${item.topic}</td>
            <td data-label="Description">${item.desc}</td>
        </tr>
    `
});

//Course Prerequisites
// Build the prerequisites list dynamically
let coursePrer = document.getElementById('prer')
coursePrer.innerHTML = "";  
getCourse.prerequisites.forEach(item =>{
    coursePrer.innerHTML+= 
    `
    <li>${item}</li>
    `
})
}

//cart
let plans = {
    basic: { name: "Basic Plan", price: 29 },
    pro: { name: "Pro Plan - Annual Access", price: 59 },
    ultimate: { name: "Ultimate Plan", price: 99 }
};

if(document.getElementById('planName')){
let planData = new URLSearchParams(window.location.search)
let getPlan = planData.get('plan')


let getData = plans[getPlan];

document.getElementById('planName').textContent=getData.name;
document.getElementById('Price').textContent= "$"+ getData.price+ "/month";
document.getElementById('totalPrice').textContent ="$" + (getData.price*12);
}
//checkout 
if(document.getElementById('planName')){
let checkData = new URLSearchParams(window.location.search)
let cartPlan =checkData.get('plan')
let checkoutBtn = document.getElementById("outBtn")
if ( checkoutBtn && cartPlan){
    checkoutBtn.href= "out.html?plan=" + cartPlan
}
}
//Confirmation
let confirmData= new URLSearchParams(window.location.search)
let confirmPlan =confirmData.get('plan')
if(document.getElementById('planNam')){
    let confirmGet = plans[confirmPlan];
    if(confirmData){
        document.getElementById('planNam').textContent=confirmGet.name
        document.getElementById('Pric').textContent= "$"+ confirmGet.price+ "/month";
        document.getElementById('totalPric').textContent ="$" + (confirmGet.price*12);
    }
    //Order ID
    let randoumId= Math.floor(1000 + Math.random() * 9999)
    document.getElementById("order").textContent= "#ORD-2026-"+ randoumId
}
//check out
let payForm= document.getElementById('payform')
if(payForm){
    payForm.addEventListener('submit',function(e){
        e.preventDefault();
        let currentData= new URLSearchParams(window.location.search)
        let currentPlan = currentData.get('plan')
        window.location.href = "confirm.html?plan=" + currentPlan;

    })
}