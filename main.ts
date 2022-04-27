input.onButtonPressed(Button.A, function () {
    Number_1 += 1
    basic.showNumber(Number_1)
})
function DoesAThing (num: number, num2: number) {
    return num + num2
}
input.onButtonPressed(Button.AB, function () {
    Number_2 = Number_1
    Number_1 = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Number_1 += -1
    basic.showNumber(Number_1)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(DoesAThing(Number_1, Number_2))
})
let Number_2 = 0
let Number_1 = 0
Number_1 = 0
basic.forever(function () {
	
})
