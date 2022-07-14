export {};

enum SearchDBs {
  elasticSearch = "elasticSearch",
  luecne = "lucene",
  solr = "solr",
  algolia = "algolia",
  meilisearch = "meilisearch",
}

enum UseCases {}

enum Pros {
  similar_to_document,
  scans_text,
  adv_filtering,
  handle_typos,
  fast_on_large_dataset,
}

enum Cons {
  lots_of_overhead,
  costs,
}

enum Acronym {}
