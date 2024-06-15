"use client";
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { Exclaimation, Trash } from './Icon';
import { deleteUser } from '@/utils/user/deleteAction';

const CustomDialog = (props: {id: string, loadData: Function}) => {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button className="px-2 py-2 rounded-md bg-slate-500 hover:bg-slate-700" onClick={() => { setIsOpen(true); }}>{Trash()}</button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-30">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 shadow-sm shadow-slate-300 bg-slate-300 dark:bg-slate-500 px-8 py-4 rounded-lg">
            <DialogTitle className="font-bold flex gap-2 items-center text-rose-400">
              {Exclaimation()}
              Delete User
            </DialogTitle>
            <Description>This will permanently delete the user</Description>
            <div className="flex gap-4">
              <button onClick={() => setIsOpen(false)} className='px-2 py-1 ml-auto rounded-md bg-slate-500 hover:bg-slate-700'>Cancel</button>
              <button onClick={() => {
                  setIsOpen(false)
                  deleteUser(props.id)
                  props.loadData();
                }} className='px-2 py-1 rounded-md bg-rose-500 hover:bg-rose-700'> Confirm
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default CustomDialog;