
function tampil_menu_utama() {
    $.ajax({
        type: 'GET',
        url: '<?= base_url() ?>settings/allmenu_utama',
        async: true,
        dataType: 'json',
        success: function (data) {
            var html = '';
            var i;
            var j = 1;
            for (i = 0; i < data.length; i++) {
                html += '<tr>' +
                    '<form method="post" id="form-menu-utama-' + data[i].id_menu_utama + '">' +
                    '<td class="text-center">' + j + '</td>' +
                    '<td><input type="text" class="form-control" id="judul-menu-utama-edit-' + data[i].id_menu_utama + '" name="judul_menu_utama_edit" placeholder="Judul Menu Utama" value="' + data[i].judul_menu_utama + '"></td>' +
                    '<td class="text-center">' +
                    '<button type="button" class="btn btn-primary" onclick="simpanMenuUtama(' + data[i].id_menu_utama + ')">' +
                    '<i class="fas fa-save"></i></button>' +
                    '<button type="button" class="btn ml-2 btn-danger" onclick="hapusMenuUtama(' + data[i].id_menu_utama + ')">' +
                    '<i class="fas fa-trash"></i></button>' +
                    '</td>' +
                    '</form>' +
                    '</tr>';
                j++;
            }
            html += '<tr>' +
                '<form method="post" id="simpan-menu-utama">' +
                '<td class="text-center"> ' + j + ' </td>' +
                '<td>' +
                '<input type="text" class="form-control" name="judul_menu_utama_baru" id="judul_menu_utama_baru" placeholder="Judul Menu Utama">' +
                '</td>' +
                '<td class="text-center">' +
                '<button class="btn btn-primary" id="tombol-simpan-menuutama">' +
                '<i class="fas fa-save"></i> Simpan' +
                '</button>' +
                '</td>' +
                '</form>' +
                '</tr>';
            $('#tampil_menu_utama').html(html);

            $('#tombol-simpan-menuutama').click(function () {
                simpanMenuUtamaBaru();
            });
        }
    });
}

function simpanMenuUtama(id) {
    var url1 = '<?= base_url() ?>';
    var judul_menu_utama_edit = $('#judul-menu-utama-edit-' + id).val();
    $.ajax({
        type: 'POST',
        url: url1 + 'menuutama/edit/' + id,
        dataType: "JSON",
        data: {
            judul_menu_utama_edit: judul_menu_utama_edit
        },
        success: function () {
            alert('Berhasil diubah');
            tampil_menu_utama();
        }
    });
}

function hapusMenuUtama(id) {
    var data = $('#form-menu-utama-' + id).serialize();
    var url1 = '<?= base_url() ?>';
    $.ajax({
        type: 'POST',
        url: url1 + 'menuutama/hapus/' + id,
        data: data,
        success: function () {
            alert('Berhasil di hapus');
            tampil_menu_utama();
        }
    });
}

function simpanMenuUtamaBaru() {
    var url1 = '<?= base_url() ?>';
    var judul_menu_utama_baru = $('#judul_menu_utama_baru').val();
    $.ajax({
        type: 'POST',
        url: url1 + 'menuutama/save',
        dataType: "JSON",
        data: {
            judul_menu_utama_baru: judul_menu_utama_baru
        },
        success: function () {
            alert('Berhasil disimpan');
            tampil_menu_utama();
        }
    });
}