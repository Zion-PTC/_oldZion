import * as webVitals from 'web-vitals';
import {
  FirstInputPolyfillCallback as wv_FirstInputPolyfillCallback,
  FirstInputPolyfillEntry as wv_FirstInputPolyfillEntry,
  Metric as wv_Metric,
  NavigationTimingPolyfillEntry as wv_NavigationTimingPolyfillEntry,
  PerformanceEventTiming as wv_PerformanceEventTiming,
  ReportHandler as wv_ReportHandler,
  WebVitalsGlobal as wv_WebVitalsGlobal,
} from 'web-vitals';

export type FirstInputPolyfillCallback = wv_FirstInputPolyfillCallback;
export type FirstInputPolyfillEntry = wv_FirstInputPolyfillEntry;
export type Metric = wv_Metric;
export type NavigationTimingPolyfillEntry = wv_NavigationTimingPolyfillEntry;
export type PerformanceEventTiming = wv_PerformanceEventTiming;
export type ReportHandler = wv_ReportHandler;
export type WebVitalsGlobal = wv_WebVitalsGlobal;

export let getCLS = webVitals.getCLS;
export let getFCP = webVitals.getFCP;
export let getFID = webVitals.getFID;
export let getLCP = webVitals.getLCP;
export let getTTFB = webVitals.getTTFB;
