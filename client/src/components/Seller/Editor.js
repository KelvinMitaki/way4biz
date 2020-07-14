import React from "react";
import ReactQuil from "react-quill";
import "react-quill/dist/quill.snow.css";

import "./Editor.css";
import ReactQuill from "react-quill";

class Editor extends React.Component {
  state = {
    value: "",
  };

  handleChange = (value) => {
    // this.setState({
    //   value: e.target.value,
    // });
    console.log(value);
  };

  modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  render() {
    return (
      <div>
        <ReactQuill
          className="editor"
          value={this.state.value}
          onChange={this.handleChange}
          theme="snow"
          modules={this.modules}
          formats={this.formats}
        />
      </div>
    );
  }
}

export default Editor;
