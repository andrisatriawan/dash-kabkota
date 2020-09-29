<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Informasi extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $cek_login = $this->db->get_where('tb_users', ['username' => $this->session->userdata('username')]);
        if ($cek_login->num_rows() == 0) {
            redirect(base_url('auth'));
        } else {
            if ($cek_login->row('id_role') == 1) {
                redirect(base_url('dashboard'));
            }
        }
        $this->load->library('form_validation');
        $this->load->model('M_informasi');
    }

    function _template($loc, $data)
    {
        $data['logo'] = $this->db->get_where('tb_informasi', ['id_kab' => $this->session->userdata('id_kab')])->row('logo');
        $this->load->view('template/header', $data);
        $this->load->view('template/admin/sidebar');
        $this->load->view($loc, $data);
        $this->load->view('template/footer');
    }

    function kab()
    {
        if ($this->session->userdata('role') == 2) {
            return $this->db->get_where('tb_kab', ['id_kab' => $this->session->userdata('id_kab')])->row('nama');
        } else {
            $a = 'Dashboard Kab/Kota';
            return $a;
        }
    }

    function _validation()
    {
        $this->form_validation->set_rules('kepala_daerah', 'Kepala Daerah', 'trim|required');
        $this->form_validation->set_rules('wakil_kepala_daerah', 'Wakil Kepala Daerah', 'trim|required');
        $this->form_validation->set_rules('alamat_kantor', 'Alamat Kantor', 'trim|required');
        $this->form_validation->set_rules('luas_wilayah', 'Luas Wilayah', 'trim|required');
        $this->form_validation->set_rules('jumlah_kec', 'Jumlah Kecamatan', 'trim|required');
        $this->form_validation->set_rules('jumlah_kel', 'Jumlah Kelurahan', 'trim|required');
        $this->form_validation->set_rules('jumlah_desa', 'Jumlah Desa', 'trim|required');
    }

    public function index()
    {
        $data['header'] = 'Informasi Kabupaten/Kota';
        $data['kab'] = $this->kab();
        $informasi = $this->db->get_where('tb_informasi', ['id_kab' =>  $this->session->userdata('id_kab')]);
        $data['informasi'] = $informasi;
        $this->_validation();
        if ($this->form_validation->run() == false) {
            $this->_template('dashboard/informasi', $data);
        } else {
            if ($informasi->num_rows() == 0) {
                $this->M_informasi->save();
                $this->session->set_flashdata('messege', '<div class="alert alert-success mt-3 p-2" role="alert">Berhasil disimpan!</div>');
            } else {
                $this->M_informasi->update();
                $this->session->set_flashdata('messege', '<div class="alert alert-success mt-3 p-2" role="alert">Berhasil diubah!</div>');
            }
            redirect(base_url('informasi'));
        }
    }
}
