import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const ValidationWithYup = () => {
  const validationSchema = yup.object({
    name: yup.string().required("Name is Required"),
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .min(6, "Must be greater than 6 digit")
      .required("Password is Required"),
  });


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });



  return (
    <>
      <form action="" onSubmit={formik.handleSubmit}>

          <input type="text" name='name' placeholder="name.."  onChange={formik.handleChange} onBlur={formik.handleBlur}  style={{border : formik.touched.name && formik.errors.name ? '2px solid red' : '1px solid #ccc'}}/>
          {formik.touched.name && formik.errors.name ? (<span style={{color:'red'}}>{formik.errors.name}</span> ):null}

        <input type="text" name="email" placeholder="email.."  onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.email && formik.errors.email ? (<span>{formik.errors.email}</span> ) : null}


        <input type="text" name="password" placeholder="password"   onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.password && formik.errors.name ? (
          <span>{formik.errors.password}</span>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ValidationWithYup;
