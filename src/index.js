// import pages
import breakfast from './pages/breakfast';
import lunch from './pages/lunch';
import dinner from './pages/dinner';

// get DOM elements
const navBreakfast = document.querySelector(".breakfast");
const navLunch = document.querySelector(".lunch");
const navDinner = document.querySelector(".dinner");
const content = document.getElementById("content")

// handle navigation
function handleClick(e) {
    const target = e.target.className;
    if (target === 'breakfast') {
        content.innerHTML = breakfast();
    } else if (target === 'lunch') {
        content.innerHTML = lunch();
    } else if (target === 'dinner') {
        content.innerHTML = dinner();
    }
} 

// listen for clicks to change content
navBreakfast.addEventListener("click", handleClick)
navLunch.addEventListener("click", handleClick)
navDinner.addEventListener("click", handleClick)
