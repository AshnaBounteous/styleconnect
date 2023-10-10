import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import StylistActionsList from "./StylistActionsList";
import { greetings } from "../../Utilities/Utilities";
import { fetchStylistActions, fetchStylistMetrics } from "./DashboardApi";
import "./Dashboard.scss";

const userData = {
  mypicture: "http path of picture",
  nickname: "Erin",
  storename: "Chicos",
  storenumber: "StoreNo",
};

const Dashboard = () => {
  const logger = require("pino")();
  const [data, setData] = useState(null);
  const [pendingActionList, setPendingActionList] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await fetchStylistActions();
        setPendingActionList(response?.data);
      } catch (error) {
        logger.error("error", error);
      }
    };
    fetchDataFromAPI();
  }, [logger]);

  useEffect(() => {
    const fetchMetricsDataFromAPI = async () => {
      try {
        const response = await fetchStylistMetrics();
        setData(response?.data);
      } catch (error) {
        logger.error("error", error);
      }
    };
    fetchMetricsDataFromAPI();
  }, [logger]);

  return (
    <>
      <Header />
      <div className="overview-wrapper text-start">
        <h1 className="fw-bolder">
          Good {greetings()} , {userData?.nickname}!
        </h1>
        <p className="fw-semibold fs-2"> {userData?.storename}</p>
        <p className="fs-5">
          {userData?.storenumber}
          <span className="text-decoration-underline"> Switch Stores </span>
        </p>

        <div className="d-flex justify-content-between text-center my-3">
          <div>
            <p className="fs-1 mb-0">2</p>
            <p className="fs-6 text-uppercase">Upcoming Connections</p>
          </div>
          <div>
            <p className="fs-1 mb-0">3</p>
            <p className="fs-6 text-uppercase">New Messages</p>
          </div>
          <div>
            <p className="fs-1 mb-0">$14K</p>
            <p className="fs-6 text-uppercase">Today's Sales</p>
          </div>
        </div>
      </div>
      <div className="px-4 py-5">
        {pendingActionList && pendingActionList?.length > 0 && (
          <StylistActionsList toDoList={pendingActionList} />
        )}
      </div>
    </>
  );
};

export default Dashboard;
