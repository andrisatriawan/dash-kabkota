<div class="content-wrapper" style="height: 100%;">
    <div class="container-fluid">
        <div class="row mt-3">
            <div class="col-xl-10">
                <div class="card">
                    <div class="card-body">
                        <div class="card-content px-3">
                            <?= $this->session->flashdata('pesan'); ?>
                            <ul class="nav nav-tabs nav-tabs-primary top-icon nav-justified">
                                <li class="nav-item">
                                    <a href="javascript:void();" data-target="#users" data-toggle="pill" class="nav-link active" id="link-users">
                                        <i class="fas fa-info-circle"></i> <span class="hidden-xs">Data Users</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="javascript:void();" data-target="#tambah-user" data-toggle="pill" class="nav-link" id="link-tambah-user">
                                        <i class="fas fa-plus-circle"></i> <span class="hidden-xs">Tambah Users</span>
                                    </a>
                                </li>
                            </ul>
                            <div class="tab-content py-3">
                                <div class="tab-pane active" id="users">
                                    <div class="table-responsive">
                                        <table class="table table-sm table-hover" id="users-table">
                                            <thead>
                                                <tr class="text-center">
                                                    <th scope="col">#</th>
                                                    <th scope="col">Kab/Kota</th>
                                                    <th scope="col">Username</th>
                                                    <th scope="col">Jenis User</th>
                                                    <th scope="col">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <?php
                                                $i = 1;
                                                foreach ($users as $user) :
                                                    $id_kab = $user['id_kab'];
                                                    $kab = $this->db->get_where('tb_kab', ['id_kab' => $id_kab])->row_array();
                                                    if ($user['id_role'] == 1) {
                                                        $status = 'Super Admin';
                                                        $nama = 'Super Admin';
                                                    } else {
                                                        $status = 'Admin Kab/Kota';
                                                        $nama = $kab['nama'];
                                                    }
                                                ?>
                                                    <tr class="text-center">
                                                        <td><?= $i++; ?></td>
                                                        <td><?= $nama ?></td>
                                                        <td><?= $user['username'] ?></td>
                                                        <td><?= $status ?></td>
                                                        <td>
                                                            <button type="button" class="btn btn-warning btn-sm" data-toggle="modal" data-target="#editUser" data-id="<?= $user['id_user'] ?>" data-username="<?= $user['username'] ?>" data-toggle="tooltip" data-placement="bottom" title="Edit Akun"><i class="fas fa-pencil-alt"></i></button>
                                                            <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#hapusUser" data-id="<?= $user['id_user'] ?>" data-username="<?= $user['username'] ?>" disabled><i class="fas fa-trash"></i></button>
                                                        </td>
                                                    </tr>
                                                <?php
                                                endforeach;
                                                ?>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="tab-pane" id="tambah-user">
                                    <form method="post" action="">
                                        <div class="form-group">
                                            <label for="role">Role</label>
                                            <select id="role" class="form-control" name="role">
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
                                            <label for="kab">Kabupaten/Kota</label>
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <select id="jenis_kab" class="form-control" onchange="getKab(this.value)">
                                                        <option value="" selected>Pilih</option>
                                                    </select>
                                                </div>
                                                <select id="kab" class="form-control" name="kabupaten" onchange="cekKab(this.value)">
                                                    <option value="" selected></option>
                                                </select>
                                            </div>
                                        </div>
                                        <div id="cek-kab">
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
                                        </div>
                                    </form>
                                </div>
                            </div>

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


<!-- Modal Edit -->
<div class="modal fade" id="editUser" tabindex="-1" aria-labelledby="editUserLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content" style="background-color: rgba(0,0,0, 1);">
            <div class="modal-header">
                <h5 class="modal-title" id="editUserLabel">New message</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="form-update">
                    <div class="form-group">
                        <label for="edit_user">Username</label>
                        <input type="text" class="form-control" id="edit_user" placeholder="Username" name="edit_user">
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
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" id="updateUser" class="btn btn-primary">Simpan</button>
            </div>
        </div>
    </div>
</div>

<!-- Modal Hapus -->
<div class="modal fade" id="hapusUser" tabindex="-1" aria-labelledby="editUserLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content" style="background-color: rgba(0,0,0, 1);">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p id="text-pesan">Apakah anda yakin ingin menghapus</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <a href="#" id="btnHapus" class="btn btn-danger">Hapus</a>
            </div>
        </div>
    </div>
</div>

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