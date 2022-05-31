import { Entity } from './entity';
import { EntitySystem, SystemType } from './system';

/**
 * A container for entities and systems.
 */
 export class EntityWorld {
  private _entities: { [key: string /* SystemType */]: Entity[] }
  private _systems: EntitySystem[];

  public constructor(systems: EntitySystem[]) {
    this._systems = systems.slice().sort((a, b) => a.priority() - b.priority());
    this._entities = {
      [SystemType.Render]: []
    };
  }

  public addEntity(...entities: Entity[]) {
    for (const entity of entities) {
      // check on other entities
      for (const system of this._systems) {
        const systemComponentTypes = system.componentTypes();
        const hasAllTypes = systemComponentTypes.reduce((acc, type) => {
          return acc && entity.hasComponent(type)
        }, true);

        if (hasAllTypes) {
          const systemType = system.type();
          const entityList = this._entities[systemType] || [];
          entityList.push(entity);
          this._entities[systemType] = entityList;
        }
      }
    }
  }

  public runSystems(): void {
    for (const system of this._systems) {
      const systemType = system.type();
      const entities = this._entities[systemType];
      system.run(entities);
    }
  }
}