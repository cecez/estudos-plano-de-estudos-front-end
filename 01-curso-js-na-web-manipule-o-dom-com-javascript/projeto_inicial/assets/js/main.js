import BotaoConcluir from "./components/BotaoConcluir.js"
import BotaoExcluir from "./components/BotaoExcluir.js"

// não deixar no escopo global - IIFE
(() => {  

    const criarTarefa = (evento) => {
        evento.preventDefault()

        const input = document.querySelector('[data-form-input]')
        const valor = input.value
        input.value = ''

        const tarefa = document.createElement('li')
        const conteudo = `<p class="content">${valor}</p>`
        tarefa.classList.add('task')
        tarefa.innerHTML = conteudo
        tarefa.appendChild(BotaoConcluir())
        tarefa.appendChild(BotaoExcluir())

        const lista = document.querySelector('[data-list]')
        lista.appendChild(tarefa)
    }

    const botao = document.querySelector('[data-form-button]')
    botao.addEventListener('click', criarTarefa)

})()
