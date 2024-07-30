function tabuada(){
    let res = document.querySelector('p#tabures')
    let num = parseInt(document.querySelector('input#num').value)

    if (isNaN(num)){
        window.alert('[ERRO] Digite um número.')
    } else {
        res.style.textAlign= 'center'
        res.innerHTML = `Tabuada do numero ${num}`
        for( let cont = 0; cont<=10 ; cont++)
            res.innerHTML += `<br>${num} x ${cont} = ${num*cont}`
    }
}