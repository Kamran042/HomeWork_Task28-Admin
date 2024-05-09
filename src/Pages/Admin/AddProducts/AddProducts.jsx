import React, { useContext } from "react";
import { Formik } from "formik";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import MainContext from "../../../Context/context";
import toast, { Toaster } from "react-hot-toast";

const AddProducts = () => {
  const { data, setData } = useContext(MainContext);

  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={{ image: "", name: "", price: "" }}
        onSubmit={(values, { setSubmitting }) => {
          axios
            .post("http://localhost:3000/products", {
              id: uuidv4(),
              name: values.name,
              image: values.image,
              price: values.price,
            })
            .then((resp) => {
              setData([...data, resp.data]);
              toast.success("item elava olundu");
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="image"
              placeholder="Enter IMG url"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
            />
            {errors.image && touched.image && errors.image}
            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && errors.name}
            <input
              type="number"
              name="price"
              placeholder="Enter product price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            {errors.price && touched.price && errors.price}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddProducts;
