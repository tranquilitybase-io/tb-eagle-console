/**
 * Single breadcrumb step.
 */
export interface BreadcrumbStep {
  name: string;
  link?: string;
  id?: string;
  urlSegment: string;
}
