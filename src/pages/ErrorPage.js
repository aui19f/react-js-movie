import { useNavigate } from "react-router-dom";
import styles from "./ErrorPage.module.css";
export default function ErrorPage() {
  const navigate = useNavigate();

  const pageMove = () => {
    navigate("/");
  };
  return (
    <div className={styles.errorPage}>
      <h1>404</h1>
      <p>Page Not Found</p>
      <button onClick={pageMove}>Go Home</button>
    </div>
  );
}
