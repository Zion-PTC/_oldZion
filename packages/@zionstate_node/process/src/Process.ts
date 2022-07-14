export function getProcessUsedHeap(): number {
  return process.memoryUsage().heapUsed / 1024 / 1024;
}

export function addToGlobalObject() {
  return Object.defineProperty(Object, "getProcessUsedHeap", {
    value: getProcessUsedHeap,
  });
}
