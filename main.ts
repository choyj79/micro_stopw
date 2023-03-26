input.onButtonPressed(Button.A, function () {
    스톱 = 1
})
input.onButtonPressed(Button.B, function () {
    스톱 = 0
})
let 스톱 = 0
let 시간 = 0
스톱 = 0
basic.showLeds(`
    . # # # .
    # . # . #
    # . # # #
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    basic.showString("" + (시간))
})
basic.forever(function () {
    if (스톱 == 1) {
        시간 += 1
        basic.pause(1000)
    }
})
