<div class="clearfix"></div>

<div class="content-wrapper" style="height: 100%;">
    <div class="container-fluid">

        <div class="row mt-3">
            <div class="col-12">
                <div class="card">

                    <div class="card-header bg-light">
                        <h3>Informasi Kab/Kota
                            <a class="float-right" href="<?= base_url('kab/') . $this->session->userdata('username') ?>" target="_blank" data-toggle="tooltip" data-placement="bottom" title="Lihat"><i class="far fa-eye"></i></a></h3>
                        </h3>
                    </div>
                    <div class="card-body">
                        <?= $this->session->flashdata('messege'); ?>

                        <form id="form-informasi" action="" method="post" enctype="multipart/form-data">
                            <?php
                            if ($informasi->num_rows() == 0) :
                            ?>
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
                            <?php
                            else :
                                $data = $informasi->row_array();
                            ?>
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
                            <?php
                            endif;
                            ?>
                            <fieldset>
                                <legend>
                                    <h5>Kontak</h5>
                                </legend>
                                <div class="form-row bg-group">
                                    <?php
                                    $sosmed_opd = $this->db->get_where('tb_sosmed_kab', ['id_kab' => $this->session->userdata('id_kab')]);
                                    foreach ($sosmed_opd->result_array() as $sosmed) :
                                        $sosmed_a = $this->db->get_where('tb_sosmed', ['id_sosmed' => $sosmed['id_sosmed']]);
                                    ?>
                                        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 py-2">
                                            <div class="card-sosmed py-2 mx-2">
                                                <h4 class="text-center as-h4">
                                                    <a data-toggle="collapse" href="#sosmed-<?= $sosmed['id'] ?>" aria-expanded="false" aria-controls="sosmed-<?= $sosmed['id'] ?>"><i class="<?= $sosmed_a->row('icon') ?>"></i></a>
                                                </h4>
                                                <div id="sosmed-<?= $sosmed['id'] ?>" class="collapse bg-collapse px-2 pb-2">
                                                    <hr>
                                                    <p>URL : <?= $sosmed['link'] ?></p>
                                                    <hr>
                                                    <div class="text-right">
                                                        <button type="button" class="btn btn-sm btn-warning" data-toggle="modal" data-target="#editSosmed" data-id="<?= $sosmed['id'] ?>" data-sosmed="<?= $sosmed_a->row('sosmed') ?>" data-link="<?= $sosmed['link'] ?>" data-toggle="tooltip" data-placement="bottom" title="Ubah">
                                                            <i class="fas fa-pencil-alt"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#hapusSosmed" data-id="<?= $sosmed['id'] ?>" data-sosmed="<?= $sosmed_a->row('sosmed') ?>" data-toggle="tooltip" data-placement="bottom" title="Hapus">
                                                            <i class="fas fa-trash"></i>
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    <?php
                                    endforeach;
                                    ?>
                                    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 py-2">
                                        <div class="card-sosmed py-2 mx-2">
                                            <h4 class="text-center as-h4">
                                                <a href="" data-toggle="modal" data-target="#AddSosmed"><i class="fas fa-plus-circle"></i></a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <button type="submit" id="simpan-menu" class="btn btn-primary">Simpan</button>
                        </form>

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

<!-- Modal Add Sosmed -->
<div class="modal fade" id="AddSosmed" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="AddSosmedLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content" style="background-color: rgba(0,0,0, 1);">
            <div class="modal-header">
                <h5 class="modal-title" id="AddSosmedLabel">Tambah Sosial Media Baru</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="color: #fff;">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form method="post" id="FormAddSosmed">
                    <div class="form-group">
                        <label for="sosmed">Sosmed</label>
                        <select name="sosmed" id="pilih-sosmed" class="form-control">
                            <option value="">Pilih</option>
                            <?php
                            $a_sosmed = $this->db->get('tb_sosmed')->result_array();
                            foreach ($a_sosmed as $a_sm) :
                            ?>
                                <option value="<?= $a_sm['id_sosmed'] ?>"><?= $a_sm['sosmed'] ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <div class="form-group" id="tampil-link">
                        <!-- <label for="link">Link</label>
                        <input type="text" name="link" id="link" class="form-control"> -->
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" id="simpanSosmed" class="btn btn-primary">Simpan</button>
            </div>
        </div>
    </div>
