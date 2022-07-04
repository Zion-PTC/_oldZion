import { getContent } from "./get.js";
export function getBlogPosts() {
    return getContent("blogPosts");
}
