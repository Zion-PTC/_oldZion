import def, {
  ActiveDataPoint as chartActiveDataPoint,
  ActiveElement as chartActiveElement,
  Align as chartAlign,
  AnimationEvent as chartAnimationEvent,
  AnimationOptions as chartAnimationOptions,
  AnimationSpec as chartAnimationSpec,
  AnimationsSpec as chartAnimationsSpec,
  ArcBorderRadius as chartArcBorderRadius,
  ArcHoverOptions as chartArcHoverOptions,
  ArcOptions as chartArcOptions,
  ArcProps as chartArcProps,
  BarControllerChartOptions as chartBarControllerChartOptions,
  BarControllerDatasetOptions as chartBarControllerDatasetOptions,
  BarHoverOptions as chartBarHoverOptions,
  BarOptions as chartBarOptions,
  BarProps as chartBarProps,
  BorderRadius as chartBorderRadius,
  BubbleControllerDatasetOptions as chartBubbleControllerDatasetOptions,
  BubbleDataPoint as chartBubbleDataPoint,
  CartesianScaleOptions as chartCartesianScaleOptions,
  CartesianScaleTypeRegistry as chartCartesianScaleTypeRegistry,
  CategoryScaleOptions as chartCategoryScaleOptions,
  ChartArea as chartChartArea,
  ChartComponent as chartChartComponent,
  ChartComponentLike as chartChartComponentLike,
  ChartConfiguration as chartChartConfiguration,
  ChartData as chartChartData,
  ChartDataset as chartChartDataset,
  ChartDatasetProperties as chartChartDatasetProperties,
  ChartEvent as chartChartEvent,
  ChartItem as chartChartItem,
  ChartMeta as chartChartMeta,
  ChartOptions as chartChartOptions,
  ChartType as chartChartType,
  ChartTypeRegistry as chartChartTypeRegistry,
  Color as chartColor,
  CommonElementOptions as chartCommonElementOptions,
  CommonHoverOptions as chartCommonHoverOptions,
  ComplexFillTarget as chartComplexFillTarget,
  ControllerDatasetOptions as chartControllerDatasetOptions,
  CoreChartOptions as chartCoreChartOptions,
  CoreInteractionOptions as chartCoreInteractionOptions,
  CoreScaleOptions as chartCoreScaleOptions,
  DatasetChartOptions as chartDatasetChartOptions,
  DatasetControllerChartComponent as chartDatasetControllerChartComponent,
  DateAdapter as chartDateAdapter,
  DecimationOptions as chartDecimationOptions,
  DefaultDataPoint as chartDefaultDataPoint,
  Defaults as chartDefaults,
  DoughnutAnimationOptions as chartDoughnutAnimationOptions,
  DoughnutControllerChartOptions as chartDoughnutControllerChartOptions,
  DoughnutControllerDatasetOptions as chartDoughnutControllerDatasetOptions,
  DoughnutDataPoint as chartDoughnutDataPoint,
  DoughnutMetaExtensions as chartDoughnutMetaExtensions,
  EasingFunction as chartEasingFunction,
  ElementChartOptions as chartElementChartOptions,
  ElementOptionsByType as chartElementOptionsByType,
  ExtendedPlugin as chartExtendedPlugin,
  FillTarget as chartFillTarget,
  FillerControllerDatasetOptions as chartFillerControllerDatasetOptions,
  FillerOptions as chartFillerOptions,
  FontSpec as chartFontSpec,
  GridLineOptions as chartGridLineOptions,
  InteractionItem as chartInteractionItem,
  InteractionMode as chartInteractionMode,
  InteractionModeFunction as chartInteractionModeFunction,
  InteractionModeMap as chartInteractionModeMap,
  InteractionOptions as chartInteractionOptions,
  LayoutItem as chartLayoutItem,
  LayoutPosition as chartLayoutPosition,
  LegendElement as chartLegendElement,
  LegendItem as chartLegendItem,
  LegendOptions as chartLegendOptions,
  LineControllerChartOptions as chartLineControllerChartOptions,
  LineControllerDatasetOptions as chartLineControllerDatasetOptions,
  LineHoverOptions as chartLineHoverOptions,
  LineOptions as chartLineOptions,
  LineProps as chartLineProps,
  LinearScaleOptions as chartLinearScaleOptions,
  LogarithmicScaleOptions as chartLogarithmicScaleOptions,
  Overrides as chartOverrides,
  ParsedDataType as chartParsedDataType,
  ParsingOptions as chartParsingOptions,
  PieAnimationOptions as chartPieAnimationOptions,
  PieControllerChartOptions as chartPieControllerChartOptions,
  PieControllerDatasetOptions as chartPieControllerDatasetOptions,
  PieDataPoint as chartPieDataPoint,
  PieMetaExtensions as chartPieMetaExtensions,
  Plugin as chartPlugin,
  PluginChartOptions as chartPluginChartOptions,
  PluginOptionsByType as chartPluginOptionsByType,
  Point as chartPoint,
  PointHoverOptions as chartPointHoverOptions,
  PointOptions as chartPointOptions,
  PointPrefixedHoverOptions as chartPointPrefixedHoverOptions,
  PointPrefixedOptions as chartPointPrefixedOptions,
  PointProps as chartPointProps,
  PointStyle as chartPointStyle,
  PolarAreaAnimationOptions as chartPolarAreaAnimationOptions,
  PolarAreaControllerChartOptions as chartPolarAreaControllerChartOptions,
  PolarAreaControllerDatasetOptions as chartPolarAreaControllerDatasetOptions,
  RadarControllerChartOptions as chartRadarControllerChartOptions,
  RadarControllerDatasetOptions as chartRadarControllerDatasetOptions,
  RadialLinearScaleOptions as chartRadialLinearScaleOptions,
  RadialScaleTypeRegistry as chartRadialScaleTypeRegistry,
  Registry as chartRegistry,
  ScaleChartOptions as chartScaleChartOptions,
  ScaleOptions as chartScaleOptions,
  ScaleOptionsByType as chartScaleOptionsByType,
  ScaleType as chartScaleType,
  ScaleTypeRegistry as chartScaleTypeRegistry,
  ScatterControllerChartOptions as chartScatterControllerChartOptions,
  ScatterControllerDatasetOptions as chartScatterControllerDatasetOptions,
  ScatterDataPoint as chartScatterDataPoint,
  Scriptable as chartScriptable,
  ScriptableAndArray as chartScriptableAndArray,
  ScriptableAndArrayOptions as chartScriptableAndArrayOptions,
  ScriptableContext as chartScriptableContext,
  ScriptableLineSegmentContext as chartScriptableLineSegmentContext,
  ScriptableOptions as chartScriptableOptions,
  ScriptableScaleContext as chartScriptableScaleContext,
  ScriptableScalePointLabelContext as chartScriptableScalePointLabelContext,
  ScriptableTooltipContext as chartScriptableTooltipContext,
  Segment as chartSegment,
  TextAlign as chartTextAlign,
  Tick as chartTick,
  TickOptions as chartTickOptions,
  TimeScaleOptions as chartTimeScaleOptions,
  TimeUnit as chartTimeUnit,
  TitleOptions as chartTitleOptions,
  TooltipCallbacks as chartTooltipCallbacks,
  TooltipItem as chartTooltipItem,
  TooltipLabelStyle as chartTooltipLabelStyle,
  TooltipModel as chartTooltipModel,
  TooltipOptions as chartTooltipOptions,
  TooltipPosition as chartTooltipPosition,
  TooltipPositioner as chartTooltipPositioner,
  TooltipPositionerFunction as chartTooltipPositionerFunction,
  TooltipPositionerMap as chartTooltipPositionerMap,
  TooltipXAlignment as chartTooltipXAlignment,
  TooltipYAlignment as chartTooltipYAlignment,
  TransitionSpec as chartTransitionSpec,
  TransitionsSpec as chartTransitionsSpec,
  TypedRegistry as chartTypedRegistry,
  UpdateMode as chartUpdateMode,
  VisualElement as chartVisualElement,
} from 'chart.js';

