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
        $data['logo'] = 'logo-provsu.png';

        $cek_login = $this->db->get_where('tb_users', ['username' => $this->session->userdata('username')])->num_rows();
        if ($cek_login != 0) {
            redirect(base_url('dashboard'));
        }
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
        $user = $this->db->get_where('tb_users', ['username' => $username])->row_array();
        if ($user) {
            if (password_verify($password, $user['password'])) {
                $data = [
                    'username' => $user['username'],
                    'id_kab' => $user['id_kab'],
                    'role' => $user['id_role']
                ];

                $this->session->set_userdata($data);

                $this->session->set_flashdata('messege', '<div class="alert alert-success p-2" role="alert">Berhasil Login!</div>');
                redirect(base_url('dashboard'));
            } else {
                $this->session->set_flashdata('messege', '<div class="alert alert-danger p-2" role="alert">Username atau password salah!</div>');
                redirect(base_url('auth/login'));
            }
        } else {
            $this->session->set_flashdata('messege', '<div class="alert alert-danger p-2" role="alert">Username tidak ditemukan!</div>');
            redirect(base_url('auth/login'));
        }
    }

    public function logout()
    {
        $userdata = ['username', 'id_kab', 'role'];
        $this->session->unset_userdata('username');
        $this->session->unset_userdata('is_kab');
        $this->session->unset_userdata('role');

        redirect(base_url('auth'));
    }
}
