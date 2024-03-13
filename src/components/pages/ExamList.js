import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ExamList = () => {
  const [tableData, setTableData] = useState(null);
  const navigate = useNavigate();

  const fetchTableData = async () => {
    const data = await fetch("http://localhost:5000/tableData");
    const res = await data.json();
    setTableData(res);
    console.log(res);
  };

  useEffect(() => {
    fetchTableData();
    console.log(tableData);
  }, []);

  return (
    <div>
      <div className="border border-2 border-light shadow-lg rounded p-3">
        <div className="d-block d-sm-block d-md-flex justify-content-between align-items-center mb-3">
          <div>
            <h5 className="fs-5 text-custom-dark fw-500">Exam List</h5>
          </div>
          <div className="d-flex">
            <button
              className="my-2 mx-1 w-50 f-12 text-light btn btn-sm btn-outline-blue fw-mediumi"
              onClick={() => navigate(`/add-exam`)}
            >
              <i class="bi bi-plus-circle me-1 ms-1 fs-6"></i>
              <span className="f-14 ms-1">Add Exam</span>
            </button>
            <button className="my-2 mx-1 f-12 text-light btn btn-sm btn-outline-blue">
              <i class="bi bi-funnel-fill fs-6"></i>
            </button>
            <div class="input-group my-2 mx-1">
              <input
                type="text"
                class="form-control form-control-sm search-border"
                placeholder="Search"
              />
              <button class="btn btn-sm btn-outline-blue" type="button">
                <i class="bi bi-search "></i>
              </button>
            </div>
          </div>
        </div>
        <div style={{ overflowX : 'auto'}}>
          <table className="table table-responsive table-bordereless table-striped table-light f-14">
            <thead>
              <tr>
                {tableData?.tableHeader?.map((item, index) => (
                  <th className="text-custom-dark" key={index}>
                    {item?.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData?.tableBody?.map((item, index) => (
                <tr className="f-14" key={index}>
                  <td className="ps-2">{item?.id}</td>
                  <td>{item?.name}</td>
                  <td>{item?.duration}</td>
                  <td>{item?.topic}</td>
                  <td>{item?.marks}</td>
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExamList;
