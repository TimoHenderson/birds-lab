import { useState } from 'react'
import { deleteSighting } from "./SightingService"
import SightingsForm from './SightingsForm';

const SightingCard = ({ sighting, removeSighting, updateSighting }) => {
    const [updateForm, setUpdateForm] = useState(false);


    console.log(sighting);
    const handleDelete = () => {
        deleteSighting(sighting._id).then(() => {
            removeSighting(sighting._id);
        })
    }

    const toggleForm = () => {
        setUpdateForm(!updateForm);
    }
    if (!updateForm) {
        return (
            <>
                <h1>{sighting.species}</h1>
                <p>Location: {sighting.location}</p>
                <p>Date: {sighting.date}</p>
                <button onClick={handleDelete}> 🗑 </button>
                <button onClick={toggleForm}> Update </button>
                <hr></hr>
            </>
        )
    } else {
        return (
            <>
                <SightingsForm sighting={sighting} updateSighting={updateSighting} toggleForm={toggleForm} />
                <button onClick={toggleForm}> Cancel </button>
            </>
        )
    }
}

export default SightingCard;