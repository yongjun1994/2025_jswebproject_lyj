document.addEventListener("DOMContentLoaded", function () {
  const fields = [
    "username",
    "password",
    "confirmPassword",
    "name",
    "email",
    "address",
  ];

  fields.forEach((fieldId) => {
    const input = document.getElementById(fieldId);
    const message = document.getElementById(`msg-${fieldId}`);

    input.addEventListener("input", function () {
      const value = input.value.trim();
      message.classList.remove("error", "success");

      if (value === "") {
        message.textContent = "입력되지 않았습니다.";
        message.classList.add("error");
      } else {
        message.textContent = "입력되었습니다.";
        message.classList.add("success");
      }
    });
  });
});
