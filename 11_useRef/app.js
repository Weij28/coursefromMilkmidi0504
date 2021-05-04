function UseRefExample(){
  const [count, setCount] = React.useState(0);
  const [show, setShow] = React.useState(false);




  /* // TODO
  const refInput = React.useRef();

  const atShowClick = () => {
    setShow(!show);
    // console.log(refInput.current); // undefined
  }

  React.useEffect(() => {
    console.log('count', count);
  }, [count]);

  React.useEffect(() => {
    if (show) {
      console.log(refInput.current); // correct
      refInput.current.focus();
    }
  }, [show]);

  React.useEffect這個方法會生出新的物件來
  
  
  return (
    <div className="ref-example-component">
      <section>
        <button onClick={atShowClick}>show input</button>

        <button onClick={()=> setCount(count+1)}>+1</button>
        {
          show && <input ref={refInput} /> useEffect都使用在動元素上面
        }
      </section>
    </div>
  );
  // */
}

ReactDOM.render(
  <UseRefExample />,
  document.getElementById('app')
);
