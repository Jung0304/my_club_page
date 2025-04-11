function expandButton(el) {
    el.classList.toggle("expanded");
}

function selectOnly(btn) {
    document.querySelectorAll('.button-row button').forEach(b => {
      b.classList.remove('active');
    });
    btn.classList.add('active');
}

function home() {
    window.location.href = "../index.html";
}

function showClubBox(text,intro) {
    const box = document.getElementById("content-box");
    box.innerHTML += `
        <div class="inner-card">
        <h3>${text}</h3>
        <p>${intro}</p>
        <button onclick="alert('신청됐습니다!')">신청하기</button>
        </div>
`;
}

function midClubBox() {
    const box = document.getElementById("content-box");
    box.innerHTML = "";
    showClubBox('꿈틀이','다빈치 캠퍼스 댄스 중앙동아리입니다.')
    showClubBox('봉사하자자','다빈치 캠퍼스 볼사 중앙동아리입니다.')
}

function departClubBox() {
    const box = document.getElementById("content-box");
    box.innerHTML = "";
    showClubBox('그림자찾기','다빈치 캠퍼스 댄스 중앙동아리입니다.')
    showClubBox('봉사하자자','다빈치 캠퍼스 볼사 중앙동아리입니다.')
  }