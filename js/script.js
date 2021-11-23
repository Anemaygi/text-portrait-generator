import padraoTexto from "./Text.js";

const padraoFoto = "https://i.gifer.com/3b4.gif";

let imgfor = prompt("Insira o link da imagem que deseja", "Escreva '0' para imagem padrão");
if (imgfor == null || imgfor == "" || imgfor == 0) {
  imgfor = padraoFoto;
} 

let fontsize = prompt("Tamanho da fonte", "Escreva '0' para tamanho padrão");
if (fontsize == null || fontsize == "" || fontsize == 0) {
  fontsize = "6.5";
} 
fontsize = fontsize + "px";

let style = `background: url(${imgfor});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  -webkit-background-clip: text;
  color: transparent;
  font-size: ${fontsize};
  text-align: justify;`;

document.getElementById('HereIsPicture').style = style;

let textfor = prompt("Insira o texto que quer colocar (precisa ser grande, grandíssimo)", "Escreva '0' para texto padrão");
if (textfor == null || textfor == "" || textfor == 0) {
  textfor = padraoTexto;
} 

document.getElementById("ItIsText").innerHTML = textfor;