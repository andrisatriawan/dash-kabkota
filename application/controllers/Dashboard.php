<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Dashboard extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $cek_login = $this->db->get_where('tb_users', ['username' => $this->session->userdata('username')])->num_rows();
        if ($cek_login == 0) {
            redirect(base_url('auth'));
        }
    }

    function _template($loc, $data)
    {
        $this->load->view('template/header', $data);
        $this->load->view('template/admin/sidebar');
        $this->load->view($loc, $data);
        $this->load->view('template/footer');
    }

    public function index()
    {
        $data['header'] = 'Dashboard admin';
        $this->_template('dashboard/index', $data);
    }
}
