const tarefas= JSON.parse(localStorage.getItem("tarefas")) || []

tarefas.forEach( tarefa => card(tarefa))

function card(tarefa){

//template literals
const content = `
    <div class="nes-container is-dark with-title">
        <p class="Inform your build">${tarefa.classe_V}</p>
        <span class="nes-text is-error">Tier4 / Iconic</span>
        <p>${tarefa.como_joga_V}</p>
        <a href="#" class="nes-badge is-icon">
            <span class="is-warning"><i class="nes-icon coin is-small"></i></span>
            <span class="is-primary">${tarefa.nivel}</span>
        </a>
          <progress class="nes-progress is-error" value="10" max="100"></progress>
            <button type="button" class="nes-btn is-primary">-</button>
            <button type="button" class="nes-btn is-error">Error</button>
            <button type="button" class="nes-btn is-primary">+</button>
    </div>
`
const card= document.createElement("div")
card.innerHTML = content

document
    .querySelector("#lista-de-tarefas")
    .appendChild(card)


}