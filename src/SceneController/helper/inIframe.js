/**
 * check if the function is called inside an iframe
 * @return {boolean}
 */
export function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}
