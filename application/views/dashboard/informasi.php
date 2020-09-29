<div class="clearfix"></div>

<div class="content-wrapper" style="height: 100%;">
    <div class="container-fluid">

        <div class="row mt-3">
            <div class="col-12">
                <div class="card">

                    <div class="card-header bg-light">
                        <h3>Informasi Kab/Kota</h3>
                    </div>
                    <div class="card-body">
                        <?= $this->session->flashdata('messege'); ?>
                        <?php
                        if ($informasi->num_rows() == 0) :
                        ?>
                            <form id="form-informasi" action="" method="post" enctype="multipart/form-data">
                                <div class="form-group">
                                    <label for="kepala">Kepala Daerah</label>
                                    <input type="text" class="form-control" id="kepala" placeholder="Kepala Daerah" name="kepala_daerah" value="<?= set_value('kepala_daerah') ?>">
                                    <?= form_error('kepala_daerah', '<small class="text-danger pl-3">', '</small>') ?>
                                </div>
                                <div class="form-group">
                                    <label for="wakil-kepala">Wakil Kepala Daerah</label>
                                    <input type="text" class="form-control" id="wakil-kepala" placeholder="Wakil Kepala Daerah" name="wakil_kepala_daerah" value="<?= set_value('wakil_kepala_daerah') ?>">
                                    <?= form_error('wakil_kepala_daerah', '<small class="text-danger pl-3">', '</small>') ?>
                                </div>
                                <div class="form-group">
                                    <label for="alamat">Alamat Kantor</label>
                                    <input type="text" class="form-control" id="alamat" placeholder="Alamat Kantor" name="alamat_kantor" oninput="cekinput(this.value, 'pesan-alamat')" value="<?= set_value('alamat_kantor') ?>">
                                    <?= form_error('alamat_kantor', '<small class="text-danger pl-3">', '</small>') ?>
                                </div>
                                <div class="form-group">
                                    <label for="peta">URL Sematkan Peta</label>
                                    <textarea name="url_peta" id="peta" class="form-control" rows="5"><?= set_value('url_peta') ?></textarea>
                                    <!-- <input type="text" class="form-control" id="peta" placeholder="URL Sematkan Peta" name="url_peta" value=""> -->
                                    <?= form_error('url_peta', '<small class="text-danger pl-3">', '</small>') ?>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="luas-wilayah">Luas Wilayah</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="luas-wilayah" placeholder="Luas Wilayah" name="luas_wilayah" oninput="cekinput(this.value, 'pesan-luas-wilayah')" value="<?= set_value('luas_wilayah') ?>">
                                                <div class="input-group-append">
                                                    <span class="input-group-text">Km<sup>2</sup></span>
                                                </div>
                                            </div>
                                            <?= form_error('luas_wilayah', '<small class="text-danger pl-3">', '</small>') ?>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="jumlah-kec">Jumlah Kecamatan</label>
                                            <input type="number" class="form-control" id="jumlah-kec" placeholder="Jumlah Kecamatan" name="jumlah_kec" oninput="cekinput(this.value, 'pesan-jumlah-kec')" value="<?= set_value('jumlah_kec') ?>">
                                            <?= form_error('jumlah_kec', '<small class="text-danger pl-3">', '</small>') ?>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="jumlah-kel">Jumlah Keluarahan</label>
                                            <input type="number" class="form-control" id="jumlah-kel" placeholder="Jumlah Keluarahan" name="jumlah_kel" oninput="cekinput(this.value, 'pesan-jumlah-kel')" value="<?= set_value('jumlah_kel') ?>">
                                            <?= form_error('jumlah_kel', '<small class="text-danger pl-3">', '</small>') ?>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="jumlah-desa">Jumlah Desa</label>
                                            <input type="number" class="form-control" id="jumlah-desa" placeholder="Jumlah Desa" name="jumlah_desa" oninput="cekinput(this.value, 'pesan-jumlah-desa')" value="<?= set_value('jumlah_desa') ?>">
                                            <?= form_error('jumlah_desa', '<small class="text-danger pl-3">', '</small>') ?>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="logo">Logo Kab/Kota</label>
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" id="logo" name="logo" accept="image/*">
                                                <label class="custom-file-label" for="logo" id="text-logo">Tidak Ada File</label>
                                            </div>
                                            <small class="form-text text-muted">Max. file 2 MB</small>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="foto-kantor">Foto Gedung</label>
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" id="foto-kantor" name="foto_kantor" accept="image/*">
                                                <label class="custom-file-label" for="foto-kantor" id="text-foto-kantor">Tidak Ada File</label>
                                            </div>
                                            <small class="form-text text-muted">Max. file 2 MB</small>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" id="simpan-menu" class="btn btn-primary">Simpan</button>
                            </form>
                        <?php
                        else :
                            $data = $informasi->row_array();
                        ?>
                            <form id="form-informasi" action="" method="post" enctype="multipart/form-data">
                                <div class="form-group">
                                    <label for="kepala">Kepala Daerah</label>
                                    <input type="text" class="form-control" id="kepala" placeholder="Kepala Daerah" name="kepala_daerah" value="<?= $data['kepala_daerah'] ?>">
                                    <?= form_error('kepala_daerah', '<small class="text-danger pl-3">', '</small>') ?>
                                </div>
                                <div class="form-group">
                                    <label for="wakil-kepala">Wakil Kepala Daerah</label>
                                    <input type="text" class="form-control" id="wakil-kepala" placeholder="Wakil Kepala Daerah" name="wakil_kepala_daerah" value="<?= $data['wakil_kepala_daerah'] ?>">
                                    <?= form_error('wakil_kepala_daerah', '<small class="text-danger pl-3">', '</small>') ?>
                                </div>
                                <div class="form-group">
                                    <label for="alamat">Alamat Kantor</label>
                                    <input type="text" class="form-control" id="alamat" placeholder="Alamat Kantor" name="alamat_kantor" value="<?= $data['alamat_kantor'] ?>">
                                    <?= form_error('alamat_kantor', '<small class="text-danger pl-3">', '</small>') ?>
                                </div>
                                <div class="form-group">
                                    <label for="peta">URL Sematkan Peta</label>
                                    <textarea name="url_peta" id="peta" class="form-control" rows="5"><?= $data['url_peta'] ?></textarea>
                                    <!-- <input type="text" class="form-control" id="peta" placeholder="URL Sematkan Peta" name="url_peta" value=""> -->
                                    <?= form_error('url_peta', '<small class="text-danger pl-3">', '</small>') ?>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="luas-wilayah">Luas Wilayah</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="luas-wilayah" placeholder="Luas Wilayah" name="luas_wilayah" value="<?= $data['luas_wilayah'] ?>">
                                                <div class="input-group-append">
                                                    <span class="input-group-text">Km<sup>2</sup></span>
                                                </div>
                                            </div>
                                            <?= form_error('luas_wilayah', '<small class="text-danger pl-3">', '</small>') ?>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="jumlah-kec">Jumlah Kecamatan</label>
                                            <input type="number" class="form-control" id="jumlah-kec" placeholder="Jumlah Kecamatan" name="jumlah_kec" value="<?= $data['jumlah_kec'] ?>">
                                            <?= form_error('jumlah_kec', '<small class="text-danger pl-3">', '</small>') ?>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="jumlah-kel">Jumlah Keluarahan</label>
                                            <input type="number" class="form-control" id="jumlah-kel" placeholder="Jumlah Keluarahan" name="jumlah_kel" value="<?= $data['jumlah_kel'] ?>">
                                            <?= form_error('jumlah_kel', '<small class="text-danger pl-3">', '</small>') ?>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="jumlah-desa">Jumlah Desa</label>
                                            <input type="number" class="form-control" id="jumlah-desa" placeholder="Jumlah Desa" name="jumlah_desa" value="<?= $data['jumlah_desa'] ?>">
                                            <?= form_error('jumlah_desa', '<small class="text-danger pl-3">', '</small>') ?>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-6">
                                        <img src="<?= base_url('assets/images/logo-kab/') . $data['logo'] ?>" class="img-fluid img-thumbnail" style="height: 200px;">
                                        <div class="form-group">
                                            <label for="logo">Logo Kab/Kota</label>
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" id="logo" name="logo" accept="image/*">
                                                <input type="hidden" id="old-logo" name="old_logo" value="<?= $data['logo'] ?>">
                                                <label class="custom-file-label" for="logo" id="text-logo"><?= $data['logo'] ?></label>
                                            </div>
                                            <small class="form-text text-muted">Max. file 2 MB</small>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <img src="<?= base_url('assets/images/gedung/') . $data['foto_kantor'] ?>" class="img-fluid img-thumbnail" style="height: 200px;">
                                        <div class="form-group">
                                            <label for="foto-kantor">Foto Gedung</label>
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" id="foto-kantor" name="foto_kantor" accept="image/*">
                                                <input type="hidden" id="old-foto-kantor" name="old_foto_kantor" value="<?= $data['foto_kantor'] ?>">
                                                <label class="custom-file-label" for="foto-kantor" id="text-foto-kantor"><?= $data['foto_kantor'] ?></label>
                                            </div>
                                            <small class="form-text text-muted">Max. file 2 MB</small>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" id="simpan-menu" class="btn btn-primary">Simpan</button>
                            </form>
                        <?php
                        endif;
                        ?>
                    </div>
                </div>
            </div>
        </div>

        <!--start overlay-->
        <div class="overlay toggle-menu"></div>
        <!--end overlay-->
    </div>

</div>

</div>
<!--End wrapper-->

<script type="text/javascript">
    document.getElementById('logo').onchange = function() {
        var x = document.getElementById('logo');
        if ('files' in x) {
            if (x.files.length == 0) {
                document.getElementById('text-logo').innerHTML = "Tidak Ada File";
            } else {
                var file = x.files[0];
                if ('name' in file && 'size' in file) {
                    if (file.size > 2097152) {
                        alert('Max. File 2 Mb');
                        document.getElementById('text-logo').innerHTML = "Tidak Ada File";
                    } else {
                        x.innerHTML = x.files[0];
                        document.getElementById('text-logo').innerHTML = file.name;
                    }
                }
            }
        }
    };
    document.getElementById('foto-kantor').onchange = function() {
        var x = document.getElementById('foto-kantor');
        if ('files' in x) {
            if (x.files.length == 0) {
                document.getElementById('text-foto-kantor').innerHTML = "Tidak Ada File";
            } else {
                var file = x.files[0];
                if ('name' in file && 'size' in file) {
                    if (file.size > 2097152) {
                        alert('Max.File 2 Mb');
                        document.getElementById('text-foto-kantor').innerHTML = "Tidak Ada File";
                    } else {
                        document.getElementById('text-foto-kantor').innerHTML = file.name;
                    }
                }
            }
        }
    };
</script>