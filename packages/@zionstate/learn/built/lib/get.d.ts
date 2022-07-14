declare enum getContentEnums {
    tutorials = "tutorials",
    sorgenti = "sorgenti",
    designPatterns = "design-patterns",
    blogPosts = "blog-posts",
    esercizi = "esercizi",
    packages = "packages"
}
declare type getContentTypes = keyof typeof getContentEnums;
export declare function getContent(type: getContentTypes): string[];
export {};
