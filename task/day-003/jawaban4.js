const methodMurid = {
  absensi() {
    this.isHadir = true;
    console.log(`${this.nama} hadir`);
  },
  bolos() {
    this.isHadir = false;
    console.log(`${this.nama} tidak hadir`);
  },
  prestasi() {
    this.poin += 100;
    console.log(`${this.nama} mendapat poin ${this.poin} karena berprestasi`);
  },
};

function thisMurid(nama, nim) {
  let m = Object.create(methodMurid);
  m.nama = nama;
  m.nim = nim;
  m.nilai = 0;
  m.poin = 0;
  m.isHadir = false;

  return m;
}

let joko = thisMurid(`Joko`, "1");
let anwar = thisMurid(`Anwar`, "2");
