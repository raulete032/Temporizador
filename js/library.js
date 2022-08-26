


/**
 * Función que crea un nodo y lo devuelve
 * @param {String} tipo -> El tipo de nodo a crear
 * @param {String} txt -> Texto que llevará, en su caso, el nodo
 * @returns -> El nodo creado
 */
 export function newNode(tipo, txt) {

    if (txt == undefined)
        return document.createElement(tipo);
    else {
        let nodo = document.createElement(tipo);
        let texto = document.createTextNode(txt);

        nodo.appendChild(texto);
        return nodo;
    }
}


/**
 * Función que inserta un nodo después de otro
 * @param {*} nodo -> El nodo a insertar
 * @param {*} nodoRef -> El nodo referencia
 */
 export function insertAfter(nodo, nodoRef){

    if(nodoRef.nextSibling)
        nodoRef.parentNode.insertBefore(nodo, nodoRef.nextSibling);
    else
        nodoRef.parentNode.appendChild(nodo);
}


/**
 * Función que devuelve la hora actual en formato hh:mm:ss
 * @param {*} objDate -> Un objeto tipo Date
 * @returns -> String con la hora hh:mm:ss
 */
export function createTimeString(objDate){
    var h= objDate.getHours();
    var m= objDate.getMinutes();
    var s= objDate.getSeconds();

    if(h<=9)
        h="0"+h;
    if(m<=9)
        m="0"+m;
    if(s<=9)
        s="0"+s;
    
    return h+":"+m+":"+s;
}