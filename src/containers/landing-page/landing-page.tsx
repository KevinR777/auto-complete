import { FC, useEffect, useState } from "react";
import "./landing-page.styles.css";
import AutoComplete from "../../components/auto-complete/auto-complete";
import { Options } from "../../interfaces/auto-complete/auto-complete.interface";
import {
  Products,
  ProductsApiResponse,
} from "../../interfaces/products-api.interface";

const LandingPage: FC = () => {
  const [options, setOptions] = useState<Options[]>([]);

  useEffect(() => {
    const getOptions = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const results: ProductsApiResponse = await response.json();
      const productNames = results.products.map((res: Products) => {
        return { name: res.title, id: res.id.toString() };
      });
      setOptions(productNames);
    };
    getOptions();
  }, []);
  return (
    <div id="landing-page" className="landing-page">
      <h2>Autocomplete Exercise</h2>
      <h4>Type to begin searching for options</h4>
      <AutoComplete options={options} />
    </div>
  );
};

export default LandingPage;
