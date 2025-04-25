function expandButton(el) {
    el.classList.toggle("expanded");
}

function selectOnly(btn) {
    document.querySelectorAll('.button-row button').forEach(b => {
      b.classList.remove('active');
    });
    btn.classList.add('active');
}

function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");

  const isActive = menu.classList.toggle("active");
  overlay.classList.toggle("active", isActive);
}

const currentPath = window.location.pathname.split("/").pop(); 
const links = document.querySelectorAll(".side-menu a");

links.forEach(link => {
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("active");
  }
});


function closeMenu() {
  document.getElementById("sideMenu").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}



function showClubBox(text,intro, targetId = "content-box") {
    const box = document.getElementById(targetId);
    box.innerHTML += `
      <div class="inner-card">
        <h3>${text}</h3>
        <p>${intro}</p>
        <div class="card-buttons">
            <button onclick="alert('구현중')">동아리 알아보기</button>
        </div>
      </div>
`     ;
}

function midClubBox() {
    const box = document.getElementById("content-box");
    box.innerHTML = ""
    showClubBox('꿈틀이','다빈치 캠퍼스 댄스 중앙 동아리입니다.')
    showClubBox('그림자 찾기','다빈치 캠퍼스 영화 중앙 동아리입니다')
}

window.addEventListener('DOMContentLoaded', () => {
  midClubBox();
});

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
        </div>

        <div id="photo" class="category-section">
          <h3>사진 동아리</h3>
        </div>

        <div id="sports" class="category-section">
          <h3>체육 동아리</h3>
        </div>
      </div>
    `;
      // 🎨 예공 섹션에 카드 추가
      showClubBox("예공 동아리 1", "창의적인 예술을 함께!", "art");
      showClubBox("예공 동아리 2", "기술과 예술의 융합", "art");

      // 📸 사진 섹션
      showClubBox("사진 동아리 1", "순간을 담다", "photo");
      showClubBox("사진 동아리 2", "필름 감성", "photo");

      // ⚽ 체육 섹션
      showClubBox("풋살 동아리", "함께 뛰는 즐거움", "sports");
      showClubBox("농구 동아리", "슬램덩크의 꿈", "sports");
}

