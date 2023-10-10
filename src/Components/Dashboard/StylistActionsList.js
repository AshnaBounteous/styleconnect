import React, { useEffect, useState } from "react";
import CallCampaign from "./CallCampaign";
import Appointments from "./Appointments";
import Events from "./Events";
import Tasks from "./Tasks";
import { formattedDate } from "../../Utilities/Utilities";

const StylistActionsList = ({ toDoList }) => {
  const [callCampaignList, setCallCampaignList] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [events, setEvents] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // setCallCampaignList(
    //   toDoList.filter((item) => {
    //     return item?.type === "callcampaign";
    //   })
    // );
    setAppointments(
      toDoList
        .filter(
          (item) =>
            item?.type === "appointment" && item.location?.day === "today"
        )
        .slice(0, 5)
    );
    setEvents(
      toDoList
        .filter((item) => {
          return item?.type === "event" && item.location?.day === "today";
        })
        .slice(0, 5)
    );
    setTasks(
      toDoList
        .filter((item) => {
          return item?.type === "task" && item.location?.day === "future";
        })
        .slice(0, 5)
    );
  }, [toDoList]);

  return (
    <div>
      <div className="todo-list text-start">
        <div className="d-flex justify-content-between align-items-end mb-3">
          <h2 className="fw-bold text-start mb-0"> Today </h2>
          <p className="mb-0">{formattedDate()}</p>
        </div>
        {tasks && tasks.length > 0 && <Tasks taskList={tasks} />}

        {appointments && appointments.length > 0 && (
          <div>
            <h2 className="fw-bold text-start"> Appointments </h2>
            <Appointments appointmentList={appointments} />
          </div>
        )}
        {/* {callCampaignList && callCampaignList.length > 0 && (
          <CallCampaign callCampaignList={callCampaignList} />
        )} */}

        {events && events.length > 0 && (
          <div>
            <h2 className="fw-bold text-start mt-3"> Events </h2>
            <Events eventList={events} />
          </div>
        )}
      </div>
    </div>
  );
};

export default StylistActionsList;
