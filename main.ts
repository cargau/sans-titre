input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    led.unplot(balle_X, balle_Y)
    balle_X = balle_X + 1
    balle_Y = 0
    led.plot(balle_X, balle_Y)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
let balle_Y = 0
let balle_X = 0
let joueur_X = 2
let joueur_Y = 2
led.plot(joueur_X, joueur_Y)
balle_X = 2
joueur_Y = 2
led.plot(balle_X, balle_Y)
basic.forever(function () {
	
})
