	<!-- Start wrapper-->
	<div id="wrapper">

		<!--Start sidebar-wrapper-->
		<div id="sidebar-wrapper" data-simplebar="" data-simplebar-auto-hide="true">
			<div class="brand-logo">
				<a href="<?= base_url('kab/') . $user['username'] ?>">
					<div class="row">
						<div class="col-3">
							<img src="<?= base_url('assets/images/logo-kab/') . $logo ?>" class="logo-icon">
						</div>
						<div class="col-9">
							<?php
							if (substr($kab['nama'], 0, 4) == 'KAB.') {
								$sebutan = 'KABUPATEN';
							} else {
								$sebutan = 'KOTA';
							}
							?>
							<h5 class="logo-text"> <?= $sebutan ?> <br> <?= substr($kab['nama'], 5); ?></h5>
						</div>
					</div>
				</a>
			</div>
			<ul class="sidebar-menu do-nicescrol">
				<!-- <li class="sidebar-header">MENU UTAMA</li> -->
				<li>
					<a href="<?= base_url('kab/') . $user['username'] ?>">
						<!-- <i class="zmdi zmdi-view-dashboard"></i> -->
						<span>Informasi Umum</span>
					</a>
				</li>
				<!-- <li class="sidebar-header">MENU KAB/KOTA</li> -->
				<?php
				$id_kab = $kab['id_kab'];

				$query_menuutama = "SELECT * FROM `tb_menu_utama` WHERE `id_kab`= $id_kab";
				$menu_utama = $this->db->query($query_menuutama);

				foreach ($menu_utama->result_array() as $mu) :
					$id_menu_utama = $mu['id_menu_utama'];
					$cari_menu = $this->db->get_where('tb_menu', ['id_menu_utama' => $id_menu_utama])->num_rows();
					if ($cari_menu != 0) :
				?>
						<li>
							<a data-toggle="collapse" href="#menu-<?= $mu['id_menu_utama'] ?>" aria-expanded="false" aria-controls="menu-<?= $mu['id_menu_utama'] ?>">
								<span><?= $mu['judul_menu_utama'] ?></span>
								<i class="fas fa-angle-down text-white float-right"></i>
							</a>
							<ul class="sidebar-menu collapse" id="menu-<?= $mu['id_menu_utama'] ?>" style="background-color: rgba(255, 255, 255, 0.15); color:#fff">
								<?php
								$id_submenu = $mu['id_menu_utama'];
								$query_submenu = "SELECT * FROM `tb_menu` WHERE `id_kab` = $id_kab AND `id_menu_utama` = $id_submenu";
								$submenu = $this->db->query($query_submenu)->result_array();
								foreach ($submenu as $sm) :
									if ($sm['jenis_url'] == 0) :
								?>
										<li>
											<a href="<?= base_url('kab/' . $user['username'] . '/') . $sm['link'] ?>" style="padding-left: 50px;">
												<!-- <i class="<?= $sm['icon'] ?>"></i> -->
												<span><?= $sm['judul_menu'] ?></span>
											</a>
										</li>
										<?php
									else :
										if ($sm['tab_baru'] == 'Y') :
										?>
											<li>
												<a href="<?= $sm['link'] ?>" target="_blank" style="padding-left: 50px;">
													<!-- <i class="<?= $sm['icon'] ?>"></i>  -->
													<span><?= $sm['judul_menu'] ?></span>
												</a>
											</li>
										<?php
										else :
										?>
											<li>
												<a href="<?= base_url('kab/' . $user['username'] . '/page?url=') . $sm['link'] ?>" style="padding-left: 50px;">
													<!-- <i class="<?= $sm['icon'] ?>"></i>  -->
													<span><?= $sm['judul_menu'] ?></span>
												</a>
											</li>
								<?php
										endif;
									endif;
								endforeach;
								?>
							</ul>
						</li>
					<?php
					endif;
				endforeach;
				$query = "SELECT * FROM `tb_menu` WHERE `id_kab` = $id_kab AND `id_menu_utama` = 0";
				$menu = $this->db->query($query)->result_array();
				foreach ($menu as $m) :

					if ($m['jenis_url'] == 0) :
					?>
						<li>
							<a href="<?= base_url('kab/' . $user['username'] . '/') . $m['link'] ?>">
								<!-- <i class="<?= $m['icon'] ?>"></i> -->
								<span><?= $m['judul_menu'] ?></span>
							</a>
						</li>
						<?php else :
						if ($m['tab_baru'] == 'Y') {
						?>
							<li>
								<a href="<?= $m['link'] ?>" target="_blank">
									<!-- <i class="<?= $m['icon'] ?>"></i>  -->
									<span><?= $m['judul_menu'] ?></span>
								</a>
							</li>
						<?php
						} else {
						?>
							<li>
								<a href="<?= base_url('kab/' . $user['username'] . '/page?url=') . $m['link'] ?>">
									<!-- <i class="<?= $m['icon'] ?>"></i>  -->
									<span><?= $m['judul_menu'] ?></span>
								</a>
							</li>
				<?php
						}
					endif;
				endforeach; ?>

			</ul>
		</div>
		<!--End sidebar-wrapper-->

		<!--Start topbar header-->
		<header class="topbar-nav">
			<nav class="navbar navbar-expand fixed-top">
				<ul class="navbar-nav mr-auto align-items-center">
					<li class="nav-item">
						<a class="nav-link toggle-menu" href="javascript:void();">
							<i class="icon-menu menu-icon"></i>
						</a>
					</li>
					<!-- <li class="nav-item">
						<form class="search-bar">
							<input type="text" class="form-control" placeholder="Enter keywords">
							<a href="javascript:void();"><i class="icon-magnifier"></i></a>
						</form>
					</li> -->
				</ul>
			</nav>
		</header>
		<!--End topbar header-->