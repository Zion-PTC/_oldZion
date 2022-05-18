/// <reference types="react" />
import def, { BrowserRouterProps as routDomBrowserRouterProps, Hash as routDomHash, HashRouterProps as routDomHashRouterProps, HistoryRouterProps as routDomHistoryRouterProps, IndexRouteProps as routDomIndexRouteProps, LayoutRouteProps as routDomLayoutRouteProps, LinkProps as routDomLinkProps, Location as routDomLocation, MemoryRouterProps as routDomMemoryRouterProps, NavLinkProps as routDomNavLinkProps, NavigateFunction as routDomNavigateFunction, NavigateOptions as routDomNavigateOptions, NavigateProps as routDomNavigateProps, Navigator as routDomNavigator, OutletProps as routDomOutletProps, ParamKeyValuePair as routDomParamKeyValuePair, Params as routDomParams, Path as routDomPath, PathMatch as routDomPathMatch, PathRouteProps as routDomPathRouteProps, Pathname as routDomPathname, RouteMatch as routDomRouteMatch, RouteObject as routDomRouteObject, RouteProps as routDomRouteProps, RouterProps as routDomRouterProps, RoutesProps as routDomRoutesProps, Search as routDomSearch, To as routDomTo } from 'react-router-dom';
export declare type BrowserRouterProps = routDomBrowserRouterProps;
export declare type Hash = routDomHash;
export declare type HashRouterProps = routDomHashRouterProps;
export declare type HistoryRouterProps = routDomHistoryRouterProps;
export declare type IndexRouteProps = routDomIndexRouteProps;
export declare type LayoutRouteProps = routDomLayoutRouteProps;
export declare type LinkProps = routDomLinkProps;
export declare type Location = routDomLocation;
export declare type MemoryRouterProps = routDomMemoryRouterProps;
export declare type NavLinkProps = routDomNavLinkProps;
export declare type NavigateFunction = routDomNavigateFunction;
export declare type NavigateOptions = routDomNavigateOptions;
export declare type NavigateProps = routDomNavigateProps;
export declare type Navigator = routDomNavigator;
export declare type OutletProps = routDomOutletProps;
export declare type ParamKeyValuePair = routDomParamKeyValuePair;
export declare type Params = routDomParams;
export declare type Path = routDomPath;
export declare type PathMatch = routDomPathMatch;
export declare type PathRouteProps = routDomPathRouteProps;
export declare type Pathname = routDomPathname;
export declare type RouteMatch = routDomRouteMatch;
export declare type RouteObject = routDomRouteObject;
export declare type RouteProps = routDomRouteProps;
export declare type RouterProps = routDomRouterProps;
export declare type RoutesProps = routDomRoutesProps;
export declare type Search = routDomSearch;
export declare type To = routDomTo;
export declare let createPath: typeof def.createPath;
export declare let createRoutesFromChildren: typeof def.createRoutesFromChildren;
export declare let createSearchParams: typeof def.createSearchParams;
export declare let generatePath: typeof def.generatePath;
export declare let matchPath: typeof def.matchPath;
export declare let matchRoutes: typeof def.matchRoutes;
export declare let parsePath: typeof def.parsePath;
export declare let renderMatches: typeof def.renderMatches;
export declare let resolvePath: typeof def.resolvePath;
export declare let unstable_HistoryRouter: typeof def.unstable_HistoryRouter;
export declare let useHref: typeof def.useHref;
export declare let useInRouterContext: typeof def.useInRouterContext;
export declare let useLinkClickHandler: typeof def.useLinkClickHandler;
export declare let useLocation: typeof def.useLocation;
export declare let useMatch: typeof def.useMatch;
export declare let useNavigate: typeof def.useNavigate;
export declare let useNavigationType: typeof def.useNavigationType;
export declare let useOutlet: typeof def.useOutlet;
export declare let useOutletContext: typeof def.useOutletContext;
export declare let useParams: typeof def.useParams;
export declare let useResolvedPath: typeof def.useResolvedPath;
export declare let useRoutes: typeof def.useRoutes;
export declare let useSearchParams: typeof def.useSearchParams;
export declare let BrowserRouter: typeof def.BrowserRouter;
export declare let HashRouter: typeof def.HashRouter;
export declare let Link: import("react").ForwardRefExoticComponent<def.LinkProps & import("react").RefAttributes<HTMLAnchorElement>>;
export declare let MemoryRouter: typeof def.MemoryRouter;
export declare let NavLink: import("react").ForwardRefExoticComponent<def.NavLinkProps & import("react").RefAttributes<HTMLAnchorElement>>;
export declare let Navigate: typeof def.Navigate;
export declare let NavigationType: typeof def.NavigationType;
export declare let Outlet: typeof def.Outlet;
export declare let Route: typeof def.Route;
export declare let Router: typeof def.Router;
export declare let Routes: typeof def.Routes;