/*Ejercicio 1: Reading the following statements, please indicate which information will be printed on the screen.
. */



<html>
    <script type = "text/javascrip">
        var numberOfCalls = 0;
        function calculaBinomial(a, b)
        {
            var squareOfA = a*a;
            var squareOfB = b*b;
            numberOfCalls++;
            return squareOfA +  squareOfB + 2*a*b;
        }

        alert (calculadoraBinomial (2,3));
        alert (calculadoraBinomial (4,5));
        alert (numberOfCalls);
        alert (typeof squareOfA);
    </script>
</html>


/*** Explain in detail the 4th output: 
 * alert(typeof squareOfA);


La salida de ese cuarto ouput será undefine ya que la variable "squareOfA" fue declarada usando la palabra reservada "var". Con "var" las variables son globales o locales a 
una función. En este caso es actúa como una variable de ámbito local, es decir que sólo existe dentro de la función "calculaBinomial", ya que la misma vive dentro del contexto de
la misma función, es decir cuando la misma se ejecuta, deja de existir.

es una variable de ambito local que solo existe dentro de la función. Cuando la misma
se ejecuta, deja de existir. Vive dentro del contexto de esa función.
*/

