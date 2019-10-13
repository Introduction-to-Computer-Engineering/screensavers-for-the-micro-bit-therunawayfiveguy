let isAwake = false
let randomNum = false
let RandomNumB = 0
let count = 0
let RandomNumA = 0
input.onGesture(Gesture.TiltLeft, function () {
    if (isAwake == false) {
        led.stopAnimation()
        count = 0
        while (count < 18) {
            RandomNumA = Math.randomRange(0, 1)
            RandomNumB = Math.randomRange(0, 1)
            if (RandomNumA == 0 && RandomNumB == 0) {
                for (let indexx9 = 0; indexx9 <= 4; indexx9++) {
                    led.plot(indexx9, RandomNumB)
                    basic.pause(25)
                    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
                        indexx9 = -1
                        count = 18
                        basic.clearScreen()
                        break;
                    }
                    if (input.isGesture(Gesture.Shake) || input.isGesture(Gesture.FreeFall) || input.isGesture(Gesture.TiltRight)) {
                        indexx9 = -1
                        count = 18
                        basic.clearScreen()
                        break;
                    }
                    if (indexx9 == 4 && RandomNumB <= 4) {
                        RandomNumB += 1
                        indexx9 = -1
                    }
                }
                for (let indexx10 = 4; indexx10 >= 0; indexx10--) {
                    led.unplot(indexx10, RandomNumB)
                    basic.pause(25)
                    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
                        indexx10 = -1;
                        count = 18;
                        basic.clearScreen()
                        break;
                    }
                    if (input.isGesture(Gesture.Shake) || input.isGesture(Gesture.FreeFall) || input.isGesture(Gesture.TiltRight)) {
                        indexx10 = -1;
                        count = 18;
                        basic.clearScreen()
                        break;
                    }
                    if (indexx10 == 0 && RandomNumB >= 0) {
                        RandomNumB--
                        indexx10 = 5;
                    }

                }
            } else if (RandomNumA == 0 && RandomNumB == 1) {
                RandomNumB = 4
                for (let indexx11 = 0; indexx11 <= 4; indexx11++) {
                    led.plot(indexx11, RandomNumB)
                    basic.pause(25)
                    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
                        indexx11 = -1
                        count = 18
                        basic.clearScreen()
                        break;
                    }
                    if (input.isGesture(Gesture.Shake) || input.isGesture(Gesture.FreeFall) || input.isGesture(Gesture.TiltRight)) {
                        indexx11 = -1
                        count = 18
                        basic.clearScreen()
                        break;
                    }
                    if (indexx11 == 4 && RandomNumB >= 0) {
                        RandomNumB += -1
                        indexx11 = -1
                    }
                }
                for (let indexx12 = 4; indexx12 >= 0; indexx12--) {
                    led.unplot(indexx12, RandomNumB)
                    basic.pause(25)
                    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
                        indexx12 = -1;
                        count = 18;
                        basic.clearScreen()
                        break;
                    }
                    if (input.isGesture(Gesture.Shake) || input.isGesture(Gesture.FreeFall) || input.isGesture(Gesture.TiltRight)) {
                        indexx12 = -1;
                        count = 18;
                        basic.clearScreen()
                        break;
                    }
                    if (indexx12 == 0 && RandomNumB <= 4) {
                        RandomNumB++
                        indexx12 = 5;
                    }

                }
            } else if (RandomNumA == 1 && RandomNumB == 0) {
                for (let indexx13 = 4; indexx13 >= 0; indexx13--) {
                    led.plot(indexx13, RandomNumB)
                    basic.pause(25)
                    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
                        indexx13 = -1;
                        count = 18;
                        basic.clearScreen()
                        break;
                    }
                    if (input.isGesture(Gesture.Shake) || input.isGesture(Gesture.FreeFall) || input.isGesture(Gesture.TiltRight)) {
                        indexx13 = -1;
                        count = 18;
                        basic.clearScreen()
                        break;
                    }

                    if (indexx13 == 0 && RandomNumB <= 4) {
                        RandomNumB++
                        indexx13 = 5
                    }
                }
                for (let indexx14 = 0; indexx14 <= 4; indexx14++) {
                    led.unplot(indexx14, RandomNumB)
                    basic.pause(25)
                    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
                        indexx14 = -1
                        count = 18
                        basic.clearScreen()
                        break;
                    }
                    if (input.isGesture(Gesture.Shake) || input.isGesture(Gesture.FreeFall) || input.isGesture(Gesture.TiltRight)) {
                        indexx14 = -1
                        count = 18
                        basic.clearScreen()
                        break;
                    }
                    if (indexx14 == 4 && RandomNumB >= 0) {
                        RandomNumB += -1
                        indexx14 = -1
                    }
                }
            } else if (RandomNumA == 1 && RandomNumB == 1) {
                RandomNumB = 4
                for (let indexx15 = 4; indexx15 >= 0; indexx15--) {
                    led.plot(indexx15, RandomNumB)
                    basic.pause(25)
                    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
                        indexx15 = -1;
                        count = 18;
                        basic.clearScreen()
                        break;
                    }
                    if (input.isGesture(Gesture.Shake) || input.isGesture(Gesture.FreeFall) || input.isGesture(Gesture.TiltRight)) {
                        indexx15 = -1;
                        count = 18;
                        basic.clearScreen()
                        break;
                    }
                    if (indexx15 == 0 && RandomNumB >= 0) {
                        RandomNumB--
                        indexx15 = 5;
                    }



                }
                for (let indexx16 = 0; indexx16 <= 4; indexx16++) {
                    led.unplot(indexx16, RandomNumB)
                    basic.pause(25)
                    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
                        indexx16 = -1
                        count = 18
                        basic.clearScreen()
                        break;
                    }
                    if (input.isGesture(Gesture.Shake) || input.isGesture(Gesture.FreeFall) || input.isGesture(Gesture.TiltRight)) {
                        indexx16 = -1
                        count = 18
                        basic.clearScreen()
                        break;
                    }
                    if (indexx16 == 4 && RandomNumB <= 4) {
                        RandomNumB += 1
                        indexx16 = -1
                    }
                }
            }
            count += 1
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    if (isAwake == false) {
        led.stopAnimation()
        randomNum = true
        while (randomNum) {
            RandomNumA = Math.randomRange(0, 1)
            RandomNumB = Math.randomRange(0, 1)
            if (RandomNumA == 0) {
                if (RandomNumB == 0) {
                    for (let indexx = -1; indexx <= 4; indexx++) {
                        for (let indexy = -1; indexy <= 4; indexy++) {
                            if (input.buttonIsPressed(Button.B)) {
                                indexx = 99
                                randomNum = false
                                break;
                            }
                            else if (input.buttonIsPressed(Button.A)) {
                                indexx = 99
                                randomNum = false
                                break;
                            }
                            else if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.FreeFall) || input.isGesture(Gesture.TiltRight)) {
                                indexx = 99
                                randomNum = false
                                break;
                            }
                            led.plot(indexx, indexy)
                            basic.pause(100)
                        }
                    }
                    for (let indexx2 = 5; indexx2 >= 0; indexx2--) {
                        for (let indexy2 = 5; indexy2 >= 0; indexy2--) {
                            if (input.buttonIsPressed(Button.B)) {
                                indexx2 = -1;
                                randomNum = false
                                break;
                            }
                            else if (input.buttonIsPressed(Button.A)) {
                                indexx2 = 99
                                randomNum = false
                                break;
                            }
                            else if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.FreeFall) || input.isGesture(Gesture.TiltRight)) {
                                indexx2 = -1;
                                randomNum = false
                                break;

                            }
                            led.unplot(indexx2, indexy2)
                            basic.pause(100)
                        }
                    }
                } else if (RandomNumB == 1) {
                    for (let indexx3 = -1; indexx3 <= 4; indexx3++) {
                        for (let indexy3 = 5; indexy3 >= 0; indexy3--) {
                            if (input.buttonIsPressed(Button.B)) {
                                indexx3 = 99;
                                randomNum = false
                                break;
                            }
                            else if (input.buttonIsPressed(Button.A)) {
                                indexx3 = 99
                                randomNum = false
                                break;
                            }
                            else if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.FreeFall) || input.isGesture(Gesture.TiltRight)) {
                                indexx3 = 99
                                randomNum = false
                                break;
                            }
                            led.plot(indexx3, indexy3);
                            basic.pause(100);
                        }
                    }
                    for (let indexx4 = 4; indexx4 >= 0; indexx4--) {
                        for (let indexy4 = 0; indexy4 <= 4; indexy4++) {
                            if (input.buttonIsPressed(Button.B)) {
                                indexx4 = -1;
                                randomNum = false
                                break;
                            }
                            else if (input.buttonIsPressed(Button.A)) {
                                indexx4 = 99
                                randomNum = false
                                break;
                            }
                            else if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.FreeFall) || input.isGesture(Gesture.TiltRight)) {
                                indexx4 = 99
                                randomNum = false
                                break;
                            }
                            led.unplot(indexx4, indexy4);
                            basic.pause(100);
                        }
                    }
                }
            } else if (RandomNumA == 1) {
                if (RandomNumB == 0) {
                    for (let indexx5 = 4; indexx5 >= 0; indexx5--) {
                        for (let indexy5 = 0; indexy5 <= 4; indexy5++) {
                            if (input.buttonIsPressed(Button.B)) {
                                indexx5 = -1;
                                randomNum = false
                                break;
                            }
                            else if (input.buttonIsPressed(Button.A)) {
                                indexx5 = 99
                                randomNum = false
                                break;
                            }
                            else if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.FreeFall) || input.isGesture(Gesture.TiltRight)) {
                                indexx5 = 99
                                randomNum = false
                                break;
                            }
                            led.plot(indexx5, indexy5)
                            basic.pause(100)
                        }
                    }
                    for (let indexx6 = 0; indexx6 <= 4; indexx6++) {
                        for (let indexy6 = 4; indexy6 >= 0; indexy6--) {
                            if (input.buttonIsPressed(Button.B)) {
                                indexx6 = 99;
                                randomNum = false
                                break;
                            }
                            else if (input.buttonIsPressed(Button.A)) {
                                indexx6 = 99
                                randomNum = false
                                break;
                            }
                            else if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.FreeFall) || input.isGesture(Gesture.TiltRight)) {
                                indexx6 = 99
                                randomNum = false
                                break;
                            }
                            led.unplot(indexx6, indexy6)
                            basic.pause(100)
                        }
                    }
                } else if (RandomNumB == 1) {
                    for (let indexx7 = 4; indexx7 >= 0; indexx7--) {
                        for (let indexy7 = 4; indexy7 >= 0; indexy7--) {
                            if (input.buttonIsPressed(Button.B)) {
                                indexx7 = -1;
                                randomNum = false
                                break;
                            }
                            else if (input.buttonIsPressed(Button.A)) {
                                indexx7 = 99
                                randomNum = false
                                break;
                            }
                            else if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.FreeFall) || input.isGesture(Gesture.TiltRight)) {
                                indexx7 = 99
                                randomNum = false
                                break;
                            }
                            led.plot(indexx7, indexy7)
                            basic.pause(100)
                        }
                    }
                    for (let indexx8 = 0; indexx8 <= 4; indexx8++) {
                        for (let indexy8 = 0; indexy8 <= 4; indexy8++) {
                            if (input.buttonIsPressed(Button.B)) {
                                indexx8 = 99
                                randomNum = false
                                break;
                            } else if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.FreeFall) || input.isGesture(Gesture.TiltRight)) {
                                indexx8 = 99
                                randomNum = false
                                break;
                            } else if (input.buttonIsPressed(Button.A)) {
                                indexx8 = 99
                                randomNum = false
                                break;
                            }
                            led.unplot(indexx8, indexy8)
                            basic.pause(100)
                        }
                    }
                }
            }
            if (input.buttonIsPressed(Button.B)) {
                randomNum = false
                break;
            }
            randomNum = true
        }
    }
})
input.onButtonPressed(Button.A, function () {
    led.stopAnimation()
    isAwake = false
    if (isAwake == false) {
        for (let index = 0; index <= 8; index++) {
            count = 0
            while (count <= 200) {
                if (input.buttonIsPressed(Button.B)) {
                    count = -1
                    index = 9
                    break;
                }
                if (input.isGesture(Gesture.TiltLeft)) {
                    count = -1
                    index = 9
                    break;
                }
                if (input.isGesture(Gesture.Shake) || input.isGesture(Gesture.FreeFall) || input.isGesture(Gesture.TiltRight)) {
                    count = -1
                    index = 9
                    break;
                }
                RandomNumA = Math.randomRange(0, 4)
                RandomNumB = Math.randomRange(0, 4)
                led.plot(RandomNumA, RandomNumB)
                basic.pause(50)
                count += 1
            }
            while (count >= 0) {
                if (input.buttonIsPressed(Button.B)) {
                    count = 201
                    index = 9
                    break;
                }
                if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.FreeFall) || input.isGesture(Gesture.TiltRight)) {
                    count = 201
                    index = 9
                    break;
                }
                RandomNumA = Math.randomRange(0, 4)
                RandomNumB = Math.randomRange(0, 4)
                led.unplot(RandomNumA, RandomNumB)
                basic.pause(50)
                count += -1
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    led.stopAnimation()
    isAwake = true
    while (isAwake) {
        basic.showString("I'm awake")
        if (input.buttonIsPressed(Button.A)) {
            led.stopAnimation()
            basic.clearScreen()
            isAwake = false
            break;
        }
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (isAwake == false) {
        count = 0
        while (count <= 120) {
            RandomNumA = Math.randomRange(0, 4)
            RandomNumB = Math.randomRange(0, 4)
            led.plot(RandomNumA, RandomNumB)
            if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.FreeFall) || input.isGesture(Gesture.Shake) || input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A)) {
                count = 121
                break;
            }
            basic.pause(100)
            led.unplot(RandomNumA, RandomNumB)
            if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.FreeFall) || input.isGesture(Gesture.Shake) || input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A)) {
                count = 121
                break;
            }
            basic.pause(100)
            led.plot(RandomNumA + 1, RandomNumB + 1)
            led.plot(RandomNumA + 1, RandomNumB)
            led.plot(RandomNumA, RandomNumB + 1)
            led.plot(RandomNumA - 1, RandomNumB - 1)
            led.plot(RandomNumA - 1, RandomNumB)
            led.plot(RandomNumA, RandomNumB - 1)
            led.plot(RandomNumA - 1, RandomNumB + 1)
            led.plot(RandomNumA + 1, RandomNumB - 1)
            if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.FreeFall) || input.isGesture(Gesture.Shake) || input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A)) {
                count = 121
                break;
            }
            basic.pause(100)
            led.unplot(RandomNumA + 1, RandomNumB + 1)
            led.unplot(RandomNumA + 1, RandomNumB)
            led.unplot(RandomNumA, RandomNumB + 1)
            led.unplot(RandomNumA - 1, RandomNumB - 1)
            led.unplot(RandomNumA - 1, RandomNumB)
            led.unplot(RandomNumA, RandomNumB - 1)
            led.unplot(RandomNumA - 1, RandomNumB + 1)
            led.unplot(RandomNumA + 1, RandomNumB - 1)
            if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.FreeFall) || input.isGesture(Gesture.Shake) || input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A)) {
                count = 121
                break;
            }
            count += 1
        }
    }
})
input.onGesture(Gesture.FreeFall, function () {
    while (count <= 60) {
        RandomNumA = Math.randomRange(0, 7)
        if (RandomNumA == 0) {
            for (let indexy9 = 0; indexy9 <= 4; indexy9++) {
                led.plot(2, indexy9)
                if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.TiltRight) || input.isGesture(Gesture.Shake) || input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A)) {
                    count = 121
                    break;
                }
                basic.pause(200)
            }
            for (let indexy10 = 0; indexy10 <= 4; indexy10++) {
                led.unplot(2, indexy10)
                if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.TiltRight) || input.isGesture(Gesture.Shake) || input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A)) {
                    count = 121
                    break;
                }
                basic.pause(200)
            }
        } else if (RandomNumA == 1) {
            RandomNumB = 0
            for (let indexx17 = 4; indexx17 >= 0; indexx17--) {
                led.plot(indexx17, RandomNumB)
                RandomNumB++
                if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.TiltRight) || input.isGesture(Gesture.Shake) || input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A)) {
                    count = 121;
                    break;

                }
                basic.pause(200)
            }
            RandomNumB = 0
            for (let indexx18 = 4; indexx18 >= 0; indexx18--) {
                led.unplot(indexx18, RandomNumB)
                RandomNumB++
                if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.TiltRight) || input.isGesture(Gesture.Shake) || input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A)) {
                    count = 121;
                    break;

                }
                basic.pause(200)
            }
        } else if (RandomNumA == 2) {
            for (let indexx19 = 4; indexx19 >= 0; indexx19--) {
                led.plot(indexx19, 2)
                if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.TiltRight) || input.isGesture(Gesture.Shake) || input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A)) {
                    count = 121;
                    break;

                }
                basic.pause(200)

            }
            for (let indexx20 = 4; indexx20 <= 0; indexx20--) {
                led.unplot(indexx20, 2)
                if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.TiltRight) || input.isGesture(Gesture.Shake) || input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A)) {
                    count = 121;
                    break;

                }
                basic.pause(200)

            }
        } else if (RandomNumA == 3) {
            RandomNumB = 4
            for (let indexx21 = 4; indexx21 <= 0; indexx21--) {
                led.plot(indexx21, RandomNumB)
                if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.TiltRight) || input.isGesture(Gesture.Shake) || input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A)) {
                    count = 121;
                    break;

                }
                basic.pause(200)
                RandomNumB--

            }
            RandomNumB = 4
            for (let indexx22 = 4; indexx22 <= 0; indexx22--) {
                led.unplot(indexx22, RandomNumB)
                if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.TiltRight) || input.isGesture(Gesture.Shake) || input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A)) {
                    count = 121;
                    break;

                }
                basic.pause(200)
                RandomNumB--

            }
        } else if (RandomNumA == 4) {
            for (let indexy11 = 4; indexy11 <= 0; indexy11--) {
                led.plot(2, indexy11);
                if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.TiltRight) || input.isGesture(Gesture.Shake) || input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A)) {
                    count = 121;
                    break;

                }
                basic.pause(200)

            }
            for (let indexy12 = 4; indexy12 <= 0; indexy12--) {
                led.unplot(2, indexy12);
                if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.TiltRight) || input.isGesture(Gesture.Shake) || input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A)) {
                    count = 121;
                    break;

                }
                basic.pause(200)

            }
        } else if (RandomNumA == 5) {
            RandomNumB = 4
            for (let indexx23 = 0; indexx23 <= 4; indexx23++) {
                led.plot(indexx23, RandomNumB)
                if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.TiltRight) || input.isGesture(Gesture.Shake) || input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A)) {
                    count = 121
                    break;
                }
                RandomNumB += -1
                basic.pause(200)
            }
            RandomNumB = 4
            for (let indexx24 = 0; indexx24 <= 4; indexx24++) {
                led.unplot(indexx24, RandomNumB)
                if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.TiltRight) || input.isGesture(Gesture.Shake) || input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A)) {
                    count = 121
                    break;
                }
                RandomNumB += -1
                basic.pause(200)
            }
        } else if (RandomNumA == 6) {
            for (let indexx25 = 0; indexx25 <= 4; indexx25++) {
                led.plot(indexx25, 2)
                if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.TiltRight) || input.isGesture(Gesture.Shake) || input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A)) {
                    count = 121
                    break;
                }
                basic.pause(200)
            }
            for (let indexx26 = 0; indexx26 <= 4; indexx26++) {
                led.unplot(indexx26, 2)
                if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.TiltRight) || input.isGesture(Gesture.Shake) || input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A)) {
                    count = 121
                    break;
                }
                basic.pause(200)
            }
        } else if (RandomNumB == 7) {
            RandomNumB = 0
            for (let indexx27 = 0; indexx27 <= 4; indexx27++) {
                led.plot(indexx27, RandomNumB)
                if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.TiltRight) || input.isGesture(Gesture.Shake) || input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A)) {
                    count = 121
                    break;
                }
                basic.pause(200)
                RandomNumB += 1
            }
            RandomNumB = 0
            for (let indexx28 = 0; indexx28 <= 4; indexx28++) {
                led.plot(indexx28, RandomNumB)
                if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.TiltRight) || input.isGesture(Gesture.Shake) || input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A)) {
                    count = 121
                    break;
                }
                basic.pause(200)
                RandomNumB += 1
            }
        }
        count += 1
    }
})

