var fs = require('fs'),
    PNG = require('node-png').PNG;

fs.createReadStream('bg.png')
    .pipe(new PNG({
        filterType: 4
    }))
    .on('parsed', function() {

        for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
                var idx = (this.width * y + x) << 2;
				var value = this.data[idx];
				if(value < 45 && value >= 20){
					//green
					this.data[idx] = 0;
					this.data[idx+1] = 150 - (value);
					this.data[idx+2] = 30;
				} 
				else if (this.data[idx] < 20){
					//water
					this.data[idx] = 14;
					this.data[idx+1] = 30;
					this.data[idx+2] = 120;
				} else{
					//mountain
					this.data[idx] = value -180;
					this.data[idx+1] = value -175;
					this.data[idx+2] = value -180;	
				}
        
            }
        }

        this.pack().pipe(fs.createWriteStream('landscape.png'));
    });
