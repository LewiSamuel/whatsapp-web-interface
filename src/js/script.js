// SET ARRAY CHAMPION LIST
const championList = [
    { name: "Malphite", img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Malphite.png?v=v8" },
    { name: "Xin Zhao", img: "https://www.masterypoints.com/assets/img/lol/champion_icons/XinZhao.png?v=v8" },
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

// Objeto card Conversa
function objCardConversa(champion){
    return `<li class="list-group-item">
                <article class="row msg-card">
                    <div class="conversa-img">
                        <img src="${champion.img} alt="img-group" class="img-conversa">
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