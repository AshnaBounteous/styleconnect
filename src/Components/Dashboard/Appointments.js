import React from "react";
import {
  calculateDuration,
  renderDayMonthFormat,
} from "../../Utilities/Utilities";

const Appointments = ({ appointmentList }) => {
  return appointmentList.map((appoinmentListItem) => (
    <div
      className="border-bottom border-black py-4"
      key={appoinmentListItem?.id}
    >
      <div className="d-flex justify-content-between align-items-start">
        <span className="text-regular light-text ">Appointment</span>
        <button className="btn btn-dark btn-custom-black rounded-pill px-4 py-1 text-sm">
          View
        </button>
      </div>
      <div className="profile-photo">
        <img
          className="rounded-circle object-fit-cover w-100 h-100"
          src={appoinmentListItem?.location?.details?.profilepic}
          alt="profile"
        />
      </div>
      <p className="text-lg fw-bolder fs-3">{appoinmentListItem?.name}</p>
      <p className="text-lg mb-25 fs-4">{appoinmentListItem?.location?.name}</p>
      <p className="text-lg fs-4 mb-0">
        {renderDayMonthFormat(new Date(appoinmentListItem?.location?.date))}
      </p>
      <p className="text-lg fs-4">{appoinmentListItem?.location?.start}</p>
      <p className="fs-6">
        {calculateDuration(
          appoinmentListItem?.location?.start,
          appoinmentListItem?.location?.end
        )}
      </p>
      <p className="fw-lighter fst-italic">
        {appoinmentListItem?.description?.[0]?.line}
      </p>
      <button className="btn border-black rounded-pill px-4 py-1 fs-5 fw-bolder">
        Message
      </button>
    </div>
  ));
};

export default Appointments;
