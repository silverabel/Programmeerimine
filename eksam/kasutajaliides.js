var kasutajaLaenutus = laenutus1;
kasutajaLaenutus.idLoendur = 10;

function lisaRatasLaenutusse() {
  var rattaLiik = document.getElementById("rattaLiik").value;
  if (rattaLiik == "Ratta liik") throw "Vali ratta liik!";

  var päevaHind = Number(document.getElementById("päevaHind").value);


  var rattaObjekt = new Ratas(kasutajaLaenutus.idLoendur, rattaLiik, päevaHind);

  kasutajaLaenutus.lisaRatas(rattaObjekt);
  kasutajaLaenutus.idLoendur += 1;
}

document.getElementById("otsingLiigiJärgi").onchange = function() {
  var HTML = "<tr><th>Id</th><th>Päevahind</th><th>Saab laenutada</th></tr>";
  var saabLaenutada = "";

  var ratasteMassiiv = kasutajaLaenutus.otsiLiik(this.value);
  ratasteMassiiv.forEach(rattaObjekt => {
    if (rattaObjekt.laenatud == null || rattaObjekt.tagastatud instanceof Date) {
      saabLaenutada = '<button onclick="laenutaRatas(' + rattaObjekt.Id + ')">Laenuta</button>';
    }
    else saabLaenutada = "Ei saa";

    HTML += "<tr><td>" + rattaObjekt.Id + "</td><td>" + rattaObjekt.hind + "</td><td>" + saabLaenutada +"</td><tr>";  
  });
  document.getElementById("ratasteNimekiri").innerHTML = HTML
}

function laenutaRatas(rattaId) {
  var laenutatavRatas = (kasutajaLaenutus.rattad.filter(rattaObjekt => rattaObjekt.Id == rattaId))[0];

  var algkuupäev = prompt("Sisesta laenutamise algkuupäev formaadis PP.KK.AAAA");
  var lõpukuupäev = prompt("Sisesta laenutamise lõpukuupäev formaadis PP.KK.AAAA");
  
  if (laenutatavRatas.laenuta(algkuupäev, lõpukuupäev)) alert("Edukalt laenutatud");
  else alert("Viga");

  //refreshin nimekirja
  document.getElementById("otsingLiigiJärgi").onchange();
}