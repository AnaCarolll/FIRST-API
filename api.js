const novo = document.getElementById("novo");
novo.addEventListener('click', () => {

nome()
});

async function nome  () {
const iput = document.getElementById("melhor").value;
const chave = "gyleqlivnOuQzwYqjJ4uQj8MHDkAxANugzxSemyr"
const name = await fetch (`https://api.nasa.gov/planetary/apod?api_key=${chave}&date=${iput}`);
const result = await name.json();
var informacoes = result;
//console.log(result)
//var em = document.getElementById("oie");
//var tela = "aqui esta a data " + result;
//em.innerHTML = tela;
console.log(informacoes);
pegandoImagem (informacoes)
}

function pegandoImagem (informacoes){
document.querySelector('.container').innerHTML = informacoes.explanation;
document.querySelector('.container').innerHTML += `<img src ="${informacoes.url}">`
}











//const novo = document.getElementById("novo");
//const clicar = novo.addEventListener("click", async () => {
//const id = document.getElementById("melhor").value;
//const name = await fetch('https://api.nasa.gov/planetary/apod?api_key=gyleqlivnOuQzwYqjJ4uQj8MHDkAxANugzxSemyr');
//const result = await name.json();
//const user = new User(result)
//console.log(clicar)
//console.log(result)
//});



