import React, { useState, useEffect } from "react";
import { Form, Input, Select, Button, Upload, message, Checkbox } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const Profile = () => {
    
    const { user } = useSelector((state) => state.auth)

    console.log(user);

    const [formData, setFormData] = useState({
        name: user?.name || "",
        email: "",
        role: "", 
        about: "", 
        currentYear:"",
        currentSem:"",
        college: "", 
        department: "", 
        university:"",
        guide:"",
        dissertation:""
      });

    const { name, email, role, about,currentYear, currentSem, college, department, university, guide, dissertation, goal } = formData;
    
    const handleChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
    
        if (role !== user.role) {
          console.log("Role not matched");
        } else {
          const userData = {
            name,
            email,
            role,
            about, 
            currentYear,
            currentSem,
            college, 
            department, 
            university,
            guide,
            dissertation,
            goal
          };
          console.log("User ID:" + user.id);
          const res = await axios.put(
            `/api/${user.role}/update/${user.id}`,
            userData
          );
          const updatedData = await axios.get(
            `/api/${user.role}/get/${user.id}`,
            userData
          );

          setFormData(updatedData.data);
          console.log("User updated successfully" + userData);
        }
      };

    const onFinish = (values) => {
        console.log('Received values:', values);
    };

    const onImageUploadChange = (info) => {
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    };

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    return (
        <>
            <div className="flex justify-center mt-3 p-3 text-center">
                <Form
                    name="student-form"
                    onSubmit={handleSubmit}
                    labelCol={{ span: 50 }}
                    wrapperCol={{ span: 50 }}
                    onFinish={onFinish}
                    initialValues={{
                        role: 'student',
                    }}
                >
                    <div className="flex flex-row">
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please enter your name!' }]}
                        >
                            <Input value={name} onChange={handleChange} />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            className='ml-4'
                            rules={[{ required: true, message: 'Please enter your email!' }]}
                        >
                            <Input onChange={handleChange} value={email}/>
                        </Form.Item>
                    </div>
                    <div className="flex flex-row">
                        {/* <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please enter your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item> */}
                         <Form.Item
                            label="Role"
                            name="role"
                            className='ml-4'
                        >
                            <Input  onChange={handleChange} value={role} />
                        </Form.Item>
                    </div>
                    <Form.Item label="About" name="about">
                        <Input.TextArea  onChange={handleChange} value={about} />
                    </Form.Item>

                    <Form.Item label="Field of Interest" name="fieldOfInterest">
                        <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode">
                            {/* Options for fieldOfInterest */}
                        </Select>
                    </Form.Item>
                    <div className="flex-row">
                        <Form.Item label="University" name="university">
                            <Input  onChange={handleChange} value={university} />
                            {/* <Select>
                                <Option value="student">Mumbai University</Option>
                                <Option value="guide">Pune University</Option>
                                <Option value="admin">Nagpur University</Option>
                            </Select> */}
                        </Form.Item>

                        <Form.Item label="Department" name="department">
                            {/* <Select>
                                <Option value="student">IT</Option>
                                <Option value="guide">CS</Option>
                                <Option value="admin">EXTC</Option>
                                <Option value="student">MECH</Option>
                                <Option value="guide">CIVIL</Option>
                            </Select> */}
                            <Input  onChange={handleChange} value={department} />
                        </Form.Item>


                    </div>
                    {/* <Form.Item
                        label="Image"
                        name="image"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                    >
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </Form.Item> */}

                    <Form.Item label="Guide" name="guide">
                        <Input onChange={handleChange} value={guide} />
                    </Form.Item>

                    <Form.Item label="Goal" name="goal">
                        <Input.TextArea onChange={handleChange} value={goal} />
                    </Form.Item>

                    <Form.Item label="Dissertation" name={['dissertation', 'status']} valuePropName="checked">
                        <Input.TextArea onChange={handleChange} value={dissertation}/>
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit" className='text-white bg-dark-blue'>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
};

export default Profile;