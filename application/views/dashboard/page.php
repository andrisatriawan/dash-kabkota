<div class="content-wrapper" style="height: 100%;">
    <div class="container-fluid">
        <div class="mt-3 mb-5">
            <h3 class="mb-4"><?= $laman->row('judul_menu') ?></h3>
            <p>Link URL : <?= base_url('kab/') . $this->session->userdata('username') . '/' . $laman->row('link') ?>
                <a href="<?= base_url('kab/') . $this->session->userdata('username') . '/' . $laman->row('link') ?>" target="blank" class="btn btn-secondary btn-sm"><i class="fas fa-eye"></i></a>
            </p>
            <!-- <label for="">Jenis Laman</label>
            <select id="jenis-laman" class="form-control mb-3">
                <option value="">Pilih</option>
                <option value="1">Post</option>
                <option value="2">Grafik</option>
            </select> -->
            <!-- <div id="grafik">

            </div> -->
            <div>
                <!-- <form method="POST" id="form-isi-laman"> -->
                <?php
                $isi = '';
                if ($isi_laman->num_rows() == 1) {
                    $isi = $isi_laman->row('isi');
                } else {
                    $isi = '';
                }
                ?>
                <textarea name="page_input" id="page-input">
                    <?= $isi ?>
                </textarea>
                <button class="btn btn-primary mt-4" id="btn-simpan"><i class="fas fa-save"></i> Simpan</button>
                <!-- </form> -->
            </div>
        </div>
    </div>

    <!--start overlay-->
    <div class="overlay toggle-menu"></div>
    <!--end overlay-->
</div>
</div>
<!--End wrapper-->

<script type="text/javascript">
    $(document).ready(function() {
        // $('#jenis-laman').change(function() {
        //     var val_page_input = $('#jenis-laman').val();
        //     console.log(val_page_input);
        //     var html = '';
        //     if (val_page_input == 1) {
        //         html = '<form action="">' +
        //             '<textarea name="page_input" id="page-input">' +
        //             '</textarea>' +
        //             '<button class="btn btn-primary mt-4"><i class="fas fa-save"></i> Simpan</button>' +
        //             '</form>';

        //     } else {
        //         html = '';
        //     }
        //     $('div#post').html(html);
        //     console.log(html);
        //     tinymce.init({
        //         selector: 'textarea#page-input',
        //         height: 500,
        //         menubar: true,
        //         plugins: [
        //             'advlist autolink lists link image charmap print preview anchor',
        //             'searchreplace visualblocks code fullscreen',
        //             'insertdatetime media table paste code help wordcount'
        //         ],
        //         toolbar: 'undo redo | formatselect | ' +
        //             'bold italic backcolor | alignleft aligncenter ' +
        //             'alignright alignjustify | bullist numlist outdent indent | ' +
        //             'removeformat | help',
        //         content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        //     });
        // });

        $('#btn-simpan').click(function() {
            var url_success = window.location.toString();
            var data = $('#form-isi-laman').serialize();
            var id_menu = '<?= $laman->row('id_menu') ?>';
            var page_input = $('#page-input').val();
            $.ajax({
                type: 'POST',
                url: BASE_URL + 'page/simpan/' + id_menu,
                dataType: 'JSON',
                data: {
                    page_input: page_input
                },
                success: function(page) {
                    $(location).attr('href', url_success);
                    console.log(page);
                }
            });
        });
    });
</script>