<?php
defined('BASEPATH') or exit('No direct script access allowed');

class M_home extends CI_Model
{
    public function getKab($id = '')
    {
        $this->db->select('*');
        $this->db->from('tb_kab');
        // $this->db->join('tb_informasi', 'tb_kab.id_kab=tb_informasi.id_kab');
        $this->db->where('id_kab',  $id);
        return $this->db->get();
    }
}
