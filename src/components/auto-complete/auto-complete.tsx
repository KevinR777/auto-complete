import { FC, memo, useState } from "react";
import "./auto-complete.css";
import {
  AutoCompleteProps,
  Options,
} from "../../interfaces/auto-complete/auto-complete.interface";
import { useToggle } from "../../hooks/use-toggle";

const AutoComplete: FC<AutoCompleteProps> = ({ options }) => {
  //Boolean to show or hide options
  //Initial State of false from custom hook
  const { toggle, setCustomToggle, switchToggle } = useToggle();
  //State to show the current filtered options
  //Initial state of empty array of type Options
  const [filteredOptions, setFilteredOptions] = useState<Options[]>([]);
  //State to set the search value
  //Initial state of empty string
  const [searchValue, setSearchValue] = useState<string>("");

  //On change function that gets value from event
  //Sets the search value received, sets the display options if string is not empty and finally filters the options
  const onChangeAction = (event: React.ChangeEvent<HTMLInputElement>) => {
    //Get value from event
    const value = event.target.value;
    //Set the value
    setSearchValue(value);
    //Set the boolean to display the options
    setCustomToggle(value !== "");
    //Iterate through each option and filter by indexOf the value from the event. If -1 it means the name doesnt contain the value being searched

    const newFilteredOptions = options.filter(
      ({ name }) => name.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
    //Set the new filtered options
    setFilteredOptions(newFilteredOptions);
  };

  //Function when options is clicked to set the search value based on the option clicked
  const onClickOptionAction = (name: string) => {
    setSearchValue(name);
    switchToggle();
  };

  return (
    <div id="auto-complete">
      {
        //Input element
      }
      <input
        type="search"
        id="auto-complete-input"
        placeholder="Type to begin searching"
        onChange={onChangeAction}
        value={searchValue}
      />
      {
        //Only show options based on boolean
      }
      {toggle && (
        <div id="options">
          {
            //Iterate through the filtered options
          }
          {filteredOptions.map((option: Options) => {
            //Split current text into the highlight part and rest of text
            //Flags to ignore case and seach in all occurrences
            const textParts = option.name.split(
              new RegExp(`(${searchValue})`, "gi")
            );
            return (
              <div
                id={option.id}
                key={option.id}
                onClick={() => onClickOptionAction(option.name)}
                className="options-dropdown"
              >
                {
                  //Iterate through all the parts and display bold the searched text
                }
                {textParts.map((textPart, i) => (
                  <span
                    key={i}
                    className={
                      textPart.toLowerCase() === searchValue.toLowerCase()
                        ? "highlight"
                        : ""
                    }
                  >
                    {textPart}
                  </span>
                ))}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

//Export auto complete component with memo hoc to only rerender if props has changed
export default memo(AutoComplete);
