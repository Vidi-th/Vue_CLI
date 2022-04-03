import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
const persistedDataState = createPersistedState({
    paths: ["todoList", "id"],
});

export default new Vuex.Store({
    plugins: [persistedDataState],
    state:{
        orderList : 0,
        todoList : [],
        page : 1,
        id : 1,
    },
    mutations:{
        setOrder(state, payload){
            state.orderList = payload;
        },
        setPage(state, payload){
            state.page = payload;
        },
        setId(state,payload){
            state.id = payload;
        },
        addTodo(state, payload){
            state.todoList.push({
                id : this.state.id,
                todoItem: payload, 
                isEdit: 0,
                deskripsi: "Belum ada deskripsi yang ditulis"
            })
        },
        deleteTodo(state, payload){
            state.todoList.splice(payload, 1);
        },
        editTodo(state, payload){
            state.todoList[this.state.orderList].todoItem = payload;
        },
        editDesc(state, payload){
            state.todoList[this.state.orderList].deskripsi = payload;
        },
    },
    actions:{
        addTodoList(store, param){
            store.commit("addTodo",param);
            const value = this.state.id + 1;
            store.commit("setId", value);
        }
    },
    getters: {
        todo: state => id => {
            return state.todoList.find(todo => todo.id === id);
        }
    },
})