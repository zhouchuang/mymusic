import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store  = new Vuex.Store({
    state:{
        count:3,
        activeNote:{
            id:1,
            title:"Java",
            content:"一切皆是对象"
        },
        notes:[{
            id:1,
            title:"Java",
            content:"一切皆是对象"
        },{
            id:2,
            title:"C++",
            content:"底层操作"
        },{
            id:3,
            title:"Python",
            content:"不要重复造轮子"
        }]
    },
    getters:{
        notes: state => state.notes,
        activeNote: state => state.activeNote
    },
    mutations:{
        increment(state){
            state.count ++
        },
        decrement: state => state.count--,
        SET_ACTIVE_NOTE:(state,note)=>{
            state.activeNote = note;
        },
        ADD_NOTE:(state)=>{
            store.commit('increment')
            const  newNote =  {
                id:state.count,
                title:"Title",
                content:"Context"
            }
            state.notes.push(newNote);
            store.commit('SET_ACTIVE_NOTE',newNote);
        },
        EDIT_NOTE: (state, text) => {
            state.activeNote.text = text;
        },
    },
    actions:{
        addNote:({commit})=>{
            commit('ADD_NOTE')
        },
    }
});
export default store