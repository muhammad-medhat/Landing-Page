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

const scrollTimeout = 5000; // 5 sec timeout

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function showNavbar(){
    const menu = document.querySelector('.navbar__menu');
    menu.classList.add('display-block');
}

function hideNavbar(){
    const menu = document.querySelector('.navbar__menu');
    menu.classList.add('display-none');
}

function inViewport(block){
    const rectTop = block.getBoundingClientRect().top;
   // console.log(rectTop +', ' + window.innerHeight);
    return rectTop < window.innerHeight
}
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function removeClass(from, className){
    var elements = document.querySelectorAll(from);
    elements.forEach( el=> {
        el.classList.remove(className);
    });
}

function createElement(tag, text, addElement, elClass=''){
    const el = document.createElement(tag);
    el.innerText=addElement.getAttribute(text);
    if(elClass != ''){
        el.classList.add(elClass);
    }

    addElement.prepend(el);
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
/* Suggested: Hide fixed navigation bar while not scrolling (it should still be present on page load).
    * Hint: setTimeout can be used to check when the user is no longer scrolling. 
    */
var  isScrolling;
document.addEventListener('scroll', function(){

    clearTimeout(isScrolling);
    isScrolling = setTimeout(hideNavbar, scrollTimeout);
});
document.addEventListener('mouseenter',showNavbar);

// Scroll to anchor ID using scrollTO event
function moveTop(){
    const scrollTop = document.querySelector('main');
    scrollTop.scrollIntoView( {behavior:'smooth', block:'start'}   );
}

/*
 * Suggested:
 * Add a scroll to top button on the page that’s only 
 * visible when the user scrolls below the fold of the page.
*/
document.addEventListener('scroll', function(){
    btn = document.querySelector('.buttom');
    if(isInViewport(btn)){
        btn.classList.add('fade-in');
    } else{
        if(btn.classList.contains('fade-in')){
            btn.classList.remove('fade-in')
            btn.classList.add('fade-out');
        }
    }
});

/*
 * Sugested: Make sections collapsible.
 */

const sectionsList = document.querySelectorAll('section');

sectionsList.forEach(element=>{
    
    createElement('h2', 'data-name', element, 'accordion');


    element.addEventListener('click', function(){    
        
        element.classList.toggle('active');

        var content = element.querySelector('.landing__container');
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
    });
});

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
        section.scrollIntoView( {behavior:'smooth', block:'start'}   );
        toggleSectionsClass(section, 'section-active');
    });
});

// Set sections as active
function toggleSectionsClass(section, toggleClass){
    removeClass('section', toggleClass);
    section.classList.toggle(toggleClass);
}