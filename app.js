var express = require('express');
var fs = require('fs');
var app = express();

app.engine('.html', require('ejs').__express);

app.set('views', __dirname + '/public');

app.locals.title = 'Extended Express Example';

app.all('*', function(req, res, next){
  fs.readFile('posts.json', function(err, data){
    res.locals.posts = JSON.parse(data);
    next();
  });
});

app.get('/', function(req, res){
  res.render('index.html');
});

app.get('/post/:slug', function(req, res, next){
  res.locals.posts.forEach(function(post){
    if (req.params.slug === post.slug){
      res.render('templates/post.html', { post: post });
    }
  })
});

app.get('/api/posts', function(req, res){
  res.json(res.locals.posts);
});

app.use('/', express.static(__dirname + '/public'));

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
  res.render('404.html');
});

app.listen(3000);
console.log('app is listening at localhost:3000');
