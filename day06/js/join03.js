document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const inputs = form.querySelectorAll("input");

  inputs.forEach((input) => {
    // 메시지 표시용 span 생성
    const message = document.createElement("span");
    message.classList.add("validation-message");
    input.insertAdjacentElement("afterend", message);

    // 입력 이벤트 처리
    input.addEventListener("input", () => {
      if (input.value.trim() === "") {
        message.textContent = "입력되지 않았습니다.";
        message.style.color = "red";
      } else {
        message.textContent = "입력되었습니다.";
        message.style.color = "green";
      }
    });
  });
});
