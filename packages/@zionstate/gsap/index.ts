import gsap, {
  Back as gsapBack,
  Bounce as gsapBounce,
  CSSPlugin as gsapCSSPlugin,
  Circ as gsapCirc,
  Cubic as gsapCubic,
  Elastic as gsapElastic,
  Expo as gsapExpo,
  Linear as gsapLinear,
  Power0 as gsapPower0,
  Power1 as gsapPower1,
  Power2 as gsapPower2,
  Power3 as gsapPower3,
  Power4 as gsapPower4,
  Quad as gsapQuad,
  Quart as gsapQuart,
  Quint as gsapQuint,
  Sine as gsapSine,
  SteppedEase as gsapSteppedEase,
  Strong as gsapStrong,
  TimelineLite as gsapTimelineLite,
  TimelineMax as gsapTimelineMax,
  TweenLite as gsapTweenLite,
  TweenMax as gsapTweenMax,
} from 'gsap';

export let Back = gsapBack;
export let Bounce = gsapBounce;
export let CSSPlugin = gsapCSSPlugin;
export let Circ = gsapCirc;
export let Cubic = gsapCubic;
export let Elastic = gsapElastic;
export let Expo = gsapExpo;
export let Linear = gsapLinear;
export let Power0 = gsapPower0;
export let Power1 = gsapPower1;
export let Power2 = gsapPower2;
export let Power3 = gsapPower3;
export let Power4 = gsapPower4;
export let Quad = gsapQuad;
export let Quart = gsapQuart;
export let Quint = gsapQuint;
export let Sine = gsapSine;
export let SteppedEase = gsapSteppedEase;
export let Strong = gsapStrong;
export type TimelineLite = gsapTimelineLite;
export type TimelineMax = gsapTimelineMax;
export type TweenLite = gsapTweenLite;
export type TweenMax = gsapTweenMax;

export let config = gsap.config;
export let core = gsap.core;
export let defaults = gsap.defaults;
export let delayedCall = gsap.delayedCall;
export let effects = gsap.effects;
export let exportRoot = gsap.exportRoot;
export let from = gsap.from;
export let fromTo = gsap.fromTo;
export let getById = gsap.getById;
export let getProperty = gsap.getProperty;
export let getTweensOf = gsap.getTweensOf;
export let globalTimeline = gsap.globalTimeline;
export let install = gsap.install;
export let isTweening = gsap.isTweening;
export let killTweensOf = gsap.killTweensOf;
export let parseEase = gsap.parseEase;
export let plugins = gsap.plugins;
export let quickSetter = gsap.quickSetter;
export let quickTo = gsap.quickTo;
export let registerEase = gsap.registerEase;
export let registerEffect = gsap.registerEffect;
export let registerPlugin = gsap.registerPlugin;
export let set = gsap.set;
export let ticker = gsap.ticker;
export let timeline = gsap.timeline;
export let to = gsap.to;
export let updateRoot = gsap.updateRoot;
export let utils = gsap.utils;
export let version = gsap.version;

export let Animation = core.Animation;
export let Timeline = core.Timeline;
export let Tween = core.Tween;

export let attr = plugins.attr;
export let css = plugins.css;
export let cssRule = plugins.cssRule;
export let drawSVG = plugins.drawSVG;
export let easel = plugins.easel;
export let inertia = plugins.inertia;
export let modifiers = plugins.modifiers;
export let morphSVG = plugins.morphSVG;
export let motionPath = plugins.motionPath;
export let physics2D = plugins.physics2D;
export let physicsProps = plugins.physicsProps;
export let pixi = plugins.pixi;
export let scrambleText = plugins.scrambleText;
export let scrollTo = plugins.scrollTo;
export let snap = plugins.snap;
export let text = plugins.text;

export let checkPrefix = utils.checkPrefix;
export let clamp = utils.clamp;
export let distribute = utils.distribute;
export let getUnit = utils.getUnit;
export let interpolate = utils.interpolate;
export let mapRange = utils.mapRange;
export let normalize = utils.normalize;
export let pipe = utils.pipe;
export let random = utils.random;
export let selector = utils.selector;
export let shuffle = utils.shuffle;
export let splitColor = utils.splitColor;
export let toArray = utils.toArray;
export let unitize = utils.unitize;
export let wrap = utils.wrap;
export let wrapYoyo = utils.wrapYoyo;
export let utilSnap = utils.snap;
