/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = [
    {id:"section1",  text:"Section 1", dataNav:'section1'}, 
    {id:"section2",  text:"Section 2", dataNav:'section2'},         
    {id:"section3",  text:"Section 3", dataNav:'section3'}, 
    {id:"section4",  text:"Section 4", dataNav:'section4'}, 
    {id:"section5",  text:"Section 5", dataNav:'section5'}, 
    {id:"section6",  text:"Section 6", dataNav:'section6'} 
];
const htmlSections = document.querySelectorAll('section');
const navItemsStyle = '#navbar__list li';

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function inViewport(block){
    const rectTop = block.getBoundingClientRect().top;
    return rectTop < window.innerHeight
}

function removeClass(from, className){
    var elements = document.querySelectorAll(from);
    elements.forEach( el=> {
        el.classList.remove(className);
    });
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', function(){

    htmlSections.forEach(sec=>{
        // console.log(sec);
        if(inViewport(sec)){
            removeClass('section', 'section-active');
            sec.classList.toggle('section-active');
        }
    });
});


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
const navbarList = document.getElementById('navbar__list');

for(let i = 0; i < sections.length; i++) {
    let li = document.createElement('li');
    li.textContent = sections[i].text;
    li.setAttribute('data-nav', sections[i].dataNav)
    navbarList.appendChild(li);
}

// Scroll to section on link click
const menuBar=document.querySelectorAll(navItemsStyle);
menuBar.forEach((element) => {

    element.addEventListener('click', function(){      
    
        removeClass(navItemsStyle, 'nav-active');
        element.classList.toggle('nav-active');

        let sectionId = element.getAttribute('data-nav');
        let section = document.getElementById(sectionId);
        //console.log(section);
        section.scrollIntoView( {behavior:'smooth', block:'start'}   );
        //navBlock.classList.toggle('active');
        toggleSectionsClass(sectionId, 'section-active');
    });
});

// Set sections as active
function toggleSectionsClass(sectionId, toggleClass){
    removeClass('section', toggleClass);
    section = document.getElementById(sectionId);
    section.classList.toggle(toggleClass);
}