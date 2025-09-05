import "./App.css";
import OnChnage from "./components/onChangeInputTest";
import Users from "./components/class-components/class";
import FunctionalComponents from "./components/functional-components/functional";
import GetByRole from "./components/RTL Query/getByRole/getby";
import GetAllRole from "./components/RTL Query/getAllEByRole/getAllby";
import GetLabel from "./components/RTL Query/getLabel/getLabel";
import GetAllLabel from "./components/RTL Query/getAllLabel/getAllLabel";
import GetPlaceHolder from "./components/RTL Query/getPlaceHolder/getPlaceHoder";
function App() {
  return (
    <div>
      {/* <p>First React Test Case</p>
      <p>Muqhtadeer</p>
      <img
        title="This is an AI Generated Image"
        src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="
      /> */}

      {/* <OnChange /> */}

      {/* Classs components */}
      {/* <Users /> */}

      {/* functional components */}
      {/* <FunctionalComponents /> */}

      {/* GetByRole usage */}
      {/* <GetByRole /> */}

      {/* getAllByRoles */}
      {/* <GetAllRole /> */}

      {/* getByLabelText */}
      <GetLabel />

      {/* getByAllLabel */}
      <GetAllLabel />

      {/* getPl */}
      <GetPlaceHolder />
    </div>
  );
}

export default App;
