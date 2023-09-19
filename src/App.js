import './App.css';

function App() {
  return (
    <><div class="buttons">
      <button class="duplicate">Duplicate</button>
    
      <button class="changeHeading">Change Heading</button>
    
      <button id="deleteInstance">Delete Last Instance</button>
    
      <button data-toggle-btn>Toggle Details</button>
    
    </div>
    <div class="wrapper">
        <div class="container">
          <img class="image" src="https://mcdn.wallpapersafari.com/medium/71/81/0VgmpU.jpg" />
          <div class="header">
            <h1>My Card: Mario</h1>
          </div>
    
          <details class="details">
            <summary>Details</summary>
            <div class="desc-txt">
              <p>My card is displaying one of my favorite video game characters ever, Mario. I chose this character because it is a character that means a lot to me through my life. This card design has the title at the top, displayed in the top-center of the card, with a photo beneath it. The photo itself displays mario jumping upwards, with a light blue background that contrasts well with the rest of the card.</p>
            </div>
          </details>
        </div>
      </div>
      </>
  );
}

export default App;
