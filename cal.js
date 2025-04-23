// ✅ Firebase 관련 임포트
import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
  addDoc,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// ✅ Firebase 앱 초기화
const firebaseConfig = {
  apiKey: "AIzaSyBjQqhOynpOatJ4m6SuRwldoGlbQWjhctE",
  authDomain: "my-club-web.firebaseapp.com",
  projectId: "my-club-web",
  storageBucket: "my-club-web.appspot.com",
  messagingSenderId: "1030873619171",
  appId: "1:1030873619171:web:c467720e313649a25d43d6",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);

let currentUser = null;

// ✅ 로그인 상태 감지
onAuthStateChanged(auth, (user) => {
  currentUser = user;
  console.log(currentUser ? "✅ 로그인됨" : "❌ 로그인 안 됨");
});

// ✅ FullCalendar 로드 후 렌더링
document.addEventListener("DOMContentLoaded", () => {
  const calendarEl = document.getElementById("calendar");

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    locale: "ko",
    height: "auto",
    contentHeight: "auto",
    aspectRatio: 1.5,
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay"
    },

    // ✅ 일정 클릭 → 삭제
    eventClick: async function (info) {
      const event = info.event;

      if (!currentUser) {
        alert("🔒 로그인한 사용자만 삭제할 수 있습니다.");
        return;
      }

      if (event.extendedProps.user !== currentUser.email) {
        alert("❌ 본인이 추가한 일정만 삭제할 수 있습니다.");
        return;
      }

      const confirmDelete = confirm(`'${event.title}' 일정을 삭제하시겠습니까?`);
      if (confirmDelete) {
        try {
          await deleteDoc(doc(db, "calendarEvents", event.id));
          event.remove();
          alert("✅ 일정이 삭제되었습니다.");
        } catch (err) {
          alert("❌ 삭제 중 오류가 발생했습니다.");
          console.error(err);
        }
      }
    },

    // ✅ 날짜 클릭 → 일정 추가
    dateClick: async function (info) {
      if (!currentUser) {
        alert("🔒 로그인한 사용자만 일정을 추가할 수 있습니다.");
        return;
      }

      const title = prompt("일정 제목을 입력하세요:");
      if (title) {
        try {
          const docRef = await addDoc(collection(db, "calendarEvents"), {
            title: title,
            date: info.dateStr,
            user: currentUser.email,
          });

          calendar.addEvent({
            id: docRef.id,
            title: title,
            start: info.dateStr,
            extendedProps: { user: currentUser.email }
          });

          alert("✅ 일정이 추가되었습니다!");
        } catch (error) {
          alert("❌ 저장 중 오류 발생: " + error.message);
        }
      }
    },

    // ✅ Firestore에서 일정 불러오기
    events: async function (fetchInfo, successCallback, failureCallback) {
      try {
        const snapshot = await getDocs(collection(db, "calendarEvents"));
        const events = snapshot.docs.map(doc => ({
          id: doc.id,
          title: doc.data().title,
          start: doc.data().date,
          extendedProps: { user: doc.data().user }
        }));
        successCallback(events);
      } catch (error) {
        failureCallback(error);
      }
    }
  });

  calendar.render();
});

// ✅ 사이드 메뉴 기능
window.toggleMenu = function () {
  const menu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");
  const isActive = menu.classList.toggle("active");
  overlay.classList.toggle("active", isActive);
};

window.closeMenu = function () {
  document.getElementById("sideMenu").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
};

// ✅ 현재 위치 강조
const currentPath = window.location.pathname.split("/").pop();
const links = document.querySelectorAll(".side-menu a");
links.forEach(link => {
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("active");
  }
});
