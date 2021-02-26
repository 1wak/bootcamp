const murid1 = {
  nama_depan: "Joni",
  nama_belakang: "Oke",
  nim: "1",
  nilai: 0,
  poin: 0,
  isHadir: false,
  absensi() {
    this.isHadir = true;
    console.log(`${this.nama_depan} hadir bu`);
  },
  nilaiUjian() {
    this.nilai += Math.floor(Math.random() * 10);
    console.log(`Nilai ${this.nama_depan} ${this.nilai}`);
  },
  bolos() {
    this.poin -= 20;
    console(`${this.nama_depan} dikurangi poinnya karena bolos.`);
  },
  prestasi() {
    this.poin += 100;
    console.log(
      `Karena berprestasi ${this.nama_depan} mendapatkan ${this.poin}`
    );
  },
};

const murid2 = {
  nama_depan: "Olga",
  nama_belakang: "Syah",
  nim: "2",
  nilai: 0,
  poin: 0,
  isHadir: false,
  absensi() {
    this.isHadir = true;
    console.log(`${this.nama_depan} hadir bu`);
  },
  nilaiUjian() {
    this.nilai += Math.floor(Math.random() * 10);
    console.log(`Nilai ${this.nama_depan} ${this.nilai}`);
  },
  bolos() {
    this.poin -= 20;
    console(`${this.nama_depan} dikurangi poinnya karena bolos.`);
  },
  prestasi() {
    this.poin += 100;
    console.log(
      `Karena berprestasi ${this.nama_depan} mendapatkan ${this.poin}`
    );
  },
};

const murid3 = {
  nama_depan: "Isyana",
  nama_belakang: "Sarasehan",
  nim: "3",
  nilai: 0,
  poin: 0,
  isHadir: false,
  absensi() {
    this.isHadir = true;
    console.log(`${this.nama_depan} hadir bu`);
  },
  nilaiUjian() {
    this.nilai += Math.floor(Math.random() * 10);
    console.log(`Nilai ${this.nama_depan} ${this.nilai}`);
  },
  bolos() {
    this.poin -= 20;
    console(`${this.nama_depan} dikurangi poinnya karena bolos.`);
  },
  prestasi() {
    this.poin += 100;
    console.log(
      `Karena berprestasi ${this.nama_depan} mendapatkan ${this.poin}`
    );
  },
};

const murid4 = {
  nama_depan: "Putri",
  nama_belakang: "Tanjung",
  nim: "4",
  nilai: 0,
  poin: 0,
  isHadir: false,
  absensi() {
    this.isHadir = true;
    console.log(`${this.nama_depan} hadir bu`);
  },
  nilaiUjian() {
    this.nilai += Math.floor(Math.random() * 10);
    console.log(`Nilai ${this.nama_depan} ${this.nilai}`);
  },
  bolos() {
    this.poin -= 20;
    console(`${this.nama_depan} dikurangi poinnya karena bolos.`);
  },
  prestasi() {
    this.poin += 100;
    console.log(
      `Karena berprestasi ${this.nama_depan} mendapatkan ${this.poin}`
    );
  },
};

const murid5 = {
  nama_depan: "Rian",
  nama_belakang: "D'massiv",
  nim: "5",
  nilai: 0,
  poin: 0,
  isHadir: false,
  absensi() {
    this.isHadir = true;
    console.log(`${this.nama_depan} hadir bu`);
  },
  nilaiUjian() {
    this.nilai += Math.floor(Math.random() * 10);
    console.log(`Nilai ${this.nama_depan} ${this.nilai}`);
  },
  bolos() {
    this.poin -= 20;
    console(`${this.nama_depan} dikurangi poinnya karena bolos.`);
  },
  prestasi() {
    this.poin += 100;
    console.log(
      `Karena berprestasi ${this.nama_depan} mendapatkan ${this.poin}`
    );
  },
};

const murid6 = {
  nama_depan: "Toni",
  nama_belakang: "Wkwk",
  nim: "6",
  nilai: 0,
  poin: 0,
  isHadir: false,
  absensi() {
    this.isHadir = true;
    console.log(`${this.nama_depan} hadir bu`);
  },
  nilaiUjian() {
    this.nilai += Math.floor(Math.random() * 10);
    console.log(`Nilai ${this.nama_depan} ${this.nilai}`);
  },
  bolos() {
    this.poin -= 20;
    console(`${this.nama_depan} dikurangi poinnya karena bolos.`);
  },
  prestasi() {
    this.poin += 100;
    console.log(
      `Karena berprestasi ${this.nama_depan} mendapatkan ${this.poin}`
    );
  },
};
