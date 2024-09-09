import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ThemeSwitcher from "../dark-mode/ThemeSwitcher";
import { ContactSchema } from "../../sanity-client/schemaTypes/contact";
import { useEffect, useState } from "react";
import { getContactInfo } from "../../sanity-client/sanity.queries";
import ContactIcon from "../ContactIcon/ContactIcon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      position: "fixed",
      bottom: 0,
      padding: 15,
      width: 240, // this is the fixed width of our drawer
    },
    themeLabel: {
      textAlign: "center",
    },
    icon: {
      color: theme.palette.primary.main,
      transition: "color 250ms",
      width: "100%",
      "&:hover": {
        color: theme.palette.secondary.main,
        cursor: "pointer",
      },
    },
  }),
);

function DrawerFooter() {
  const classes = useStyles();
  const theme = useTheme();
  const [contactInfo, setContactInfo] = useState<ContactSchema[]>();

  useEffect(() => {
    const fetchData = async () => {
      const contactQuery = await getContactInfo();
      setContactInfo(contactQuery);
    };
    fetchData();
  }, []);

  return (
    <div className={classes.footer}>
      <Typography className={classes.themeLabel} color="textSecondary">
        {theme.palette.type === "light"
          ? "Give your eyes a break!"
          : "Isn't that better?"}
      </Typography>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
      >
        <ThemeSwitcher />
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
      >
        {contactInfo?.map((contactItem: ContactSchema, i: number) => (
          <Grid key={i} item xs={3}>
            <Link
              href={contactItem.link}
              target="_blank"
              rel="noreferrer"
              aria-label={contactItem.name}
            >
              <ContactIcon
                iconKey={contactItem.icon}
                iconClass={classes.icon}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default DrawerFooter;
