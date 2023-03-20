import styles from "./FeatureProduct.module.scss";

const FeatureProduct = (props) => {
  const { id, data, imageUrl } = props.products;
  return (
    <div className={styles.container}>
      <div
        className={`${id % 2 === 0 ? styles.wrapper : styles.wrapperReverse}`}
      >
        <div className={styles.left}>
          <img src={process.env.PUBLIC_URL + imageUrl} />
        </div>
        <div className={styles.right}>
          <p>{data}</p>
          <button>Review!</button>
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
