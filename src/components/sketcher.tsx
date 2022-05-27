import React, { Component } from 'react';

interface SketcherProps {
  onCanvasMount: (canvas: HTMLCanvasElement) => void;
}

export class SketcherCanvas extends Component<SketcherProps> {
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
      <canvas id="sketcher" ref={this.canvasRef} />
    );
  }
}