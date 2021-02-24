const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Masukkan nilai:\n> ', nilai => {
    switch (true) {
        case nilai % 2 === 1:
            console.log('Ganjil');
            break;
        default:
            console.log('Genap')
            break;
    }
    
    readline.close();
  });