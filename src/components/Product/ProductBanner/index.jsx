import styles from "./ProductBanner.module.scss";
import CategoryCard from "../CategoryCard";

const ProductBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bannerWrapper}>
        <h1 className={styles.heading}>All Categories</h1>
        <div className={styles.productsList}>{<CategoryCard />}</div>
        <button className={styles.btn}>Get All Products</button>
      </div>
    </div>
  );
};

export default ProductBanner;
