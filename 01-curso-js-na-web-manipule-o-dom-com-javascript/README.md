```javascript

document
document.querySelector('div') // primeiro que encontrar (tag=div, id=#id, classe=.classe, data-=[data-..]
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

// Template String
// interpolando strings com JavaScript
// ES6
const conteudo = `<p>${dado}</p>`
const conteudo2 = `<p>${funcao(parametro)}</p>`

const tarefa = botao.parentElement
tarefa.classList.toggle('done')
tarefa.classList.add('check-button')

// não deixar no escopo global - IIFE
// IIFE (Immediately Invoked Function Expression) é uma função em JavaScript que é executada assim que definida.
(() => { ... } )()

```