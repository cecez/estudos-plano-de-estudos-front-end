
// não deixar no escopo global - IIFE
(() => {

    const concluirTarefa = (evento) => {
        const botao = evento.target
        const tarefa = botao.parentElement
        tarefa.classList.toggle('done')
    }

    // "componente" botão
    const BotaoConcluir = () => {
        const botao = document.createElement('button')
        botao.innerText = 'concluir'
        botao.classList.add('check-button')
        botao.addEventListener('click', concluirTarefa)

        return botao
    }

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

        const lista = document.querySelector('[data-list]')
        lista.appendChild(tarefa)
    }

    const botao = document.querySelector('[data-form-button]')
    botao.addEventListener('click', criarTarefa)

})()
