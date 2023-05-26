import { FC } from "react";

interface AutoCompleteProps {
  options: Options[];
}

type Options = {
  id: string;
  name: string;
};

const AutoComplete: FC<AutoCompleteProps> = ({ options }) => {
  return <div id="auto-complete">Auto Complete</div>;
};

export default AutoComplete;
