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
          <p>{data.basicInfo.textSection.jobRole}</p>
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
      <footer>
        This page is a printable version of &nbsp;
        {/* TODO: Find and use the space character*/}
        <a href="https://otamam818.github.io/ResumePlus/">
          https://otamam818.github.io/ResumePlus/
        </a> <br/>
        As such, while it can be printed accurately, it does not have a suitable
        mobile version
      </footer>
    </>
  )
}

export default Resume;

