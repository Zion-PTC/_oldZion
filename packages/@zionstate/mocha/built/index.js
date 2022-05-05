import moc from 'mocha';
let after = moc.after;
let afterEach = moc.afterEach;
let before = moc.before;
let beforeEach = moc.beforeEach;
let describe = moc.describe;
let interfaces = moc.interfaces;
let it = moc.it;
let prototype = moc.prototype;
let reporters = moc.reporters;
let run = moc.run;
let setup = moc.setup;
let suite = moc.suite;
let suiteSetup = moc.suiteSetup;
let suiteTeardown = moc.suiteTeardown;
let teardown = moc.teardown;
let test = moc.test;
let utils = moc.utils;
let xit = moc.xit;
let exportObj = {
    after,
    afterEach,
    before,
    beforeEach,
    describe,
    interfaces,
    it,
    prototype,
    reporters,
    run,
    setup,
    suite,
    suiteSetup,
    suiteTeardown,
    teardown,
    test,
    utils,
    xit,
};
export default exportObj;
