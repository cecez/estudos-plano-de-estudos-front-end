```javascript

document
document.querySelector('div') // primeiro que encontrar [tag=div, id=#id, classe=.classe]
document.querySelectorAll('div') // lista de nodos encontrados
document.querySelector('button').textContent // consultar ou setar valor

// árvore dom
              window 
                | 
             document 
                | 
               html
            |        |
           head     body
            |        |
        title ..    div ...

document.getElementById('id') // seleciona o elemento pelo id passado.
document.getElementsByClassName('classe') //retorna um array dos elementos pelo nome da classe passada.
document.getElementsByTagName('tag') // retorna um array dos elementos pelo nome da tag passada


```