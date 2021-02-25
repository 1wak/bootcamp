const storage = {
  beli(stok) {
    this.qty -= stok;
    console.log(`Item ${this.title}, telah beli`);
  },
  refill(stok) {
    this.qty += stok;
    console.log(`Item ${this.title}, telah refill`);
  },
  retur(stok) {
    this.qty -= stok;
    console.log(`Barang ${this.title}, di retur...`);
  },
};

function Barang(title, qty) {
  let barang = {};
  barang.title = title;
  barang.qty = qty;
  barang.refill = storage.refill;
  barang.beli = storage.beli;
  barang.retur = storage.retur;

  return barang;
}

let shampoo = Barang("shampoo", 10000);
let rokok = Barang("rokok", 30000);
let tissue = Barang("tissue", 3000);
