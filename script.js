const container = document.querySelector(".qrcontainer");

const input = document.querySelector("#qrinput");

const button = document.querySelector("#qrbutton");

const image = document.querySelector("#qrimage");

button.addEventListener("click", () => {
  if (!input.value) {
    alert(`Please enter a valid input`);
  }

  image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
});
