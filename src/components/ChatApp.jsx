import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import "../css/chatbot.css";

const ChatApp = () => {
  const theme = {
    background: "#F6F5F5",
    headerBgColor: "#921A40",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#921A40",
    botFontColor: "#fff",
    userBubbleColor: "#FABC3F",
    userFontColor: "#6C0345",
  };

  const steps = [
    {
      id: "0",
      message: "Hello! Welcome to Aksharaa School, where education meets excellence.",
      trigger: "1",
    },
    {
      id: "1",
      message: "How can I assist you today? Please select an option below.",
      trigger: "options",
    },
    {
      id: "options",
      options: [
        { value: 1, label: "Learn About Us", trigger: "about_school" },
        { value: 2, label: "Admissions Information", trigger: "admissions" },
        { value: 3, label: "Explore Our Courses", trigger: "courses" },
        { value: 4, label: "Get in Touch", trigger: "contact_us" },
      ],
    },
    {
      id: "about_school",
      message:
        "Aksharaa School is a leading institution dedicated to nurturing the minds of tomorrow. Our mission is to provide a holistic education that empowers students to excel academically and socially.",
      trigger: "1",
    },
    {
      id: "admissions",
      message:
        "Interested in joining us? For detailed admissions information, please visit our admissions page or contact our friendly admissions team for personalized assistance.",
      trigger: "1",
    },
    {
      id: "courses",
      message:
        "We offer a diverse range of courses tailored to meet the needs of every student. From foundational subjects to advanced programs, our curriculum is designed to inspire and challenge.",
      trigger: "1",
    },
    {
      id: "contact_us",
      message:
        "We'd love to hear from you! Reach out to us via Phone: +1234567890 or Email: info@aksharaschool.com. We're here to help with any questions you may have.",
      trigger: "1",
    },
  ];
  

  return (
    <ThemeProvider theme={theme} className="">
      <div className="chatbot-container ">
        <ChatBot
          steps={steps}
          floating={true}
          headerTitle={"Welcome to Akshara School"}
          className="custom-chatbot"
        />
      </div>
    </ThemeProvider>
  );
};

export default ChatApp;
