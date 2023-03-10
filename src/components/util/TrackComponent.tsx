/**
 * @file TrackComponent.tsx
 * @description A component that renders a track.
 */

import React from "react";
import { Track } from "./Datatypes";

type TrackComponentProps = {
  track: Track;
  isSelected: boolean;
};

type TrackComponentState = {};

class TrackComponent extends React.Component<TrackComponentProps, TrackComponentState> {
  constructor(props: TrackComponentProps) {
    super(props);
    this.state = {};
  }

  componentDidMount(): void {
    // use track key to get track data
  }

  render() {
    console.log("TrackComponent render");

    let colour = this.props.track.Colour.toString().replace("0x", "#");
    console.log(colour);

    return (
      <div className="track-component">
        <div className="colour" style={{ backgroundColor: colour }}></div>
        <div className={this.props.isSelected ? "selected" : ""}>{this.props.track.Name}</div>
      </div>
    );
  }
}

export default TrackComponent;
