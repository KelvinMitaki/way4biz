import React, { Component } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import ".../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToMarkdown from "draftjs-to-markdown";
import "./Editor.css";
import { storeDescription } from "../../redux/actions";
import { connect } from "react-redux";

class ControlledEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });

    this.props.storeDescription(
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  };

  render() {
    const { editorState } = this.state;

    return (
      <div className="editor">
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    );
  }
}
<<<<<<< HEAD

export default MyEditor;
// class Editor extends React.Component {
//   state = {
//     value: "",
//   };

//   handleChange = (value) => {
//     // this.setState({//     //   value: e.target.value,
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
=======
export default connect(null, { storeDescription })(ControlledEditor);
>>>>>>> 1a5a609a10fc3fed4fe53835a271239d5e1206e3
