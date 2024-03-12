import React, { useEffect, useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { customStyles } from "../assets/js/SelectStyle";

const options = [
  { value: null, label: "None of Select" },
  { value: "1", label: "C Programing" },
  { value: "2", label: "Advanced Networking" },
  { value: "3", label: "Java Programing" },
];

const steps = ["Basic Details", "Advanced Settings"];

const AddExam = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <BasicDetails />;
      case 1:
        return <AdvancedDetails />;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="border border-2 border-light shadow-lg rounded p-3">
        <div className="d-flex justify-content-center">
          <Stepper activeStep={activeStep} className="w-50">
            {steps?.map((label) => {
              return (
                <Step key={label}>
                  <StepLabel className="text-custom-dark">
                    <span className="text-custom-dark fw-normal">{label}</span>
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>
        <div>
          <form>{renderStepContent(activeStep)}</form>
        </div>
        <div className="d-flex justify-content-end">
          {activeStep > 0 && (
            <button
              className="btn btn-sm btn-outline-primary me-2"
              onClick={() =>
                setActiveStep(activeStep === 0 ? 0 : activeStep - 1)
              }
            >
              Previous
            </button>
          )}

          <button
            className="btn btn-sm btn-outline-primary"
            onClick={() =>
              activeStep === 1 ? navigate("/") : setActiveStep(activeStep + 1)
            }
          >
            {activeStep === 1 ? "Publish and Save" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddExam;

const BasicDetails = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [easyValue, setEasyValue] = useState(0);
  const [mediumValue, setMediumValue] = useState(0);
  const [hardValue, setHardValue] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const countTotal = () => {
    setTotalValue(easyValue + mediumValue + hardValue);
  };

  useEffect(() => {
    countTotal();
  }, [easyValue, mediumValue, hardValue]);

  return (
    <div className="p-3 mt-3">
      <div className="row mb-3">
        <div className="col-12 col-md-4">
          <div className="form-group">
            <div className="form-label f-12 fw-medium">Exam Name :</div>
            <input
              type="text"
              className="form-control form-control-sm form-border"
            />
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="form-group">
            <div className="form-label f-12 fw-medium">Exam Duration :</div>
            <input
              type="number"
              className="form-control form-control-sm form-border"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="form-group">
            <div className="form-label f-12 fw-medium">Question Picking :</div>
            <Select
              styles={customStyles}
              defaultValue={null}
              onChange={(e) => {
                console.log(e.value);
                setSelectedValue(e.value);
              }}
              options={options}
            />
          </div>
        </div>
      </div>
      {selectedValue != null && (
        <div className="mt-3">
          <table className="table table-responsive table-bordereless table-striped table-light f-14">
            <thead>
              <tr>
                <th className="text-custom-dark">Topic</th>
                <th className="text-custom-dark">Easy</th>
                <th className="text-custom-dark">Medium</th>
                <th className="text-custom-dark">Hard</th>
                <th className="text-custom-dark">Total Questions</th>
                <th className="text-custom-dark">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="f-14">
                <td className="ps-2">
                  <div>
                    <Select
                      styles={customStyles}
                      defaultValue={null}
                      onChange={(e) => {
                        console.log(e.value);
                      }}
                      options={options}
                    />
                  </div>
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control form-control-sm form-border"
                    onChange={(e) => {
                      setEasyValue(parseInt(e.target.value));
                    }}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control form-control-sm form-border"
                    onChange={(e) => setMediumValue(parseInt(e.target.value))}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control form-control-sm form-border"
                    onChange={(e) => setHardValue(parseInt(e.target.value))}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={totalValue}
                    defaultValue={totalValue}
                    className="form-control form-control-sm form-border"
                  />
                </td>
                <td>
                  <span>
                    <button className="btn btn-sm m-0 px-1 p-0 btn-outline-custom">
                      <i className="bi bi-pencil-square fs-6"></i>
                    </button>
                  </span>
                  <span>
                    <button className="btn btn-sm m-0 px-1 p-0 btn-outline-custom ms-2">
                      <i className="bi bi-trash3-fill fs-6"></i>
                    </button>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const AdvancedDetails = () => {
  return <div>AddExam</div>;
};
