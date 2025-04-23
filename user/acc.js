import {
    EmailAuthProvider,
    reauthenticateWithCredential,
    updatePassword,
    getAuth,
    signOut
  } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
  
  // 🔥 여기서 firebase.js에 정의된 auth를 가져와야 함
  import { auth } from "../firebase.js"; // 경로는 현재 위치 기준으로 수정!
  
  // 🔒 비밀번호 변경 함수
  window.changePassword = async function () {
    const newPw = document.getElementById("newPw").value;
    const currentPw = prompt("현재 비밀번호를 입력하세요:");
  
    if (!newPw || newPw.length < 6) {
      alert("비밀번호는 6자 이상이어야 합니다.");
      return;
    }
  
    try {
      const user = auth.currentUser;
      const credential = EmailAuthProvider.credential(user.email, currentPw);
  
      // ✅ 재인증
      await reauthenticateWithCredential(user, credential);
  
      // 🔁 비밀번호 변경
      await updatePassword(user, newPw);
      alert("✅ 비밀번호가 성공적으로 변경되었습니다!");
    } catch (error) {
      alert("❌ 실패: " + error.message);
    }
  };
  
  // ✏️ 한 줄 소개 저장 (localStorage 방식)
  window.saveIntro = function () {
    const intro = document.getElementById("intro").value;
    localStorage.setItem("clubIntro", intro);
    alert("✅ 한 줄 소개가 저장되었습니다!");
  };
  
  window.logout = function () {
    signOut(auth)
      .then(() => {
        alert("👋 로그아웃 되었습니다.");
        window.location.href = "../index.html"; // 홈으로 리디렉션
      })
      .catch((err) => {
        alert("❌ 로그아웃 실패: " + err.message);
      });
  };

 