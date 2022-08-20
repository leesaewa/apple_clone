// 전역변수를 피하기 위해 함수에 넣음.
(() => {
  const sceneInfo = [
    {
      // 0
      type: "sticky",
      // 애니메이션 스크롤. 기기의 높이 값에 따라 조정하기 위해 0으로 지정.
      heightNum: 5, //브라우저 높이의 5배로 scrollHeight세팅
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scrollsection-0"),
      },
    },
    {
      // 1
      type: "normal",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scrollsection-1"),
      },
    },
    {
      // 2
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scrollsection-2"),
      },
    },
    {
      // 3
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scrollsection-3"),
      },
    },
  ];

  function setLayout() {
    //각 스크롤 섹션의 높이 세팅
    for (let i = 0; i < sceneInfo.length; i++) {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum = window.innerHeight;
      sceneInfo[
        i
      ].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
    }
  }

  window.addEventListener("resize", setLayout);

  setLayout();
})();
