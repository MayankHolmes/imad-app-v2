var button=document.getElementById('counter');
var counter=0;
button.onclick= function(){
  counter=counter+1;
  var span=document.getElementById('count');
  span.innerHTML=counter.toString();
};
var comment_input=document.getElementById('comment');
var comment1 =input.value;
var submit=document.getElementById('submit_btn');

submit.onclick=function(){
    var comments=['n1','n2','n3'];
     var list='';
     for(var i=0;i<comments.length;i++)
     {
         list += '<li>' +comments[i]+ '</li>';
     }
     
     var ul=document.getElementById('comment_box');
     ul.innerHTML=list;
};