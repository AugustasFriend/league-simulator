import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";
import HomeScreen from "./use-cases/home/HomeScreen";
import ScheduleScreen from "./use-cases/schedule/ScheduleScreen";
import StandingsScreen from "./use-cases/standings/StandingsScreen";
import { routes } from "./routes/AppRoutes";
import { Column } from "./reusable-components/Column";

function App() {
  return (
    <Column>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<HomeScreen />} path={routes.home()} />
          <Route element={<ScheduleScreen />} path={routes.schedule()} />
          <Route element={<StandingsScreen />} path={routes.standings()} />
        </Routes>
      </BrowserRouter>
    </Column>
  );
}

export default App;
