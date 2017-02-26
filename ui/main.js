console.log('Loaded!');
app.get('ui/12196277_1651812745097614_3209256683447267969_n.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'ui/12196277_1651812745097614_3209256683447267969_n.png'));
});
