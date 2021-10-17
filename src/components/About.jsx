const About = () => {
  // Sdata
  const AboutInfoDetails = () => (
    <>
      <p>
        HyTalent Program addresses the need to develop a holistic approach to
        enhance graduate's leadership and specialized technical skills by
        embedding the soft skills alongside the technical training provided by
        both universities and industries inputs. It is a hybrid program
        combining Professional Leadership, Technical Skills and on-the-job
        training by IT and Engineering providers.
      </p>
      <p>
        The program enhances graduates' self-awareness, self-development, skill
        development and skill application while being developed with
        multi-skills to approach different and unique situations. The HyTalent
        graduates should be ready for the hybrid jobs towards optimization of
        industrial productivity. This project is a collaboration between private
        sectors and public universities to develop a program of international
        standards for Malaysian graduates.
      </p>
    </>
  );
  const AboutList = () => (
    <ul className="aboutlist">
      <li>Graduates with Digital Knowledge</li>
      <li>Structured and Practical Development Approach</li>
      <li>Real-work Experience and Opportunities</li>
      <li>Enable Graduates to Embrace Data-Driven Skills</li>
      <li>
        Instill Leadership and Re-enforce Technical Skills in industry 4WRD
      </li>
      <li>Showcasing Skills and Technical Knowledge </li>
      <li>New Talents for NeW Norm to embrace Industry 4WRD</li>
    </ul>
  );
  //Components
  const AboutInfo = ({ title, subTitle, details }) => {
    return (
      <div className="about-info-item">
        <h2>HeyTalent</h2>
        <p className="about-info-lead">
          {" "}
          <span> {title}</span>
        </p>
        <div className="about-info-detail">{details}</div>
      </div>
    );
  };
  return (
    <div className="row">
      <div className="container about-home-wrapper">
        <div className="side-bar-TY"></div>
        <div className="about-item about-info">
          <AboutInfo title="Business Model" details={AboutInfoDetails()} />
          <AboutInfo title="Objectives" details={AboutList()} />
        </div>
        <div className="about-card-wrapper">
          <div className="about-card about-card-2">
            <p className="about-card-name about-card-name-cut">MADC</p>
            <div className="about-card-info about-card-info-2">
              <p>
                MADC is a Center to assist the Malaysian Investment Development
                Authority (MIDA) to play a more effective role as a vehicle in
                spearheading critical elements for quality FDI and DDI by
                providing talents required for 3+2 Industries.
              </p>
              <p>
                MADC desires are to create sustainable industries by creating
                relevant talents, collaborating R&D and Ps while working towards
                a world-class infrastructure.
              </p>
              <p>
                MADC collaborates all key stakeholders comprising of Research
                Institutions, International Players and Industry Players and
                Associations. It creates and develops young leaders within all
                industries and builds an eco-system for future sustainability,
                creating the most conducive environment in accelerating Industry
                4WRD.{" "}
              </p>
            </div>
          </div>
          <div className="about-card about-card-1">
            <p className="about-card-name ">HOW CAN WE HELP</p>
            <div className="about-card-info about-card-info-1">
              <p>
                Graduates are screened through their behavioural tendencies,
                communication skills, interests and confidence levels. Gaps are
                then identified and assessed prior to the classroom training.
              </p>
              <p>
                Upon successful completion of the Leadership training, the
                graduates are introduced to Hybrid Digital Skill development by
                Technical Experts both from the Universities and Industries.
              </p>
              <p>
                Additional entrepreneurial skills will also be introduced to the
                graduates before being sent to the respective industries while
                being monitored by the PMO. The Incubation center is made ready
                for the graduates to meet their mentors on issues relating to
                their work and the technical need from industries.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
