import {
  Accordion,
  Button,
  Card,
  CardColumns,
  Col,
  Container,
  Form,
  Modal,
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
import { useRouter } from "next/router";

function Home({ fetched_products }) {
  const router = useRouter();
  const [product, setProduct] = useState(fetched_products);
  const [modalShow, setModalShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [filter, setFilter] = useState("");
  const [products, setProducts] = useState(fetched_products);

  useEffect(() => {
    if (filter === "") {
      setProduct(products);
    } else {
      let filter_product = products.filter((e) => e.brand === filter);
      setProduct(filter_product);
    }
  }, [filter]);

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

      <Row style={{ padding: "20px 0px", borderBottom: "2px solid #f7f7f7" }}>
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
                      onClick={() => setFilter(filter === "Oppo" ? "" : "Oppo")}
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
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {selectedProduct.brand} {selectedProduct.product_name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Description</p>
            <div>Color:</div>
            <div style={{ display: "flex" }}>
              {selectedProduct.colour.split(",").map((e, i) => (
                <div
                  style={{
                    backgroundColor: "#f7f7f7",
                    borderRadius: "10px",
                    padding: "5px",
                    margin: "10px",
                  }}
                  key={i}
                >
                  <b>{e}</b>
                </div>
              ))}
            </div>
            <h5 style={{ color: "#009374" }}>
              {selectedProduct.product_price}
            </h5>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ backgroundColor: "#009374" }}
              onClick={() => setModalShow(false)}
            >
              Cart
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
}

export async function getStaticProps(ctx) {
  const res = await Axios.get(`https://users.chendol.com/api/v1/products`);
  return { props: { fetched_products: res.data.products } };
}

export default Home;