</div>

<!-- Modal Edit Sosmed -->
<div class="modal fade" id="editSosmed" tabindex="-1" aria-labelledby="editSosmedLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content" style="background-color: rgba(0,0,0, 1);">
            <div class="modal-header">
                <h5 class="modal-title" id="editSosmedLabel">New message</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form method="post" id="FormUpdateSosmed">
                    <div class="form-group">
                        <label for="a-sosmed">Sosmed</label>
                        <input type="text" name="a_sosmed" id="a-sosmed" class="form-control" disabled>
                        <input type="hidden" id="a-id" name="a_id">
                    </div>
                    <div class="form-group">
                        <label for="a-link">URL</label>
                        <input type="text" name="a_link" id="a-link" class="form-control">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" id="updateSosmed" class="btn btn-primary">Simpan</button>
            </div>
        </div>
    </div>
</div>

<!-- Modal Hapus -->
<div class="modal fade" id="hapusSosmed" tabindex="-1" aria-labelledby="hapusSosmedLabel" aria-hidden="true">
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
    $(document).ready(function() {
        $('#simpanSosmed').prop('disabled', true);
        $("#simpanSosmed").click(function() {
            var data = $('#FormAddSosmed').serialize();
            $.ajax({
                type: 'POST',
                url: BASE_URL + 'settings/simpansosmed',
                data: data,
                success: function() {
                    $(location).attr('href', BASE_URL + 'informasi');
                }
            });
        });
        $('#editSosmed').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var id_sosmed = button.data('id')
            var sosmed = button.data('sosmed')
            var link = button.data('link')
            var modal = $(this)
            modal.find('#editSosmedLabel').text('Ubah Sosial Media ' + sosmed + id_sosmed)
            modal.find('#a-id').val(id_sosmed)
            modal.find('#a-sosmed').val(sosmed)
            modal.find('#a-link').val(link)

        });
        $("#updateSosmed").click(function() {
            var data = $('#FormUpdateSosmed').serialize();
            $.ajax({
                type: 'POST',
                url: BASE_URL + 'settings/updatesosmed',
                data: data,
                success: function() {
                    $(location).attr('href', BASE_URL + 'informasi');
                    // alert('berhasil diubah');
                    // $('#editSosmed').modal('hide');
                }
            });
        });
        $('#hapusSosmed').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var sosmed = button.data('sosmed')
            var id_sosmed = button.data('id')
            var modal = $(this)
            modal.find('#text-pesan').text('Apakah anda yakin ingin menghapus sosial media ' + sosmed + '?')
            modal.find('#btnHapus').attr('href', '<?= base_url('sosmed/delete/') ?>' + id_sosmed)
        });
        $('#pilih-sosmed').change(function() {
            var sosmed = $('#pilih-sosmed').val();
            var html = '';
            $.ajax({
                type: 'POST',
                data: sosmed,
                url: BASE_URL + 'settings/getSosmed/' + sosmed,
                success: function(cek) {
                    if (cek != 0) {
                        alert('Sosial media sudah ada!');
                        html = '';
                        $('#simpanSosmed').prop('disabled', true);
                    } else {
                        html = `<label for="link">Link</label>
                        <input type="text" name="link" id="link" class="form-control">`;
                        $('#simpanSosmed').prop('disabled', false);
                    }
                    $('#tampil-link').html(html);
                    // $(location).attr('href', url1 + 'settings/sosmed');
                }
            });
        });
    });
</script>