export class DatabaseConnection {
    static istance;
    configuration = {
        host: 'localhost',
        user: 'db user-name',
        pass: 'db password',
        name: 'db name',
    };
    getUniqueIdentificator = Math.round(Math.random() * 10000);
    constructor() { }
    static getDatabaseConnection() {
        if (!DatabaseConnection.istance) {
            this.istance = new DatabaseConnection();
        }
        return DatabaseConnection.istance;
    }
}
