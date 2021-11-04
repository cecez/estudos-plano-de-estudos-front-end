// "componente" botão excluir
const BotaoExcluir = () => {
    const botao = document.createElement('button')
    botao.innerText = 'excluir'
    botao.addEventListener('click', excluirTarefa)

    return botao
}  

const excluirTarefa = (evento) => {
    const botao = evento.target
    const tarefa = botao.parentElement
    tarefa.remove()
}

export default BotaoExcluir