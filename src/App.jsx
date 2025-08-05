import "./App.css";
import Checkbox from "./components/checkboxIcon/Checkbox.jsx";
import { handleFormSubmit } from "./action/Action.js";

function App() {
  return (
    <div className={"container gap-4"}>
      <div className={"left-container"}>
        <div className={"text-5xl font-semibold"}>
          {" "}
          Get the finest curated abstracts delivered weekly to your inbox
        </div>
        <div className={"flex gap-4 flex-col mt-20"}>
          <Checkbox
            text={"Exclusive access to new abstract images and collections"}
          />
          <Checkbox text={"Unlock special promotions only for subscribers"} />
          <Checkbox text={"Regular doses of artistic inspiration"} />
        </div>
        <form
          method={"POST"}
          className={"flex gap-4"}
          onSubmit={(event) => {
            handleFormSubmit(event);
          }}
        >
          <input
            type={"email"}
            placeholder={"Enter your email"}
            name={"email"}
            className={
              "p-4 mt-10 border border-[#E5E5E5] rounded-md bg-[#FAFAFA] w-80"
            }
          />
          <button type={"submit"} className={"mt-10 submit"}>
            Subscribe
          </button>
        </form>
        <div className={"mt-4 text-[#525252]"}>
          We only send you the best! No spam.
        </div>
      </div>
      <div className={"right-container"}>
        <img
          src={"/src/img/abstract.jpg"}
          alt={"illustration"}
          width={"100%"}
          height={"100%"}
        />
      </div>
    </div>
  );
}

export default App;
