const express = require('express');
const fetch = require('node-fetch')
const app = express();
const PORT = 3001;
const HOST = "localhost";
app.get('*',async (req, res) => {
   const page = await fetch(`http://localhost:3000/${req.path}`)
   const body = await page.text()
   //mock ESI replace
   res.send(body.replace('<esi:include src="foo.bar"></esi:include>', `<div>foobar</div>`))
})

app.listen(PORT, HOST, () => {
    console.log(`Proxy starting on port ${PORT}`)
})