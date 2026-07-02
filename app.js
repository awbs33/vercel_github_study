console.log("앱 시작! feature/update-homepage 브랜치에서 실행됩니다.");

const themeBtn = document.getElementById("themeBtn");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    console.log(`테마 전환: ${isDark ? "다크" : "라이트"}`);
    themeBtn.textContent = isDark ? "Toggle Light Theme" : "Toggle Dark Theme";
  });
}
