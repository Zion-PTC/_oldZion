declare namespace zionTypes {
    /**
     * Type presentato sul sito TSLang, serve per appiattire i
     * tipi contenuti in un array.
     */
    /**
     * Usage
     * ```
     * const arr2 = [{ a: 0 }, { b: true }, { c: { d: 0 } }]
     *
     * type InterOfArr = IntersctionOfObjectInArray<typeof arr2>
     * ```
     * expexcted output:
     * ```
     * type InterOfArr = {
     *     a?: number | undefined;
     *     b?: boolean | undefined;
     *     c?: {
     *         d: number;
     *     } | undefined;
     * }
     * ```
     */
}
