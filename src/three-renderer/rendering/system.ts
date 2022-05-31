import * as THREE from 'three';
import { ComponentType } from './component';
import { Entity } from './entity';

// The types (i.e. names) of systems that will be processed.
export enum SystemType {
  Render = 'sys-render3d'
}

// Abstraction for an ECS system.
export interface EntitySystem {
  componentTypes(): ComponentType[];
  type(): SystemType;
  run(entities: Entity[]): void;
}

/**
 * Base implementation for an ECS system.
 */
 export abstract class EntitySystemBase implements EntitySystem {
  abstract componentTypes(): ComponentType[];
  abstract type(): SystemType;
  abstract run(entities: Entity[]): void;
}
