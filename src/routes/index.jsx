import { Route, Routes } from "react-router-dom";
import App from "../App";
import { Courses } from "../templates/courses/courses";
import { Page404 } from "../templates/Page404/Page404";

function RouterConfig() {
  return (
    <Routes>
        <Route index path='/' element={<App />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export { RouterConfig };
