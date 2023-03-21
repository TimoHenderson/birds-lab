const baseURL = 'http://localhost:5000/api/sightings/'

export const getSightings = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const getSighting = (id) => {
    return fetch(baseURL + id)
        .then(res => res.json())
}

export const postSighting = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
}

export const deleteSighting = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

export const putSighting = (data) => {
    const id = data._id;
    const payload = { ...data };
    delete payload._id;
    return fetch(baseURL + id, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
}

