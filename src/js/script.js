// numero de mensagens
var NumeroMensagens;
// var AtualPersonagem;

// PRINT ALL LIST
championList.forEach(champion => {
    // replica o objeto card conversa com cada elemento do array
    document.querySelector('.list-msgs').innerHTML += objCardConversa(champion);
});




// Funcao, 
// pegar frase aleatoria
function getRandomtalk(){
    return talkList[ Math.floor(Math.random() * (talkList.length - 1) ) ];
}

// inicializa 
function initApp(personagem){
    NumeroMensagens = Math.floor(Math.random() * 15 );

    // PRINT ALL MENSAGENS
    for (let index = 0; index <= NumeroMensagens+1; index++) {
        // replica o objeto card conversa com cada elemento do array
        document.querySelector('.list-mensagens-right').innerHTML += objConversa(getRandomtalk().msg, Math.floor(Math.random() * 2 ));
    }
}

// set Conversa
function setConversa(personagem){
    document.getElementById("conversa-img").src = `https://www.masterypoints.com/assets/img/lol/champion_icons/${personagem}.png?v=v8`;
    document.getElementById("conversa-nome").innerHTML = personagem;
    document.querySelector('.list-mensagens-right').innerHTML = "";
    toggleSides();
    initApp(personagem);
}

// Objeto card Conversa
function objCardConversa(champion){
    return `<li class="list-group-item">
                <article class="row msg-card" onclick="setConversa('${champion.name}')">
                    <div class="conversa-img">
                        <img src="${champion.img}" alt="img-group" class="img-conversa">
                    </div>
                    <div class="conversa-msg truncate">
                        <b class="truncatea">${champion.name}</b> <br />
                        <small class="truncatea">${getRandomtalk().msg}</small>
                    </div>
                    <div class="conversa-hr">
                        <small>01:39</small>
                    </div>
                </article>
            </li>`;
}

// retorna objeto conversa
function objConversa(talk, classe){
    
    var classeName;
    classe === 1 ?  classeName = "mensagem-minha" :  classeName = "mensagem-outros";

    return `<li class="list-group-item bg-transparent li-mensagem">
                <div class="${classeName}">
                    ${talk}
                    <div>01:39</div>
                </div>
            </li>`;
}

function toggleSides(){
    document.querySelector(".side-left").classList.toggle("hide-on-small");
    document.querySelector(".side-right").classList.toggle("hide-on-small");

    document.querySelector(".bg-conversa-textura").style.display = "block";
    document.querySelector(".tela-default").style.display = "none";

    document.querySelector(".bg-conversa").style.backgroundColor = "#e5ddd5";
}

initApp();