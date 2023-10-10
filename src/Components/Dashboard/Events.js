import React from "react";
import {
  calculateDuration,
  renderDayMonthFormat,
} from "../../Utilities/Utilities";

const Events = ({ eventList }) => {
  return eventList.map((eventListItem) => (
    <div className="border-bottom border-black py-4" key={eventListItem?.id}>
      <div className="d-flex justify-content-between align-items-start">
        <span className="text-regular light-text ">Event</span>
        <button className="btn btn-dark btn-custom-black rounded-pill px-4 py-1 text-sm">
          View
        </button>
      </div>
      <p className="text-lg fw-bolder fs-3">{eventListItem?.name}</p>
      <p className="text-lg mb-25 fs-4">{eventListItem?.location?.name}</p>
      <p className="text-lg fs-4 mb-0">
        {renderDayMonthFormat(new Date(eventListItem?.location?.date))}
      </p>
      <p className="text-lg fs-4">{eventListItem?.location?.start}</p>
      <p className="fs-6">
        {calculateDuration(
          eventListItem?.location?.start,
          eventListItem?.location?.end
        )}
      </p>
      <p className="fw-lighter fst-italic">
        {eventListItem?.description?.[0]?.line}
      </p>
    </div>
  ));
};

export default Events;
