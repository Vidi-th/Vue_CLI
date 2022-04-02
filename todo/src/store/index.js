import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        orderList : 0,
        todoList : [],
    },
    mutations:{
        setOrder(state, payload){
            state.orderList = payload;
        },
        addTodo(state, payload){
            state.todoList.push({ todoItem: payload, isEdit: 0 })
        },
        deleteTodo(state, payload){
            state.todoList.splice(payload, 1);
        },
        editTodo(state, payload){
            state.todoList[this.state.orderList].todoItem = payload;
        },
    },
    action:{
        
    },
    modules:{},
})