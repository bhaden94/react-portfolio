import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { IAboutObject } from "../../information/AboutObject";
import { useEffect, useState } from "react";
import { getAbout } from "../../sanity-client/sanity.queries";
import { getImageFromRef } from "../../sanity-client/sanity.image";

function LandingPage() {
  const [about, setAbout] = useState<IAboutObject>();
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      container: {
        height: "100vh",
        maxWidth: "1600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "2rem",
        [theme.breakpoints.up("md")]: {
          flexDirection: "row",
          justifyContent: "center",
        },
      },
      textAndBtnContainer: {
        [theme.breakpoints.up("md")]: {
          maxWidth: "40%",
        },
      },
      textContainer: {
        padding: "4rem 4rem",
        [theme.breakpoints.down("md")]: {
          padding: "3rem 3rem",
        },
        [theme.breakpoints.down("sm")]: {
          padding: "3rem 3rem",
          marginTop: "60px",
        },
        [theme.breakpoints.down("xs")]: {
          padding: "1.5rem 1.5rem",
        },
      },
      text: {
        fontSize: "2rem",
        color: about?.landingOpenerColorOverride || theme.palette.text.primary,
      },
      btnContainer: {
        textAlign: "center",
        [theme.breakpoints.up("md")]: {
          padding: "4rem 0",
        },
      },
      featuredImageContainer: {
        position: "relative",
        overflow: "hidden",
        flexGrow: 1,
        [theme.breakpoints.up("sm")]: {
          marginLeft: "4rem",
          marginTop: "4rem",
        },
        [theme.breakpoints.up("md")]: {
          marginLeft: "0",
        },
      },
      featuredImages: {
        borderRadius: "8px",
        transition: ".3s ease",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        "&:hover": {
          scale: "1.05",
          zIndex: 9,
        },
      },
      featuredMobileImage: {
        position: "absolute",
        left: 30,
        top: 90,
        width: "250px",
        [theme.breakpoints.up("md")]: {
          width: "325px",
        },
      },
      featuredDesktopImage: {
        position: "relative",
        left: "70px",
        top: "0px",
        width: "500px",
        height: "275px",
        [theme.breakpoints.up("md")]: {
          width: "650px",
          height: "300px",
        },
      },
    }),
  );
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const aboutQuery = await getAbout();
      setAbout(aboutQuery);
    };
    fetchData();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.textAndBtnContainer}>
        <div className={classes.textContainer}>
          {about?.landingOpener.map((str: string, i: number) => (
            <Typography
              key={i}
              variant="h2"
              className={classes.text}
              data-testid="landing-opener-text"
            >
              {str}
            </Typography>
          ))}
        </div>
        <div className={classes.btnContainer}>
          <Link
            href={about?.featuredLink}
            target="_blank"
            rel="noreferrer"
            aria-label="Featured app"
            style={{ color: "inherit" }}
          >
            <Button variant="contained" color="primary" size="large">
              View Featured
            </Button>
          </Link>
        </div>
      </div>
      <div className={classes.featuredImageContainer}>
        <img
          src={getImageFromRef(about?.landingDesktopImage)?.url}
          alt="Featured app desktop view"
          className={[
            classes.featuredImages,
            classes.featuredDesktopImage,
          ].join(" ")}
        />
        <img
          src={getImageFromRef(about?.landingMobileImage)?.url}
          alt="Featured app mobile view"
          className={[classes.featuredImages, classes.featuredMobileImage].join(
            " ",
          )}
        />
      </div>
    </div>
  );
}

export default LandingPage;
