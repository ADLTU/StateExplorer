const { readFile, readFileSync } = require('fs').promises;
const express = require('express');

const app = express();


app.get('/stateNames', async (request, response) => {
    try {
        const data = await readFile('StateNames', 'utf8');
        // response.send();
        await response.json({'states': data.split("\n")});
    } catch(err) {
        response.status(500).send('Out of order');
    }
});

app.get('/stateInformation', async (request, response) => {

    console.log(request)
    // try {
    //     const data = await readFile('StateNames', 'utf8');
    //     // response.send();
    //     await response.json({'states': data.split("\n")});
    // } catch(err) {
    //     response.status(500).send('Out of order');
    // }
});


app.listen(process.env.PORT || 3001, () => {
   console.log(`App available on http://localhost:${process.env.PORT || 3001}`)
});



