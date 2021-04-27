# PetPet

Generates PetPet meme

**URL** : `/api/petpet`

**Method** : `GET`

**Auth required** : NO

**Data constraints**

```json
{
    "image": "[Image URL]"
}
```

**Data example**

```json
{
    "image": "https://picsum.photos/512"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

![PetPet example image](/api/petpet?image=https://picsum.photos/512)