const { json } = require('express');
const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/first.html'));
})

app.get('/horizontalBar', (req,res) => {
    res.sendFile(path.join(__dirname, '/charts/가로막대그래프.html'));
});


app.get('/verticalBar', (req,res) => {
    res.sendFile(path.join(__dirname, '/charts/세로막대그래프.html'));
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});

