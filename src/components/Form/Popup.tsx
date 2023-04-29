import { Fragment } from 'react';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { Button } from '@components/Button';

export const Popup: React.FC<{
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
                      href="mailto:znagy@znagy.hu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      znagy@znagy.hu
                    </Link>
                    .
                  </>
                )}
              </Dialog.Description>
            </div>

            <Button variant="small" onClick={() => setIsOpen(false)}>
              Got it!
            </Button>
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
);
