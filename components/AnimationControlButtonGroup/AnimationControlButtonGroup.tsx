import { Button } from "flowbite-react";
import { ButtonGroup } from "flowbite-react";
import { ArrowLeftIcon, ArrowRightIcon } from "flowbite-react";
export interface AnimationControlButtonGroupProps {
  onClickPrevious: () => void;
  onClickNext: () => void;
}

export function AnimationControlButtonGroup({
  onClickPrevious,
  onClickNext,
}: AnimationControlButtonGroupProps) {
  return (
    <ButtonGroup>
      <Button color="alternative" onClick={onClickPrevious}>
        <ArrowLeftIcon className="me-2 h-4 w-4" />
        이전
      </Button>
      <Button color="alternative">정지</Button>
      <Button color="alternative" onClick={onClickNext}>
        다음
        <ArrowRightIcon className="me-2 h-4 w-4" />
      </Button>
    </ButtonGroup>
  );
}
