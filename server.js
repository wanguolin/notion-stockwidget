const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/notion', async (req, res) => {
    const notionUrl = 'https://gentiles.notion.site/5a8cbff1c86042599e62f47f4973c503?pvs=4';
    res.redirect(notionUrl);
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
  