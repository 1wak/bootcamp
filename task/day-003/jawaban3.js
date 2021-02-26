function constMurid(nama, nim) {
  this.nama = nama;
  this.nim = nim;
  this.isHadir = false;
  this.nilai = 0;
  this.poin = 0;

  this.absensi = function () {
    this.isHadir = true;
    console.log(`${this.nama} hadir`);
  };
  this.bolos = function () {
    this.isHadir = false;
    console.log(`${this.nama} tidak hadir`);
  };
  this.prestasi = function () {
    this.poin += 100;
    console.log(`${this.nama} mendapat ${this.poin} karena berprestasi`);
  };
  this.nilai = function () {
    this.nilai = Math.floor(Math.random() * 10);
    console.log(`${this.nama} mendapat nilai ${this.nilai}`);
  };
}

const doni = new constMurid("doni", "10");
const dono = new constMurid("dono", "11");
const joomla = new constMurid("joomla", "12");

console.log(doni.absensi());
