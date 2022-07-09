var App = /** @class */ (function () {
    function App(name) {
        this.name = name;
    }
    App.prototype.getName = function () {
        console.warn(this.name);
        return this.name;
    };
    return App;
}());
var a1 = new App("ALL MATTERS");
a1.getName();
