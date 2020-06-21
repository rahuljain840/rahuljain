import React from 'react'
import { Helmet } from 'react-helmet'
import { Layout, Row, Col, Card, Timeline } from 'antd'
import { withI18n, useI18n } from 'react-simple-i18n'
import MobileDetect from 'mobile-detect'
import ContactForm from './contact-form'
import WordCloud from './react-d3-cloud'
import { ROOT_URL } from './../../../constants'
import './home.less'

const { Content } = Layout

const data = [
  { text: 'JavaScript', value: 650 },
  { text: 'HTML', value: 500 },
  { text: 'Jest', value: 400 },
  { text: 'Lerna', value: 300 },
  { text: 'CSS', value: 200 },
  { text: 'AMP', value: 160 },
  { text: 'PWA', value: 140 },
  { text: 'VSCode', value: 120 },
  { text: 'Node', value: 88 },
  { text: 'React', value: 80 },
  { text: 'Redux', value: 60 },
  { text: 'Nginx', value: 48 },
  { text: 'jQuery', value: 42 },
  { text: 'Bootstrap', value: 38 },
  { text: 'WebStorm', value: 34 },
  { text: 'Enzyme', value: 32 },
  { text: 'Github', value: 29 },
  { text: 'MongoDB', value: 25 },
  { text: 'Ubuntu', value: 22 },
  { text: 'AWS', value: 18 },
  { text: 'Webpack', value: 14 },
  { text: 'browserify', value: 13 },
  { text: 'Babel', value: 12 },
  { text: 'Eslint', value: 11 },
]

const fontSizeMapper = word => Math.log2(word.value) * 5
const rotate = () => (Math.random() - 0.5) * 30

const scrollTo = (to, duration) => {
  const difference = to - window.pageYOffset
  const perTick = (difference / duration) * 10

  const scroll = currentPos => {
    setTimeout(() => {
      const newPos = currentPos + perTick
      window.scrollBy(null, perTick)
      if (window.pageYOffset >= to - 1) return
      scroll(newPos)
    }, 10)
  }
  scroll(window.pageYOffset)
}

