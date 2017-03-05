var button=document.getElementById('counter');
var counter=0;
button.onclick= function(){
  counter=counter+1;
  var span=document.getElementById('count');
  span.innerHTML=counter.toString();
};

 
var submit=document.getElementById('submit_btn');

submit.onclick=function(){
   
    var request=new XMLHttpRequest();
    request.onreadystatechange=function()
    {
    if(request.readystate===XMLHttpRequest.DONE)
    {
        if(request.status==200)
        {
            var comments=request.responseText;
            comments=JSON.parse(comments);
            var list='';
        for(var i=0;i<comments.length;i++)
     {
           list += '<li>' +comments[i]+ '</li>';
     }
        
           var ul=document.getElementById('comment_box');
           ul.innerHTML=list;
        }}
    };

var commentinput=document.getElementById('comment');
var comment1 =commentinput.value;
request.open('http://mayankholmes.imad.hasura-app.io/cbox?comments='+comment1,true);
request.send(null);
};