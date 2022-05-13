import * as tlUserEvent from '@testing-library/user-event';
import tlUserEventDef from '@testing-library/user-event';

export type PointerEventsCheckLevel = tlUserEvent.PointerEventsCheckLevel;
export let EachApiCall = tlUserEvent.PointerEventsCheckLevel.EachApiCall;
export let EachTarget = tlUserEvent.PointerEventsCheckLevel.EachTarget;
export let EachTrigger = tlUserEvent.PointerEventsCheckLevel.EachTrigger;
export let Never = tlUserEvent.PointerEventsCheckLevel.Never;

export let clear = tlUserEventDef.clear;
export let click = tlUserEventDef.click;
export let copy = tlUserEventDef.copy;
export let cut = tlUserEventDef.cut;
export let dblClick = tlUserEventDef.dblClick;
export let deselectOptions = tlUserEventDef.deselectOptions;
export let hover = tlUserEventDef.hover;
export let keyboard = tlUserEventDef.keyboard;
export let paste = tlUserEventDef.paste;
export let pointer = tlUserEventDef.pointer;
export let selectOptions = tlUserEventDef.selectOptions;
export let setup = tlUserEventDef.setup;
export let tab = tlUserEventDef.tab;
export let tripleClick = tlUserEventDef.tripleClick;
export let type = tlUserEventDef.type;
export let unhover = tlUserEventDef.unhover;
export let upload = tlUserEventDef.upload;
