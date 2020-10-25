// SET ARRAY CHAMPION LIST
const championList = [
    { name: "Malphite", img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Malphite.png?v=v8" },
    { name: "XinZhao", img: "https://www.masterypoints.com/assets/img/lol/champion_icons/XinZhao.png?v=v8" },
    { name: "FiddleSticks", img: "https://www.masterypoints.com/assets/img/lol/champion_icons/FiddleSticks.png?v=v8" },
    { name: "Yasuo", img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Yasuo.png?v=v8" },
    { name: "Yone", img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Yone.png?v=v8" },
    { name: "Morgana", img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Morgana.png?v=v8" },
    { name: "Anivia", img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Anivia.png?v=v8" },
    { name: "Shaco", img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Shaco.png?v=v8" },
    { name: "Amumu", img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Amumu.png?v=v8" },
    { name: "Illaoi", img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Illaoi.png?v=v8" },
    { name: "Hecarim", img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Hecarim.png?v=v8" },
    { name: "Lucian", img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Lucian.png?v=v8" },
];

// SET ARRAY TALKS
const talkList = [
    { msg: "Prazer em conhecer você!" },
    { msg: "Eles não vão gostar nada disso." },
    { msg: "Acabe com eles, Pix!" },
    { msg: "Vamos usar TODAS as cores!" },
    { msg: "Muito alto... Muito muito alto." },
    { msg: "Uma risadinha deve resolver o problema." },
    { msg: "Vou em um pé e volto no outro." },
    { msg: "Só uma pitadinha..." },
    { msg: "É, tem um gosto meio roxo!" },
    { msg: "Conseguirá ver melhor com os olhos fechados" },
    { msg: "Ai... Tô tonta!" },
    { msg: "Orvalho intrometido!" },
    { msg: "Nunca olhe diretamente para uma tulipa..." },
    { msg: "Conheço esse esquilo de algum lugar." },
    { msg: "Que tal uma giradinha? Whoa, whoa whoa ah, ihaha!" },
    { msg: "Precisamos pensar direitinho! Hmm... hmmhmm... Ah! Entendi" },
    { msg: "Vamos lá, vamos dançar! Há!" },
    { msg: "Vamos dar mais uma volta! Há!" },
];

// numero de mensagens
var NumeroMensagens;

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
function initApp(){
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
    initApp();
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