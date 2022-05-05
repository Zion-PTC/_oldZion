import mng, {
  AcceptsDiscriminator as mngAcceptsDiscriminator,
  Aggregate as mngAggregate,
  AggregateOptions as mngAggregateOptions,
  AnyArray as mngAnyArray,
  AnyKeys as mngAnyKeys,
  AnyObject as mngAnyObject,
  ApplyBasicQueryCasting as mngApplyBasicQueryCasting,
  AsyncValidateFn as mngAsyncValidateFn,
  BaseDocumentType as mngBaseDocumentType,
  BooleanSchemaDefinition as mngBooleanSchemaDefinition,
  Callback as mngCallback,
  CallbackError as mngCallbackError,
  CallbackWithoutResult as mngCallbackWithoutResult,
  CallbackWithoutResultAndOptionalError as mngCallbackWithoutResultAndOptionalError,
  CastError as mngCastError,
  ClientSession as mngClientSession,
  Collection as mngCollection,
  CollectionBase as mngCollectionBase,
  CompileModelOptions as mngCompileModelOptions,
  Condition as mngCondition,
  ConnectOptions as mngConnectOptions,
  Connection as mngConnection,
  ConnectionStates as mngConnectionStates,
  ConnectionSyncIndexesResult as mngConnectionSyncIndexesResult,
  Cursor as mngCursor,
  CursorFlag as mngCursorFlag,
  Date as mngDate,
  DateSchemaDefinition as mngDateSchemaDefinition,
  Decimal128 as mngDecimal128,
  DocTypeFromGeneric as mngDocTypeFromGeneric,
  DocTypeFromUnion as mngDocTypeFromUnion,
  Document as mngDocument,
  DocumentDefinition as mngDocumentDefinition,
  EachAsyncOptions as mngEachAsyncOptions,
  ErrorHandlingMiddlewareFunction as mngErrorHandlingMiddlewareFunction,
  ExtractMongooseArray as mngExtractMongooseArray,
  FilterQuery as mngFilterQuery,
  FlattenMaps as mngFlattenMaps,
  GeoSearchOptions as mngGeoSearchOptions,
  HydratedDocument as mngHydratedDocument,
  IndexDefinition as mngIndexDefinition,
  IndexDirection as mngIndexDirection,
  IndexOptions as mngIndexOptions,
  InferId as mngInferId,
  InferIdType as mngInferIdType,
  InsertManyOptions as mngInsertManyOptions,
  InsertManyResult as mngInsertManyResult,
  LeanArray as mngLeanArray,
  LeanDocument as mngLeanDocument,
  LeanDocumentElement as mngLeanDocumentElement,
  LeanDocumentOrArray as mngLeanDocumentOrArray,
  LeanDocumentOrArrayWithRawType as mngLeanDocumentOrArrayWithRawType,
  LeanType as mngLeanType,
  LegacyAsyncValidateFn as mngLegacyAsyncValidateFn,
  MapReduceOptions as mngMapReduceOptions,
  Mixed as mngMixed,
  MixedSchemaTypeOptions as mngMixedSchemaTypeOptions,
  Model as mngModel,
  Models as mngModels,
  ModifyResult as mngModifyResult,
  Mongoose as mngMongoose,
  MongooseDocumentMiddleware as mngMongooseDocumentMiddleware,
  MongooseError as mngMongooseError,
  MongooseOptions as mngMongooseOptions,
  MongooseQueryMiddleware as mngMongooseQueryMiddleware,
  MongooseQueryOptions as mngMongooseQueryOptions,
  Number as mngNumber,
  NumberSchemaDefinition as mngNumberSchemaDefinition,
  ObjectId as mngObjectId,
  ObjectIdSchemaDefinition as mngObjectIdSchemaDefinition,
  OneCollectionSyncIndexesResult as mngOneCollectionSyncIndexesResult,
  PipelineStage as mngPipelineStage,
  PopulateOptions as mngPopulateOptions,
  PopulatedDoc as mngPopulatedDoc,
  PostMiddlewareFunction as mngPostMiddlewareFunction,
  PreMiddlewareFunction as mngPreMiddlewareFunction,
  PreSaveMiddlewareFunction as mngPreSaveMiddlewareFunction,
  ProjectionElementType as mngProjectionElementType,
  ProjectionFields as mngProjectionFields,
  ProjectionType as mngProjectionType,
  Promise as mngPromise,
  PromiseProvider as mngPromiseProvider,
  Query as mngQuery,
  QueryOptions as mngQueryOptions,
  QuerySelector as mngQuerySelector,
  QueryWithHelpers as mngQueryWithHelpers,
  RootQuerySelector as mngRootQuerySelector,
  UpdateQuery as mngUpdateQuery,
  RefType as mngRefType,
  Require_id as mngRequire_id,
  ReturnsNewDoc as mngReturnsNewDoc,
  STATES as mngSTATES,
  SaveOptions as mngSaveOptions,
  Schema as mngSchema,
  SchemaDefinition as mngSchemaDefinition,
  SchemaDefinitionProperty as mngSchemaDefinitionProperty,
  SchemaDefinitionType as mngSchemaDefinitionType,
  SchemaDefinitionWithBuiltInClass as mngSchemaDefinitionWithBuiltInClass,
  SchemaOptions as mngSchemaOptions,
  SchemaPostOptions as mngSchemaPostOptions,
  SchemaPreOptions as mngSchemaPreOptions,
  SchemaTimestampsConfig as mngSchemaTimestampsConfig,
  SchemaType as mngSchemaType,
  SchemaTypeOptions as mngSchemaTypeOptions,
  SchemaTypes as mngSchemaTypes,
  SchemaValidator as mngSchemaValidator,
  SortValues as mngSortValues,
  StringSchemaDefinition as mngStringSchemaDefinition,
  SyncIndexesError as mngSyncIndexesError,
  SyncIndexesOptions as mngSyncIndexesOptions,
  TagSet as mngTagSet,
  ToObjectOptions as mngToObjectOptions,
  TreatAsPrimitives as mngTreatAsPrimitives,
  Unpacked as mngUnpacked,
  UnpackedIntersection as mngUnpackedIntersection,
  UpdateAggregationStage as mngUpdateAggregationStage,
  UpdateWithAggregationPipeline as mngUpdateWithAggregationPipeline,
  UpdateWriteOpResult as mngUpdateWriteOpResult,
  ValidateFn as mngValidateFn,
  ValidateOpts as mngValidateOpts,
  ValidatorMessageFn as mngValidatorMessageFn,
  ValidatorProps as mngValidatorProps,
  VirtualType as mngVirtualType,
  VirtualTypeOptions as mngVirtualTypeOptions,
  WriteConcern as mngWriteConcern,
  Error,
  Types,
} from 'mongoose';

