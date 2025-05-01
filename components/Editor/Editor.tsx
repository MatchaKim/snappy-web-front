import { EditorPreview } from "@/components/EditorPreview";
import { AnimationControlButtonGroup } from "../AnimationControlButtonGroup";

const Editor = () => {
  return (
    <div className="space-between flex h-full w-full flex-col items-center">
      <span className="flex h-full w-full items-center justify-center">
        <EditorPreview />
      </span>
    </div>
  );
};

export { Editor };
