const form = document.getElementById("form");

const sendFiles = async () => {
  const file = document.getElementById("file").files;

  const formData = new FormData();

  formData.append("image", file[0]);

  const response = await fetch("http://localhost:3600/upload", {
    method: "POST",
    body: formData,
  });

  const json = await response.json();
  const h3 = document.querySelector("h3");
  h3.textContent = json?.message;

  console.log(json);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendFiles();
});
