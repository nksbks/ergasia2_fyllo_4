let Χ = 0
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    led.setBrightness(255)
    Χ = input.temperature()
    basic.showNumber(Χ)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    Χ = input.temperature()
    basic.clearScreen()
    led.setBrightness(Χ)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    music.setVolume(Χ)
    music.playMelody("C5 B A G F E D C ", Χ)
    music.playMelody("C D E F G A B C5 ", Χ)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Χ = input.temperature()
    basic.clearScreen()
    led.setBrightness(5 * Χ)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    music.setVolume(Χ)
    music.playMelody("C5 B A G F E D C ", 10 * Χ)
    music.playMelody("C D E F G A B C5 ", 10 * Χ)
    basic.clearScreen()
})
