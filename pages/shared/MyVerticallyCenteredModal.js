import { Button, Modal } from "react-bootstrap";

export default function MyVerticallyCenteredModal(props) {
  console.log("props ", props);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.product.brand} {props.product.product_name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Description</p>
        <div>Color:</div>
        <div style={{ display: "flex" }}>
          {props.product.colour.split(",").map((e, i) => (
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
        <h5 style={{ color: "#009374" }}>${props.product.product_price}</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ backgroundColor: "#009374" }} onClick={props.onHide}>
          Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
