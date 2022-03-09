import classNames from 'classnames';
import React, { HTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';

const CheckBoxStyle = styled.div`
  &.checkbox.type-primary label {
    padding: 0;
    font-size: 17px;
    line-height: 21px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 61px;
  }

  &.checkbox.type-primary .custom-input-holder {
    display: none;
  }

  &.checkbox.type-primary .label-text {
    padding: 20px 15px;
    background: #fff;
    display: block;
    text-align: center;
    border-radius: 5px;
    min-height: inherit;
    width: 100%;
    transition: all 0.4s ease;
  }

  &.checkbox.type-primary.with-icon .label-text {
    padding-left: 42px;
  }

  &.checkbox.type-primary .icon {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translate(0, -50%);
    color: #8889a3;
    max-width: 42px;
  }

  &.checkbox.type-primary.only-icon .icon {
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.4s ease;
  }

  &.checkbox.type-primary .icon svg {
    min-width: 30px;
    height: auto;
  }

  &.checkbox.type-primary [type='checkbox']:checked ~ .label-text {
    background: #255b87;
    color: #fff;
  }

  &.checkbox.type-primary [type='checkbox']:checked + .icon {
    color: #fff;
  }

  &.checkbox.type-primary .label-text:after {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: 1px solid #255b87;
    opacity: 1;
    transition: all 0.4s ease;
  }

  &.checkbox.type-primary:hover .label-text:after {
    border-width: 2px;
  }
  .icon img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`;
interface Props extends HTMLAttributes<HTMLInputElement> {
  value?: boolean | undefined;
  label?: string | React.ReactNode;
  checked?: boolean | undefined;
  name?: string;
  border?: boolean;
  classes?: string;
  className?: string;
  small?: boolean;
  alt?: boolean;
  type?: 'default' | 'primary' | 'secondary';
  inlineBlock?: boolean;
  icon?: string | ReactElement;
  render?: (prop: Partial<Props>) => React.ReactNode;
}

const checkbox = ({
  onBlur,
  defaultChecked,
  label,
  checked,
  value,
  border = false,
  alt = false,
  small = false,
  onChange,
  name,
  classes = '',
  className,
  type,
  inlineBlock,
  icon,
  ...rest
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
  };
  const handleBlur = (e: any) => {
    onBlur && onBlur(e);
  };

  const iClasses = classNames(
    'checkbox',
    {
      alt,
      'inline-block': inlineBlock,
      [`type-${type}`]: type,
      short: small,
      'radio-border': border || alt,
      'with-icon': icon && label,
      'only-icon': icon && !label,
    },
    className,
  );
  return (
    <CheckBoxStyle className={iClasses}>
        <label class="checkbox bounce">
        <input type="checkbox"
          name={name}
          style={{ display: 'none' }}
          onChange={handleChange}
          onBlur={handleBlur}
          defaultChecked={defaultChecked}
          checked={value || checked}
          {...rest}>
        <svg viewBox="0 0 21 21">
            <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
        </svg>
                {icon && (
          <span className="icon">
            {typeof icon === 'string' ? <img src={icon} alt="icon" /> : icon}
          </span>
        )}
        <span className="custom-input-holder">
          <span className="custom-input"></span>
        </span>
        <span className="label-text">{label}</span>
    </label>
      {/* <label>
        <input
          type="checkbox"
          name={name}
          style={{ display: 'none' }}
          onChange={handleChange}
          onBlur={handleBlur}
          defaultChecked={defaultChecked}
          checked={value || checked}
          {...rest}
        />
        {icon && (
          <span className="icon">
            {typeof icon === 'string' ? <img src={icon} alt="icon" /> : icon}
          </span>
        )}
        <span className="custom-input-holder">
          <span className="custom-input"></span>
        </span>
        <span className="label-text">{label}</span>
      </label> */}
    </CheckBoxStyle>
  );
};

export default checkbox;


  <label class="checkbox bounce">
        <input type="checkbox">
        <svg viewBox="0 0 21 21">
            <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
        </svg>
    </label>
