import { FC } from "react";
import "./landing-page.styles.css";
import AutoComplete from "../../components/auto-complete/auto-complete";

const LandingPage: FC = () => {
  return (
    <div id="landing-page" className="landing-page">
      <h2>Autocomplete Exercise</h2>
      <h4>Type to begin searching for options</h4>
      <AutoComplete />
    </div>
  );
};

export default LandingPage;
