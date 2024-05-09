document
    .querySelector("#botao-cadastrar")
    .addEventListener("click", (e) => {
        e.preventDefault()
        const form = document.querySelector("form")
        console.log(form.classe_V.value)

        const tarefa={
            id: "id"+new Date().getTime(),
            classe_V: form.classe_V.value,
            como_joga_V: form.como_joga_V.value,
            nivel: form.nivel.value,
            status: 0
        }

        salvar(tarefa)
    })

    function salvar(tarefa){
        const tarefas= JSON.parse(localStorage.getItem("tarefas")) || []
        tarefas.push(tarefa)
        localStorage.setItem("tarefas", JSON.stringify(tarefas))
        window.location="index.html"

    }