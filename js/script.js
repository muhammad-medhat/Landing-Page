
const navbarList = document.getElementById('navbar__list');

document.querySelectorAll('section').forEach(sec=>{
    // Build menu 
    generateLink(sec, navbarList)
    // Section Titles
    createHeader(sec)    
    // Hide all
    sec.style.display = 'none'
})

// Helper Functions

function generateLink (sec, menu)  {
    const li = document.createElement('li')
    const liSpan = document.createElement('span')
    liSpan.innerText = sec.dataset.name
    console.log(liSpan)
    li.appendChild( liSpan)
    console.log(li);
    //li.setAttribute('data-nav', sec.dataNav)
    menu.appendChild(li);
}
function createHeader (sec)  {
    const lbl = document.createElement('h2')
    lbl.className = 'section-lbl'
    lbl.textContent = sec.dataset.name
    sec.parentElement.insertBefore(lbl, sec)
}
// collapseSec(sec){
//     sec.s
// }