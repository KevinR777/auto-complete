import { FC, useEffect, useState } from "react";
import "./landing-page.styles.css";
import AutoComplete from "../../components/auto-complete/auto-complete";
import { Options } from "../../interfaces/auto-complete/auto-complete.interface";
import {
  Products,
  ProductsApiResponse,
} from "../../interfaces/products-api.interface";

const LandingPage: FC = () => {
  //State for saving the fetched options
  //Empty initial state
  const [options, setOptions] = useState<Options[]>([]);

  //Use effect to load the fake date on mount
  useEffect(() => {
    //Create async function to fetch data
    const getOptions = async () => {
      //Get response from fetch request
      const response = await fetch("https://dummyjson.com/products");
      //Await Json response from fetch response
      const results: ProductsApiResponse = await response.json();
      //Iterate through the products from response to get only their name and id
      const productNames = results.products.map((res: Products) => {
        return { name: res.title, id: res.id.toString() };
      });
      //Set the options after fetched and parsed
      setOptions(productNames);
    };

    //Call function
    getOptions();
  }, []);

  return (
    <div id="landing-page" className="landing-page">
      <h2>Autocomplete Exercise</h2>
      <h4>Type to begin searching for options</h4>
      {
        //AutoComplete component - Received array of options
      }
      <AutoComplete options={options} />
    </div>
  );
};

//Export for landing page container
export default LandingPage;
