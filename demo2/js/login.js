document.addEventListener("DOMContentLoaded", function () {
	const loginButton = document.querySelector("button");
  
	// 기본 색상 저장
	const originalColor = loginButton.style.backgroundColor;
  
	// 마우스를 올렸을 때
	loginButton.addEventListener("mouseover", function () {
	  loginButton.style.backgroundColor = "yellow"; // 원하는 hover 색상
	});
  
	// 마우스를 뗐을 때
	loginButton.addEventListener("mouseout", function () {
	  loginButton.style.backgroundColor = originalColor || "#3399ff"; // 원래 색상 복원
	});
  });

document.addEventListener("DOMContentLoaded", function () {
const passwordInput = document.getElementById("password");
const toggleIcon = document.getElementById("togglePassword");

toggleIcon.addEventListener("click", function () {
	const isPassword = passwordInput.type === "password";
	passwordInput.type = isPassword ? "text" : "password";
	toggleIcon.textContent = isPassword ? "🙈" : "👁️"; // 아이콘 변경
});
});
  