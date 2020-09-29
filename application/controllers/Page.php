<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Page extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $cek_login = $this->db->get_where('tb_users', ['username' => $this->session->userdata('username')])->num_rows();
        if ($cek_login == 0) {
            redirect(base_url('auth'));
        }
        $this->load->model('M_page');
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

    function _template($loc, $data)
    {
        $data['kab'] = $this->kab();
        $this->load->view('template/header', $data);
        $this->load->view('template/admin/sidebar');
        $this->load->view($loc, $data);
        $this->load->view('template/footer');
    }

    public function index($link = '')
    {
        $laman = $this->M_page->getMenu($link);
        $data['header'] = 'Edit Laman ' . $link;
        $data['logo'] = $this->db->get_where('tb_informasi', ['id_kab' => $this->session->userdata('id_kab')])->row('logo');
        $data['laman'] = $laman;
        $id_menu = $laman->row('id_menu');

        $data['isi_laman'] = $this->db->get_where('tb_laman', ['id_menu' => $id_menu]);
        $this->_template('dashboard/page', $data);
    }

    public function simpan($id_menu)
    {
        $cek_data = $this->M_page->getLaman($id_menu)->num_rows();
        if ($cek_data != 1) {
            $data = [
                'id_menu' => $id_menu,
                'isi' => $this->input->post('page_input')
            ];
            $simpan = $this->db->insert('tb_laman', $data);
            echo json_encode($simpan);
        } else {
            $data = [
                'isi' => $this->input->post('page_input')
            ];
            $this->db->where('id_menu', $id_menu);
            $simpan = $this->db->update('tb_laman', $data);
            echo json_encode($simpan);
        }
    }
}
