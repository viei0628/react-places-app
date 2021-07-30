import { useState, useEffect } from 'react';
import PlaceList from "../components/PlaceList";

function AllPlacesPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://places-app-a280f-default-rtdb.firebaseio.com/places.json").then((response) => {
        return response.json();
      }).then((data) => {
        const places = [];

        for (const key in data) {
          const place = {
            id: key,
            ...data[key],
          };

          places.push(place);
        }

        setIsLoading(false);
        setLoadedPlaces(places);

        // console.log("New Places: ", loadedPlaces);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Places</h1>
      <PlaceList places={loadedPlaces} />
    </section>
  );
}

export default AllPlacesPage;
