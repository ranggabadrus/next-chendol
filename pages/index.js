import {
  Accordion,
  Card,
  CardColumns,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import CustomCard from "./shared/Card";
import Axios from "axios";
import useDeviceDetect from "./shared/useDeviceDetect";
import useWindowDimensions from "./shared/useDeviceDetect";

function Home({ fetched_products }) {
  const [product, setProduct] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      setProduct(fetched_products);
      setProducts(fetched_products);
      setLoading(false);
    };

    getProduct();
  }, []);

  useEffect(() => {
    if (filter === "") {
      setProduct(products);
    } else {
      let filter_product = products.filter((e) => e.brand === filter);
      setProduct(filter_product);
    }
  }, [filter]);

  const { isMobile } = useDeviceDetect();

  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <Container fluid>
        <Row
          className={[
            styles.background,
            "justify-content-center align-items-center text-center",
          ]}
        >
          <Col xs="auto">
            <h1>Exclusive furniture on cheap price</h1>
            <p>
              Make your house a home with our wide collection of beautiful
              furniture
            </p>
            <Row
              style={{
                backgroundColor: "#fff",
                borderRadius: "5px",
                boxShadow: "0px 0px 1px 1px #eaeaea",
                padding: "0px",
                overflow: "hidden",
              }}
            >
              <div style={{ flex: 1, padding: "5px" }}>
                <div style={{ backgroundColor: "#f6f6f6", color: "#009374" }}>
                  Furniture
                </div>
              </div>
              <input
                style={{ flex: 4, border: "0px" }}
                placeholder="Search your products from here"
              />
              <div
                style={{
                  flex: 1,
                  backgroundColor: "#009374",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                Search
              </div>
            </Row>
          </Col>
        </Row>
        {isMobile ? (
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={50}
            totalSlides={3}
          >
            <div
              style={{
                position: "absolute",
                zIndex: 99,
                marginTop: "85px",
                left: "-10px",
              }}
            >
              <ButtonBack
                style={{
                  backgroundColor: "#fff",
                  border: "0px",
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                  boxShadow: "0px 0px 1px 1px #eaeaea",
                }}
              >
                {"<"}
              </ButtonBack>
            </div>

            <div
              style={{
                position: "absolute",
                right: "-10px",
                zIndex: 99,
                marginTop: "85px",
              }}
            >
              <ButtonNext
                style={{
                  backgroundColor: "#fff",
                  border: "0px",
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                  boxShadow: "0px 0px 1px 1px #eaeaea",
                }}
              >
                {">"}
              </ButtonNext>
            </div>
            <Slider>
              <Slide index={0}>
                <CustomCard
                  title="Gift Voucher"
                  color="#e286c6"
                  desc="With persona care items"
                  button="Shop Coupons"
                />
              </Slide>
              <Slide index={1}>
                <CustomCard
                  title="Gift Voucher"
                  color="#f69081"
                  desc="Up to 40% off everyday"
                  button="Shop Coupons"
                />
              </Slide>
              <Slide index={2}>
                <CustomCard
                  title="Gift Voucher"
                  color="#fdb06c"
                  desc="With selected items"
                  button="Save Now"
                />
              </Slide>
            </Slider>
          </CarouselProvider>
        ) : (
          <Row
            style={{ padding: "20px 0px", borderBottom: "2px solid #f7f7f7" }}
          >
            <Col>
              <CustomCard
                title="Gift Voucher"
                color="#e286c6"
                desc="With persona care items"
                button="Shop Coupons"
              />
            </Col>
            <Col>
              <CustomCard
                title="Gift Voucher"
                color="#f69081"
                desc="Up to 40% off everyday"
                button="Shop Coupons"
              />
            </Col>
            <Col>
              <CustomCard
                title="Gift Voucher"
                color="#fdb06c"
                desc="With selected items"
                button="Save Now"
              />
            </Col>
          </Row>
        )}
        <Row>
          <Col style={{ padding: "20px 10px" }}>
            <div className={styles.sticky}>
              <Accordion>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    Brands
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <div
                        style={{
                          color: filter === "Apple" ? "#009374" : "#000",
                        }}
                        onClick={() =>
                          setFilter(filter === "Apple" ? "" : "Apple")
                        }
                      >
                        Apple
                      </div>
                      <div
                        style={{
                          color: filter === "Samsung" ? "#009374" : "#000",
                        }}
                        onClick={() =>
                          setFilter(filter === "Samsung" ? "" : "Samsung")
                        }
                      >
                        Samsung
                      </div>
                      <div
                        style={{
                          color: filter === "Google" ? "#009374" : "#000",
                        }}
                        onClick={() =>
                          setFilter(filter === "Google" ? "" : "Google")
                        }
                      >
                        Google
                      </div>
                      <div
                        style={{
                          color: filter === "Oppo" ? "#009374" : "#000",
                        }}
                        onClick={() =>
                          setFilter(filter === "Oppo" ? "" : "Oppo")
                        }
                      >
                        Oppo
                      </div>
                      <div
                        style={{
                          color: filter === "Xiaomi" ? "#009374" : "#000",
                        }}
                        onClick={() =>
                          setFilter(filter === "Xiaomi" ? "" : "Xiaomi")
                        }
                      >
                        Xiaomi
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Prices (Not work yet)
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <div>Cheapest</div>
                      <div>Expensive</div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </Col>
          <Col lg={10} style={{ backgroundColor: "#f7f7f7" }}>
            <div className={styles.columnCount}>
              {product.map((e, i) => {
                return (
                  <div
                    key={i}
                    style={{ display: "inline-block" }}
                    className={styles.cardProduct}
                    onClick={() => {
                      setSelectedProduct(e);
                      setModalShow(true);
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#fff",
                        margin: "5px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        textAlign: "center",
                        padding: "20px",
                        height: "150px",
                      }}
                    >
                      <img src="/phone.png" />
                      <div>
                        {e.brand} {e.product_name}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
        {Object.keys(selectedProduct).length !== 0 && (
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            product={selectedProduct}
          />
        )}
      </Container>
    );
  }
}

Home.getInitialProps = async (ctx) => {
  const res = await Axios.get(`https://users.chendol.com/api/v1/products`);
  console.log("json ", res);
  return { fetched_products: res.data.products };
};

export default Home;
