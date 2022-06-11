enum CourseEnums {
  it = "Information Technology",
  music = "music",
}
type CourseTypes = keyof typeof CourseEnums;

class Course {
  constructor(
    public type: CourseTypes = "it",
    public name: string = "",
    public sources: URL[] = []
  ) {}
}

let kubernetesStatefulSet = new Course();
let kubernetesVolumes = new Course();
let kubernetesAdministrator = new Course();
kubernetesAdministrator.sources.push(
  new URL("https://www.techworld-with-nana.com/kubernetes-administrator-cka")
);
let gitlabCICD = new Course();
gitlabCICD.sources.push(
  new URL(
    "https://www.techworld-with-nana.com/gitlab-cicd-course?utm_source=youtube&utm_medium=gitlab-in-1-hour&utm_campaign=gitlab-full-course"
  )
);
