import { useState } from 'react';
import axios from 'axios';

const AdminComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]); // Dữ liệu người dùng tìm kiếm

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/admin/search?searchTerm=${searchTerm}`);
      setUsers(response.data);
    } catch (error) {
      console.error('Error searching users:', error);
    }
  };

  const handleDelete = async (userId: string) => {
    try {
      await axios.delete(`/api/admin/delete/${userId}`);
      // Cập nhật lại danh sách người dùng sau khi xóa
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <div>
        <label>
          Tìm kiếm tài khoản người dùng:
          <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </label>
        <button onClick={handleSearch}>Tìm kiếm</button>
      </div>
      <div>
        <h2>Kết quả tìm kiếm</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.username}
              <button onClick={() => handleDelete(user.id)}>Xóa</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminComponent;
