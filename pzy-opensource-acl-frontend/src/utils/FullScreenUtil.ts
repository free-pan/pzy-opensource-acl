/**
 * 将指定dom元素全屏显示
 * @param dom html的dom元素
 */
export function fullScreen(dom: any) {
  if (dom.requestFullscreen) {
    dom.requestFullscreen();
  } else if (dom.mozRequestFullScreen) {
    dom.mozRequestFullScreen();
  } else if (dom.webkitRequestFullScreen) {
    dom.webkitRequestFullScreen();
  }
}

/**
 * 将指定dom元素退出全屏
 * @param dom
 */
export function exitFullScreen() {
  if (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement
  ) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}
