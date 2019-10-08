class Config {
    constructor(_senjata, _darah, _damage){
        this._senjata = _senjata;
        this._darah = _darah;
        this._damage = _damage
        this._delay = null;
    }
    get senjata (){
        // Getter seharusnya berisi return property yang ditujukan.
        // Bukan penugasan
        return this._senjata;
    }
    set senjata(senjata){
        return this._senjata = senjata
    }
    darah(){
        let time = setInterval(() => {
            if(this._darah < 1){
                document.getElementById("winner").style.transition = "1s"
                document.getElementById("winner").style.display = "block"
                clearInterval(time)
            } else {
                this._darah = parseInt(this._darah)-(parseInt(this._damage)*0.05)
                document.getElementById("darah").style.width = `${this._darah}%`
            }
        }, this._delay*1000);
    }
    isValid (){
        return this._senjata !== "" && this._darah !== "" && this._senjata !== null && this._darah !== null
    }
}

class Eksekusi extends Config {
    constructor(_senjata, _darah, _damage, _delay){
        super(_senjata, _darah, _damage)
        this._delay = _delay
    }
    mainkan(){
        if(this.isValid(this._damage)){
            if(this._senjata == "AKM-47") document.getElementById("pahlawan").innerHTML = `<img src="./images/akm.gif" style="transform: rotateY(180deg); width: 100%;">`
            else document.getElementById("pahlawan").innerHTML = `<img src="./images/perang.gif" style="width: 85%; margin-top: 30%;">`
            document.getElementById("pemberontak").innerHTML = `
                <img src="./images/images.jpg" style="width: 53%; margin-left: 25%;"/>
                <div class="darah-box">
                    <div id="darah"></div>
                </div>  
            `
            this.darah()
        }
    }
    isValid (validasi){
        // Kalo static method seharusnya tidak memanggil property sendiri
        // Kalo memanggil property sendiri method tersebut bukan lagi static melainkan self method
        return this.validasi !== "" && this.validasi !== null ? validasi : 0
    }
}
let namaSenjata, darah, damage, delay;
let senjata = prompt("Silahkan Pilih Senjata\nMasukan Nomor Senjata :\n1. AKM\n2. Sniper")
function exeMain(senjata){
    if(Eksekusi.isValid(senjata)) {
        if(senjata == 1 || senjata == "akm"){
            namaSenjata = "AKM-47" , darah = 100, damage = 300 ,delay = 3
            let eksekusi = new Eksekusi (namaSenjata, darah, damage, delay)
            eksekusi.mainkan()
        } else if(senjata == 2 || senjata == "Sniper"){
            namaSenjata = "Baretta" , darah = 100, damage = 600 ,delay = 8
            let eksekusi = new Eksekusi (namaSenjata, darah, damage, delay)
            eksekusi.mainkan()
        } else {
            senjata = prompt("Error: \nData Yang Anda Masukan Tidak Valid\n\nSilahkan Pilih Senjata\nMasukan Nomor Senjata :\n1. AKM\n2. Sniper")
            exeMain(senjata)
        }
    } else {
        senjata = prompt("Error: \nData Yang Anda Masukan Tidak Valid\n\nSilahkan Pilih Senjata\nMasukan Nomor Senjata :\n1. AKM\n2. Sniper")
        exeMain(senjata)
    }
}
exeMain(senjata);
