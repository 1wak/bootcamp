try {
  let count = prompt("Tulis Angka 20 sampai 30");
  if (count === "") {
    throw new Error("Harap input angka!");
  } else if (count >= 20 && count <= 30) {
    alert("Angka anda benar!");
  } else if (count < 20) {
    throw new Error("Angka anda terlalu rendah");
  } else if (count > 30) {
    throw new Error("Angka anda terlalu tinggi");
  } else {
    throw Error;
  }
} catch (error) {
  alert(error.message);
} finally {
  alert("Lanjutkan");
}
