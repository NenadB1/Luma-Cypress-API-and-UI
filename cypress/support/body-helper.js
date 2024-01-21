
export const bodyPostAddPet = () => {
    return {

        "id": 5,
        "category": {
            "id": 0,
            "name": "zuca"
        },
        "name": "doggie",
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
        "status": "available"

    }
}

export const bodyPutUpdatePet = () => {
    return {

        "id": 5,
        "category": {
            "id": 0,
            "name": "Dog"
        },
        "name": "Slavko",
        "photoUrls": [
            "////"
        ],
        "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
        "status": "string"

    }
}