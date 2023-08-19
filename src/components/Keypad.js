// Code Keypad Component Here

function Keypad() {
  const inputHandler = () => {
    console.log("Entering password");
  };
  return (
    <div>
      <input type="password" onChange={inputHandler}></input>
    </div>
  );
}

export default Keypad;
