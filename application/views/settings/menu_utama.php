<div class="content-wrapper">
    <div class="container-fluid">
        <div class="row mt-3">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <?= $this->session->flashdata('pesan'); ?>
                        <p id="pesan"></p>
                        <div class="card-content px-3">
                            <ul class="nav nav-tabs nav-tabs-primary top-icon nav-justified">
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
                                                    if ($m['jenis_url'] == 0) {
                                                        if ($this->session->userdata('role') == 1) {
                                                            $url = base_url($m['link']);
                                                        } else {
                                                            $url = base_url('kab/' . $username . '/' . $m['link']);
                                                        }
                                                    } else {
                                                        $url = $m['link'];
                                                    }
                                                ?>
                                                    <tr>
                                                        <td class="text-center"><?= $i++ ?></td>
                                                        <td><?= $m['judul_menu'] ?></td>
                                                        <td><?= $url ?></td>
                                                        <td class="text-center"><i class="<?= $m['icon'] ?>"></i></td>
                                                        <td class="text-center">
                                                            <button class="btn btn-sm btn-warning" data-toggle="modal" data-target="#editMenu" data-judul="<?= $m['judul_menu'] ?>" data-id="<?= $m['id_menu'] ?>" data-link="<?= $m['link'] ?>" data-icon="<?= $m['icon'] ?>" data-jenis="<?= $m['jenis_url'] ?>" data-tab="<?= $m['tab_baru'] ?>">
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
                                            <label for="jenis-url" class="input-group">Url Menu</label>
                                            <select name="jenis_url" id="jenis-url" class="form-control">
                                                <option value="">Pilih</option>
                                                <option value="0">Buat URL</option>
                                                <option value="1">URL yang sudah ada</option>
                                            </select>

                                        </div>
                                        <div id="url" class="form-group">
                                        </div>
                                        <div class="form-group">
                                            <label for="icon">Icon Menu</label>
                                            <small><a href="https://fontawesome.com/icons?d=gallery" class="text-primary" target="blank"><i class="fas fa-eye"></i></a></small>
                                            <input type="text" class="form-control" id="icon" placeholder="Icon Menu" name="icon" value="<?= set_value('icon') ?>">
                                        </div>
                                        <button type="button" id="simpan-menu" class="btn btn-light btn-block waves-effect waves-light">Simpan</button>
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