let sections = document.getElementsByTagName("section");
let title = document.getElementById("page-title");
window.onload = function() {
    type()
}
window.addEventListener('scroll', scrollManagement)


function scrollManagement() {
    appearSection();
    scaleHeader();
    cardAppear();
    if (window.scrollY > 0 && window.scrollY < 15) {
        type()
    }
}

function cardAppear() {
    let cards = document.getElementsByClassName("card");
    for (let crd of cards) {
        if (crd.getBoundingClientRect().bottom < window.innerHeight) {
            crd.classList.add("visible")
        } else {
            crd.classList.remove("visible")
        }
    }

}

function appearSection() {

    for (let sc of sections) {
        let rect = sc.getBoundingClientRect()
        if (rect.bottom - rect.height < window.innerHeight / 1.7) {
            sc.classList.add("visible")
        } else {
            sc.classList.remove("visible")

        }
    }



}

function clearType() {
    if (title.nextElementSibling) {
        title.parentNode.removeChild(title.nextElementSibling);
        title.innerHTML = ""
    }
}

function type() {
    clearType()
    var options = {
        strings: [' ', 'ELITE <br> BLOCKCHAIN <br> CYBERSECURITY'],
        typeSpeed: 20
    };
    var typed = new Typed('#page-title', options);
}

function scaleHeader() {
    if (window.scrollY > 100) {
        document.getElementById('scalableHeader').classList.add('mini')
    } else {
        document.getElementById('scalableHeader').classList.remove('mini')

    }

}