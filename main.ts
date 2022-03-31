input.onButtonPressed(Button.A, function () {
    if (var1 == -1 && var2 == 4) {
        basic.showIcon(IconNames.Heart)
    } else if (var1 == -1 || var2 == 4) {
        basic.showIcon(IconNames.Skull)
    } else if (!(var1 == -1 || var2 == 4)) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
let var2 = 0
let var1 = 0
var1 = 0
var2 = 9
basic.forever(function () {
	
})
