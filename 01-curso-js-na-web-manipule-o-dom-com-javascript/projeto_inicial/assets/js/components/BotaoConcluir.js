// "componente" botão
const BotaoConcluir = () => {
    const botao = document.createElement('button')
    botao.innerText = 'concluir'
    botao.classList.add('check-button')
    botao.addEventListener('click', concluirTarefa)

    return botao
}

const concluirTarefa = (evento) => {
    const botao = evento.target
    const tarefa = botao.parentElement
    tarefa.classList.toggle('done')
}

export default BotaoConcluir