const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Masukkan angka: \n> ', angka => {
    let _angka = 0;
    let _base = 1;
    while(_base <= angka){
        _angka += _base;
        _base++;
    }
    console.log('> ',_angka)

    readline.close();
})