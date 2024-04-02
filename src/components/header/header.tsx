import { Button } from "../button/component";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.root}>
      <h1 className={styles.title}>Restaurants</h1>

      <div className={styles.actions}>
        <Button viewVariant="secondary" size="xl">&#9728;</Button>
        <Button viewVariant="secondary" size="xl">&#9790;</Button>
      </div>
    </header>
  )
}