import express from 'express';
import { helloWorld } from './routes';

const app = express();

app.get('/', (request: any, response: { json: (arg0: { message: string; }) => any; }) => {
    return response.json({message: 'hello wolrd'})
})

app.listen(3333);