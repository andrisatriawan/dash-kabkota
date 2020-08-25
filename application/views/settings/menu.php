<div class="content-wrapper">
    <div class="container-fluid">
        <div class="row mt-3">
            <div class="col-lg-10 col-md-12">
                <div class="card">
                    <div class="card-body">
                        <?= $this->session->flashdata('pesan'); ?>
                        <p id="pesan"></p>
                        <div class="card-content px-3">
                            <ul class="nav nav-tabs nav-tabs-primary top-icon nav-justified bg-light">
                                <li class="nav-item">
                                    <a href="javascript:void();" data-target="#menu" data-toggle="pill" class="nav-link active" id="link-menu">
                                        <i class="fas fa-info-circle"></i> <span class="hidden-xs">Daftar Menu</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="javascript:void();" data-target="#tambah-menu" data-toggle="pill" class="nav-link" id="link-tambah-menu">
                                        <i class="fas fa-plus-circle"></i> <span class="hidden-xs">Tambah Menu</span>
                                    </a>
                                </li>
                                <?php
                                if ($this->session->userdata('role') == 1) :
                                ?>
                                    <li class="nav-item">
                                        <a href="javascript:void();" data-target="#tambah-akses" data-toggle="pill" class="nav-link" id="link-tambah-akses">
                                            <i class="fas fa-universal-access"></i> <span class="hidden-xs">Akses Menu</span>
                                        </a>
                                    </li>
                                <?php endif; ?>
                            </ul>
                            <div class="tab-content py-3">
                                <!-- Table Menu -->
                                <div class="tab-pane active" id="menu">
                                    <div class="table-responsive">
                                        <table class="table table-hover" id="menu-table">
                                            <thead>
                                                <tr class="text-center">
                                                    <th>#</th>
                                                    <th>Judul</th>
                                                    <th>URL Menu</th>
                                                    <th>Icon</th>
                                                    <th>Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <?php
                                                $i = 1;
                                                $username = $this->session->userdata('username');
                                                foreach ($menu as $m) :
                                                ?>
                                                    <tr>
                                                        <td class="text-center"><?= $i++ ?></td>
                                                        <td><?= $m['judul_menu'] ?></td>
                                                        <td><?= base_url('kab/' . $username . '/' . $m['link']) ?></td>
                                                        <td class="text-center"><i class="<?= $m['icon'] ?>"></i></td>
                                                        <td class="text-center">
                                                            <button class="btn btn-sm btn-warning" data-toggle="modal" data-target="#editMenu" data-judul="<?= $m['judul_menu'] ?>" data-id="<?= $m['id_menu'] ?>" data-link="<?= $m['link'] ?>" data-icon="<?= $m['icon'] ?>">
                                                                <i class="fas fa-pencil-alt"></i>
                                                            </button>
                                                            <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#hapusMenu" data-id="<?= $m['id_menu'] ?>" data-judul="<?= $m['judul_menu'] ?>">
                                                                <i class="fas fa-trash"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                <?php
                                                endforeach;
                                                ?>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                                <!-- Tambah Menu -->
                                <div class="tab-pane" id="tambah-menu">
                                    <form id="form-menu" method="post">
                                        <div class="form-group">
                                            <label for="judul">Judul Menu</label>
                                            <input type="text" class="form-control" id="judul" placeholder="Judul Menu" name="judul_menu" oninput="cekinput(this.value, 'pesan-judul')" value="<?= set_value('judul_menu') ?>">
                                            <small class="text-danger pl-3" id="pesan-judul" style="display: inline;">Tidak boleh kosong</small>
                                        </div>
                                        <div class="form-group">
                                            <label for="link">Url Menu</label>
                                            <div class="input-group">
                                                <?php
                                                if ($this->session->userdata('role') == 1) :
                                                ?>
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="basic-addon3"><?= base_url() ?></span>
                                                    </div>
                                                <?php else :

                                                ?>
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="basic-addon3"><?= base_url('kab/' . $username . '/') ?></span>
                                                    </div>
                                                <?php endif; ?>
                                                <input type="text" class="form-control" id="link" placeholder="URL Menu" name="link" aria-describedby="basic-addon3" oninput="cekinput(this.value, 'pesan-link')" value="<?= set_value('link') ?>">
                                            </div>
                                            <small class="text-danger pl-3" id="pesan-link1" style="display: none;">Link sudah ada!</small>
                                            <small class="text-danger pl-3" id="pesan-link" style="display: inline;">Tidak boleh kosong</small>
                                        </div>
                                        <div class="form-group">
                                            <label for="icon">Icon Menu</label>
                                            <small><a href="https://fontawesome.com/icons?d=gallery" class="text-primary" target="blank"><i class="fas fa-eye"></i></a></small>
                                            <input type="text" class="form-control" id="icon" placeholder="Icon Menu" name="icon" oninput="cekinput(this.value, 'pesan-icon')" value="<?= set_value('icon') ?>">
                                            <small class="text-danger pl-3" id="pesan-icon" style="display: inline;">Tidak boleh kosong</small>
                                        </div>
                                        <button type="button" id="simpan-menu" class="btn btn-light btn-block waves-effect waves-light">Simpan</button>
                                    </form>
                                </div>
                                <?php
                                if ($this->session->userdata('role') == 1) :
                                ?>
                                    <!-- Akses Menu -->
                                    <div class="tab-pane" id="tambah-akses">
                                        <button class="btn btn-primary mb-3" data-toggle="modal" data-target="#tambahAkses"><i class="fas fa-plus"></i> Tambah Hak Akses</button>
                                        <div class="table-responsive">
                                            <table class="table table-hover" id="akses-table">
                                                <thead>
                                                    <tr class="text-center">
                                                        <th>#</th>
                                                        <th>Menu</th>
                                                        <th>Hak Akses</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?php
                                                    $j = 1;
                                                    foreach ($akses_menu as $am) :
                                                    ?>
                                                        <tr>
                                                            <td class="text-center"><?= $j++ ?></td>
                                                            <td><?= $am['judul_menu'] ?></td>
                                                            <td><?= $am['level'] ?></td>
                                                            <td class="text-center">
                                                                <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#hapusAkses" data-id="<?= $am['id_akses'] ?>" data-judul="<?= $am['judul_menu'] ?>" data-role="<?= $am['level'] ?>">
                                                                    <i class="fas fa-trash"></i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    <?php
                                                    endforeach;
                                                    ?>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                <?php endif; ?>
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

