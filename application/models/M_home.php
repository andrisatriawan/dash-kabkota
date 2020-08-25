<?php
defined('BASEPATH') or exit('No direct script access allowed');

class M_home extends CI_Model
{
    public function getKab($id = '')
    {
        $this->db->select('*');
        $this->db->from('tb_users');
        // $this->db->join('tb_informasi', 'tb_kab.id_kab=tb_informasi.id_kab');
        $this->db->where('username',  $id);
        return $this->db->get();
    }
}
