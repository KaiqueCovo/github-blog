import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home, Post } from "@/pages";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:issueNumber" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}
