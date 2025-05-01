import { EditorPreview } from "@/components/EditorPreview";

const Editor = () => {
  return (
    <div className="flex h-full w-full flex-row bg-red-500">
      <span className="flex h-full w-1/2">
        <EditorPreview />
      </span>
      <span className="flex h-full w-1/2">
        <EditorPreview />
      </span>
    </div>
  );
};

export { Editor };
