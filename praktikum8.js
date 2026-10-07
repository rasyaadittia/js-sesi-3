const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("=== PROGRAM MENGHITUNG KALORI ===");

rl.question("Masukkan nama: ", (nama) => {
  rl.question("Lama lari (menit): ", (lari) => {
    rl.question("Lama push-up (menit): ", (pushup) => {
      rl.question("Lama plank (menit): ", (plank) => {
        lari = Number(lari);
        pushup = Number(pushup);
        plank = Number(plank);

        // Kalori per menit
        const kaloriLari = 60 / 5;
        const kaloriPushup = 200 / 30;
        const kaloriPlank = 5;

        // Menghitung kalori masing-masing olahraga
        const hasilLari = lari * kaloriLari;
        const hasilPushup = pushup * kaloriPushup;
        const hasilPlank = plank * kaloriPlank;

        // Total kalori
        const totalKalori = hasilLari + hasilPushup + hasilPlank;

        console.log("\n=== HASIL PERHITUNGAN ===");
        console.log("Nama           :", nama);
        console.log("Kalori dari lari    :", hasilLari, "kalori");
        console.log("Kalori dari push-up :", hasilPushup, "kalori");
        console.log("Kalori dari plank   :", hasilPlank, "kalori");
        console.log("------------------------------");
        console.log("Total kalori        :", totalKalori, "kalori");

        rl.close();
      });
    });
  });
});
