# MAGUI Demo

I have started looking at using some form of Markup (XML/JSX type code) to generate the UI for my Magnium framework rather than using the Ti.UI.createXXX option.

Although very early stage this is a demo project of the sort of thing I am aiming at and is designed to work with the current **msx"" branch of the Magnium framework.

example below:

```
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
```
