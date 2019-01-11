var btn = document.getElementById('btn-menu');
var aside = document.getElementById('aside');
btn.addEventListener("click", changeAside);

function changeAside(){
    aside.classList.toggle('aside-open');
    if(btn.innerHTML == "Abrir menu" ) {
        btn.innerHTML = "Fechar menu";
    } else {
        btn.innerHTML = "Abrir menu";
    }
}