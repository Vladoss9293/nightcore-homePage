export function menuToggle() {
    const buttonMenu = document.querySelector('.about_project__menu') as HTMLButtonElement;

    if (buttonMenu) {
        buttonMenu.addEventListener('click', () => {
            buttonMenu.classList.toggle('active');
        });
    }
}