## **Beebop super simple slider**

As the name states it, very simple, no dependencies, pure javascript

### **How to use**

Install it with npm
```cmd
npm install beebopsss
```

Or copy it from this github repository
```cmd
git clone https://github.com/Sloth-Wizard/beebopSSS.git
```

Initialize the slider
```js
import { Beebop } from "beebopssLocation/main.js";

new Beebop('yourWrapperID', {
    options: value,
});
```
### **Available options**
**animations**  
false is the default value, set to true to animate the slider  

**animationSpeed**  
default value is 150 (the number represents milliseconds)  

**animationStyle**  
Pass a string parameter for the animation style.  
Example: 'ease-in' or 'ease-out'  

**controls**  
true is the default value, set to false to hide controls  

**controlsColor**  
Color for the controls arrows  

**type**  
'img' is the default string parameter, you can tell the slider to use any html tag from a list  
Example: 'div' or 'span'

### **Additionnal information**
You'll need to use "@babel/preset-env" and "@babel/plugin-proposal-class-properties" to compile the module.
