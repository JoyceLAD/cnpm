'use client'
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';


const headerStyles = {
    backgroundColor: '#333',
    color: 'white',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between', // Dàn đều các thành phần theo chiều ngang
    alignItems: 'center', // Canh giữa theo chiều dọc
};

const logoStyles = {
    marginLeft: '40px',
    fontSize: '2.0rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    fontFamily: 'Dancing Script, cursive, Lobster, sans-serif, Arial',
    color: 'black',
    display: 'flex', // Thêm display: 'flex' để chứa hình ảnh và văn bản trong cùng một hàng
    alignItems: 'center', // Canh giữa theo chiều dọc
};

const logoImgStyles = {
    width: '50px', // Điều chỉnh kích thước hình ảnh
    height: '50px',
    marginRight: '10px', // Khoảng cách giữa hình ảnh và văn bản
    display: 'flex',
};

const h1_style = {
    color: 'black',
    fontFamily: 'Dancing Script, cursive, Lobster, sans-serif, Arial',
    display: 'flex',
    fontSize: '2.0rem',
    fontStyle:'bold',
    marginRight: '200px',
};

const navStyles = {
    display: 'flex',
    marginLeft: '50px'
};

const navItemStyles = {
    margin: '0 20px', // Khoảng cách giữa các thành phần trong menu
    textDecoration: 'none',
    color: 'white',
    fontSize: '1.1rem',
    transition: 'color 0.6s, font-size 0.6s ease-in-out',  // event hover
};
const sectionStyles = {
    // backgroundColor: '#333',
    margin: ' 20px 60px 20px 60px ',
};

const searchBarStyle = {
    // backgroundColor: '#333',
    margin: ' 0 0 20px 0 ',
    backgroundImage: `url('search-bg.webp')`
};

const AdminPage = () => {

    // const [showForm, setShowForm] = useState(false);

    // const handleSuccessButtonClick = () => {
    //     setShowForm(true);
    // };

    // const handleFormSubmit = (e: { preventDefault: () => void; }) => {
    //     e.preventDefault();
    //     // Xử lý dữ liệu form ở đây
    //     console.log('Form submitted!');
    //     // Đóng form sau khi xử lý dữ liệu
    //     setShowForm(false);
    // };
    const router = useRouter();

    const tableData = [
        { id: 1, name: 'Item 1', category: 'Category A', price: 10.99 },
        { id: 2, name: 'Item 2', category: 'Category B', price: 19.99 },
        { id: 3, name: 'Item 3', category: 'Category A', price: 14.99 },
    ];
    return (
        <>
            <header>
                <Link href="/" style={logoStyles} >
                    <img src="/logo-256x256.png" alt="Logo" style={logoImgStyles} />
                    VcComic
                </Link>
                <h1 style={h1_style}>Admin Dashboard</h1>
            </header>
            <section>
                <button className="btn btn-info" onClick={() => router.push('/tim_kiem_nguoi_dung')}>Tìm kiếm người dùng</button>
                <button className="btn btn-success" onClick={() => router.push('/xoa_nguoi_dung')}>Xóa người dùng</button>
                {/* <button className="btn btn-warning">Warning</button>
                <button className="btn btn-error">Error</button> */}
            </section>
            

            <style jsx>{`
        body {
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-rows: auto 1fr auto;
          min-height: 100vh;
        }

        header {
          background-color: #333;
          color: #fff;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-image: url('search-bg.webp');
        }

        .logo-container {
          display: flex;
          align-items: center;
        }

        .logo {
          max-width: 50px;
          margin-right: 1rem;
        }

        .dashboard-title {
          margin: 0;
          text-align: center;
          flex-grow: 1;
        }

        .search-bar {
          display: flex;
          align-items: center;
        }

        input {
          padding: 0.5rem;
          font-size: 1rem;
          margin-right: 0.5rem;
        }

        button {
          padding: 0.5rem 1rem;
          font-size: 1rem;
          cursor: pointer;
          border: none;
          border-radius: 4px;
          margin-left: 50px;
        }

        .btn-info {
          background-color: #5bc0de;
          color: #fff;
          margin-left: 50px;
          margin-top:20px;
        }

        .btn-success {
          background-color: #5cb85c;
          color: #fff;
          margin-left: 50px;
          margin-top:20px;
        }

        .btn-warning {
          background-color: #f0ad4e;
          color: #fff;
          margin-left: 50px;
          margin-top:20px;
        }

        .btn-error {
          background-color: #d9534f;
          color: #fff;
          margin-left: 50px;
          margin-top:20px;
        }

        main {
          padding: 1rem;
        }

        footer {
          background-color: #333;
          color: #fff;
          padding: 1rem;
          text-align: center;
        }

        /* Add additional styling as needed */
      `}</style>

        </>

    )
}
export default AdminPage;

