enum RadioMessage {
    message1 = 49434,
    Storm = 46061
}
music.onEvent(MusicEvent.MelodyEnded, function () {
    bitbot.bbEnableBluetooth(BBBluetooth.btEnable)
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 100; index++) {
        bitbot.move(BBMotor.Both, BBDirection.Forward, 100)
        bitbot.move(BBMotor.Right, BBDirection.Reverse, 100)
        bitbot.BBBias(BBRobotDirection.Left, 80)
        bitbot.goms(BBDirection.Forward, 100, 3000)
        bitbot.bbSetServo(BBServos.P1, 90)
        bitbot.bbSetServo(BBServos.P2, 70)
        bitbot.goms(BBDirection.Forward, 100, 1500)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.setBuiltInSpeakerEnabled(true)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.InBackground)
    music.play(music.createSoundExpression(WaveShape.Square, 100, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.setVolume(255)
    music.play(music.createSoundExpression(WaveShape.Square, 152, 1, 255, 0, 76, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    music.setVolume(music.beat(BeatFraction.Sixteenth))
    music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    music.setVolume(255)
})
radio.onReceivedMessage(RadioMessage.Storm, function () {
    radio.sendMessage(RadioMessage.Storm)
})
input.onButtonPressed(Button.AB, function () {
    bitbot.ledRainbow()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 1000; index++) {
        bitbot.setPixelColor(0, 0x80FF80)
        bitbot.setPixelColor(1, 0xFF0080)
        bitbot.setPixelColor(2, 0x80FF00)
        bitbot.setPixelColor(3, 0xFF8000)
        bitbot.setPixelColor(4, 0x0000FF)
        bitbot.setPixelColor(5, 0xFFFF00)
        bitbot.setPixelColor(6, 0x659900)
        bitbot.setPixelColor(7, 0x00FFC0)
        bitbot.setPixelColor(8, 0x8000FF)
        bitbot.setPixelColor(9, 0xB24C00)
        bitbot.setPixelColor(10, 0x0080FF)
        bitbot.setPixelColor(11, 0xFF8080)
        led.setBrightness(255)
        bitbot.ledBrightness(255)
    }
})
bitbot.select_model(BBModel.XL)
basic.showString("LET'S GO")
basic.showString("GAMBLING")
basic.showString("" + (images.createBigImage(`
    # . # # # . . . . .
    # . # . . . . . . .
    # # # # # . . . . .
    . . # . # . . . . .
    # # # . # . . . . .
    `)))
basic.showLeds(`
    # . . . #
    # # . # #
    . . . . .
    # # # # #
    . # # # .
    `)
for (let index = 0; index < 100; index++) {
    bitbot.setBitEye(bfEyes.Both, 0xFF0000)
    bitbot.setBitMouth(bfMouth.Grin, 0xFF0000)
}
