import { DatabaseConnection } from './DatabaseConnection.js';

export class Client1 {
  private databaseConnection: DatabaseConnection;
  constructor() {
    console.log('Client1...');
    console.log('DatabaseConnection created...');
    this.databaseConnection =
      DatabaseConnection.getDatabaseConnection();
  }
  getUniqueIdentificatorConnection(): number {
    return this.databaseConnection.getUniqueIdentificator;
  }
}
