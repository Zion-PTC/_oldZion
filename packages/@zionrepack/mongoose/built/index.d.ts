import mng, { AcceptsDiscriminator as mngAcceptsDiscriminator, Aggregate as mngAggregate, AggregateOptions as mngAggregateOptions, AnyArray as mngAnyArray, AnyKeys as mngAnyKeys, AnyObject as mngAnyObject, ApplyBasicQueryCasting as mngApplyBasicQueryCasting, AsyncValidateFn as mngAsyncValidateFn, BaseDocumentType as mngBaseDocumentType, BooleanSchemaDefinition as mngBooleanSchemaDefinition, Callback as mngCallback, CallbackError as mngCallbackError, CallbackWithoutResult as mngCallbackWithoutResult, CallbackWithoutResultAndOptionalError as mngCallbackWithoutResultAndOptionalError, CastError as mngCastError, ClientSession as mngClientSession, Collection as mngCollection, CollectionBase as mngCollectionBase, CompileModelOptions as mngCompileModelOptions, Condition as mngCondition, ConnectOptions as mngConnectOptions, Connection as mngConnection, ConnectionStates as mngConnectionStates, ConnectionSyncIndexesResult as mngConnectionSyncIndexesResult, Cursor as mngCursor, CursorFlag as mngCursorFlag, Date as mngDate, DateSchemaDefinition as mngDateSchemaDefinition, Decimal128 as mngDecimal128, DocTypeFromGeneric as mngDocTypeFromGeneric, DocTypeFromUnion as mngDocTypeFromUnion, Document as mngDocument, DocumentDefinition as mngDocumentDefinition, EachAsyncOptions as mngEachAsyncOptions, ErrorHandlingMiddlewareFunction as mngErrorHandlingMiddlewareFunction, ExtractMongooseArray as mngExtractMongooseArray, FilterQuery as mngFilterQuery, FlattenMaps as mngFlattenMaps, GeoSearchOptions as mngGeoSearchOptions, HydratedDocument as mngHydratedDocument, IndexDefinition as mngIndexDefinition, IndexDirection as mngIndexDirection, IndexOptions as mngIndexOptions, InferId as mngInferId, InferIdType as mngInferIdType, InsertManyOptions as mngInsertManyOptions, InsertManyResult as mngInsertManyResult, LeanArray as mngLeanArray, LeanDocument as mngLeanDocument, LeanDocumentElement as mngLeanDocumentElement, LeanDocumentOrArray as mngLeanDocumentOrArray, LeanDocumentOrArrayWithRawType as mngLeanDocumentOrArrayWithRawType, LeanType as mngLeanType, LegacyAsyncValidateFn as mngLegacyAsyncValidateFn, MapReduceOptions as mngMapReduceOptions, Mixed as mngMixed, MixedSchemaTypeOptions as mngMixedSchemaTypeOptions, Model as mngModel, Models as mngModels, ModifyResult as mngModifyResult, Mongoose as mngMongoose, MongooseDocumentMiddleware as mngMongooseDocumentMiddleware, MongooseError as mngMongooseError, MongooseOptions as mngMongooseOptions, MongooseQueryMiddleware as mngMongooseQueryMiddleware, MongooseQueryOptions as mngMongooseQueryOptions, Number as mngNumber, NumberSchemaDefinition as mngNumberSchemaDefinition, ObjectId as mngObjectId, ObjectIdSchemaDefinition as mngObjectIdSchemaDefinition, OneCollectionSyncIndexesResult as mngOneCollectionSyncIndexesResult, PipelineStage as mngPipelineStage, PopulateOptions as mngPopulateOptions, PopulatedDoc as mngPopulatedDoc, PostMiddlewareFunction as mngPostMiddlewareFunction, PreMiddlewareFunction as mngPreMiddlewareFunction, PreSaveMiddlewareFunction as mngPreSaveMiddlewareFunction, ProjectionElementType as mngProjectionElementType, ProjectionFields as mngProjectionFields, ProjectionType as mngProjectionType, Query as mngQuery, QueryOptions as mngQueryOptions, QuerySelector as mngQuerySelector, QueryWithHelpers as mngQueryWithHelpers, RootQuerySelector as mngRootQuerySelector, UpdateQuery as mngUpdateQuery, RefType as mngRefType, Require_id as mngRequire_id, ReturnsNewDoc as mngReturnsNewDoc, SaveOptions as mngSaveOptions, Schema as mngSchema, SchemaDefinition as mngSchemaDefinition, SchemaDefinitionProperty as mngSchemaDefinitionProperty, SchemaDefinitionType as mngSchemaDefinitionType, SchemaDefinitionWithBuiltInClass as mngSchemaDefinitionWithBuiltInClass, SchemaOptions as mngSchemaOptions, SchemaPostOptions as mngSchemaPostOptions, SchemaPreOptions as mngSchemaPreOptions, SchemaTimestampsConfig as mngSchemaTimestampsConfig, SchemaType as mngSchemaType, SchemaTypeOptions as mngSchemaTypeOptions, SchemaValidator as mngSchemaValidator, SortValues as mngSortValues, StringSchemaDefinition as mngStringSchemaDefinition, SyncIndexesError as mngSyncIndexesError, SyncIndexesOptions as mngSyncIndexesOptions, TagSet as mngTagSet, ToObjectOptions as mngToObjectOptions, TreatAsPrimitives as mngTreatAsPrimitives, Unpacked as mngUnpacked, UnpackedIntersection as mngUnpackedIntersection, UpdateAggregationStage as mngUpdateAggregationStage, UpdateWithAggregationPipeline as mngUpdateWithAggregationPipeline, UpdateWriteOpResult as mngUpdateWriteOpResult, ValidateFn as mngValidateFn, ValidateOpts as mngValidateOpts, ValidatorMessageFn as mngValidatorMessageFn, ValidatorProps as mngValidatorProps, VirtualType as mngVirtualType, VirtualTypeOptions as mngVirtualTypeOptions, WriteConcern as mngWriteConcern, Types } from 'mongoose';
export declare type AcceptsDiscriminator = mngAcceptsDiscriminator;
export declare type Aggregate<R> = mngAggregate<R>;
export declare type AggregateOptions = mngAggregateOptions;
export declare type AnyArray<T> = mngAnyArray<T>;
export declare type AnyKeys<T> = mngAnyKeys<T>;
export declare type AnyObject = mngAnyObject;
export declare type ApplyBasicQueryCasting<T> = mngApplyBasicQueryCasting<T>;
export declare type AsyncValidateFn<T> = mngAsyncValidateFn<T>;
export declare type BaseDocumentType<T> = mngBaseDocumentType<T>;
export declare type BooleanSchemaDefinition = mngBooleanSchemaDefinition;
export declare type Callback = mngCallback;
export declare type CallbackError = mngCallbackError;
export declare type CallbackWithoutResult = mngCallbackWithoutResult;
export declare type CallbackWithoutResultAndOptionalError = mngCallbackWithoutResultAndOptionalError;
export declare type CastError = mngCastError;
export declare type ClientSession = mngClientSession;
export declare type Collection = mngCollection;
export declare type CollectionBase<T extends Document> = mngCollectionBase<T>;
export declare type CompileModelOptions = mngCompileModelOptions;
export declare type Condition<T> = mngCondition<T>;
export declare type ConnectOptions = mngConnectOptions;
export declare type Connection = mngConnection;
export declare type ConnectionStates = mngConnectionStates;
export declare type ConnectionSyncIndexesResult = mngConnectionSyncIndexesResult;
export declare type Cursor = mngCursor;
export declare type CursorFlag = mngCursorFlag;
export declare type Date = mngDate;
export declare type DateSchemaDefinition = mngDateSchemaDefinition;
export declare type Decimal128 = mngDecimal128;
export declare type DocTypeFromGeneric<T> = mngDocTypeFromGeneric<T>;
export declare type DocTypeFromUnion<T> = mngDocTypeFromUnion<T>;
export declare type Document = mngDocument;
export declare type DocumentDefinition<T> = mngDocumentDefinition<T>;
export declare type EachAsyncOptions = mngEachAsyncOptions;
export declare type ErrorHandlingMiddlewareFunction = mngErrorHandlingMiddlewareFunction;
export declare type ExtractMongooseArray<T> = mngExtractMongooseArray<T>;
export declare type FilterQuery<T> = mngFilterQuery<T>;
export declare type FlattenMaps<T> = mngFlattenMaps<T>;
export declare type GeoSearchOptions = mngGeoSearchOptions;
export declare type HydratedDocument<T> = mngHydratedDocument<T>;
export declare type IndexDefinition = mngIndexDefinition;
export declare type IndexDirection = mngIndexDirection;
export declare type IndexOptions = mngIndexOptions;
export declare type InferId<T> = mngInferId<T>;
export declare type InferIdType<T> = mngInferIdType<T>;
export declare type InsertManyOptions = mngInsertManyOptions;
export declare type InsertManyResult<T> = mngInsertManyResult<T>;
export declare type LeanArray<T extends unknown[]> = mngLeanArray<T>;
export declare type LeanDocument<T> = mngLeanDocument<T>;
export declare type LeanDocumentElement<T> = mngLeanDocumentElement<T>;
export declare type LeanDocumentOrArray<T> = mngLeanDocumentOrArray<T>;
export declare type LeanDocumentOrArrayWithRawType<T, RawDocType> = mngLeanDocumentOrArrayWithRawType<T, RawDocType>;
export declare type LeanType<T> = mngLeanType<T>;
export declare type LegacyAsyncValidateFn<T> = mngLegacyAsyncValidateFn<T>;
export declare type MapReduceOptions<T, Key, Val> = mngMapReduceOptions<T, Key, Val>;
export declare type Mixed = mngMixed;
export declare type MixedSchemaTypeOptions = mngMixedSchemaTypeOptions;
export declare type Model<T, TQueryHelpers = {}, TMethodsAndOverrides = {}, TVirtuals = {}> = mngModel<T, TQueryHelpers, TMethodsAndOverrides, TVirtuals>;
export declare type Models = mngModels;
export declare type ModifyResult<T> = mngModifyResult<T>;
export declare type Mongoose = mngMongoose;
export declare type MongooseDocumentMiddleware = mngMongooseDocumentMiddleware;
export declare type MongooseError = mngMongooseError;
export declare type MongooseOptions = mngMongooseOptions;
export declare type MongooseQueryMiddleware = mngMongooseQueryMiddleware;
export declare type MongooseQueryOptions = mngMongooseQueryOptions;
export declare type Number = mngNumber;
export declare type NumberSchemaDefinition = mngNumberSchemaDefinition;
export declare type ObjectId = mngObjectId;
export declare type ObjectIdSchemaDefinition = mngObjectIdSchemaDefinition;
export declare type OneCollectionSyncIndexesResult = mngOneCollectionSyncIndexesResult;
export declare type PipelineStage = mngPipelineStage;
export declare type PopulateOptions = mngPopulateOptions;
export declare type PopulatedDoc<PopulatedType, RawId extends RefType = PopulatedType extends {
    _id?: RefType;
} ? NonNullable<PopulatedType['_id']> : Types.ObjectId> = mngPopulatedDoc<PopulatedType, RawId>;
export declare type PostMiddlewareFunction = mngPostMiddlewareFunction;
export declare type PreMiddlewareFunction = mngPreMiddlewareFunction;
export declare type PreSaveMiddlewareFunction = mngPreSaveMiddlewareFunction;
export declare type ProjectionElementType = mngProjectionElementType;
export declare type ProjectionFields<DocType> = mngProjectionFields<DocType>;
export declare type ProjectionType<T> = mngProjectionType<T>;
export declare let Promise: any;
export declare let PromiseProvider: any;
export declare type Query<ResultType, DocType, THelpers = {}, RawDocType = DocType> = mngQuery<ResultType, THelpers, RawDocType>;
export declare type QueryOptions = mngQueryOptions;
export declare type QuerySelector<T> = mngQuerySelector<T>;
export declare type QueryWithHelpers<ResultType, DocType, THelpers = {}, RawDocType = DocType> = mngQueryWithHelpers<ResultType, THelpers, RawDocType>;
export declare type RootQuerySelector<T> = mngRootQuerySelector<T>;
export declare type UpdateQuery<T> = mngUpdateQuery<T>;
export declare type RefType = mngRefType;
export declare type Require_id<T> = mngRequire_id<T>;
export declare type ReturnsNewDoc = mngReturnsNewDoc;
export declare let STATES: typeof mng.ConnectionStates;
export declare type SaveOptions = mngSaveOptions;
export declare type Schema = mngSchema;
export declare type SchemaDefinition = mngSchemaDefinition;
export declare type SchemaDefinitionProperty<T> = mngSchemaDefinitionProperty<T>;
export declare type SchemaDefinitionType<T> = mngSchemaDefinitionType<T>;
export declare type SchemaDefinitionWithBuiltInClass<T> = mngSchemaDefinitionWithBuiltInClass<T>;
export declare type SchemaOptions = mngSchemaOptions;
export declare type SchemaPostOptions = mngSchemaPostOptions;
export declare type SchemaPreOptions = mngSchemaPreOptions;
export declare type SchemaTimestampsConfig = mngSchemaTimestampsConfig;
export declare type SchemaType = mngSchemaType;
export declare type SchemaTypeOptions<T> = mngSchemaTypeOptions<T>;
export declare let SchemaTypes: typeof mngSchema.Types;
export declare type SchemaValidator<T> = mngSchemaValidator<T>;
export declare type SortValues = mngSortValues;
export declare type StringSchemaDefinition = mngStringSchemaDefinition;
export declare type SyncIndexesError = mngSyncIndexesError;
export declare type SyncIndexesOptions = mngSyncIndexesOptions;
export declare type TagSet = mngTagSet;
export declare type ToObjectOptions = mngToObjectOptions;
export declare type TreatAsPrimitives = mngTreatAsPrimitives;
export declare type Unpacked<T> = mngUnpacked<T>;
export declare type UnpackedIntersection<T, U> = mngUnpackedIntersection<T, U>;
export declare type UpdateAggregationStage = mngUpdateAggregationStage;
export declare type UpdateWithAggregationPipeline = mngUpdateWithAggregationPipeline;
export declare type UpdateWriteOpResult = mngUpdateWriteOpResult;
export declare type ValidateFn<T> = mngValidateFn<T>;
export declare type ValidateOpts<T> = mngValidateOpts<T>;
export declare type ValidatorMessageFn = mngValidatorMessageFn;
export declare type ValidatorProps = mngValidatorProps;
export declare type VirtualType<HydratedDocType> = mngVirtualType<HydratedDocType>;
export declare type VirtualTypeOptions = mngVirtualTypeOptions;
export declare type WriteConcern = mngWriteConcern;
export declare type Array<T> = Types.Array<T>;
export declare type ArraySubdocument = Types.ArraySubdocument;
export declare type Buffer = Types.Buffer;
export declare type DocumentArray<T> = Types.DocumentArray<T>;
export declare type Map<T> = Types.Map<T>;
export declare type Subdocument = Types.Subdocument;
