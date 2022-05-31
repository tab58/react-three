import { fromEvent, Observable } from 'rxjs';

export class EventController {
  public $click: Observable<Event>;
  public $dblclick: Observable<Event>;
  public $mousedown: Observable<Event>;
  public $mouseup: Observable<Event>;
  public $mousemove: Observable<Event>;
  public $mouseover: Observable<Event>;
  public $mouseout: Observable<Event>;
  public $contextmenu: Observable<Event>;

  public $windowresize: Observable<Event>;

  public constructor(canvas: HTMLCanvasElement) {
    this.$click = fromEvent(canvas, 'click');
    this.$dblclick = fromEvent(canvas, 'dblclick');
    this.$mousedown = fromEvent(canvas, 'mousedown');
    this.$mouseup = fromEvent(canvas, 'mouseup');
    this.$mousemove = fromEvent(canvas, 'mousemove');
    this.$mouseover = fromEvent(canvas, 'mouseover');
    this.$mouseout = fromEvent(canvas, 'mouseout');
    this.$contextmenu = fromEvent(canvas, 'contextmenu');
    this.$windowresize = fromEvent(window, 'resize');
  }
}