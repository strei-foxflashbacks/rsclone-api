import express, { Express, Request, Response } from 'express';

const router: Express = express();

router.get('/', (req: Request, res: Response) => {
  res.send('User List');
});

router.get('/new', (req: Request, res: Response) => {
  res.send('User new form');
});

router
  .route('/:id')
  .get((req: Request, res: Response) => {
    res.send(`Get user #${req.params.id}`);
  })
  .put((req: Request, res: Response) => {
    res.send(`Update user #${req.params.id}`);
  })
  .delete((req: Request, res: Response) => {
    res.send(`Delete user #${req.params.id}`);
  });

module.exports = router;

// TODO: functionality to handle views by route
