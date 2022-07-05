import { FC } from 'react';
import { FieldError } from 'react-hook-form';

type Props = {
  property: string;
  errors: {
    [key: string]: FieldError | undefined;
  };
};

export const FormErrorMessages: FC<Props> = ({ errors, property }) => {
  const propertyErrors = errors[property]?.types && Object.entries(errors[property]?.types ?? {});

  return (
    <div>
      {errors.tourType?.type !== 'apiError' &&
        propertyErrors?.map(([type, message]) => (
          <p className="text-red-600" key={type} id={`${property}-error`}>
            {message}
          </p>
        ))}
    </div>
  );
};
