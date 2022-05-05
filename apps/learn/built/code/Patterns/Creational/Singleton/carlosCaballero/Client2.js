import { DatabaseConnection } from './DatabaseConnection.js';
export class Client2 {
    databaseConnection;
    constructor() {
        console.log('Client2...');
        console.log('DatabaseConnection created...');
        this.databaseConnection =
            DatabaseConnection.getDatabaseConnection();
    }
    getUniqueIdentificatorConnection() {
        return this.databaseConnection.getUniqueIdentificator;
    }
}
