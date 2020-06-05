class Ratas {
  constructor(Id, liik, hind, viivis = 1) {
    this.Id = Id;
    this.liik = liik;
    this.hind = hind,
    this.viivis = 1; //viivis antud protsentides päevahinnast

    this.laenatud = null;
    this.plaanTagastus = null;
    this.tagastatud = null;
  }

  laenuta(algkuupäev, lõpukuupäev) {
    try {
      var veaAsukoht = "algkuupäev";
      var algkuupäevObjekt = teisendaKuupäevaSõneObjektiks(algkuupäev);
      veaAsukoht = "lõpukuupäev";
      var lõpukuupäevObjekt = teisendaKuupäevaSõneObjektiks(lõpukuupäev);
    }
    catch(viga) {
      throw "Vigane " + veaAsukoht + "! " + viga;
    }

    if (this.laenatud == null || (this.tagastatud instanceof Date && algkuupäevObjekt > this.tagastatud)) {
      this.laenatud = algkuupäevObjekt;
      this.plaanTagastus = lõpukuupäevObjekt;
      this.tagastatud = null;
      return true;
    }
    else {
      console.log("Laenutamine ebaõnnestus");
      return false;
    }

  } 

  tagasta(kuupäev) {
    var kuupäevObjekt = teisendaKuupäevaSõneObjektiks(kuupäev);
    if (this.laenatud instanceof Date && this.laenatud < kuupäevObjekt) {
      this.tagastatud = kuupäevObjekt;
      
      var planeeritudPäevadeArv = (this.plaanTagastus - this.laenatud) / 86400000;
      
      var hilinenudPäevadeArv = 0;
      if (this.tagastatud > this.plaanTagastus) hilinenudPäevadeArv = (this.tagastatud - this.plaanTagastus) / 86400000;
  

      var makstavSumma = this.hind * (planeeritudPäevadeArv + hilinenudPäevadeArv * this.viivis / 100);
      return Math.round(makstavSumma * 100) / 100
    }
    else {
      console.log("Tagastamine ebaõnnestus");
      return false;
    }
    
  }


}