<!-- Modal Edit Menu -->
<div class="modal fade" id="editMenu" tabindex="-1" aria-labelledby="editMenuLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content" style="background-color: rgba(0,0,0, 1);">
            <div class="modal-header">
                <h5 class="modal-title" id="editMenuLabel">New message</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="form-update-menu">
                    <div class="form-group">
                        <label for="edit-judul">Judul Menu</label>
                        <input type="text" class="form-control" id="edit-judul" placeholder="Judul Menu" name="edit_judul_menu" oninput="cekinput(this.value, 'edit-pesan-judul')">
                        <input type="hidden" id="edit-id" name="edit_id">
                        <small class="text-danger pl-3" id="edit-pesan-judul" style="display: none;">Tidak boleh kosong</small>
                    </div>
                    <div class="form-group">
                        <label for="edit-link">Url Menu</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon3"><?= base_url() ?></span>
                            </div>
                            <input type="text" class="form-control" id="edit-link" placeholder="URL Menu" name="edit_link" aria-describedby="basic-addon3" oninput="cekinput(this.value, 'pesan-edit-link')">
                        </div>
                        <small class="text-danger pl-3" id="pesan-edit-link" style="display: none;">Tidak boleh kosong</small>
                    </div>
                    <div class="form-group">
                        <label for="edit-icon">Icon Menu</label>
                        <small><a href="https://fontawesome.com/icons?d=gallery" class="text-primary" target="blank"><i class="fas fa-eye"></i></a></small>
                        <input type="text" class="form-control" id="edit-icon" placeholder="Icon Menu" name="edit_icon" oninput="cekinput(this.value, 'pesan-edit-icon')">
                        <small class="text-danger pl-3" id="pesan-edit-icon" style="display: none;">Tidak boleh kosong</small>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" id="updateMenu" class="btn btn-primary">Simpan</button>
            </div>
        </div>
    </div>
</div>

<!-- Modal Hapus -->
<div class="modal fade" id="hapusMenu" tabindex="-1" aria-labelledby="hapusMenuLabel" aria-hidden="true">
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

