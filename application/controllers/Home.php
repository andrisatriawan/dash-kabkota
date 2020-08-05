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
        $kab = $this->M_home->getKab($id);

        if ($kab->num_rows() == 1) {
            $data['header'] = $kab->row('nama');
            $data['kab'] = $kab->row_array();
            $data['info'] = $this->db->get_where('tb_informasi', ['id_kab' => $id])->row_array();

            $this->_template('index', $data);
        } else {
            $this->load->view('404');
            // $this->load->view('template/footer');
        }
    }

    public function test()
    {
        $data['header'] = 'Laman coba';
        $this->load->view('ex/template/header');
        $this->load->view('ex/template/sidebar');
        $this->load->view('ex/index', $data);
        $this->load->view('ex/template/footer');
    }

    public function laman()
    {
        $data['header'] = 'Laman coba';
        $this->load->view('ex/template/header');
        $this->load->view('ex/template/sidebar');
        $this->load->view('ex/laman', $data);
        $this->load->view('ex/template/footer');
    }
}
