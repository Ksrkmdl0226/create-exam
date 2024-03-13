import React, { Children } from "react";
import MainLayout from "./components/pages/MainLayout";
import AddExam from "./components/pages/AddExam";
import ExamList from "./components/pages/ExamList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./components/assets/css/styles.css";
import { ToastContainer } from "react-toastify";

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <MainLayout>
          <ToastContainer autoClose={2000} />
          <Routes>
            <Route path="/" element={<ExamList />} />
            <Route path="/add-exam" element={<AddExam />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
};

export default App;
