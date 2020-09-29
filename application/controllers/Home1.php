<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Home1 extends CI_Controller
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
        $kab = $this->M_home->getKab($id);

        if ($kab->num_rows() == 1) {
            $data['header'] = $this->db->get_where('tb_kab', ['id_kab' => $kab->row('id_kab')])->row('nama');
            $data['kab'] = $this->db->get_where('tb_kab', ['id_kab' => $kab->row('id_kab')])->row_array();;
            $data['user'] = $kab->row_array();
            $data['info'] = $this->db->get_where('tb_informasi', ['id_kab' => $kab->row('id_kab')])->row_array();

            $this->_template('index', $data);
        } else {
            $this->load->view('404');
        }
    }

    public function page($id_kab, $url)
    {
        $kab = $this->M_home->getKab($id_kab);

        $url_laman = @$_GET['url'];

        if ($url_laman) {
            if ($url != 'page') {
                return $this->load->view('404');
            } else {
                $this->db->where('id_kab', $kab->row('id_kab'));
                $this->db->where('link', $url_laman);
                $laman = $this->db->get('tb_menu');
                $tanda = 'URL Laman';
            }
        } else {
            $this->db->where('id_kab', $kab->row('id_kab'));
            $this->db->where('link', $url);
            $laman = $this->db->get('tb_menu');
            $tanda = 'Bukan URL Laman';
        }

        if ($laman->num_rows() == 1) {
            $data['header'] = $this->db->get_where('tb_kab', ['id_kab' => $kab->row('id_kab')])->row('nama');
            $data['kab'] = $this->db->get_where('tb_kab', ['id_kab' => $kab->row('id_kab')])->row_array();;
            $data['user'] = $kab->row_array();
            $data['info'] = $this->db->get_where('tb_informasi', ['id_kab' => $kab->row('id_kab')])->row_array();

            if ($laman->row('jenis_url') == 0) {
                $this->_template('pages', $data);
            } else {
                $this->_template('pages_url', $data);
            }
        } else {
            $this->load->view('404');
        }
    }
}
