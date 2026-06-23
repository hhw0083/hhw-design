import type { Project } from "../types";
import { esgProject } from "./esg";
import { juleProject } from "./jule";
import { otherProjects } from "./other";
import { rmicProject } from "./rmic";
import { tcbProject } from "./tcb";
import { tianLiangProject } from "./tian-liang";

export { projectImageAssets } from "./assets";
export { esgProject } from "./esg";
export { juleProject } from "./jule";
export { otherProjects } from "./other";
export { rmicProject } from "./rmic";
export { tcbProject } from "./tcb";
export { tianLiangProject } from "./tian-liang";

export const projects: Project[] = [
  esgProject,
  tcbProject,
  rmicProject,
  tianLiangProject,
  juleProject,
  ...otherProjects,
];

export const visibleProjects = projects.filter((project) => !project.isHidden);
