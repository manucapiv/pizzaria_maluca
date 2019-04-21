
const game = {
    containner: null,
    coresJogadores: ["blue", "red", "yellow", "green"],
    numeroMaximoJogadores: 4,

    pedacosPizza: [
        {nome: "Marguerita", ingredientes:["tomate","queijo","azeitona","milho"] }
    ],

    casas: [
        {numero: 1, nome:  "Milho", coordenada: { top: 5, left: 49 }, temJogador: false },
        {numero: 2, nome: "Escolha um ingrediente", coordenada: { top: 6, left: 56 }, temJogador: false },
        {numero: 3, nome: "Sorte ou azar", coordenada: { top: 7, left: 64 }, temJogador: false },
        {numero: 4, nome: "Brocolis", coordenada: { top: 11, left: 70 }, temJogador: false },
        {numero: 5, nome: "Sorte ou azar", coordenada: { top: 16, left: 76 }, temJogador: false },
        {numero: 6, nome: "Ovo", coordenada: { top: 21, left: 81 }, temJogador: false },
        {numero: 7, nome: "Cebola", coordenada: { top: 28, left: 85 }, temJogador: false },
        {numero: 8, nome: "Sorte ou azar", coordenada: { top: 35, left: 88 }, temJogador: false },
        {numero: 9, nome: "Peperoni", coordenada: { top: 42, left: 90 }, temJogador: false },
        {numero: 10, nome: "Sorte ou azar", coordenada: { top: 50, left: 90 }, temJogador: false },
        {numero: 11, nome: "Presunto", coordenada: { top: 58, left: 90 }, temJogador: false },
        {numero: 12, nome: "Escolha um ingrediente", coordenada: { top: 66, left: 88 }, temJogador: false },
        {numero: 13, nome: "Queijo", coordenada: { top: 73, left: 84 }, temJogador: false },
        {numero: 14, nome: "Ervilha", coordenada: { top: 79, left: 79 }, temJogador: false },
        {numero: 15, nome: "Sorte ou azar", coordenada: { top: 84, left: 74 }, temJogador: false },
        {numero: 16, nome: "Brocolis", coordenada: { top: 88, left: 68 }, temJogador: false },
        {numero: 17, nome: "Azeitona", coordenada: { top: 91, left: 61 }, temJogador: false },
        {numero: 18, nome: "Sorte ou azar", coordenada: { top: 93, left: 54 }, temJogador: false },
        {numero: 19, nome: "Perde tudo", coordenada: { top: 93, left: 46 }, temJogador: false },
        {numero: 20, nome: "Cebola", coordenada: { top: 91, left: 39 }, temJogador: false },
        {numero: 21, nome: "Sorte ou azar", coordenada: { top: 89, left: 32 }, temJogador: false },
        {numero: 22, nome: "Peperoni", coordenada: { top: 85, left: 26 }, temJogador: false },
        {numero: 23, nome: "Queijo", coordenada: { top: 79, left: 20 }, temJogador: false },
        {numero: 24, nome: "Sorte ou azar", coordenada: { top: 73, left: 15 }, temJogador: false },
        {numero: 25, nome: "Sorte ou azar", coordenada: { top: 66, left: 12 }, temJogador: false },
        {numero: 26, nome: "Tomate", coordenada: { top: 59, left: 10 }, temJogador: false },
        {numero: 27, nome: "Ovo", coordenada: { top: 51, left: 9 }, temJogador: false },
        {numero: 28, nome: "Azeitona", coordenada: { top: 43, left: 9 }, temJogador: false },
        {numero: 29, nome: "Sorte ou azar", coordenada: { top: 36, left: 11 }, temJogador: false },
        {numero: 30, nome: "Sorte ou azar", coordenada: { top: 11, left: 28 }, temJogador: false },
        {numero: 31, nome: "Milho", coordenada: { top: 22, left: 18 }, temJogador: false },
        {numero: 32, nome: "Ervilha", coordenada: { top: 16, left: 23 }, temJogador: false },
        {numero: 33, nome: "Sorte ou azar", coordenada: { top: 11, left: 28 }, temJogador: false },
        {numero: 34, nome: "Presunto", coordenada: { top: 8, left: 35 }, temJogador: false },
        {numero: 35, nome: "Tomate", coordenada: { top: 6, left: 42 }, temJogador: false }
    ],

   
    jogadores: [],

    load: function (containner) {
        this.containner = containner;
    },

    btIniciar: function () {

        this.jogadores = [];

        // criar casas
       

        // criar jogadores
        for (i = 0; i < this.numeroMaximoJogadores; i++) {
            nomeJogador = window.prompt("Nome jogador " + (i + 1) + ":", "");
            if (nomeJogador != null) {
                jogador = this.criarJogador((i + 1), nomeJogador, this.coresJogadores[i], this.casas[0]);
                this.jogadores.push(jogador);
            }
        }

        this.desenharJogadores();
    },

    jogarDado:function(){
       numero= Math.floor(Math.random() * 6 + 1);
       return numero;
    },

    movimentar: function (jogador, numero_casas ) {
        
        var numeroNovaCasa = jogador.casa.numero + numero_casas;
        if(numeroNovaCasa > this.casas.length) {
            numeroNovaCasa = numeroNovaCasa - this.casas.length;
        }

        casa = this.casas[numeroNovaCasa - 1];
        this.jogadores[jogador.numero - 1].casa = casa;
        
        
        div_player = this.containner.querySelector("#tabuleiro").querySelector("#player" + jogador.numero);
        div_player.style.left = jogador.casa.coordenada.left + "%";
        div_player.style.top =  jogador.casa.coordenada.top + "%";

    },

    desenharJogadores: function () {
        for (i = 0; i < this.jogadores.length; i++) {
            jogador = this.jogadores[i];
            div_player = this.containner.querySelector("#tabuleiro").querySelector("#player" + jogador.numero);
            div_player.style.backgroundColor = jogador.cor;
        }
    },

    criarCasa: function (numero, nome, coordenada) {
        return {
            numero: numero,
            nome: nome,
            temJogador: false,
            coordenada: coordenada
        }
    },

    criarJogador: function (numero, nome, cor, casa) {
        return {
            numero: numero,
            nome: nome,
            cor: cor,
            casa: casa
        }
    }



}