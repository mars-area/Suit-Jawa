var tanya = true;
while( tanya ){
    // menangkap pilihan user
    var p = prompt( 'pilih : gajah, semut, orang' );
    // menangkap pilihan computer
    // bangkitkan bilangan random
    var comp = Math.random();
    if( comp < 0.34) {
        comp = 'gajah';
    } else if( comp >= 0.34 && comp < 0.67 ) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }
    // menentukan rules
    var hasil = '';
    if( p == comp ) {
        hasil = 'SERI';
        alert('SERI!');
    } else if( p == 'gajah' ) {
        hasil = ( comp == 'orang' ) ? 'MENANG' : 'KALAH';
    } else if( p == 'orang' ) {
        hasil = ( comp == 'gajah' ) ? 'KALAH' : 'MENANG';
    } else if( p == 'semut' ) {
        hasil = ( comp == 'orang' ) ? 'KALAH' : 'MENANG';
    } else {
        hasil = 'Memasukan pilihan yang salah';
    }
    // tampilkan hasil
    alert('Kamu memilih : ' + p + ' \nKomputer memilih : ' + comp + '\n\nMaka hasilnya : Kamu ' + hasil );

    tanya = confirm('lagi?');
}
// tampilkan terima kasih
alert('Terima Kasih sudah bermain');
