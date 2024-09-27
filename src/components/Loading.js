import styles from "./Loading.module.css";
export default function Loading() {
  return (
    <div className={styles.loadingComponent}>
      <div className={styles.loading}>
        <div className={styles.obj}></div>
        <div className={styles.obj}></div>
        <div className={styles.obj}></div>
        <div className={styles.obj}></div>
        <div className={styles.obj}></div>
        <div className={styles.obj}></div>
        <div className={styles.obj}></div>
        <div className={styles.obj}></div>
      </div>
    </div>
  );
}
