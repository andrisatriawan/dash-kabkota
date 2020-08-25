	<!-- Start wrapper-->
	<div id="wrapper">

		<!--Start sidebar-wrapper-->
		<div id="sidebar-wrapper" data-simplebar="" data-simplebar-auto-hide="true">
			<div class="brand-logo">
				<a href="<?= base_url('kab/') . $user['username'] ?>">
					<img src="<?= base_url('assets/images/logo-kab/') . $info['logo'] ?>" class="logo-icon">
					<h5 class="logo-text"><?= $kab['nama'] ?></h5>
				</a>
			</div>
			<ul class="sidebar-menu do-nicescrol">
				<li class="sidebar-header">MENU UTAMA</li>
				<li>
					<a href="<?= base_url('kab/') . $user['username'] ?>">
						<i class="zmdi zmdi-view-dashboard"></i> <span>Informasi Umum</span>
					</a>
				</li>
				<li class="sidebar-header">MENU KAB/KOTA</li>
				<?php
				$id_kab = $kab['id_kab'];
				$query = "SELECT * FROM `tb_menu` WHERE `id_kab` = $id_kab";
				$menu = $this->db->query($query)->result_array();
				foreach ($menu as $m) :
				?>
					<li>
						<a href="<?= base_url('kab/' . $user['username'] . '/') . $m['link'] ?>">
							<i class="<?= $m['icon'] ?>"></i> <span><?= $m['judul_menu'] ?></span>
						</a>
					</li>
				<?php endforeach; ?>

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