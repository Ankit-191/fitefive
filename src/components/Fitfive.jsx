import { Children } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { props } from "react";
const Fitfive = ({ fitfiveimg, hadingtext, children, fitfive }) => {
  // const childarray = Children.toArray(children);
  return (
    <div>
      <section className="bg-black py-5">
        <Container>
          <div className="text-center">
            <img src={fitfiveimg} alt="fitfive" />
            {/* {childarray[0]} */}
            <p className="text-white mt-4 pt-1 opacity-50 px-5 mx-5">
              {hadingtext}
            </p>
            {/* {childarray[1]} */}
            {children}
          </div>
          <Row className="mt-5 pt-4">
            {fitfive.map((card) => {
              return (
                <Col lg={6} key={card.id} className="mt-3 pt-1">
                  <div className="bg_card d-flex flex-column">
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
                    <p className="mb-0 text-white opacity-50 h-100">
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
