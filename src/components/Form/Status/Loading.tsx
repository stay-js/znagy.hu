const FormLoading: React.FC = () => (
  <div className="flex flex-col items-center gap-2 mt-4 ">
    <svg className="animate-spin h-8 w-8" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25 stroke-green-500" cx="12" cy="12" r="10" strokeWidth="4" />
      <path
        className="fill-green-500"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
    Please wait, processing...
  </div>
);

export default FormLoading;
