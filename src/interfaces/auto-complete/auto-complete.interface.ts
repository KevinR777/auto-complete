//Interface for autom complete component props
export interface AutoCompleteProps {
  options: Options[];
}

//Options type
export type Options = {
  id: string;
  name: string;
};
