import NewPlaceForm from "../components/NewPlaceForm";
import { useHistory } from 'react-router-dom';

function NewPlace() {

    const history = useHistory();
    function addPlaceHandler(placeData) {
        fetch(
            'https://places-app-a280f-default-rtdb.firebaseio.com/places.json',
            {
                method: 'POST',
                body: JSON.stringify(placeData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
        });

    }


    return <div>
        <h1>New Place</h1>
        <NewPlaceForm onAddPlace={addPlaceHandler}/>
    </div>
}

export default NewPlace;