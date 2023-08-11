// css
import "./EmptyEarphones.css";

// img
import EmptyEarphonesBg from "../../../assets/emptyEarphonesBg.png";

function EmptyEarphones() {
  return (
    <section className="empty-earphones">
      <img src={EmptyEarphonesBg} alt="Earphones" />
    </section>
  );
}

export default EmptyEarphones;
