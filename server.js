const express = require('express');
const QRCode = require('qrcode');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/generate', async (req, res) => {
  const { text } = req.query;

  if (!text) {
    return res.status(400).json({ error: 'No text provided' });
  }

  try {
    const qr = await QRCode.toDataURL(text);
    res.json({ qr });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to generate QR code' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
