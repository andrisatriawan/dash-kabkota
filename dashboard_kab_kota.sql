-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 10, 2020 at 05:38 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dashboard_kab_kota`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_akses_menu`
--

CREATE TABLE `tb_akses_menu` (
  `id_akses` int(11) NOT NULL,
  `id_menu` int(11) NOT NULL,
  `id_role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_akses_menu`
--

INSERT INTO `tb_akses_menu` (`id_akses`, `id_menu`, `id_role`) VALUES
(1, 1, 1),
(3, 1, 2),
(4, 13, 2),
(5, 17, 1),
(9, 22, 1),
(10, 22, 2),
(11, 33, 2);

-- --------------------------------------------------------

--
-- Table structure for table `tb_informasi`
--

CREATE TABLE `tb_informasi` (
  `id_informasi` int(11) NOT NULL,
  `id_kab` int(11) DEFAULT NULL,
  `kepala_daerah` varchar(100) DEFAULT NULL,
  `wakil_kepala_daerah` varchar(100) DEFAULT NULL,
  `alamat_kantor` varchar(100) DEFAULT NULL,
  `url_peta` varchar(500) NOT NULL,
  `luas_wilayah` float DEFAULT NULL,
  `jumlah_kec` int(11) DEFAULT NULL,
  `jumlah_kel` int(11) DEFAULT NULL,
  `jumlah_desa` int(11) DEFAULT NULL,
  `logo` varchar(100) DEFAULT NULL,
  `foto_kantor` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_informasi`
--

INSERT INTO `tb_informasi` (`id_informasi`, `id_kab`, `kepala_daerah`, `wakil_kepala_daerah`, `alamat_kantor`, `url_peta`, `luas_wilayah`, `jumlah_kec`, `jumlah_kel`, `jumlah_desa`, `logo`, `foto_kantor`) VALUES
(3, 1209, 'H. Surya, B.Sc', '-', 'Jl. Jend. Sudirman No.5, Kel. Makar Baru, Kec. Kisaran Barat, Kab. Asahan, 21211', '<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.393741266485!2d99.61064361475692!3d2.988087497823818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30324be9c8cf35b3%3A0xdeea6be326081c67!2sKantor%20Bupati%20Asahan!5e0!3m2!1sid!2sid!4v1599449310804!5m2!1sid!2sid\" width=\"800\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>', 3702.21, 25, 27, 177, 'LOGO_1209.gif', 'KANTOR_1209.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tb_kab`
--

CREATE TABLE `tb_kab` (
  `id_kab` int(11) NOT NULL,
  `nama` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_kab`
--

INSERT INTO `tb_kab` (`id_kab`, `nama`) VALUES
(1201, 'KAB. TAPANULI TENGAH'),
(1202, 'KAB. TAPANULI UTARA'),
(1203, 'KAB. TAPANULI SELATAN'),
(1204, 'KAB. NIAS'),
(1205, 'KAB. LANGKAT'),
(1206, 'KAB. KARO'),
(1207, 'KAB. DELI SERDANG'),
(1208, 'KAB. SIMALUNGUN'),
(1209, 'KAB. ASAHAN'),
(1210, 'KAB. LABUHANBATU'),
(1211, 'KAB. DAIRI'),
(1212, 'KAB. TOBA SAMOSIR'),
(1213, 'KAB. MANDAILING NATAL'),
(1214, 'KAB. NIAS SELATAN'),
(1215, 'KAB. PAKPAK BHARAT'),
(1216, 'KAB. HUMBANG HASUNDUTAN'),
(1217, 'KAB. SAMOSIR'),
(1218, 'KAB. SERDANG BEDAGAI'),
(1219, 'KAB. BATU BARA'),
(1220, 'KAB. PADANG LAWAS UTARA'),
(1221, 'KAB. PADANG LAWAS'),
(1222, 'KAB. LABUHANBATU SELATAN'),
(1223, 'KAB. LABUHANBATU UTARA'),
(1224, 'KAB. NIAS UTARA'),
(1225, 'KAB. NIAS BARAT'),
(1271, 'KOTA MEDAN'),
(1272, 'KOTA PEMATANG SIANTAR'),
(1273, 'KOTA SIBOLGA'),
(1274, 'KOTA TANJUNG BALAI'),
(1275, 'KOTA BINJAI'),
(1276, 'KOTA TEBING TINGGI'),
(1277, 'KOTA PADANGSIDIMPUAN'),
(1278, 'KOTA GUNUNGSITOLI');

-- --------------------------------------------------------

--
-- Table structure for table `tb_kecamatan`
--

CREATE TABLE `tb_kecamatan` (
  `id_kec` int(11) NOT NULL,
  `id_kab` int(11) DEFAULT NULL,
  `nama` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tb_menu`
--

CREATE TABLE `tb_menu` (
  `id_menu` int(11) NOT NULL,
  `id_kab` int(11) NOT NULL,
  `id_menu_utama` int(11) NOT NULL,
  `judul_menu` varchar(100) DEFAULT NULL,
  `jenis_url` int(11) NOT NULL,
  `link` varchar(200) DEFAULT NULL,
  `tab_baru` enum('Y','N') NOT NULL,
  `icon` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_menu`
--

INSERT INTO `tb_menu` (`id_menu`, `id_kab`, `id_menu_utama`, `judul_menu`, `jenis_url`, `link`, `tab_baru`, `icon`) VALUES
(1, 0, 0, 'Manajemen Menu', 0, 'settings/menu', 'N', 'fas fa-folder'),
(2, 0, 0, 'Aplikasi Daerah', 0, 'aplikasi', 'N', 'fa fa-list-ul'),
(7, 1208, 0, 'Coba', 0, 'home/test', 'N', 'fas fa-folder'),
(8, 1210, 0, 'Coba', 0, 'home/test/1', 'N', 'fas fa-folder'),
(13, 0, 0, 'Informasi Kab/Kota', 0, 'informasi', 'N', 'fas fa-info-circle'),
(17, 0, 0, 'Manajemen Users', 0, 'settings/users', 'N', 'fas fa-users'),
(19, 1209, 0, 'Data Kependudukan', 0, 'data-kependudukan', 'N', 'fas fa-users'),
(22, 0, 0, 'Sosial Media', 0, 'settings/sosmed', 'N', 'fas fa-user-friends'),
(24, 1201, 0, 'Data Kependudukan', 0, 'data-kependudukan', 'N', 'fas fa-stream'),
(25, 1209, 0, 'SSP', 1, 'http://smartprovince.sumutprov.go.id/', 'Y', 'fas fa-stream'),
(30, 1209, 0, 'Sumutprov', 1, 'https://www.sumutprov.go.id/', 'N', 'fas fa-stream'),
(33, 0, 0, 'Menu Utama', 0, 'settings/menu_utama', 'N', 'fas fa-folder'),
(35, 1209, 2, 'Submenu 1', 0, 'submenu-1', 'N', 'fas fa-stream'),
(36, 1209, 2, 'Submenu 2', 0, 'submenu-2', 'N', 'fas fa-stream'),
(37, 1201, 5, 'Submenu 1', 0, 'submenu-1', 'N', 'fas fa-stream');

-- --------------------------------------------------------

--
-- Table structure for table `tb_menu_utama`
--

CREATE TABLE `tb_menu_utama` (
  `id_menu_utama` int(11) NOT NULL,
  `id_kab` int(11) NOT NULL,
  `judul_menu_utama` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_menu_utama`
--

INSERT INTO `tb_menu_utama` (`id_menu_utama`, `id_kab`, `judul_menu_utama`) VALUES
(2, 1209, 'Coba'),
(3, 1209, 'Tes'),
(4, 0, 'Tanpa Menu Utama'),
(5, 1201, 'Menu 1');

-- --------------------------------------------------------

--
-- Table structure for table `tb_opd`
--

CREATE TABLE `tb_opd` (
  `id_opd` int(11) NOT NULL,
  `id_kab` int(11) DEFAULT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `link` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tb_role`
--

CREATE TABLE `tb_role` (
  `id_role` int(11) NOT NULL,
  `level` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_role`
--

INSERT INTO `tb_role` (`id_role`, `level`) VALUES
(1, 'Super Admin'),
(2, 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `tb_sosmed`
--

CREATE TABLE `tb_sosmed` (
  `id_sosmed` int(11) NOT NULL,
  `sosmed` varchar(45) DEFAULT NULL,
  `icon` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_sosmed`
--

INSERT INTO `tb_sosmed` (`id_sosmed`, `sosmed`, `icon`) VALUES
(1, 'Facebook', 'fab fa-facebook-square'),
(2, 'Twitter', 'fab fa-twitter-square'),
(3, 'Website', 'fas fa-globe');

-- --------------------------------------------------------

--
-- Table structure for table `tb_sosmed_kab`
--

CREATE TABLE `tb_sosmed_kab` (
  `id` int(11) NOT NULL,
  `id_kab` int(11) DEFAULT NULL,
  `id_sosmed` int(11) DEFAULT NULL,
  `link` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_sosmed_kab`
--

INSERT INTO `tb_sosmed_kab` (`id`, `id_kab`, `id_sosmed`, `link`) VALUES
(2, 1209, 1, 'https://facebook.com'),
(3, 1209, 2, 'https://twitter.com'),
(4, 1209, 3, 'https://asahankab.go.id/');

-- --------------------------------------------------------

--
-- Table structure for table `tb_users`
--

CREATE TABLE `tb_users` (
  `id_user` int(11) NOT NULL,
  `id_kab` int(11) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `id_role` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_users`
--

INSERT INTO `tb_users` (`id_user`, `id_kab`, `username`, `password`, `id_role`) VALUES
(1, 0, 'admin', '$2y$10$qICTnIutixvqhTDfiRjUQO733HftFhCYwtrXDhhVvVofWpJEdB8Wu', 1),
(2, 1209, 'asahan', '$2y$10$VxVQchSHoaPVFbLNwBbzuOGJg7JtRiZWm0yw9ca0o8HsJTBOKx75C', 2),
(3, 1222, 'labusel', '$2y$10$hx2eqQf4ZcP3VQpTSr9l6.G9F9LuOxmCtfEI9iFqqdAE5pheHcUrC', 2),
(4, 1201, 'tapteng', '$2y$10$roCC09cL3WMmGpzVzGV1jeS8aqa3hOgUqFrIKyeAQmBN9nGvOdmxm', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tb_wisata`
--

CREATE TABLE `tb_wisata` (
  `id_wisata` int(11) NOT NULL,
  `id_kab` int(11) DEFAULT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `gambar` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_akses_menu`
--
ALTER TABLE `tb_akses_menu`
  ADD PRIMARY KEY (`id_akses`);

--
-- Indexes for table `tb_informasi`
--
ALTER TABLE `tb_informasi`
  ADD PRIMARY KEY (`id_informasi`);

--
-- Indexes for table `tb_kab`
--
ALTER TABLE `tb_kab`
  ADD PRIMARY KEY (`id_kab`);

--
-- Indexes for table `tb_kecamatan`
--
ALTER TABLE `tb_kecamatan`
  ADD PRIMARY KEY (`id_kec`);

--
-- Indexes for table `tb_menu`
--
ALTER TABLE `tb_menu`
  ADD PRIMARY KEY (`id_menu`);

--
-- Indexes for table `tb_menu_utama`
--
ALTER TABLE `tb_menu_utama`
  ADD PRIMARY KEY (`id_menu_utama`);

--
-- Indexes for table `tb_opd`
--
ALTER TABLE `tb_opd`
  ADD PRIMARY KEY (`id_opd`);

--
-- Indexes for table `tb_role`
--
ALTER TABLE `tb_role`
  ADD PRIMARY KEY (`id_role`);

--
-- Indexes for table `tb_sosmed`
--
ALTER TABLE `tb_sosmed`
  ADD PRIMARY KEY (`id_sosmed`);

--
-- Indexes for table `tb_sosmed_kab`
--
ALTER TABLE `tb_sosmed_kab`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_users`
--
ALTER TABLE `tb_users`
  ADD PRIMARY KEY (`id_user`);

--
-- Indexes for table `tb_wisata`
--
ALTER TABLE `tb_wisata`
  ADD PRIMARY KEY (`id_wisata`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_akses_menu`
--
ALTER TABLE `tb_akses_menu`
  MODIFY `id_akses` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tb_informasi`
--
ALTER TABLE `tb_informasi`
  MODIFY `id_informasi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tb_kab`
--
ALTER TABLE `tb_kab`
  MODIFY `id_kab` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1279;

--
-- AUTO_INCREMENT for table `tb_menu`
--
ALTER TABLE `tb_menu`
  MODIFY `id_menu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `tb_menu_utama`
--
ALTER TABLE `tb_menu_utama`
  MODIFY `id_menu_utama` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tb_opd`
--
ALTER TABLE `tb_opd`
  MODIFY `id_opd` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tb_role`
--
ALTER TABLE `tb_role`
  MODIFY `id_role` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tb_sosmed`
--
ALTER TABLE `tb_sosmed`
  MODIFY `id_sosmed` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tb_sosmed_kab`
--
ALTER TABLE `tb_sosmed_kab`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tb_users`
--
ALTER TABLE `tb_users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tb_wisata`
--
ALTER TABLE `tb_wisata`
  MODIFY `id_wisata` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
