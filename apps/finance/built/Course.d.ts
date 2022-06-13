declare enum CourseEnums {
    it = "Information Technology",
    music = "music"
}
declare type CourseTypes = keyof typeof CourseEnums;
declare class Course {
    type: CourseTypes;
    name: string;
    sources: URL[];
    constructor(type?: CourseTypes, name?: string, sources?: URL[]);
}
declare let kubernetesStatefulSet: Course;
declare let kubernetesVolumes: Course;
declare let kubernetesAdministrator: Course;
declare let gitlabCICD: Course;
