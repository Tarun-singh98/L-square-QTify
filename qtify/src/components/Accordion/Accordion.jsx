import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Accordion.module.css";
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   expandIconWrapper: {
//     Color: '#fff',
//   },
// })

function AccordionBox({ data }) {

  // const classes = useStyles();

  return (
    <>
      {data.map((ele) => {
        return (
          <Accordion key={ele.title} className={styles.accordion_wrapper}
          // classes={{ expandIconWrapper: classes.expandIconWrapper }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="pan el1a-header"
              className={styles.accordion_summary}
            >
              <Typography>{ele.title}</Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.accordion_details}>
              <Typography>{ele.summary}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
}

export default AccordionBox;