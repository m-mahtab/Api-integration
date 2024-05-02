import React, { useMemo } from 'react'
import { Formik } from 'formik'


function FormikForm() {
    const initialValues = useMemo(
        ()=> ({
            name : "",
            email : "",
            password : ""
        }),[]
    )
  return (
    <>
        <Formik initialValues={initialValues}>
            {({values, setFieldValue, setValues})=>(
            <div>
                <div>
                    <label for= "id">Name</label>
                    <input id='name'
                    value={values.name}
                    onChange = {(e)=>setFieldValue("name", e.target.value)}/> 
                </div>
                <div>
                    <label for= "id">Email</label>
                    <input id='email'
                    value={values.email}
                    onChange = {(e)=>setFieldValue("email", e.target.value)}/> 
                </div>
                <div>
                    <label for= "id">Password</label>
                    <input id='password'
                    value={values.password}
                    onChange = {(e)=>setFieldValue("password", e.target.value)}/> 
                </div>
                <button onClick={()=>setValues(initialValues)}>Reset Form</button>
                <button onClick={()=>setValues({
                    name: "Mahtab",
                    email: "mahtab@gmail.com",
                    password: ""
                    

                })}>Me</button>
            </div>)}
            
        </Formik>
    </>
  )
}

export default FormikForm