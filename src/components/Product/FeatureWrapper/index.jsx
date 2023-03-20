import styles from "./FeatureWrapper.module.scss";
import FeatureProduct from "../FeatureProduct";

const FeatureWrapper = () => {
  const MOCK_FEATURE = [
    {
      id: 1,
      imageUrl: "/media/images/scissor.png",
      data: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
      vel, atque ipsa non distinctio consequuntur molestias. Hic nobis
      voluptas porro eaque? Ex quis`,
    },
    {
      id: 2,
      imageUrl: "/media/images/scissorset.png",
      data: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
      vel, atque ipsa non distinctio consequuntur molestias. Hic nobis
      voluptas porro ea`,
    },
    {
      id: 3,
      imageUrl: "/media/images/nail-nipper.png",
      data: `Lorem ipsum tam soluta vitae.
      Esse perferendis facilis, consectetur incidunt voluptate laboriosam
      eveniet magnam dolores saepe commodi!`,
    },
    {
      id: 4,
      imageUrl: "/media/images/tweezer.png",
      data: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
      vel, atque ipsa non distinctdi!`,
    },
  ];

  return (
    <>
      <div className={styles.container}>
        {MOCK_FEATURE.map((product) => {
          return <FeatureProduct products={product} />;
        })}
      </div>
    </>
  );
};

export default FeatureWrapper;
