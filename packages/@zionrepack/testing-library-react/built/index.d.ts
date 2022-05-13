import * as tlReact from '@testing-library/react';
export declare type AllByAttribute = tlReact.AllByAttribute;
export declare type AllByBoundAttribute = tlReact.AllByBoundAttribute;
export declare type AllByRole = tlReact.AllByRole;
export declare type AllByText = tlReact.AllByText;
export declare type BoundFunction<T> = tlReact.BoundFunction<T>;
export declare type BoundFunctions<T> = tlReact.BoundFunctions<T>;
export declare type BuiltQueryMethods<T> = tlReact.BuiltQueryMethods<T[]>;
export declare type ByRoleMatcher = tlReact.ByRoleMatcher;
export declare type ByRoleOptions = tlReact.ByRoleOptions;
export declare type Config = tlReact.Config;
export declare type ConfigFn = tlReact.ConfigFn;
export declare type CreateFunction = tlReact.CreateFunction;
export declare type CreateObject = tlReact.CreateObject;
export declare type DefaultNormalizerOptions = tlReact.DefaultNormalizerOptions;
export declare type EventType = tlReact.EventType;
export declare type FindAllBy<T> = tlReact.FindAllBy<T[]>;
export declare type FindAllByBoundAttribute = tlReact.FindAllByBoundAttribute;
export declare type FindAllByRole = tlReact.FindAllByRole;
export declare type FindAllByText = tlReact.FindAllByText;
export declare type FindBy<T> = tlReact.FindBy<T[]>;
export declare type FindByBoundAttribute = tlReact.FindByBoundAttribute;
export declare type FindByRole = tlReact.FindByRole;
export declare type FindByText = tlReact.FindByText;
export declare type FireFunction = tlReact.FireFunction;
export declare type FireObject = tlReact.FireObject;
export declare type GetAllBy<T> = tlReact.GetAllBy<T[]>;
export declare type GetBy<T> = tlReact.GetBy<T[]>;
export declare type GetByBoundAttribute = tlReact.GetByBoundAttribute;
export declare type GetByRole = tlReact.GetByRole;
export declare type GetByText = tlReact.GetByText;
export declare type GetErrorFunction = tlReact.GetErrorFunction;
export declare type Match = tlReact.Match;
export declare type Matcher = tlReact.Matcher;
export declare type MatcherFunction = tlReact.MatcherFunction;
export declare type MatcherOptions = tlReact.MatcherOptions;
export declare type Method = tlReact.Method;
export declare type NormalizerFn = tlReact.NormalizerFn;
export declare type NormalizerOptions = tlReact.NormalizerOptions;
export declare type PrettyDOMOptions = tlReact.PrettyDOMOptions;
export declare type Queries = tlReact.Queries;
export declare type Query = tlReact.Query;
export declare type QueryArgs = tlReact.QueryArgs;
export declare type QueryBy<T> = tlReact.QueryBy<T[]>;
export declare type QueryByAttribute = tlReact.QueryByAttribute;
export declare type QueryByBoundAttribute = tlReact.QueryByBoundAttribute;
export declare type QueryByRole = tlReact.QueryByRole;
export declare type QueryByText = tlReact.QueryByText;
export declare type QueryMethod<T, R> = tlReact.QueryMethod<T[], R>;
export declare type QueryOptions = tlReact.QueryOptions;
export declare type RenderHookOptions<T> = tlReact.RenderHookOptions<T>;
export declare type RenderHookResult<T, R> = tlReact.RenderHookResult<T, R>;
export declare type RenderOptions = tlReact.RenderOptions;
export declare type RenderResult = tlReact.RenderResult;
export declare type Screen = tlReact.Screen;
export declare type SelectorMatcherOptions = tlReact.SelectorMatcherOptions;
export declare type Suggestion = tlReact.Suggestion;
export declare type Variant = tlReact.Variant;
export declare type WithSuggest = tlReact.WithSuggest;
export declare type waitForOptions = tlReact.waitForOptions;
export declare let act: typeof import("react-dom/test-utils").act;
export declare let buildQueries: typeof tlReact.buildQueries;
export declare let cleanup: typeof tlReact.cleanup;
export declare let computeHeadingLevel: typeof tlReact.computeHeadingLevel;
export declare let configure: typeof tlReact.configure;
export declare let createEvent: tlReact.CreateObject & tlReact.CreateFunction;
export declare let findAllByAltText: typeof tlReact.findAllByAltText;
export declare let findAllByDisplayValue: typeof tlReact.findAllByDisplayValue;
export declare let findAllByLabelText: typeof tlReact.findAllByLabelText;
export declare let findAllByPlaceholderText: typeof tlReact.findAllByPlaceholderText;
export declare let findAllByRole: typeof tlReact.findAllByRole;
export declare let findAllByTestId: typeof tlReact.findAllByTestId;
export declare let findAllByText: typeof tlReact.findAllByText;
export declare let findAllByTitle: typeof tlReact.findAllByTitle;
export declare let findByAltText: typeof tlReact.findByAltText;
export declare let findByDisplayValue: typeof tlReact.findByDisplayValue;
export declare let findByLabelText: typeof tlReact.findByLabelText;
export declare let findByPlaceholderText: typeof tlReact.findByPlaceholderText;
export declare let findByRole: typeof tlReact.findByRole;
export declare let findByTestId: typeof tlReact.findByTestId;
export declare let findByText: typeof tlReact.findByText;
export declare let findByTitle: typeof tlReact.findByTitle;
export declare let fireEvent: tlReact.FireFunction & tlReact.FireObject;
export declare let getAllByAltText: typeof tlReact.getAllByAltText;
export declare let getAllByDisplayValue: typeof tlReact.getAllByDisplayValue;
export declare let getAllByLabelText: typeof tlReact.getAllByLabelText;
export declare let getAllByPlaceholderText: typeof tlReact.getAllByPlaceholderText;
export declare let getAllByRole: typeof tlReact.getAllByRole;
export declare let getAllByTestId: typeof tlReact.getAllByTestId;
export declare let getAllByText: typeof tlReact.getAllByText;
export declare let getAllByTitle: typeof tlReact.getAllByTitle;
export declare let getByAltText: typeof tlReact.getByAltText;
export declare let getByDisplayValue: typeof tlReact.getByDisplayValue;
export declare let getByLabelText: typeof tlReact.getByLabelText;
export declare let getByPlaceholderText: typeof tlReact.getByPlaceholderText;
export declare let getByRole: typeof tlReact.getByRole;
export declare let getByTestId: typeof tlReact.getByTestId;
export declare let getByText: typeof tlReact.getByText;
export declare let getByTitle: typeof tlReact.getByTitle;
export declare let getConfig: typeof tlReact.getConfig;
export declare let getDefaultNormalizer: typeof tlReact.getDefaultNormalizer;
export declare let getElementError: typeof tlReact.getElementError;
export declare let getNodeText: typeof tlReact.getNodeText;
export declare let getQueriesForElement: typeof tlReact.getQueriesForElement;
export declare let getRoles: typeof tlReact.getRoles;
export declare let getSuggestedQuery: typeof tlReact.getSuggestedQuery;
export declare let isInaccessible: typeof tlReact.isInaccessible;
export declare let logDOM: typeof tlReact.logDOM;
export declare let logRoles: typeof tlReact.logRoles;
export declare let prettyDOM: typeof tlReact.prettyDOM;
export declare let queries: typeof tlReact.queries;
export declare let prettyFormat: typeof tlReact.prettyFormat;
export declare let queryAllByAltText: typeof tlReact.queryAllByAltText;
export declare let queryAllByAttribute: tlReact.AllByAttribute;
export declare let queryAllByDisplayValue: typeof tlReact.queryAllByDisplayValue;
export declare let queryAllByLabelText: typeof tlReact.queryAllByLabelText;
export declare let queryAllByPlaceholderText: typeof tlReact.queryAllByPlaceholderText;
export declare let queryAllByRole: typeof tlReact.queryAllByRole;
export declare let queryAllByTestId: typeof tlReact.queryAllByTestId;
export declare let queryAllByText: typeof tlReact.queryAllByText;
export declare let queryAllByTitle: typeof tlReact.queryAllByTitle;
export declare let queryByAltText: typeof tlReact.queryByAltText;
export declare let queryByAttribute: tlReact.QueryByAttribute;
export declare let queryByDisplayValue: typeof tlReact.queryByDisplayValue;
export declare let queryByLabelText: typeof tlReact.queryByLabelText;
export declare let queryByPlaceholderText: typeof tlReact.queryByPlaceholderText;
export declare let queryByRole: typeof tlReact.queryByRole;
export declare let queryByTestId: typeof tlReact.queryByTestId;
export declare let queryByText: typeof tlReact.queryByText;
export declare let queryByTitle: typeof tlReact.queryByTitle;
export declare let queryHelpers: typeof tlReact.queryHelpers;
export declare let render: typeof tlReact.render;
export declare let renderHook: typeof tlReact.renderHook;
export declare let screen: tlReact.Screen<typeof tlReact.queries>;
export declare let waitFor: typeof tlReact.waitFor;
export declare let waitForElementToBeRemoved: typeof tlReact.waitForElementToBeRemoved;
export declare let within: typeof tlReact.getQueriesForElement;
