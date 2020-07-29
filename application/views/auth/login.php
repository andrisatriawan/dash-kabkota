<div id="wrapper" style="height: 100%; width: 100%">
    <div class="container" style="height: 100%;">
        <div class="row justify-content-md-center align-items-center" style="height: 90%;">
            <div class="col-xl-5 col-lg-6 col-md-8">
                <div class="card">
                    <div class="card-header text-center pt-4">
                        <img src="<?= base_url() ?>assets/images/logo/logo-provsu.png" class="img-responsive mb-4" width="80px" alt="">
                        <h4>Dashboard Kabupaten/Kota</h4>
                    </div>
                    <div class="card-body">
                        <div class="card-content px-3">
                            <?= $this->session->flashdata('messege'); ?>
                            <div class="card-title text-uppercase text-center">Log In</div>
                            <form method="post" action="">
                                <div class="form-group">
                                    <label for="username" class="sr-only">Name</label>
                                    <div class="position-relative has-icon-right">
                                        <input type="text" id="username" class="form-control input-shadow" placeholder="Username" name="username" value="<?= set_value('username') ?>">
                                        <div class="form-control-position">
                                            <i class="icon-user"></i>
                                        </div>
                                    </div>
                                    <?= form_error('username', '<small class="text-danger pl-3">', '</small>') ?>
                                </div>
                                <div class="form-group">
                                    <label for="password" class="sr-only">Password</label>
                                    <div class="position-relative has-icon-right">
                                        <input type="text" id="password" class="form-control input-shadow" placeholder="Password" name="password">
                                        <div class="form-control-position">
                                            <i class="icon-lock"></i>
                                        </div>
                                    </div>
                                    <?= form_error('password', '<small class="text-danger pl-3">', '</small>') ?>
                                </div>
                                <button type="submit" class="btn btn-light btn-block waves-effect waves-light">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-md-center align-items-end" style="height: 10%;">
            <div class="col">
                <p class="text-center">&copy; Dinas Komunikasi dan Informatika <?= date('Y') ?></p>
            </div>
        </div>
    </div>
</div>