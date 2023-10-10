import React from "react";

const CallCampaign = ({ callCampaignList }) => {
  return callCampaignList.map((campaignListItem) => (
    <div className="border-bottom border-black py-4" key={campaignListItem?.id}>
      <div className="d-flex justify-content-between align-items-start">
        <span className="text-regular light-text fw-medium">Call Campaign</span>
        <button className="btn btn-dark btn-custom-black rounded-pill px-4 py-1 text-sm">
          View
        </button>
      </div>
      <div className="w-75">
        <h2 className="text-lg mb-25">{campaignListItem.name}</h2>
        <span className="text-sm">
          {campaignListItem?.location?.details?.noofdaysremaing} Days Remaining
        </span>
        <p className="text-md mt-15">
          {campaignListItem?.location?.details?.completed} Complete
        </p>
      </div>
    </div>
  ));
};

export default CallCampaign;
