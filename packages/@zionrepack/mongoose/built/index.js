import mng, { Promise as mngPromise, PromiseProvider as mngPromiseProvider, STATES as mngSTATES, SchemaTypes as mngSchemaTypes, Error, } from 'mongoose';
export let Promise = mngPromise;
export let PromiseProvider = mngPromiseProvider;
export let STATES = mngSTATES;
export let SchemaTypes = mngSchemaTypes;
let { CastError, DisconnectedError, DivergentArrayError, DocumentNotFoundError, MissingSchemaError, MongooseServerSelectionError, ObjectExpectedError, ObjectParameterError, OverwriteModelError, ParallelSaveError, ParallelValidateError, StrictModeError, SyncIndexesError, ValidationError, ValidatorError, VersionError, } = Error;
let errorObject = {
    CastError,
    DisconnectedError,
    DivergentArrayError,
    DocumentNotFoundError,
    MissingSchemaError,
    MongooseServerSelectionError,
    ObjectExpectedError,
    ObjectParameterError,
    OverwriteModelError,
    ParallelSaveError,
    ParallelValidateError,
    StrictModeError,
    SyncIndexesError,
    ValidationError,
    ValidatorError,
    VersionError,
};
let connect = mng.connect;
let connection = mng.connection;
let connections = mng.connections;
let createConnection = mng.createConnection;
let defaultMng = mng.default;
let deleteModel = mng.deleteModel;
let disconnect = mng.disconnect;
let get = mng.get;
let model = mng.model;
let modelNames = mng.modelNames;
let models = mng.models;
let mongo = mng.mongo;
let mquery = mng.mquery;
let now = mng.now;
let plugin = mng.plugin;
let pluralize = mng.pluralize;
let set = mng.set;
let startSession = mng.startSession;
let syncIndexes = mng.syncIndexes;
let trusted = mng.trusted;
let version = mng.version;
let exportObj = {
    connect,
    connection,
    connections,
    createConnection,
    deleteModel,
    disconnect,
    get,
    model,
    modelNames,
    models,
    mongo,
    mquery,
    now,
    plugin,
    pluralize,
    set,
    startSession,
    syncIndexes,
    trusted,
    version,
};
