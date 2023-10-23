"use client";
import { Button, Col, ConfigProvider, Input, Row, Typography } from "antd";
import loginImage from "../../assets/login.svg";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import theme from "@/utils/theme/theme";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schemas/login";
type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log(data);
    } catch (err) {}
  };
  return (
    <ConfigProvider theme={theme}>
      <Link href={"/"}>
        <Image
          src={logo}
          width={50}
          style={{
            margin: "30px 0px 20px 30px",
          }}
          alt="logo"
        />
      </Link>
      <Row
        justify="center"
        align="top"
        style={{
          minHeight: "80vh",
        }}
      >
        <Col sm={12} md={16} lg={10}>
          <Image src={loginImage} width={400} alt="login image" />
        </Col>
        <Col sm={12} md={8} lg={8}>
          <h1
            style={{
              margin: "15px 0px",
              fontSize: "32px",
            }}
          >
            Welcome Back!
          </h1>
          <Typography.Title type="secondary" style={{ fontSize: "16px" }}>
            Login to access your account
          </Typography.Title>
          <div>
            <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
              <div>
                <FormInput
                  name="email"
                  type="text"
                  size="large"
                  label="Email"
                  placeholder="Enter Your Email Address"
                />
              </div>
              <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="Password"
                  placeholder="Enter Your Password"
                />
              </div>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "100%",
                  height: "40px",
                  fontSize: "20px",
                  marginTop: "20px",
                }}
              >
                Login
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export default LoginPage;
