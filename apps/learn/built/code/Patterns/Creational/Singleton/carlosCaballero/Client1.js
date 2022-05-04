import { DatabaseConnection } from './DatabaseConnection.js';
export class Client1 {
    databaseConnection;
    constructor() {
        console.log('Client1...');
        console.log('DatabaseConnection created...');
        this.databaseConnection =
            DatabaseConnection.getDatabaseConnection();
    }
    getUniqueIdentificatorConnection() {
        return this.databaseConnection.getUniqueIdentificator;
    }
}
