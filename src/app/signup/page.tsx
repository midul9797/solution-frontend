"use client";
import { Button, Col, ConfigProvider, Row, Typography } from "antd";
import signupImage from "../../assets/signup.svg";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import theme from "@/utils/theme/theme";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "@/schemas/signup";

type FormValues = {
  id: string;
  password: string;
};

const SignupPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ConfigProvider theme={theme}>
      <Link href={"/"}>
        <Image
          src={logo}
          width={50}
          style={{
            margin: "30px 0px 0px 30px",
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
          <Image src={signupImage} width={400} alt="login image" />
        </Col>
        <Col sm={12} md={8} lg={8}>
          <h1
            style={{
              margin: "15px 0px",
              fontSize: "32px",
            }}
          >
            Join Us Today!
          </h1>
          <Typography.Text type="secondary">
            Sign up now to become part of our family
          </Typography.Text>
          <div>
            <Form submitHandler={onSubmit} resolver={yupResolver(signupSchema)}>
              <div>
                <FormInput
                  name="name"
                  type="text"
                  size="large"
                  label="Name"
                  placeholder="Enter Your Full Name"
                  required
                />
              </div>
              <div>
                <FormInput
                  name="email"
                  type="text"
                  size="large"
                  label="Email"
                  placeholder="Enter Your Email Address"
                  required
                />
              </div>

              <div>
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="Password"
                  placeholder="Enter Your Password"
                  required
                />
              </div>
              <div>
                <FormInput
                  name="confirmPassword"
                  type="password"
                  size="large"
                  label="Confirm Password"
                  placeholder="Enter your password again"
                  required
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
                Create Account
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export default SignupPage;
