# Spongebob

Generates PetPet meme

**URL** : `/api/spongebob`

**Method** : `GET`

**Auth required** : NO

**Data constraints**

```json
{
    "text1": "[Plain text]",
    "text2": "[Plain text]",
    "text3": "[Plain text]"
}
```

**Data example**

```json
{
    "text1": "Search",
    "text2": "search autocomplete 1",
    "text3": "search autocomplete 2"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

![PetPet example image](/api/googleautocomplete?text1=search&text2=search%20autocomplete%201&text3=search%20autocomplete%202)