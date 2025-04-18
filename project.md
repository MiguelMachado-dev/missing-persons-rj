Quando clicar em "Ver detalhes", deve-se abrir uma modal.
A Modal faz requisição para o endpoint `https://desaparecidos-api.pcivil.rj.gov.br/missings/${id}`

Retorno da API:
```json
{
  "id": 1111,
  "name": " ALAN ALMEIDA DA SILVA ",
  "mother": "CRISTINA PINTO DE ALMEIDA ",
  "father": null,
  "age": 35,
  "eyeColor": null,
  "hairColor": null,
  "skinColor": null,
  "scar": null,
  "tattoo": null,
  "clothing": null,
  "placeOfDisappearance": "ENGENHO DA RAINHA ",
  "dateOfDisappearance": "2025-03-23T03:00:00.000Z",
  "obs": "957.00417.2025 DDPA",
  "photo": "base64String",
  "isSocialPic": false,
  "isFound": false,
  "isDead": false,
  "isActive": true,
  "createdBy": 10,
  "createdAt": "2025-03-24T15:13:15.000Z",
  "updatedBy": null,
  "updatedAt": null,
  "idSCO": null
}
```

Exiba as informações sobre a pessoa na Modal.

---

eyeColor, skinColor e hairColor são números, e seus resultados podem ser pegos na API:
https://desaparecidos-api.pcivil.rj.gov.br/domains/eye-color
https://desaparecidos-api.pcivil.rj.gov.br/domains/skin-color
https://desaparecidos-api.pcivil.rj.gov.br/domains/hair-color

Ambas APIs tem o retorno
```json
[
    {
        "id": number, // 1, 2, 3, 4 (numero que vem no detalhe das pessoas)
        "desc": string // Azuis, Castanho claro, etc
    }
]
```

Faça a requisição dessas 3 APIs ao entrar na página e as cacheie usando react-query, assim, quando abrir a Modal, teremos essa informação lá
E não precisaremos fazer sempre, pois essa lista raramente muda.