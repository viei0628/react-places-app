import PlaceItem from "./PlaceItem";
import classes from './PlaceList.module.css';

function PlaceList(props) {
    // console.log('Places:', props.places 
    return (
    <ul className={classes.list}>
      {props.places.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          name={place.name}
          address={place.address}
          description={place.description}
        />
      ))}
    </ul>
  );
}

export default PlaceList;
