'use client'
import React, { useState } from 'react';
import AdminPage from "./AdminPage";

const h1_style = {
    color: 'white',
    fontFamily: 'Dancing Script, cursive, Lobster, sans-serif, Arial',
    display: 'flex',
    fontSize: '2.0rem',
    marginRight: '200px',
};

const SearchUser = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
      setSearchTerm(e.target.value);
    };
  
    const handleSearch = () => {
      // Xử lý tìm kiếm, có thể điều hướng hoặc thực hiện logic tìm kiếm ở đây
      console.log('Searching for:', searchTerm);
    };

    return(
    <>
        <section>
            <AdminPage />
        </section>
        <section>
            <h1 style={h1_style}>Nhập tên người dùng cần tìm kiếm: </h1>
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
        </section>
    </>
    )
}
export default SearchUser