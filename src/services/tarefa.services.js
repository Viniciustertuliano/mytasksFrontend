import httpClient from './api.services'

const getTodasTarefas = function() {
    return httpClient.get('/tarefa')
}

const atualizarTarefa = function(id, tarefa) {
    return httpClient.put(`/tarefa/${id}`, tarefa)
}

const salvarTarefa = function(tarefa) {
    return httpClient.post('/tarefa', tarefa)
}

export {
    getTodasTarefas,
    atualizarTarefa,
    salvarTarefa
}