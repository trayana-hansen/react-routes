import "./App.scss";
import Header from "./Components/Partials/header";
import NotFound from "./Components/Pages/notfound";
import Footer from "./Components/Partials/footer";
import { Route, Routes } from "react-router-dom";
import { Goals, GoalDetails } from "./Components/Pages/goals";
import Home from "./Components/Pages/home";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/goals">
            <Route index element={<Goals />} />
            <Route path=":id" element={<GoalDetails />} />
            <Route />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
