import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
}

export class UserService {
    db;
    constructor(
        db,
    ) {
        if (!db) throw new Error('Database client was not passed to UserService constructor');
        this.db = db;
    }

    async findAll() {
        let allUsers = [];
        try {
            allUsers = await prisma.user.findMany();
            await this.db.$disconnect;
        } catch(e) {
            console.error(e);
            await this.db.$disconnect;
        }
        console.log(allUsers);
        return allUsers;
    }
}
