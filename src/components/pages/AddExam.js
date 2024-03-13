import React, { useEffect, useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { customStyles } from "../assets/js/SelectStyle";
import { configureJodit } from "../assets/js/configureJodit";
import JoditEditor from "jodit-react";
import { toast } from "react-toastify";

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
        <form onSubmit={(e) => e.preventDefault()}>
          <div>{renderStepContent(activeStep)}</div>
          <div className="d-flex justify-content-end">
            {activeStep > 0 && (
              <button
                className="btn btn-sm btn-outline-white me-2"
                onClick={() =>
                  setActiveStep(activeStep === 0 ? 0 : activeStep - 1)
                }
              >
                Previous
              </button>
            )}
            <button
              className="btn btn-sm btn-outline-blue"
              type={activeStep === 1 ? "submit" : "button"}
              onClick={() =>
                activeStep === 1
                  ? (navigate("/"), toast.success("Exam Added Successfully."))
                  : setActiveStep(activeStep + 1)
              }
            >
              {activeStep === 1 ? "Publish and Save" : "Save And Continue"}
            </button>
          </div>
        </form>
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
        <div className="vh-25" style={{ overflowX: "auto" }}>
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
                      disabled
                      className="form-control form-control-sm form-border"
                    />
                  </td>
                  <td>
                    <span>
                      <button className="btn btn-sm m-0 px-1 p-0 btn-outline-custom-edit">
                        <i className="bi bi-pencil-square fs-6"></i>
                      </button>
                    </span>
                    <span>
                      <button className="btn btn-sm m-0 px-1 p-0 btn-outline-custom-delete ms-2">
                        <i className="bi bi-trash3-fill fs-6"></i>
                      </button>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

const AdvancedDetails = () => {
  const [seletRegister, setSelectRegister] = useState(false);

  return (
    <div className="p-3 mt-3">
      <div className="row mb-3">
        <div className="col-12 col-md-4">
          <div className="form-group">
            <div className="form-label f-12 fw-medium">
              Negative Marking (%) :
            </div>
            <input
              type="number"
              className="form-control form-control-sm form-border"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="form-label f-12 fw-medium">Assign Marks :</div>
      </div>
      <div className="row mb-3">
        <div className="col-12 col-md-3">
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-sm form-border"
              placeholder="Easy"
            />
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-sm form-border"
              placeholder="Medium"
            />
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-sm form-border"
              placeholder="Hard"
            />
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12 col-md-4">
          <div className="form-group">
            <div className="form-label f-12 fw-medium">
              Minimum Passing Score (%) :
            </div>
            <input
              type="number"
              className="form-control form-control-sm form-border"
              min={0}
              max={100}
            />
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12 col-md-4">
          <div class="form-check">
            <input
              class="form-check-input form-border"
              type="checkbox"
              checked={seletRegister}
              onChange={(e) => setSelectRegister(true)}
              id="flexCheckDefault"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            />
            <label class="form-check-label f-12 fw-medium" for="registration">
              To Configure Registration Form
            </label>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <label className="form-label mb-1 f-12 fw-medium">
          Capture Image during the exam (In Seconds)
        </label>
        <div className="col-12 col-md-6 d-flex justify-content-between">
          <div class="form-check d-flex align-items-center">
            <input
              class="form-check-input form-border"
              type="checkbox"
              value=""
            />
            <label class="form-check-label fw-medium ms-2" for="registration">
              <span className="f-12">1</span>
            </label>
          </div>
          <div class="form-check d-flex align-items-center">
            <input
              class="form-check-input form-border"
              type="checkbox"
              value=""
            />
            <label class="form-check-label fw-medium ms-2" for="registration">
              <span className="f-12">2</span>
            </label>
          </div>
          <div class="form-check d-flex align-items-center">
            <input
              class="form-check-input form-border"
              type="checkbox"
              value=""
            />
            <label class="form-check-label fw-medium ms-2" for="registration">
              <span className="f-12">3</span>
            </label>
          </div>
          <div class="form-check d-flex align-items-center">
            <input
              class="form-check-input form-border mt-1"
              type="checkbox"
              value=""
            />
            <label class="form-check-label fw-medium ms-2" for="registration">
              <span className="f-12">4</span>
            </label>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="form-label f-12 fw-medium">Instrutions :</div>
          <JoditEditor
            name="description"
            onChange={(e) => {
              // setFieldValue("description", e);
            }}
            config={configureJodit}
          />
        </div>
      </div>
      {/* modal */}
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby={seletRegister ? "staticBackdropLabel" : ""}
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header p-2">
              <h6 class="modal-title" id="staticBackdropLabel">
                Registration Form
              </h6>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={(e) => setSelectRegister(false)}
              ></button>
            </div>
            <div class="modal-body">
              <div className="form-group">
                <div className="form-label f-12 fw-medium">Email :</div>
                <input
                  type="text"
                  className="form-control form-control-sm form-border"
                />
              </div>
              <div className="form-group">
                <div className="form-label f-12 fw-medium">Password :</div>
                <input
                  type="password"
                  className="form-control form-control-sm form-border"
                />
              </div>
            </div>
            <div class="modal-footer p-2">
              <button
                type="button"
                class="btn btn-sm btn-outline-white"
                data-bs-dismiss="modal"
                onClick={(e) => setSelectRegister(false)}
              >
                Close
              </button>
              <button type="button" class="btn btn-sm btn-outline-blue">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
