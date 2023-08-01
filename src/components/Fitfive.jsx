import { Col, Container, Row } from "react-bootstrap";
const Fitfive = ({
  fitfiveimg,
  hadingtext,
  children,
  fitfive,
  hoverborder,
}) => {
  return (
    <div>
      <section className="bg-black py-5">
        <Container>
          <div className="text-center">
            <img src={fitfiveimg} alt="fitfive" />
            <p className="text-white mt-4 pt-1 opacity-50 px-5 mx-5">
              {hadingtext}
            </p>
            {children}
          </div>
          <Row className="mt-5 pt-4">
            {fitfive.map((card) => {
              return (
                <Col lg={6} key={card.id} className="mt-3 pt-1">
                  <div className={`bg_card d-flex flex-column ${hoverborder}`}>
                    <img
                      src={card.img}
                      alt=""
                      className="ps-4 ms-1 pt-4 mt-1"
                      width={80}
                      height={70}
                    />
                    <h5 className="text-white mt-3 pt-1 pb-2 ps-4 ms-1">
                      {card.hading}
                    </h5>
                    <p className="mb-0 text-white opacity-50">
                      {card.para}
                    </p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Fitfive;
