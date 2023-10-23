"use client";
import { Button, Input, Modal, Typography } from "antd";
import { EnvironmentTwoTone, SearchOutlined } from "@ant-design/icons";
import Image from "next/image";
import acRepairLogo from "../assets/ac_repair_icon.png";
import houseCleaning from "../assets/house_cleaning.svg";
import houseShifting from "../assets/house_shifting.svg";
import tvRepair from "../assets/tv_repair.svg";
import housePaint from "../assets/house_paint.svg";
import Link from "next/link";
import "@/styles/HomePage.css";
import { useState } from "react";
import { IconCurrentLocation } from "@tabler/icons-react";
export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
  const handleOk = () => {};
  const handleCancel = () => {
    setOpen(false);
  };
  const handleModalOpen = () => {
    setOpen(true);
  };
  return (
    <main>
      <div className="header">
        <Typography.Text
          style={{
            color: "white",
            fontSize: "56px",
            fontWeight: "600",
            lineHeight: "1.5",
          }}
        >
          Your Personal Assistant
        </Typography.Text>
        <Typography.Text
          style={{
            color: "white",
            fontSize: "24px",
            fontWeight: "500",
            padding: "20px",
          }}
        >
          One-stop solution for your problems. Order any service anytime
        </Typography.Text>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "60vw",
          }}
        >
          <Button
            onClick={() => handleModalOpen()}
            style={{
              width: "200px",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <EnvironmentTwoTone style={{ fontSize: "24px" }} />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
              Location
            </span>
          </Button>
          <Modal
            centered
            width={700}
            open={open}
            title="Your Location"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleCancel}>
                Cancel
              </Button>,
              <Button
                key="submit"
                type="primary"
                loading={loading}
                onClick={handleOk}
              >
                OK
              </Button>,
            ]}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "flex", marginTop: "20px" }}>
                <Input
                  style={{
                    width: "100%",
                    padding: "10px 15px",
                    fontSize: "15px",
                  }}
                />
                <Button
                  type="primary"
                  className="search_btn"
                  style={{ right: "48px", top: "1px" }}
                >
                  <SearchOutlined style={{ fontSize: "20px" }} />
                </Button>
              </div>
              <div style={{ margin: "auto", padding: "40px" }}>
                <Button
                  type="primary"
                  onClick={() => handleModalOpen()}
                  style={{
                    width: "280px",
                    height: "50px",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <IconCurrentLocation size={25} color="white" />
                  <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                    My Current Location
                  </span>
                </Button>
              </div>
            </div>
          </Modal>
          <Input
            style={{
              margin: "0px 20px",
              width: "100%",
              padding: "10px 20px",
              fontSize: "18px",
            }}
          />
          <Button type="primary" className="search_btn">
            <SearchOutlined style={{ fontSize: "20px" }} />
          </Button>
        </div>
        <div className="services-container">
          <Link href={"/"} className="single-service">
            <Image src={acRepairLogo} width={45} alt="ac_repair_logo" />
            <h4>AC Repair</h4>
          </Link>
          <Link href={"/"} className="single-service">
            <Image src={acRepairLogo} width={45} alt="appliance_repair_logo" />
            <h4>Appliance Repair</h4>
          </Link>
          <Link href={"/"} className="single-service">
            <Image src={acRepairLogo} width={45} alt="plumbing_logo" />
            <h4>Plumbing</h4>
          </Link>
          <Link href={"/"} className="single-service">
            <Image src={acRepairLogo} width={45} alt="home_shifting_logo" />
            <h4>Home Shifting</h4>
          </Link>
          <Link href={"/"} className="single-service">
            <Image src={acRepairLogo} width={45} alt="cleaning_logo" />
            <h4>Cleaning</h4>
          </Link>
          <Link href={"/"} className="single-service">
            <Image src={acRepairLogo} width={45} alt="all_services_logo" />
            <h4>All Services</h4>
          </Link>
        </div>
      </div>
      <div className="recommended-service">
        <h2>Recommended Services</h2>
        <div className="recommended-service-cards">
          <div className="recommended-service-card">
            <Link href={"/"}>
              <Image
                width={200}
                height={200}
                src={houseCleaning}
                alt="House Cleaning Image"
              />
              <h4>House Cleaning</h4>
            </Link>
          </div>
          <div className="recommended-service-card">
            <Link href={"/"}>
              <Image
                width={200}
                height={200}
                src={houseShifting}
                alt="House Shifting Image"
              />
              <h4>House Shifting</h4>
            </Link>
          </div>
          <div className="recommended-service-card">
            <Link href={"/"}>
              <Image
                width={200}
                height={200}
                src={tvRepair}
                alt="TV Repair Image"
              />
              <h4>TV Repair</h4>
            </Link>
          </div>
          <div className="recommended-service-card">
            <Link href={"/"}>
              <Image
                width={200}
                height={200}
                src={housePaint}
                alt="Painting Service Image"
              />
              <h4>Painting Service</h4>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
