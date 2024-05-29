import { userRoleType } from '@/utils/definition'
import { Field, Label, Select } from '@headlessui/react'

const Selection = (props: {option: userRoleType[], name: string, label: string}) => {
  return (
    <Field>
        <Label htmlFor={props.name} className="block text-sm font-medium leading-6 ">{props.label}</Label>
        <div className="mt-2">
            <Select name={props.name} id={props.name} className="block w-full h-10 rounded-md border-0 dark:bg-slate-600 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                {
                    props.option.map((item, index) => {
                        return (
                            <option value={item.value} key={index} className="w-full h-16" >{item.label}</option>
                        )
                    })
                }
            </Select>
        </div>
    </Field>
  )
}

export default Selection