import Paper from "@material-ui/core/Paper";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useGlobalStyles } from "../../theme/globalStyle";
import { useState, useEffect } from "react";
import { getSkillInfo } from "../../sanity-client/sanity.queries";
import { ITechSkill, SkillSchema } from "../../sanity-client/schemaTypes/skill";
import TechnologyIcon from "../Technology/TechnologyIcon";

const useStyles = makeStyles((theme: Theme) => ({
  tech: {
    display: "inline-block",
    padding: "0 10px",
    textAlign: "center",
  },
  title: {
    padding: "1.2rem 1.2rem 0",
    fontWeight: 300,
  },
  skillContainer: {
    overflowX: "auto",
    overflowY: "hidden",
    whiteSpace: "nowrap",
    padding: "10px 0",
  },
}));

function Skills() {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const [skillInfo, setSkillInfo] = useState<SkillSchema[]>();

  useEffect(() => {
    const fetchData = async () => {
      const skillQuery = await getSkillInfo();
      setSkillInfo(skillQuery);
    };
    fetchData();
  }, []);

  return (
    <div>
      {skillInfo?.map((skill: SkillSchema, i: number) => (
        <Paper key={i} className={globalClasses.container} elevation={3}>
          <Typography
            className={classes.title}
            variant="h4"
            variantMapping={{ h4: "h3" }}
            color="textSecondary"
          >
            {skill.title}
            <hr />
          </Typography>

          <div className={classes.skillContainer}>
            {skill.tech?.map(({ name, tech }: ITechSkill, i: number) => (
              <div key={i} className={classes.tech}>
                <div className="icon-hover">
                  <TechnologyIcon
                    iconKey={tech.icon}
                    iconSize={tech.iconSize}
                  />
                </div>
                <Typography color="textSecondary">{name}</Typography>
              </div>
            ))}
          </div>
        </Paper>
      ))}
    </div>
  );
}

export default Skills;
