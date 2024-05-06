class Ride {
    private static _activeRides: number = 0;

    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides
    }
}
let r = new Ride();
r.start();
let r2 = new Ride();
r2.start();
console.log(`Number of Active Rides :`, Ride.activeRides)
r2.stop();
console.log(`Number of Active Rides :`, Ride.activeRides)
