const COUNTER_MAX = 5 * 60 * 1000;
const FPS_INTERVAL = 100;

export default () => {
  const counter = document.querySelector(`.game__counter`);
  const [minutes, seconds] = counter.querySelectorAll(`span`);
  let requestId;

  function startCounter() {
    const start = Date.now();

    function tick() {
      requestId = requestAnimationFrame(tick);

      const elapsed = Date.now() - start;

      if (elapsed > FPS_INTERVAL && elapsed < COUNTER_MAX + FPS_INTERVAL) {
        count(elapsed);
      } else if (elapsed > COUNTER_MAX + FPS_INTERVAL) {
        stopCounter();
      }
    }

    requestId = requestAnimationFrame(tick);
  }

  function stopCounter() {
    cancelAnimationFrame(requestId);
  }

  function count(elapsed) {
    minutes.textContent = String(Math.floor(elapsed / 1000 / 60)).padStart(
        2,
        `0`
    );
    seconds.textContent = String(Math.floor((elapsed / 1000) % 60)).padStart(
        2,
        `0`
    );
  }

  window.addEventListener(`popstate`, () => {
    if (window.location.hash === `#game`) {
      startCounter();
    } else {
      stopCounter();
      minutes.textContent = `00`;
      seconds.textContent = `00`;
    }
  });

  window.addEventListener(`DOMContentLoaded`, () => {
    if (window.location.hash === `#game`) {
      startCounter();
    }
  });
};
