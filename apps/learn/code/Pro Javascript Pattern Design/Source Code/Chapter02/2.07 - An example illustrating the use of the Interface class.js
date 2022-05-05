import { Interface } from '../Introduction/Interface.js';

// ResultFormatter class, before we implement interface checking.

// var ResultFormatter = function (resultsObject) {
//   if (!(resultsObject instanceof TestResult)) {
//     throw new Error(
//       'ResultsFormatter: constructor requires an instance ' +
//         'of TestResult as an argument.'
//     );
//   }
//   this.resultsObject = resultsObject;
// };

// ResultFormatter.prototype.renderResults = function () {
//   var dateOfTest = this.resultsObject.getDate();
//   var resultsArray = this.resultsObject.getResults();

//   var resultsContainer = document.createElement('div');

//   var resultsHeader = document.createElement('h3');
//   resultsHeader.innerHTML =
//     'Test Results from ' + dateOfTest.toUTCString();
//   resultsContainer.appendChild(resultsHeader);

//   var resultsList = document.createElement('ul');
//   resultsContainer.appendChild(resultsList);

//   for (var results of resultsArray) {
//     var listItem = document.createElement('li');
//     listItem.innerHTML = results;
//     resultsList.appendChild(listItem);
//   }

//   return resultsContainer;
// };

// SOLUTION

// ResultSet Interface.

var ResultSet = new Interface('ResultSet', [
  'getDate',
  'getResults',
]);

// ResultFormatter class, after adding Interface checking.

class ResultFormatter {
  constructor(resultsObject) {
    Interface.ensureImplements(resultsObject, ResultSet);
    this.resultsObject = resultsObject;
  }
  renderResults() {
    // ...
  }
}
