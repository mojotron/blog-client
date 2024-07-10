const InputError = ({ message }: { message: string }) => {
  return (
    <p className="my-1 w-full text-error border-x-2 border-error px-1 rounded-md">
      {message}
    </p>
  );
};

export default InputError;
