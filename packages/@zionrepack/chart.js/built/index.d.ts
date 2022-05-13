import def, { ActiveDataPoint as chartActiveDataPoint, ActiveElement as chartActiveElement, Align as chartAlign, AnimationEvent as chartAnimationEvent, AnimationOptions as chartAnimationOptions, AnimationSpec as chartAnimationSpec, AnimationsSpec as chartAnimationsSpec, ArcBorderRadius as chartArcBorderRadius, ArcHoverOptions as chartArcHoverOptions, ArcOptions as chartArcOptions, ArcProps as chartArcProps, BarControllerChartOptions as chartBarControllerChartOptions, BarControllerDatasetOptions as chartBarControllerDatasetOptions, BarHoverOptions as chartBarHoverOptions, BarOptions as chartBarOptions, BarProps as chartBarProps, BorderRadius as chartBorderRadius, BubbleControllerDatasetOptions as chartBubbleControllerDatasetOptions, BubbleDataPoint as chartBubbleDataPoint, CartesianScaleOptions as chartCartesianScaleOptions, CartesianScaleTypeRegistry as chartCartesianScaleTypeRegistry, CategoryScaleOptions as chartCategoryScaleOptions, ChartArea as chartChartArea, ChartComponent as chartChartComponent, ChartComponentLike as chartChartComponentLike, ChartConfiguration as chartChartConfiguration, ChartData as chartChartData, ChartDataset as chartChartDataset, ChartDatasetProperties as chartChartDatasetProperties, ChartEvent as chartChartEvent, ChartItem as chartChartItem, ChartMeta as chartChartMeta, ChartOptions as chartChartOptions, ChartType as chartChartType, ChartTypeRegistry as chartChartTypeRegistry, Color as chartColor, CommonElementOptions as chartCommonElementOptions, CommonHoverOptions as chartCommonHoverOptions, ComplexFillTarget as chartComplexFillTarget, ControllerDatasetOptions as chartControllerDatasetOptions, CoreChartOptions as chartCoreChartOptions, CoreInteractionOptions as chartCoreInteractionOptions, CoreScaleOptions as chartCoreScaleOptions, DatasetChartOptions as chartDatasetChartOptions, DatasetControllerChartComponent as chartDatasetControllerChartComponent, DateAdapter as chartDateAdapter, DecimationOptions as chartDecimationOptions, DefaultDataPoint as chartDefaultDataPoint, Defaults as chartDefaults, DoughnutAnimationOptions as chartDoughnutAnimationOptions, DoughnutControllerChartOptions as chartDoughnutControllerChartOptions, DoughnutControllerDatasetOptions as chartDoughnutControllerDatasetOptions, DoughnutDataPoint as chartDoughnutDataPoint, DoughnutMetaExtensions as chartDoughnutMetaExtensions, EasingFunction as chartEasingFunction, ElementChartOptions as chartElementChartOptions, ElementOptionsByType as chartElementOptionsByType, ExtendedPlugin as chartExtendedPlugin, FillTarget as chartFillTarget, FillerControllerDatasetOptions as chartFillerControllerDatasetOptions, FillerOptions as chartFillerOptions, FontSpec as chartFontSpec, GridLineOptions as chartGridLineOptions, InteractionItem as chartInteractionItem, InteractionMode as chartInteractionMode, InteractionModeFunction as chartInteractionModeFunction, InteractionModeMap as chartInteractionModeMap, InteractionOptions as chartInteractionOptions, LayoutItem as chartLayoutItem, LayoutPosition as chartLayoutPosition, LegendElement as chartLegendElement, LegendItem as chartLegendItem, LegendOptions as chartLegendOptions, LineControllerChartOptions as chartLineControllerChartOptions, LineControllerDatasetOptions as chartLineControllerDatasetOptions, LineHoverOptions as chartLineHoverOptions, LineOptions as chartLineOptions, LineProps as chartLineProps, LinearScaleOptions as chartLinearScaleOptions, LogarithmicScaleOptions as chartLogarithmicScaleOptions, Overrides as chartOverrides, ParsedDataType as chartParsedDataType, ParsingOptions as chartParsingOptions, PieAnimationOptions as chartPieAnimationOptions, PieControllerChartOptions as chartPieControllerChartOptions, PieControllerDatasetOptions as chartPieControllerDatasetOptions, PieDataPoint as chartPieDataPoint, PieMetaExtensions as chartPieMetaExtensions, Plugin as chartPlugin, PluginChartOptions as chartPluginChartOptions, PluginOptionsByType as chartPluginOptionsByType, Point as chartPoint, PointHoverOptions as chartPointHoverOptions, PointOptions as chartPointOptions, PointPrefixedHoverOptions as chartPointPrefixedHoverOptions, PointPrefixedOptions as chartPointPrefixedOptions, PointProps as chartPointProps, PointStyle as chartPointStyle, PolarAreaAnimationOptions as chartPolarAreaAnimationOptions, PolarAreaControllerChartOptions as chartPolarAreaControllerChartOptions, PolarAreaControllerDatasetOptions as chartPolarAreaControllerDatasetOptions, RadarControllerChartOptions as chartRadarControllerChartOptions, RadarControllerDatasetOptions as chartRadarControllerDatasetOptions, RadialLinearScaleOptions as chartRadialLinearScaleOptions, RadialScaleTypeRegistry as chartRadialScaleTypeRegistry, Registry as chartRegistry, ScaleChartOptions as chartScaleChartOptions, ScaleOptions as chartScaleOptions, ScaleOptionsByType as chartScaleOptionsByType, ScaleType as chartScaleType, ScaleTypeRegistry as chartScaleTypeRegistry, ScatterControllerChartOptions as chartScatterControllerChartOptions, ScatterControllerDatasetOptions as chartScatterControllerDatasetOptions, ScatterDataPoint as chartScatterDataPoint, Scriptable as chartScriptable, ScriptableAndArray as chartScriptableAndArray, ScriptableAndArrayOptions as chartScriptableAndArrayOptions, ScriptableContext as chartScriptableContext, ScriptableLineSegmentContext as chartScriptableLineSegmentContext, ScriptableOptions as chartScriptableOptions, ScriptableScaleContext as chartScriptableScaleContext, ScriptableScalePointLabelContext as chartScriptableScalePointLabelContext, ScriptableTooltipContext as chartScriptableTooltipContext, Segment as chartSegment, TextAlign as chartTextAlign, Tick as chartTick, TickOptions as chartTickOptions, TimeScaleOptions as chartTimeScaleOptions, TimeUnit as chartTimeUnit, TitleOptions as chartTitleOptions, TooltipCallbacks as chartTooltipCallbacks, TooltipItem as chartTooltipItem, TooltipLabelStyle as chartTooltipLabelStyle, TooltipModel as chartTooltipModel, TooltipOptions as chartTooltipOptions, TooltipPosition as chartTooltipPosition, TooltipPositioner as chartTooltipPositioner, TooltipPositionerFunction as chartTooltipPositionerFunction, TooltipPositionerMap as chartTooltipPositionerMap, TooltipXAlignment as chartTooltipXAlignment, TooltipYAlignment as chartTooltipYAlignment, TransitionSpec as chartTransitionSpec, TransitionsSpec as chartTransitionsSpec, TypedRegistry as chartTypedRegistry, UpdateMode as chartUpdateMode, VisualElement as chartVisualElement } from 'chart.js';
export declare type ActiveDataPoint = chartActiveDataPoint;
export declare type ActiveElement = chartActiveElement;
export declare type Align = chartAlign;
export declare type AnimationEvent = chartAnimationEvent;
export declare type AnimationOptions<T extends keyof ChartTypeRegistry> = chartAnimationOptions<T>;
export declare type AnimationSpec<T extends keyof ChartTypeRegistry> = chartAnimationSpec<T>;
export declare type AnimationsSpec<T extends keyof ChartTypeRegistry> = chartAnimationsSpec<T>;
export declare type ArcBorderRadius = chartArcBorderRadius;
export declare type ArcHoverOptions = chartArcHoverOptions;
export declare type ArcOptions = chartArcOptions;
export declare type ArcProps = chartArcProps;
export declare type BarControllerChartOptions = chartBarControllerChartOptions;
export declare type BarControllerDatasetOptions = chartBarControllerDatasetOptions;
export declare type BarHoverOptions = chartBarHoverOptions;
export declare type BarOptions = chartBarOptions;
export declare type BarProps = chartBarProps;
export declare type BorderRadius = chartBorderRadius;
export declare type BubbleControllerDatasetOptions = chartBubbleControllerDatasetOptions;
export declare type BubbleDataPoint = chartBubbleDataPoint;
export declare type CartesianScaleOptions = chartCartesianScaleOptions;
export declare type CartesianScaleTypeRegistry = chartCartesianScaleTypeRegistry;
export declare type CategoryScaleOptions = chartCategoryScaleOptions;
export declare type ChartArea = chartChartArea;
export declare type ChartComponent = chartChartComponent;
export declare type ChartComponentLike = chartChartComponentLike;
export declare type ChartConfiguration = chartChartConfiguration;
export declare type ChartData = chartChartData;
export declare type ChartDataset = chartChartDataset;
export declare type ChartDatasetProperties<T extends keyof ChartTypeRegistry, R> = chartChartDatasetProperties<T, R>;
export declare type ChartEvent = chartChartEvent;
export declare type ChartItem = chartChartItem;
export declare type ChartMeta = chartChartMeta;
export declare type ChartOptions = chartChartOptions;
export declare type ChartType = chartChartType;
export declare type ChartTypeRegistry = chartChartTypeRegistry;
export declare type Color = chartColor;
export declare type CommonElementOptions = chartCommonElementOptions;
export declare type CommonHoverOptions = chartCommonHoverOptions;
export declare type ComplexFillTarget = chartComplexFillTarget;
export declare type ControllerDatasetOptions = chartControllerDatasetOptions;
export declare type CoreChartOptions<T extends keyof ChartTypeRegistry> = chartCoreChartOptions<T>;
export declare type CoreInteractionOptions = chartCoreInteractionOptions;
export declare type CoreScaleOptions = chartCoreScaleOptions;
export declare type DatasetChartOptions = chartDatasetChartOptions;
export declare type DatasetControllerChartComponent = chartDatasetControllerChartComponent;
export declare type DateAdapter = chartDateAdapter;
export declare type DecimationOptions = chartDecimationOptions;
export declare type DefaultDataPoint<T extends keyof ChartTypeRegistry> = chartDefaultDataPoint<T>;
export declare type Defaults = chartDefaults;
export declare type DoughnutAnimationOptions = chartDoughnutAnimationOptions;
export declare type DoughnutControllerChartOptions = chartDoughnutControllerChartOptions;
export declare type DoughnutControllerDatasetOptions = chartDoughnutControllerDatasetOptions;
export declare type DoughnutDataPoint = chartDoughnutDataPoint;
export declare type DoughnutMetaExtensions = chartDoughnutMetaExtensions;
export declare type EasingFunction = chartEasingFunction;
export declare type ElementChartOptions = chartElementChartOptions;
export declare type ElementOptionsByType<T extends keyof ChartTypeRegistry> = chartElementOptionsByType<T>;
export declare type ExtendedPlugin<T extends keyof ChartTypeRegistry> = chartExtendedPlugin<T>;
export declare type FillTarget = chartFillTarget;
export declare type FillerControllerDatasetOptions = chartFillerControllerDatasetOptions;
export declare type FillerOptions = chartFillerOptions;
export declare type FontSpec = chartFontSpec;
export declare type GridLineOptions = chartGridLineOptions;
export declare type InteractionItem = chartInteractionItem;
export declare type InteractionMode = chartInteractionMode;
export declare type InteractionModeFunction = chartInteractionModeFunction;
export declare type InteractionModeMap = chartInteractionModeMap;
export declare type InteractionOptions = chartInteractionOptions;
export declare type LayoutItem = chartLayoutItem;
export declare type LayoutPosition = chartLayoutPosition;
export declare type LegendElement<T extends keyof ChartTypeRegistry> = chartLegendElement<T>;
export declare type LegendItem = chartLegendItem;
export declare type LegendOptions<T extends keyof ChartTypeRegistry> = chartLegendOptions<T>;
export declare type LineControllerChartOptions = chartLineControllerChartOptions;
export declare type LineControllerDatasetOptions = chartLineControllerDatasetOptions;
export declare type LineHoverOptions = chartLineHoverOptions;
export declare type LineOptions = chartLineOptions;
export declare type LineProps = chartLineProps;
export declare type LinearScaleOptions = chartLinearScaleOptions;
export declare type LogarithmicScaleOptions = chartLogarithmicScaleOptions;
export declare type Overrides = chartOverrides;
export declare type ParsedDataType = chartParsedDataType;
export declare type ParsingOptions = chartParsingOptions;
export declare type PieAnimationOptions = chartPieAnimationOptions;
export declare type PieControllerChartOptions = chartPieControllerChartOptions;
export declare type PieControllerDatasetOptions = chartPieControllerDatasetOptions;
export declare type PieDataPoint = chartPieDataPoint;
export declare type PieMetaExtensions = chartPieMetaExtensions;
export declare type Plugin = chartPlugin;
export declare type PluginChartOptions<T extends keyof ChartTypeRegistry> = chartPluginChartOptions<T>;
export declare type PluginOptionsByType<T extends keyof ChartTypeRegistry> = chartPluginOptionsByType<T>;
export declare type Point = chartPoint;
export declare type PointHoverOptions = chartPointHoverOptions;
export declare type PointOptions = chartPointOptions;
export declare type PointPrefixedHoverOptions = chartPointPrefixedHoverOptions;
export declare type PointPrefixedOptions = chartPointPrefixedOptions;
export declare type PointProps = chartPointProps;
export declare type PointStyle = chartPointStyle;
export declare type PolarAreaAnimationOptions = chartPolarAreaAnimationOptions;
export declare type PolarAreaControllerChartOptions = chartPolarAreaControllerChartOptions;
export declare type PolarAreaControllerDatasetOptions = chartPolarAreaControllerDatasetOptions;
export declare type RadarControllerChartOptions = chartRadarControllerChartOptions;
export declare type RadarControllerDatasetOptions = chartRadarControllerDatasetOptions;
export declare type RadialLinearScaleOptions = chartRadialLinearScaleOptions;
export declare type RadialScaleTypeRegistry = chartRadialScaleTypeRegistry;
export declare type Registry = chartRegistry;
export declare type ScaleChartOptions = chartScaleChartOptions;
export declare type ScaleOptions = chartScaleOptions;
export declare type ScaleOptionsByType = chartScaleOptionsByType;
export declare type ScaleType = chartScaleType;
export declare type ScaleTypeRegistry = chartScaleTypeRegistry;
export declare type ScatterControllerChartOptions = chartScatterControllerChartOptions;
export declare type ScatterControllerDatasetOptions = chartScatterControllerDatasetOptions;
export declare type ScatterDataPoint = chartScatterDataPoint;
export declare type Scriptable<T extends keyof ChartTypeRegistry, R> = chartScriptable<T, R>;
export declare type ScriptableAndArray<T extends keyof ChartTypeRegistry, R> = chartScriptableAndArray<T, R>;
export declare type ScriptableAndArrayOptions<T extends keyof ChartTypeRegistry, R> = chartScriptableAndArrayOptions<T, R>;
export declare type ScriptableContext<T extends keyof ChartTypeRegistry> = chartScriptableContext<T>;
export declare type ScriptableLineSegmentContext = chartScriptableLineSegmentContext;
export declare type ScriptableOptions<T extends keyof ChartTypeRegistry, R> = chartScriptableOptions<T, R>;
export declare type ScriptableScaleContext = chartScriptableScaleContext;
export declare type ScriptableScalePointLabelContext = chartScriptableScalePointLabelContext;
export declare type ScriptableTooltipContext<T extends keyof ChartTypeRegistry> = chartScriptableTooltipContext<T>;
export declare type Segment = chartSegment;
export declare type TextAlign = chartTextAlign;
export declare type Tick = chartTick;
export declare type TickOptions = chartTickOptions;
export declare type TimeScaleOptions = chartTimeScaleOptions;
export declare type TimeUnit = chartTimeUnit;
export declare type TitleOptions = chartTitleOptions;
export declare type TooltipCallbacks<T extends keyof ChartTypeRegistry> = chartTooltipCallbacks<T>;
export declare type TooltipItem<T extends keyof ChartTypeRegistry> = chartTooltipItem<T>;
export declare type TooltipLabelStyle = chartTooltipLabelStyle;
export declare type TooltipModel<T extends keyof ChartTypeRegistry> = chartTooltipModel<T>;
export declare type TooltipOptions = chartTooltipOptions;
export declare type TooltipPosition = chartTooltipPosition;
export declare type TooltipPositioner = chartTooltipPositioner;
export declare type TooltipPositionerFunction<T extends keyof ChartTypeRegistry> = chartTooltipPositionerFunction<T>;
export declare type TooltipPositionerMap = chartTooltipPositionerMap;
export declare type TooltipXAlignment = chartTooltipXAlignment;
export declare type TooltipYAlignment = chartTooltipYAlignment;
export declare type TransitionSpec<T extends keyof ChartTypeRegistry> = chartTransitionSpec<T>;
export declare type TransitionsSpec<T extends keyof ChartTypeRegistry> = chartTransitionsSpec<T>;
export declare type TypedRegistry<T extends keyof ChartTypeRegistry> = chartTypedRegistry<T>;
export declare type UpdateMode = chartUpdateMode;
export declare type VisualElement = chartVisualElement;
export declare let defaults: def.Defaults;
export declare let layouts: {
    addBox(chart: def.Chart<keyof def.ChartTypeRegistry, (number | def.BubbleDataPoint | def.ScatterDataPoint)[], unknown>, item: def.LayoutItem): void;
    removeBox(chart: def.Chart<keyof def.ChartTypeRegistry, (number | def.BubbleDataPoint | def.ScatterDataPoint)[], unknown>, layoutItem: def.LayoutItem): void;
    configure(chart: def.Chart<keyof def.ChartTypeRegistry, (number | def.BubbleDataPoint | def.ScatterDataPoint)[], unknown>, item: def.LayoutItem, options: {
        fullSize?: number;
        position?: def.LayoutPosition;
        weight?: number;
    }): void;
    update(chart: def.Chart<keyof def.ChartTypeRegistry, (number | def.BubbleDataPoint | def.ScatterDataPoint)[], unknown>, width: number, height: number): void;
};
export declare let registerables: readonly def.ChartComponentLike[];
export declare let registry: def.Registry;
export declare let Animation: typeof def.Animation;
export declare let Animations: typeof def.Animations;
export declare let Animator: typeof def.Animator;
export declare let ArcElement: def.ChartComponent & {
    new (cfg: import("chart.js/types/basic").AnyObject): def.ArcElement<def.ArcProps, def.ArcOptions>;
    prototype: def.ArcElement<def.ArcProps, def.ArcOptions>;
};
export declare let BarController: def.ChartComponent & {
    new (chart: def.Chart<keyof def.ChartTypeRegistry, (number | def.BubbleDataPoint | def.ScatterDataPoint)[], unknown>, datasetIndex: number): def.BarController;
    prototype: def.BarController;
};
export declare let BarElement: def.ChartComponent & {
    new (cfg: import("chart.js/types/basic").AnyObject): def.BarElement<def.BarProps, def.BarOptions>;
    prototype: def.BarElement<def.BarProps, def.BarOptions>;
};
export declare let BasePlatform: typeof def.BasePlatform;
export declare let BasicPlatform: typeof def.BasicPlatform;
export declare let BubbleController: def.ChartComponent & {
    new (chart: def.Chart<keyof def.ChartTypeRegistry, (number | def.BubbleDataPoint | def.ScatterDataPoint)[], unknown>, datasetIndex: number): def.BubbleController;
    prototype: def.BubbleController;
};
export declare let CategoryScale: def.ChartComponent & {
    new <O extends def.CategoryScaleOptions = def.CategoryScaleOptions>(cfg: import("chart.js/types/basic").AnyObject): def.CategoryScale<O>;
    prototype: def.CategoryScale<def.CategoryScaleOptions>;
};
export declare let Chart: typeof def.Chart;
export declare let DatasetController: typeof def.DatasetController;
export declare let Decimation: def.Plugin<keyof def.ChartTypeRegistry, import("chart.js/types/basic").AnyObject>;
export declare type DecimationAlgorithm = def.DecimationAlgorithm;
export declare let DomPlatform: typeof def.DomPlatform;
export declare let DoughnutController: def.ChartComponent & {
    new (chart: def.Chart<keyof def.ChartTypeRegistry, (number | def.BubbleDataPoint | def.ScatterDataPoint)[], unknown>, datasetIndex: number): def.DoughnutController;
    prototype: def.DoughnutController;
};
export declare let Element: {
    new <T = import("chart.js/types/basic").AnyObject, O = import("chart.js/types/basic").AnyObject>(): def.Element<T, O>;
    prototype: def.Element<import("chart.js/types/basic").AnyObject, import("chart.js/types/basic").AnyObject>;
};
export declare let Filler: def.Plugin<keyof def.ChartTypeRegistry, import("chart.js/types/basic").AnyObject>;
export declare let Interaction: {
    modes: def.InteractionModeMap;
};
export declare let Legend: def.Plugin<keyof def.ChartTypeRegistry, import("chart.js/types/basic").AnyObject>;
export declare let LineController: def.ChartComponent & {
    new (chart: def.Chart<keyof def.ChartTypeRegistry, (number | def.BubbleDataPoint | def.ScatterDataPoint)[], unknown>, datasetIndex: number): def.LineController;
    prototype: def.LineController;
};
export declare let LineElement: def.ChartComponent & {
    new (cfg: import("chart.js/types/basic").AnyObject): def.LineElement<def.LineProps, def.LineOptions>;
    prototype: def.LineElement<def.LineProps, def.LineOptions>;
};
export declare let LinearScale: def.ChartComponent & {
    new <O extends def.LinearScaleOptions = def.LinearScaleOptions>(cfg: import("chart.js/types/basic").AnyObject): def.LinearScale<O>;
    prototype: def.LinearScale<def.LinearScaleOptions>;
};
export declare let LogarithmicScale: def.ChartComponent & {
    new <O extends def.LogarithmicScaleOptions = def.LogarithmicScaleOptions>(cfg: import("chart.js/types/basic").AnyObject): def.LogarithmicScale<O>;
    prototype: def.LogarithmicScale<def.LogarithmicScaleOptions>;
};
export declare let PieController: def.ChartComponent & {
    new (chart: def.Chart<keyof def.ChartTypeRegistry, (number | def.BubbleDataPoint | def.ScatterDataPoint)[], unknown>, datasetIndex: number): def.DoughnutController;
    prototype: def.DoughnutController;
};
export declare let PointElement: def.ChartComponent & {
    new (cfg: import("chart.js/types/basic").AnyObject): def.PointElement<def.PointProps, def.PointOptions>;
    prototype: def.PointElement<def.PointProps, def.PointOptions>;
};
export declare let PolarAreaController: def.ChartComponent & {
    new (chart: def.Chart<keyof def.ChartTypeRegistry, (number | def.BubbleDataPoint | def.ScatterDataPoint)[], unknown>, datasetIndex: number): def.PolarAreaController;
    prototype: def.PolarAreaController;
};
export declare let RadarController: def.ChartComponent & {
    new (chart: def.Chart<keyof def.ChartTypeRegistry, (number | def.BubbleDataPoint | def.ScatterDataPoint)[], unknown>, datasetIndex: number): def.RadarController;
    prototype: def.RadarController;
};
export declare let RadialLinearScale: def.ChartComponent & {
    new <O extends def.RadialLinearScaleOptions = def.RadialLinearScaleOptions>(cfg: import("chart.js/types/basic").AnyObject): def.RadialLinearScale<O>;
    prototype: def.RadialLinearScale<def.RadialLinearScaleOptions>;
};
export declare let Scale: typeof def.Scale;
export declare let ScatterController: def.ChartComponent & {
    new (chart: def.Chart<keyof def.ChartTypeRegistry, (number | def.BubbleDataPoint | def.ScatterDataPoint)[], unknown>, datasetIndex: number): def.LineController;
    prototype: def.LineController;
};
export declare let SubTitle: def.Plugin<keyof def.ChartTypeRegistry, import("chart.js/types/basic").AnyObject>;
export declare let Ticks: {
    formatters: {
        values(value: unknown): string | string[];
        numeric(tickValue: number, index: number, ticks: {
            value: number;
        }[]): string;
        logarithmic(tickValue: number, index: number, ticks: {
            value: number;
        }[]): string;
    };
};
export declare let TimeScale: def.ChartComponent & {
    new <O extends def.TimeScaleOptions = def.TimeScaleOptions>(cfg: import("chart.js/types/basic").AnyObject): def.TimeScale<O>;
    prototype: def.TimeScale<def.TimeScaleOptions>;
};
export declare let TimeSeriesScale: def.ChartComponent & {
    new <O extends def.TimeScaleOptions = def.TimeScaleOptions>(cfg: import("chart.js/types/basic").AnyObject): def.TimeSeriesScale<O>;
    prototype: def.TimeSeriesScale<def.TimeScaleOptions>;
};
export declare let Title: def.Plugin<keyof def.ChartTypeRegistry, import("chart.js/types/basic").AnyObject>;
export declare let Tooltip: def.Tooltip;
export declare let UpdateModeEnum: typeof def.UpdateModeEnum;
