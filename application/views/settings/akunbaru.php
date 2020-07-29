<div class="content-wrapper" style="height: 100%;">
    <div class="container-fluid">
        <div class="row mt-3">
            <div class="col-lg-4">
                <div class="card">
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
                                        <input type="password" id="password" class="form-control input-shadow" placeholder="Password" name="password">
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
    </div>
    <!--start overlay-->
    <div class="overlay toggle-menu"></div>
    <!--end overlay-->
</div>