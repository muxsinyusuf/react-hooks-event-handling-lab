function EyesonMe() {
  const onFocus = () => {
    console.log("good");
  };
  const onBlur = () => {
    console.log("Hey Eyes on me");
  };
  return (
    <div>
      <button onFocus={onFocus} onBlur={onBlur}>
        EyesOnMe
      </button>
    </div>
  );
}
