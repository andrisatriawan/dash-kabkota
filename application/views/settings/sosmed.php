<div class="content-wrapper">
    <div class="container-fluid">
        <div class="row mt-3">
            <div class="col-lg-10 col-md-12">
                <div class="card">
                    <div class="card-body">
                        <?= $this->session->flashdata('pesan'); ?>
                        <p id="pesan"></p>
                        <div class="card-content px-3">
                            <ul class="nav nav-tabs nav-tabs-primary top-icon nav-justified">
                                <li class="nav-item">
                                    <a href="javascript:void();" data-target="#sosmed" data-toggle="pill" class="nav-link active" id="link-sosmed">
                                        <i class="fas fa-user-friends"></i> <span class="hidden-xs">Sosial Media</span>
                                    </a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <!-- Sosial Media -->
                                <div class="tab-pane active" id="sosmed">
                                    <button class="btn btn-primary mb-3" data-toggle="modal" data-target="#AddSosmed"><i class="fas fa-plus"></i> Tambah Sosial Media</button>
                                    <div class="table-responsive">
                                        <table class="table table-hover" id="akses-table">
                                            <thead>
                                                <tr class="text-center">
                                                    <th>#</th>
                                                    <th>Sosial Media</th>
                                                    <th>Icon</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <?php
                                                $j = 1;
                                                foreach ($sosmed->result_array() as $sm) :
                                                ?>
                                                    <tr>
                                                        <td class="text-center"><?= $j++ ?></td>
                                                        <td><?= $sm['sosmed'] ?></td>
                                                        <td class="text-center"><i class="<?= $sm['icon'] ?>"></i></td>
                                                        <td class="text-center">
                                                            <button type="button" class="btn btn-warning btn-sm" data-toggle="modal" data-target="#editSosmed" data-id="<?= $sm['id_sosmed'] ?>" data-sosmed="<?= $sm['sosmed'] ?>" data-icon="<?= $sm['icon'] ?>">
                                                                <i class="fas fa-pencil-alt"></i>
                                                            </button>
                                                            <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#hapusSosmed" data-id="<?= $sm['id_sosmed'] ?>" data-sosmed="<?= $sm['sosmed'] ?>">
                                                                <i class="fas fa-trash"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                <?php endforeach; ?>
                                            </tbody>
                                        </table>
                                    </div>
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
                        <input type="text" name="a_sosmed" id="a-sosmed" class="form-control">
                        <input type="hidden" id="a-id" name="a_id">
                    </div>
                    <div class="form-group">
                        <label for="a-icon">Icon</label>
                        <input type="text" name="a_icon" id="a-icon" class="form-control">
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

<!-- Modal Tambah Sosmed -->
<div class="modal fade" id="AddSosmed" tabindex="-1" aria-labelledby="AddSosmedLabel" aria-hidden="true">
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
                        <input type="text" name="sosmed" id="sosmed" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="icon">Icon</label>
                        <input type="text" name="icon" id="icon" class="form-control">
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

<script type="text/javascript">
    $(document).ready(function() {
        var url1 = '<?= base_url() ?>';
        $("#simpanSosmed").click(function() {
            var data = $('#FormAddSosmed').serialize();
            $.ajax({
                type: 'POST',
                url: url1 + 'settings/simpansosmed',
                data: data,
                success: function() {
                    $(location).attr('href', url1 + 'settings/sosmed');
                }
            });
        });
        $('#editSosmed').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var id_sosmed = button.data('id')
            var sosmed = button.data('sosmed')
            var icon = button.data('icon')
            var modal = $(this)
            modal.find('#editSosmedLabel').text('Ubah Sosial Media ' + sosmed)
            modal.find('#a-id').val(id_sosmed)
            modal.find('#a-sosmed').val(sosmed)
            modal.find('#a-icon').val(icon)
        });
        $("#updateSosmed").click(function() {
            var data = $('#FormUpdateSosmed').serialize();
            $.ajax({
                type: 'POST',
                url: url1 + 'settings/updatesosmed',
                data: data,
                success: function() {
                    $(location).attr('href', url1 + 'settings/sosmed');
                }
            });
        });
        $('#hapusSosmed').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget)
            var sosmed = button.data('sosmed')
            var id_sosmed = button.data('id')
            var modal = $(this)
            modal.find('#text-pesan').text('Apakah anda yakin ingin menghapus user ' + sosmed + '?')
            modal.find('#btnHapus').attr('href', '<?= base_url('sosmed/delete/') ?>' + id_sosmed)
        });
    });
</script>