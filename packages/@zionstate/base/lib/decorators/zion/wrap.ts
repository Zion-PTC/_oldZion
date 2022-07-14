const _originalMixin = Symbol("_originalMixin");
type wrapType = (mixin: any, wrapper: any) => any;
export const wrap: wrapType = (mixin, wrapper) => {
  Object.setPrototypeOf(wrapper, mixin);
  if (!mixin[_originalMixin]) {
    mixin[_originalMixin] = mixin;
  }
  return wrapper;
};
