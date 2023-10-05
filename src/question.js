function Question(props) {
  let opt_cnt = 0
  const opts = ["A", "B", "C", "D"]

  return (
    <div className="flex flex-col justify-end justify-items-center bg-[#5b1d8a] h-screen">
      <div className="flex items-center justify-center shrink-0 border-2 border-white text-white font-bold text-xl bg-[#5b1d8a] mb-1 mx-10 ">
        <span className="mx-2 my-8">{props.question}</span>
      </div>
      <div className="grid gap-4 grid-cols-2 grid-rows-2 h-32 m-10">
        {props.options.sort(() => { return Math.random() - 0.5 }).map(opt => {
          return <div onClick={() => props.handleAnswer(opt)} className="flex items-center justify-left border-2 border-white text-yellow-500 font-bold text-xl bg-[#5b1d8a] hover:bg-[#ffd31a]">
            <span className="ml-2">{opts[opt_cnt++]}:</span>
            <span className="text-white ml-2">{opt}</span>
          </div>
        })}
      </div>
    </div>
  );
}

export default Question;
