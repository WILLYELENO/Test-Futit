/*Write a JavaScript program to check whether a matrix is a diagonal
matrix or not. In linear algebra, a diagonal matrix is a matrix in which the
entries outside the main diagonal are all zero (the diagonal from the upper
left to the lower right).
Example:
[1, 0, 0], 
[0, 2, 0],
[0, 0, 3] ]) = true


[1, 0, 0],
[0, 2, 3],
[0, 0, 3] ]) = false */



function sonArreglos(matriz) {
    for(let i = 0; i < matriz.length; ++i) {
        if (!(matriz[i] instanceof Array)) {
            return false;
        }
    }

    return true;
}

function esMatrizDiagonal(matriz) {
    if (matriz instanceof Array) {
        if(sonArreglos(matriz)) {
            for(let i = 0; i < matriz.length; ++i) {
                for(let j = 0; j < matriz[i].length; ++j) {
                    if (i != j && matriz[i][j] !== 0) {
                        return false;
                    }
                }
            }

            return true;
        } else {
            throw TypeError('Todos los elementos de la matriz deben ser arreglos.');
        }
    } else {
        throw TypeError('El argumento debe ser un arreglo.')
    }
}

try {
    console.log(esMatrizDiagonal([[1, 0, 0], [0, 2, 0], [0, 0, 3]]));   // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}


try {
    console.log(esMatrizDiagonal([[1, 0, 0], [0, 2, 3], [0, 0, 3]]));   // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}


