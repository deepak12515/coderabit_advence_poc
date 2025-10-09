import express from 'express';
import axios from 'axios';

const app = express();
const ORDERS_URL = process.env.ORDERS_URL || 'http://localhost:4000';

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.get('/order/:id', async (req, res) => 
  try {
    const { data } = await axios.get(`${ORDERS_URL}/order/${req.params.id}`);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'failed to fetch order' });
  }
});

const port = Number(process.env.PORT) || 3000;
app.listen(port, () => console.log(`api-gateway listening on ${port}`));
