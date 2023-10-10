import React, { useState } from "react";

const Tasks = ({ taskList }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };
  return (
    <div className="accordion my-5" id="taskAccordion">
      {taskList.map((taskListItem, index) => (
        <div className="accordion-item mb-3 rounded" key={taskListItem?.id}>
          <h2 className="accordion-header">
            <p className="fs-6 new-task mb-0">New Task</p>
            <button
              className={`accordion-button ${
                activeAccordion === index ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeAccordion === index ? "true" : "false"}
            >
              <p className="text-uppercase fw-semibold m-0">
                {taskListItem?.name}
              </p>
            </button>
          </h2>
          <div
            className={`accordion-collapse collapse ${
              activeAccordion === index ? "show" : ""
            }`}
          >
            <div className="accordion-body">
              <p>{taskListItem?.description?.[0]?.line}</p>
              <button className="btn btn-custom-secondary rounded-pill px-4 py-1 text-sm w-100 mb-3">
                View
              </button>
              <button className="btn btn-custom-secondary rounded-pill px-4 py-1 text-sm w-100 mb-3">
                Mark Complete
              </button>
              <button className="btn btn-custom-secondary rounded-pill px-4 py-1 text-sm w-100">
                Reassign
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
