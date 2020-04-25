class Isik {
	constructor(eesnimi, perenimi, isikukood) {
		isikukood = isikukood.toString();
		var isikukoodiError = this.kontrolliIsikukood(isikukood);
		if (isikukoodiError != true) {
			alert(isikukoodiError);
			return false;
		}

		this.eesnimi = eesnimi;
		this.perenimi = perenimi;
		
		this.sugu = this.leiaSugu(isikukood);
		this.vanus = this.leiaVanus(isikukood);
	}

	leiaSugu(isikukood) {
		if (isikukood[0] % 2 == 0) return "naine";
		else return "mees";
	}

	leiaVanus(isikukood) {
		var sünniaasta = Number("18" + isikukood.slice(1, 3));
		if (isikukood[0] > 2) sünniaasta += 100;
		if (isikukood[0] > 4) sünniaasta += 100;

		var sünnikuu = isikukood.slice(3, 5) - 1;
		var sünnipäev = isikukood.slice(5, 7);
		var praeguneKuupäev = new Date();
		var sünniKuupäev = new Date(sünniaasta, sünnikuu, sünnipäev);

		var vanus = praeguneKuupäev.getFullYear() - sünniKuupäev.getFullYear();
		var kuudeErinevus = praeguneKuupäev.getMonth() - sünniKuupäev.getMonth();
		var päevadeErinevus = praeguneKuupäev.getDate() - sünniKuupäev.getDate();
		if (kuudeErinevus < 0 || (kuudeErinevus == 0 && päevadeErinevus < 0)) vanus -=1;
		return vanus; 
	}

	kontrolliIsikukood(isikukood) {
		if (isNaN(isikukood)) return "Isikukood pole number!";
		if (isikukood.length != 11) return "Isikukoodi pikkus vale!";
		if (isikukood[0] < 1 || isikukood[0] > 6) return "Isikukoodi esimene number peab olema 1 ja 6 vahel!";
		return true;
	}
}