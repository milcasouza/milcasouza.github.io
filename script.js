// Projects-Section (abrir imagens como popup)
document.querySelectorAll(".work-list img").forEach(image => {
    image.onclick = () => {
        document.querySelector(".popup-image").style.display = "block";
        document.querySelector(".popup-image img").src = image.getAttribute("src");
    }
});

// Projects-Section (para fechar as imagens abertas (span))
document.querySelector(".popup-image span").onclick = () => {
    document.querySelector(".popup-image").style.display = "none";
}

// Projects-Section (Ver mais)
let loadMoreBtn = document.querySelector(".button-projects");
let currentItem = 3;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll(".work")];
    for (let i = currentItem; i < currentItem + 3; i++) {
        boxes[i].style.display = "inline-block";
    }
    currentItem += 3;
// Projects-Section (Ver mais) - Botão (Ver mais) não aparece após os últimos projetos carregados
    if(currentItem >= boxes.length) {
        loadMoreBtn.style.display = "none";
    }
}

// Menu Mobile
let sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}
