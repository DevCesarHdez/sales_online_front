const express = require('express');

const app = express();

app.use(express.static('src/public'));

app.set('port', process.env.PORT | 3000);

app.get('/', (req, res) => {
	res.send('index.html');
});

app.listen(app.get('port'), () => { console.log(`Serve on port ${app.get('port')}`); });
