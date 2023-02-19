export default function Travel(props) {
  return (
    <div className="travel-container">
      {/* <img src="./src/assets/dubai.jpg" alt="dubai hotel" /> */}

      <img className="travel-img" src={props.imageUrl} alt="" />
      <div className="travel-info">
        <div className="location-container">
          <img src={props.mapPin} alt="" className="location-pin" />
          <span>{props.location}</span>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>

        <h1>{props.title}</h1>
        <h4>{props.startDate}</h4>
        <h4>{props.endDate}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
