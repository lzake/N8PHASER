var N8 = {};

N8.Boot = function (game) {


};

N8.Boot.prototype = {

    init: function () {

        //  Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
        this.input.maxPointers = 1;

        //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
        this.stage.disableVisibilityChange = false;

        //  This tells the game to resize the renderer to match the game dimensions (i.e. 100% browser width / height)
        this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        // this.scale.pageAlignHorizontally = true;
        // this.scale.pageAlignVertically = true;







        this.input.addPointer();
        this.stage.backgroundColor = "rgba(56, 55, 62, 0.82)";
        this.stage.height = this.height;
        this.stage.width = this.width;



    },

    preload: function () {
        //  Here we load the assets required for our preloader (in this case a background and a loading bar)
        this.load.image('titleimage', 'images/n8black.png');
        this.load.image('preloaderBar', 'images/loader_bar.png');
        this.load.image('arrowDown', 'background/arrowDown.png');
        this.load.image('arrowLeft', 'background/arrowLeft.png');
        this.load.image('arrowRight', 'background/arrowRight.png');
        this.load.image('arrowUp', 'background/arrowUp.png');
        this.load.image('buttonStart', 'background/buttonStart.png')


    },


    create: function () {
        //  By this point the preloader assets have loaded to the cache, we've set the game settings
        //  So now let's start the real preloader going
        this.preloadIt()

    },

    preloadIt: function(game){
        this.state.start('Preloader');
    }

};
