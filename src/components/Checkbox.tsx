import classNames from "classnames"
import React, { HTMLAttributes, ReactElement } from "react"
import styled from "styled-components"
import { Image } from "./Image"

const CheckBoxStyle = styled.div<{ h: number; w: number }>`
  display: inline-block;
  &.checkbox > label {
    display: flex;
    align-items: center;
    .label-data {
      padding-left: 10px;
    }
  }
  &.checkbox {
    --background: #fff;
    --border: #d1d6ee;
    --border-hover: #bbc1e1;
    /* --border-active: #1e2235; */
    --border-active: #11c278;
    --tick: #fff;
    /* --s: 10px;
    --b: 2px; */
    position: relative;

    input,
    svg {
      width: ${({ w }) => `${w}px`};
      height: ${({ h }) => `${h}px`};
      display: block;
    }
    input {
      -webkit-appearance: none;
      -moz-appearance: none;
      position: relative;
      outline: none;
      background: var(--background);
      border: none;
      margin: 0;
      padding: 0;
      cursor: pointer;
      border-radius: 4px;
      transition: box-shadow 0.3s;
      box-shadow: inset 0 0 0 var(--s, 1px) var(--b, var(--border));
      &:hover {
        --s: 2px;
        --b: var(--border-hover);
      }
      &:checked {
        --b: var(--border-active);
      }
    }
    svg {
      /* pointer-events: none; */
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke: var(--stroke, var(--border-active));
      position: absolute;
      top: 0;
      left: 0;
      width: ${({ w }) => `${w}px`};
      height: ${({ h }) => `${h}px`};
      transform: scale(var(--scale, 1)) translateZ(0);
    }
    &.path {
      input {
        &:checked {
          --s: 2px;
          transition-delay: 0.4s;
          & + svg {
            --a: 16.1 86.12;
            --o: 102.22;
          }
        }
      }
      svg {
        stroke-dasharray: var(--a, 86.12);
        stroke-dashoffset: var(--o, 86.12);
        transition: stroke-dasharray 0.6s, stroke-dashoffset 0.6s;
      }
    }
    &.bounce {
      --stroke: var(--tick);
      input {
        /* &:checked { */
        --s: 11px;
        & + svg {
          animation: bounce 0.4s linear forwards 0.2s;
        }
        /* } */
      }
      svg {
        --scale: 0;
      }
    }
  }

  @keyframes bounce {
    50% {
      transform: scale(1.2);
    }
    75% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
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

  &.checkbox.type-primary [type="checkbox"]:checked ~ .label-text {
    background: #255b87;
    color: #fff;
  }

  &.checkbox.type-primary [type="checkbox"]:checked + .icon {
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
`
interface Props extends HTMLAttributes<HTMLInputElement> {
  value?: boolean | undefined
  label?: string | React.ReactNode
  checked?: boolean | undefined
  name?: string
  border?: boolean
  classes?: string
  className?: string
  small?: boolean
  alt?: boolean
  type?: "default" | "primary" | "secondary"
  inlineBlock?: boolean
  icon?: string | ReactElement
  render?: (prop: Partial<Props>) => React.ReactNode
  height?: number
  width?: number
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
  classes = "",
  className,
  type,
  inlineBlock,
  width = 21,
  height = 21,
  icon,
  onClick,
  ...rest
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)
  }
  const handleClick = (e: any) => {
    onClick && onClick(e)
  }
  const handleBlur = (e: any) => {
    onBlur && onBlur(e)
  }

  const iClasses = classNames(
    "checkbox bounce ",
    {
      alt,
      "inline-block": inlineBlock,
      [`type-${type}`]: type,
      short: small,
      "radio-border": border || alt,
      "with-icon": icon && label,
      "only-icon": icon && !label,
    },
    className
  )
  return (
    <CheckBoxStyle className={iClasses} h={height} w={width}>
      <label className="">
        <input
          type="checkbox"
          name={name}
          onClick={handleClick}
          onChange={handleChange}
          onBlur={handleBlur}
          defaultChecked={defaultChecked}
          checked={value || checked}
          {...rest}
        />
        <svg viewBox={`0 0 21 21`}>
          <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
        </svg>
        {(icon || label) && (
          <div className="label-data">
            {icon && (
              <span className="icon">
                {typeof icon === "string" ? (
                  <Image src={icon} alt="icon" />
                ) : (
                  icon
                )}
              </span>
            )}
            <span className="custom-input-holder">
              <span className="custom-input"></span>
            </span>
            <span className="label-text">{label}</span>
          </div>
        )}
      </label>
    </CheckBoxStyle>
  )
}

export const Checkbox = checkbox
