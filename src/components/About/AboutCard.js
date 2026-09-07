import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            大家好！我是 <span className="purple">【你的名字】</span>，
            来自 <span className="purple">【你的城市】</span>。
            <br />
            我目前是一名 <span className="purple">【你的职位】</span>。
            <br />我拥有 <span className="purple">【你的学历】</span>。
            <br />
            <br />
            在编程之外，我喜欢这些让我保持创造力与灵感的爱好：
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> 玩游戏 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> 写技术博客 ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> 旅行和探索新地方 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "努力创造有影响力的事物！"{" "}
          </p>
          <footer className="blockquote-footer">【你的名字】</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
