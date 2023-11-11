function refreshImgCash({src, target}) {
  const newImg = document.createElement(`img`);
  const hash = `${Date.now()}`;
  newImg.src = `${src}?new=${hash}`;

  const container = document.querySelector(target);
  container.innerHTML = ``;
  container.appendChild(newImg);
}

function insertByScreenId(screenId) {
  if (screenId === 2) {
    [
      {
        src: `img/module-3/img/primary-award.svg`,
        target: `.prizes__icon--journeys`,
      },
      {
        src: `img/module-3/img/secondary-award.svg`,
        target: `.prizes__icon--cases`,
      },
      {
        src: `img/module-3/img/additional-award.svg`,
        target: `.prizes__icon--additional`,
      },
    ].forEach(refreshImgCash);
  }
}

export default function initSvg(screenId) {
  insertByScreenId(screenId);

  document.body.addEventListener(`screenChanged`, ({detail}) => {
    insertByScreenId(detail.screenId);
  });
}
