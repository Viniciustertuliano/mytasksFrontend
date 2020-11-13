<template>
  <v-card class="mx-auto" outlined>
    <v-card-title @click="editarTarefa" class="titulo"> {{ tarefa.titulo }} </v-card-title>

    <v-card-actions>
      <v-btn ico class="primary" @click="iniciar" v-if="showIniciar"><v-icon>mdi-play</v-icon></v-btn>
      <v-btn ico class="success" @click="concluir" v-if="showConcluir"><v-icon>mdi-check</v-icon></v-btn>
      <v-btn ico class="error" @click="cancelar" v-if="showCancelar"><v-icon>mdi-cancel</v-icon></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props: [
        'tarefa'
    ],
    computed: {
        showIniciar() {
            return this.tarefa.status == 'ABERTA'
        },
        showConcluir() {
            return this.tarefa.status == 'ABERTA' || this.tarefa.status == 'EM_ANDAMENTO'
        },
        showCancelar() {
            return this.tarefa.status == 'ABERTA' || this.tarefa.status == 'EM_ANDAMENTO'
        },
    },
    methods: {
        iniciar() {
          this.tarefa.status = 'EM_ANDAMENTO'
          this.$store.dispatch('atualizarTarefa', this.tarefa)
        },
        concluir() {
          this.tarefa.status = 'CONCLUIDA'
          this.$store.dispatch('atualizarTarefa', this.tarefa)
        },
        cancelar() {
          this.tarefa.status = 'CANCELADA'
          this.$store.dispatch('atualizarTarefa', this.tarefa)
        },
        editarTarefa() {
            this.$store.dispatch('editarTarefa', this.tarefa)
        }
    }
};
</script>

<style>
.titulo:hover {
  cursor: pointer;
}
</style>