export type AcceptsDiscriminator = mngAcceptsDiscriminator;
export type Aggregate<R> = mngAggregate<R>;
export type AggregateOptions = mngAggregateOptions;
export type AnyArray<T> = mngAnyArray<T>;
export type AnyKeys<T> = mngAnyKeys<T>;
export type AnyObject = mngAnyObject;
export type ApplyBasicQueryCasting<T> = mngApplyBasicQueryCasting<T>;
export type AsyncValidateFn<T> = mngAsyncValidateFn<T>;
export type BaseDocumentType<T> = mngBaseDocumentType<T>;
export type BooleanSchemaDefinition = mngBooleanSchemaDefinition;
export type Callback = mngCallback;
export type CallbackError = mngCallbackError;
export type CallbackWithoutResult = mngCallbackWithoutResult;
export type CallbackWithoutResultAndOptionalError =
  mngCallbackWithoutResultAndOptionalError;
export type CastError = mngCastError;
export type ClientSession = mngClientSession;
export type Collection = mngCollection;
export type CollectionBase<T extends Document> = mngCollectionBase<T>;
export type CompileModelOptions = mngCompileModelOptions;
export type Condition<T> = mngCondition<T>;
export type ConnectOptions = mngConnectOptions;
export type Connection = mngConnection;
export type ConnectionStates = mngConnectionStates;
export type ConnectionSyncIndexesResult = mngConnectionSyncIndexesResult;
export type Cursor = mngCursor;
export type CursorFlag = mngCursorFlag;
export type Date = mngDate;
export type DateSchemaDefinition = mngDateSchemaDefinition;
export type Decimal128 = mngDecimal128;
export type DocTypeFromGeneric<T> = mngDocTypeFromGeneric<T>;
export type DocTypeFromUnion<T> = mngDocTypeFromUnion<T>;
export type Document = mngDocument;
export type DocumentDefinition<T> = mngDocumentDefinition<T>;
export type EachAsyncOptions = mngEachAsyncOptions;
export type ErrorHandlingMiddlewareFunction =
  mngErrorHandlingMiddlewareFunction;
