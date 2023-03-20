import React from "react";
import AccordionBox from "../Accordion/Accordion";
import styles from "./FAQ.module.css";

const FAQ_Array = [
  {
    title: "Is QTify free to use?",
    summary: "Yes it is 100% free, and has 0% ads!",
  },
  {
    title: "Can i download and listen to songs offline?",
    summary:
      "Sorry, unfortunately we don't provide the service to download any songs.",
  },
];

function FAQ() {
  return (
    <div className={styles.FAQ_section}>
      <div className={styles.FAQ_title}>FAQs</div>
        <AccordionBox data={FAQ_Array} />
    </div>
  );
}

export default FAQ;
