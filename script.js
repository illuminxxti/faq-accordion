let answers = document.querySelectorAll(".accordion");
answers.forEach((event) => {
    event.addEventListener('click', () => {
        let imgClose = event.querySelector('.img-close');
        if (event.classList.contains("active")) {
            event.classList.remove("active");
            imgClose.src = "icon-plus.svg";
        } else {
            event.classList.add("active");
            imgClose.src = "icon-minus.svg";
        }
    })
});

