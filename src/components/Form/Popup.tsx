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

      <div className="fixed inset-0">
        <div className="grid min-h-full place-items-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="flex w-full max-w-[90%] flex-col gap-4 rounded-2xl bg-white p-6 shadow-xl sm:max-w-md">
              {isSuccess ? (
                <div className="flex flex-col gap-2">
                  <Dialog.Title className="text-lg font-bold text-neutral-900">
                    Message Sent Successfully
                  </Dialog.Title>

                  <Dialog.Description className="mb-0 text-sm text-neutral-500 dark:text-neutral-500">
                    Thank you for sending me a message. I will get back to you as soon as possible.
                  </Dialog.Description>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <Dialog.Title className="text-lg font-bold text-neutral-900">
                    Something went wrong
                  </Dialog.Title>

                  <Dialog.Description className="mb-0 text-sm text-neutral-500 dark:text-neutral-500">
                    Something went wrong, please try again later! If the problem persists, please
                    contact me at{' '}
                    <Link href="mailto:nagyzeteny6@gmail.com">
                      <a className="bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-transparent">
                        nagyzeteny6@gmail.com
                      </a>
                    </Link>
                    .
                  </Dialog.Description>
                </div>
              )}

              <button
                type="button"
                className="w-fit rounded bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200"
                onClick={() => setIsOpen(false)}
              >
                Got it!
              </button>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
);

export default Popup;