<?php if ($this->session->userdata('role') == 1) : ?>
    <!-- Modal Tambah Akses Menu -->
    <div class="modal fade" id="tambahAkses" tabindex="-1" aria-labelledby="tambahAksesLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content" style="background-color: rgba(0,0,0, 1);">
                <div class="modal-header">
                    <h5 class="modal-title" id="tambahAksesLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="color: #fff;">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form method="post" id="AddAccess">
                        <div class="form-group">
                            <label for="a-menu">Menu</label>
                            <select name="a_menu" class="form-control" id="a-menu">
                                <option value="">Pilih</option>
                                <?php
                                foreach ($menu as $m) :
                                ?>
                                    <option value="<?= $m['id_menu'] ?>"><?= $m['judul_menu'] ?></option>
                                <?php
                                endforeach;
                                ?>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="a-role">Akses</label>
                            <select name="a_role" class="form-control" id="a-role">
                                <option value="">Pilih</option>
                                <?php
                                foreach ($role as $r) :
                                ?>
                                    <option value="<?= $r['id_role'] ?>"><?= $r['level'] ?></option>
                                <?php
                                endforeach;
                                ?>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" id="simpanAkses" class="btn btn-primary">Simpan</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="hapusAkses" tabindex="-1" aria-labelledby="hapusAksesLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content" style="background-color: rgba(0,0,0, 1);">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p id="text-pesan">Apakah anda yakin ingin menghapus akses menu </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <a href="#" id="btnHapusAkses" class="btn btn-danger">Hapus</a>
                </div>
            </div>
        </div>
    </div>
<?php endif; ?>

<script type="text/javascript">
    $(document).ready(function() {
        var url1 = '<?= base_url() ?>';
        $('#editMenu').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var id_menu = button.data('id')
            var judul = button.data('judul')
            var link = button.data('link')
            var icon = button.data('icon')
            var modal = $(this)
            modal.find('.modal-title').text('Ubah menu ' + judul + id_menu)
            modal.find('#edit-id').val(id_menu)
            modal.find('#edit-judul').val(judul)
            modal.find('#edit-link').val(link)
            modal.find('#edit-icon').val(icon)
        });
        $("#simpan-menu").click(function() {
            var data = $('#form-menu').serialize();
            $.ajax({
                type: 'POST',
                url: url1 + 'settings/simpanmenu',
                data: data,
                success: function() {
                    $(location).attr('href', url1 + 'settings/menu');
                }
            });
        });
        $('#hapusMenu').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var judul = button.data('judul')
            var id_menu = button.data('id')
            var modal = $(this)
            modal.find('#text-pesan').text('Apakah anda yakin ingin menghapus user ' + judul + '?')
            modal.find('#btnHapus').attr('href', '<?= base_url('menu/delete/') ?>' + id_menu)
        });
        $("#updateMenu").click(function() {
            var data = $('#form-update-menu').serialize();
            $.ajax({
                type: 'POST',
                url: url1 + 'menu/update',
                data: data,
                success: function() {
                    $(location).attr('href', url1 + 'settings/menu');
                }
            });
        });
        $("#link").on('input', function() {
            var data = $('#form-menu').serialize();
            var coba = $.ajax({
                type: 'POST',
                url: url1 + 'settings/cekUrl',
                data: data,
                success: function(cek) {
                    if (cek == 1) {
                        document.getElementById('pesan-link1').style.display = 'inline';
                    } else {
                        document.getElementById('pesan-link1').style.display = 'none';
                    }
                }
            });
        });
        $("#simpanAkses").click(function() {
            var data = $('#AddAccess').serialize();
            $.ajax({
                type: 'POST',
                url: url1 + 'akses/save',
                data: data,
                success: function() {
                    $(location).attr('href', url1 + 'settings/menu');
                }
            });
        });
        $('#hapusAkses').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var id_akses = button.data('id')
            var judul = button.data('judul')
            var role = button.data('role')
            var modal = $(this)
            modal.find('#text-pesan').text('Apakah anda yakin ingin menghapus akses menu ' + judul + ' untuk ' + role + '?')
            modal.find('#btnHapusAkses').attr('href', '<?= base_url('akses/delete/') ?>' + id_akses)
        });
        $('table').DataTable();
        $('.alert').alert();
    });
</script>