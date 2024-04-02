// ---------- PRICERANGE Component ----------
import { Range } from "react-range";

const PriceRange = ({ priceMin, setPriceMin, priceMax, setPriceMax }) => {
  return (
    <Range
      step={1}
      min={0}
      max={500}
      values={[priceMin, priceMax]}
      onChange={(values) => {
        setPriceMin(values[0]);
        setPriceMax(values[1]);
      }}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "6px",
            backgroundColor: "#ccc",
            borderRadius: "5px",
            width: "80%",
            outline: "none",
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props, index }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "10px",
            width: "10px",
            borderRadius: "100%",
            backgroundColor: "#2db0ba",
            borderColor: "none",
            outline: "none",
          }}
        >
          <p
            style={{
              height: "17px",
              width: "30px",
              backgroundColor: "#2db0ba",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              top: "-20px",
              left: "-5px",
              color: "white",
              borderRadius: "5px",
              outline: "none",
            }}
          >
            {index === 0 ? priceMin : priceMax} €
          </p>
        </div>
      )}
    />
  );
};

// Export component
export default PriceRange;
