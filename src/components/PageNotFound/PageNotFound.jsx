import styles from "./PageNotFound.module.css";

export default function PageNotFound() {
  return (
    <section className={styles.notfound}>
      {window.location.href}
      That page was not found
    </section>
  );
}
