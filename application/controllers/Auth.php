<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Auth extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->library('form_validation');
    }

    public function index()
    {
        redirect(base_url('auth/login'));
    }

    public function login()
    {
        $data['header'] = 'Login';
        $this->form_validation->set_rules('username', 'username', 'required|trim');
        $this->form_validation->set_rules('password', 'password', 'required|trim|min_length[6]');

        if ($this->form_validation->run() == false) {
            $this->load->view('template/header', $data);
            $this->load->view('auth/login');
            $this->load->view('template/footer');
        } else {
            $this->_login();
        }
    }

    function _login()
    {
        $username = $this->input->post('username');
        $password = $this->input->post('password');

        if ($username == 'admin' && $password == 'admin1') {
            echo 'Berhasil masuk ke Dashboard admin';
        } else {
            $this->session->set_flashdata('messege', '<div class="alert alert-danger p-2" role="alert">Username dan password salah!</div>');
            redirect(base_url('auth/login'));
        }
    }
}
