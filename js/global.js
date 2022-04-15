// Wrapper del query selector -- Para tomar elementos del DOM
export const getEl = (el) => document.querySelector(el);
export const getEls = (el) => document.querySelectorAll(el);

//Ver si funciona
export const isLocalStorage = () => {
  if (typeof localStorage !== "undefined") {
    return true;
  }
  return false;
};
//Insertar
export const writeLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};
//Leer
export const readLocalStorage = (key) => {
  return localStorage.getItem(key);
};
//ID generator
export const getUniqueId = () => {
  return Math.random().toString(36).slice(2, 9);
};
//Encode using btoa

export const crypt = (text) => {
  const salt = "secret";
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
  const applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);

  return text
    .split("")
    .map(textToChars)
    .map(applySaltToChar)
    .map(byteHex)
    .join("");
};

export const decrypt = (encoded) => {
  const salt = "secret";
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);
  return encoded
    .match(/.{1,2}/g)
    .map((hex) => parseInt(hex, 16))
    .map(applySaltToChar)
    .map((charCode) => String.fromCharCode(charCode))
    .join("");
};

window.addEventListener(
  "keydown",
  function (e) {
    if (
      e.keyIdentifier == "U+000A" ||
      e.keyIdentifier == "Enter" ||
      e.keyCode == 13
    ) {
      if (e.target.nodeName == "INPUT" && e.target.type == "text") {
        e.preventDefault();
        return false;
      }
    }
  },
  true
);
