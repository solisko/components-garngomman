import React, { useState } from "react";
import styles from "./Support.module.css";

const faqs = [
  {
    question: "Hur ändrar jag mitt lösenord?",
    answer:
      "Gå in på kontoinställningar, ändra lösenord i fältet för lösenord och klicka på spara.",
  },
  {
    question: "Hur avslutar jag mitt medlemskap?",
    answer:
      "För att avsluta ditt medlemskap på Garngömman går du in på personinställninagr och klickar på Radera konto längst ner på sidan.",
  },
  {
    question: "Kan jag uppgradera mitt konto?",
    answer:
      "Du kan uppgradera ditt konto genom att gå in på Medelmskap och välja bland Standard, Medel och Pro. ",
  },
];

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleToggle = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <h2>Vanliga frågor och svar</h2>
      {faqs.map((faq, index) => (
        <div key={index}>
          <div onClick={() => handleToggle(index)} className={styles.question}>
            <h3>{faq.question}</h3>
          </div>

          {activeQuestion === index && (
            <div className={styles.answer}>
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
