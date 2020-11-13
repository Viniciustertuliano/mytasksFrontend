<template>
  <div>
    <v-row cols="12">
      <Coluna titulo="Aberto" cor="indigo" :tarefas="tarefasAbertas" />

      <Coluna titulo="Em andamento" cor="primary" :tarefas="tarefasEmAndamento" />

      <Coluna titulo="Concluídas" cor="success" :tarefas="tarefasConcluidas" />

      <Coluna titulo="Canceladas" cor="error" :tarefas="tarefasCanceladas" />
    </v-row>

    <TarefaDialog />
  </div>
</template>

<script>
import Coluna from "../../components/coluna/Coluna"
import TarefaDialog from '../tarefa/TarefaDialog'
export default {
  components: {
    Coluna, TarefaDialog
  },
  data() {
    return {
      tarefasAbertas: [
        {
          id: 1,
          titulo: "Tarefa X",
          status: "ABERTA",
        },
      ],
      tarefasEmAndamento: [
        {
          id: 2,
          titulo: "Tarefa Z",
          status: "EM_ANDAMENTO",
        },
      ],
      tarefasConcluidas: [
        {
          id: 3,
          titulo: "Tarefa W",
          status: "CONCLUIDA",
        },
      ],
      tarefasCanceladas: [
        {
          id: 4,
          titulo: "Tarefa Y",
          status: "CONCLUIDA",
        },
      ],
    };
  },
};
</script>

<style>
</style>