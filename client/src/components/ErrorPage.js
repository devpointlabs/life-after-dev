export default (props) => {
  return (
    <div>
    <h1>Error Occurred</h1>
    {props.err.status == '404' && <div>sad face</div>}
    </div>
  )
}