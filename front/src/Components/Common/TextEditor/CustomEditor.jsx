import React, { useState, useEffect, useRef } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import TextAlign from '@tiptap/extension-text-align'; // Adjust import based on your library
import StarterKit from '@tiptap/starter-kit'; // Adjust import based on your library
//import MenuBar from './MenuBar'; // Adjust import based on your file structure

const extensions = [
  TextAlign.configure({
    types: ["heading", "paragraph"],
    alignments: ["left", "center", "right", "justify"],
  }),
  StarterKit.configure({}),
];

const CustomEditor = ({ setEditorContent, selectedContent }) => {
  const editor = useEditor({
    extensions: extensions,
    content: selectedContent,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setEditorContent(html);
    }
  });

  useEffect(() => {
    if (editor && selectedContent) {
      editor.commands.setContent(selectedContent);
    }
    console.log("customeditp", selectedContent);
  }, [selectedContent, editor]);

  return (
    <div>
      {console.log("ujjval", selectedContent)}
      {console.log("ujjval contentData", selectedContent)}

      <EditorContent  slotBefore={<MenuBar />} editor={editor} />
    </div>
  );
};



const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <>
      <div className="flex items-center justify-between px-3 py-2 border focus:border-blue-500 focus:ring-blue-500 bg-gray-50">
        <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse ">
          <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleBold().run()}
              disabled={!editor.can().chain().focus().toggleBold().run()}
              className={clsx(
                "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100",
                editor.isActive("bold") ? "is-active text-gray-900" : ""
              )}
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 5h4.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0-7H6m2 7h6.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0 0H6"
                />
              </svg>
              <span className="sr-only">Format code</span>
            </button>

            <button
              type="button"
              onClick={() => editor.chain().focus().toggleItalic().run()}
              disabled={!editor.can().chain().focus().toggleItalic().run()}
              className={clsx(
                "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100",
                editor.isActive("italic") ? "is-active text-gray-900" : ""
              )}
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m8.874 19 6.143-14M6 19h6.33m-.66-14H18"
                />
              </svg>
              <span className="sr-only">Format code</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4">
            <button
              type="button"
              onClick={() =>
                editor.chain().focus().setTextAlign("justify").run()
              }
              className={clsx(
                "p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100",
                editor.isActive("justify") ? "is-active text-gray-900" : ""
              )}
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 10H3M21 18H3M21 6H3M21 14H3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="sr-only">Format code</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomEditor;
