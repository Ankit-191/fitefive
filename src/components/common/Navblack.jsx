import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navblack = ({ bg_color, text_color, children, text_change }) => {
  return (
    <div>
      <section className={`py-4 ${bg_color}`}>
        <Container>
          <div className="d-flex justify-content-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="237"
              height="48"
              viewBox="0 0 237 48"
              fill="none"
            >
              <path
                d="M14.3986 20.0752L0.935547 9.91756L0.935547 0L21.452 15.7047L21.452 39.4585L21.452 48L14.3592 48L14.3592 39.4585L21.452 39.4585L6.75213 28.2767L6.75213 18.1789L14.3986 24.0356L14.3986 20.0752Z"
                fill="white"
              />
              <path
                d="M32.4022 20.0752L45.8652 9.91756L45.8652 0L25.3487 15.7047L25.3487 39.4585L25.3487 48L32.4416 48L32.4416 39.4585L25.3487 39.4585L40.0487 28.2767L40.0487 18.1789L32.4022 24.0356L32.4022 20.0752Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M61.8652 23.8679V34.7358H65.1189H68.3726V30.8868V27.0377H76.9229H85.4732V24.4717V21.9057H76.9229H68.3726V20.0943V18.283H78.2849H88.1972V15.6415V13H75.0312H61.8652V23.8679ZM91.3752 23.8679V34.7358H94.6289H97.8826C97.8826 34.7358 97.8826 28.1121 97.8826 23.8679C97.8826 19.6237 97.8826 13 97.8826 13H94.6289H91.3752V23.8679ZM101.061 15.6415V18.283H106.584H112.108V26.5094V34.7358H115.362H118.615V26.5094V18.283H124.139H129.663V15.6415V13H115.362H101.061V15.6415ZM132.841 23.8679V34.7358H136.094H139.348V30.8868V27.0377H147.898H156.449V24.4729V21.9082L147.936 21.8691L139.424 21.8302L139.381 20.0566L139.338 18.283H149.255H159.173V15.6415V13H146.007H132.841V23.8679ZM162.502 23.8679V34.7358H165.68H168.858V23.8679V13H165.68H162.502V23.8679ZM171.138 13.1132C171.144 13.1754 174.092 18.0491 177.688 23.9434L184.227 34.6604L187.855 34.6995L191.482 34.7386L196.28 26.8504C198.92 22.512 201.896 17.6207 202.895 15.9811L204.71 13H200.96H197.21L192.703 20.5408C190.224 24.6881 188.118 28.1863 188.023 28.3141C187.881 28.5046 187.009 27.1422 183.194 20.7733L178.537 13H174.833C172.795 13 171.133 13.051 171.138 13.1132ZM206.843 23.8679V34.7358H220.311H233.78V32.0943V29.4528H223.565H213.35V27.9434V26.434H222.203H231.056V23.7924V21.1509H222.203H213.35V19.717V18.283H223.565H233.78V15.6415V13H220.311H206.843V23.8679Z"
                fill="white"
              />
            </svg>
            <ul className="d-flex mb-0 align-items-center gap-4">
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-white">
                  Work
                </Link>
              </li>
              <li>
                <Link className="text-white">{text_change}</Link>
              </li>
              {children}
            </ul>
            <div className="d-flex gap-4">
              <button className="text-white btn_cart bg-transparent">
                Cart
              </button>
              <button className={`btn_allpages fw-bold ${text_color}`}>
                All Pages
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Navblack;
