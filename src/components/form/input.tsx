import type { Control, FieldPath, FieldValues, PathValue } from 'react-hook-form';

import React from 'react';
import { Controller } from 'react-hook-form';

import { Field, FieldError, FieldGroup, FieldLabel } from '~/components/ui/field';
import { Input } from '~/components/ui/input';

type FormInputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = (PathValue<TFieldValues, TName> extends InputValue
  ? {} // eslint-disable-line @typescript-eslint/no-empty-object-type
  : { _error: 'Field value must match input value type' }) & {
  errorPosition?: 'bottom' | 'top';

  control: Control<TFieldValues>;
  name: TName;

  disabled?: boolean;
  label: React.ReactNode;
  max?: number;
  min?: number;
  placeholder?: string;
  step?: number;
  type?: React.HTMLInputTypeAttribute;
};

type InputValue = null | React.InputHTMLAttributes<HTMLInputElement>['value'];

export function FormInput<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  control,
  disabled,
  errorPosition = 'top',
  label,
  max,
  min,
  name,
  placeholder,
  step,
  type = 'text',
}: FormInputProps<TFieldValues, TName>) {
  return (
    <FieldGroup>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <div className="flex flex-wrap justify-between gap-x-4 gap-y-2">
              <FieldLabel htmlFor={name}>{label}</FieldLabel>
              {fieldState.invalid && errorPosition === 'top' && (
                <FieldError errors={[fieldState.error]} />
              )}
            </div>

            <Input
              {...field}
              aria-invalid={fieldState.invalid}
              disabled={disabled}
              id={name}
              max={max}
              min={min}
              placeholder={placeholder}
              step={step}
              type={type}
              value={field.value ?? ''}
            />

            {fieldState.invalid && errorPosition === 'bottom' && (
              <FieldError errors={[fieldState.error]} />
            )}
          </Field>
        )}
      />
    </FieldGroup>
  );
}
