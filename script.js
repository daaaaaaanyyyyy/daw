document.addEventListener("DOMContentLoaded", function () {
  const formButton = document.getElementById("btnSubmit");
  const form = document.getElementById("form-submit");

  if (formButton && form) {
    formButton.addEventListener("click", function (event) {
      event.preventDefault();

      if (form.checkValidity()) {
        Toastify({
          text: "Message sent successfully",
          duration: 3000,
          close: true,
          gravity: "top",
          position: "right",
          stopOnFocus: true,
          onClick: function () {},
        }).showToast();

        form.reset();
      } else {
        form.reportValidity();
      }
    });
  }
});
