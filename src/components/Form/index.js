import React from 'react';
import { Controller } from 'react-hook-form';
import ReactSelect from 'react-select';
import { InputContainer } from './styles';

export const Input = props => {
  const { nome, type, id, label, error, control, defaultValue } = props;

  return (
    <InputContainer className={error ? 'error form-group' : 'form-group'}>
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

  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white', height: 55, minHeight: 55 }),
    valueContainer: (provided, state) => ({
      ...provided,
      height: '55px',
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        paddingTop: '0px',
        backgroundColor: '#ffff',
        color: 'rgb(144 144 144)',
        fontSize: '14px',
        controlHeight: 25,
        cursor: isDisabled ? 'not-allowed' : 'default',
      };
    },
  };

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
            styles={colourStyles}
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
