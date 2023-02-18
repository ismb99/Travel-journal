export default function Travel(props) {
  return (
    <div className="travel-info">
      <img src="./src/assets/dubai.jpg" alt="dubai hotel" />

      <h3>{props.title}</h3>
      <p>{props.location}</p>
      <p>{props.startDate}</p>
      <p>{props.endDate}</p>
      <p>{props.description}</p>
    </div>
  );
}
