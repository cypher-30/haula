/**
 * This script duplicates the children of elements with class "scroller-inner"
 * inside elements with class "scroller" to create an infinite scrolling animation.
 * It respects the user's "prefers-reduced-motion" setting to disable animation if needed.
 */

const scrollers = document.querySelectorAll(".scroller");

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}

function addAnimation(){
    scrollers.forEach((scroller) =>{

        if (scroller.getAttribute("data-animated") === "true") {
                return;
            }

        scroller.setAttribute("data-animated" ,true);

        const scrollerInner = scroller.querySelector(".scroller-inner");
        const scrollerContent = Array.from(scrollerInner.children);

       scrollerContent.forEach((item) =>{
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);

        scrollerInner.appendChild(duplicatedItem);
       })
    })
}


