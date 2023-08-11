import "./InTheBox.css";

function InTheBox({ inTheBox }) {
  return (
    <div className="in-the-box-container">
      <h3>IN THE BOX</h3>
      <ul className="in-the-box-list">
        {inTheBox.map((item) => {
          return (
            <li key={Math.random()} className="in-the-box-item">
              <span className="number-of-items-in-the-box">{item.boxNumber}x</span>
              {item.boxTitle}
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default InTheBox;
