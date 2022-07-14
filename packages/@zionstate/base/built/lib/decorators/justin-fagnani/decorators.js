const _appliedMixin = "__mixwith_appliedMixin";
export const isApplicationOf = (proto, mixin) => proto.hasOwnProperty(_appliedMixin) && proto[_appliedMixin] === unwrap(mixin);
export const hasMixin = (o, mixin) => {
    while (o != null) {
        if (isApplicationOf(o, mixin))
            return true;
        o = Object.getPrototypeOf(o);
    }
    return false;
};
const _originalMixin = Symbol("_originalMixin");
export const wrap = (mixin, wrapper) => {
    Object.setPrototypeOf(wrapper, mixin);
    if (!mixin[_originalMixin]) {
        mixin[_originalMixin] = mixin;
    }
    return wrapper;
};
const _wrappedMixin = "__mixwith_wrappedMixin";
export const unwrap = (wrapper) => wrapper[_wrappedMixin] || wrapper;
const _mixinRef = Symbol("_mixinRef");
export const BaseMixin = (mixin) => wrap(mixin, (superclass) => {
    let application = mixin(superclass);
    application.prototype[_mixinRef] = mixin[_originalMixin];
    return application;
});
const _cachedApplicationRef = Symbol("_cachedApplicationRef");
export const Cached = (mixin) => wrap(mixin, (superclass) => {
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
export const DeDupe = (mixin) => wrap(mixin, (superclass) => hasMixin(superclass.prototype, mixin) ? superclass : mixin(superclass));
