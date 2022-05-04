interface ConnectionConfiguration {
  host: string;
  user: string;
  pass: string;
  name: string;
}

export class DatabaseConnection {
  private static istance: DatabaseConnection;
  private configuration: ConnectionConfiguration = {
    host: 'localhost',
    user: 'db user-name',
    pass: 'db password',
    name: 'db name',
  };
  getUniqueIdentificator = Math.round(
    Math.random() * 10000
  );
  private constructor() {}
  public static getDatabaseConnection(): DatabaseConnection {
    if (!DatabaseConnection.istance) {
      this.istance = new DatabaseConnection();
    }
    return DatabaseConnection.istance;
  }
}
