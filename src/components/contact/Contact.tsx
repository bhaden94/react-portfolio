import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { getContactInfo } from "../../sanity-client/sanity.queries";
import {
  TContactIcon,
  ContactIconMap,
  ContactSchema,
} from "../../sanity-client/schemaTypes/contact";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      color: theme.palette.background.default,
    },
    button: {
      borderRadius: "50%",
      height: "70px",
      width: "70px",
      marginRight: "20px",
    },
    item: {
      margin: "2% 0",
    },
    container: {
      padding: "2% 5%",
      position: "relative",
    },
    text: {
      position: "relative",
      "&:hover": {
        textDecoration: "none",
      },
      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "3px",
        bottom: 0,
        left: 0,
        backgroundColor: theme.palette.secondary.main,
        visibility: "hidden",
        transform: "scaleX(0)",
        transition: "all 0.1s linear",
      },
      "&:hover::before": {
        visibility: "visible",
        transform: "scaleX(1)",
      },
    },
  }),
);

const ContactIcon = ({
  iconKey,
  iconClass,
}: {
  iconKey: TContactIcon;
  iconClass: string;
}) => {
  const FoundIcon = ContactIconMap[iconKey];
  return FoundIcon ? (
    <FoundIcon fontSize="large" className={iconClass} />
  ) : null;
};

function Contact() {
  const classes = useStyles();
  const [contactInfo, setContactInfo] = useState<ContactSchema[]>();

  useEffect(() => {
    const fetchData = async () => {
      const contactQuery = await getContactInfo();
      setContactInfo(contactQuery);
    };
    fetchData();
  }, []);

  return (
    <Grid container direction="column" className={classes.container}>
      {contactInfo?.map((contactInfo: ContactSchema, i: number) => (
        <Grid key={i} item className={classes.item}>
          <Button
            href={contactInfo.link}
            className={classes.button}
            target="_blank"
            rel="noreferrer"
            variant="contained"
            size="large"
            color="primary"
            aria-label={contactInfo.name}
            data-testid={`icon-btn${i}`}
          >
            <ContactIcon iconKey={contactInfo.icon} iconClass={classes.icon} />
          </Button>
          <Link
            className={classes.text}
            href={contactInfo.link}
            target="_blank"
            rel="noreferrer"
          >
            {contactInfo.text}
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

export default Contact;
