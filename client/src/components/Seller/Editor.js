import React from "react";
import ReactQuil from "react-quill";
import "react-quill/dist/quill.snow.css";

import "./Editor.css";
import ReactQuill from "react-quill";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Image from "@editorjs/image";
import List from "@editorjs/list";

class MyEditor extends React.Component {
  render() {
    const editor = new EditorJS({
      holder: "editorjs",
      tools: {
        header: Header,
        image: Image,
        list: List,
      },
    });

    editor.isReady
      .then(() => console.log("Editor.js is ready to work!"))
      .catch((reason) =>
        console.log(`Editor.js initialization failed because of ${reason}`)
      );
    return (
      <React.Fragment>
        <div id="editorjs"></div>;
        <button
          onClick={() =>
            editor
              .save()
              .then((res) => console.log(res))
              .catch((err) => console.log(err))
          }
        >
          submit
        </button>
      </React.Fragment>
    );
  }
}

export default MyEditor;
// class Editor extends React.Component {
//   state = {
//     value: "",
//   };

//   handleChange = (value) => {
//     // this.setState({
//     //   value: e.target.value,
//     // });
//     console.log(value);
//   };

//   modules = {
//     toolbar: [
//       [{ header: [1, 2, false] }],
//       ["bold", "italic", "underline", "strike", "blockquote"],
//       [
//         { list: "ordered" },
//         { list: "bullet" },
//         { indent: "-1" },
//         { indent: "+1" },
//       ],
//       ["link", "image"],
//     ],
//   };

//   formats = [
//     "header",
//     "bold",
//     "italic",
//     "underline",
//     "strike",
//     "blockquote",
//     "list",
//     "bullet",
//     "indent",
//     "link",
//     "image",
//   ];
//   render() {
//     return (
//       <div>
//         <ReactQuill
//           className="editor"
//           value={this.state.value}
//           onChange={this.handleChange}
//           theme="snow"
//           modules={this.modules}
//           formats={this.formats}
//         />
//       </div>
//     );
//   }
// }

// export default Editor;
