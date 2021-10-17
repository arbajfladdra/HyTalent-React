const Footer = () => {
  // Sdata
  const Sdata = [
    [
      "UKM",
      "Jaringan Industri Alumni dan Masyarakat, Faculty of Engineering and Built Environment, 43600 Universiti Kebangsaan Malaysia",
    ],
    ["UTM", `Unit UTMAlumni,Universiti Teknologi Malaysia 81310 Johor Bahru`],
    [
      "UPM",
      "Department of Computer Communication  System Engineering Faculty of Engineering, 43400 Universiti Putra Malaysia",
    ],
  ];
  // Components
  const UWrapper = ({ name, info }) => {};
  return (
    <div className="row">
      <div className="container">
        <footer className="footer-wrapper">
          <div className="footer-header">For More Details, Please Contact:</div>
          <div className="footer-flex">
            <div className="scan">
              <img
                src="https://www.investopedia.com/thmb/ZG1jKEKttKbiHi0EkM8yJCJp6TU=/1148x1148/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png"
                alt=""
              />
              <ul type="none">
                <li>
                  Mail : <a href="">pmo@hytalent.net</a>
                </li>
                <li>
                  Site : <a href="">www.hytalent.net</a>
                </li>
              </ul>
            </div>
            {/* Mapping sdata */}
            {Sdata.map((arr, index) => (
              <div key={index} className="u-wrapper">
                <p className="u-name">
                  <span>{arr[0]}</span>
                </p>
                <div className="u-info">{arr[1]}</div>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};
export default Footer;
