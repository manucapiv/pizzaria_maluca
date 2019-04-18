
const game = {
    containner: null,
    infoCasas: [
        ["Milho", {top:5,left:49} ],
        "Escolha um ingrediente",
        "Sorte ou azar",
        "Brocolis",
        "Sorte ou azar",
        "Ovo",
        "Cebola",
        "Sorte ou azar",
        "Peperoni",
        "Sorte ou azar",
        "Presunto",
        "Escolha um ingrediente",
        "Queijo",
        "Ervilha",
        "Sorte ou azar",
        "Brocolis",
        "Azeitona",
        "Sorte ou azar",
        "Perde tudo",
        "Cebola",
        "Sorte ou azar",
        "Peperoni",
        "Queijo",
        "Sorte ou azar",
        "Sorte ou azar",
        "Tomate",
        "Ovo",
        "Azeitona",
        "Sorte ou azar",
        "Sorte ou azar",
        "Milho",
        "Ervilha",
        "Sorte ou azar",
        "Presunto",
        "Tomate",
    ],

    casas: [],


    iniciarJogo: function (containner) {
        this.containner = containner;

        // for (i = 0; i < this.nomesCasa.length; i++){
        //this.containner.innerText = this.containner.innerText + i + "  " + this.nomesCasa[i] + "\n";
        //}



    },



    // criar uma casa 
    criarCasa: function (numero, nome, coordenada) {
        return {
            numero: numero,
            nome: nome,
            temJogador: false,
            coordenada: coordenada
        }
    }

}