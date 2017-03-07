var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool = require('pg').Pool;
var app = express();
app.use(morgan('combined'));

var pool = new pool(config);
app.get('test-db',function(req,res){
pool.query('SELECT * FROM sample',function(err,result)
{
    if (err){
        res.status(500).send(err.toString());
    }
    else
    {
        res.send(JSON.stringify(result));
    }
   } );
});

var days={
     Day2:{
   title:'Mayank Holmes',
   content:`<p>
         Welcome to NPTEL.
     </p>`
        
    }
   
};

function createtemp(data)
{
    var title=data.title;
    var content=data.content;
var htmltemp=
   ` <!DOCTYPE html>
<head>
    <title>
        ${title}
    </title>

<link href="/ui/style.css" rel="stylesheet" />


</head>
<body>
    <a 
    href='/'>home</a>
<div class="container"> <div>
     ${content}
 </div> 
 </div>
    <p>
        HELLO.HOWDIE.
    </p>
</body>`
;
return htmltemp;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var comments=[];
app.get('/cbox', function (req, res) {
  var comment=req.query.comment;
  comments.push(comment);
  res.send(JSON.stringify(comments));
});

app.get('/ui/main.js', function (req, res) {
    
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var counter=0;
app.get('/counter', function (req, res) {
    counter=counter + 1;
  res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/:DayDigit', function (req, res) {
    var DayDigit=req.params.DayDigit;
  res.send(createtemp(days[DayDigit]));
});

app.get('/ui/12196277_1651812745097614_3209256683447267969_n.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '12196277_1651812745097614_3209256683447267969_n.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
