import { Button } from "@mui/material";

const Counter = ({ sumar, contador, restar }) => {
  return (
    <div style={{ display: "flex" }}>
      <Button variant="contained " onClick={restar}>
        -
      </Button>
      <h4> {contador} </h4>
      <Button variant="contained " onClick={sumar}>
        +
      </Button>
    </div>
  );
};

export default Counter;
