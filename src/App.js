import React, { Children } from "react";
import MainLayout from "./components/pages/MainLayout";
import AddExam from "./components/pages/AddExam";
import ExamList from "./components/pages/ExamList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './components/assets/css/styles.css'

const App = (props) => {
  return (
    <div>
      <MainLayout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ExamList />} />
            <Route path="/add-exam" element={<AddExam />} />
          </Routes>
        </BrowserRouter>
      </MainLayout>
    </div>
  );
};

export default App;
