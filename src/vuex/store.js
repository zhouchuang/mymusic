import Vue from 'vue'
import Vuex from 'vuex'
import { removeByValue,getStarNotes } from './../util/util'
import {noteListApi} from './../service/getData'
import axios from 'axios'
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
        NEW_NOTE:(state,newNote)=>{
            state.notes.push(newNote);
            state.activeNote = newNote;     
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
            // state.activeNote = newNotes[0];
        }

    },
    actions:{
        addNote:({commit})=>{
          axios.get('http://localhost:8081/api/note/getNote'
          ).then((res) => {
             commit('NEW_NOTE',res.data);
          }).catch(function (error) {
            console.log(error);
          });
        },
        deleteNode:({commit,dispatch,state})=>{
            axios.post('http://localhost:8081/api/note/deleteNote',state.activeNote
            ).then((res) => {
                commit('DELETE_NOTE');
                dispatch('getActiveNote');
            }).catch(function (error) {
                console.log(error);
            });
        },
        getActiveNote:({state,getters})=>{
            for(var note of getters.showNotes){
                if(note.id==state.activeNote.id){
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
        },
        synchronizationData:({commit,state,dispatch})=>{
          axios.post('http://localhost:8081/api/note/synchronizationData',
            state.notes
          ).then((res) => {
             commit('GET_NOTELIST',res.data.noteList);
             dispatch('getActiveNote');
          }).catch(function (error) {
            console.log(error);
          });
        },
        getNoteList:({commit,dispatch})=>{
            axios.get('http://localhost:8081/api/note/noteList'
          ).then((res) => {
             commit('GET_NOTELIST',res.data);
             dispatch('getActiveNote');
          }).catch(function (error) {
            console.log(error);
          });
        }
    }
});
export default store