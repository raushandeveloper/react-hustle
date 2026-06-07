const ErrorMessage = ({items}) => {
  let emptyMessage =
  items.length === 0 ? <h3>I am Still hungry.</h3>:null;
  return (
    <>
     {emptyMessage}
     </>
  );
}

export default ErrorMessage;