import type { ProjectRecord } from "./types";

/**
 * Only records with publicationApproved may be shown as completed
 * Power In Service projects. Keep this empty until owner-approved
 * photographs and copy are supplied.
 */
export const projects: ProjectRecord[] = [];

export const projectRecordTemplate: ProjectRecord = {
  id: "example-unpublished",
  title: "Example project title",
  serviceCategory: "commercial-cleaning",
  propertyType: "Office",
  serviceArea: "Central Florida",
  challenge: "What the property needed before work began.",
  workCompleted: "Services performed, described in general terms.",
  result: "What changed for the property.",
  beforeImageIds: [],
  afterImageIds: [],
  publicationApproved: false,
  clientNameApproved: false,
};

export function publishedProjects(): ProjectRecord[] {
  return projects.filter((project) => project.publicationApproved);
}
