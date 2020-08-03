<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Settings extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->library('form_validation');
    }

    function _template($loc, $data)
    {
        $this->load->view('template/header', $data);
        $this->load->view('template/sidebar');
        $this->load->view($loc, $data);
        $this->load->view('template/footer');
    }

    public function users()
    {
        $data['header'] = 'Manajemen Akun';
        $this->form_validation->set_rules('username', 'username', 'trim|required');
        $this->form_validation->set_rules('role', 'role', 'trim|required');

        if ($this->form_validation->run() == false) {
            $data['role'] = $this->db->get('tb_role')->result_array();
            $data['kab'] = $this->db->get('tb_kab')->result_array();
            $this->_template('settings/akunbaru', $data);
        } else {
            $user = [
                'id_role' => $this->input->post('role', true),
                'id_kab' => $this->input->post('kabupaten', true),
                'username' => htmlspecialchars($this->input->post('username', true)),
                'password' => password_hash($this->input->post('password', true), PASSWORD_DEFAULT)

            ];
            $this->db->insert('tb_users', $user);
            $this->session->set_flashdata('pesan', '<div class="alert alert-success p-2" role="alert">Berhasil disimpan!</div>');
            redirect('settings/users');
        }
    }

    public function getKab($id = '')
    {
        if ($id == 2) {
            $kab = $this->db->get('tb_kab')->result_array();
            echo "<option value=''>Pilih</option>";
            foreach ($kab as $kabupaten) {
                echo "<option value='" . $kabupaten['id_kab'] . "'>" . $kabupaten['nama'] . " </option>";
            }
        } else {
            echo "<option value=''>Pilih</option>";
        }
    }
}
