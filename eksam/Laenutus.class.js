class Laenutus {
  constructor() {
    this.rattad = [];
  }

  lisaRatas(rattaObjekt) {
    for (var i = 0; i < this.rattad.length; i++) {
      if (this.rattad[i].Id == rattaObjekt.Id) {
        console.log("Sellise Id-ga jalgratas on juba olemas");
        return false;
      }
    }
    this.rattad.push(rattaObjekt);
    return true;
  }

  eemaldaRatas(rattaId) {
    for (var i = 0; i < this.rattad.length; i++) {
      if (this.rattad[i].Id == rattaId) {
        this.rattad.splice(i, 1);
        return true;
      }
    }
    console.log("Sellise id-ga jalgratast pole");
    return false;
  }

  otsiLiik(otsitavLiik) {
    return this.rattad.filter(rattaObjekt => rattaObjekt.liik == otsitavLiik);
  }
}