<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Notfound extends CI_Controller
{
    public function index()
    {
        $this->load->view('404');
        $this->load->view('template/footer');
    }
}
