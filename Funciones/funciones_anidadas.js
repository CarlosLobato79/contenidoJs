// Puedes anidar una función dentro de otra función. La función anidada (interna) es privada de su función contenedora (externa)

function addSquares(a, b) {
    function square(x) {
      return x * x;
    }
    return square(a) + square(b);
  }
  a = addSquares(2, 3); // devuelve 13
  b = addSquares(3, 4); // devuelve 25
  c = addSquares(4, 5); // devuelve 41


function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
  }
  fn_inside = outside(3); // Piensa en ello como: dame una función que agregue 3 a lo que sea que le des
                          // eso
  result = fn_inside(5); // devuelve 8

  result1 = outside(3)(5); // devuelve 8

// ─── Funciones Multianidadas ────────────────────────────────────────────────────
// Esto se llama encadenamiento de alcance
function A(x) {
    function B(y) {
      function C(z) {
        console.log(x + y + z);
      }
      C(3);
    }
    B(2);
  }
  A(1); // registra 6 (1 + 2 + 3)

/*Esto se puede hacer porque:

    B forma un cierre que incluye a A (es decir, B puede acceder a los argumentos y variables de A).
    C forma un cierre que incluye a B.
    Debido a que el cierre de B incluye a A, el cierre de C incluye a A, C puede acceder a los argumentos y variables de B y de A. En otras palabras, C encadena los ámbitos de B y A, en ese orden.
*/

// ─── Conflicto De Nombres ───────────────────────────────────────────────────────
function outside() {
    var x = 5;
    function inside(x) {
      return x * 2;
    }
    return inside;
  }

outside()(10); // devuelve 20 en lugar de 10
/*El conflicto de nombre ocurre en la declaración return x y está entre el parámetro x de inside y la variable x de outside. La cadena de ámbito aquí es {inside, outside, objeto global}. Por lo tanto, x de inside tiene precedencia sobre x de outside y 20 (x) de inside se devuelve en lugar de 10 (x de outside).*/




