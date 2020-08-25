<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Home extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('M_home');
    }

    public function index()
    {
        redirect(base_url('home/kab'));
    }

    function _template($loc, $data)
    {
        $this->load->view('template/header', $data);
        $this->load->view('template/sidebar');
        $this->load->view($loc, $data);
        $this->load->view('template/footer');
    }

    public function kab($id = '')
    {
        // echo $id;
        $kab = $this->M_home->getKab($id);

        // echo $kab->num_rows();

        if ($kab->num_rows() == 1) {
            $data['header'] = $this->db->get_where('tb_kab', ['id_kab' => $kab->row('id_kab')])->row('nama');
            $data['kab'] = $this->db->get_where('tb_kab', ['id_kab' => $kab->row('id_kab')])->row_array();;
            $data['user'] = $kab->row_array();
            $data['info'] = $this->db->get_where('tb_informasi', ['id_kab' => $kab->row('id_kab')])->row_array();

            $this->_template('index', $data);
        } else {
            $this->load->view('404');
            // $this->load->view('template/footer');
        }
    }

    public function page($id_kab, $laman)
    {
        $kab = $this->M_home->getKab($id_kab);
        $laman = $this->db->get_where('tb_menu', ['link' => $laman]);

        if ($laman->num_rows() == 1) {
            $data['header'] = $this->db->get_where('tb_kab', ['id_kab' => $kab->row('id_kab')])->row('nama');
            $data['kab'] = $this->db->get_where('tb_kab', ['id_kab' => $kab->row('id_kab')])->row_array();;
            $data['user'] = $kab->row_array();
            $data['info'] = $this->db->get_where('tb_informasi', ['id_kab' => $kab->row('id_kab')])->row_array();

            $this->_template('pages', $data);
        } else {
            echo 'laman tidak ditemukan';
        }


        // echo 'ini halaman kabupaten ' . $id_kab . ' dan dipanggil halaman ' . $laman;
    }
}
