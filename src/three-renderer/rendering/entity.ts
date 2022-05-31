import { ComponentType, EntityComponent } from './component';

interface ComponentSelector {
  getComponentByType(type: ComponentType): EntityComponent | undefined;
}

/// An entity that can have multiple components on it.
export class Entity {
  private static _nextId: number = 0;

  private _components: { [key: string]: EntityComponent };
  private _id: number;

  public constructor() {
    this._components = {};
    this._id = Entity._nextId++;
  }

  /**
   * Adds the component if there isn't one there already.
   * @param component The component to add.
   * @returns True if the component was added, false if not.
   */
  public addComponent(component: EntityComponent): boolean {
    const type = component.type();
    const existingComponent = this.getComponent(type);
    if (existingComponent !== undefined) {
      return false;
    }

    // TODO: do a clone maybe for a clear separation?
    this._components[type] = component;
    return true;
  }

  /**
   * Places the component on the entity. If it exists, it updates the reference.
   * @param component The component to update.
   */
  public attachComponent(component: EntityComponent): void {
    const type = component.type();
    this._components[type] = component;
  }

  /**
   * Gets the attached component with the given type.
   * @param type The type of the component.
   * @returns The component with the given type. Undefined if one doesn't exist.
   */
  public getComponent(type: ComponentType): EntityComponent | undefined {
    return this._components[type];
  }

  /**
   * Checks if the entity has a specific component attached.
   * @param type The component type.
   * @returns True if the entity has the component type, false if not.
   */
  public hasComponent(type: ComponentType): boolean {
    return (this._components[type] !== undefined);
  }
}
