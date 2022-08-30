
//El valor no puede ser modificado solo puede ser leido
var conexionDB = (function(){
    var password = "123contrasena";

    return function(){
        return password;
    }
})();
//No puedo acceder al dato
let contra = conexionDB();
console.log(contra.password)
//Si puedo acceder el dato
console.log(conexionDB());