import { Formik, Form, Field } from 'formik';
import { useMemo } from 'react';

function Home(props) {
  const initialValues = useMemo(
    () => ({
      fName: '',
      lName: '',
      usrName: '',
      userId: '',
      webAddress: '',
      cityName: '',
      cityId: '',
      createdAt: '',
      createdBy: '',
      createdIp: '',
      deletedAt: '',
      deletedBy: '',
      deletedIp: '',
      userEmail: '',
      managerSign: '',
      empNumber: '',
      oldEmpNumber: '',
      userPhone: '',
      registerFrom: '',
      resetTokenStatus: '',
      resetTokenTime: '',
      resetToken: '',
      userSign: '',
      stateName: '',
      stateId: '',
      userStatus: '',
      storeCityId: '',
      updatedAt: '',
      updatedBy: '',
      updatedIp: '',
      userType: '',
      postCode: ''
    }), []
  )

  const data = Array.isArray(props.data) ? props.data : [props.data];
  console.log(data)
  const item = data[0];

  const {
    first_name,
    last_name,
    username,
    id,
    address,
    city,
    city_id,
    created_at,
    created_by,
    created_ip,
    delted_at,
    delted_by,
    deleted_ip,
    email,
    manager_signature,
    emp_number,
    old_emp_number,
    phone,
    register_from,
    reset_tkn_status,
    reset_tkn_time,
    reset_tkn_token,
    signature,
    state,
    state_id,
    status,
    store_city_id,
    updated_at,
    updated_by,
    updated_ip,
    user_type,
    zip
  } = item;

  const extractedData = {
    fName: first_name,
    lName: last_name,
    usrName: username,
    userId: id,
    webAddress: address,
    cityName: city,
    cityId: city_id,
    createdAt: created_at ?? 'N/A',
    createdBy: created_by ?? 'N/A',
    createdIp: created_ip ?? 'N/A',
    deletedAt: delted_at ?? 'N/A',
    deletedBy: delted_by ?? 'N/A',
    deletedIp: deleted_ip ?? 'N/A',
    userEmail: email,
    managerSign: manager_signature ?? 'N/A',
    empNumber: emp_number !== '' ? emp_number : 'N/A',
    oldEmpNumber: old_emp_number,
    userPhone: phone,
    registerFrom: register_from,
    resetTokenStatus: reset_tkn_status ?? 'N/A',
    resetTokenTime: reset_tkn_time ?? 'N/A',
    resetToken: reset_tkn_token ?? 'N/A',
    userSign: signature,
    stateName: state,
    stateId: state_id,
    userStatus: status,
    storeCityId: store_city_id,
    updatedAt: updated_at,
    updatedBy: updated_by,
    updatedIp: updated_ip,
    userType: user_type,
    postCode: zip,
  };


  return (
    <>
      <div className='userdatatable'>
        <Formik initialValues={initialValues}>
          {({ setValues ,resetForm}) => (
            <div>
              <button className='btn' onClick={() => setValues(extractedData)}>Show Data</button>
              <button className='btn' onClick={resetForm}>Reset</button>
              <Form>
                <table>
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Value</th>
                      <th>Category</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>First Name</td>
                      <td><Field type="text" name="fName"></Field></td>
                      <td>Last Name</td>
                      <td><Field type="text" name="lName"></Field></td>
                    </tr>
                    <tr>
                      <td>Username</td>
                      <td><Field type="text" name="usrName"></Field></td>
                      <td>ID</td>
                      <td><Field type="text" name="userId"></Field></td>
                    </tr>
                    <tr>
                      <td>City Name</td>
                      <td><Field type="text" name="cityName"></Field></td>
                      <td>City ID</td>
                      <td><Field type="text" name="cityId"></Field></td>
                    </tr>
                    <tr>
                      <td>Created At</td>
                      <td><Field type="text" name="createdAt"></Field></td>
                      <td>Created By</td>
                      <td><Field type="text" name="createdBy"></Field></td>
                    </tr><tr>
                      <td>Created Ip</td>
                      <td><Field type="text" name="createdIp"></Field></td>
                      <td>Deletd At</td>
                      <td><Field type="text" name="deletedAt"></Field></td>
                    </tr><tr>
                      <td>Deletd By</td>
                      <td><Field type="text" name="deletedBy"></Field></td>
                      <td>Deleted Ip</td>
                      <td><Field type="text" name="deletedIp"></Field></td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td><Field type="text" name="userEmail"></Field></td>
                      <td>Manager Signature</td>
                      <td><Field type="text" name="managerSign"></Field></td>
                    </tr>
                    <tr>
                      <td>EMP Number</td>
                      <td><Field type="text" name="empNumber"></Field></td>
                      <td>Old Emp Number</td>
                      <td><Field type="text" name="oldEmpNumber"></Field></td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td><Field type="text" name="userPhone"></Field></td>
                      <td>Register From</td>
                      <td><Field type="text" name="registerFrom"></Field></td>
                    </tr>
                    <tr>
                      <td>Reset Token Status</td>
                      <td><Field type="text" name="resetTokenStatus"></Field></td>
                      <td>Reset Token Time</td>
                      <td><Field type="text" name="resetTokenTime"></Field></td>
                    </tr>
                    <tr>
                      <td>Reset Token </td>
                      <td><Field type="text" name="resetToken"></Field></td>
                      <td>Zip</td>
                      <td><Field type="text" name="postCode"></Field></td>
                    </tr>
                    <tr>
                      <td>Signature</td>
                      <td><Field type="text" name="userSign"></Field></td>
                      <td>State</td>
                      <td><Field type="text" name="stateName"></Field></td>
                    </tr>
                    <tr>
                      <td>State ID</td>
                      <td><Field type="text" name="stateId"></Field></td>
                      <td>Status</td>
                      <td><Field type="text" name="userStatus"></Field></td>
                    </tr>
                    <tr>
                      <td>Store City ID</td>
                      <td><Field type="text" name="storeCityId"></Field></td>
                      <td>Updated At</td>
                      <td><Field type="text" name="updatedAt"></Field></td>
                    </tr>
                    <tr>
                      <td>Updated By</td>
                      <td><Field type="text" name="updatedBy"></Field></td>
                      <td>Updated Ip</td>
                      <td><Field type="text" name="updatedIp"></Field></td>
                    </tr>
                    <tr>
                      <td>User Type</td>
                      <td><Field type="text" name="userType"></Field></td>
                      <td>Address</td>
                      <td><Field type="text" name="webAddress"></Field></td>
                    </tr>
                  </tbody>

                </table>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  )
}

export default Home
