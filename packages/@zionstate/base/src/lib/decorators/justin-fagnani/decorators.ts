// Functions inspired by
// https://github.com/justinfagnani/mixwith.js/blob/d34fe88ef3bb69d7e1751ad139208b656bf88a38/src/mixwith.js#L140
import * as MixinDecorators from "../../types/Mixin/MixinDecorators.js";

const _appliedMixin = "__mixwith_appliedMixin";
export const isApplicationOf: (proto: any, mixin: any) => any = (
  proto: any,
  mixin: any
) =>
  proto.hasOwnProperty(_appliedMixin) && proto[_appliedMixin] === unwrap(mixin);

export const hasMixin = (o: any, mixin: any) => {
  while (o != null) {
    if (isApplicationOf(o, mixin)) return true;
    o = Object.getPrototypeOf(o);
  }
  return false;
};

const _originalMixin = Symbol("_originalMixin");
type wrapType = (mixin: any, wrapper: any) => any;
export const wrap: wrapType = (mixin, wrapper) => {
  Object.setPrototypeOf(wrapper, mixin);
  if (!mixin[_originalMixin]) {
    mixin[_originalMixin] = mixin;
  }
  return wrapper;
};

const _wrappedMixin = "__mixwith_wrappedMixin";
type unwraptype = (wrapper: any) => any;
export const unwrap: unwraptype = (wrapper: any) =>
  wrapper[_wrappedMixin] || wrapper;

const _mixinRef = Symbol("_mixinRef");
export const BaseMixin: MixinDecorators.MixinDecorator = (mixin: any) =>
  wrap(mixin, (superclass: any) => {
    let application = mixin(superclass);
    application.prototype[_mixinRef] = mixin[_originalMixin];
    return application;
  });

const _cachedApplicationRef = Symbol("_cachedApplicationRef");
export const Cached: MixinDecorators.MixinDecoratoBroad = (mixin) =>
  wrap(mixin, (superclass: any) => {
    let applicationRef = mixin[_cachedApplicationRef];
    if (!applicationRef) {
      applicationRef = mixin[_cachedApplicationRef] = Symbol(mixin.name);
    }
    if (superclass.hasOwnProperty(applicationRef)) {
      return superclass[applicationRef];
    }
    let application = mixin(superclass);
    superclass[applicationRef] = application;
    return application;
  });

export const DeDupe: MixinDecorators.MixinDecoratoBroad = (mixin) =>
  wrap(mixin, (superclass: any) =>
    hasMixin(superclass.prototype, mixin) ? superclass : mixin(superclass)
  );
