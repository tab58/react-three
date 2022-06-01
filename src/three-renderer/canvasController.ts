import { EventController } from './events/eventController';
import { RenderController } from './rendering/controller';

export class CanvasController {
  public renderService: RenderController;
  public eventController: EventController;

  public constructor(canvas: HTMLCanvasElement) {
    this.eventController = new EventController(canvas);
    this.renderService = new RenderController(canvas);

    // this.renderService

    // set resize events
    this.eventController.$windowresize.subscribe(() => {
      this.renderService.setToWindowDimensions();
    });
  }
}