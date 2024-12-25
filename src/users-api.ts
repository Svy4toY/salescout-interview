// Create an API using Node.js and Express:
// 1. POST /user - adds a user.
// 2. GET /users - returns all users.

// Use Express library

import { error } from 'console';
import express, { Request, Response } from 'express';
const app = express();

app.use(express.json());

const users: { name: string }[] = [];

app.post('/user', (req: Request, res: Response) => {  
    const name = req.body.name;
    
    if (name) {
        users.push(req.body)
        res.status(200).send();
    }else{ 
        res.status(400).send({"error": "Name is required",});
    }
});

app.get('/users', (req: Request, res: Response) => {
    res.status(200).json(users);
});

if (process.env.NODE_ENV !== 'test') {
    const PORT = 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;