export type ActiveDataPoint = chartActiveDataPoint;
export type ActiveElement = chartActiveElement;
export type Align = chartAlign;
export type AnimationEvent = chartAnimationEvent;
export type AnimationOptions<T extends keyof ChartTypeRegistry> =
  chartAnimationOptions<T>;
export type AnimationSpec<T extends keyof ChartTypeRegistry> =
  chartAnimationSpec<T>;
export type AnimationsSpec<T extends keyof ChartTypeRegistry> =
  chartAnimationsSpec<T>;
export type ArcBorderRadius = chartArcBorderRadius;
export type ArcHoverOptions = chartArcHoverOptions;
export type ArcOptions = chartArcOptions;
export type ArcProps = chartArcProps;
export type BarControllerChartOptions = chartBarControllerChartOptions;
export type BarControllerDatasetOptions = chartBarControllerDatasetOptions;
export type BarHoverOptions = chartBarHoverOptions;
export type BarOptions = chartBarOptions;
export type BarProps = chartBarProps;
export type BorderRadius = chartBorderRadius;
export type BubbleControllerDatasetOptions =
  chartBubbleControllerDatasetOptions;
export type BubbleDataPoint = chartBubbleDataPoint;
export type CartesianScaleOptions = chartCartesianScaleOptions;
export type CartesianScaleTypeRegistry = chartCartesianScaleTypeRegistry;
export type CategoryScaleOptions = chartCategoryScaleOptions;
export type ChartArea = chartChartArea;
export type ChartComponent = chartChartComponent;
export type ChartComponentLike = chartChartComponentLike;
export type ChartConfiguration = chartChartConfiguration;
export type ChartData = chartChartData;
export type ChartDataset = chartChartDataset;
export type ChartDatasetProperties<
  T extends keyof ChartTypeRegistry,
  R
