import SceneManager from './SceneManager';

/*eslint-disable */
export default container => {
  const canvas = createCanvas(document, container);
  const sceneManager = new SceneManager(canvas);

  let canvasHalfWidth;
  let canvasHalfHeight;

  function createCanvas(document, containerEl) {
    const canvasEl = document.createElement('canvas');
    containerEl.appendChild(canvasEl);
    return canvasEl;
  }

  function resizeCanvas() {
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    canvasHalfWidth = Math.round(canvas.offsetWidth / 2);
    canvasHalfHeight = Math.round(canvas.offsetHeight / 2);

    sceneManager.onWindowResize()
  }

  function mouseMove({screenX, screenY}) {
    sceneManager.onMouseMove(screenX - canvasHalfWidth, screenY - canvasHalfHeight);
  }

  function bindEventListeners() {
    window.onresize = resizeCanvas;
    window.onmousemove = mouseMove;
    resizeCanvas();
  }

  function render(time) {

    requestAnimationFrame(render);
    sceneManager.update();
  }

  bindEventListeners();
  render();
}
/*eslint-enable */