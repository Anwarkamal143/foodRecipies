import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  MutableRefObject,
  ReactChild,
  ReactChildren,
  ReactElement,
  ReactNode,
  TextareaHTMLAttributes,
} from "react"
import {
  ErrorWrapper,
  InputContainer,
  InputEl,
  InputElWrapper,
  InputWrapper,
  TextAreaWrapper,
} from "./Input.styled"

// type InputField = DetailedHTMLProps<
//     InputHTMLAttributes<HTMLInputElement>,
//     HTMLInputElement
// >
export type TextareaFieldProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  ref?: MutableRefObject<HTMLTextAreaElement>
  icon?: string | ReactNode
  error?:
    | string
    | ReactChild
    | ReactChildren
    | ReactNode
    | ReactElement
    | HTMLElement
  errorPosition?: "bottom" | "top"
  errorClass?: string
}
type Iconvariants = "fas" | "far" | "fal" | "fad" | "fab"
export type InputFieldProps = Exclude<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "type"
> & {
  type?:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week"
  ref?: MutableRefObject<HTMLInputElement>
  parentClasses?: string
  hasRightIcon?: boolean
  hasLeftIcon?: boolean
  leftIcon?: {
    icon: string | ReactNode
    variant?: Iconvariants
    ref?: MutableRefObject<HTMLInputElement>
    // eslint-disable-next-line
    [key: string]: any
  }
  rightIcon?: {
    icon?: string | ReactNode
    variant?: Iconvariants
    ref?: MutableRefObject<HTMLInputElement>
    // eslint-disable-next-line
    [key: string]: any
  }
  error?:
    | string
    | ReactChild
    | ReactChildren
    | ReactNode
    | ReactElement
    | HTMLElement
  errorPosition?: "bottom" | "top"
  errorClass?: string
}

export default function Input(props: InputFieldProps): ReactElement {
  const {
    hasRightIcon,
    hasLeftIcon,
    leftIcon,
    rightIcon,
    parentClasses,
    width,
    type = "text",
    error = "",
    errorPosition = "top",
    errorClass = "error",
    ...rest
  } = props
  // eslint-disable-next-line
  let LeftIcon: any = leftIcon?.icon
  // eslint-disable-next-line
  let RightIcon: any = rightIcon?.icon
  if (hasLeftIcon && leftIcon?.icon) {
    // eslint-disable-next-line
    const { icon, variant, ...rest } = leftIcon
    if (typeof LeftIcon !== "string") {
      LeftIcon = <LeftIcon {...rest} className="left" />
    } else {
      LeftIcon = <i {...rest} className={`${variant} ${LeftIcon} left`} />
    }
  }
  if (hasRightIcon && rightIcon?.icon) {
    // eslint-disable-next-line
    const { icon, variant, ...rest } = rightIcon
    if (typeof RightIcon !== "string") {
      RightIcon = <RightIcon {...rest} className="right" />
    } else {
      RightIcon = <i {...rest} className={`${variant} ${RightIcon} right`} />
    }
  }
  return (
    <InputContainer
      className={`${hasLeftIcon ? "leftIcon" : ""} ${
        hasRightIcon ? "rightIcon" : ""
      } ${parentClasses}`}
    >
      {error && errorPosition === "top" && (
        <ErrorWrapper className={`error ${errorClass} error-${rest.name}`}>
          {error}
        </ErrorWrapper>
      )}
      <InputWrapper width={width} type={type}>
        {hasLeftIcon ? LeftIcon : null}
        <InputElWrapper>
          <InputEl {...rest} type={type} />
        </InputElWrapper>
        {hasRightIcon ? RightIcon : null}
      </InputWrapper>
      {error && errorPosition === "bottom" && (
        <ErrorWrapper className={`error ${errorClass} error-${rest.name}`}>
          {error}
        </ErrorWrapper>
      )}
    </InputContainer>
  )
}
export const TextArea = function (props: TextareaFieldProps) {
  const {
    error = "",
    errorPosition = "top",
    errorClass = "error",
    ...rest
  } = props
  return (
    <TextAreaWrapper>
      {error && errorPosition === "top" && (
        <ErrorWrapper className={`error ${errorClass} error-${rest.name}`}>
          {error}
        </ErrorWrapper>
      )}
      <textarea {...props} />
      {error && errorPosition === "bottom" && (
        <ErrorWrapper className={`error ${errorClass} error-${rest.name}`}>
          {error}
        </ErrorWrapper>
      )}
    </TextAreaWrapper>
  )
}
TextArea.displayName = "TextArea"
Input.TextArea = TextArea
