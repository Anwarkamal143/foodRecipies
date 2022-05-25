import styled from "styled-components"

export interface ISwitchboxProps {
  value?: boolean
  onChange?: Function
  name?: string
  status?: boolean
  size?: "medium" | "small" | ""
  className?: string
  responsive?: { small: boolean; medium: boolean } | boolean
  disabled?: boolean
}
function Switchbox({
  value = false,
  onChange,
  name,
  status = true,
  size = "",
  className = "",
  responsive,
  disabled = false,
}: ISwitchboxProps) {
  let responsiveClasses = ""
  if (responsive === true) {
    responsiveClasses = "ts-sm ts-md"
  } else if (responsive && responsive?.small) {
    responsiveClasses = "ts-sm"
  } else if (responsive && responsive?.medium) {
    responsiveClasses = "ts-md"
  }
  // const [enabled, setEnabled] = useState(!!value);

  // useEffect(() => {
  //   setEnabled(!!value);
  // }, [value]);

  const onHandleHandler = (e: any) => {
    // setEnabled(e.target.checked);
    onChange && onChange(e)
  }

  return (
    <label
      className={`toggle-switch ${size} ${className} ${responsiveClasses}`}
    >
      <input
        type="checkbox"
        onChange={onHandleHandler}
        disabled={disabled}
        name={name || "isActive"}
        checked={value}
      />
      <span className="switcher"></span>
      {status && (
        <span className="txt">
          <span className="show">ACTIVE</span>
          <span className="hide">INACTIVE</span>
        </span>
      )}
    </label>
  )
}
export default styled(Switchbox)``
