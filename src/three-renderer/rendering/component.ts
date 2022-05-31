// The types of components that entities recognize.
export enum ComponentType {
  Geometry = 'comp-geometry',
  Material = 'comp-material',
  Mesh = 'comp-mesh'
}

// Abstraction for a ECS component.
export interface EntityComponent {
  type(): ComponentType;
}

// Base implementation for an ECS component.
export abstract class EntityComponentBase implements EntityComponent {
  abstract type(): ComponentType;
}