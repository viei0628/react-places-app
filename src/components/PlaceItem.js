import { useContext } from "react";
import Card from "./Card";
import classes from './PlaceItem.module.css';
import FavoritesContext from './favorites-context';

function PlaceItem(props) {
    const favoritesCtx = useContext(FavoritesContext);
    
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
    
    function toggleFavoriteStatusHandler() {
        if(itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                name: props.name,
                description: props.description,
                image: props.image,
                address: props.address,
            })
        }
    }
    return <li className={classes.item}>
        <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.name} />
            </div>
            <div className={classes.content}>
                <h3>{props.name}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove Favorite': 'Add to Favorites'}</button>
            </div>
        </Card>
    </li>
}

export default PlaceItem;