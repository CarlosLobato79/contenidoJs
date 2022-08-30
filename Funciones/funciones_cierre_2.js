// Se puede devolver un objeto que contiene métodos para manipular las variables internas de la función externa.

var bebida = function(nameDrink){
    var typeDrink;
    var stateDrink = 100;

    return {
        setNameDrink: function(newName){
            nameDrink = newName;
        },
        getNameDrink: function(){
            return nameDrink;
        },
        setTypeDrink : function(newTypeDrink){
            typeDrink = newTypeDrink;
        },
        getTypeDrink : function(){
            return typeDrink;
        },
        setStateDrink : function(newStateDrink){
            stateDrink =  newStateDrink;
        },
        getStateDrink : function(){
            return stateDrink;
        }
    }
}

let bebidaUsuario = bebida("agua");
bebidaUsuario.setStateDrink(15);
bebidaUsuario.setTypeDrink("Botella");
console.log(bebidaUsuario.getStateDrink());
console.log(bebidaUsuario.getNameDrink());
console.log(bebidaUsuario.getTypeDrink())
