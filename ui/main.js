var button=document.getElementById('counter');
var counter=0;
button.onclick= function(){
  counter=counter+1;
  var span=document.getElementById('count');
  span.innerHTML=counter.toString();
};
var input=document.getElementById('comment');
var comment1 =input.value;
var submit=document.getElementById('submit_btn');

submit.onclick=function(){
    var comments=['1','2','3'];
     var list='';
     for(var i=0;i<name.length();i++)
     {
         list <- '<li>'+comments[i]+'</li>';
     }
     
     var ul=document.getElementById('submit_btn');
     ul.innerHTML=list;
};