document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("signupForm");
  
	const toggleNewPassword = document.getElementById("toggleNewPassword");
	const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
	const newPassword = document.getElementById("newPassword");
	const confirmPassword = document.getElementById("confirmPassword");
	const passwordMessage = document.getElementById("passwordMessage");
	const confirmMessage = document.getElementById("confirmMessage");
  
	const agreeAll = document.getElementById("agreeAll");
	const terms = document.querySelectorAll(".term");
  
	// 👁️ 비밀번호 보기 토글
	toggleNewPassword.addEventListener("click", () => {
	  newPassword.type = newPassword.type === "password" ? "text" : "password";
	  toggleNewPassword.textContent = newPassword.type === "password" ? "👁️" : "🙈";
	});
  
	toggleConfirmPassword.addEventListener("click", () => {
	  confirmPassword.type = confirmPassword.type === "password" ? "text" : "password";
	  toggleConfirmPassword.textContent = confirmPassword.type === "password" ? "👁️" : "🙈";
	});
  
	// ✅ 비밀번호 유효성 검사
	const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
  
	newPassword.addEventListener("input", () => {
	  const value = newPassword.value;
	  passwordMessage.textContent = passwordRegex.test(value)
		? ""
		: "영문+숫자+특수문자 포함 8자 이상 입력하세요.";
	});
  
	// ✅ 비밀번호 확인 일치 검사
	confirmPassword.addEventListener("input", () => {
	  confirmMessage.textContent =
		confirmPassword.value === newPassword.value ? "" : "비밀번호가 일치하지 않습니다.";
	});
  
	// ✅ 전체 약관 동의 처리
	agreeAll.addEventListener("change", () => {
	  terms.forEach(term => term.checked = agreeAll.checked);
	});
  
	terms.forEach(term => {
	  term.addEventListener("change", () => {
		agreeAll.checked = [...terms].every(t => t.checked);
	  });
	});
  
	// ✅ 닉네임 중복 확인 (모의 처리)
	document.getElementById("checkNickname").addEventListener("click", () => {
	  const nickname = document.getElementById("nickname").value.trim();
	  if (!nickname) return alert("닉네임을 입력하세요.");
	  // 실제 서버 요청은 axios 사용
	  alert(`닉네임 "${nickname}"은 사용 가능합니다.`); // 또는 중복됨
	});
  
	// ✅ 주소 검색 API
	document.getElementById("searchAddress").addEventListener("click", () => {
	  new daum.Postcode({
		oncomplete: function (data) {
		  document.getElementById("zipcode").value = data.zonecode;
		  document.getElementById("address").value = data.address;
		}
	  }).open();
	});
  
	// ✅ 최종 제출 처리
	form.addEventListener("submit", function (e) {
	  e.preventDefault();
  
	  const passwordValid = passwordRegex.test(newPassword.value);
	  const passwordMatch = newPassword.value === confirmPassword.value;
	  const allAgreed = [...terms].every(t => t.checked);
  
	  if (!passwordValid) {
		alert("비밀번호 형식을 확인해주세요.");
		return;
	  }
  
	  if (!passwordMatch) {
		alert("비밀번호가 일치하지 않습니다.");
		return;
	  }
  
	  if (!allAgreed) {
		alert("모든 약관에 동의해주세요.");
		return;
	  }
  
	  const formData = new FormData(form);
	  const data = Object.fromEntries(formData.entries());
  
	  console.log("회원가입 데이터:", data);
	  alert("회원가입이 완료되었습니다!");
  
	  // 서버 전송 예시
	  // axios.post('/api/signup', data).then(response => {
	  //   alert("서버 응답: " + response.data.message);
	  // });
	});
  });
  