import he from "he";
import Questions from "./Questions";

const MultipleChoice = ({ trivia, index, setIndex }) => {

  const incorrect = trivia.map(({incorrect_answers}) => incorrect_answers); //he.decode does not work here???
  //console.log(incorrect);

  const correct = trivia.map(({correct_answer}) => he.decode(correct_answer));
  //console.log(correct);

  let multipleChoice = incorrect.map((item, index) => ([
    ...item, correct[index]
  ]) );
  //console.log(multipleChoice);

  let currentChoice = multipleChoice[index];
  //console.log(currentChoice);

  return (
    <div>
      <Questions 
        trivia={trivia} 
        index={index} 
        setIndex={setIndex}
        currentChoice={currentChoice}
      />
      <ul>
        {currentChoice.map((item, index) => 
          <li key={index}>{currentChoice[index]}</li>
        )}
      </ul>
    </div>
  );
};

export default MultipleChoice;