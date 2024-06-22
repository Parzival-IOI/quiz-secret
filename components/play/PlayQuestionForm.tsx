"use client";
import { playQuestionResponse } from "@/utils/definition"
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { useState } from "react";
import { Check } from "../Icon";

const PlayQuestionForm = (props: {question: playQuestionResponse, no: number}) => {
  let [selected, setSelected] = useState("");
  return (
    <div className="w-full min-w-full h-[85vh] flex flex-col gap-12 sm:gap-16 justify-center items-center">
      <div>
        <span className="px-2">{props.no}.</span>
        {
          props.question.question
        }
      </div>
      <input type="hidden" name="question" value={props.question.id} />
      <RadioGroup value={selected} onChange={setSelected} name={"answer" + props.question.id} aria-label="Server size" className="flex justify-center items-center flex-wrap gap-2 sm:gap-4 w-3/4">
        {
          props.question.answers.map((answer, index) => {
            return (
              <Field key={index} className="flex items-center gap-2">
                <Radio
                  value={answer.id}
                  className="group relative flex cursor-pointer rounded-lg bg-white/5 py-4 px-5 text-white shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/40"
                >
                  <div className="flex w-full items-center justify-between gap-2 sm:gap-4">
                    <div className="text-sm/6">
                      <Label className="font-semibold text-white">
                        <span className="px-2">{String.fromCharCode(97 + index)}.</span>
                        {answer.answer}
                      </Label>
                    </div>
                    <Check className="fill-white transition group-data-[checked]:block hidden" />
                  </div>
                </Radio>
              </Field>
            )
          })
        }
      </RadioGroup>
    </div>
  )
}

export default PlayQuestionForm