const Home = ({ staticContext, t }) => {
  const { a } = useI18n()

  const md = new MobileDetect(__CLIENT__ ? window.navigator.userAgent : staticContext.userAgent)

  return (
    <Content>
      <Helmet>
        <title>{t('nav.home')} | Rahul Jain</title>
      </Helmet>
      <div id="blue-bg-wrapper">
        <div id="avatar-and-intro">
          <Row type="flex" justify="center" align="middle">
            <Col className="avatar" xs={24} sm={6} md={6} lg={5} xl={4}>
              <img src={`${ROOT_URL}public/images/rahul.jpg`} alt="Rahul Jain" />
              <h1>
                {t('home.rahuljain')}&nbsp;
                <i
                  className="fa fa-envelope-o"
                  aria-hidden="true"
                  id="send-message"
                  onClick={() => window.open("mailto:rahuljain840@gmail.com") }
                />
                &nbsp;
                <a href="tel:+919654712280">
                  <p style={{display: "inline"}}>
                    <i className="fa fa-phone" aria-hidden="true" id="Contact" />
                  </p>
                </a>
              </h1>
              <p>{t('home.softwareEngineer')}</p>
            </Col>
            <Col className="intro" xs={24} sm={14} md={12} lg={9} xl={8}>
              <p>{t('home.introduction')}</p>
            </Col>
          </Row>
        </div>
      </div>
      <div id="timeline">
        <Row type="flex" justify="center">
          <Col className="words-cloud" xs={24} sm={20} md={13} lg={12} xl={10}>
            <WordCloud
              data={data}
              padding={3}
              fontSizeMapper={fontSizeMapper}
              rotate={rotate}
              font="'Helvetica Neue For Number', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif"
            />
          </Col>
          <Col className="timeline-right" xs={22} sm={20} md={7} lg={6} xl={5}>
            <Timeline>
              <Timeline.Item color="#001064" dot={<i className="fa fa-suitcase" aria-hidden="true" />}>
                Apr. 2018 - Present
                <br />
                Team Lead - TravelTriangle
              </Timeline.Item>
              <Timeline.Item color="#001064" dot={<i className="fa fa-suitcase" aria-hidden="true" />}>
                Oct, 2013 - Feb. 2018
                <br />
                Senior Software Developer - Daffodil Software Ltd.
              </Timeline.Item>
              <Timeline.Item color="#001064" dot={<i className="fa fa-suitcase" aria-hidden="true" />}>
                Jan. 2013 - June. 2013
                <br />
                Software Engineer Intern
              </Timeline.Item>
              <Timeline.Item color="#001064" dot={<i className="fa fa-graduation-cap" aria-hidden="true" />}>
                Apr. 2009 - June, 2013
                <br />
                Computer Engineering (CE) - MDU
              </Timeline.Item>
            </Timeline>
          </Col>
        </Row>
      </div>
      <div id="skills">
        <Row type="flex" justify="center">
          <Col className="skill" xs={11} sm={10} md={6} lg={5} xl={4}>
            <div className="skill-icon">
              <i className="fa fa-terminal" aria-hidden="true" />
            </div>
            <h3>Server</h3>
            <div className="skill-desc">
              <p>Ubuntu</p>
              <p>DNS Config</p>
              <p>Nginx/SSL</p>
              <p>Node.js</p>
              <p>MongoDB</p>
            </div>
          </Col>
          <Col className="skill" xs={11} sm={10} md={6} lg={5} xl={4}>
            <div className="skill-icon">
              <i className="fa fa-cogs" aria-hidden="true" />
            </div>
            <h3>Frameworks / Libraries</h3>
            <div className="skill-desc">
              <p>React</p>
              <p>Redux</p>
              <p>AMP</p>
              <p>Angular 1.x</p>
              <p>ASP.NET MVC</p>
            </div>
          </Col>
          <Col className="skill" xs={11} sm={10} md={6} lg={5} xl={4}>
            <div className="skill-icon">
              <i className="fa fa-plug" aria-hidden="true" />
            </div>
            <h3>API</h3>
            <div className="skill-desc">
              <p>Google Drive</p>
              <p>Google Maps</p>
              <p>Facebook</p>
            </div>
          </Col>
          <Col className="skill" xs={11} sm={10} md={6} lg={5} xl={4}>
            <div className="skill-icon">
              <i className="fa fa-heartbeat" aria-hidden="true" />
            </div>
            <h3>Monitoring</h3>
            <div className="skill-desc">
              <p>New Relic</p>
              <p>Sentry</p>
              <p>Segment</p>
              <p>ELK</p>
            </div>
          </Col>
        </Row>
      </div>
      <div id="projects">
        <Row type="flex" justify="center">
          <h1>{t('home.projects')}</h1>
        </Row>
        <Row className="project-list" type="flex" justify="center">
          <Col xs={22} sm={20} md={7} lg={6} xl={5}>
            <Card style={{ width: '100%' }} bodyStyle={{ padding: 0 }}>
              <a
                href="https://github.com/rahuljain840/lerna_boilerplate"
                target="_blank"
                rel="noopener noreferrer"
                className="container"
              >
                <h2>Lerna boilerplate</h2>
                <ul className="texts">
                  <li>Monorepo setup using Lerna</li>
                  <li>Separate packages for icons and utils</li>
                  <li>ES, ESM and Common JS export</li>
                </ul>
                <div className="overlay bg-1" />
              </a>
            </Card>
          </Col>
          <Col xs={22} sm={20} md={7} lg={6} xl={5}>
            <Card style={{ width: '100%' }} bodyStyle={{ padding: 0 }}>
              <a href="http://aagamdhara.com"
                target="_blank"
                rel="noopener noreferrer"
                className="container"
              >
                <h2>Aagamdhara <p>Web/Android/iOS</p></h2>
                <ul className="texts">
                  <li>Aagamdhara is a Dharmic app which is totally based on Jainism.</li>
                  <li>Aagamdhara is available on Android iOS and web</li>
                </ul>
                <div className="overlay bg-2" />
              </a>
            </Card>
          </Col>
          <Col xs={22} sm={20} md={7} lg={6} xl={5}>
            <Card style={{ width: '100%' }} bodyStyle={{ padding: 0 }}>
              <a href="http://rahuljain.work" target="_blank" rel="noopener noreferrer" className="container">
                <h2>rahuljain.work</h2>
                <ul className="texts">
                  <li>A React based portfolio to showcase your work.</li>
                </ul>
                <div className="overlay bg-3" />
              </a>
            </Card>
          </Col>
        </Row>
      </div>
      <div id="contact">
        <Row className="contact-wrapper" type="flex" justify="center">
          <Col xs={22} sm={20} md={7} lg={6} xl={5}>
            <h1 className="contact-title">{t('home.contact.title')}</h1>
            <p className="contact-desc">{t('home.contact.description')}</p>
            <div className="social-medias">
              <a
                className="social-media-link"
                href="https://www.facebook.com/irahuljain"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook-square" aria-hidden="true" />
                &nbsp;&nbsp;&nbsp;
                <span>Facebook</span>
              </a>
              <a
                className="social-media-link"
                href="https://github.com/rahuljain840"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
                &nbsp;&nbsp;&nbsp;
                <span>Github</span>
              </a>
              <a
                className="social-media-link"
                href="https://www.linkedin.com/in/rahul-jain-1479ba51/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
                &nbsp;&nbsp;&nbsp;
                <span>LinkedIn</span>
              </a>
            </div>
          </Col>
          <Col
            className="contact-form"
            xs={22}
            sm={20}
            md={{ span: 8, offset: 1 }}
            lg={{ span: 7, offset: 1 }}
            xl={{ span: 6, offset: 1 }}
          >
            <ContactForm />
          </Col>
        </Row>
      </div>
    </Content>
  )
}

export default withI18n(Home)
