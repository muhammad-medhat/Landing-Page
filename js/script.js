const activeSectionCss = 'section-active'
const collapseSectionCss = 'section-collapse'
const activeLi = 'li-active'
let activeSection = false
const navbarList = document.getElementById('navbar__list');
// const navbarList = document.getElementById('navbarSupportedContent');
// const navbarList = document.querySelector('.navbar-nav');

document.querySelectorAll('section').forEach(sec=>{
    // Build menu 
    generateLink(sec, navbarList)
    // Section Titles
    createHeader(sec)   
    createSectionTitle(sec) 
})


document.querySelectorAll('#navbar__list li').forEach(li =>{
    li.addEventListener('click', e => {
        const sec = document.getElementById(li.dataset.nav)
        toggleSectionsStyle(sec)
        smoothScroll(sec)
        activateLi(li)
    })

})

// Helper Functions

function generateLink (sec, menu)  {
    const li = document.createElement('li')
    
    // const liSpan = document.createElement('span')
    // liSpan.innerText = sec.dataset.name
    // li.appendChild( liSpan)
    li.innerHTML = sec.dataset.name
    li.setAttribute('data-nav', sec.id)
    li.classList.add('nav-item', 'scrollto')
    menu.appendChild(li);
}

function createHeader (sec)  {
    const lbl = document.createElement('h2')
    lbl.className = 'section-lbl'
    lbl.textContent = sec.dataset.name
    lbl.addEventListener('click', lb => {
        toggleSectionsStyle(sec)
    })
    sec.parentElement.insertBefore(lbl, sec)
}   
function toggleSectionsStyle(sec){

    // if (sec.style.display === "block") {
    if (sec.classList[sec.classList.length - 1] == collapseSectionCss) {
        // sec.style.display = "none";
        sec.classList.add(activeSectionCss)
    } else {
        // sec.style.display = "block";
        sec.classList.add(collapseSectionCss)
    } 
    collapseAll(sec)
}
function createSectionTitle(sec){
    const headerTitle = document.createElement('h3')
    headerTitle.className = 'section-lbl'
    headerTitle.textContent = sec.dataset.name
    sec.insertBefore(headerTitle, sec.firstChild)
}
function collapseAll(section){
    document.querySelectorAll('section').forEach(sec=>{
        if(sec != section){
            sec.classList.remove(activeSectionCss)
            // sec.style.display = 'none'
        }           
    })
}

function activateLi(li){
    removeClass(document.querySelectorAll('#navbar__list li'), activeLi)
    li.classList.toggle(activeLi)
}
function removeClass(elmts, cls){
    elmts.forEach(el=>{
        el.classList.remove(cls)
    })
}

function smoothScroll(sec){
    sec.scrollIntoView( {behavior:'smooth', block:'start'}   )
}

function moveTop(){
    const scrollTop = document.querySelector('main');
    scrollTop.scrollIntoView( {behavior:'smooth', block:'start'}   );
}

////////////////////////////////////////////////////////////////////////

// function reveal(sec){
//     sec.classList.add(activeSectionCss)
//     //toggleSectionsClass(sec, cls)
// }
// function hide(sec){
//     sec.classList.add(collapseSectionCss)
// }

// function revealHide(sec){
//     // reveal/hide sec
//     if(checkRevealed(sec)){
//         sec.classList.remove(activeSectionCss)
//         sec.classList.add(collapseSectionCss)
//     } else {
//         sec.classList.remove(collapseSectionCss)
//         sec.classList.add(activeSectionCss)
//     }
// }

// function checkRevealed(sec){
//     return sec.classList.contains(activeSectionCss)
// }
// function checkHidden(sec){
//     return sec.classList.contains(collapseSectionCss)
// }
// function hideOthers(sec){

//     // document.querySelectorAll(`:not(${sec.id})`).forEach(s=>{
//     document.querySelectorAll('section').forEach(s=>{
//         if(s!==sec){
//             hide(s)
//             // console.log(s.id)
//             // console.log('=====================');
//         }

//     })
// }
// //  
// /** collapseAll
//  * check if is active 
//  * then remove active
//  * set alternative class
//  * @param {*} section 
//  * @param {*} toggleClass 
//  * @param {*} alt 
//  */


// function toggleSectionsClass(section, toggleClass, alt=''){
// //     section.classList.toggle(toggleClass)
// // }

//     removeClass('section', toggleClass);
//     section.classList.toggle(toggleClass);
//     // if(section.classList.contains(toggleClass)){
//     //     section.classList.remove(toggleClass)
//     //     section.classList.add(alt)
//     // }
// }

// function removeClass(from, className){
//     var elements = document.querySelectorAll(from);
//     elements.forEach( el=> {
//         el.classList.remove(className);
//     });
// }