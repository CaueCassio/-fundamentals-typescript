import { Request, Response } from 'express';
import CreateUser from './services/CreateUser';


export function helloWorld(request: Request, response: Response) {

    const user = CreateUser({
        email: 'cassio3452@gmail.com',
        senha: '2345',
        techs: [
            'Nodes.Js',
            'React Native',
             { titulo: 'javascript', experiencia: 100 }

        ]
    });

    return response.json({ message: "Oi" });
}


