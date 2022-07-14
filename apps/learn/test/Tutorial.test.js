const { testEnvironment } = await import("@zionstate/test-suite-1");
const { BlogPost } = await import("../built/src/BlogPosts.js");
const { DesignPattern } = await import("../built/src/DesignPattern.js");
const { Tutorial } = await import("../built/src/Tutorial.js");
const { Sorgente } = await import("../built/src/Sorgente.js");
const { Esercizio } = await import("../built/src/Esercizio.js");
const { Package } = await import("../built/src/Packages.js");

const { expect, log } = testEnvironment();
Tutorial.mostraTutorials();

console.log(process.memoryUsage().heapUsed / 1024 / 1024);
// Sorgente.mostraSorgenti();
// DesignPattern.mostraDesignPatterns();
// BlogPost.mostraBlogPosts();
// Esercizio.mostraEsercizi();
// Package.mostraPackages();
