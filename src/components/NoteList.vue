<template>
    <div id="notes-list">
        <div class="container">
            <ul class="list-group">
               <li class="list-group-li" v-for="item in notes">
                    <span v-if="activeNote.id === item.id" class="list select">{{item.title}}</span>
                    <a v-else   href="#" class="list other"   @click="updateActiveNote(item)" >{{item.title}}</a>
               </li class="list-group-li" >
            </ul>
        </div>
    </div>
</template>
<script>
    import {mapActions,mapGetters} from 'vuex'
    export default{
        name:'notelist',
        
        computed:{
          notes(){
            return this.$store.getters.notes
          },
          activeNote(){
          	return this.$store.getters.activeNote
          }
        },
        methods:{
            show:function(type){
                console.log(type);
            },
            updateActiveNote:function(item){
               this.$store.commit('SET_ACTIVE_NOTE', item)
            }
        }
    }
</script>
<style>
#notes-list .container {
    height: calc(100% - 137px);
    max-height: calc(100% - 137px);
    overflow: auto;
    width: 100%;
    padding: 0;
}

#notes-list .container ul{
    list-style: none;
    margin:0;
    padding: 0;
}

#notes-list .container .list-group-li {
    border: 0;
    border-radius: 0;
    display: list-item;
    text-align: -webkit-match-parent;
}
#notes-list .container .list-group-li .list{
    display: block;
    width: 100%;
    min-height: 50px;
    padding: 14px 20px;
    border-bottom: 1px solid #CBCBCB;
    color: #646469;
    font-size: 14px;
}
#notes-list .container .list-group-li .other {
    text-decoration: none;
    outline: none;
    background-color: transparent;
    cursor: auto;
}
#notes-list .container .list-group-li .select{
    background: #e4f7ea;
    border-top: 1px solid #CBCBCB;
}
</style>