export type ExtractMongooseArray<T> = mngExtractMongooseArray<T>;
export type FilterQuery<T> = mngFilterQuery<T>;
export type FlattenMaps<T> = mngFlattenMaps<T>;
export type GeoSearchOptions = mngGeoSearchOptions;
export type HydratedDocument<T> = mngHydratedDocument<T>;
export type IndexDefinition = mngIndexDefinition;
export type IndexDirection = mngIndexDirection;
export type IndexOptions = mngIndexOptions;
export type InferId<T> = mngInferId<T>;
export type InferIdType<T> = mngInferIdType<T>;
export type InsertManyOptions = mngInsertManyOptions;
export type InsertManyResult<T> = mngInsertManyResult<T>;
export type LeanArray<T extends unknown[]> = mngLeanArray<T>;
export type LeanDocument<T> = mngLeanDocument<T>;
export type LeanDocumentElement<T> = mngLeanDocumentElement<T>;
export type LeanDocumentOrArray<T> = mngLeanDocumentOrArray<T>;
export type LeanDocumentOrArrayWithRawType<T, RawDocType> =
  mngLeanDocumentOrArrayWithRawType<T, RawDocType>;
export type LeanType<T> = mngLeanType<T>;
export type LegacyAsyncValidateFn<T> = mngLegacyAsyncValidateFn<T>;
export type MapReduceOptions<T, Key, Val> = mngMapReduceOptions<T, Key, Val>;
export type Mixed = mngMixed;
export type MixedSchemaTypeOptions = mngMixedSchemaTypeOptions;
export type Model<
  T,
  TQueryHelpers = {},
  TMethodsAndOverrides = {},
  TVirtuals = {}
> = mngModel<T, TQueryHelpers, TMethodsAndOverrides, TVirtuals>;
export type Models = mngModels;
export type ModifyResult<T> = mngModifyResult<T>;
export type Mongoose = mngMongoose;
export type MongooseDocumentMiddleware = mngMongooseDocumentMiddleware;
export type MongooseError = mngMongooseError;
export type MongooseOptions = mngMongooseOptions;
export type MongooseQueryMiddleware = mngMongooseQueryMiddleware;
export type MongooseQueryOptions = mngMongooseQueryOptions;
export type Number = mngNumber;
export type NumberSchemaDefinition = mngNumberSchemaDefinition;
export type ObjectId = mngObjectId;
export type ObjectIdSchemaDefinition = mngObjectIdSchemaDefinition;
export type OneCollectionSyncIndexesResult = mngOneCollectionSyncIndexesResult;
export type PipelineStage = mngPipelineStage;
export type PopulateOptions = mngPopulateOptions;
export type PopulatedDoc<
  PopulatedType,
  RawId extends RefType = PopulatedType extends { _id?: RefType }
    ? NonNullable<PopulatedType['_id']>
    : Types.ObjectId
> = mngPopulatedDoc<PopulatedType, RawId>;
export type PostMiddlewareFunction = mngPostMiddlewareFunction;
export type PreMiddlewareFunction = mngPreMiddlewareFunction;
export type PreSaveMiddlewareFunction = mngPreSaveMiddlewareFunction;
export type ProjectionElementType = mngProjectionElementType;
export type ProjectionFields<DocType> = mngProjectionFields<DocType>;
export type ProjectionType<T> = mngProjectionType<T>;
export let Promise = mngPromise;
export let PromiseProvider = mngPromiseProvider;
export type Query<
  ResultType,
  DocType,
  THelpers = {},
  RawDocType = DocType
