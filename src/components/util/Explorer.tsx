/**
 * @file Explorer.tsx
 * @description Explorer component for the Tauri app. Displays the track library.
 * @author
 * @version 0.0.1
 * @date 2021-06-01
 *
 */

import React from "react";

import "../../styles/Explorer.scss";
import NodeComponent, { Node } from "./NodeComponent";

// create a new explorer component

type ExplorerProps = {
  onChoose: (node: Node) => void;
  onToggle: (node: Node) => void;
  opened_nodes: Node[];
  nodes: Node[];
};

type ExplorerState = {};

class Explorer extends React.Component<ExplorerProps, ExplorerState> {
  constructor(props: ExplorerProps) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(): void {}

  render() {
    let nodes = this.props.nodes;

    if (nodes.length == 0) {
      return (
        <div className="explorer">
          <div className="explorer-wrapper">
            <h2>Explorer</h2>
            <p>No tracks found</p>
          </div>
        </div>
      );
    }

    return (
      <div className="explorer">
        <div className="explorer-wrapper">
          <h2>Explorer</h2>
          {
            // map the nodes to node components
            nodes.map((node) => {
              return <NodeComponent node={node} key={node.PATH} onChoose={this.props.onChoose} onToggle={this.props.onToggle} open={this.props.opened_nodes} />;
            })
          }
        </div>
      </div>
    );
  }
}

export default Explorer;
