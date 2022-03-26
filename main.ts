/**
 * Zählweise der LEDs: 0 bis 19
 */
let LEDStreifen1 = neopixel.create(DigitalPin.P0, 20, NeoPixelMode.RGB)
/**
 * Eine Schleife, jedem bei Durchgang erhöht sich die Variable index um 1:  0, 1, 2, 3, 4, 5, 6
 */
/**
 * Die LEDs 0 bis 6 werden hintereinander auf Grün geschaltet
 */
/**
 * Die Zeitverzögerung ändert sich in jedem Durchlauf: Zuerst  0msec, dann 50msec, dann 100msec, dann 150msec usw. bis 6x50= 300msec
 */
/**
 * Bei 20 LEDs auf dem Streifen sind 2x 7 schon für grün und gelb vergeben, übrig bleiben 6 LEDs für rot, deshalb die Schleife 0 bis 5
 */
/**
 * die 6 rot-LEDs schalten sich zwar auch hintereinander ein, aber so schnell, dass man das nicht sieht
 */
/**
 * Alles ausschalten und wieder von vorne -> Endlosschleife
 */
basic.forever(function () {
    for (let Index = 0; Index <= 6; Index++) {
        LEDStreifen1.setPixelColor(Index, neopixel.colors(NeoPixelColors.Green))
        basic.pause(100)
        LEDStreifen1.show()
    }
    basic.pause(1000)
    for (let Index = 0; Index <= 6; Index++) {
        LEDStreifen1.setPixelColor(Index + 7, neopixel.colors(NeoPixelColors.Yellow))
        basic.pause(Index * 50)
        LEDStreifen1.show()
    }
    basic.pause(1000)
    for (let Index = 0; Index <= 5; Index++) {
        LEDStreifen1.setPixelColor(Index + 14, neopixel.colors(NeoPixelColors.Red))
        LEDStreifen1.show()
    }
    basic.pause(1000)
    LEDStreifen1.clear()
    LEDStreifen1.show()
    basic.pause(1000)
})
