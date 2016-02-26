# heightmapGenerator
Configurable image generator using perlin noise. Generates png files with fractallike noise which can be used for terrain maps/textures

<h2>REQUIRES</h2>
Node version 5.0.0

INSTALLATION:
- 'npm install' in directory.

USAGE:
- Edit generate.json to your preferred settings
- 'node generate.js' which will generate a image in the same directory

CONFIG: 
generate.json contains these settings

height: height in pixels output image
width: width in pixels output image
levels : iterations of generated noise applied to each other
levelsize : factor which decreases the level size with each iteration
startingsize : first level size 
startingstrength : first level strength
outputDarkness: increasing this means lowering image data values
output : name of output file

-A level is also know as octave
-Size in this the config is related to the length of gradients/slopes

SOURCES:
-http://www.neilblevins.com/cg_education/fractal_noise/fractal_noise.html
-http://libnoise.sourceforge.net/noisegen/index.html

EXTRA:
'node convertToLandscape.js' to create water,plains,mountains terrain. Expects a bg.png to exist in directory

TODO:
-More configuration options, use simplex/3D 
-UI
-Default config types (Height map/Lava/Landscape types like craters)

THANKS:
Kuba Niegowski and Joseph Gentle for their libs.
