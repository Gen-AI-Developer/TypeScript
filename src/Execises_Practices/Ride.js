var Ride = /** @class */ (function () {
    function Ride() {
    }
    Ride.prototype.start = function () {
        Ride._activeRides++;
    };
    Ride.prototype.stop = function () {
        Ride._activeRides--;
    };
    Object.defineProperty(Ride, "activeRides", {
        get: function () {
            return Ride._activeRides;
        },
        enumerable: false,
        configurable: true
    });
    Ride._activeRides = 0;
    return Ride;
}());
var r = new Ride();
r.start();
var r2 = new Ride();
r2.start();
console.log("Number of Active Rides :", Ride.activeRides);
r2.stop();
console.log("Number of Active Rides :", Ride.activeRides);
