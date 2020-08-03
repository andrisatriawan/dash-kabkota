var ajaxku = ajax();

function getKab(id) {
	var url = `http://localhost/kabkota/settings/getKab/${id}`;
	ajaxku.onreadystatechange = function () {
		if (ajaxku.readyState == 4) {
			if (ajaxku.responseText.length >= 0) {
				document.getElementById("kab").innerHTML = ajaxku.responseText;
			} else {
				document.getElementById("kab").innerHTML = "<option value=''>Pilih</option>";
			}
		}
	}
	ajaxku.open("GET", url, true);
	ajaxku.send(null);
}

function ajax() {
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	}
	if (window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
	return null;
}
