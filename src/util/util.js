
function removeByValue(arr,val){
    for(var i=0; i<arr.length; i++) {
        if(arr[i].id == val.id) {
            arr.splice(i, 1);
            break;
        }
    }  
}
function getStarNotes(item){
    return item.star == true;
}
export { removeByValue ,getStarNotes}