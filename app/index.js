/**
 * index.js
 * This is the main class that is used to start your app
 * The class name can be anything you wish, in the example it is App
 */
import { Component } from '/system/magnium';

// Our simple App defined as a class
class App extends Component {


  // This is a simple sample using markup to define the UI
  generateView() {

    _MAGUI(
      <Window backgroundColor="#999999">
        <View backgroundColor="#E6E6E6" top="50" left="10" right="10" height="200">
          <Button id="buttonOne" backgroundColor="blue" title="BUTTON ONE" height="40" width="100" />
        </View>
        <View backgroundColor="pink" top="250" left="10" right="10" height="200">
          <Button id="buttonTwo" backgroundColor="yellow" title="BUTTON TWO" height="40" width="100" />
        </View>
      </Window>     
    )

  }

  // test adding event listener to buttons
  afterView() {

    this.buttonOne.addEventListener('click',  () => {
      alert('Button One Clicked');
    });

    this.buttonTwo.addEventListener('click',  () => {
      alert('Button Two Clicked');
    });
  }


}



export default App;
