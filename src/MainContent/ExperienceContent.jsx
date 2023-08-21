function ExperienceContent( { data } ) {
  let dataArray = data.map( (value, index) => {
    return <ExperienceAtom data={value} index={index} key={index} />
  });
  return (
    <>
      <h2 id="experience">Experience</h2>
      <ul className="experience-info">
        {dataArray}
      </ul>
    </>
  )
}

function ExperienceAtom ( { data } ) {
  let stackData = data.stack.map ( (value, index) => {
    return (
      <div className="stack-atom" key={index}>
        {value}
      </div>
    )
  });

  return (
    <div className="experience-atom">
      <div className="title-data">
        <div className="left">
          <img src={require("../images/others/fast-forward-white.png")} alt="" />
          <h3>{data.title}</h3>
        </div>
        <span>{data.fromToDate}</span>
      </div>
      <div className="stack-data">
        {stackData}
      </div>
      <p>{data.description}</p>
    </div>
  )
}

export default ExperienceContent;

