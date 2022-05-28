import React, { Component } from 'react';

interface SketcherProps {
  onCanvasMount: (canvas: HTMLCanvasElement) => void;
}

export class DrawingCanvas extends Component<SketcherProps> {
  public canvasRef: React.RefObject<HTMLCanvasElement>;
  public onCanvasMount: (canvas: HTMLCanvasElement) => void;

  public constructor(props: SketcherProps) {
    super(props);
    this.canvasRef = React.createRef();
    this.onCanvasMount = props.onCanvasMount;
  }

  public componentDidMount() {
    if (this.canvasRef.current !== null) {
      this.onCanvasMount(this.canvasRef.current);
    }
  }

  public render() {
    return (
      <div className='relative top-0 left-0'>
        <canvas id="sketcher" ref={this.canvasRef} />
      </div>
    );
  }
}