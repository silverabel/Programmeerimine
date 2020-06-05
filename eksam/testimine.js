console.log(ratas1 = new Ratas(1, "Kross", 10));
console.log(ratas2 = new Ratas(2, "Kross", 15));
console.log(ratas3 = new Ratas(3, "Linn", 20));
console.log(ratas4 = new Ratas(4, "Maastik", 25));

console.log(laenutus1 = new Laenutus)
console.log(laenutus1.lisaRatas(ratas1));
console.log(laenutus1.lisaRatas(ratas2));
console.log(laenutus1.lisaRatas(ratas3));
console.log(laenutus1.lisaRatas(ratas4));

console.log(laenutus1.lisaRatas(ratas1));

console.log(laenutus1.otsiLiik("Kross"));
console.log(laenutus1.otsiLiik("Linn"));
console.log(laenutus1.otsiLiik("Muu"));

console.log(laenutus1.eemaldaRatas(1));
console.log(laenutus1.eemaldaRatas(5));
console.log(laenutus1.otsiLiik("Kross"));

console.log(ratas2.laenuta("04.06.2020", "06.06.2020"));
console.log(ratas2.laenuta("04.06.2020", "06.06.2020"));
console.log(ratas2.tagasta("06.06.2020"));

console.log(ratas2.laenuta("07.06.2020", "08.06.2020"));
console.log(ratas2.tagasta("06.06.2020"));
console.log(ratas2.tagasta("09.06.2020"));

console.log(ratas3.tagasta("09.06.2020"));