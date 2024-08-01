import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles

const RichTextEditor = ({ setEditorContent, selectedContent }) => {
   // const [value, setValue] = useState('');
   

    const handleChange = (content, delta, source, editor) => {
        setEditorContent(content);
    };

  

    return (
        <div>
            <ReactQuill 
                value={selectedContent}
                onChange={handleChange}
                modules={RichTextEditor.modules}
                formats={RichTextEditor.formats}
            />
            {/* <div style={{ marginTop: '20px' }}>
                <h3>Content Preview:</h3>
                <div dangerouslySetInnerHTML={{ __html: selectedContent }}></div>
            </div> */}
        </div>
    );
};

// Modules object for setting up the Quill editor
RichTextEditor.modules = {
    toolbar: [
        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
        [{ 'script': 'sub'}, { 'script': 'super' }], // Subscript/Superscript
        [{size: []}],
       
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, 
         {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean']
    ],
    clipboard: {
        // Toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    }
};

/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
RichTextEditor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
];

export default RichTextEditor;
