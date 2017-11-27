import Vue from 'vue'
import Vuex from 'vuex'
import { removeByValue,getStarNotes } from './../util/util'
import {noteListApi} from './../service/getData'
Vue.use(Vuex)

const store  = new Vuex.Store({
    state:{
        isStar:false,
        count:3,
        activeNote:{
            // id:1,
            // title:"Java",
            // content:"一切皆是对象",
            // time:new Date(new Date().getTime()-4*3600*24*1000),
            // star:true
        },
        notes:[]
        // {
        //     id:1,
        //     title:"Java",
        //     content:"一切皆是对象",
        //     time:new Date(new Date().getTime()-4*3600*24*1000),
        //     star:true
        // },{
        //     id:2,
        //     title:"C++",
        //     content:"底层操作",
        //     time:new Date(new Date().getTime()-3*3600*24*1000),
        //     star:false
        // },{
        //     id:3,
        //     title:"Python",
        //     content:"不要重复造轮子",
        //     time:new Date(new Date().getTime()-2*3600*24*1000),
        //     star:false
        // }
    },
    getters:{
        notes: state => state.notes,
        activeNote: state => state.activeNote,
        starNotes: state => state.notes.filter(getStarNotes),
        showNotes:state => {
            if(state.isStar){
                return state.notes.filter(getStarNotes);
            }else{
                return state.notes;
            }
        }
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
                title:"Title"+state.count,
                content:"Context",
                time:new Date(),
                star:false
            }
            state.notes.push(newNote);
            state.activeNote = newNote;
        },
        DELETE_NOTE:(state)=>{
            removeByValue(state.notes,state.activeNote);
        },
        CHANGE_STAR:(state)=>{
            state.activeNote.star = !state.activeNote.star;
        },
        SHOW_STAR:(state)=>{
            state.isStar = !state.isStar;
        },
        GET_NOTELIST:(state,newNotes)=>{
            state.notes = newNotes;
            state.activeNote = newNotes[0];
        }

    },
    actions:{
        addNote:({commit})=>{
            commit('ADD_NOTE')
        },
        deleteNode:({commit,dispatch})=>{
            commit('DELETE_NOTE');
            dispatch('getActiveNote');
        },
        getActiveNote:({state,getters})=>{
            for(var note of getters.showNotes){
                if(note==state.activeNote){
                    return ;
                }    
            }
            state.activeNote = getters.showNotes[0]||{
                title:"哈哈哈",
                content:"没有数据了",
                time:new Date(),
                star:false
            };
        },
        starNoteList:({commit})=>{
            commit('SHOW_STAR');
        }
    }
});
export default store