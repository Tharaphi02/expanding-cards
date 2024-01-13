const panels = document.querySelectorAll('.panel');


panels.forEach((a) => {
    a.addEventListener('click', () => {
        removeActiveClassess();
        a.classList.add('active');
    })
})

const removeActiveClassess = () => {
    panels.forEach((a) => {
        a.classList.remove('active');
    })
}
