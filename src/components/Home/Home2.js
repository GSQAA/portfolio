import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              让我来 <span className="purple"> 介绍一下 </span> 自己
            </h1>
            <p className="home-about-body">
              我是一名软件工程师，热爱将想法转化为可靠、可扩展的产品。
              多年来，我探索了多种技术，并在构建高性能系统与直观用户体验中找到了热情。
              <br />
              <br />
              我熟练掌握
              <i>
                <b className="purple">
                  {" "}
                  JavaScript、C++、Rust、Node.js 和 Java{" "}
                </b>
              </i>
              ，并乐于从事前后端全栈开发。
              <br />
              <br />
              我的主要兴趣领域包括
              <i>
                <b className="purple">
                  {" "}
                  Web 应用、区块链解决方案，{" "}
                </b>
              </i>
              以及探索连接链上与链下系统的新方式。
              <br />
              <br />
              只要有机会，我喜欢用
              <b className="purple"> Node.js </b> 以及{" "}
              <i>
                <b className="purple">React.js</b> 和{" "}
                <b className="purple">Next.js</b>{" "}
              </i>
              等现代框架来构建项目。
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
