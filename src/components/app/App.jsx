import { useEffect, useState } from "react";
import Options from "../options/Options";
import Description from "../description/Description";
import Feedback from "../feedback/Feedback";
import Notification from "../notification/Notification";
import "./App.css";

function App() {
  const [feedbackCounts, setFeedbackCounts] = useState(() => {
    const storedFeedback = localStorage.getItem("feedbackCounts");
    return storedFeedback
      ? JSON.parse(storedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedbackCounts", JSON.stringify(feedbackCounts));
  }, [feedbackCounts]);

  const updateFeedback = (feedbackType) => {
    setFeedbackCounts((prevCounts) => ({
      ...prevCounts,
      [feedbackType]: prevCounts[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedbackCounts({ good: 0, neutral: 0, bad: 0 });
  };

  const { good, neutral, bad } = feedbackCounts;
  const totalFeedback = good + neutral + bad;
  const positivePercentage =
    totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackCounts={feedbackCounts}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
