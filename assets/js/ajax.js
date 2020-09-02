var ajaxku = ajax();
var protokol = location.protocol;
var slashes = protokol.concat("//");
const base_url = `${slashes.concat(window.location.hostname)}/kabkota/`;

function getKab(id) {
	var url = `${base_url}settings/getKab/${id}`;
	ajaxku.onreadystatechange = function () {
		if (ajaxku.readyState == 4) {
			if (ajaxku.responseText.length >= 0) {
				document.getElementById("kab").innerHTML = ajaxku.responseText;
			} else {
				document.getElementById("kab").innerHTML = "<option value=''>Pilih</option>";
			}
		} else {
			document.getElementById("kab").innerHTML = "<option value=''>Pilih</option>";
		}
	}
	ajaxku.open("GET", url, true);
	ajaxku.send(null);
}

function cekKab(id) {
	var url = `${base_url}settings/cekKab/${id}`;
	ajaxku.onreadystatechange = function () {
		if (ajaxku.readyState == 4) {
			if (ajaxku.responseText.length >= 0) {
				if (ajaxku.responseText == 1) {
					document.getElementById("cek-kab").style.display = 'none';
					alert('Akun sudah ada!');
				} else {
					document.getElementById("cek-kab").style.display = 'inline';
				}
			}
		}
	}
	ajaxku.open("GET", url, true);
	ajaxku.send(null);
}

// function cekUrl(id) {
// 	var url = `${base_url}settings/cekUrl/${id}`;
// 	ajaxku.onreadystatechange = function () {
// 		if (ajaxku.readyState == 4) {
// 			if (ajaxku.responseText.length >= 0) {
// 				if (ajaxku.responseText == 1) {
// 					document.getElementById('pesan-link1').style.display = 'inline';
// 					console.log('tidak aman');
// 				} else {
// 					document.getElementById('pesan-link1').style.display = 'none';
// 					console.log('aman');
// 				}
// 			}
// 		}
// 	}
// 	ajaxku.open("GET", url, true);
// 	ajaxku.send(null);
// }

function ajax() {
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	}
	if (window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
	return null;
}
