
// não deixar no escopo global
(() => {

    const criarTarefa = (evento) => {
        evento.preventDefault();

        const input = document.querySelector('[data-form-input]')
        const valor = input.value
        input.value = ''

        const tarefa = document.createElement('li')
        const conteudo = `<p class="content">${valor}</p>`
        tarefa.classList.add('task')
        tarefa.innerHTML = conteudo

        const lista = document.querySelector('[data-list]')
        lista.appendChild(tarefa)
    }

    const botao = document.querySelector('[data-form-button]')

    botao.addEventListener('click', criarTarefa)

})()
