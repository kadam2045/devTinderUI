import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BodyRoutes from "./app/BodyRoutes";
import Login from "./app/Pages/Login";
import { AppStore } from "./utils/AppStore";

function App() {
  return (
    <Provider store={AppStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<BodyRoutes />}>
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
