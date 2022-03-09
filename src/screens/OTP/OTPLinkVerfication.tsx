import { Spinner } from "@Icons"
import { useFormik } from "formik"
import { ReactChild, ReactChildren, ReactElement, ReactNode } from "react"
import styled from "styled-components"

type ISignupProps = {
  className?: string
  title?: ReactChild | ReactChildren | ReactNode | ReactElement | HTMLElement
  subTitle?: ReactChild | ReactChildren | ReactNode | ReactElement | HTMLElement
  onSubmit?: (...args: any[]) => void
}
function OTPLinkVerfication(props: ISignupProps) {
  const { className, title, subTitle, onSubmit } = props
  const {
    values,
    handleSubmit,
    isSubmitting,

    setFieldValue,
  } = useFormik({
    initialValues: {
      opts: {},
    },
    onSubmit: values => {
      onSubmit?.(true)
    },
  })
  const handleInputChange = (value: string, index: number) => {
    const { opts } = values
    // console.log({ opts, index })
    const newOpts: Record<number, any> = { ...opts, [index]: value }
    if (!(value || "").trim()) delete newOpts[index]
    setFieldValue("opts", newOpts)
    const isAllSelected = Object.keys(newOpts || {}).length
    if (isAllSelected === 6) {
      handleSubmit()
    }
  }
  // console.log({ values })
  return (
    <div className={className}>
      {title && <span>{title}</span>}
      {subTitle && <span>{subTitle}</span>}
      {[...new Array(6)].fill(0).map((a, i) => {
        return (
          <input
            key={i}
            name={`otp-${i}`}
            onChange={e => handleInputChange(e.target.value, i)}
            placeholder={``}
            value={(values.opts as any)[i]}
            disabled={isSubmitting}
          />
        )
      })}
      {isSubmitting && <span>{<Spinner color="green" />}</span>}
    </div>
  )
}
export const OTPLink = styled(OTPLinkVerfication)`
  input {
    width: 60px;
    height: 60px;
    text-align: center;
  }
  input:nth-child(even) {
    margin: 0 20px;
  }
`
