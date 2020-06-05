teisendaKuupäevaSõneObjektiks = function(sõne) {
  var veateade = ' Esita kuupäev formaadis "PP.KK.AAAA"!';

  if (typeof sõne != "string") throw "Sisestatud väärtus peab olema sõne!" + veateade;
  
  if (sõne.length != 10) throw "Vale pikkus!" + veateade;

  var punktideKontroll = sõne.slice(2, 3) + sõne.slice(5, 6);
  if (punktideKontroll != "..") throw "Vale formaat!" + veateade;

  var päev = Number(sõne.slice(0, 2));
  if (!(päev <= 31 && päev >= 1)) throw "Päevade väärtus peab olema 1 ja 31 vahel!" + veateade;
  
  var kuu = Number(sõne.slice(3, 5)) - 1;
  if (!(kuu <= 11 && kuu >= 0)) throw "Kuude väärtus peab olema 1 ja 12 vahel!" + veateade;

  var aasta = Number(sõne.slice(6, 10));
  if (isNaN(aasta)) throw "Aastate väärtus ei ole number!" + veateade;

  return new Date(aasta, kuu, päev);
}

teisendaKuupäevaObjektSõneks = function(dateObjekt) {
  if (!(dateObjekt instanceof Date)) throw "Sisesta Date objekt!";
  if (isNaN(dateObjekt)) throw "Date objekt pole valiidne!";

  var päev = String(dateObjekt.getDate());
  if (päev.length < 2) päev = "0" + päev;
  
  var kuu = String(dateObjekt.getMonth() + 1);
  if (kuu.length < 2) kuu = "0" + kuu;
  
  var aasta = String(dateObjekt.getFullYear());
  if (aasta < 0) throw ("Aasta väärtus ei saa olla negatiivne!");
  
  return päev + "." + kuu + "." + aasta;
}



