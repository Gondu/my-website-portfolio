// import Navbar from "./Navbar";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { PortfolioTheme } from "../../PortfolioThemeMUI";
import styles from "./Home.module.scss";
import MainGlitchButton from "../../components/MainGlitchButton/MainGlitchButton";
import { useEffect, useState } from "react";
import { useGlitch } from "react-powerglitch";
import { wait } from "glitched-writer";
import GlitchedWriter from "glitched-writer";

const Home = (props) => {
  const [showButton, setShowButton] = useState(false);

  const glitch_once = useGlitch({
    playMode: "always",
    createContainers: true,
    hideOverflow: true,
    timing: {
      duration: 1300,
      iterations: 1,
    },
    glitchTimeSpan: {
      start: 0,
      end: 1,
    },
    shake: {
      velocity: 35,
      amplitudeX: 0.01,
      amplitudeY: 0.05,
    },
    slice: {
      count: 5,
      velocity: 5,
      minHeight: 0.04,
      maxHeight: 0.13,
      hueRotate: true,
    },
    pulse: {
      scale: 1,
    },
  });

  useEffect(() => {
    setTimeout(() => setShowButton(true), 9400);

    const myWriter1 = new GlitchedWriter(
      "#homeTextGlitchWriting",
      {
        maxGhosts: 0.3,
        ghostChance: 0.1,
        changeChance: 0.6,
        steps: 8,
        interval: 10,
        delay: [0, 200],
        oneAtATime: 1,
        glyphs:
          "一二三四五六七八九十百千上下左右中大小月日年早木林山川土空田天生花草虫犬人名女男子目耳口手足見音力気円入出立休先夕本文字学校村町森正水火玉王石竹糸貝車金雨赤青白数多少万半形太細広長点丸交光角計直線矢弱強高同親母父姉兄弟妹自友体毛頭顔首心時曜朝昼夜分週春夏秋冬今新古間方北南東西遠近前後内外場地国園谷野原里市京風雪雲池海岩星室戸家寺通門道話言答声聞語読書記紙画絵図工教晴思考知才理算作元食肉馬牛魚鳥羽鳴麦米茶色黄黒来行帰歩走止活店買売午汽弓回会組船明社切電毎合当台楽公引科歌刀番用何",
        fillSpace: true,
        glyphsFromText: true,
        mode: "normal",
      }
    );

    const myWriter2 = new GlitchedWriter(
      "#homeNameGlitchWriting",
      {
        maxGhosts: 0,
        ghostChance: 0,
        changeChance: 0.8,
        steps: 4,
        interval: 10,
        delay: [0, 20],
        oneAtATime: 1,
        glyphs:
          "一二三四五六七八九十百千上下左右中大小月日年早木林山川土空田天生花草虫犬人名女男子目耳口手足見音力気円入出立休先夕本文字学校村町森正水火玉王石竹糸貝車金雨赤青白数多少万半形太細広長点丸交光角計直線矢弱強高同親母父姉兄弟妹自友体毛頭顔首心時曜朝昼夜分週春夏秋冬今新古間方北南東西遠近前後内外場地国園谷野原里市京風雪雲池海岩星室戸家寺通門道話言答声聞語読書記紙画絵図工教晴思考知才理算作元食肉馬牛魚鳥羽鳴麦米茶色黄黒来行帰歩走止活店買売午汽弓回会組船明社切電毎合当台楽公引科歌刀番用何",
        mode: "normal",
      }
    );

    const myWriter3 = new GlitchedWriter(
      "#homeRoleGlitchWriting",
      {
        interval: [0, 50],
        delay: 0,
        steps: 80,
        ghostChance: 0,
        maxGhosts: 0,
        changeChance: 0.8,
        oneAtATime: 0,
        glyphs:
          "一二三四五六七八九十百千上下左右中大小月日年早木林山川土空田天生花草虫犬人名女男子目耳口手足見音力気円入出立休先夕本文字学校村町森正水火玉王石竹糸貝車金雨赤青白数多少万半形太細広長点丸交光角計直線矢弱強高同親母父姉兄弟妹自友体毛頭顔首心時曜朝昼夜分週春夏秋冬今新古間方北南東西遠近前後内外場地国園谷野原里市京風雪雲池海岩星室戸家寺通門道話言答声聞語読書記紙画絵図工教晴思考知才理算作元食肉馬牛魚鳥羽鳴麦米茶色黄黒来行帰歩走止活店買売午汽弓回会組船明社切電毎合当台楽公引科歌刀番用何",
        fillSpace: false,
        mode: "normal",
      }
    );

    const myWriter4 = new GlitchedWriter(
      "#homeInfoGlitchWriting",
      {
        interval: [0, 50],
        delay: [0, 400],
        steps: 40,
        ghostChance: 0,
        maxGhosts: 0,
        changeChance: 0.3,
        oneAtATime: 0,
        glyphs:
          "一二三四五六七八九十百千上下左右中大小月日年早木林山川土空田天生花草虫犬人名女男子目耳口手足見音力気円入出立休先夕本文字学校村町森正水火玉王石竹糸貝車金雨赤青白数多少万半形太細広長点丸交光角計直線矢弱強高同親母父姉兄弟妹自友体毛頭顔首心時曜朝昼夜分週春夏秋冬今新古間方北南東西遠近前後内外場地国園谷野原里市京風雪雲池海岩星室戸家寺通門道話言答声聞語読書記紙画絵図工教晴思考知才理算作元食肉馬牛魚鳥羽鳴麦米茶色黄黒来行帰歩走止活店買売午汽弓回会組船明社切電毎合当台楽公引科歌刀番用何",
        fillSpace: false,
        mode: "normal",
      }
    );

    const beginTextGlitchWriting = async () => {
      await wait(500); 
      await myWriter1.write("Hi, my name is");
    };

    const beginNameGlitchWriting = async () => {
      await wait(5000);
      await myWriter2.write("Victor Semencenco");
    };

    const beginRoleGlitchWriting = async () => {
      await wait(7000);
      await myWriter3.write("Front-end Developer ");
    };

    const beginInfoGlitchWriting = async () => {
      await wait(7000);
      await myWriter4.write(
        "based in Venice, Italy specialized in creating interactive and engaging pixel perfect digital experiences, working with industry leaders such as Stellantis, Maserati and Toyota."
      );
    };

    beginTextGlitchWriting();
    beginNameGlitchWriting();
    beginRoleGlitchWriting();
    beginInfoGlitchWriting();
  }, []);

  return (
    <section className={styles.home_section} id="home">
      <div className={styles.home_section__top}>
        <Grid
          container
          // 4 grid columns for Mobile, 8 for Tablet, 12 for Desktop
          columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
          rowSpacing={PortfolioTheme.rowGutters}
          columnSpacing={{
            xs: PortfolioTheme.columnGuttersDownMd,
            md: PortfolioTheme.columnGuttersUpMd,
          }}
        >
          <Grid
            xs={4}
            smOffset={1}
            sm={7}
            mdOffset={1}
            md={11}
            lgOffset={1}
            lg={11}
          >
            <div id="homeTextGlitchWriting" className={styles.text}></div>
          </Grid>
          <Grid
            xs={4}
            smOffset={1}
            sm={7}
            mdOffset={1}
            md={11}
            lgOffset={1}
            lg={11}
          >
            <h1 id="homeNameGlitchWriting" className={styles.title}></h1>
          </Grid>
          <Grid
            xs={4}
            smOffset={1}
            sm={7}
            mdOffset={1}
            md={11}
            lgOffset={1}
            lg={11}
          >
            <div className={styles.description}>
              <span className={styles.description__role} id="homeRoleGlitchWriting">
              </span>
              <p className={styles.description__info} id="homeInfoGlitchWriting">
              </p>
            </div>
          </Grid>
          <Grid
            style={props.burgerNavIsOpen ? { zIndex: -1 } : {}}
            className={styles.main_button_home}
            xs={4}
            smOffset={1}
            sm={7}
            mdOffset={1}
            md={11}
            lgOffset={1}
            lg={11}
          >
            {showButton && (
              <div ref={glitch_once.ref}>
                <MainGlitchButton
                  showButton={showButton}
                  text="Contact me"
                  link="#contact"
                />
              </div>
            )}
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Home;
