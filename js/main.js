/*
Stwórz prostą stronę, na której znajdzie się:

- Nagłówek h1 o treści "Tytuł strony" 
- Paragraf o identyfikatorze "tekst" 
- Button o id "dodaj" 
- Button o id "usun"

Do projektu dołącz plik css, w którym ustal wygląd Twojej strony - stylowanie dowolne.

Następnie stwórz folder "js", a w nim plik "main.js" i podepnij go w pliku html.

Twoim zadaniem jest napisać dwie funkcje działające po kliknięciu buttonów:

1. Button #dodaj - po jego kliknięciu w paragrafie powinien pojawić się tekst "Akademia 108".
2. Button #usun - po kliknięciu tekst w paragrafie ma znikać

Pliki wgraj do zdalnego repozytorium i podeślij link do sprawdzenia.
*/


function add()
{
   document.getElementById("tekst").textContent = "Akademia 108"; 
    console.log("add presed");
}

function del()
{
   document.getElementById("tekst").textContent = ""; 
    onsole.log("del presed");
}


document.getElementById("add").onclick = add;
document.getElementById("del").onclick = del;