"use client";

import { EditorPreviewUnit } from "../EditorPreviewUnit/EditorPreviewUnit";
import mockData from "../../mock/mockingData";
import { AnimationControlButtonGroup } from "../AnimationControlButtonGroup";
import { useState } from "react";

export function EditorPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mockData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + mockData.length) % mockData.length);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <EditorPreviewUnit
        key={mockData[currentIndex].photoUrl}
        imageUrl={mockData[currentIndex].photoUrl}
        description={mockData[currentIndex].description}
      />
      <AnimationControlButtonGroup
        onClickPrevious={handlePrevious}
        onClickNext={handleNext}
      />
    </div>
  );
}
