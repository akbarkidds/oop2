class Manusia {
    constructor(_nama, _umur, _alamat){
        this._nama = _nama;
        this._umur = _umur;
        this._alamat = _alamat;
    }
    kendaraan(){
        document.write(`${this._nama} Menggunakan Kendaraan Bermotor.`)
    }
    isValid (){
        return this._nama !== "" && this._umur !== ""
    }


}

class Sekolah extends Manusia {
    constructor(_nama, _umur, _alamat ,_kelas){
        super(_nama, _umur, _alamat)
        this._kelas = _kelas
    }
    kendaraan(){
        document.write(`<p>${this._nama} Pergi Sekolah Pakai Motor</p>`)
    }
    isValid (){
        return (this._nama !== "" && this._umur !== "" && this._alamat !== "")
    }
}
let list_siswa = [];
for(let i = 0; i < 3; i++){
    let namaSiswa = prompt("Masukan Nama Siswa :")
    let umurSiswa = prompt("Masukan Umur Siswa :")
    let alamatSiswa = prompt("Masukan Alamat Siswa:")
    let kelasSiswa = prompt("Masukan Kelas Siswa :")
    let sekolah = new Sekolah (namaSiswa, umurSiswa, alamatSiswa, kelasSiswa)
    if(sekolah.isValid()){
        list_siswa.push(sekolah)
    }
}
console.log(list_siswa)