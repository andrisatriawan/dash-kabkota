<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Home extends CI_Controller
{
    public function index()
    {
        redirect(base_url('home/kab'));
    }

    public function kab($id = '')
    {
        $data['header'] = 'Kabupaten Asahan';
        $data['id_kab'] = $id;
        $this->load->view('template/header', $data);
        $this->load->view('template/sidebar');
        $this->load->view('index');
        $this->load->view('template/footer');
    }
}
