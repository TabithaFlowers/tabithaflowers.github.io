//Para scrollear horizontalmente
const scrollContainer = document.querySelector("cont");
const scroll_n = 150

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    if (evt.deltaY > 0)
        scrollContainer.scrollLeft += evt.deltaY-scroll_n;
    else
        scrollContainer.scrollLeft += evt.deltaY+scroll_n;

});
