import { useContext } from 'react';

import FavoritesContext from '../components/favorites-context';
import PlaceList from '../components/PlaceList';


function VisitedPlacesPage() {
    const favoritesCtx = useContext(FavoritesContext);
    console.log(favoritesCtx)

    let content;

    if(favoritesCtx.totalFavorites === 0) {
        content = <p>No Visited. Start Adding Some!</p> 
    } else {
        content = <PlaceList places={favoritesCtx.favorites} />
    }

    return <section>
        <h1>Visited Places</h1>
        {content}
    </section>
}

export default VisitedPlacesPage;