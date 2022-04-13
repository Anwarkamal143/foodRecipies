// import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames"
import React, { CSSProperties } from "react"
import SelectComponent, {
  ActionMeta,
  GroupedOptionsType,
  NamedProps,
  OptionsType,
  OptionTypeBase,
  ValueType,
} from "react-select"
import styled from "styled-components"

export interface SelectProps<
  OptionType extends OptionTypeBase = { label: string; value: string },
  IsMulti extends boolean = false
> {
  onChange?: (
    value: ValueType<OptionType, IsMulti>,
    action: ActionMeta<OptionType>
  ) => void
  options?: GroupedOptionsType<OptionType> | OptionsType<OptionType> | any
  placeholder?: string
  size?: "x-small" | "small" | "medium" | "large"
  defaultValue?: IsMulti extends true
    ? ValueType<OptionType, boolean>
    : ValueType<OptionType, false>
  value?: OptionType
  name?: string
  touched?: boolean
  error?: string | undefined
  width?: string | number
  heigth?: string | number
  type?: "default" | "seprated"
  className?: string
  style?: CSSProperties
  isSearchable?: boolean
  styles?: NamedProps["styles"]
  disabled?: boolean
  onclick?: (...args: any) => void
  onMenuOpen?: (...args: any) => void
  onMenuClose?: (...args: any) => void
  components?: Record<string, any>
}

const RSelect: React.FC<SelectProps> = ({
  onChange,
  options,
  placeholder,
  size,
  value,
  defaultValue,
  name,
  error,
  type,
  touched,
  className,
  style,
  disabled = false,
  components = undefined,
  onMenuOpen,
  onMenuClose,
  ...rest
}: SelectProps) => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  let sizeCls = ""
  switch (size) {
    case "large":
      sizeCls = "lg"
      break
    case "small":
      sizeCls = "sm"
      break
    case "x-small":
      sizeCls = "xs"
      break
    default:
      break
  }

  return (
    <div
      className={classNames(className, sizeCls, type || "default", {
        has__error: touched && error,
      })}
      style={style}
    >
      <SelectComponent
        onMenuOpen={onMenuOpen}
        onMenuClose={onMenuClose}
        className="react-select-container"
        name={name}
        components={components}
        isDisabled={disabled}
        classNamePrefix="react-select"
        menuPlacement="auto"
        openMenuOnFocus={true}
        defaultValue={defaultValue}
        placeholder={placeholder}
        value={value}
        options={options}
        onChange={onChange}
        {...rest}
      />
      {/* {touched && error && (
        <>
          <div
            id="title-error"
            style={{
              // paddingBottom: 5,
              width: "100%",
              textAlign: "right",
            }}
            className="error-msg is-invalid d-block"
          >
            <div>
              <FontAwesomeIcon
                style={{ marginRight: 3 }}
                icon={faExclamationCircle}
              />
              {error}
            </div>
          </div>
        </>
      )} */}
    </div>
  )
}

export const Select = styled(RSelect)`
  &.seprated {
    .react-select-container {
      padding-right: 50px;
      position: relative;
    }

    .react-select__indicators {
      position: absolute;
      right: -50px;
      top: -1px;
      border: 1px solid #d8d8d8;
      height: 40px !important;
      border-radius: 3px;

      .react-select__indicator-separator {
        display: none;
      }
    }

    &.lg {
      .react-select-container {
        padding-right: 64px;
      }
      .react-select__indicators {
        height: 54px !important;
        position: absolute;
        right: -64px;
      }
    }
  }

  &.lg {
    .react-select__control {
      min-height: 54px;
      font-size: 16px;

      .react-select__indicators {
        height: 52px;
        width: 54px;
      }
    }
  }
  .react-select__menu {
    margin: 0;
    z-index: 5;
    font-size: 10px;

    &-list {
      padding: 0;
    }

    .react-select__option {
      padding: 5px 12px;
      &.react-select__option--is-focused,
      &.react-select__option--is-selected {
        background: #255b87;
        color: #fff;

        .icon {
          color: #fff;
        }
      }
    }
  }

  .react-select__input {
    outline: none !important;
    box-shadow: none !important;
  }

  .react-select__control {
    border: 1px solid #e5e8ef;
    border-radius: 3px;
    font-size: 12px;
    line-height: 18px;
    color: #7b7b7b;
    min-height: 40px;
    box-shadow: none !important;
    outline: none !important;

    &:hover {
      border: 1px solid #e5e8ef;
    }

    .react-select__indicators {
      width: 40px;
      height: 38px;
      position: relative;
      justify-content: center;

      svg {
        padding: 2px;
      }
    }

    .react-select__indicator {
      color: #7b7b7b;
    }

    .react-select__indicator-separator {
      margin-top: 0;
      margin-bottom: 0;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      background: #e5e8ef;
    }
  }
`
