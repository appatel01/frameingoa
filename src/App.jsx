import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Upload from "./pages/Upload";
import Details from "./pages/Details";
import Processing from "./pages/Processing";
import Identity from "./pages/Identity";
import Success from "./pages/Success";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/details" element={<Details />} />
      <Route path="/processing" element={<Processing />} />
      <Route path="/identity" element={<Identity />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;