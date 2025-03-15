import { seedUsers } from './user-seeds.js';
import { seedTickets } from './ticket-seeds.js';
import { sequelize } from '../models/seed';
const seedAll = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('\n----- DATABASE SYNCED -----\n');
        await seedUsers();
        console.log('\n----- USERS seedED -----\n');
        await seedTickets();
        console.log('\n----- TICKETS seedED -----\n');
        process.exit(0);
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};
seedAll();
