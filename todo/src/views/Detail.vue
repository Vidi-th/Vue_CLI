<template>
    <div>
        <button><router-link to="/">Back</router-link></button>  
        <div v-if="todo">
            <h1>{{todo.id}}. {{todo.todoItem}}</h1>
            <label v-if="!editMode">
            <p>{{todo.deskripsi}}</p>
            </label>
            <label v-if="editMode">
                <input v-model="inputEdit" />
            </label>
        </div>
        <button v-if="!editMode" @click="editDesc">Edit</button>
        <button v-if="editMode" @click="editDescBaru(todo.id-1)">Edit Deskripsi</button>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            inputEdit: "",
            inputEdited: "",
            editMode: false,
        };
    },
    methods: {
        editDesc() {
            this.editMode = !this.editMode;
        },

        editDescBaru(index) {
            this.$store.commit('setOrder', index);
            this.$store.commit('editDesc', this.inputEdit);
            this.editDesc();
        },
    },
    computed: {
        todo(){
            return this.$store.getters.todo(parseInt(this.$route.params.Uid))
        }
    },

}
</script>

<style>

</style>