import { EntityComponentBase, ComponentType } from "../entity";

export class GeometryComponent extends EntityComponentBase {
  private _geometry: THREE.BufferGeometry;

  public constructor(geometry: THREE.BufferGeometry) {
    super();
    this._geometry = geometry;
  }

  public type(): ComponentType {
    return ComponentType.Geometry;
  }
}