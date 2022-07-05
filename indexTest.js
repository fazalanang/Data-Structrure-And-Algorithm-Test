const pembelian = require("./index");

test("coin yang di perlukan berdasarkan biaya transaksi termurah", () => {
  expect(pembelian(23, [10, 5, 2, 3, 6, 7])).toStrictEqual({
    coin: [10, 7, 6, 5],
    sisaCoin: [3, 3, 2],
    biayaTransaksi: 2,
  });
});