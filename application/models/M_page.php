<?php
defined('BASEPATH') or exit('No direct script access allowed');

class M_page extends CI_Model
{
    public function getMenu($link)
    {
        $id_kab = $this->session->userdata('id_kab');
        $this->db->where('id_kab', $id_kab);
        $this->db->where('link', $link);
        return $this->db->get('tb_menu');
    }

    public function getLaman($id_menu)
    {
        return $this->db->get_where('tb_laman', ['id_menu' => $id_menu]);
    }
}
