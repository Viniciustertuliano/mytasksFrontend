import httpClient from './api.services'

const getTodasCategorias = function() {
    return httpClient.get('/categoria')
}

const salvarCategoria = function(categoria) {
    return httpClient.post('/categoria', categoria)
}

const atualizarCategoria = function(id, categoria) {
    return httpClient.put(`/categoria/${id}`, categoria)
}

const exluirCategoria = function(id) {
    return httpClient.delete(`/categoria/${id}`)
}

export {
    getTodasCategorias,
    salvarCategoria,
    atualizarCategoria,
    exluirCategoria
}