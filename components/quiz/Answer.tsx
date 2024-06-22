import { isCorrect } from "@/utils/data";
import { Field, Label, Select } from "@headlessui/react";
import { Cross } from "../Icon";


const Answer = (props: {id: number, QId: number, data: {answer: string, isCorrect: boolean}, handleFormChangeAnswer: Function, removeAnswer: Function}) => {
  return (
    <div className="pt-2 pb-6 px-6 bg-slate-500 rounded-xl mt-8">
      <div className="w-full flex justify-end" >
        <button type="button" className="mt-2 p-1 rounded-lg bg-slate-600 hover:bg-slate-700" onClick={() => props.removeAnswer(props.id)}>{Cross()}</button>
      </div>
      <div>
        <label htmlFor="username" className="block text-sm font-medium leading-6 ">
          Answer {props.id + 1}
        </label>
        <div className="mt-2">
          <input
            id={"answer" + props.id}
            name={"questions.answers.answer"}
            type="text"
            value={props.data.answer}
            onChange={event => props.handleFormChangeAnswer(props.id, event, true)}
            required
            className="block w-full h-10 rounded-md border-0 dark:bg-slate-600 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <Field>
        <Label htmlFor="correct" className="block text-sm font-medium leading-6 ">Is Correct</Label>
        <div className="mt-2">
              <Select name={"questions.answers.correct"} id="correct" onChange={event => props.handleFormChangeAnswer(props.id, event, false)} className="block w-full h-10 rounded-md border-0 dark:bg-slate-600 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  {
                      isCorrect.map((item, index) => {
                          let isSelected = false
                          if(props.data.isCorrect) {
                              isSelected = true;
                          }

                          return (
                              <option value={item.value} key={index} selected={isSelected} className="w-full h-16 font-sans font-semibold" >{item.label}</option>
                          )
                      })
                  }
              </Select>
          </div>
      </Field>

    </div>
  )
}

export default Answer;