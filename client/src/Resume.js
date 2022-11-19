import "./styles/style.scss";
import ContactInfo from "./ContactInfo";
import MainContent from "./MainContent/index";
import SideContent from "./SideContent";

function Resume () {
  let data = require("./data/basic_info.json");
  return (
    <>
      <div className="basic-info">
        <div className="text-section">
          <h1 id="tahmin-ahmed">{data.basicInfo.textSection.name}</h1>
          <p><strong>Job role: </strong>{data.basicInfo.textSection.jobRole}</p>
        </div>

        <ContactInfo
          contactData={data.basicInfo.contactInfo}
        />
      </div>

      <div className="content-holder">
        <MainContent
          data={data}
        />
        <SideContent
          data={data.sideContent}
        />
      </div>
    </>
  )
}

export default Resume;

