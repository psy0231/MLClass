  // 정규 표현식, 천단위 ',' 출력
  function comma(su) {
    return su.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function add(su1, su2) {
    return su1 + su2;
  }
