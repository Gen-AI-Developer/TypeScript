var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AnyPerson = /** @class */ (function () {
    function AnyPerson(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(AnyPerson.prototype, "fullName", {
        get: function () {
            return this.firstName + ' ' + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    AnyPerson.prototype.walk = function () {
        console.log("Walking");
    };
    AnyPerson.prototype.talk = function () {
        console.log("Talking");
    };
    return AnyPerson;
}());
var AnyStudent = /** @class */ (function (_super) {
    __extends(AnyStudent, _super);
    function AnyStudent(studentID, firstName, lastName) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.studentID = studentID;
        _this.firstName = firstName;
        _this.lastName = lastName;
        return _this;
    }
    AnyStudent.prototype.takeTest = function () {
        console.log("Taking Test");
    };
    return AnyStudent;
}(AnyPerson));
var ss = new AnyStudent(23, "Syed", "Safdar");
console.log(ss.fullName);
console.log(ss.talk());
console.log(ss.takeTest());
