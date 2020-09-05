# Intro to Node.js

## Exerctiul 0
- git clone https://github.com/cosminDCG/intro_node.git
- Deschideti proiectul si in folderul intro_node rulati `npm install`
- `cd app` si apoi `node index` ca sa verificam ca totul a functionat ok (tot ce tine de index.js discutam pe larg mai tarziu)

## Exercitiul 1
- `cd ..` (ne intoarcem in directorul principal)
- Aici cerati urmatoarea structura
```
intro_node
  |_ app
  |_ exercitii
      |_ exercitiul_1
```
- In folderul exercitiul_1 adaugati un fisier numit **input.txt** care sa contina textul *Data de astazi este:*
- In acelasi folder adaugati un fisier numit **process.js** 
- In continuare vom citi din fisier, vom edita textul si il vom scrie in fisierul **output.txt**
- Dupa ce terminam de rezolvat, ca sa rulam, mergem in folderul cu exercitiul `cd app/exercitii/exercitiul_1` si rulam `node process`

## Exercitiul 2
- Dupa modelul de la exercitiul 2, cream folderul exercitiul_2
- In el adaugam fisierul **data.json** care va contine:
```
{
    "nume": "exemplu nume",
    "dataNastere": "zdd/mm/yyyy",
    "facultate": {
        "nume": "nume facultate",
        "oras": "exemplu oras"
    },
    "cursuri": ["Angular", "Java"]
}
```
- Adaugam fisierul **jsonHandler.js**
- Vom completa fisierul cu datele noastre si il vom rescrie

## Exercitiul 3
- Ne vom folosi tot de fisierul exercitiul_
- Adaugam in el si fisierul **jsonProcess.js**
- Vom muta functia processJson din jsonHandler.js in jsonProcess.js
- Importam (cu require) jsonHandler in jsonProcess
- Rulam programul

## Exercitiul 4
- Creati structura de foldere
```
intro_node
  |_ app
      |_ controllers
      |_ dto
      |_ services
      |_ utils
```
- In folderul utils vom crea fisierul **Utils.js**
- Folosindu-ne de exercitile 2 si 3, vom crea 3 metode care sa ne ajute sa simulam baza de date cu care vom lucra in continuare

## Exercitiul 5
- Implemenati si voi functionalitatea de register, pas cu pas
- Dupa modelul de la register, facem si loginul, dupa cum urmeaza:
    - Cream ruta
    - Cream serviciul
    - In serviciu, verificam daca userul exista (in caz contrar creati si aruncati o eroare), daca exista, verificati parola (daca nu este corecta, creati si aruncati o eroare)
    - Daca toate conditiile sunt indeplinite, generati un token

## Exercitiul 6
- Implementati si voi functionalitatea de adaugare postare

## Exercitiul 7
- Dupa modelul de la exercitiul 5, creati functionalitatea de getAllPosts
- Verificati atat din postman, cat si apeland din FE
