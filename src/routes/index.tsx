import { Route, Routes } from "react-router-dom";
import { HeaderNav } from "../components/header/Navigation";
import App from "../App";
import { Courses } from "../templates/courses/courses";
import { Page404 } from "../templates/Page404/Page404";

function RouterConfig() {
  return (
    <Routes>
      <Route  path="/" element={<HeaderNav />}>
        <Route index element={<App />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export { RouterConfig };
