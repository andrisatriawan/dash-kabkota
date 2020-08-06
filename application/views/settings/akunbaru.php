<div class="content-wrapper" style="height: 100%;">
    <div class="container-fluid">
        <div class="row mt-3">
            <div class="col-xl-5 col-lg-7 col-md-8">
                <div class="card">
                    <div class="card-body">
                        <div class="card-content px-3">
                            <?= $this->session->flashdata('pesan'); ?>
                            <form method="post" action="">
                                <div class="form-group">
                                    <label for="role">Role</label>
                                    <select id="role" class="form-control" name="role" onchange="getKab(this.value)">
                                        <option value="" selected>Pilih</option>
                                        <?php
                                        foreach ($role as $level) :
                                        ?>
                                            <option value="<?= $level['id_role']; ?>"><?= $level['level'] ?></option>
                                        <?php
                                        endforeach;
                                        ?>
                                    </select>
                                    <?= form_error('role', '<small class="text-danger pl-3">', '</small>') ?>
                                </div>
                                <div class="form-group">
                                    <label for="kab">Kabupaten</label>
                                    <select id="kab" class="form-control" name="kabupaten">
                                        <option value="" selected>Pilih</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="username">Username</label>
                                    <input type="text" class="form-control" id="username" placeholder="Username" name="username" value="<?= set_value('username') ?>">
                                    <?= form_error('username', '<small class="text-danger pl-3">', '</small>') ?>
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" id="password" placeholder="Password" name="password" oninput="cekpassword()">
                                    <small class="text-danger pl-3" id="pesan1" style="display: none;">Panjang password minimal 8 karakter</small>
                                </div>
                                <div class="form-group mb-4">
                                    <label for="password">Ulangi Password</label>
                                    <input type="password" class="form-control" id="password1" placeholder="Ulangi Password" name="password1" oninput="cekpassword()">
                                    <small class="text-danger pl-3" id="pesan" style="display: none;">Password tidak cocok</small>
                                </div>
                                <button type="submit" class="btn btn-light btn-block waves-effect waves-light">Simpan</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
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
    </script>
    <!--start overlay-->
    <div class="overlay toggle-menu"></div>
    <!--end overlay-->
</div>