import styles from "./CategoryCard.module.scss";

const CategoryCard = () => {
  const MOCK_PRODUCTS = [
    {
      catagory: "Scissors",
      description: "Professional Hairdressing and Cutting Scissors",
      imgSrc: "/media/images/scissor.png",
    },
    {
      catagory: "Cuticle Clippers",
      description: "Professional Nail Cuticle",
      imgSrc: "/media/images/scissor.png",
    },
    {
      catagory: "eyelash tweezers",
      description: "eyelash tweezers",
      imgSrc: "/media/images/scissor.png",
    },
    ,
    {
      catagory: "Cuticle Clippers",
      description: "Professional Nail Cuticle",
      imgSrc: "/media/images/scissor.png",
    },
    {
      catagory: "eyelash tweezers",
      description: "eyelash tweezers",
      imgSrc: "/media/images/scissor.png",
    },
  ];

  return (
    <div className={styles.container}>
      {MOCK_PRODUCTS.map((product, index) => {
        return (
          <div className={styles.wrapper} key={index}>
            <img src={process.env.PUBLIC_URL + "/media/images/scissor.png"} />
            <div className={styles.content}>
              <p className={styles.catName}>{product.catagory}</p>
              <p className={styles.description}>{product.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryCard;
