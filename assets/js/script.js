function cekinput(id, pesan) {
    input = id;
    pesan1 = document.getElementById(pesan);
    if (input.length == 0) {
        pesan1.style.display = 'inline';
    } else {
        pesan1.style.display = 'none';
    }
}