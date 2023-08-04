////////////////////////////////////////////////////////
// Updating the copyright year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
////////////////////////////////////////////////////////
//Mobile nav
const navBtn = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const navLink = document.querySelector(".main-nav-link");
navBtn.addEventListener("click", ()=>{
    headerEl.classList.toggle("nav-open");
});
navLink.addEventListener("click", ()=>{
    headerEl.classList.toggle("nav-open");
});
////////////////////////////////////////////////////////
//Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link)=>{
    link.addEventListener("click", (e)=>{
        e.preventDefault();
        const href = link.getAttribute("href");
        if (href === "#") window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
//////////////////////////////////////
//Add sticky class
const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(function(entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) document.body.classList.add("sticky");
    else document.body.classList.remove("sticky");
}, {
    //In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px"
});
observer.observe(sectionHeroEl);
////////////////////////////////////////////////////////
//Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);
    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

//# sourceMappingURL=index.026b7b1b.js.map
