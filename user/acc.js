import {
    EmailAuthProvider,
    reauthenticateWithCredential,
    updatePassword,
    getAuth,
    signOut
  } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
  
  import { auth } from "../firebase.js"; 
  
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

      await reauthenticateWithCredential(user, credential);

      await updatePassword(user, newPw);
      alert("✅ 비밀번호가 성공적으로 변경되었습니다!");
    } catch (error) {
      alert("❌ 실패: " + error.message);
    }
  };

  window.saveIntro = function () {
    const intro = document.getElementById("intro").value;
    localStorage.setItem("clubIntro", intro);
    alert("✅ 한 줄 소개가 저장되었습니다!");
  };
  
  window.logout = function () {
    signOut(auth)
      .then(() => {
        alert("👋 로그아웃 되었습니다.");
        window.location.href = "../index.html"; 
      })
      .catch((err) => {
        alert("❌ 로그아웃 실패: " + err.message);
      });
  };

 