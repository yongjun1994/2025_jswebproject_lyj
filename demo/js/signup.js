document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const password = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const nickname = document.getElementById("nickname").value;
  const terms = document.querySelectorAll(".term");
  const allChecked = Array.from(terms).every((term) => term.checked);

  // 비밀번호 유효성 검사
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+=-]).{8,}$/;
  if (!passwordRegex.test(password)) {
    alert("비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이상이어야 합니다.");
    return;
  }

  // 비밀번호 일치 여부
  if (password !== confirmPassword) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  // 약관 동의 확인
  if (!allChecked) {
    alert("모든 약관에 동의해주세요.");
    return;
  }

  alert("회원가입이 완료되었습니다!");
  window.location.href = "login.html";
});

// 전체 동의 체크박스
document.getElementById("checkAll").addEventListener("change", function () {
  const checked = this.checked;
  document
    .querySelectorAll(".term")
    .forEach((term) => (term.checked = checked));
});

// 비밀번호 토글
function setupToggle(inputId, iconId) {
  const input = document.getElementById(inputId);
  const icon = document.getElementById(iconId);
  icon.addEventListener("click", function () {
    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";
    icon.textContent = isHidden ? "🙈" : "👁️";
  });
}
setupToggle("newPassword", "toggleNewPassword");
setupToggle("confirmPassword", "toggleConfirmPassword");

// 닉네임 중복 확인 (예시: 로컬에서 확인)
document.getElementById("checkNickname").addEventListener("click", function () {
  const nickname = document.getElementById("nickname").value;
  const existingNicknames = ["용짱", "이용준", "준이"]; // 예시 데이터

  if (existingNicknames.includes(nickname)) {
    alert("이미 사용 중인 닉네임입니다.");
  } else {
    alert("사용 가능한 닉네임입니다.");
  }
});

// 주소 검색 API (Daum 우편번호 서비스)
document.getElementById("searchAddress").addEventListener("click", function () {
  new daum.Postcode({
    oncomplete: function (data) {
      document.getElementById("address").value = data.address;
    },
  }).open();
});
