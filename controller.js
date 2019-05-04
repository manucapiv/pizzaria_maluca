const $ = {

    containner: null,

    init:function(containner) { 
        this.containner = containner;
    },
    
    clickJogadores: function(numeroJogadores) {
        game.setNumeroJogadores(numeroJogadores);
        
        this.esconder(this.get('form-qtd-jogadores'));
        this.addPizzasSetup();
        this.exibir(this.get('form-setup-jogador'));
    },

    
    addPizzasSetup: function(){
        return null;
    },







    get: function(id){
       return document.getElementById(id);     
    },
    getInt: function(id){
       value = document.getElementById(id).value;    
       return parseInt(value);
    },
    esconder: function(elem){
        elem.style = "display: none";
    },

    exibir: function(elem){
        elem.style = "display: block";
    }
 

}