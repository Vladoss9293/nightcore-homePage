export function handleHeader() {
    const header: HTMLElement| null = document.querySelector('header');
    const presentation__about_project: HTMLElement | null = document.querySelector('.presentation__about_project');
    let isActive: boolean = false;

    const onScroll = () => {
        if (window.scrollY == 0) {
            isActive = false;
            if (!isActive) {
                header?.classList.remove('active')
                presentation__about_project?.style.setProperty('margin-top', '75px')
            }
        } else {
            isActive = true;
            if (isActive) {
                header?.classList.add('active');
                presentation__about_project?.style.setProperty('margin-top', '165px');
            }
        }
    }

    if (header && presentation__about_project) {
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }
}