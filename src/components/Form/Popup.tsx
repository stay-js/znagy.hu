import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment } from 'react';

const Popup: React.FC<{
  isOpen: boolean;
  isSuccess: boolean;
  setIsOpen: (isOpen: boolean) => void;
}> = ({ isOpen, setIsOpen, isSuccess }) => (
  <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25 dark:bg-opacity-50" />
      </Transition.Child>

      <div className="content fixed inset-0 grid place-items-center">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="flex w-full max-w-md flex-col gap-4 rounded-2xl bg-white p-6 shadow-xl dark:bg-neutral-900">
            <div className="flex flex-col gap-2">
              <Dialog.Title className="text-lg font-bold text-neutral-900 dark:text-neutral-50">
                {isSuccess ? ' Message Sent Successfully' : 'Something went wrong'}
              </Dialog.Title>

              <Dialog.Description className="mb-0 text-sm text-neutral-500 dark:text-neutral-200">
                {isSuccess ? (
                  'Thank you for sending me a message. I will get back to you as soon as possible.'
                ) : (
                  <>
                    Something went wrong, please try again later! If the problem persists, please
                    contact me at{' '}
                    <Link
                      className="bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-transparent"
                      href="mailto:nagyzeteny6@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      nagyzeteny6@gmail.com
                    </Link>
                    .
                  </>
                )}
              </Dialog.Description>
            </div>

            <button
              type="button"
              className="group flex w-fit items-center rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 font-medium text-gray-900 hover:from-green-400 hover:to-blue-600 hover:text-white dark:text-white"
              onClick={() => setIsOpen(false)}
            >
              <span className="flex w-fit items-center justify-center rounded-md bg-white px-4 py-2 text-sm transition-all group-hover:bg-opacity-0 dark:bg-neutral-900">
                Got it!
              </span>
            </button>
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
);

export default Popup;
