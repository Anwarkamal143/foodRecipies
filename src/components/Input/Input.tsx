import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames"
import React, {
  forwardRef,
  ReactElement,
  ReactNode,
  Ref,
  TextareaHTMLAttributes,
  useEffect,
  useState
} from "react"
import { InputWrapper } from "./Input.styled"
interface inputProfile
  extends Partial<React.InputHTMLAttributes<any>>,
    Partial<TextareaHTMLAttributes<any>> {
  value?: string
  hasIcon?: boolean
  hasLabel?: boolean
  isLoading?: boolean
  disableFloatingLabel?: boolean
  limit?: number
  validations?: {
    type?: string
    noMultipeSpace?: boolean
    noSpace?: boolean
  }[]
  renderLoader?: () => any
  materialDesign?: boolean
  class?: string
  inputClasses?: string
  labelClasses?: string
  icon?: string | ReactElement
  prefixElement?: string | ReactElement
  label?: string | ReactElement | ReactNode
  touched?: any
  error?: any
  dataLpignore?: string
  autocomplete?: string
  hasLimit?: boolean
}
function FocusInput(props: inputProfile, ref: Ref<any>) {
  const {
    validations = [],
    icon,
    label,
    labelClasses,
    prefixElement,
    hasLimit = true,
    ...rest
  } = props
  const [value, setValue] = useState<string>(props.value || "")
  const [focus, setFocus] = useState<boolean>(Boolean(props.value))

  useEffect(() => {
    if (!Boolean(props.value) && !focus) {
      setValue("")
      setFocus(false)
    } else {
      if (props.value != null) setValue(props?.value)
      setFocus(true)
    }
  }, [props.value])

  const hasIcon = !!props.hasIcon
  const isLoading = props.isLoading || false
  const animationLess = props.disableFloatingLabel
  const hasLabel = props.hasLabel === undefined && true
  const inputType = props.type || "text"
  const limit = props.limit ? props.limit : inputType === "text" ? 120 : 250

  const inputFocused = () => {
    setFocus(true)
  }

  const inputBlurred = (e: any) => {
    setFocus(Boolean(value && value.trim().length))
    if (props.onBlur) {
      props.onBlur(e)
    }
  }

  const excuteValidation = (value: any) => {
    let afterValidation = value
    if (!value) return value
    validations.map(item => {
      if (item.type === "alpha") {
        const reg = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
        if (reg.test(afterValidation)) {
          throw new Error("Only Alphabets")
        }
        if (/\d/.test(afterValidation)) {
          throw new Error("Only Alphabets")
        }
        if (/^\s+/.test(afterValidation)) {
          throw new Error("Only Alphabets")
        }
      }
      if (item.type === "number") {
        const reg = /^\d+(\.\d{0,2})?$/
        if (!reg.test(afterValidation)) {
          throw new Error("Only number allowed")
        }
      }
      if (item.noMultipeSpace) {
        afterValidation = afterValidation.replace(/ {1,}/g, " ")
      }
      if (item.noSpace) {
        afterValidation = afterValidation.replace(/ {0,}/g, "")
      }
      return null
    })
    return afterValidation
  }
  const onChange = (e: any) => {
    try {
      if (validations?.length > 0) {
        e.target.value = excuteValidation(e.target.value)
      }
      if (!hasLimit || !limit || e.target.value.length <= limit) {
        setValue(e.target.value)
        if (props.onChange) {
          props.onChange(e)
        }
      }
    } catch (e) {
      // console.error(e);
    }
  }

  const cols = props.cols || 30
  const rows = props.rows || 10
  let inputElement = null

  switch (inputType) {
    case "textarea":
      inputElement = (
        <textarea
          id={props.id}
          name={props.name}
          className={`form-control ${props.class || ""}`}
          onChange={onChange}
          style={{ ...props.style, fontWeight: 400 }}
          cols={cols}
          rows={rows}
          onFocus={inputFocused}
          onBlur={inputBlurred}
          value={value}
          disabled={props?.disabled}
          ref={ref}
          placeholder={props.placeholder}
        />
      )
      break
    default:
      inputElement = (
        <input
          id={props.id}
          name={props.name}
          className={`form-control ${props.class || ""}`}
          onChange={onChange}
          type={inputType}
          style={{ ...props.style }}
          onFocus={inputFocused}
          onBlur={inputBlurred}
          value={value}
          placeholder={props?.placeholder}
          disabled={props?.disabled}
          ref={ref}
          data-lpignore={props.dataLpignore}
          autoComplete={props.autocomplete}
          onKeyUp={props.onKeyUp}
          onKeyPress={props.onKeyPress}
        />
      )
  }

  const iClasses = classNames("text-input", props.inputClasses || "mb-20", {
    "prefix-element": prefixElement,
    "materialized-input": props.materialDesign,
    "ico-input": icon,
    "input-active": focus && !animationLess,
    "no-label": !label,
    "disable-floating-label": animationLess,
  })

  const loader = () => {
    if (isLoading) {
      if (props.renderLoader) {
        return props.renderLoader()
      }
      return (
        <div
          className="loader-circule"
          style={{
            right: "15px",
            left: "unset",
            top: "50%",
            borderTopColor: "#898989",
            transform: "translateY(-50%)",
          }}
        ></div>
      )
    }
  }
  return (
    <InputWrapper className="parent-input_wrapper">
      <div className={iClasses}>
        {prefixElement && <div className="pre-fix"> {prefixElement}</div>}

        {icon && (
          <div className="icon">
            {typeof icon === "string" ? (
              <span className={`icon-${icon}`}></span>
            ) : (
              icon
            )}
          </div>
        )}
        {inputElement}
        {hasLimit && inputType === "textarea" && limit && (
          <div className="word-count">
            {limit - value?.length || 0} characters
          </div>
        )}
        {hasLabel && (
          <label htmlFor={props.id} className={labelClasses}>
            <span>{label}</span>
          </label>
        )}
        {loader()}
        {props.touched && props.error && (
          <>
            <div
              id="title-error"
              style={{
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
                {props.error}
              </div>
            </div>
          </>
        )}
      </div>
    </InputWrapper>
  )
}

export const Input = forwardRef(FocusInput)
