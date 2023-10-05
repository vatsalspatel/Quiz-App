import Question from './question';
import qna from "./q&a.json";
import { useState } from 'react';

const qOrder = [...Array(qna.data.length).keys()].sort(() => { return Math.random() - 0.5 });

function App() {
  const [currQ, setCurrQ] = useState(0)
  const [numCorrect, setNumCorrect] = useState(0)
  const [quizDone, setQuizDone] = useState(false)

  const handleAnswer = (selOpt) => {
    if (selOpt === qna.data[qOrder[currQ]].answer) {
      setNumCorrect(numCorrect + 1)
    }

    if (currQ === qna.data.length - 1) {
      setQuizDone(true)
    } else {
      setCurrQ(currQ + 1)
    }
  }

  return (
    <div>
      {quizDone ?
        <div className="flex flex-col justify-end justify-items-center bg-[#5b1d8a] h-screen">
          <div className="flex items-center justify-center shrink-0 border-2 border-white text-white font-bold text-xl bg-[#5b1d8a] mb-10 mx-10 ">
            <span className="mx-2 my-8">Score: {numCorrect}/{qna.data.length}</span>
          </div>
        </div>
        :
        <Question question={qna.data[qOrder[currQ]].question} options={qna.data[qOrder[currQ]].options} handleAnswer={handleAnswer} />
      }
    </div>
  );
}

export default App;
