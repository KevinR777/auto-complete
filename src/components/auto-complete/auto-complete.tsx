import { FC, memo, useState } from "react";
import "./auto-complete.css";
import {
  AutoCompleteProps,
  Options,
} from "../../interfaces/auto-complete/auto-complete.interface";

const AutoComplete: FC<AutoCompleteProps> = ({ options }) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [filteredOptions, setFilteredOptions] = useState<Options[]>(options);
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div id="auto-complete">
      <input
        type="search"
        id="auto-complete-input"
        placeholder="Type to begin searching"
      />
    </div>
  );
};

export default memo(AutoComplete);
