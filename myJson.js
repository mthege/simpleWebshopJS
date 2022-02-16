const myJSON =
    '{"products":[' +
    '{"id":"1","name":"Vanessa","price":120,"image":"img/bag1.webp","color":"Forest green","size":"10","theme":"Shoulder bag" },' +
    '{"id":"2","name":"Emilia","price":125,"image":"img/bag2.webp","color":"Lake green","size":"10","theme":"Computer bag" },' +
    '{"id":"3","name":"Jonna","price":130,"image":"img/bag3.webp","color":"Meadow green","size":"10","theme":"Everyday bag" },' +
    '{"id":"4","name":"Nora","price":115,"image":"img/bag4.webp","color":"Seagrass","size":"10","theme":"Work bag" },' +
    '{"id":"5","name":"Fiona","price":120,"image":"img/bag5.webp","color":"Leaf green","size":"10","theme":"Rucksack" },' +
    '{"id":"6","name":"Cleo","price":125,"image":"img/bag6.webp","color":"Christmas green","size":"10","theme":"Party bag" }]}';

window.localStorage.setItem("mydb", myJSON);