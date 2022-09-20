import React from "react";
import "./Work.css";
export default function Work() {
  return (
    <div className="work-inside my-4 mx-2">
      <div className="d-flex flex-row justify-content-between ">
        <span className="company-name">Wipro</span>
        <span className="year-passed">2021-Present</span>
      </div>
      <div className="d-flex flex-column">
        <span className="position">Software Engineer</span>
        <span className="description-position">
          <ul>
            <li>
              TESS is data warehouse positioned as the single integration
              platform in the IT landscape. It encompasses a classical layered
              architecture, with staging, history, key normalization, 3rd normal
              form model (CDM), dimensional modelling and access layer. The
              access layer are 10 standardized data marts providing insights and
              information for reporting and analytical purposes.
            </li>
            <li>
              Developed Informatica mappings/workflows as per the business
              requirements.
            </li>
            <li>
              Used Informatica Power Center for (ETL) extraction, transformation
              and loading data from multiple source systems into target
              database.
            </li>
          </ul>
        </span>
      </div>
    </div>
  );
}
