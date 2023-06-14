var btn = document.getElementById('run')
btn.addEventListener('click', inserir)

function inserir(){

    //ocultar pagina 1 e exibir pagina 2
    let p1 = document.getElementById('page1')
    let p2 = document.getElementById('page2')

    p1.style.display = 'none'
    p2.style.display = 'flex'

    //inserir código em HTML
    let codeHtml = document.getElementById('codeHtml').value
    p2.innerHTML = '<pre' + codeHtml + '</pre>';

    //inserir código em JavaScript
    let codeJs = document.getElementById('codeJs').value
    document.getElementById('JsUser').innerHTML = codeJs
}
const html = document.querySelector("html");
const body = document.querySelector("body");
var data = new Date();
var horas = data.getHours();

console.log(horas);

var btn = document.getElementById('btnTema')
btn.addEventListener('click', MudarTema)
function  MudarTema () {
    html.classList.toggle("white-mode");
    body.classList.toggle("white-mode");
  };

