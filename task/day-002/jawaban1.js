const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Masukkan nilai:\n> ', nilai => {
    switch (true) {
        case nilai >= 90:
            console.log('A');
            break;
        case nilai >= 80 && nilai <= 89:
            console.log('B');
            break;
        case nilai >= 70 && nilai <= 79 :
            console.log('C');
            break;
        case nilai >= 60 && nilai <= 69:
            console.log('D');
            break;
        case nilai <= 59 :
            console.log('E');
            break;
        default:
            console.log('Input tidak valid');
            break;
    }
    
    readline.close();
  });