	<!-- Start wrapper-->
	<div id="wrapper">
		<!--Start sidebar-wrapper-->
		<div id="sidebar-wrapper" data-simplebar="" data-simplebar-auto-hide="true">
			<div class="brand-logo">
				<a href="<?= base_url('dashboard') ?>">
					<h5 class="logo-text"><?= $kab ?></h5>
				</a>
			</div>
			<ul class="sidebar-menu do-nicescrol">
				<li>
					<a href="<?= base_url('dashboard') ?>">
						<i class="zmdi zmdi-view-dashboard"></i> <span>Beranda</span>
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
							<i class="<?= $m_adm['icon'] ?>"></i> <span><?= $m_adm['judul_menu'] ?></span>
						</a>
					</li>

				<?php
				endforeach;
				if ($id_role == 2) :
				?>
					<li class="sidebar-header">Menu Kab/Kota</li>
					<?php
					$id_kab = $this->session->userdata('id_kab');
					$query = "SELECT * FROM `tb_menu` WHERE `id_kab` = $id_kab";
					$menu = $this->db->query($query)->result_array();
					$username = $this->session->userdata('username');
					foreach ($menu as $m) :
					?>
						<li>
							<a href="<?= base_url('kab/' . $username . '/' . $m['link']) ?>">
								<i class="<?= $m['icon'] ?>"></i> <span><?= $m['judul_menu'] ?></span>
							</a>
						</li>
				<?php endforeach;
				endif; ?>
				<li>
					<a href="<?= base_url('auth/logout') ?>">
						<i class="fas fa-sign-out-alt"></i> <span>Logout</span>
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
					<li class="nav-item">
						<form class="search-bar">
							<input type="text" class="form-control" placeholder="Enter keywords">
							<a href="javascript:void();"><i class="icon-magnifier"></i></a>
						</form>
					</li>
				</ul>
			</nav>
		</header>
		<!--End topbar header-->


		<div class="clearfix"></div>