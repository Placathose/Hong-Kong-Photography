const toggleTag = document.querySelector("a.toggle-nav");
const mainTag = document.querySelector("main");
const navTag = document.querySelector("nav");

// When I click the toggle tag, toggle a class of open on the main tag
// and if it's open make the toggle tag say closed
// and if not, make the toggle tag say open
toggleTag.addEventListener("click", function(){
    mainTag.classList.toggle("open")
    navTag.classList.toggle("open")

    if (mainTag.classList.contains("open")) {
        toggleTag.innerHTML = `<img src="./Assets/close.png"> Close`
    } else {
        toggleTag.innerHTML = `<img src="./Assets/menu.png"> Menu`
    }


})