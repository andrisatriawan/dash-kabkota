<div class="content-wrapper" style="height: 100%;">
    <div class="container-fluid">
        <div class="row mt-3">
            <div class="col-xl-6 col-lg-7 col-sm-8 col-xs-9">
                <div class="card">
                    <div class="card-header bg-light">
                        <h3>Ubah Password</h3>
                    </div>
                    <?php
                    $user = $users->row_array();
                    ?>
                    <div class="card-body">
                        <div class="card-content px-3">
                            <form id="form-update" method="post">
                                <div class="form-group">
                                    <label for="username">Username</label>
                                    <input type="text" class="form-control" id="username" placeholder="Username" value="<?= $user['username'] ?>" disabled>
                                </div>
                                <div class="form-group">
                                    <label for="old_password">Password Lama</label>
                                    <input type="text" class="form-control" id="old_password" placeholder="Password Lama" name="old_password">
                                </div>
                                <div class="form-group">
                                    <label for="edit_password">Password Baru</label>
                                    <input type="password" class="form-control" id="edit_password" placeholder="Password" name="edit_password" oninput="cekpasswordedit()">
                                    <small class="text-danger pl-3" id="edit_pesan" style="display: none;">Panjang password minimal 8 karakter</small>
                                </div>
                                <div class="form-group mb-4">
                                    <label for="edit_password1">Ulangi Password</label>
                                    <input type="password" class="form-control" id="edit_password1" placeholder="Ulangi Password" name="edit_password1" oninput="cekpasswordedit()">
                                    <small class="text-danger pl-3" id="edit_pesan1" style="display: none;">Password tidak cocok</small>
                                </div>
                                <button type="button" id="update-password" class="btn btn-light btn-block waves-effect waves-light">Ubah Password</button>
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
    $(document).ready(function() {
        $('table').DataTable();

        function cekpasslama() {
            var id_user = <?= $user['id_user'] ?>;
            var data = $('#form-update').serialize();
            // var hasil = '';
            $.ajax({
                type: 'POST',
                url: BASE_URL + 'settings/validasiPass/' + id_user,
                data: data,
                success: function(cek) {
                    return cek;
                }
            });

        }
        $('#update-password').click(function() {
            var cek = cekpasslama();
            console.log(cek);
            // var url1 = '<?= base_url() ?>';
            // var data = $('#form-update').serialize();
            // $.ajax({
            //     type: 'POST',
            //     url: url1 + 'user/update',
            //     data: data,
            //     success: function() {
            //         $(location).attr('href', url1 + 'settings/users');
            //     }
            // })
        });
    });
</script>