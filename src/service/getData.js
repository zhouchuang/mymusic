import Vue from "vue";
import VueResource from "vue-resource";
Vue.use(VueResource);

var apiContext='/api/';//因为反向代理必须有个标识，为此而配

let noteListApi=This=>{
    return This.$resource(apiContext+'note/noteList');
}

export {noteListApi};