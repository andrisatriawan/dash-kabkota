<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
	<meta name="description" content="" />
	<meta name="author" content="" />
	<title><?= $header; ?></title>

	<!-- loader-->
	<link href="<?= base_url() ?>assets/css/pace.min.css" rel="stylesheet" />
	<script src="<?= base_url() ?>assets/js/pace.min.js"></script>
	<!--favicon-->
	<link rel="icon" href="<?= base_url('assets/images/logo-kab/') . $logo ?>" type="image/x-icon">

	<!-- simplebar CSS-->
	<link href="<?= base_url() ?>assets/plugins/simplebar/css/simplebar.css" rel="stylesheet" />
	<!-- Bootstrap core CSS-->
	<link href="<?= base_url() ?>assets/css/bootstrap.min.css" rel="stylesheet" />
	<!-- animate CSS-->
	<link href="<?= base_url() ?>assets/css/animate.css" rel="stylesheet" type="text/css" />
	<!-- Icons CSS-->
	<link href="<?= base_url() ?>assets/css/icons.css" rel="stylesheet" type="text/css" />
	<!-- Sidebar CSS-->
	<link href="<?= base_url() ?>assets/css/sidebar-menu.css" rel="stylesheet" />
	<!-- Custom Style-->
	<link href="<?= base_url() ?>assets/css/app-style.css" rel="stylesheet" />
	<link href="<?= base_url() ?>assets/css/style.css" rel="stylesheet" />
	<!-- Font Awesome -->
	<link href="<?= base_url() ?>assets/css/fa/css/all.css" rel="stylesheet" />
	<!-- JQuery -->
	<script src="<?= base_url() ?>assets/js/jquery.min.js"></script>
	<!-- Data Tables -->
	<link rel="stylesheet" type="text/css" href="<?= base_url() ?>assets/plugins/DataTables/datatables.min.css" />
	<script type="text/javascript" src="<?= base_url() ?>assets/plugins/DataTables/datatables.min.js"></script>
	<!-- <script type="text/javascript" src="<?= base_url() ?>assets/js/menu_utama.js"></script> -->
	<script src="<?= base_url() ?>assets/js/tinymce/tinymce.min.js" referrerpolicy="origin"></script>
	<script type="text/javascript">
		$(document).ready(function() {
			$('table').DataTable();
		});

		const BASE_URL = '<?= base_url() ?>';

		function tampil_menu_utama() {
			$.ajax({
				type: 'GET',
				url: BASE_URL + 'settings/allmenu_utama',
				async: true,
				dataType: 'json',
				success: function(data) {
					var html = '';
					var i;
					var j = 1;
					html += `<table class="table table-hover" id="tabel-menu-utama">
                        <thead>
                            <tr class="text-center">
                                <th>#</th>
                                <th>Judul</th>
                                <th>Aksi</th>
                            </tr>
						</thead>
						<tbody id="tampil_menu_utama">`;
					for (i = 0; i < data.length; i++) {
						html += '<tr>' +
							'<td class="text-center">' + j + '</td>' +
							'<td><input type="text" class="form-control" id="judul-menu-utama-edit-' + data[i].id_menu_utama + '" name="judul_menu_utama_edit" placeholder="Judul Menu Utama" value="' + data[i].judul_menu_utama + '"></td>' +
							'<td class="text-center">' +
							'<button type="button" class="btn btn-primary" onclick="simpanMenuUtama(' + data[i].id_menu_utama + ')">' +
							'<i class="fas fa-save"></i></button>' +
							'<button type="button" class="btn ml-2 btn-danger" onclick="hapusMenuUtama(' + data[i].id_menu_utama + ')">' +
							'<i class="fas fa-trash"></i></button>' +
							'</td>' +
							'</tr>';
						j++;
					}
					html += '<tr>' +
						'<td class="text-center"> ' + j + ' </td>' +
						'<td>' +
						'<input type="text" class="form-control" name="judul_menu_utama_baru" id="judul_menu_utama_baru" placeholder="Judul Menu Utama">' +
						'</td>' +
						'<td class="text-center">' +
						'<button class="btn btn-primary" id="tombol-simpan-menuutama">' +
						'<i class="fas fa-save"></i> Simpan' +
						'</button>' +
						'</td>' +
						'</tr>';
					html += `</tbody>
                    </table>`;
					$('#menu-utama-table').html(html);
					$('#tabel-menu-utama').DataTable();
					$('#tombol-simpan-menuutama').click(function() {
						simpanMenuUtamaBaru();
					});
				}
			});
		}

		function simpanMenuUtamaBaru() {
			var judul_menu_utama_baru = $('#judul_menu_utama_baru').val();
			$.ajax({
				type: 'POST',
				url: BASE_URL + 'menuutama/save',
				dataType: "JSON",
				data: {
					judul_menu_utama_baru: judul_menu_utama_baru
				},
				success: function() {
					alert('Berhasil disimpan');
					tampil_menu_utama();
				}
			});
		}

		function simpanMenuUtama(id) {
			var judul_menu_utama_edit = $('#judul-menu-utama-edit-' + id).val();
			$.ajax({
				type: 'POST',
				url: BASE_URL + 'menuutama/edit/' + id,
				dataType: "JSON",
				data: {
					judul_menu_utama_edit: judul_menu_utama_edit
				},
				success: function() {
					alert('Berhasil diubah');
					tampil_menu_utama();
				}
			});
		}

		function hapusMenuUtama(id) {
			var data = $('#form-menu-utama-' + id).serialize();
			$.ajax({
				type: 'POST',
				url: BASE_URL + 'menuutama/hapus/' + id,
				data: data,
				success: function() {
					alert('Berhasil di hapus');
					tampil_menu_utama();
				}
			});
		}

		tinymce.init({
			selector: 'textarea#page-input',
			height: 500,
			menubar: true,
			setup: function(editor) {
				editor.on('change', function() {
					editor.save();
				});
			},
			plugins: [
				'advlist autolink lists link image charmap print preview anchor',
				'searchreplace visualblocks code fullscreen',
				'insertdatetime media table paste code help wordcount'
			],
			toolbar: 'undo redo | formatselect | ' +
				'bold italic backcolor | alignleft aligncenter ' +
				'alignright alignjustify | bullist numlist outdent indent | ' +
				'removeformat | help',
			content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
		});
	</script>

</head>

<body class="bg-theme bg-theme9" style="height: 100%;">