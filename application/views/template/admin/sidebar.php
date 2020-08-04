	<!-- Start wrapper-->
	<div id="wrapper" style="height: 100%;">
		<!--Start sidebar-wrapper-->
		<div id="sidebar-wrapper" data-simplebar="" data-simplebar-auto-hide="true">
			<div class="brand-logo">
				<a href="index.html">
					<img src="<?= base_url() ?>assets/images/asahan.gif" class="logo-icon" alt="logo icon">
					<h5 class="logo-text">Kab. Asahan</h5>
				</a>
			</div>
			<ul class="sidebar-menu do-nicescrol">
				<li class="sidebar-header">MENU</li>
				<li>
					<a href="index.html">
						<i class="zmdi zmdi-view-dashboard"></i> <span>Beranda</span>
					</a>
				</li>
				<?php
				$id_role = $this->session->userdata('role');
				$query = "SELECT * FROM `tb_menu`
				JOIN `tb_akses_menu`
				ON `tb_menu`.`id_menu` = `tb_akses_menu`.`id_menu`
				WHERE `tb_akses_menu`.`id_role` = $id_role
				";
				$menu = $this->db->query($query)->result_array();

				foreach ($menu as $m) :
				?>
					<li>
						<a href="<?= $m['link'] ?>">
							<i class="<?= $m['icon'] ?>"></i> <span><?= $m['judul_menu'] ?></span>
						</a>
					</li>
				<?php
				endforeach;
				?>
				<li>
					<a href="">
						<i class="fa fa-sign-out"></i> <span>Logout</span>
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