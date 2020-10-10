var baseObj = {
    randomNum: function(min, max) {
        return paseInt(Math.random() * (max - min + 1) + min);
    }
}