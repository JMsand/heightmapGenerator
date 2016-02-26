# heightmapGenerator
Configurable image generator using perlin noise. Generates png files with fractallike noise which can be used for terrain maps/textures

<h3>REQUIRES:</h3>
- Node version 5.0.0

<h3>INSTALLATION:</h3>
- 'npm install' in directory.

<h3>USAGE:</h3>
- Edit generate.json to your preferred settings
- 'node generate.js' which will generate a image in the same directory

<h3>CONFIG:</h3> 
<p>generate.json contains these settings</p>

- height: height in pixels output image
- width: width in pixels output image
- levels : iterations of generated noise applied to each other
- levelsize : factor which decreases the level size with each iteration
- startingsize : first level size 
- startingstrength : first level strength
- outputDarkness: increasing this means lowering image data values
- output : name of output file
<p>*Level is also know as octave</p>
<p>*Size in this the config is related to the length of gradients/slopes</p>

<h3>SOURCES:</h3>
- http://www.neilblevins.com/cg_education/fractal_noise/fractal_noise.html
- http://libnoise.sourceforge.net/noisegen/index.html

<h3>EXTRA:</h3>
'node convertToLandscape.js' to create water,plains,mountains terrain. Expects a bg.png to exist in directory

<h3>TODO:</h3>
- More configuration options, use simplex/3D 
- UI
- Default config types (Height map/Lava/Landscape types like craters)

<h3>THANKS:</h3>
Kuba Niegowski and Joseph Gentle for their libs.
