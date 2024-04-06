const express = require('express');
const bodyParser = require('body-parser');
const { editTextLayer } = require('./editTextLayer'); // Adjust the path as necessary

const app = express();
app.use(bodyParser.json());

// Endpoint to receive form data and edit PSD file
app.post('/api/edit-psd', async (req, res) => {
  try {
    const formData = req.body;
    await editTextLayer(formData); // Process the form data
    res.json({ message: 'PSD file edited successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error editing PSD file' });
  }
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