> = chartChartDatasetProperties<T, R>;
export type ChartEvent = chartChartEvent;
export type ChartItem = chartChartItem;
export type ChartMeta = chartChartMeta;
export type ChartOptions = chartChartOptions;
export type ChartType = chartChartType;
export type ChartTypeRegistry = chartChartTypeRegistry;
export type Color = chartColor;
export type CommonElementOptions = chartCommonElementOptions;
export type CommonHoverOptions = chartCommonHoverOptions;
export type ComplexFillTarget = chartComplexFillTarget;
export type ControllerDatasetOptions = chartControllerDatasetOptions;
export type CoreChartOptions<T extends keyof ChartTypeRegistry> =
  chartCoreChartOptions<T>;
export type CoreInteractionOptions = chartCoreInteractionOptions;
export type CoreScaleOptions = chartCoreScaleOptions;
export type DatasetChartOptions = chartDatasetChartOptions;
export type DatasetControllerChartComponent =
  chartDatasetControllerChartComponent;
export type DateAdapter = chartDateAdapter;
export type DecimationOptions = chartDecimationOptions;
export type DefaultDataPoint<T extends keyof ChartTypeRegistry> =
  chartDefaultDataPoint<T>;
export type Defaults = chartDefaults;
export type DoughnutAnimationOptions = chartDoughnutAnimationOptions;
export type DoughnutControllerChartOptions =
  chartDoughnutControllerChartOptions;
export type DoughnutControllerDatasetOptions =
  chartDoughnutControllerDatasetOptions;
export type DoughnutDataPoint = chartDoughnutDataPoint;
export type DoughnutMetaExtensions = chartDoughnutMetaExtensions;
export type EasingFunction = chartEasingFunction;
export type ElementChartOptions = chartElementChartOptions;
export type ElementOptionsByType<T extends keyof ChartTypeRegistry> =
  chartElementOptionsByType<T>;
export type ExtendedPlugin<T extends keyof ChartTypeRegistry> =
  chartExtendedPlugin<T>;
