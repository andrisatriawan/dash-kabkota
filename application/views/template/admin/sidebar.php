	<!-- Start wrapper-->
	<div id="wrapper">
		<!--Start sidebar-wrapper-->
		<div id="sidebar-wrapper" data-simplebar="" data-simplebar-auto-hide="true">
			<div class="brand-logo">
				<a href="<?= base_url('dashboard') ?>">
					<div class="row">
						<div class="col-3">
							<img src="<?= base_url('assets/images/logo-kab/') . $logo ?>" class="logo-icon">
						</div>
						<div class="col-9">
							<?php
							if (substr($kab, 0, 4) == 'KAB.') {
								$sebutan = 'KABUPATEN';
								$header_kab = $sebutan . '<br>' . substr($kab, 5);
							} elseif (substr($kab, 0, 4) == 'KOTA') {
								$sebutan = 'KOTA';
								$header_kab = $sebutan . '<br>' . substr($kab, 5);
							} else {
								$sebutan = '';
								$header_kab = $kab;
							}
							?>
							<h5 class="logo-text"> <?= $header_kab ?></h5>
						</div>
					</div>
				</a>
			</div>
			<ul class="sidebar-menu do-nicescrol">
				<li>
					<a href="<?= base_url('dashboard') ?>">
						<!-- <i class="zmdi zmdi-view-dashboard"></i> -->
						<span>Beranda</span>
					</a>
				</li>
				<li class="sidebar-header">Menu Admin</li>
				<?php
				$id_role = $this->session->userdata('role');
				$query = "SELECT * FROM `tb_menu`
				JOIN `tb_akses_menu` ON `tb_menu`.`id_menu`=`tb_akses_menu`.`id_menu`
				WHERE `tb_akses_menu`.`id_role` = $id_role";
				$menu_adm = $this->db->query($query)->result_array();
				foreach ($menu_adm as $m_adm) :
				?>
					<li>
						<a href="<?= base_url($m_adm['link']) ?>">
							<!-- <i class="<?= $m_adm['icon'] ?>"></i> -->
							<span><?= $m_adm['judul_menu'] ?></span>
						</a>
					</li>

				<?php
				endforeach;
				if ($id_role == 2) :
				?>
					<li class="sidebar-header">Menu Kab/Kota</li>
					<?php
					$id_kab = $this->session->userdata('id_kab');
					$username = $this->session->userdata('username');

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
												<a href="<?= base_url('page/') . $sm['link'] ?>" style="padding-left: 50px;">
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
													<a href="<?= base_url('kab/' . $username . '/page?url=') . $sm['link'] ?>" target="_blank" style="padding-left: 50px;">
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
								<a href="<?= base_url('page/') . $m['link'] ?>">
									<!-- <i class="<?= $m['icon'] ?>"></i> -->
									<span><?= $m['judul_menu'] ?></span>
								</a>
							</li>
							<?php else : if ($m['tab_baru'] == 'Y') {
							?>
								<li>
									<a href="<?= $m['link'] ?>" target="_blank">
										<!-- <i class="<?= $m['icon'] ?>"></i> -->
										<span><?= $m['judul_menu'] ?></span>
									</a>
								</li>
							<?php
							} else {
							?>
								<li>
									<a href="<?= base_url('kab/' . $username . '/page?url=') . $m['link'] ?>">
										<!-- <i class="<?= $m['icon'] ?>"></i> -->
										<span><?= $m['judul_menu'] ?></span>
									</a>
								</li>
				<?php
							}
						endif;
					endforeach;
				endif; ?>
				<li class="sidebar-header">Akun</li>
				<li>
					<a href="<?= base_url('auth/logout') ?>">
						<!-- <i class="fas fa-sign-out-alt"></i> -->
						<span>Logout</span>
					</a>
				</li>
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


		<div class="clearfix"></div>