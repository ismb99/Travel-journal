import Travel from "./Components/Travel";
import Header from "./Components/Header";

export default function App() {
  return (
    <div className="container">
      <Header image="src/assets/globe.png" title="my travel journal." />

      <Travel
        mapPin="src/assets/map.png"
        location="Japan"
        googleMapsUrl="https://goo.gl/maps/1DGM5WrWnATgkSNB8"
        title="Mount Fuji"
        startDate="12 Jan, 2021"
        endDate="24 Jan, 2021"
        description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        imageUrl="https://source.unsplash.com/WLxQvbMyfas"
      />
    </div>
  );
}
