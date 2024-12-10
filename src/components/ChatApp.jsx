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
      message: "Hello! Welcome to Aksharaa School",
      trigger: "1",
    },
    {
      id: "1",
      message: "How can I assist you?",
      trigger: "options",
    },
    {
      id: "options",
      options: [
        { value: 2, label: "Admissions Information", trigger: "admissions" },
        { value: 3, label: "Explore Our Courses", trigger: "courses" },
        { value: 4, label: "Contact Us", trigger: "contact_us" },
      ],
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
        "Plz Contact via  Phone: +977-01-4993031/32/33 or Email: info@aksharaaschool.edu.np",
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
