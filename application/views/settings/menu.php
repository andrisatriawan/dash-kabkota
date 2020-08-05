<div class="content-wrapper">
    <div class="container-fluid">
        <div class="row mt-3">
            <div class="col-lg-10 col-md-12">
                <div class="card">
                    <div class="card-body">
                        <?= $this->session->flashdata('pesan'); ?>
                        <div class="card-content px-3">
                            <ul class="nav nav-tabs nav-tabs-primary top-icon nav-justified">
                                <li class="nav-item">
                                    <a href="javascript:void();" data-target="#menu" data-toggle="pill" class="nav-link active">
                                        <i class="fas fa-info-circle"></i> <span class="hidden-xs">Daftar Menu</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="javascript:void();" data-target="#tambah-menu" data-toggle="pill" class="nav-link">
                                        <i class="fas fa-plus-circle"></i> <span class="hidden-xs">Tambah Menu</span>
                                    </a>
                                </li>
                            </ul>
                            <div class="tab-content py-3">
                                <div class="tab-pane active" id="menu">
                                    <div class="table-responsive">
                                        <table class="table table-hover">
                                            <thead>
                                                <tr class="text-center">
                                                    <th>#</th>
                                                    <th>Judul</th>
                                                    <th>Directori</th>
                                                    <th>Icon</th>
                                                    <th>Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Manajemen Menu</td>
                                                    <td>settings/menu</td>
                                                    <td>fas fa-folder</td>
                                                    <td>
                                                        <a href="" class="btn btn-warning"><i class="fas fa-pencil-alt"></i></a>
                                                        <a href="" class="btn btn-danger"><i class="fas fa-trash"></i></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                                <div class="tab-pane" id="tambah-menu">
                                    <form method="post" action="">
                                        <div class="form-group">
                                            <label for="judul">Judul Menu</label>
                                            <input type="text" class="form-control" id="judul" placeholder="Judul Menu" name="judul_menu" value="<?= set_value('judul_menu') ?>">
                                            <?= form_error('judul_menu', '<small class="text-danger pl-3">', '</small>') ?>
                                        </div>
                                        <div class="form-group">
                                            <label for="link">Link Menu</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="basic-addon3"><?= base_url() ?></span>
                                                </div>
                                                <input type="text" class="form-control" id="link" placeholder="Link Menu" name="link" value="<?= set_value('link') ?>" aria-describedby="basic-addon3">
                                                <?= form_error('link', '<small class="text-danger pl-3">', '</small>') ?>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="icon">Icon Menu</label>
                                            <input type="text" class="form-control" id="icon" placeholder="Icon Menu" name="icon" value="<?= set_value('icon') ?>">
                                            <?= form_error('icon', '<small class="text-danger pl-3">', '</small>') ?>
                                        </div>
                                        <button type="submit" class="btn btn-light btn-block waves-effect waves-light">Simpan</button>
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