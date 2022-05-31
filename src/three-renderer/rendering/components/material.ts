import { EntityComponentBase, ComponentType } from "../entity";

export class MaterialComponent extends EntityComponentBase {
  private _material: THREE.Material;

  public constructor(material: THREE.Material) {
    super();
    this._material = material;
  }

  public type(): ComponentType {
    return ComponentType.Material;
  }
}