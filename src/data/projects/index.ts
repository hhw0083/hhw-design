import type { Project } from "../types";
import { domeProject } from "./dome";
import { esgProject } from "./esg";
import { inaProject } from "./ina";
import { juleProject } from "./jule";
import { meowDayProject } from "./meow-day";
import { otherProjects } from "./other";
import { rmicProject } from "./rmic";
import { tcbProject } from "./tcb";
import { tianLiangProject } from "./tian-liang";

export { projectImageAssets } from "./assets";
export { domeProject } from "./dome";
export { esgProject } from "./esg";
export { inaProject } from "./ina";
export { juleProject } from "./jule";
export { meowDayProject } from "./meow-day";
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
  inaProject,
  domeProject,
  meowDayProject,
  ...otherProjects,
];

export const visibleProjects = projects.filter((project) => !project.isHidden);
