const express = require('express');
const app = express();

app.get('/',(req, res) => {
  res.send({hi: 'there'});
});

const PORT = process.env.PORT || 5000; //it is for heroku listening port
app.listen(PORT);
