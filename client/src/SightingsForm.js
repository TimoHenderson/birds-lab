import { useState } from "react";
import { postSighting } from "./SightingService";
import { putSighting } from "./SightingService";

const SightingsForm = ({ addSighting, updateSighting, sighting, toggleForm }) => {

    const [formData, setFormData] = useState(sighting ? { ...sighting } : {})



    const onChange = (e) => {
        const newFormData = { ...formData }
        newFormData[e.target.id] = e.target.value;
        setFormData(newFormData);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (!sighting) {
            postSighting(formData).then((data) => {
                addSighting(data);
            })
        } else {
            putSighting(formData).then((data) => {

                updateSighting(sighting._id);
            })
            toggleForm()
        }

    }

    return (
        <form onSubmit={onSubmit} id="sightings-form" >
            <h2>{sighting ? "Update" : "Add a"} Sighting</h2>
            <div className="formWrap">
                <label htmlFor="species">Species:</label>
                <input onChange={onChange} type="text" id="species" value={formData.species} />
            </div>
            <div className="formWrap">
                <label htmlFor="location">Location:</label>
                <input onChange={onChange} type="text" id="location" value={formData.location} />
            </div>
            <div className="formWrap">
                <label htmlFor="date">Date:</label>
                <input onChange={onChange} type="date" id="date" value={formData.date} />
            </div>

            <input type="submit" value="Save" id="save" />
        </form>

    );
}

export default SightingsForm;