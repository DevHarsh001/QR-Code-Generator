async function generateQR() {
    const text = document.getElementById('qrText').value;
  
    if (!text) {
      alert("Please enter some text or URL!");
      return;
    }
  
    try {
      const response = await fetch(`/api/generate?text=${encodeURIComponent(text)}`);
      const data = await response.json();
  
      if (data.qr) {
        const img = document.createElement('img');
        img.src = data.qr;
        document.getElementById('qrResult').innerHTML = ''; // Clear any previous QR
        document.getElementById('qrResult').appendChild(img);
      } else {
        alert('Error generating QR code!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to generate QR code!');
    }
  }
  