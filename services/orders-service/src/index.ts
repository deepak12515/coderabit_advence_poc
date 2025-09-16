import express, { Request, Response } from 'express';
import { calculateFinalAmount } from './orders';

const app = express();
app.use(express.json());

app.get('/health', (req: Request, res: Response) => res.json({ status: 'ok' }));

app.get('/order/:id', (req: Request, res: Response) => {
  // demo order for simplicity
  const order = { id: req.params.id, amount: 100, discountCode: 'VIP' };
  const final = calculateFinalAmount(order as any);
  res.json({ ...order, final });
});

const port = Number(process.env.PORT) || 4000;
app.listen(port, () => console.log(`orders-service listening on ${port}`));
