const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`made by: @nozcy.`)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log("Server is Ready made by: @nozcy."+ Date.now()) });
}
 
module.exports = keepAlive;
