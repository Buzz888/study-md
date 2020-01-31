var Direction;
(function (Direction) {
    Direction[Direction["success"] = 200] = "success";
    Direction[Direction["err"] = 500] = "err";
    Direction[Direction["warn"] = 404] = "warn";
    Direction[Direction["dir"] = 401] = "dir";
})(Direction || (Direction = {}));
console.log(Direction.success);
