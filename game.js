
const game = {
    containner: null,
    coresJogadores: ["blue","red","yellow","green" ],
    numeroMaximoJogadores: 4,

    infoCasas: [
        ["Milho", { top: 5, left: 49 }],
        ["Escolha um ingrediente", { top: 6, left: 56 }],
        ["Sorte ou azar", { top: 7, left: 64 }],
        ["Brocolis", { top: 11, left: 70 }],
        ["Sorte ou azar", { top: 16, left: 76 }],
        ["Ovo", { top: 21, left: 81 }],
        ["Cebola", { top: 28, left: 85 }],
        ["Sorte ou azar", { top: 35, left: 88 }],
        ["Peperoni", { top: 42, left: 90 }],
        ["Sorte ou azar", { top: 50, left: 90 }],
        ["Presunto", { top: 58, left: 90 }],
        ["Escolha um ingrediente", { top: 66, left: 88 }],
        ["Queijo", { top: 73, left: 84 }],
        ["Ervilha", { top: 79, left: 79 }],
        ["Sorte ou azar", { top: 84, left: 74 }],
        ["Brocolis", { top: 88, left: 68 }],
        ["Azeitona", { top: 91, left: 61 }],
        ["Sorte ou azar", { top: 93, left: 54 }],
        ["Perde tudo", { top: 93, left: 46 }],
        ["Cebola", { top: 91, left: 39 }],
        ["Sorte ou azar", { top: 89, left: 32 }],
        ["Peperoni", { top: 85, left: 26 }],
        ["Queijo", { top: 79, left: 20 }],
        ["Sorte ou azar", { top: 73, left: 15 }],
        ["Sorte ou azar", { top: 66, left: 12 }],
        ["Tomate", { top: 59, left: 10 }],
        ["Ovo", { top: 51, left: 9 }],
        ["Azeitona", { top: 43, left: 9 }],
        ["Sorte ou azar", { top: 36, left: 11 }],
        ["Sorte ou azar", { top: 11, left: 28 }],
        ["Milho", { top: 22, left: 18 }],
        ["Ervilha", { top: 16, left: 23 }],
        ["Sorte ou azar", { top: 11, left: 28 }],
        ["Presunto", { top: 8, left: 35 }],
        ["Tomate", { top: 6, left: 42 }]
    ],

    casas: [],
    jogadores: [],
    
    load: function (containner) {
        this.containner = containner;
    },

    bt_iniciar: function(){
        this.casas = [];
        this.jogadores = [];

        // criar casas
        for (i = 0; i < this.infoCasas.length; i++){
            numero = i + 1; 
            nome = this.infoCasas[i][0];
            coordenada = this.infoCasas[i][1];
            casa = this.criarCasa(numero,nome,coordenada);

            this.casas.push(casa);
        }

        for(i = 1; i < this.numeroMaximoJogadores; i++){
            nomeJogador = window.prompt("Nome jogador " + i  + ":" ,"");
            if (nomeJogador != null){
                jogador = this.criarJogador(i, nomeJogador, this.coresJogadores[i-1]  ,this.casas[0]);
                this.jogadores.push(jogador);
            }
        }
        
        this.desenharJogadores();
        
    },

    


    desenharJogadores: function(){
       for(i = 0; i< this.jogadores.length; i++){
           jogador = this.jogadores[i];
           div_player = this.containner.querySelector("#tabuleiro").querySelector("#player"+jogador.numero);
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

    criarJogador: function (numero,nome,cor, casa){
        return {
            numero: numero,
            nome: nome,
            cor: cor,
            casa: casa
        }
    }

  

}