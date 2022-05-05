export declare class DatabaseConnection {
    private static istance;
    private configuration;
    getUniqueIdentificator: number;
    private constructor();
    static getDatabaseConnection(): DatabaseConnection;
}
