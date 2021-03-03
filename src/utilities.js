export const isMobileBrowser = () => {
    return navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i) !== null ||
        document.documentElement.clientWidth < 768;
}