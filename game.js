
const game = {
    containner: null,
    coresJogadores: ["blue", "red", "yellow", "green"],
    numeroJogadores: 0,

    pedacosPizza: [
       criarPedacoPizza("calabresa",["tomate","peperoni","azeitona","cebola","queijo"]),
       criarPedacoPizza("marguerita",["queijo","brocolis","peperoni","milho","tomate"]),
       criarPedacoPizza("portugusa",["ovo","azeitona","presunto","queijo","milho"]),
       criarPedacoPizza("romana",["azeitona","presunto","milho","cebola","queijo"]),
       criarPedacoPizza("toscana",["cebola","presunto","tomate","azeitona","peperoni"]),
       criarPedacoPizza("vegetariana",["ervilha","milho","brocolis","tomate","cebola"]),


    ]

   

    casas: [
        { numero: 1, nome: "Milho", coordenada: { top: 5, left: 49 }, jogadores: [] },
        { numero: 2, nome: "Escolha um ingrediente", coordenada: { top: 6, left: 56 }, jogadores: [] },
        { numero: 3, nome: "Sorte ou azar", coordenada: { top: 7, left: 64 }, jogadores: [] },
        { numero: 4, nome: "Brocolis", coordenada: { top: 11, left: 70 }, jogadores: [] },
        { numero: 5, nome: "Sorte ou azar", coordenada: { top: 16, left: 76 }, jogadores: [] },
        { numero: 6, nome: "Ovo", coordenada: { top: 21, left: 81 }, jogadores: [] },
        { numero: 7, nome: "Cebola", coordenada: { top: 28, left: 85 }, jogadores: [] },
        { numero: 8, nome: "Sorte ou azar", coordenada: { top: 35, left: 88 }, jogadores: [] },
        { numero: 9, nome: "Peperoni", coordenada: { top: 42, left: 90 }, jogadores: [] },
        { numero: 10, nome: "Sorte ou azar", coordenada: { top: 50, left: 90 }, jogadores: [] },
        { numero: 11, nome: "Presunto", coordenada: { top: 58, left: 90 }, jogadores: [] },
        { numero: 12, nome: "Escolha um ingrediente", coordenada: { top: 66, left: 88 }, jogadores: [] },
        { numero: 13, nome: "Queijo", coordenada: { top: 73, left: 84 }, jogadores: [] },
        { numero: 14, nome: "Ervilha", coordenada: { top: 79, left: 79 }, jogadores: [] },
        { numero: 15, nome: "Sorte ou azar", coordenada: { top: 84, left: 74 }, jogadores: [] },
        { numero: 16, nome: "Brocolis", coordenada: { top: 88, left: 68 }, jogadores: [] },
        { numero: 17, nome: "Azeitona", coordenada: { top: 91, left: 61 }, jogadores: [] },
        { numero: 18, nome: "Sorte ou azar", coordenada: { top: 93, left: 54 }, jogadores: [] },
        { numero: 19, nome: "Perde tudo", coordenada: { top: 93, left: 46 }, jogadores: [] },
        { numero: 20, nome: "Cebola", coordenada: { top: 91, left: 39 }, jogadores: [] },
        { numero: 21, nome: "Sorte ou azar", coordenada: { top: 89, left: 32 }, jogadores: [] },
        { numero: 22, nome: "Peperoni", coordenada: { top: 85, left: 26 }, jogadores: [] },
        { numero: 23, nome: "Queijo", coordenada: { top: 79, left: 20 }, jogadores: [] },
        { numero: 24, nome: "Sorte ou azar", coordenada: { top: 73, left: 15 }, jogadores: [] },
        { numero: 25, nome: "Sorte ou azar", coordenada: { top: 66, left: 12 }, jogadores: [] },
        { numero: 26, nome: "Tomate", coordenada: { top: 59, left: 10 }, jogadores: [] },
        { numero: 27, nome: "Ovo", coordenada: { top: 51, left: 9 }, jogadores: [] },
        { numero: 28, nome: "Azeitona", coordenada: { top: 43, left: 9 }, jogadores: [] },
        { numero: 29, nome: "Sorte ou azar", coordenada: { top: 36, left: 11 }, jogadores: [] },
        { numero: 30, nome: "Sorte ou azar", coordenada: { top: 28, left: 14 }, jogadores: [] },
        { numero: 31, nome: "Milho", coordenada: { top: 22, left: 18 }, jogadores: [] },
        { numero: 32, nome: "Ervilha", coordenada: { top: 16, left: 23 }, jogadores: [] },
        { numero: 33, nome: "Sorte ou azar", coordenada: { top: 11, left: 28 }, jogadores: [] },
        { numero: 34, nome: "Presunto", coordenada: { top: 8, left: 35 }, jogadores: [] },
        { numero: 35, nome: "Tomate", coordenada: { top: 6, left: 42 }, jogadores: [] }
    ],


    jogadores: [],

    setNumeroJogadores: function (numeroJogadores) {
        this.numeroJogadores = numeroJogadores;
    },






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

    jogarDado: function () {
        numero = Math.floor(Math.random() * 6 + 1);
        return numero;
    },

    movimentar: function (jogador, numero_casas) {

        var numeroNovaCasa = jogador.casa.numero + numero_casas;
        if (numeroNovaCasa > this.casas.length) {
            numeroNovaCasa = numeroNovaCasa - this.casas.length;
        }

        novaCasa = this.casas[numeroNovaCasa - 1];
        jogador.casa.jogadores.
            jogador.casa = novaCasa;

        div_player = this.containner.querySelector("#tabuleiro").querySelector("#player" + jogador.numero);
        div_player.style.left = jogador.casa.coordenada.left + "%";
        div_player.style.top = jogador.casa.coordenada.top + "%";

    },

    array_teste: [1, 2, 3],

    teste: function (array) {
        array.push(4);
    },

    desenharJogadores: function () {
        for (i = 0; i < this.jogadores.length; i++) {
            jogador = this.jogadores[i];
            div_player = this.containner.querySelector("#tabuleiro").querySelector("#player" + jogador.numero);
            div_player.style.backgroundColor = jogador.cor;
        }
    },

    criarJogador: function (numero, nome, cor, casa) {
        return {
            numero: numero,
            nome: nome,
            cor: cor,
            casa: casa
        }
    },

    criarPedacoPizza: function(nome, ingredientes){
        return {
            nome: nome,
            ingredientes: [
                { nome: ingredientes[0], obtido: false },
                { nome: ingredientes[1], obtido: false },
                { nome: ingredientes[2], obtido: false },
                { nome: ingredientes[3], obtido: false },
                { nome: ingredientes[4], obtido: false }
            ]
        }    
    }



}