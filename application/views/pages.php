<div class="clearfix"></div>

<div class="content-wrapper" style="height: 100%;">
    <div class="container-fluid">
        <?php
        if ($isi_laman->num_rows() == 0) :
            $isi = '<div class="text-center" style="margin-top: 15%;"><p>Halaman masih kosong, harap hubungi administrator website!</p></div>';
            $css = 'justify-content-md-center align-items-center';
        else :
            $isi = $isi_laman->row('isi');
            $css = 'mt-4';
        endif;
        ?>
        <div class="row <?= $css ?>" style="height: 90%;">
            <div class="col-md-12">
                <?= $isi ?>
            </div>
        </div>

        <!--start overlay-->
        <div class="overlay toggle-menu"></div>
        <!--end overlay-->
    </div>

</div>

</div>
<!--End wrapper-->