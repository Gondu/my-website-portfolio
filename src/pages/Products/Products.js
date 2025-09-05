import styles from "./Products.module.scss";
import Grid from "@mui/material/Unstable_Grid2";
import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MainGlitchButton from "../../components/MainGlitchButton/MainGlitchButton";
import FadeInSectionWrapper from "../../components/FadeInSectionWrapper/FadeInSectionWrapper";
// Import Product images
import redcareProductImage from "../../assets/images/redcare_product_16_9_ratio.jpg";
import stellantisProductImage from "../../assets/images/stellantis_product_16_9_ratio.jpeg";
import slapProductImage from "../../assets/images/slap_product_16_9_ratio.jpg";
import datamediqProductImage from "../../assets/images/datamediq_product_16_9_ratio.jpg";
import olibaProductImage from "../../assets/images/oliba_product_16_9_ratio.jpg";
import toyotaProductImage from "../../assets/images/toyota_product_16_9_ratio.jpg";

let currentResolution = "";

const products = [
  {
    id: "redcare",
    title: "Redcare",
    description:
      "Enterprise AdTech platform for marketplace sellers, enabling them to create and manage retail media campaigns.",
    image: redcareProductImage,
    //url: "https://www.shop-apotheke.com",
  },
  {
    id: "stellantis",
    title: "Stellantis",
    description:
      "Global automotive web portal for Stellantis customers, serving major brands such as Maserati, Jeep, Peugeot and Fiat.",
      image: stellantisProductImage,
    //url: "https://connect.jeep.com/choose-country",
  },
  {
    id: "slap",
    title: "S.L.A.P",
    description:
      "E-commerce platform for collectible cards, providing grading, buying, and selling services.",
      image: slapProductImage,
    //url: "https://connect.maserati.com/us/en/login",
  },
  {
    id: "datamediq",
    title: "DatamedIQ",
    description:
      "Interactive map for healthcare monitoring, providing insights into online pharmacies across Germany.",
      image: datamediqProductImage,
    //url: "https://connect.maserati.com/us/en/login",
  },
  {
    id: "oliba",
    title: "Oliba",
    description:
      "Scientific health magazine platform delivering articles on disease prevention, symptoms, and risk factors.",
      image: olibaProductImage,
    //url: "https://www.preventiontrainer.com/en",
  },
  {
    id: "toyota",
    title: "Toyota",
    description:
      "Internal dealer portal for Toyota employees, enabling them to access and manage company applications.",
      image: toyotaProductImage,
    //url: null,
  }
];

function ProductBox({ product }) {
  const navigate = useNavigate();
  let image = product.image;
  const productDescription = product.description
  return (
    <div
      className={styles.product_box}
      tabIndex={0}
      role="button"
      onClick={() => navigate(`/${product.id}`)}
      onKeyPress={(e) => { if (e.key === "Enter") navigate(`/${product.id}`); }}
      aria-label={`View details for ${product.title}`}
    >
      <div className={styles.product_box__imageWrapper}>
        <img src={image} alt={product.title} className={styles.product_box__image} />
      </div>
      <h3 className={styles.product_box__title}>
        {product.title}
      </h3>
      <p className={styles.product_box__description}>{productDescription}</p>
      <div className={styles.product_box__button}>
        <MainGlitchButton
              text="View details"
              link={`/${product.id}`}
            />
      </div>
    </div>
  );
}

const Products = () => {
  const PortfolioTheme = useTheme();

  if (useMediaQuery(PortfolioTheme.breakpoints.only("md"))) {
    currentResolution = "md";
  }

  if (useMediaQuery(PortfolioTheme.breakpoints.only("sm"))) {
    currentResolution = "sm";
  }

  if (useMediaQuery(PortfolioTheme.breakpoints.only("xs"))) {
    currentResolution = "xs";
  }

  return (
    <section className={styles.products_section} id="products">
      <Grid container 
        // 4 grid columns for Mobile, 8 for Tablet, 12 for Desktop
        columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
        rowSpacing={PortfolioTheme.rowGutters}
        columnSpacing={{
          xs: PortfolioTheme.columnGuttersDownMd,
          md: PortfolioTheme.columnGuttersUpMd,
        }}>
        <Grid
          xsOffset={1}
          xs={2}
          smOffset={2}
          sm={4}
          mdOffset={1}
          md={10}
          lgOffset={2}
          lg={8}
        >
          <FadeInSectionWrapper fadeBottomToTop>
            <h2 className={styles.products_section__title} aria-label="Products">
              Products
            </h2>
          </FadeInSectionWrapper>
        </Grid>
        <Grid
          xs={4}
          smOffset={1}
          sm={6}
          mdOffset={1}
          md={10}
          lgOffset={1}
          lg={10}
        >
          
          <Grid container spacing={4} padding={0}>
            {products.map((product, idx) => (
              <Grid item xs={12} md={6} key={product.id}>
                <FadeInSectionWrapper fadeBottomToTop delay={`${250 + idx * 25}ms`} className={styles.fade_wrapper}>
                  <Tilt
                    scale={(currentResolution === "xs" || currentResolution === "sm" || currentResolution === "md") ? 1.001 : 1.04}
                    transitionSpeed={250}
                    transitionEasing="ease-out"
                    tiltMaxAngleX={1}
                    tiltMaxAngleY={1}
                    className="tilt-aqua-hover"
                  >
                    <ProductBox product={product}/>
                  </Tilt>
                </FadeInSectionWrapper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Products;
