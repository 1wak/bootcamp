function Murid(nama, nim) {
  let m = {};
  m.nama = nama;
  m.nim = nim;
  m.isHadir = false;
  m.nilai = 0;
  m.poin = 0;
  m.absensi = function () {
    this.isHadir = true;
    console.log(`${this.nama} hadir bu`);
  };

  m.nilaiUjian = function () {
    this.nilai += Math.floor(Math.random() * 10);
    console.log(`Nilai ${this.nama} ${this.nilai}`);
  };

  m.bolos = function () {
    this.isHadir = false;
    console.log(`${this.nama} tidak hadir`);
  };

  m.prestasi = function () {
    this.poin += 100;
    console.log(`${this.nama} mendapatkan ${this.poin} karena berprestasi`);
  };
  return m;
}

let Lala = new Murid("Lala", "1");
