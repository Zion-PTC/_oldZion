export {};
enum DocumentDBs {
  mongo = "mongoDB",
  firestorm = "firestorm",
  dynamoDB = "dynamoDB",
  couchDB = "couchDB",
}
enum UseCases {
  mobile,
  IOT,
  content_management,
}

enum Pros {
  fast_writing,
}

enum Cons {
  no_joins,
  slow_writing,
  slow_update,
  lot_of_disconnected_data,
  no_idea_for_graphs,
}

enum Acronym {}
