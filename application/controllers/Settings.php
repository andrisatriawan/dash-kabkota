<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Settings extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $cek_login = $this->db->get_where('tb_users', ['username' => $this->session->userdata('username')])->num_rows();
        if ($cek_login == 0) {
            redirect(base_url('auth'));
        }
        $this->load->library('form_validation');
    }

    function kab()
    {
        if ($this->session->userdata('role') == 2) {
            return $this->db->get_where('tb_kab', ['id_kab' => $this->session->userdata('id_kab')])->row('nama');
        } else {
            $a = 'Dashboard Kab/Kota';
            return $a;
        }
    }

    function _template($loc, $data)
    {
        $data['kab'] = $this->kab();
        $this->load->view('template/header', $data);
        $this->load->view('template/admin/sidebar', $data);
        $this->load->view($loc, $data);
        $this->load->view('template/footer');
    }

    // Manajemen Users

    public function users()
    {
        if ($this->db->get_where('tb_users', ['username' => $this->session->userdata('username')])->row('id_role') == 2) {
            redirect(base_url('dashboard'));
        }
        $data['header'] = 'Manajemen Akun';
        $this->form_validation->set_rules('username', 'username', 'trim|required');
        $this->form_validation->set_rules('role', 'role', 'trim|required');

        if ($this->form_validation->run() == false) {
            $data['role'] = $this->db->get('tb_role')->result_array();
            $data['users'] = $this->db->get('tb_users')->result_array();
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

    public function cekKab($id)
    {
        echo $this->db->get_where('tb_users', ['id_kab' => $id])->num_rows();
    }

    public function getKab($id)
    {
        $this->db->like('nama', $id);
        $this->db->order_by('nama', 'ASC');
        $kab = $this->db->get('tb_kab')->result_array();
        echo "<option value=''>Pilih</option>";
        foreach ($kab as $kabupaten) {
            echo "<option value='" . $kabupaten['id_kab'] . "'>" . substr($kabupaten['nama'], 5)  . " </option>";
        }
    }

    public function updateuser()
    {
        $id_user = $this->input->post('id_user');
        $data = [
            'username' => $this->input->post('edit_user'),
            'password' => password_hash($this->input->post('edit_password'), PASSWORD_DEFAULT)
        ];

        $this->db->where('id_user', $id_user);
        $this->db->update('tb_users', $data);

        $this->session->set_flashdata('pesan', '<div class="alert alert-success p-2" role="alert">Berhasil diubah!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button></div>');
    }

    public function hapususer($id)
    {
        $this->db->where('id_user', $id);
        $this->db->delete('tb_users');
        $this->session->set_flashdata('pesan', '<div class="alert alert-danger p-2" role="alert">Berhasil dihapus!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button></div>');
        redirect(base_url('settings/users'));
    }

    // Manajemen Menu

    public function menu()
    {
        $id_kab = $this->session->userdata('id_kab');
        $data['header'] = 'Manajemen Menu';

        $data['menu'] = $this->db->get_where('tb_menu', ['id_kab' => $id_kab])->result_array();
        $data['role'] = $this->db->get('tb_role')->result_array();
        $data['akses_menu'] = $this->_aksesmenu();
        $this->_template('settings/menu', $data);
    }

    function _aksesmenu()
    {
        $query = "SELECT * FROM `tb_akses_menu`
        JOIN `tb_menu` ON `tb_menu`.`id_menu`=`tb_akses_menu`.`id_menu`
        JOIN `tb_role` ON `tb_role`.`id_role`=`tb_akses_menu`.`id_role`
        ";
        return $this->db->query($query)->result_array();
    }

    public function simpanmenu()
    {
        $this->form_validation->set_rules('judul_menu', 'Judul Menu', 'trim|required');
        $this->form_validation->set_rules('link', 'Link', 'trim|required');

        if ($this->form_validation->run() == false) {
            $this->session->set_flashdata('pesan', '<div class="alert alert-danger p-2" role="alert">Gagal disimpan!</div>');
            $this->menu();
        } else {
            if ($this->input->post('icon') == '') {
                $icon = 'fas fa-stream';
            } else {
                $icon = $this->input->post('icon');
            }
            $data = [
                'id_kab' => $this->session->userdata('id_kab'),
                'judul_menu' => $this->input->post('judul_menu'),
                'link' => $this->input->post('link'),
                'icon' => $icon
            ];
            $this->db->insert('tb_menu', $data);
            $this->session->set_flashdata('pesan', '<div class="alert alert-success p-2" role="alert">Berhasil disimpan!
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button></div>');
        }
    }

    public function hapusmenu($id)
    {
        $cek = $this->db->get_where('tb_menu', ['id_menu' => $id])->num_rows();
        if ($cek != 1) {
            $this->session->set_flashdata('pesan', '<div class="alert alert-danger alert-dismissible fade show p-2" role="alert">
            Gagal dihapus, data tidak ditemukan!
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            </div>');
            redirect(base_url('settings/menu'));
        } else {
            $this->db->where('id_menu', $id);
            $this->db->delete('tb_menu');
            $this->session->set_flashdata('pesan', '<div class="alert alert-danger alert-dismissible fade show p-2" role="alert">
            Data dihapus!
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            </div>');
            redirect(base_url('settings/menu'));
        }
    }

    public function updatemenu()
    {
        $id_menu = $this->input->post('edit_id');
        $cek = $this->db->get_where('tb_menu', ['id_menu' => $id_menu])->num_rows();
        if ($cek == 0) {
            $this->session->set_flashdata('pesan', '<div class="alert alert-danger alert-dismissible fade show p-2" role="alert">
            Gagal diubah, data tidak ditemukan!
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            </div>');
        } else {
            $data = [
                'judul_menu' => $this->input->post('edit_judul_menu'),
                'link' => $this->input->post('edit_link'),
                'icon' => $this->input->post('edit_icon')
            ];
            $this->db->where('id_menu', $id_menu);
            $this->db->update('tb_menu', $data);
            $this->session->set_flashdata('pesan', '<div class="alert alert-success p-2" role="alert">Berhasil diubah!
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button></div>');
        }
    }

    public function cekUrl()
    {
        $link = $this->input->post('link');
        $this->db->where('id_kab', $this->session->userdata('id_kab'));
        $this->db->where('link', $link);
        echo $this->db->get('tb_menu')->num_rows();
    }

    // Manajemen Akses Menu
    public function simpanakses()
    {
        $this->db->where('id_menu', $this->input->post('a_menu'));
        $this->db->where('id_role', $this->input->post('a_role'));
        $cek = $this->db->get('tb_akses_menu')->num_rows();
        if ($cek != 1) {
            $data = [
                'id_menu' => $this->input->post('a_menu'),
                'id_role' => $this->input->post('a_role')
            ];
            $this->db->insert('tb_akses_menu', $data);
            $this->session->set_flashdata('pesan', '<div class="alert alert-success p-2" role="alert">Berhasil disimpan!
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button></div>');
        } else {
            $this->session->set_flashdata('pesan', '<div class="alert alert-danger p-2" role="alert">Gagal disimpan, data sudah ada!
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button></div>');
        }
    }

    public function hapusakses($id)
    {
        $cekakses = $this->db->get_where('tb_akses_menu', ['id_akses' => $id])->num_rows();
        if ($cekakses != 1) {
            $this->session->set_flashdata('pesan', '<div class="alert alert-danger alert-dismissible fade show p-2" role="alert">
            Gagal dihapus, data tidak ditemukan!
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            </div>');
            redirect(base_url('settings/menu'));
        } else {
            $this->db->where('id_akses', $id);
            $this->db->delete('tb_akses_menu');

            $this->session->set_flashdata('pesan', '<div class="alert alert-success alert-dismissible fade show p-2" role="alert">
            Data dihapus!
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>');
            redirect(base_url('settings/menu'));
        }
    }

    public function sosmed()
    {
        if ($this->session->userdata('role') == 1) {
            $data['header'] = 'Sosial Media';
            $data['sosmed'] = $this->db->get('tb_sosmed');
            $this->_template('settings/sosmed', $data);
        } else {
            $data['header'] = 'Sosial Media';
            $data['sosmed'] = $this->db->get_where('tb_sosmed_kab', ['id_kab' => $this->session->userdata('id_kab')]);
            $this->_template('settings/sosmed_kab', $data);
        }
    }

    public function simpansosmed()
    {
        if ($this->session->userdata('role') == 1) {
            $this->form_validation->set_rules('sosmed', 'sosmed', 'required|trim');
            $this->form_validation->set_rules('icon', 'icon', 'required|trim');

            if ($this->form_validation->run() == false) {
                $this->session->set_flashdata('pesan', '<div class="alert alert-danger p-2" role="alert">Gagal disimpan!
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button></div>');
                $this->sosmed();
            } else {
                $data = [
                    'sosmed' => $this->input->post('sosmed'),
                    'icon' => $this->input->post('icon')
                ];
                $this->db->insert('tb_sosmed', $data);
                $this->session->set_flashdata('pesan', '<div class="alert alert-success p-2" role="alert">Berhasil disimpan!
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button></div>');
            }
        } else {
            $this->form_validation->set_rules('sosmed', 'sosmed', 'required|trim');
            $this->form_validation->set_rules('link', 'link', 'required|trim');

            if ($this->form_validation->run() == false) {
                $this->session->set_flashdata('pesan', '<div class="alert alert-danger p-2" role="alert">Gagal disimpan!
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button></div>');
                $this->sosmed();
            } else {
                $data = [
                    'id_kab' => $this->session->userdata('id_kab'),
                    'id_sosmed' => $this->input->post('sosmed'),
                    'link' => $this->input->post('link')
                ];
                $this->db->insert('tb_sosmed_kab', $data);
                $this->session->set_flashdata('pesan', '<div class="alert alert-success p-2" role="alert">Berhasil disimpan!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button></div>');
            }
        }
    }

    public function updatesosmed()
    {
        if ($this->session->userdata('role') == 1) {
            $id_sosmed = $this->input->post('a_id');
            $cek = $this->db->get_where('tb_sosmed', ['id_sosmed' => $id_sosmed])->num_rows();
            if ($cek != 1) {
                $this->session->set_flashdata('pesan', '<div class="alert alert-danger alert-dismissible fade show p-2" role="alert">
                Gagal diubah, data tidak ditemukan!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>');
            } else {
                $data = [
                    'sosmed' => $this->input->post('a_sosmed'),
                    'icon' => $this->input->post('a_icon')
                ];
                $this->db->where('id_sosmed', $id_sosmed);
                $this->db->update('tb_sosmed', $data);
                $this->session->set_flashdata('pesan', '<div class="alert alert-success p-2" role="alert">Berhasil diubah!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button></div>');
            }
        } else {
            $id = $this->input->post('a_id');
            $cek = $this->db->get_where('tb_sosmed_kab', ['id' => $id])->num_rows();
            if ($cek != 1) {
                $this->session->set_flashdata('pesan', '<div class="alert alert-danger alert-dismissible fade show p-2" role="alert">
                Gagal diubah, data tidak ditemukan!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>');
            } else {
                $data = [
                    'link' => $this->input->post('a_link')
                ];
                $this->db->where('id', $id);
                $this->db->update('tb_sosmed_kab', $data);
                $this->session->set_flashdata('pesan', '<div class="alert alert-success p-2" role="alert">Berhasil diubah!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button></div>');
            }
        }
    }

    public function hapussosmed($id)
    {
        if ($this->session->userdata('role') == 1) {
            $cek = $this->db->get_where('tb_sosmed', ['id_sosmed' => $id])->num_rows();
            if ($cek != 1) {
                $this->session->set_flashdata('pesan', '<div class="alert alert-danger alert-dismissible fade show p-2" role="alert">
                Gagal dihapus, data tidak ditemukan!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>');
                redirect(base_url('settings/sosmed'));
            } else {
                $this->db->where('id_sosmed', $id);
                $this->db->delete('tb_sosmed');
                $this->session->set_flashdata('pesan', '<div class="alert alert-success alert-dismissible fade show p-2" role="alert">
                Data dihapus!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>');
                redirect(base_url('settings/sosmed'));
            }
        } else {
            $cek = $this->db->get_where('tb_sosmed_kab', ['id' => $id])->num_rows();
            if ($cek != 1) {
                $this->session->set_flashdata('pesan', '<div class="alert alert-danger alert-dismissible fade show p-2" role="alert">
                Gagal dihapus, data tidak ditemukan!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>');
                redirect(base_url('settings/sosmed'));
            } else {
                $this->db->where('id', $id);
                $this->db->delete('tb_sosmed_kab');
                $this->session->set_flashdata('pesan', '<div class="alert alert-success alert-dismissible fade show p-2" role="alert">
                Data dihapus!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>');
                redirect(base_url('settings/sosmed'));
            }
        }
    }
}
