import express from 'express'
const app = express();
const port = 3001

import user_model from './user_model.js';
import content_model from './content_model.js';


app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

// CONTENT
app.get('/content', (req, res) => {
  content_model.getContent()
.then(response => {
  res.status(200).send(response);
})
.catch(error => {
  res.status(500).send(error);
})
})
app.post('/content', (req, res) => {
  content_model.createContent(req.body)
.then(response => {
  res.status(200).send(response);
})
.catch(error => {
  res.status(500).send(error);
})
})
// USERS
app.get('/', (req, res) => {
  user_model.getUsers()
.then(response => {
  res.status(200).send(response);
})
.catch(error => {
  res.status(500).send(error);
})
})

app.post('/users', (req, res) => {
    user_model.createUser(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.delete('/users/:id', (req, res) => {
    user_model.deleteUser(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})