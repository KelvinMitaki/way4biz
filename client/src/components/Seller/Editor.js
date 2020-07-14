import React from "react";
import ReactQuil from "react-quill";
import "react-quill/dist/quill.snow.css";

import "./Editor.css";
import ReactQuill from "react-quill";

class Editor extends React.Component {
  render() {
    return (
      <div>
        <ReactQuill theme="minimal" />
      </div>
    );
  }
}

export default Editor;
