export function isElementVisibleTop(target: HTMLElement) {
    const rect: DOMRect = target.getBoundingClientRect();
    return rect.top >= 0;
}