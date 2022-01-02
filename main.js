var options = {
    strings: [' ', 'ELITE <br> BLOCKCHAIN <br> CYBERSECURITY'],
    typeSpeed: 20
};

var typed = new Typed('#page-title', options);



let sections = document.getElementsByTagName("section");
window.addEventListener('scroll', appearSection);
window.addEventListener('scroll', scaleHeader);

function appearSection() {

    for (let sc of sections) {
        let rect = sc.getBoundingClientRect()
        console.log(rect.bottom - rect.height, sc, sc.id);
        if (rect.bottom - rect.height < window.innerHeight / 1.7) {
            sc.classList.add("visible")
        } else {
            sc.classList.remove("visible")

        }
    }
}

function scaleHeader() {
    console.log(window.scrollY)
    if (window.scrollY > 100) {
        document.getElementById('scalableHeader').classList.add('mini')
    } else {
        document.getElementById('scalableHeader').classList.remove('mini')

    }

}