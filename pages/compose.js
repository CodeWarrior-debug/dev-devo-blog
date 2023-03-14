import React, {useState} from "react";
import ReactQuill from "react-quill";
// import { useQuill } from "react-quilljs";
import EditorToolbar, { modules, formats } from "../components/EditorToolbar";
import "react-quill/dist/quill.snow.css";

export const Compose = () => {
  const [state, setState] = useState({ value: null });
//   const { quill, quillRef } = useQuill();
//   const [value,setValue]=useState();

const [showText, setShowText] = useState('');

const showUpdatedText = () =>{
    setShowText(state.value)
}

  const handleChange = value => {
    setState({ value });
  };

//   React.useEffect(() => {
//     if (quill) {
//       quill.on('text-change', () => {
//         console.log(quillRef.current.firstChild.innerHTML);
        
//       });
//     }
//   }, [quill]);


  return (
    <div className="text-editor" >
        
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={state.value}
        onChange={handleChange}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
        // ref={quillRef}
      />
    {/* < div ref={quillRef}/> */}
    
    <button onClick={showUpdatedText}>Show HTML Text</button>
    <div>{showText}</div>
    </div>



  );
};


export default Compose;