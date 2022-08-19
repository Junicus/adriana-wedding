import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { LandingPage, RSVPPage, SchedulePage, WeddingPartyPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="schedule" element={<SchedulePage />} />
        <Route path="wedding_party" element={<WeddingPartyPage />} />
        <Route path="rsvp" element={<RSVPPage />} />
      </Route>
    </Routes>
  );
}

export default App;
