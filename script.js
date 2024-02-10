let answers = document.querySelectorAll(".accordion");
answers.forEach((event) => {
    event.addEventListener('click', () => {
        let imgClose = event.querySelector('.img-close');
        if (event.classList.contains("active")) {
            event.classList.remove("active");
            imgClose.src = "/assets/images/icon-plus.svg";
        } else {
            event.classList.add("active");
            imgClose.src = "/assets/images/icon-minus.svg";
        }
    })
});

