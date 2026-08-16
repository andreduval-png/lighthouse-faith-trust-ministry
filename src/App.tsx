import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { About } from "./pages/About";
import { Benevolence } from "./pages/Benevolence";
import { Contact } from "./pages/Contact";
import { Donate } from "./pages/Donate";
import { Governance } from "./pages/Governance";
import { Home } from "./pages/Home";
import { Membership } from "./pages/Membership";
import { Ministries } from "./pages/Ministries";
import { MissionVision } from "./pages/MissionVision";
import { NotFound } from "./pages/NotFound";
import { StatementOfFaith } from "./pages/StatementOfFaith";
import { SurvivorAdvocacy } from "./pages/SurvivorAdvocacy";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="mission-vision" element={<MissionVision />} />
        <Route path="statement-of-faith" element={<StatementOfFaith />} />
        <Route path="ministries" element={<Ministries />} />
        <Route path="survivor-advocacy" element={<SurvivorAdvocacy />} />
        <Route path="membership" element={<Membership />} />
        <Route path="donate" element={<Donate />} />
        <Route path="benevolence" element={<Benevolence />} />
        <Route path="governance" element={<Governance />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
