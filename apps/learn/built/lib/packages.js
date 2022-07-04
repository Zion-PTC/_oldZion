import { getContent } from "./get.js";
export function getPackages() {
    return getContent("packages");
}
