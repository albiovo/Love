import { AnatomyLevel, ProjectCard, Route } from '../types';

export const routes: Route[] = [
  'Elevated Value Perception',
  'Engaging Interaction & Functions',
  'Empowered Performance & Sustainability',
];

export const anatomyLevels: AnatomyLevel[] = ['Benefits', 'Features', 'Attributes', 'Components'];

export const functionalAreas = [
  'Frame protection',
  'Lens protection',
  'Opening / closing system',
  'Aesthetic layer',
  'Portability',
];

export const archetypes = [
  'Hard shell case',
  'Soft pouch',
  'Folding case',
  'Semi-rigid case',
  'Clamshell case',
  'Sliding case',
  'Magnetic closure case',
  'Hybrid textile/plastic case',
];

export const materials = [
  'Metal',
  'Injected plastic',
  'Recycled plastic',
  'EVA',
  'Felt',
  'Leather / PU',
  'Microfiber',
  'Fabric',
  'Bio-based material',
  'Composite material',
];

export const processes = [
  'Injection molding',
  'Thermoforming',
  'HF welding',
  'Ultrasonic welding',
  'Sewing',
  'Laser cutting',
  'Die cutting',
  'Metal stamping',
  'Metal spinning',
  'Overmolding',
  'Assembly',
];

export const hardwareOptions = [
  'Hinges',
  'Magnets',
  'Springs',
  'Snaps',
  'Zippers',
  'Elastic bands',
  'Pullers',
  'Labels',
  'Inserts',
];

export const initialProjects: ProjectCard[] = [
  {
    id: 'sample-1',
    title: 'Premium recyclable clamshell',
    route: 'Elevated Value Perception',
    functionalArea: 'Aesthetic layer',
    archetype: 'Clamshell case',
    material: 'Recycled plastic',
    process: 'Injection molding',
    hardware: 'Magnets',
    expectedBenefit: 'Premium look with visible sustainability story.',
    designConstraints: 'Keep wall thickness under 2.2 mm and avoid sink marks.',
    costVolumeAssumptions: 'Target < $2.60 at 100k units/year.',
  },
  {
    id: 'sample-2',
    title: 'Lightweight travel fold case',
    route: 'Engaging Interaction & Functions',
    functionalArea: 'Portability',
    archetype: 'Folding case',
    material: 'EVA',
    process: 'Thermoforming',
    hardware: 'Elastic bands',
    expectedBenefit: 'Compact folding motion enables easier travel carry.',
    designConstraints: 'Must survive 5k fold cycles.',
    costVolumeAssumptions: 'Target < $1.90 at 250k units/year.',
  },
];
