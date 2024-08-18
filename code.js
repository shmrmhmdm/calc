function result(val){
//   console.log(val)
    document.getElementById('input').value=document.getElementById('input').value+val

}
function off(){
    document.getElementById('input').value=""
}
function equalFunc(){
    var text=document.getElementById('input').value

    res=eval(text)  /* eval the function for text calculation */
    
    document.getElementById('input').value=res
}


