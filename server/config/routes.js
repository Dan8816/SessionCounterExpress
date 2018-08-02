module.exports = app => {
// root route
app.get('/', function (req, res){
  if (!req.session.visitNum){
    req.session.visitNum = 1;
  }
  else{
    req.session.visitNum += 1;
  }
  page = {title:"Session Counter", message: "Below is the number of visits in your session", counter: req.session.visitNum}
    res.render('index', page);
  });
// route to process new user form data:
app.post('/users', function (req, res){
  // code to add user to db goes here!
  // redirect the user back to the root route. 
  // All we do is specify the URL we want to go to:
  res.redirect('/');
  })  
}