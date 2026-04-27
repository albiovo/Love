export type Route =
  | 'Elevated Value Perception'
  | 'Engaging Interaction & Functions'
  | 'Empowered Performance & Sustainability';

export type AnatomyLevel = 'Benefits' | 'Features' | 'Attributes' | 'Components';

export interface ProjectCard {
  id: string;
  title: string;
  route: Route;
  functionalArea: string;
  archetype: string;
  material: string;
  process: string;
  hardware: string;
  expectedBenefit: string;
  designConstraints: string;
  costVolumeAssumptions: string;
}

export interface FilterState {
  archetype: string;
  material: string;
  process: string;
  hardware: string;
  functionalArea: string;
}
