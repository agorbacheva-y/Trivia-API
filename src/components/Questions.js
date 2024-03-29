import he from "he";

const Questions = ({ triviaQues, index }) => {
  return (
    <div className="card-container">
      <p className="question">{he.decode(triviaQues?.[index]?.question)}</p>
    </div>
  );
};

export default Questions;

// this map() shows all questions in questions array
// {questions.map((q, index) => {
//   return (
//     <p key={index}>{q}</p>
//   );
// })}