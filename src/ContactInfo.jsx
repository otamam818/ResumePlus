function ContactInfo ({ contactData }) {
  return (
    <div className="contact-info">
      {
        contactData.map((value, index) => {
          let component = (value.component === "link") ? (
            <a href={value.props.reference} key={index}>
                <img
                  src={require(`./images/contactImages/${value.props.imageName}`)}
                  className="contact-image"
                  alt={value.props.info}
                />
                <div>{value.props.info}</div>
            </a>
          ) : (
            <div key={index}>
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
  )
}

export default ContactInfo;

