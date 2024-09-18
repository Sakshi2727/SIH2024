import React, { useState } from 'react';
import axios from 'axios';
import './SellBook.css';

const SellBook = () => {
  const [data, setData] = useState({
    bookname: "",
    author: "",
    description: "",
    price: "",
    image: null
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // const handleImageChange = (e) => {
  //   console.log(e.target.files[0])
  //   const file = e.target.files[0];
  //   setData({ ...data, image: file });

  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setPreview(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   } else {
  //     setPreview(null); // Clear preview if no file is selected
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('bookname', data.bookname);
    formData.append('author', data.author);
    formData.append('description', data.description);
    formData.append('price', data.price);
    formData.append('image', data.image);

    try {
      const response = await axios.post("http://localhost:1000/api/v1/add", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="containss d-flex justify-content-center align-items-center">
      <div className="container p-4 my-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="bookname" className="form-label">Book Name</label>
            <input type="text" name="bookname" onChange={handleChange} value={data.bookname} className="form-control" id="bookname" placeholder="Enter Book Name" />
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">Author</label>
            <input type="text" name="author" onChange={handleChange} value={data.author} className="form-control" id="author" placeholder="Enter Author Name" />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" name="description" onChange={handleChange} value={data.description} className="form-control" id="description" placeholder="Enter Description" />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image</label>
            <input type="text" name="image" onChange={handleChange} className="form-control" id="image" placeholder="Give the URL of image"/>
            {/* {preview && <img src={preview} alt="Preview" style={{ marginTop: '10px', width: '100px', height: '100px' }} />} */}
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="text" name="price" onChange={handleChange} value={data.price} className="form-control" id="price" placeholder="Enter Price" />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SellBook;



