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
        <div class="card-buttons">
            <button onclick="alert('장바구니에 담았습니다')">🛒</button>
            <button onclick="alert('신청됐습니다!')">신청하기</button>
        </div>
        </div>
`;
}

function midClubBox() {
    const box = document.getElementById("content-box");
    box.innerHTML = ""
    showClubBox('꿈틀이','다빈치 캠퍼스 댄스 중앙 동아리입니다.')
    showClubBox('그림자 찾기','다빈치 캠퍼스 영화 중앙 동아리입니다')
}

function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  
  
function departClubBox() {
    const box = document.getElementById("content-box");
    box.innerHTML = `
      <div class="category-tabs">
        <button onclick="scrollToSection('art')">예공</button>
        <button onclick="scrollToSection('photo')">사진</button>
        <button onclick="scrollToSection('sports')">체육</button>
      </div>
        <div id="art" class="category-section">
          <h3>예술공학 동아리</h3>
          <p>예공 동아리1</p>
          <p>예공 동아리2</p>
          <p>예공 동아리3</p>
          <p>예공 동아리4</p>
        </div>
        <div id="photo" class="category-section">
          <h3>사진 동아리</h3>
          <p>사진 동아리1</p>
          <p>사진 동아리2</p>
          <p>사진 동아리3</p>
          <p>사진 동아리4</p>
          <p>사진 동아리5</p>
          <p>사진 동아리6</p>
        </div>
        <div id="sports" class="category-section">
          <h3>체육 동아리</h3>
          <p>동아리1</p>
          <p>동아리2</p>
          <p>동아리3</p>
          <p>동아리4</p>
          <p>동아리5</p>
          <p>동아리6</p>

        </div>
      </div>
    `;
  }

  