import { client } from "../../prisma/client";

interface IRequestCreateUser {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: IRequestCreateUser) {
    const userAlreadyExist = await client.users.findFirst({
      where: { email },
    });

    if (userAlreadyExist) {
      throw new Error("Usuario já existente.");
    }

    const user = await client.users.create({
      data: {
        name,
        email,
        password,
      },
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}

export { CreateUserService };
