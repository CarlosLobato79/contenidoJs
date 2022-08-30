// ─── Objeto Literal Creado ──────────────────────────────────────────────────────
let o = {
    //esta funcion tiene aun acceso por this al objeto
    test : function(){
        let self = this //esto devolvera true
        console.log(this === o)
        f();
        //cuando tenemo una funcion dentro de otra esta pierde el acceso
        //al padre final pero tiene acceso al padre y el padre puede pasarle
        //acesso atraves del global
        function f(){
            console.log(this === o) //esto devuelve false por que pierde la referencial final
            console.log(self === o) //esto devuelve true por que por que trae la referencia final del objeto literal
        }

    }
}

o.test()