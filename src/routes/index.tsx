import { Route, Routes } from "react-router-dom";
import Home from "../templates/home/home";
import Articles from '../templates/articles/articles';
import { Courses } from "../templates/courses/courses";
import { Page404 } from "../templates/Page404/Page404";
import React from 'react';

function RouterConfig() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/courses"  element={<Courses />} />
         <Route path="/articles"  element={<Articles/>} />
         <Route path='*' element={<Page404 />} />
      </Routes>
   );
}

export { RouterConfig };
