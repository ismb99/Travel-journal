import Travel from "./Components/Travel";
import Header from "./Components/Header";
import data from "../data";

export default function App() {
  const travelElement = data.map((travel) => {
    return (
      <Travel
        title={travel.title}
        location={travel.location}
        googleMapsUrl={travel.googleMapsUrl}
        startDate={travel.startDate}
        titendDatele={travel.endDate}
        description={travel.description}
        imageUrl={travel.imageUrl}
      />
    );
  });
  return (
    <div className="container">
      <Header image="src/assets/globe.png" title="my travel journal." />
      {travelElement}
      <hr />
    </div>
  );
}
