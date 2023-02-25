import { Route, Routes } from "react-router-dom";

import { ProtectedRoute } from "./layouts/ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";

import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import InfoKuliah from "./pages/InfoKuliah";
import BiayaKuliah from "./pages/BiayaKuliah";
import KRS from "./pages/KRS";
import KHS from "./pages/KHS";
import MateriKuliah from "./pages/MateriKuliah";
import TranskipNilai from "./pages/TranskipNilai";
import Panduan from "./pages/Panduan";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/info-kuliah" element={<InfoKuliah />} />
          <Route path="/krs" element={<KRS />} />
          <Route path="/khs" element={<KHS />} />
          <Route path="/transkip-nilai" element={<TranskipNilai />} />
          <Route path="/biaya-kuliah" element={<BiayaKuliah />} />
          <Route path="/materi-kuliah" element={<MateriKuliah />} />
          <Route path="/panduan" element={<Panduan />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
