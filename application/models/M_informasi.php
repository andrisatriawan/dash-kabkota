<?php
defined('BASEPATH') or exit('No direct script access allowed');

class M_informasi extends CI_Model
{
    function uploadFile($nama, $folder, $field)
    {
        $config['upload_path'] = $folder;
        $config['file_name'] = $nama;
        $config['allowed_types'] = 'gif|jpg|jpeg|png';
        $config['max_size'] = 2048;
        $config['overwrite'] = true;

        $this->load->library('upload', $config);
        $this->upload->initialize($config);

        if ($this->upload->do_upload($field)) {
            return $this->upload->data('file_name');
        } else {
            return 'default.jpg';
        }

        return $nama;
    }

    public function save()
    {
        $id_kab = $this->session->userdata('id_kab');
        $nama_logo = 'LOGO_' . $id_kab;
        $nama_foto = 'KANTOR_' . $id_kab;
        $upload_logo = $this->uploadFile($nama_logo, 'assets/images/logo-kab/', 'logo');
        $upload_foto = $this->uploadFile($nama_foto, 'assets/images/gedung/', 'foto_kantor');
        $data = [
            'id_kab' => $id_kab,
            'kepala_daerah' => $this->input->post('kepala_daerah'),
            'wakil_kepala_daerah' => $this->input->post('wakil_kepala_daerah'),
            'alamat_kantor' => $this->input->post('alamat_kantor'),
            'url_peta' => $this->input->post('url_peta'),
            'luas_wilayah' => $this->input->post('luas_wilayah'),
            'jumlah_kec' => $this->input->post('jumlah_kec'),
            'jumlah_kel' => $this->input->post('jumlah_kel'),
            'jumlah_desa' => $this->input->post('jumlah_desa'),
            'logo' => $upload_logo,
            'foto_kantor' => $upload_foto
        ];
        $this->db->insert('tb_informasi', $data);
    }

    public function update()
    {
        $id_kab = $this->session->userdata('id_kab');
        $nama_logo = 'LOGO_' . $id_kab;
        $nama_foto = 'KANTOR_' . $id_kab;
        if (!empty($_FILES['logo']['name'])) {
            $logo = $this->uploadFile($nama_logo, 'assets/images/logo-kab/', 'logo');
        } else {
            $logo = $this->input->post('old_logo');
        }
        if (!empty($_FILES['foto_kantor']['name'])) {
            $foto = $this->uploadFile($nama_foto, 'assets/images/gedung/', 'foto_kantor');
        } else {
            $foto = $this->input->post('old_foto_kantor');
        }

        $data = [
            'id_kab' => $id_kab,
            'kepala_daerah' => $this->input->post('kepala_daerah'),
            'wakil_kepala_daerah' => $this->input->post('wakil_kepala_daerah'),
            'alamat_kantor' => $this->input->post('alamat_kantor'),
            'url_peta' => $this->input->post('url_peta'),
            'luas_wilayah' => $this->input->post('luas_wilayah'),
            'jumlah_kec' => $this->input->post('jumlah_kec'),
            'jumlah_kel' => $this->input->post('jumlah_kel'),
            'jumlah_desa' => $this->input->post('jumlah_desa'),
            'logo' => $logo,
            'foto_kantor' => $foto
        ];
        $this->db->where('id_kab', $id_kab);
        $this->db->update('tb_informasi', $data);
    }
}
