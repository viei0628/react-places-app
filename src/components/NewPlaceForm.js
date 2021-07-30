import { useRef } from 'react';
import Card from "./Card";
import classes from './NewPlaceForm.module.css';

function NewPlaceForm(props) {
    const nameInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();


    function submitHandler(event) {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        
        const placeData = {
            name: enteredName,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };


        props.onAddPlace(placeData);
   
    }



    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="name">Place Name</label>
                <input type="text" required id="name" ref={nameInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Image</label>
                <input type="url" required id="image" ref={imageInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type="text" required id="address" ref={addressInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea id="description" rows='5' ref={descriptionInputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Place</button>
            </div>
        </form>
    </Card>
}

export default NewPlaceForm;