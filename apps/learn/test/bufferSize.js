console.log(Buffer.from(JSON.stringify({ a: "ciaoo" })).byteLength);

console.log(process.memoryUsage().heapUsed / 1024 / 1024);
