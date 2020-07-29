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
        $this->_template('settings/akunbaru', $data);
    }
}
