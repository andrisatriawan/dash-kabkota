<div class="clearfix"></div>

<div class="content-wrapper" style="height: 100%;">
	<div class="container-fluid">

		<div class="row mt-3">
			<div class="col-lg-4">
				<div class="card profile-card-2">
					<div class="card-img-block">
						<img class="img-fluid" src="<?= base_url('assets/images/gedung/') . $info['foto_kantor'] ?>">
					</div>
					<div class="card-body pt-6">
						<!-- <img src="" alt="profile-image" class="profile"> -->
						<div class="img-card">
							<img src="<?= base_url('assets/images/logo-kab/') . $info['logo'] ?>" class="img-fluid img-thumbnail">
						</div>
						<h5 class="card-title"><?= $kab['nama']; ?></h5>
						<p class="card-text"><?= $info['alamat_kantor'] ?></p>
						<div class="icon-block">
							<a href="javascript:void();"><i class="fab fa-facebook-square bg-facebook text-white"></i></a>
							<a href="javascript:void();"> <i class="fab fa-twitter bg-twitter text-white"></i></a>
							<a href="javascript:void();"><i class="fab fa-instagram bg-instagram text-white"></i></a>
							<a href="javascript:void();"> <i class="fas fa-envelope bg-envelope text-white"></i></a>
						</div>
					</div>
				</div>
			</div>

			<div class="col-lg-8">
				<div class="card">
					<div class="card-body">
						<ul class="nav nav-tabs nav-tabs-primary top-icon nav-justified">
							<li class="nav-item">
								<a href="javascript:void();" data-target="#informasi" data-toggle="pill" class="nav-link active">
									<i class="fas fa-info-circle"></i> <span class="hidden-xs">Informasi
										Umum</span>
								</a>
							</li>
							<!-- <li class="nav-item">
								<a href="javascript:void();" data-target="#messages" data-toggle="pill" class="nav-link">
									<i class="fa fa-map"></i> <span class="hidden-xs">Objek Wisata</span>
								</a>
							</li> -->
						</ul>
						<div class="tab-content p-3">
							<div class="tab-pane active" id="informasi">
								<div class="row">
									<div class="col-md-6">
										<h5>Pemimpin Daerah</h5>
										<hr>
										<h6>Kepala Daerah</h6>
										<p>
											<?= $info['kepala_daerah'] ?>
										</p>
										<h6>Wakil Kepala Daerah</h6>
										<p>
											<?= $info['wakil_kepala_daerah'] ?>
										</p>
									</div>
									<div class="col-md-6">
										<h5>Informasi Geografis</h5>
										<hr>
										<h6>Luas Wilayah</h6>
										<p><?= $info['luas_wilayah'] ?> Km<sup>2</sup></p>
										<h6>Jumlah Kecamatan</h6>
										<p><?= $info['jumlah_kec'] ?></p>
										<h6>Jumlah Kelurahan</h6>
										<p><?= $info['jumlah_kel'] ?></p>
										<h6>Jumlah Desa</h6>
										<p><?= $info['jumlah_desa'] ?></p>
									</div>
								</div>
								<!--/row-->
							</div>
							<!-- <div class="tab-pane" id="messages">
								<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
									<ol class="carousel-indicators">
										<li data-target="#carouselExampleCaptions" data-slide-to="0" class="active">
										</li>
										<li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
										<li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
									</ol>
									<div class="carousel-inner">
										<div class="carousel-item active">
											<img src="<?= base_url() ?>assets/images/wisata/danauteratai.jpg" class="d-block w-100" alt="danau teratai" style="max-height: 550px;">
											<div class="carousel-caption d-none d-md-block">
												<h5>Danau Teratai</h5>
											</div>
										</div>
										<div class="carousel-item">
											<img src="<?= base_url() ?>assets/images/wisata/sisopa.jpg" class="d-block w-100" alt="..." style="max-height: 550px;">
											<div class="carousel-caption d-none d-md-block">
												<h5>Air Terjun Unong Sisapa</h5>
											</div>
										</div>
										<div class="carousel-item">
											<img src="<?= base_url() ?>assets/images/wisata/simonang.jpg" class="d-block w-100" alt="..." style="max-height: 550px;">
											<div class="carousel-caption d-none d-md-block">
												<h5>Air Terjun Simonang Monang</h5>
											</div>
										</div>
									</div>
									<a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
										<span class="carousel-control-prev-icon" aria-hidden="true"></span>
										<span class="sr-only">Previous</span>
									</a>
									<a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
										<span class="carousel-control-next-icon" aria-hidden="true"></span>
										<span class="sr-only">Next</span>
									</a>
								</div>
							</div> -->
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

</div>
<!--End wrapper-->