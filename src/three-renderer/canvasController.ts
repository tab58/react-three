import { EventController } from './events/eventController';
import { RenderService } from './rendering/controller';

export class CanvasController {
  public renderService: RenderService;
  public eventController: EventController;

  public constructor(canvas: HTMLCanvasElement) {
    this.eventController = new EventController(canvas);
    this.renderService = new RenderService(canvas);

    // this.renderService

    // set resize events
    this.eventController.$windowresize.subscribe(() => {
      this.renderService.setToWindowDimensions();
    });
  }
}