// pages/index.js hoặc components/YourComponent.js

import React from 'react';
import CardItem from './CardItem';

const New = () => {
  const cardItems = [
    { title: 'Title 1', imageUrl: '/images/image1.jpg', chapterCount: 10 },
    { title: 'Title 2', imageUrl: '/images/image2.jpg', chapterCount: 15 },
    // Thêm các mục khác nếu cần
  ];

  return (
    <div>
      {cardItems.map((item, index) => (
        <CardItem image={undefined} key={index} {...item} />
      ))}
    </div>
  );
};

export default New;
