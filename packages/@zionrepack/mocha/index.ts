import moc, {
  AsyncFunc as mocAsyncFunc,
  Context as mocContext,
  Done as mocDone,
  ExclusiveSuiteFunction as mocExclusiveSuiteFunction,
  ExclusiveTestFunction as mocExclusiveTestFunction,
  Func as mocFunc,
  Hook as mocHook,
  HookFunction as mocHookFunction,
  Interface as mocInterface,
  InterfaceContributions as mocInterfaceContributions,
  MochaGlobals as mocMochaGlobals,
  MochaInstanceOptions as mocMochaInstanceOptions,
  MochaOptions as mocMochaOptions,
  PendingSuiteFunction as mocPendingSuiteFunction,
  PendingTestFunction as mocPendingTestFunction,
  Reporter as mocReporter,
  ReporterConstructor as mocReporterConstructor,
  ReporterContributions as mocReporterContributions,
  RootHookObject as mocRootHookObject,
  Runnable as mocRunnable,
  Runner as mocRunner,
  RunnerConstants as mocRunnerConstants,
  RunnerOptions as mocRunnerOptions,
  Stats as mocStats,
  Suite as mocSuite,
  SuiteConstants as mocSuiteConstants,
  SuiteFunction as mocSuiteFunction,
  Test as mocTest,
  TestFunction as mocTestFunction,
  TestInterface as mocTestInterface,
} from 'mocha';

export type AsyncFunc = mocAsyncFunc;
export type Context = mocContext;
export type Done = mocDone;
export type ExclusiveSuiteFunction = mocExclusiveSuiteFunction;
export type ExclusiveTestFunction = mocExclusiveTestFunction;
export type Func = mocFunc;
export type Hook = mocHook;
export type HookFunction = mocHookFunction;
export type Interface = mocInterface;
export type InterfaceContributions = mocInterfaceContributions;
export type MochaGlobals = mocMochaGlobals;
export type MochaInstanceOptions = mocMochaInstanceOptions;
export type MochaOptions = mocMochaOptions;
export type PendingSuiteFunction = mocPendingSuiteFunction;
export type PendingTestFunction = mocPendingTestFunction;
export type Reporter = mocReporter;
export type ReporterConstructor = mocReporterConstructor;
export type ReporterContributions = mocReporterContributions;
export type RootHookObject = mocRootHookObject;
export type Runnable = mocRunnable;
export type Runner = mocRunner;
export type RunnerConstants = mocRunnerConstants;
export type RunnerOptions = mocRunnerOptions;
export type Stats = mocStats;
export type Suite = mocSuite;
export type SuiteConstants = mocSuiteConstants;
export type SuiteFunction = mocSuiteFunction;
export type Test = mocTest;
export type TestFunction = mocTestFunction;
export type TestInterface = mocTestInterface;

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
