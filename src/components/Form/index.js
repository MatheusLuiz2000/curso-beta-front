import React from 'react';
import { Controller } from 'react-hook-form';
import ReactSelect from 'react-select';
import { InputContainer } from './styles';

export const Input = props => {
  const { nome, type, id, label, error, control, defaultValue } = props;

  return (
    <InputContainer className={error ? 'error' : ''}>
      <label htmlFor={nome}>{label}</label>
      <Controller
        name={nome}
        control={control}
        key={id}
        as={<input type={type} name={nome} defaultValue={defaultValue} />}
      />
      <small>{error ? `${error}` : ''}</small>
    </InputContainer>
  );
};

export const Select = props => {
  const {
    nome,
    id,
    label,
    error,
    control,
    options,
    placeholder,
    defaultValue,
  } = props;

  return (
    <InputContainer className={error ? 'error form-group' : 'form-group'}>
      <label htmlFor={nome}>{label}</label>
      <Controller
        name={nome}
        control={control}
        key={id}
        as={
          <ReactSelect
            className="select-class"
            placeholder={placeholder}
            defaultValue={defaultValue}
            options={options.map(item => {
              return {
                value: item.id,
                label: item.nome,
              };
            })}
          />
        }
      />
      <small>{error ? `${error}` : ''}</small>
    </InputContainer>
  );
};
