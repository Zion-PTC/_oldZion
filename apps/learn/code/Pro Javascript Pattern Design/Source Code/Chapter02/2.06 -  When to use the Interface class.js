var DynamicMap = new Interface('DynamicMap', [
  'centerOnPoint',
  'zoom',
  'draw',
]);

function displayRoute(mapInstance) {
  Interface.ensureImplements(mapInstance, DynamicMap);
  mapInstance.centerOnPoint(12, 34);
  mapInstance.zoom(5);
  mapInstance.draw();
  // ...
}
