<template>
    <div>
    <li>
        <label v-if="!editMode">
            {{ todo.todoItem }}
        </label>
        <label v-if="editMode">
            <input v-model="inputEdit" />
        </label>
        <button v-on:click="hapusList(index)">Hapus</button>
        <button v-if="!editMode" @click="editList">Edit</button>
        <button v-if="editMode" @click="editListBaru(index)">Input Edit</button>
    </li>
    </div>
</template>

<script>
export default {
  name: "TodoListItem",
  data() {
    return {
      inputEdit: "",
      inputEdited: "",
      editMode: false,
    };
  },
  props: {
    todo: Object,
    index: Number,
  },
  methods: {
    hapusList(index) {
      this.$emit("hapus-todo", index);
    },

    editList() {
       this.editMode = !this.editMode;
    },

    editListBaru(index) {
      this.$emit("edit-list-baru", index, this.inputEdit);
      this.editList();
    },
  },
  computed:{
    
  }
};
</script>

<style scoped>

</style>