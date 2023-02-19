export default function Travel(props) {
  return (
    <div className="travel-container">
      {/* <img src="./src/assets/dubai.jpg" alt="dubai hotel" /> */}

      <img className="travel-img" src={props.imageUrl} alt="" />

      <div className="travel-info">
        <div className="location-container">
          <img src={props.mapPin} alt="" className="location-pin" />
          <p>{props.location}</p>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>

        <h3>{props.title}</h3>
        <p>{props.startDate}</p>
        <p>{props.endDate}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
