import styles from "./Footer.module.scss";
import EmailIcon from "@mui/icons-material/Email";
import BusinessIcon from "@mui/icons-material/Business";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.parts}>
          <div className={styles.links}>Contacts Us</div>
          <ul className={styles.items}>
            <li>
              <span className={styles.logoWrapper}>
                <LocalPhoneIcon className={styles.icon} />
              </span>
              <span>+92 300 1234567</span>
            </li>
            <li>
              <span className={styles.logoWrapper}>
                <WhatsAppIcon className={styles.icon} />
              </span>
              <span>+92 300 1234567</span>
            </li>
            <li>
              <span className={styles.logoWrapper}>
                <EmailIcon className={styles.icon} />
              </span>
              <span>email@gmail.com</span>
            </li>
            <li>
              <span className={styles.logoWrapper}>
                <BusinessIcon className={styles.icon} />
              </span>
              <span>Street 4, 50265, Lahore</span>
            </li>
          </ul>
        </div>
        <div className={styles.parts}>
          <div className={styles.links}>Quick Links</div>
          <ul className={styles.items}>
            <li>
              <span>→</span>
              <span>About Us</span>
            </li>
            <li>
              <span>→</span>
              <span>Business Policy</span>
            </li>
            <li>
              <span>→</span>
              <span>e-Catalog</span>
            </li>
          </ul>
        </div>
        <div className={styles.parts}>
          <div className={styles.links}>Catagories</div>
          <ul className={styles.items}>
            <li>
              <span>→</span>
              <span>Barber Scissors</span>
            </li>
            <li>
              <span>→</span>
              <span>Cuticle Scissors</span>
            </li>
            <li>
              <span>→</span>
              <span>Eyelasg Tweezers</span>
            </li>
            <li>
              <span>→</span>
              <span>Cuticle Nippers</span>
            </li>
          </ul>
        </div>
        <div className={styles.parts}>
          <div className={styles.links}>Social Media</div>
          <ul className={styles.items}>
            <li>
              <span className={styles.logoWrapper}></span>
              <span>Linkedin</span>
            </li>
            <li>
              <span className={styles.logoWrapper}></span>
              <span>Instagram</span>
            </li>
            <li>
              <span className={styles.logoWrapper}></span>
              <span>Facebook</span>
            </li>
            <li>
              <span className={styles.logoWrapper}></span>
              <span>Twitter</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
