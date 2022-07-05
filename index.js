// Data Structure And Algorithm Test

// Dodi  mempunyai uang coin sejumlah 10, 5, 2, 3, 6, 7 dan ingin membeli barang seharga 23 coin
// dengan biaya transaksi 0.5 coin per tiap coin, sebutkan coin yang di perlukan berdasarkan biaya
// transaksi termurah, sebutkan sisa coin yang dimiliki dan biaya transaksi nya.

function pembelian( harga,arr ) {
    let sisaCoin = [];
    let coin = [];
    let biayaTransaksi = 0;
    let arrTemp = arr.sort (function (a,b){
        return b-a ;
    });
    arrTemp.forEach (function ( item, idx ) {
        harga += 0.5;
        if (harga > 0) {
            harga -= item;
            coin.push ( item ) ;
            if (harga < 0) {
                sisaCoin.push(Math.abs(harga))
            }
            biayaTransaksi += 0.5;
        } else {
            sisaCoin.push( item )
        }
    }); 
    return { coin, sisaCoin, biayaTransaksi }
}
 
console.log (pembelian ( 23, [ 10, 5, 2, 3, 6, 7 ] ));

module.export = pembelian;

// Hasil Console Log
// { coin: [ 10, 7, 6, 5 ], sisaCoin: [ 3, 3, 2 ], biayaTransaksi: 2 }
