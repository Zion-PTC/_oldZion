import { TimelineLite as gsapTimelineLite, TimelineMax as gsapTimelineMax, TweenLite as gsapTweenLite, TweenMax as gsapTweenMax } from 'gsap';
export declare let Back: gsap.Back;
export declare let Bounce: gsap.Ease;
export declare let CSSPlugin: gsap.plugins.CSSPlugin;
export declare let Circ: gsap.Ease;
export declare let Cubic: gsap.Ease;
export declare let Elastic: gsap.Elastic;
export declare let Expo: gsap.Ease;
export declare let Linear: gsap.Linear;
export declare let Power0: gsap.Linear;
export declare let Power1: gsap.Ease;
export declare let Power2: gsap.Ease;
export declare let Power3: gsap.Ease;
export declare let Power4: gsap.Ease;
export declare let Quad: gsap.Ease;
export declare let Quart: gsap.Ease;
export declare let Quint: gsap.Ease;
export declare let Sine: gsap.Ease;
export declare let SteppedEase: gsap.SteppedEase;
export declare let Strong: gsap.Ease;
export declare type TimelineLite = gsapTimelineLite;
export declare type TimelineMax = gsapTimelineMax;
export declare type TweenLite = gsapTweenLite;
export declare type TweenMax = gsapTweenMax;
export declare let config: typeof globalThis.gsap.config;
export declare let core: typeof globalThis.gsap.core;
export declare let defaults: typeof globalThis.gsap.defaults;
export declare let delayedCall: typeof globalThis.gsap.delayedCall;
export declare let effects: gsap.EffectsMap;
export declare let exportRoot: typeof globalThis.gsap.exportRoot;
export declare let from: typeof globalThis.gsap.from;
export declare let fromTo: typeof globalThis.gsap.fromTo;
export declare let getById: typeof globalThis.gsap.getById;
export declare let getProperty: typeof globalThis.gsap.getProperty;
export declare let getTweensOf: typeof globalThis.gsap.getTweensOf;
export declare let globalTimeline: gsap.core.Timeline;
export declare let install: typeof globalThis.gsap.install;
export declare let isTweening: typeof globalThis.gsap.isTweening;
export declare let killTweensOf: typeof globalThis.gsap.killTweensOf;
export declare let parseEase: typeof globalThis.gsap.parseEase;
export declare let plugins: typeof globalThis.gsap.plugins;
export declare let quickSetter: typeof globalThis.gsap.quickSetter;
export declare let quickTo: typeof globalThis.gsap.quickTo;
export declare let registerEase: typeof globalThis.gsap.registerEase;
export declare let registerEffect: typeof globalThis.gsap.registerEffect;
export declare let registerPlugin: typeof globalThis.gsap.registerPlugin;
export declare let set: typeof globalThis.gsap.set;
export declare let ticker: gsap.Ticker;
export declare let timeline: typeof globalThis.gsap.timeline;
export declare let to: typeof globalThis.gsap.to;
export declare let updateRoot: typeof globalThis.gsap.updateRoot;
export declare let utils: typeof globalThis.gsap.utils;
export declare let version: string;
export declare let Animation: typeof globalThis.gsap.core.Animation;
export declare let Timeline: typeof globalThis.gsap.core.Timeline;
export declare let Tween: typeof globalThis.gsap.core.Tween;
export declare let attr: gsap.plugins.AttrPluginClass;
export declare let css: gsap.plugins.CSSPluginClass;
export declare let cssRule: gsap.plugins.CSSRulePluginClass;
export declare let drawSVG: gsap.plugins.DrawSVGPluginClass;
export declare let easel: gsap.plugins.EaselPluginClass;
export declare let inertia: gsap.plugins.InertiaPluginClass;
export declare let modifiers: gsap.plugins.ModifiersPluginClass;
export declare let morphSVG: gsap.plugins.MorphSVGPluginClass;
export declare let motionPath: gsap.plugins.MotionPathPluginClass;
export declare let physics2D: gsap.plugins.Physics2DPluginClass;
export declare let physicsProps: gsap.plugins.PhysicsPropsPluginClass;
export declare let pixi: gsap.plugins.PixiPluginClass;
export declare let scrambleText: gsap.plugins.ScrambleTextPluginClass;
export declare let scrollTo: gsap.plugins.ScrollToPluginClass;
export declare let snap: gsap.plugins.SnapPluginClass;
export declare let text: gsap.plugins.TextPluginClass;
export declare let checkPrefix: typeof globalThis.gsap.utils.checkPrefix;
export declare let clamp: typeof globalThis.gsap.utils.clamp;
export declare let distribute: typeof globalThis.gsap.utils.distribute;
export declare let getUnit: typeof globalThis.gsap.utils.getUnit;
export declare let interpolate: typeof globalThis.gsap.utils.interpolate;
export declare let mapRange: typeof globalThis.gsap.utils.mapRange;
export declare let normalize: typeof globalThis.gsap.utils.normalize;
export declare let pipe: typeof globalThis.gsap.utils.pipe;
export declare let random: typeof globalThis.gsap.utils.random;
export declare let selector: typeof globalThis.gsap.utils.selector;
export declare let shuffle: typeof globalThis.gsap.utils.shuffle;
export declare let splitColor: typeof globalThis.gsap.utils.splitColor;
export declare let toArray: typeof globalThis.gsap.utils.toArray;
export declare let unitize: typeof globalThis.gsap.utils.unitize;
export declare let wrap: typeof globalThis.gsap.utils.wrap;
export declare let wrapYoyo: typeof globalThis.gsap.utils.wrapYoyo;
export declare let utilSnap: typeof globalThis.gsap.utils.snap;