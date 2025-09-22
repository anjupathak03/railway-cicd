const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World! Yeh meri pehli CI/CD pipeline hai Railway par!');
});

app.listen(PORT, () => {
  console.log(`Server ${PORT} par chal raha hai`);
});
//IT JUST HAPPENED