# interactiveguestbook
Audiovisual work (in progress) where piece is created based on the RGB values when clicking different positions of uploaded image.
Created in p5js (basically processing but harder for me to get used to) and self-taught html.
interactiveguestbook.html is the page where the interactiveguestbook.js sketch is shown, the upload function is located and where all of the layout comes into play.

Current version up and running on http://theodorkentros.com/interactiveguestbook.html

___To-Do___
Include a way for reversed sounds to not interrupt forward sounds
  some kind of callback / "isPlaying" method for only allowing a new reverse
  (or forward in the opposite manner) sound to start if there is nothing
  currently playing.

Callback so that mousePressed only works on image. (easy fix)

More interactive
  different sounds playing
  more values deciding more things
  longer samples (There is a problem with this since it easily becomes a harsh noise piece if clicked several times. However that might not be a bad thing?)

Center image different on phone and on computer. 

Add name to form and display name below sketch.

Possible .loop on all sounds? (Possible but might need to implement some kind of max-sounds playing. if then else etc...)
