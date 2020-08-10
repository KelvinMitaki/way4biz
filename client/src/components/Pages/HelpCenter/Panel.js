import React from "react";
import ReactDom from "react-dom";
import "./Panel.css";

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    };
  }

  componentDidMount() {
    window.setTimeout(() => {
      const element = ReactDom.findDOMNode(this);
      const height = element.querySelector(".my-panel-inner").scrollHeight;
      this.setState({
        height,
      });
    }, 333);
  }
  render() {
    const { label, content, activeTab, index, activateTab } = this.props;
    const { height } = this.state;
    const isActive = activeTab === index;
    const innerStyle = {
      height: `${isActive ? height : 0}px`,
    };
    return (
      <div className="my-panel" role="tabpanel" aria-expanded={isActive}>
        <button className="my-panel-label" role="tab" onClick={activateTab}>
          {label}
        </button>
        <div
          className="my-panel-inner"
          style={innerStyle}
          aria-hidden={!isActive}
        >
          <p className="my-panel-content">{content}</p>
        </div>
      </div>
    );
  }
}

export default Panel;
