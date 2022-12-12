
export function pageTransition() {
    const elements = document.querySelectorAll('[data-transition-start]')
    const transition_el = document.querySelector('.transition');

    elements.forEach((element) => {
        element.addEventListener("click", () => {
            transition_el.classList.add('is-active');
            setTimeout(() => {
                transition_el.classList.remove('is-active');
            }, 200);
        })
    })
}