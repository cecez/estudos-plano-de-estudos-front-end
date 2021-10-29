
// não deixar no escopo global
(() => {

    const criarTarefa = (evento) => {
        evento.preventDefault();

        const input = document.querySelector('[data-form-input]')
        const valor = input.value

        console.log(valor)

        input.value = ''
    }

    const botao = document.querySelector('[data-form-button]')

    botao.addEventListener('click', criarTarefa)

})()
