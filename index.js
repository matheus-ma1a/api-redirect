const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const linksArray = [
  'https://api.whatsapp.com/send?phone=31993414485&text=Ol%C3%A1!%20Tenho%20interesse%20nos%20servi%C3%A7os%20de%20tr%C3%A1fego%20pago',
  'https://api.whatsapp.com/send?phone=553193289446&text=Ol%C3%A1!%20Tenho%20interesse%20e%20queria%20mais%20informa%C3%A7%C3%B5es,%20por%20favor%0A%0A',
  'https://api.whatsapp.com/send?phone=5531994931462&text=Tenho%20interesse%20nos%20servi%C3%A7os%20da%20Tropa%20m%C3%ADdias'
];

let currentIndex = 0;

app.get('/', (req, res) => {
  // Retorna o link atual e incrementa o índice
  const currentLink = linksArray[currentIndex];
  currentIndex = (currentIndex + 1) % linksArray.length;

  res.json({ link: currentLink });
  res.send('success');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
