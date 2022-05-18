import def from 'react-chartjs-2';
export declare let getDatasetAtEvent: typeof def.getDatasetAtEvent;
export declare let getElementAtEvent: typeof def.getElementAtEvent;
export declare let getElementsAtEvent: typeof def.getElementsAtEvent;
export declare let Bar: <TData = number[], TLabel = unknown>(props: Omit<def.ChartProps<"bar", TData, TLabel>, "type"> & {
    ref?: import("react-chartjs-2/dist/types").ForwardedRef<import("chart.js").Chart<"bar", TData, TLabel>>;
}) => JSX.Element;
export declare let Bubble: <TData = import("chart.js").BubbleDataPoint[], TLabel = unknown>(props: Omit<def.ChartProps<"bubble", TData, TLabel>, "type"> & {
    ref?: import("react-chartjs-2/dist/types").ForwardedRef<import("chart.js").Chart<"bubble", TData, TLabel>>;
}) => JSX.Element;
export declare let Chart: <TType extends keyof import("chart.js").ChartTypeRegistry = keyof import("chart.js").ChartTypeRegistry, TData = import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, TLabel = unknown>(props: def.ChartProps<TType, TData, TLabel> & {
    ref?: import("react-chartjs-2/dist/types").ForwardedRef<import("chart.js").Chart<TType, TData, TLabel>>;
}) => JSX.Element;
export declare let Doughnut: <TData = number[], TLabel = unknown>(props: Omit<def.ChartProps<"doughnut", TData, TLabel>, "type"> & {
    ref?: import("react-chartjs-2/dist/types").ForwardedRef<import("chart.js").Chart<"doughnut", TData, TLabel>>;
}) => JSX.Element;
export declare let Line: <TData = (number | import("chart.js").ScatterDataPoint)[], TLabel = unknown>(props: Omit<def.ChartProps<"line", TData, TLabel>, "type"> & {
    ref?: import("react-chartjs-2/dist/types").ForwardedRef<import("chart.js").Chart<"line", TData, TLabel>>;
}) => JSX.Element;
export declare let Pie: <TData = number[], TLabel = unknown>(props: Omit<def.ChartProps<"pie", TData, TLabel>, "type"> & {
    ref?: import("react-chartjs-2/dist/types").ForwardedRef<import("chart.js").Chart<"pie", TData, TLabel>>;
}) => JSX.Element;
export declare let PolarArea: <TData = number[], TLabel = unknown>(props: Omit<def.ChartProps<"polarArea", TData, TLabel>, "type"> & {
    ref?: import("react-chartjs-2/dist/types").ForwardedRef<import("chart.js").Chart<"polarArea", TData, TLabel>>;
}) => JSX.Element;
export declare let Radar: <TData = number[], TLabel = unknown>(props: Omit<def.ChartProps<"radar", TData, TLabel>, "type"> & {
    ref?: import("react-chartjs-2/dist/types").ForwardedRef<import("chart.js").Chart<"radar", TData, TLabel>>;
}) => JSX.Element;
export declare let Scatter: <TData = (number | import("chart.js").ScatterDataPoint)[], TLabel = unknown>(props: Omit<def.ChartProps<"scatter", TData, TLabel>, "type"> & {
    ref?: import("react-chartjs-2/dist/types").ForwardedRef<import("chart.js").Chart<"scatter", TData, TLabel>>;
}) => JSX.Element;
