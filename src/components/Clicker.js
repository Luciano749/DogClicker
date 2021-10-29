import clickAudioFile from "../clickSound.mp3";

const Clicker = () => {
  const clickAudio = new Audio(clickAudioFile);

  const start = () => {
    clickAudio.play();
  };

  return (
    <div className="clickerContainer">
      <button className="clickButton" onClick={start}></button>
      <h1>Click to play the sound!</h1>
    </div>
  );
};

export default Clicker;
