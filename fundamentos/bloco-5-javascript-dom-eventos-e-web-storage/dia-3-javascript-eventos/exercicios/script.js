function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
//1- O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

for (let dias of dezDaysList) {
  let cadaDia = document.createElement("li");
  cadaDia.innerText = dias;
  cadaDia.classList.add("day");
  if (dias == 25) {
    cadaDia.classList.add("holiday", "friday");
  } else if (dias == 24 || dias == 31) {
    cadaDia.classList.add("holiday");
  } else if (dias == 4 || dias == 11 || dias == 18) {
    cadaDia.classList.add("friday");
  }

  document.querySelector("#days").appendChild(cadaDia);
}

//2- Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
function botaoFeriado(string, id) {
  let botaoF = document.createElement("button");
  botaoF.innerText = string;
  botaoF.id = id;
  document.querySelector(".buttons-container").appendChild(botaoF);
}
botaoFeriado("Feriados", "btn-holiday");

//3- Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
function feriadoCor() {
  let mudaCor = document.querySelectorAll(".holiday");
  for (let addCor of mudaCor) {
    if (addCor.style.backgroundColor !== "red") {
      addCor.style.backgroundColor = "red";
    } else {
      addCor.style.backgroundColor = "rgb(238,238,238)";
    }
  }
}
let botaoCor = document.querySelector("#btn-holiday");
botaoCor.addEventListener("click", feriadoCor);

//4- Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
botaoFeriado("Sexta-feira", "btn-friday");

//5- Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
let days = [4, 8, 11, 25];
function botaoSexta() {
  let sexta = document.querySelectorAll(".friday");
  for (let i = 0; i < sexta.length; i += 1) {
    if (sexta[i].innerHTML !== "SEXTOU!") {
      sexta[i].innerHTML = "SEXTOU!";
    } else {
      sexta[i].innerHTML = days[i];
    }
  }
}
let sextaBotao = document.querySelector("#btn-friday");
sextaBotao.addEventListener("click", botaoSexta);

//6- Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original. Dica - Propriedade: event.target.
let dias = document.querySelector("#days");
dias.addEventListener("mouseover", aumenta);

function aumenta(dia) {
  dia.target.style.fontSize = "30px";
}

dias.addEventListener("mouseout", diminui);
function diminui(dia) {
  dia.target.style.fontSize = "20px";
}

//7- Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
//O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
function tarefa(string) {
  let tarefaCalendario = document.createElement("span");
  tarefaCalendario.innerText = string;
  document.querySelector(".my-tasks").appendChild(tarefaCalendario);
}
tarefa("cozinhar");

//8- Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
function corTarefa(string) {
  let tarefaCor = document.createElement("div");
  tarefaCor.style.backgroundColor = string;
  tarefaCor.classList.add = "task";
  document.querySelector(".my-tasks").appendChild(tarefaCor);
}
corTarefa("yellow");
