function calclick(val){
 document.getElementById("display-box").value=document.getElementById("display-box").value+val
} 
function clearDisplayScreen(){
 document.getElementById("display-box").value=""
}
function equalSign(){
  var values=document.getElementById("display-box").value
  var result=eval(values)
  document.getElementById("display-box").value=result

}