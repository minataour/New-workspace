import { useSelector } from "react-redux"

const DisplayCounter = () => {
  const {counterVal} = useSelector(store => store.counter)
  const toggle = useSelector(store => store.toggle)

  return (
    <p className="lead mb-4">
      Counter current value: {!toggle && counterVal}
    </p>
  )
}

export default DisplayCounter