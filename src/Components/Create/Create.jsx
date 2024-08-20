/* eslint-disable no-unused-vars */
import React, { Fragment, useContext, useState } from "react";
import "./Create.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import ProductContext from "../../Context/ProductContext";
import Spinner from "../Spinner/Spinner";

const Create = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { addProduct } = useContext(ProductContext);

  const handleImage = (e) => {
    let img = e.target.files;
    setImages([...img]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      
      await addProduct(title, category, price, images);
      console.log("Product added");
      navigate("/");
    } catch (error) {
      console.log("Failed to add product");
      alert(error.message)
    }finally{

      setLoading(false);
    }
  };

  return (
    <>
    <Fragment>
      <div className="formContainer">
        <div className="centerDiv">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <label htmlFor="category">Category</label>
            <input
              className="input"
              type="text"
              id="category"
              name="category"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
            <label htmlFor="price">Price</label>
            <input
              className="input"
              type="number"
              id="price"
              name="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              />
            <label htmlFor="images">Images</label>
            <input
              type="file"
              id="images"
              onChange={handleImage}
              accept="image/*"
              multiple
              required
            />
            <div className="imagePreview">
              {images?.map((image, i) => (
                <img
                key={i}
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  width="150px"
                  height="150px"
                />
                ))}
            </div>
            <div className="buttonContainer">
              {loading ? (
                <Spinner />
              ) : (
                <button className="uploadBtn">Upload and Submit</button>
                )}
            </div>
          </form>
        </div>
      </div>
    </Fragment>
</>
  );
  };

export default Create;