export type FillTarget = chartFillTarget;
export type FillerControllerDatasetOptions =
  chartFillerControllerDatasetOptions;
export type FillerOptions = chartFillerOptions;
export type FontSpec = chartFontSpec;
export type GridLineOptions = chartGridLineOptions;
export type InteractionItem = chartInteractionItem;
export type InteractionMode = chartInteractionMode;
export type InteractionModeFunction = chartInteractionModeFunction;
export type InteractionModeMap = chartInteractionModeMap;
export type InteractionOptions = chartInteractionOptions;
export type LayoutItem = chartLayoutItem;
export type LayoutPosition = chartLayoutPosition;
export type LegendElement<T extends keyof ChartTypeRegistry> =
  chartLegendElement<T>;
export type LegendItem = chartLegendItem;
export type LegendOptions<T extends keyof ChartTypeRegistry> =
  chartLegendOptions<T>;
export type LineControllerChartOptions = chartLineControllerChartOptions;
export type LineControllerDatasetOptions = chartLineControllerDatasetOptions;
export type LineHoverOptions = chartLineHoverOptions;
export type LineOptions = chartLineOptions;
export type LineProps = chartLineProps;
export type LinearScaleOptions = chartLinearScaleOptions;
export type LogarithmicScaleOptions = chartLogarithmicScaleOptions;
export type Overrides = chartOverrides;
export type ParsedDataType = chartParsedDataType;
export type ParsingOptions = chartParsingOptions;
export type PieAnimationOptions = chartPieAnimationOptions;
export type PieControllerChartOptions = chartPieControllerChartOptions;
export type PieControllerDatasetOptions = chartPieControllerDatasetOptions;
export type PieDataPoint = chartPieDataPoint;
export type PieMetaExtensions = chartPieMetaExtensions;
export type Plugin = chartPlugin;
export type PluginChartOptions<T extends keyof ChartTypeRegistry> =
  chartPluginChartOptions<T>;
export type PluginOptionsByType<T extends keyof ChartTypeRegistry> =
  chartPluginOptionsByType<T>;
export type Point = chartPoint;
export type PointHoverOptions = chartPointHoverOptions;
export type PointOptions = chartPointOptions;
export type PointPrefixedHoverOptions = chartPointPrefixedHoverOptions;
export type PointPrefixedOptions = chartPointPrefixedOptions;
export type PointProps = chartPointProps;
export type PointStyle = chartPointStyle;
export type PolarAreaAnimationOptions = chartPolarAreaAnimationOptions;
export type PolarAreaControllerChartOptions =
  chartPolarAreaControllerChartOptions;
export type PolarAreaControllerDatasetOptions =
  chartPolarAreaControllerDatasetOptions;
export type RadarControllerChartOptions = chartRadarControllerChartOptions;
export type RadarControllerDatasetOptions = chartRadarControllerDatasetOptions;
export type RadialLinearScaleOptions = chartRadialLinearScaleOptions;
export type RadialScaleTypeRegistry = chartRadialScaleTypeRegistry;
export type Registry = chartRegistry;
export type ScaleChartOptions = chartScaleChartOptions;
export type ScaleOptions = chartScaleOptions;
export type ScaleOptionsByType = chartScaleOptionsByType;
export type ScaleType = chartScaleType;
export type ScaleTypeRegistry = chartScaleTypeRegistry;
export type ScatterControllerChartOptions = chartScatterControllerChartOptions;
export type ScatterControllerDatasetOptions =
  chartScatterControllerDatasetOptions;
export type ScatterDataPoint = chartScatterDataPoint;
export type Scriptable<T extends keyof ChartTypeRegistry, R> = chartScriptable<
  T,
  R
>;
export type ScriptableAndArray<
  T extends keyof ChartTypeRegistry,
  R
> = chartScriptableAndArray<T, R>;
export type ScriptableAndArrayOptions<
  T extends keyof ChartTypeRegistry,
  R
