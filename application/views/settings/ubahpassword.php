<div class="content-wrapper" style="height: 100%;">
    <div class="container-fluid">
        <div class="row mt-3">
            <div class="col-xl-10">
                <div class="card">
                    <div class="card-header bg-light">
                        <h3>Ubah Password</h3>
                    </div>
                    <div class="card-body">
                        <div class="card-content px-3">
                            <form id="form-update">
                                <div class="form-group">
                                    <label for="edit_user">Password Lama</label>
                                    <input type="text" class="form-control" id="edit_user" placeholder="Password Lama" name="edit_user">
                                    <input type="hidden" class="form-control" id="id_user" name="id_user">
                                    <input type="hidden" class="form-control" id="edit_user">
                                </div>
                                <div class="form-group">
                                    <label for="edit_password">Password</label>
                                    <input type="password" class="form-control" id="edit_password" placeholder="Password" name="edit_password" oninput="cekpasswordedit()">
                                    <small class="text-danger pl-3" id="edit_pesan" style="display: none;">Panjang password minimal 8 karakter</small>
                                </div>
                                <div class="form-group mb-4">
                                    <label for="edit_password1">Ulangi Password</label>
                                    <input type="password" class="form-control" id="edit_password1" placeholder="Ulangi Password" name="edit_password1" oninput="cekpasswordedit()">
                                    <small class="text-danger pl-3" id="edit_pesan1" style="display: none;">Password tidak cocok</small>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--start overlay-->
    <div class="overlay toggle-menu"></div>
    <!--end overlay-->
</div>

</div>
<!--End wrapper-->

<script>
    function cekpasswordedit() {
        var password = document.getElementById('edit_password').value;
        var password1 = document.getElementById('edit_password1').value;
        var pesan = document.getElementById('edit_pesan');
        var pesan1 = document.getElementById('edit_pesan1');

        if (password != password1) {
            pesan1.style.display = "inline";
        } else {
            pesan1.style.display = "none";
        }

        if (password.length == 0) {
            pesan.style.display = "none";
        } else if (password.length > 7) {
            pesan.style.display = "none";
        } else {
            pesan.style.display = "inline";
        }
    }

    function cekpassword() {
        var password = document.getElementById('password').value;
        var password1 = document.getElementById('password1').value;
        var pesan = document.getElementById('pesan');
        var pesan1 = document.getElementById('pesan1');

        if (password != password1) {
            pesan.style.display = "inline";
        } else {
            pesan.style.display = "none";
        }

        if (password.length == 0) {
            pesan1.style.display = "none";
        } else if (password.length > 7) {
            pesan1.style.display = "none";
        } else {
            pesan1.style.display = "inline";
        }
    }
    document.getElementById('role').onchange = function() {
        const role = document.getElementById('role').value;
        if (role == 2) {
            document.getElementById('jenis_kab').innerHTML = `<option value="">Pilih</option>
                <option value="KAB">Kabupaten</option>
                <option value="KOTA">Kota</option>`;
        } else {
            document.getElementById('jenis_kab').innerHTML = `<option value="">Pilih</option>`;
            document.getElementById('kab').innerHTML = `<option value=""></option>`;
        }
    }
    $(document).ready(function() {
        $('table').DataTable();
        $('#editUser').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var username = button.data('username')
            var id_user = button.data('id')
            var modal = $(this)
            modal.find('.modal-title').text('Ubah password ' + username)
            modal.find('#edit_user').val(username)
            modal.find('#id_user').val(id_user)
        });
        $('#hapusUser').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var username = button.data('username')
            var id_user = button.data('id')
            var modal = $(this)
            modal.find('#text-pesan').text('Apakah anda yakin ingin menghapus user ' + username + '?')
            modal.find('#btnHapus').attr('href', '<?= base_url('settings/hapususer/') ?>' + id_user)
        });
        $('#updateUser').click(function() {
            var url1 = '<?= base_url() ?>';
            var data = $('#form-update').serialize();
            $.ajax({
                type: 'POST',
                url: url1 + 'user/update',
                data: data,
                success: function() {
                    $(location).attr('href', url1 + 'settings/users');
                }
            })
        });
    });
</script>