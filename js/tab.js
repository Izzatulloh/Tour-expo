const links = document.querySelectorAll(".ogr_main-link"),
    tabs = document.querySelectorAll(".tab-pane");


for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {

        e.preventDefault();


        for (let x = 0; x < links.length; x++) {
            links[x].classList.remove("active");
            tabs[x].classList.remove("active");
        }
        tab(i);
    });
}

function tab(i) {
    links[i].classList.add("active");
    tabs[i].classList.add("active");
}