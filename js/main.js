// 전역변수를 피하기 위해 함수에 넣음.
(() => {
  let yOffset = 0; //window.pageYOffset 대신 쓸 변수
  let prevScrollHight = 0; //현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
  let currentScene = 0; //현재 활성화된(눈 앞에 보고있는) 씬(scroll-section)

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
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      sceneInfo[
        i
      ].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
    }

    yOffset = window.pageYOffset;
    let totalScrollHeight = 0;
    for (let i = 0; sceneInfo.length; i++) {
      totalScrollHeight += sceneInfo[i].scrollHeight;
      if (totalScrollHeight >= yOffset) {
        currentScene = i;
        break;
      }
    }

    document.body.setAttribute("id", `show-scene-${currentScene}`); //body에 id 넣기
  }

  function scrollLoop() {
    // 스크롤 확인
    prevScrollHight = 0;
    for (let i = 0; i < currentScene; i++) {
      prevScrollHight += sceneInfo[i].scrollHeight;
    }

    if (yOffset > prevScrollHight + sceneInfo[currentScene].scrollHeight) {
      currentScene++;
      document.body.setAttribute("id", `show-scene-${currentScene}`); //body에 id 넣기
    }

    if (yOffset < prevScrollHight) {
      if (currentScene === 0) return; //브라우저 바운스 효과로 인해 마이너스가 되는 것을 방지(모바일)
      currentScene--;
      document.body.setAttribute("id", `show-scene-${currentScene}`); //body에 id 넣기
    }
  }

  window.addEventListener("scroll", () => {
    yOffset = window.pageYOffset;
    scrollLoop();
  });
  window.addEventListener("load", setLayout);
  // DOMContentLoaded는 dom객체만 로드 끝나면 실행함. load는 이미지파일까지 로드 끝나면 실행
  window.addEventListener("resize", setLayout);
})();
