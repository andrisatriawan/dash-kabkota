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
				<li>
					<a data-toggle="collapse" href="#menu-expand" aria-expanded="false" aria-controls="menu-expand">
						<i class="zmdi zmdi-format-list-bulleted"></i> <span>Daftar OPD</span>
					</a>
					<ul class="sidebar-menu collapse" id="menu-expand">
						<li>
							<a href="e-buletin.html" style="padding-left: 40px;">
								<i class=""></i> <span>E-Buletin</span>
							</a>
						</li>
						<li>
							<a href="jdih.html" style="padding-left: 40px;">
								<i class=""></i> <span>JDIH</span>
							</a>
						</li>
					</ul>
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