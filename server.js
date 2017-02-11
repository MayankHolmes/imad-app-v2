var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var days={
     'dayTwo':{
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

app.get('/:dayNumber', function (req, res) {
    var dayNumber=req.params.dayNumber;
  res.send(createtemp(days[dayNumber]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
