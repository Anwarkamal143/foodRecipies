// import { useFormikContext } from 'formik';
import { debounce, DebouncedFunc } from "lodash"

export const useDebounce = (
  // eslint-disable-next-line
  callback: (...args: any) => void,
  delay?: number
  // eslint-disable-next-line
): DebouncedFunc<(...args: any) => void> => {
  if (!delay) {
    delay = 1000
  }
  return debounce(callback, delay)
}

// export const useDebounceInput = (callback: (args?: any) => void, delay?: number): ((e: any) => void | undefined) => {
//   const { setFieldValue } = useFormikContext();
//   const delayedQuery = React.useRef<NodeJS.Timeout>();
//   const handleChangeEvent = React.useCallback(
//     (...args: any) => {
//       const [e, values] = args;
//       const newValues: Record<string, any> = values || {};
//       if (!callback) {
//         return;
//       }
//       if (e) {
//         e.preventDefault();
//         e.stopPropagation();
//         e.persist();
//         newValues.name = e.target.name;
//         newValues.value = e.target.value;
//         if (e.target.type === 'number') {
//           newValues.value = Number(e.target.value);
//         } else newValues.value = e.target.value;
//       }
//       callback && callback(...args);

//       delayedQuery.current && clearTimeout(delayedQuery.current);
//       delayedQuery.current = setTimeout(() => setFieldValue(newValues.name, newValues.value), delay);
//     },
//     [callback, delay, setFieldValue]
//   );
//   return handleChangeEvent;
// };
