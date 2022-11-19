import "./styles/style.scss";

function Resume () {
  let data = require("./data/basic_info.json");
  return (
    <>
      <div className="basic-info">
        <div className="text-section">
          <h1 id="tahmin-ahmed">{data.basicInfo.textSection.name}</h1>
          <p><strong>Job role: </strong>{data.basicInfo.textSection.jobRole}</p>
        </div>
        <div className="contact-info">
          {
            data.basicInfo.contactInfo.map((value, index) => {
              let component = (value.component === "link") ? (
                <a href={value.props.reference}>
                    <img
                      src={require(`./images/contactImages/${value.props.imageName}`)}
                      className="contact-image"
                      alt={value.props.info}
                    />
                    <div>{value.props.info}</div>
                </a>
              ) : (
                <div>
                    <img
                      src={require(`./images/contactImages/${value.props.imageName}`)}
                      className="contact-image"
                      alt={value.props.info}
                    />
                    {value.props.info}
                </div>
              );
              return component;
            })
          }
        </div>
      </div>
    </>
  )
}

export default Resume;

