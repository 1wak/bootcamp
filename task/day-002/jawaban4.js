const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question('Masukkan tahun: \n> ', tahun => {
      const k = 'Ini tahun kabisat';
      const nk = 'Ini bukan tahun kabisat';
      if (tahun % 400 === 0){
          console.log(k);
      } else if (tahun % 100 === 0) {
        console.log(nk)
      } else if (tahun % 4 === 0) {
          console.log(k)
      } else {
        console.log(nk)
    }
        // if(tahun % 4 === 0) {
        //     console.log('Ini tahun kabisat');
        // } else {
        //     console.log('Ini bukan tahun kabisat');
        // }
    readline.close();
  })

//   if year is divisible by 400 then is_leap_year
// else if year is divisible by 100 then not_leap_year
// else if year is divisible by 4 then is_leap_year
// else not_leap_year