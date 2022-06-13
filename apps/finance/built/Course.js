"use strict";
var CourseEnums;
(function (CourseEnums) {
    CourseEnums["it"] = "Information Technology";
    CourseEnums["music"] = "music";
})(CourseEnums || (CourseEnums = {}));
class Course {
    type;
    name;
    sources;
    constructor(type = "it", name = "", sources = []) {
        this.type = type;
        this.name = name;
        this.sources = sources;
    }
}
let kubernetesStatefulSet = new Course();
let kubernetesVolumes = new Course();
let kubernetesAdministrator = new Course();
kubernetesAdministrator.sources.push(new URL("https://www.techworld-with-nana.com/kubernetes-administrator-cka"));
let gitlabCICD = new Course();
gitlabCICD.sources.push(new URL("https://www.techworld-with-nana.com/gitlab-cicd-course?utm_source=youtube&utm_medium=gitlab-in-1-hour&utm_campaign=gitlab-full-course"));
