/***
 * Para criar um usuário, vai ser necessário : name, email, password;
 */

interface TechObject {
    titulo: string;
    experiencia: number;
}

interface CreateUserData {
    // name -> ? indica que não é obrigatório
    name?: string;
    email: string;
    senha: string;
    techs: Array<string | TechObject>

}

export default function createUser({ name = '', email, senha }: CreateUserData) {
    const user = {
        name,
        email,
        senha
    }
    return user;
}