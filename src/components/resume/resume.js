import React from 'react'
import { Helmet } from 'react-helmet'
import { Row, Col } from 'antd'
import { ROOT_URL } from '../../../constants'
import './resume.less'

const Resume = () => (
  <Row id="resume-page-wrapper" type="flex" justify="center">
    <Helmet>
      <title>Resume | Rahul Jain</title>
    </Helmet>
    <Col className="wide-screen" xs={24} sm={22} md={18} lg={16} xl={14}>
      <p className="message">
        If the PDF plugin doesn't show correctly,{' '}
        <a href="/public/Rahul-Resume.pdf" target="_blank ">
          click here
        </a>
      </p>
      <object
        aria-label="Rahul Resume PDF"
        width="100%"
        height="1200px"
        type="application/pdf"
        data={`${ROOT_URL}public/Rahul-Resume.pdf`}
        className="pdf-file"
      />
    </Col>
    <Col className="narrow-screen" xs={24} sm={22} md={18} lg={16} xl={14}>
      <p className="message">
        Read PDF version,{' '}
        <a href={`${ROOT_URL}public/Rahul-Resume.pdf`} target="_blank ">
          click here
        </a>
      </p>
      <img src={`${ROOT_URL}public/images/Rahul-Resume.png`} alt="Rahul Resume" />
    </Col>
  </Row>
)

export default Resume