> = mngQuery<ResultType, THelpers, RawDocType>;
export type QueryOptions = mngQueryOptions;
export type QuerySelector<T> = mngQuerySelector<T>;
export type QueryWithHelpers<
  ResultType,
  DocType,
  THelpers = {},
  RawDocType = DocType
> = mngQueryWithHelpers<ResultType, THelpers, RawDocType>;
export type RootQuerySelector<T> = mngRootQuerySelector<T>;
export type UpdateQuery<T> = mngUpdateQuery<T>;
export type RefType = mngRefType;
export type Require_id<T> = mngRequire_id<T>;
export type ReturnsNewDoc = mngReturnsNewDoc;
export let STATES = mngSTATES;
export type SaveOptions = mngSaveOptions;
export type Schema = mngSchema;
export type SchemaDefinition = mngSchemaDefinition;
export type SchemaDefinitionProperty<T> = mngSchemaDefinitionProperty<T>;
export type SchemaDefinitionType<T> = mngSchemaDefinitionType<T>;
export type SchemaDefinitionWithBuiltInClass<T> =
  mngSchemaDefinitionWithBuiltInClass<T>;
export type SchemaOptions = mngSchemaOptions;
export type SchemaPostOptions = mngSchemaPostOptions;
export type SchemaPreOptions = mngSchemaPreOptions;
export type SchemaTimestampsConfig = mngSchemaTimestampsConfig;
export type SchemaType = mngSchemaType;
export type SchemaTypeOptions<T> = mngSchemaTypeOptions<T>;
export let SchemaTypes = mngSchemaTypes;
export type SchemaValidator<T> = mngSchemaValidator<T>;
export type SortValues = mngSortValues;
export type StringSchemaDefinition = mngStringSchemaDefinition;
export type SyncIndexesError = mngSyncIndexesError;
export type SyncIndexesOptions = mngSyncIndexesOptions;
export type TagSet = mngTagSet;
export type ToObjectOptions = mngToObjectOptions;
export type TreatAsPrimitives = mngTreatAsPrimitives;
export type Unpacked<T> = mngUnpacked<T>;
export type UnpackedIntersection<T, U> = mngUnpackedIntersection<T, U>;
export type UpdateAggregationStage = mngUpdateAggregationStage;
export type UpdateWithAggregationPipeline = mngUpdateWithAggregationPipeline;
export type UpdateWriteOpResult = mngUpdateWriteOpResult;
export type ValidateFn<T> = mngValidateFn<T>;
export type ValidateOpts<T> = mngValidateOpts<T>;
export type ValidatorMessageFn = mngValidatorMessageFn;
export type ValidatorProps = mngValidatorProps;
export type VirtualType<HydratedDocType> = mngVirtualType<HydratedDocType>;
export type VirtualTypeOptions = mngVirtualTypeOptions;
export type WriteConcern = mngWriteConcern;

export type Array<T> = Types.Array<T>;
export type ArraySubdocument = Types.ArraySubdocument;
export type Buffer = Types.Buffer;
export type DocumentArray<T> = Types.DocumentArray<T>;
export type Map<T> = Types.Map<T>;
export type Subdocument = Types.Subdocument;

let {
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
} = Error;

type DisconnectedError = Error.DisconnectedError;
type DivergentArrayError = Error.DivergentArrayError;
type DocumentNotFoundError = Error.DocumentNotFoundError;
type MissingSchemaError = Error.MissingSchemaError;
type MongooseServerSelectionError = Error.MongooseServerSelectionError;
type ObjectExpectedError = Error.ObjectExpectedError;
type ObjectParameterError = Error.ObjectParameterError;
type OverwriteModelError = Error.OverwriteModelError;
type ParallelSaveError = Error.ParallelSaveError;
type ParallelValidateError = Error.ParallelValidateError;
type StrictModeError = Error.StrictModeError;
type ValidationError = Error.ValidationError;
type ValidatorError = Error.ValidatorError;
type VersionError = Error.VersionError;

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
