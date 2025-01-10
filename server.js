   const express = require('express');
   const path = require('path');
   const app = express();
   const port = 3000;

   // Serve static files from the current directory
   app.use(express.static(path.join(__dirname)));

   // Example endpoint to fetch cryptocurrency data
   app.get('/api/crypto-data', (req, res) => {
       // Simulate fetching data from the CDP Agent Kit
       const cryptoData = {
           bitcoinPrice: 50000 // Example data
       };
       res.json(cryptoData);
   });

   app.listen(port, () => {
       console.log(`Server running at http://localhost:${port}`);
   });
