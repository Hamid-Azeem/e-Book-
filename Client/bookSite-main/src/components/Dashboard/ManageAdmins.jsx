import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, TextInput, Label } from 'flowbite-react';
import { HiOutlineTrash, HiOutlinePencilAlt, HiOutlineUserAdd } from 'react-icons/hi';

const ManageAdmins = () => {
  const api = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  // Fetch admins
  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${api}/admins`);
      if (!response.ok) throw new Error('Failed to fetch admins');
      const data = await response.json();
      setAdmins(data || []);
      setError('');
    } catch (err) {
      console.error('Error fetching admins:', err);
      setError('Failed to load admins');
      setAdmins([]);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (admin = null) => {
    if (admin) {
      setEditingAdmin(admin);
      setFormData({ name: admin.name, email: admin.email, password: '' });
    } else {
      setEditingAdmin(null);
      setFormData({ name: '', email: '', password: '' });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingAdmin(null);
    setFormData({ name: '', email: '', password: '' });
    setError('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email) {
      setError('Name and email are required');
      return;
    }

    if (editingAdmin) {
      // Update existing admin
      try {
        const response = await fetch(`${api}/admins/${editingAdmin._id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: formData.name, email: formData.email })
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Failed to update admin');
        
        setError('');
        setSuccess('Admin updated successfully!');
        setTimeout(() => setSuccess(''), 3000);
        handleCloseModal();
        await fetchAdmins();
      } catch (err) {
        console.error('Error updating admin:', err);
        setError(err.message);
      }
    } else {
      // Create new admin
      if (!formData.password || formData.password.length < 6) {
        setError('Password is required and must be at least 6 characters');
        return;
      }

      try {
        const response = await fetch(`${api}/admin-register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Failed to create admin');
        
        setError('');
        setSuccess('Admin created successfully! They can now login.');
        setTimeout(() => setSuccess(''), 3000);
        setFormData({ name: '', email: '', password: '' });
        handleCloseModal();
        await fetchAdmins();
      } catch (err) {
        console.error('Error creating admin:', err);
        setError(err.message);
      }
    }
  };

  const handleDelete = async (adminId) => {
    if (window.confirm('Are you sure you want to delete this admin?')) {
      try {
        const response = await fetch(`${api}/admins/${adminId}`, {
          method: 'DELETE'
        });

        if (!response.ok) throw new Error('Failed to delete admin');
        setError('');
        setSuccess('Admin deleted successfully!');
        setTimeout(() => setSuccess(''), 3000);
        fetchAdmins();
      } catch (err) {
        console.error('Error deleting admin:', err);
        setError(err.message);
      }
    }
  };

  if (loading) {
    return <div className="p-6 text-center text-gray-500">Loading admins...</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Admins</h2>
        <Button onClick={() => handleOpenModal()} color="blue" className="flex items-center gap-2">
          <HiOutlineUserAdd /> Add Admin
        </Button>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
          {success}
        </div>
      )}

      {admins.length === 0 ? (
        <div className="text-center text-gray-500 py-8">No admins found</div>
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <Table.Head>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Created</Table.HeadCell>
              <Table.HeadCell>Actions</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {admins.map((admin) => (
                <Table.Row key={admin._id} className="hover:bg-gray-50">
                  <Table.Cell>{admin.name}</Table.Cell>
                  <Table.Cell>{admin.email}</Table.Cell>
                  <Table.Cell>{new Date(admin.createdAt).toLocaleDateString()}</Table.Cell>
                  <Table.Cell className="flex gap-2">
                    <Button
                      onClick={() => handleOpenModal(admin)}
                      size="sm"
                      color="warning"
                      className="flex items-center gap-1"
                    >
                      <HiOutlinePencilAlt /> Edit
                    </Button>
                    <Button
                      onClick={() => handleDelete(admin._id)}
                      size="sm"
                      color="failure"
                      className="flex items-center gap-1"
                    >
                      <HiOutlineTrash /> Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      )}

      <Modal show={showModal} onClose={handleCloseModal}>
        <Modal.Header>
          {editingAdmin ? 'Edit Admin' : 'Create New Admin'}
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <TextInput
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Admin name"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <TextInput
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="admin@example.com"
                required
              />
            </div>
            {!editingAdmin && (
              <div>
                <Label htmlFor="password">Password</Label>
                <TextInput
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="At least 6 characters"
                  required
                />
              </div>
            )}
            <div className="flex gap-2 justify-end">
              <Button onClick={handleCloseModal} color="gray">Cancel</Button>
              <Button type="submit" color="blue">
                {editingAdmin ? 'Update' : 'Create'}
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ManageAdmins;
