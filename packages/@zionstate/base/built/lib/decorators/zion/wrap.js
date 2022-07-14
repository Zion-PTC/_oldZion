const _originalMixin = Symbol("_originalMixin");
export const wrap = (mixin, wrapper) => {
    Object.setPrototypeOf(wrapper, mixin);
    if (!mixin[_originalMixin]) {
        mixin[_originalMixin] = mixin;
    }
    return wrapper;
};
