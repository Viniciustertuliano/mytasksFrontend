import Vue from 'vue'
import Vuex from 'vuex'
import { getTodasTarefas, atualizarTarefa, salvarTarefa } from '../services/tarefa.services'
import { getTodasCategorias, salvarCategoria, atualizarCategoria, exluirCategoria } from '../services/categoria.services'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: [],
    categorias: [],
    tarefaEdicao: {},
    showDialog: false,
  },
  mutations: {
    setTarefas( state, tarefas) {
      state.tarefas = tarefas
    },
    setCategorias( state, categorias) {
      state.categorias = categorias
    },
    setTarefaEdicao( state, tarefa ) {
      state.tarefaEdicao = tarefa
    },
    setShowDialog( state, value ) {
      state.showDialog = value;
    }
  },
  actions: {
    carregarTarefas({ commit }) {
      getTodasTarefas()
      .then(response => {
        commit('setTarefas', response.data)
      })
      .catch( err => {
        console.log(err)
      })
    },
    atualizarTarefa({ dispatch }, tarefa) {
      atualizarTarefa(tarefa.id, tarefa)
      .then(response => {
        if (response.status == 200)
          dispatch('carregarTarefas')
        
      })
      .catch( err => {
        console.log(err)
      })
    },
    carregarCategorias({ commit }) {
      getTodasCategorias()
      .then(response => {
        commit('setCategorias', response.data)
      })
      .catch( err => {
        console.log(err)
      })
    },
    salvarTarefa({ dispatch }, tarefa) {
      salvarTarefa(tarefa)
      .then(response => {
        if (response.status == 201)
          dispatch('carregarTarefas')
      })
      .catch( err => {
        console.log(err)
      })
    },
    editarTarefa({ commit, dispatch }, tarefa) {
      commit('setTarefaEdicao', tarefa)
      dispatch('atualizaDialog', true)
    },
    atualizaDialog({ commit }, value) {
      commit('setShowDialog', value)
    },
    limparForm({ commit }) {
      commit('setTarefaEdicao', {})
    },
    excluirCategoria({dispatch}, { id }) {
      exluirCategoria(id)
      .then(response => {
        if (response.status === 200)
          dispatch('carregarCategorias')
      })
      .catch(error => {
        alert('Não é possível excluir esta categoria')
        console.log(error)
      })
    },
    salvarCategoria({dispatch}, categoria) {
      salvarCategoria(categoria)
      .then(response => {
        if (response.status === 200)
          dispatch('carregarCategorias')
      })
      .catch(error => {
        alert('Erro ao salvar categoria')
        console.log(error)
      })
    },
    atualizarCategoria({dispatch}, categoria) {
      atualizarCategoria(categoria.id, categoria)
      .then(response => {
        if (response.status === 200)
          dispatch('carregarCategorias')
      })
      .catch(error => {
        alert('Erro ao salvar categoria')
        console.log(error)
      })
    },
  },
  getters: {
     // https://vuex.vuejs.org/guide/getters.html#method-style-access
    tarefasPorStatus(state) {
      return status => state.tarefas.filter(
        tarefa => { return tarefa.status == status }
      )
    },
    categorias(state) {
      return state.categorias.map( categoria => {
        return {
          ...categoria
        }
      })
    },
    showDialog( state ) {
      return state.showDialog
    },
    tarefaEdicao( state ) {
      return {
        ...state.tarefaEdicao
      }
    }
  },
  modules: {
  }
})
