import qr from "qrcode";
const input = document.querySelector("input");
const resultBox = document.createElement("div");
document.body.appendChild(resultBox);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value != "") {
    qr.toDataURL(input.value, (err, url) => {
      if (err) return console.error(err);
      const newQr = `<img src ="${url}" alt ="qr-code"/>`;
      document.querySelector(".qr-code").innerHTML = "";
      document.querySelector(".qr-code").innerHTML = newQr;
    });
  }
});