> = chartScriptableAndArrayOptions<T, R>;
export type ScriptableContext<T extends keyof ChartTypeRegistry> =
  chartScriptableContext<T>;
export type ScriptableLineSegmentContext = chartScriptableLineSegmentContext;
export type ScriptableOptions<
  T extends keyof ChartTypeRegistry,
  R
> = chartScriptableOptions<T, R>;
export type ScriptableScaleContext = chartScriptableScaleContext;
export type ScriptableScalePointLabelContext =
  chartScriptableScalePointLabelContext;
export type ScriptableTooltipContext<T extends keyof ChartTypeRegistry> =
  chartScriptableTooltipContext<T>;
export type Segment = chartSegment;
export type TextAlign = chartTextAlign;
export type Tick = chartTick;
export type TickOptions = chartTickOptions;
export type TimeScaleOptions = chartTimeScaleOptions;
export type TimeUnit = chartTimeUnit;
export type TitleOptions = chartTitleOptions;
export type TooltipCallbacks<T extends keyof ChartTypeRegistry> =
  chartTooltipCallbacks<T>;
export type TooltipItem<T extends keyof ChartTypeRegistry> =
  chartTooltipItem<T>;
export type TooltipLabelStyle = chartTooltipLabelStyle;
export type TooltipModel<T extends keyof ChartTypeRegistry> =
  chartTooltipModel<T>;
export type TooltipOptions = chartTooltipOptions;
export type TooltipPosition = chartTooltipPosition;
export type TooltipPositioner = chartTooltipPositioner;
export type TooltipPositionerFunction<T extends keyof ChartTypeRegistry> =
  chartTooltipPositionerFunction<T>;
export type TooltipPositionerMap = chartTooltipPositionerMap;
export type TooltipXAlignment = chartTooltipXAlignment;
export type TooltipYAlignment = chartTooltipYAlignment;
export type TransitionSpec<T extends keyof ChartTypeRegistry> =
  chartTransitionSpec<T>;
export type TransitionsSpec<T extends keyof ChartTypeRegistry> =
  chartTransitionsSpec<T>;
export type TypedRegistry<T extends keyof ChartTypeRegistry> =
  chartTypedRegistry<T>;
export type UpdateMode = chartUpdateMode;
export type VisualElement = chartVisualElement;

let {} = def;

export let defaults = def.defaults;
export let layouts = def.layouts;
export let registerables = def.registerables;
export let registry = def.registry;
export let Animation = def.Animation;
export let Animations = def.Animations;
export let Animator = def.Animator;
export let ArcElement = def.ArcElement;
export let BarController = def.BarController;
export let BarElement = def.BarElement;
export let BasePlatform = def.BasePlatform;
export let BasicPlatform = def.BasicPlatform;
export let BubbleController = def.BubbleController;
export let CategoryScale = def.CategoryScale;
export let Chart = def.Chart;
export let DatasetController = def.DatasetController;
export let Decimation = def.Decimation;
export type DecimationAlgorithm = def.DecimationAlgorithm;
export let DomPlatform = def.DomPlatform;
export let DoughnutController = def.DoughnutController;
export let Element = def.Element;
export let Filler = def.Filler;
export let Interaction = def.Interaction;
export let Legend = def.Legend;
export let LineController = def.LineController;
export let LineElement = def.LineElement;
export let LinearScale = def.LinearScale;
export let LogarithmicScale = def.LogarithmicScale;
export let PieController = def.PieController;
export let PointElement = def.PointElement;
export let PolarAreaController = def.PolarAreaController;
export let RadarController = def.RadarController;
export let RadialLinearScale = def.RadialLinearScale;
export let Scale = def.Scale;
export let ScatterController = def.ScatterController;
export let SubTitle = def.SubTitle;
export let Ticks = def.Ticks;
export let TimeScale = def.TimeScale;
export let TimeSeriesScale = def.TimeSeriesScale;
export let Title = def.Title;
export let Tooltip = def.Tooltip;
export let UpdateModeEnum = def.UpdateModeEnum;
