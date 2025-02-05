"use client";
import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "Start typing...",
  });

  // Cleanup the editor instance when unmounting
  useEffect(() => {
    return () => editor?.destroy();
  }, [editor]);

  return <EditorContent editor={editor} className="p-4" />;
}
