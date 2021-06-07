// Ban co
var banco = [['wr', 'wn', 'wb', 'wq', 'wk', 'wb', 'wn', 'wr'],
             ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
             [ 0  ,  0  ,  0  ,  0  ,  0  ,  0  ,  0  ,  0  ],
             [ 0  ,  0  ,  0  ,  0  ,  0  ,  0  ,  0  ,  0  ],
             [ 0  ,  0  ,  0  ,  0  ,  0  ,  0  ,  0  ,  0  ],
             [ 0  ,  0  ,  0  ,  0  ,  0  ,  0  ,  0  ,  0  ],
             ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
             ['br', 'bn', 'bb', 'bq', 'bk', 'bb', 'bn', 'br']]
//Toa do chuot
var wp1 = document.querySelector('.square-12');
var wp2 = document.querySelector('.square-22');
var wp3 = document.querySelector('.square-32');
var wp4 = document.querySelector('.square-42');
var wp5 = document.querySelector('.square-52');
var wp6 = document.querySelector('.square-62');
var wp7 = document.querySelector('.square-72');
var wp8 = document.querySelector('.square-82');

//Toa do xe
var wr1 = document.querySelector('.square-11');
var wr2 = document.querySelector('.square-81');

//Toa do ma
var wn1 = document.querySelector('.square-21');
var wn2 = document.querySelector('.square-71');

//Toa do tuong
var wb1 = document.querySelector('.square-31');
var wb2 = document.querySelector('.square-61');

//Toa do queen
var wq1 = document.querySelector('.square-41');
//Toa do king
var wk1 = document.querySelector('.square-51');

var div = document.querySelector(".banCo")
var temp = true
//Di chuyen chuot
var wwp1 = 3
wp1.onclick = function () {
    if (temp == true) {
        wp1.style.backgroundColor = "#957373ad";
        let nameClass = wp1.className.toString()
        for (let i = 1; i < wwp1; i++) {
            if (kt(diachi(nameClass) + i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) + i}`) == null) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wp1.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        for (let i = 1; i < wwp1; i++) {
                            if (document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains("hover") == true) {
                                let x = document.querySelector(`.square-${diachi(nameClass) + i}`);
                                div.removeChild(x);
                            } else break;
                        }
                        if (kt(diachi(nameClass) + 11) == 1) {
                            let phai = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                            if (phai != null) {
                                if (anduoc(phai.className.toString()) == 1) {
                                    let xoaphai = document.querySelector(`.hover11`);
                                    div.removeChild(xoaphai);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 9) == 1) {
                            let trai = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                            if (trai != null) {
                                if (anduoc(trai.className.toString()) == 1) {
                                    let xoatrai = document.querySelector(`.hover9`);
                                    div.removeChild(xoatrai);
                                }
                            }
                        }
                        temp = true;
                        wp1.className = `piece wp square-${b}`
                        wwp1 = 2;
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    break;
                }
            }
        }
        if (kt(diachi(nameClass) + 11) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) + 11}`) != null) {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) + 11}`).className.toString()) == 1) {
                    let cheophai = document.createElement("div")
                    cheophai.classList.add("piece", "hover11", `square-${diachi(nameClass) + 11}`);
                    cheophai.style.backgroundColor = "#ff000080";
                    cheophai.onclick = function () {
                        wp1.style.backgroundColor = "transparent";
                        let x = document.querySelector(`.hover11`);
                        div.removeChild(x);
                        let a = diachi(nameClass)
                        banco[a % 10][(a - a % 10) / 10] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        for (let i = 1; i < wwp1; i++) {
                            if (document.querySelector(`.square-${diachi(nameClass) + i}`) != null) {
                                let kiemtra = document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains('hover')
                                if (kiemtra == true) {
                                    let xoamau = document.querySelector(`.square-${diachi(nameClass) + i}`);
                                    div.removeChild(xoamau);
                                }
                            } else break;
                        }
                        if (kt(diachi(nameClass) - 9) == 1) {
                            let trai = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                            if (trai != null) {
                                if (anduoc(trai.className.toString()) == 1) {
                                    let xoatrai = document.querySelector(`.hover9`);
                                    div.removeChild(xoatrai);
                                }
                            }
                        }
                        let b = diachi(nameClass) + 11
                        let an = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                        div.removeChild(an);
                        temp = true;
                        wp1.className = `piece wp square-${b}`
                        wwp1 = 2;
                        dichuyen()
                    }
                    div.appendChild(cheophai);
                }
            }
        }
        if (kt(diachi(nameClass) - 9) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) - 9}`) != null) {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) - 9}`).className.toString()) == 1) {
                    let cheotrai = document.createElement("div")
                    cheotrai.classList.add("piece", "hover9", `square-${diachi(nameClass) - 9}`);
                    cheotrai.style.backgroundColor = "#ff000080";
                    cheotrai.onclick = function () {
                        wp1.style.backgroundColor = "transparent";
                        let x = document.querySelector(`.hover9`);
                        div.removeChild(x);
                        let a = diachi(nameClass)
                        banco[a % 10][(a - a % 10) / 10 - 1 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        for (let i = 1; i < wwp1; i++) {
                            if (document.querySelector(`.square-${diachi(nameClass) + i}`) != null) {
                                let kiemtra = document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains('hover')
                                if (kiemtra == true) {
                                    let xoamau = document.querySelector(`.square-${diachi(nameClass) + i}`);
                                    div.removeChild(xoamau);
                                }
                            } else break;
                        }
                        if (kt(diachi(nameClass) + 11) == 1) {
                            let phai = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                            if (phai != null) {
                                if (anduoc(phai.className.toString()) == 1) {
                                    let xoaphai = document.querySelector(`.hover11`);
                                    div.removeChild(xoaphai);
                                }
                            }
                        }
                        let b = diachi(nameClass) - 9
                        let an = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                        div.removeChild(an);
                        temp = true;
                        wp1.className = `piece wp square-${b}`
                        wwp1 = 2;
                        dichuyen()
                    }
                    div.appendChild(cheotrai)
                }
            }
        }
        temp = false;
    } else {
        wp1.style.backgroundColor = "transparent";
        let nameClass = wp1.className.toString();
        for (let i = 1; i < wwp1; i++) {
            if (document.querySelector(`.square-${diachi(nameClass) + i}`) != null) {
                let kiemtra = document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains('hover');
                if (kiemtra == 1) {
                    let xoamau = document.querySelector(`.square-${diachi(nameClass) + i}`);
                    div.removeChild(xoamau);
                }
            }

        }
        if (kt(diachi(nameClass) + 11) == 1) {
            let phai = document.querySelector(`.square-${diachi(nameClass) + 11}`)
            if (phai != null) {
                if (anduoc(phai.className.toString()) == 1) {
                    let xoaphai = document.querySelector(`.hover11`);
                    div.removeChild(xoaphai);
                }
            }
        }
        if (kt(diachi(nameClass) - 9) == 1) {
            let trai = document.querySelector(`.square-${diachi(nameClass) - 9}`)
            if (trai != null) {
                if (anduoc(trai.className.toString()) == 1) {
                    let xoatrai = document.querySelector(`.hover9`);
                    div.removeChild(xoatrai);
                }
            }
        }
        temp = true;
    }
}
var wwp2 = 3
wp2.onclick = function () {
    if (temp == true) {
        wp2.style.backgroundColor = "#957373ad";
        let nameClass = wp2.className.toString()
        for (let i = 1; i < wwp2; i++) {
            if (kt(diachi(nameClass) + i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) + i}`) == null) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wp2.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        for (let i = 1; i < wwp2; i++) {
                            if (document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains("hover") == true) {
                                let x = document.querySelector(`.square-${diachi(nameClass) + i}`);
                                div.removeChild(x);
                            } else break;
                        }
                        if (kt(diachi(nameClass) + 11) == 1) {
                            let phai = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                            if (phai != null) {
                                if (anduoc(phai.className.toString()) == 1) {
                                    let xoaphai = document.querySelector(`.hover11`);
                                    div.removeChild(xoaphai);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 9) == 1) {
                            let trai = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                            if (trai != null) {
                                if (anduoc(trai.className.toString()) == 1) {
                                    let xoatrai = document.querySelector(`.hover9`);
                                    div.removeChild(xoatrai);
                                }
                            }
                        }
                        temp = true;
                        wp2.className = `piece wp square-${b}`
                        wwp2 = 2;
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    break;
                }
            }
        }
        if (kt(diachi(nameClass) + 11) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) + 11}`) != null) {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) + 11}`).className.toString()) == 1) {
                    let cheophai = document.createElement("div")
                    cheophai.classList.add("piece", "hover11", `square-${diachi(nameClass) + 11}`);
                    cheophai.style.backgroundColor = "#ff000080";
                    cheophai.onclick = function () {
                        wp2.style.backgroundColor = "transparent";
                        let x = document.querySelector(`.hover11`);
                        div.removeChild(x);
                        let a = diachi(nameClass)
                        banco[a % 10][(a - a % 10) / 10] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        for (let i = 1; i < wwp2; i++) {
                            if (document.querySelector(`.square-${diachi(nameClass) + i}`) != null) {
                                let kiemtra = document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains('hover')
                                if (kiemtra == true) {
                                    let xoamau = document.querySelector(`.square-${diachi(nameClass) + i}`);
                                    div.removeChild(xoamau);
                                }
                            } else break;
                        }
                        if (kt(diachi(nameClass) - 9) == 1) {
                            let trai = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                            if (trai != null) {
                                if (anduoc(trai.className.toString()) == 1) {
                                    let xoatrai = document.querySelector(`.hover9`);
                                    div.removeChild(xoatrai);
                                }
                            }
                        }
                        let b = diachi(nameClass) + 11
                        let an = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                        div.removeChild(an);
                        temp = true;
                        wp2.className = `piece wp square-${b}`
                        wwp2 = 2;
                        dichuyen()
                    }
                    div.appendChild(cheophai);
                }
            }
        }
        if (kt(diachi(nameClass) - 9) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) - 9}`) != null) {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) - 9}`).className.toString()) == 1) {
                    let cheotrai = document.createElement("div")
                    cheotrai.classList.add("piece", "hover9", `square-${diachi(nameClass) - 9}`);
                    cheotrai.style.backgroundColor = "#ff000080";
                    cheotrai.onclick = function () {
                        wp2.style.backgroundColor = "transparent";
                        let x = document.querySelector(`.hover9`);
                        div.removeChild(x);
                        let a = diachi(nameClass)
                        banco[a % 10][(a - a % 10) / 10 - 1 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        for (let i = 1; i < wwp2; i++) {
                            if (document.querySelector(`.square-${diachi(nameClass) + i}`) != null) {
                                let kiemtra = document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains('hover')
                                if (kiemtra == true) {
                                    let xoamau = document.querySelector(`.square-${diachi(nameClass) + i}`);
                                    div.removeChild(xoamau);
                                }
                            } else break;
                        }
                        if (kt(diachi(nameClass) + 11) == 1) {
                            let phai = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                            if (phai != null) {
                                if (anduoc(phai.className.toString()) == 1) {
                                    let xoaphai = document.querySelector(`.hover11`);
                                    div.removeChild(xoaphai);
                                }
                            }
                        }
                        let b = diachi(nameClass) - 9
                        let an = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                        div.removeChild(an);
                        temp = true;
                        wp2.className = `piece wp square-${b}`
                        wwp2 = 2;
                        dichuyen()
                    }
                    div.appendChild(cheotrai)
                }
            }
        }
        temp = false;
    } else {
        wp2.style.backgroundColor = "transparent";
        let nameClass = wp2.className.toString();
        for (let i = 1; i < wwp2; i++) {
            if (document.querySelector(`.square-${diachi(nameClass) + i}`) != null) {
                let kiemtra = document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains('hover');
                if (kiemtra == 1) {
                    let xoamau = document.querySelector(`.square-${diachi(nameClass) + i}`);
                    div.removeChild(xoamau);
                }
            }

        }
        if (kt(diachi(nameClass) + 11) == 1) {
            let phai = document.querySelector(`.square-${diachi(nameClass) + 11}`)
            if (phai != null) {
                if (anduoc(phai.className.toString()) == 1) {
                    let xoaphai = document.querySelector(`.hover11`);
                    div.removeChild(xoaphai);
                }
            }
        }
        if (kt(diachi(nameClass) - 9) == 1) {
            let trai = document.querySelector(`.square-${diachi(nameClass) - 9}`)
            if (trai != null) {
                if (anduoc(trai.className.toString()) == 1) {
                    let xoatrai = document.querySelector(`.hover9`);
                    div.removeChild(xoatrai);
                }
            }
        }
        temp = true;
    }
}
var wwp3 = 3
wp3.onclick = function () {
    if (temp == true) {
        wp3.style.backgroundColor = "#957373ad";
        let nameClass = wp3.className.toString()
        for (let i = 1; i < wwp3; i++) {
            if (kt(diachi(nameClass) + i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) + i}`) == null) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wp3.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        for (let i = 1; i < wwp3; i++) {
                            if (document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains("hover") == true) {
                                let x = document.querySelector(`.square-${diachi(nameClass) + i}`);
                                div.removeChild(x);
                            } else break;
                        }
                        if (kt(diachi(nameClass) + 11) == 1) {
                            let phai = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                            if (phai != null) {
                                if (anduoc(phai.className.toString()) == 1) {
                                    let xoaphai = document.querySelector(`.hover11`);
                                    div.removeChild(xoaphai);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 9) == 1) {
                            let trai = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                            if (trai != null) {
                                if (anduoc(trai.className.toString()) == 1) {
                                    let xoatrai = document.querySelector(`.hover9`);
                                    div.removeChild(xoatrai);
                                }
                            }
                        }
                        temp = true;
                        wp3.className = `piece wp square-${b}`
                        wwp3 = 2;
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    break;
                }
            }
        }
        if (kt(diachi(nameClass) + 11) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) + 11}`) != null) {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) + 11}`).className.toString()) == 1) {
                    let cheophai = document.createElement("div")
                    cheophai.classList.add("piece", "hover11", `square-${diachi(nameClass) + 11}`);
                    cheophai.style.backgroundColor = "#ff000080";
                    cheophai.onclick = function () {
                        wp3.style.backgroundColor = "transparent";
                        let x = document.querySelector(`.hover11`);
                        div.removeChild(x);
                        let a = diachi(nameClass)
                        banco[a % 10][(a - a % 10) / 10] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        for (let i = 1; i < wwp3; i++) {
                            if (document.querySelector(`.square-${diachi(nameClass) + i}`) != null) {
                                let kiemtra = document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains('hover')
                                if (kiemtra == true) {
                                    let xoamau = document.querySelector(`.square-${diachi(nameClass) + i}`);
                                    div.removeChild(xoamau);
                                }
                            } else break;
                        }
                        if (kt(diachi(nameClass) - 9) == 1) {
                            let trai = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                            if (trai != null) {
                                if (anduoc(trai.className.toString()) == 1) {
                                    let xoatrai = document.querySelector(`.hover9`);
                                    div.removeChild(xoatrai);
                                }
                            }
                        }
                        let b = diachi(nameClass) + 11
                        let an = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                        div.removeChild(an);
                        temp = true;
                        wp3.className = `piece wp square-${b}`
                        wwp3 = 2;
                        dichuyen()
                    }
                    div.appendChild(cheophai);
                }
            }
        }
        if (kt(diachi(nameClass) - 9) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) - 9}`) != null) {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) - 9}`).className.toString()) == 1) {
                    let cheotrai = document.createElement("div")
                    cheotrai.classList.add("piece", "hover9", `square-${diachi(nameClass) - 9}`);
                    cheotrai.style.backgroundColor = "#ff000080";
                    cheotrai.onclick = function () {
                        wp3.style.backgroundColor = "transparent";
                        let x = document.querySelector(`.hover9`);
                        div.removeChild(x);
                        let a = diachi(nameClass)
                        banco[a % 10][(a - a % 10) / 10 - 1 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        for (let i = 1; i < wwp3; i++) {
                            if (document.querySelector(`.square-${diachi(nameClass) + i}`) != null) {
                                let kiemtra = document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains('hover')
                                if (kiemtra == true) {
                                    let xoamau = document.querySelector(`.square-${diachi(nameClass) + i}`);
                                    div.removeChild(xoamau);
                                }
                            } else break;
                        }
                        if (kt(diachi(nameClass) + 11) == 1) {
                            let phai = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                            if (phai != null) {
                                if (anduoc(phai.className.toString()) == 1) {
                                    let xoaphai = document.querySelector(`.hover11`);
                                    div.removeChild(xoaphai);
                                }
                            }
                        }
                        let b = diachi(nameClass) - 9
                        let an = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                        div.removeChild(an);
                        temp = true;
                        wp3.className = `piece wp square-${b}`
                        wwp3 = 2;
                        dichuyen()
                    }
                    div.appendChild(cheotrai)
                }
            }
        }
        temp = false;
    } else {
        wp3.style.backgroundColor = "transparent";
        let nameClass = wp3.className.toString();
        for (let i = 1; i < wwp3; i++) {
            if (document.querySelector(`.square-${diachi(nameClass) + i}`) != null) {
                let kiemtra = document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains('hover');
                if (kiemtra == 1) {
                    let xoamau = document.querySelector(`.square-${diachi(nameClass) + i}`);
                    div.removeChild(xoamau);
                }
            }

        }
        if (kt(diachi(nameClass) + 11) == 1) {
            let phai = document.querySelector(`.square-${diachi(nameClass) + 11}`)
            if (phai != null) {
                if (anduoc(phai.className.toString()) == 1) {
                    let xoaphai = document.querySelector(`.hover11`);
                    div.removeChild(xoaphai);
                }
            }
        }
        if (kt(diachi(nameClass) - 9) == 1) {
            let trai = document.querySelector(`.square-${diachi(nameClass) - 9}`)
            if (trai != null) {
                if (anduoc(trai.className.toString()) == 1) {
                    let xoatrai = document.querySelector(`.hover9`);
                    div.removeChild(xoatrai);
                }
            }
        }
        temp = true;
    }
}
var wwp4 = 3
wp4.onclick = function () {
    if (temp == true) {
        wp4.style.backgroundColor = "#957373ad";
        let nameClass = wp4.className.toString()
        for (let i = 1; i < wwp4; i++) {
            if (kt(diachi(nameClass) + i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) + i}`) == null) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wp4.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        for (let i = 1; i < wwp4; i++) {
                            if (document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains("hover") == true) {
                                let x = document.querySelector(`.square-${diachi(nameClass) + i}`);
                                div.removeChild(x);
                            } else break;
                        }
                        if (kt(diachi(nameClass) + 11) == 1) {
                            let phai = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                            if (phai != null) {
                                if (anduoc(phai.className.toString()) == 1) {
                                    let xoaphai = document.querySelector(`.hover11`);
                                    div.removeChild(xoaphai);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 9) == 1) {
                            let trai = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                            if (trai != null) {
                                if (anduoc(trai.className.toString()) == 1) {
                                    let xoatrai = document.querySelector(`.hover9`);
                                    div.removeChild(xoatrai);
                                }
                            }
                        }
                        temp = true;
                        wp4.className = `piece wp square-${b}`
                        wwp4 = 2;
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    break;
                }
            }
        }
        if (kt(diachi(nameClass) + 11) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) + 11}`) != null) {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) + 11}`).className.toString()) == 1) {
                    let cheophai = document.createElement("div")
                    cheophai.classList.add("piece", "hover11", `square-${diachi(nameClass) + 11}`);
                    cheophai.style.backgroundColor = "#ff000080";
                    cheophai.onclick = function () {
                        wp4.style.backgroundColor = "transparent";
                        let x = document.querySelector(`.hover11`);
                        div.removeChild(x);
                        let a = diachi(nameClass)
                        banco[a % 10][(a - a % 10) / 10] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        for (let i = 1; i < wwp4; i++) {
                            if (document.querySelector(`.square-${diachi(nameClass) + i}`) != null) {
                                let kiemtra = document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains('hover')
                                if (kiemtra == true) {
                                    let xoamau = document.querySelector(`.square-${diachi(nameClass) + i}`);
                                    div.removeChild(xoamau);
                                }
                            } else break;
                        }
                        if (kt(diachi(nameClass) - 9) == 1) {
                            let trai = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                            if (trai != null) {
                                if (anduoc(trai.className.toString()) == 1) {
                                    let xoatrai = document.querySelector(`.hover9`);
                                    div.removeChild(xoatrai);
                                }
                            }
                        }
                        let b = diachi(nameClass) + 11
                        let an = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                        div.removeChild(an);
                        temp = true;
                        wp4.className = `piece wp square-${b}`
                        wwp4 = 2;
                        dichuyen()
                    }
                    div.appendChild(cheophai);
                }
            }
        }
        if (kt(diachi(nameClass) - 9) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) - 9}`) != null) {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) - 9}`).className.toString()) == 1) {
                    let cheotrai = document.createElement("div")
                    cheotrai.classList.add("piece", "hover9", `square-${diachi(nameClass) - 9}`);
                    cheotrai.style.backgroundColor = "#ff000080";
                    cheotrai.onclick = function () {
                        wp4.style.backgroundColor = "transparent";
                        let x = document.querySelector(`.hover9`);
                        div.removeChild(x);
                        let a = diachi(nameClass)
                        banco[a % 10][(a - a % 10) / 10 - 1 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        for (let i = 1; i < wwp4; i++) {
                            if (document.querySelector(`.square-${diachi(nameClass) + i}`) != null) {
                                let kiemtra = document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains('hover')
                                if (kiemtra == true) {
                                    let xoamau = document.querySelector(`.square-${diachi(nameClass) + i}`);
                                    div.removeChild(xoamau);
                                }
                            } else break;
                        }
                        if (kt(diachi(nameClass) + 11) == 1) {
                            let phai = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                            if (phai != null) {
                                if (anduoc(phai.className.toString()) == 1) {
                                    let xoaphai = document.querySelector(`.hover11`);
                                    div.removeChild(xoaphai);
                                }
                            }
                        }
                        let b = diachi(nameClass) - 9
                        let an = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                        div.removeChild(an);
                        temp = true;
                        wp4.className = `piece wp square-${b}`
                        wwp4 = 2;
                        dichuyen()
                    }
                    div.appendChild(cheotrai)
                }
            }
        }
        temp = false;
    } else {
        wp4.style.backgroundColor = "transparent";
        let nameClass = wp4.className.toString();
        for (let i = 1; i < wwp4; i++) {
            if (document.querySelector(`.square-${diachi(nameClass) + i}`) != null) {
                let kiemtra = document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains('hover');
                if (kiemtra == 1) {
                    let xoamau = document.querySelector(`.square-${diachi(nameClass) + i}`);
                    div.removeChild(xoamau);
                }
            }

        }
        if (kt(diachi(nameClass) + 11) == 1) {
            let phai = document.querySelector(`.square-${diachi(nameClass) + 11}`)
            if (phai != null) {
                if (anduoc(phai.className.toString()) == 1) {
                    let xoaphai = document.querySelector(`.hover11`);
                    div.removeChild(xoaphai);
                }
            }
        }
        if (kt(diachi(nameClass) - 9) == 1) {
            let trai = document.querySelector(`.square-${diachi(nameClass) - 9}`)
            if (trai != null) {
                if (anduoc(trai.className.toString()) == 1) {
                    let xoatrai = document.querySelector(`.hover9`);
                    div.removeChild(xoatrai);
                }
            }
        }
        temp = true;
    }
}
var wwp5 = 3
wp5.onclick = function () {
    if (temp == true) {
        wp5.style.backgroundColor = "#957373ad";
        let nameClass = wp5.className.toString()
        for (let i = 1; i < wwp5; i++) {
            if (kt(diachi(nameClass) + i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) + i}`) == null) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wp5.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        for (let i = 1; i < wwp5; i++) {
                            if (document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains("hover") == true) {
                                let x = document.querySelector(`.square-${diachi(nameClass) + i}`);
                                div.removeChild(x);
                            } else break;
                        }
                        if (kt(diachi(nameClass) + 11) == 1) {
                            let phai = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                            if (phai != null) {
                                if (anduoc(phai.className.toString()) == 1) {
                                    let xoaphai = document.querySelector(`.hover11`);
                                    div.removeChild(xoaphai);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 9) == 1) {
                            let trai = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                            if (trai != null) {
                                if (anduoc(trai.className.toString()) == 1) {
                                    let xoatrai = document.querySelector(`.hover9`);
                                    div.removeChild(xoatrai);
                                }
                            }
                        }
                        temp = true;
                        wp5.className = `piece wp square-${b}`
                        wwp5 = 2;
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    break;
                }
            }
        }
        if (kt(diachi(nameClass) + 11) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) + 11}`) != null) {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) + 11}`).className.toString()) == 1) {
                    let cheophai = document.createElement("div")
                    cheophai.classList.add("piece", "hover11", `square-${diachi(nameClass) + 11}`);
                    cheophai.style.backgroundColor = "#ff000080";
                    cheophai.onclick = function () {
                        wp5.style.backgroundColor = "transparent";
                        let x = document.querySelector(`.hover11`);
                        div.removeChild(x);
                        let a = diachi(nameClass)
                        banco[a % 10][(a - a % 10) / 10] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        for (let i = 1; i < wwp5; i++) {
                            if (document.querySelector(`.square-${diachi(nameClass) + i}`) != null) {
                                let kiemtra = document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains('hover')
                                if (kiemtra == true) {
                                    let xoamau = document.querySelector(`.square-${diachi(nameClass) + i}`);
                                    div.removeChild(xoamau);
                                }
                            } else break;
                        }
                        if (kt(diachi(nameClass) - 9) == 1) {
                            let trai = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                            if (trai != null) {
                                if (anduoc(trai.className.toString()) == 1) {
                                    let xoatrai = document.querySelector(`.hover9`);
                                    div.removeChild(xoatrai);
                                }
                            }
                        }
                        let b = diachi(nameClass) + 11
                        let an = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                        div.removeChild(an);
                        temp = true;
                        wp5.className = `piece wp square-${b}`
                        wwp5 = 2;
                        dichuyen()
                    }
                    div.appendChild(cheophai);
                }
            }
        }
        if (kt(diachi(nameClass) - 9) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) - 9}`) != null) {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) - 9}`).className.toString()) == 1) {
                    let cheotrai = document.createElement("div")
                    cheotrai.classList.add("piece", "hover9", `square-${diachi(nameClass) - 9}`);
                    cheotrai.style.backgroundColor = "#ff000080";
                    cheotrai.onclick = function () {
                        wp5.style.backgroundColor = "transparent";
                        let x = document.querySelector(`.hover9`);
                        div.removeChild(x);
                        let a = diachi(nameClass)
                        banco[a % 10][(a - a % 10) / 10 - 1 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        for (let i = 1; i < wwp5; i++) {
                            if (document.querySelector(`.square-${diachi(nameClass) + i}`) != null) {
                                let kiemtra = document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains('hover')
                                if (kiemtra == true) {
                                    let xoamau = document.querySelector(`.square-${diachi(nameClass) + i}`);
                                    div.removeChild(xoamau);
                                }
                            } else break;
                        }
                        if (kt(diachi(nameClass) + 11) == 1) {
                            let phai = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                            if (phai != null) {
                                if (anduoc(phai.className.toString()) == 1) {
                                    let xoaphai = document.querySelector(`.hover11`);
                                    div.removeChild(xoaphai);
                                }
                            }
                        }
                        let b = diachi(nameClass) - 9
                        let an = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                        div.removeChild(an);
                        temp = true;
                        wp5.className = `piece wp square-${b}`
                        wwp5 = 2;
                        dichuyen()
                    }
                    div.appendChild(cheotrai)
                }
            }
        }
        temp = false;
    } else {
        wp5.style.backgroundColor = "transparent";
        let nameClass = wp5.className.toString();
        for (let i = 1; i < wwp5; i++) {
            if (document.querySelector(`.square-${diachi(nameClass) + i}`) != null) {
                let kiemtra = document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains('hover');
                if (kiemtra == 1) {
                    let xoamau = document.querySelector(`.square-${diachi(nameClass) + i}`);
                    div.removeChild(xoamau);
                }
            }

        }
        if (kt(diachi(nameClass) + 11) == 1) {
            let phai = document.querySelector(`.square-${diachi(nameClass) + 11}`)
            if (phai != null) {
                if (anduoc(phai.className.toString()) == 1) {
                    let xoaphai = document.querySelector(`.hover11`);
                    div.removeChild(xoaphai);
                }
            }
        }
        if (kt(diachi(nameClass) - 9) == 1) {
            let trai = document.querySelector(`.square-${diachi(nameClass) - 9}`)
            if (trai != null) {
                if (anduoc(trai.className.toString()) == 1) {
                    let xoatrai = document.querySelector(`.hover9`);
                    div.removeChild(xoatrai);
                }
            }
        }
        temp = true;
    }
}
var wwp6 = 3
wp6.onclick = function () {
    if (temp == true) {
        wp6.style.backgroundColor = "#957373ad";
        let nameClass = wp6.className.toString()
        for (let i = 1; i < wwp6; i++) {
            if (kt(diachi(nameClass) + i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) + i}`) == null) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wp6.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        for (let i = 1; i < wwp6; i++) {
                            if (document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains("hover") == true) {
                                let x = document.querySelector(`.square-${diachi(nameClass) + i}`);
                                div.removeChild(x);
                            } else break;
                        }
                        if (kt(diachi(nameClass) + 11) == 1) {
                            let phai = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                            if (phai != null) {
                                if (anduoc(phai.className.toString()) == 1) {
                                    let xoaphai = document.querySelector(`.hover11`);
                                    div.removeChild(xoaphai);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 9) == 1) {
                            let trai = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                            if (trai != null) {
                                if (anduoc(trai.className.toString()) == 1) {
                                    let xoatrai = document.querySelector(`.hover9`);
                                    div.removeChild(xoatrai);
                                }
                            }
                        }
                        temp = true;
                        wp6.className = `piece wp square-${b}`
                        wwp6 = 2;
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    break;
                }
            }
        }
        if (kt(diachi(nameClass) + 11) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) + 11}`) != null) {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) + 11}`).className.toString()) == 1) {
                    let cheophai = document.createElement("div")
                    cheophai.classList.add("piece", "hover11", `square-${diachi(nameClass) + 11}`);
                    cheophai.style.backgroundColor = "#ff000080";
                    cheophai.onclick = function () {
                        wp6.style.backgroundColor = "transparent";
                        let x = document.querySelector(`.hover11`);
                        div.removeChild(x);
                        let a = diachi(nameClass)
                        banco[a % 10][(a - a % 10) / 10] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        for (let i = 1; i < wwp6; i++) {
                            if (document.querySelector(`.square-${diachi(nameClass) + i}`) != null) {
                                let kiemtra = document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains('hover')
                                if (kiemtra == true) {
                                    let xoamau = document.querySelector(`.square-${diachi(nameClass) + i}`);
                                    div.removeChild(xoamau);
                                }
                            } else break;
                        }
                        if (kt(diachi(nameClass) - 9) == 1) {
                            let trai = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                            if (trai != null) {
                                if (anduoc(trai.className.toString()) == 1) {
                                    let xoatrai = document.querySelector(`.hover9`);
                                    div.removeChild(xoatrai);
                                }
                            }
                        }
                        let b = diachi(nameClass) + 11
                        let an = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                        div.removeChild(an);
                        temp = true;
                        wp6.className = `piece wp square-${b}`
                        wwp6 = 2;
                        dichuyen()
                    }
                    div.appendChild(cheophai);
                }
            }
        }
        if (kt(diachi(nameClass) - 9) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) - 9}`) != null) {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) - 9}`).className.toString()) == 1) {
                    let cheotrai = document.createElement("div")
                    cheotrai.classList.add("piece", "hover9", `square-${diachi(nameClass) - 9}`);
                    cheotrai.style.backgroundColor = "#ff000080";
                    cheotrai.onclick = function () {
                        wp6.style.backgroundColor = "transparent";
                        let x = document.querySelector(`.hover9`);
                        div.removeChild(x);
                        let a = diachi(nameClass)
                        banco[a % 10][(a - a % 10) / 10 - 1 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        for (let i = 1; i < wwp6; i++) {
                            if (document.querySelector(`.square-${diachi(nameClass) + i}`) != null) {
                                let kiemtra = document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains('hover')
                                if (kiemtra == true) {
                                    let xoamau = document.querySelector(`.square-${diachi(nameClass) + i}`);
                                    div.removeChild(xoamau);
                                }
                            } else break;
                        }
                        if (kt(diachi(nameClass) + 11) == 1) {
                            let phai = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                            if (phai != null) {
                                if (anduoc(phai.className.toString()) == 1) {
                                    let xoaphai = document.querySelector(`.hover11`);
                                    div.removeChild(xoaphai);
                                }
                            }
                        }
                        let b = diachi(nameClass) - 9
                        let an = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                        div.removeChild(an);
                        temp = true;
                        wp6.className = `piece wp square-${b}`
                        wwp6 = 2;
                        dichuyen()
                    }
                    div.appendChild(cheotrai)
                }
            }
        }
        temp = false;
    } else {
        wp6.style.backgroundColor = "transparent";
        let nameClass = wp6.className.toString();
        for (let i = 1; i < wwp6; i++) {
            if (document.querySelector(`.square-${diachi(nameClass) + i}`) != null) {
                let kiemtra = document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains('hover');
                if (kiemtra == 1) {
                    let xoamau = document.querySelector(`.square-${diachi(nameClass) + i}`);
                    div.removeChild(xoamau);
                }
            }

        }
        if (kt(diachi(nameClass) + 11) == 1) {
            let phai = document.querySelector(`.square-${diachi(nameClass) + 11}`)
            if (phai != null) {
                if (anduoc(phai.className.toString()) == 1) {
                    let xoaphai = document.querySelector(`.hover11`);
                    div.removeChild(xoaphai);
                }
            }
        }
        if (kt(diachi(nameClass) - 9) == 1) {
            let trai = document.querySelector(`.square-${diachi(nameClass) - 9}`)
            if (trai != null) {
                if (anduoc(trai.className.toString()) == 1) {
                    let xoatrai = document.querySelector(`.hover9`);
                    div.removeChild(xoatrai);
                }
            }
        }
        temp = true;
    }
}
var wwp7 = 3
wp7.onclick = function () {
    if (temp == true) {
        wp7.style.backgroundColor = "#957373ad";
        let nameClass = wp7.className.toString()
        for (let i = 1; i < wwp7; i++) {
            if (kt(diachi(nameClass) + i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) + i}`) == null) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wp7.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        for (let i = 1; i < wwp7; i++) {
                            if (document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains("hover") == true) {
                                let x = document.querySelector(`.square-${diachi(nameClass) + i}`);
                                div.removeChild(x);
                            } else break;
                        }
                        if (kt(diachi(nameClass) + 11) == 1) {
                            let phai = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                            if (phai != null) {
                                if (anduoc(phai.className.toString()) == 1) {
                                    let xoaphai = document.querySelector(`.hover11`);
                                    div.removeChild(xoaphai);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 9) == 1) {
                            let trai = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                            if (trai != null) {
                                if (anduoc(trai.className.toString()) == 1) {
                                    let xoatrai = document.querySelector(`.hover9`);
                                    div.removeChild(xoatrai);
                                }
                            }
                        }
                        temp = true;
                        wp7.className = `piece wp square-${b}`
                        wwp7 = 2;
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    break;
                }
            }
        }
        if (kt(diachi(nameClass) + 11) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) + 11}`) != null) {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) + 11}`).className.toString()) == 1) {
                    let cheophai = document.createElement("div")
                    cheophai.classList.add("piece", "hover11", `square-${diachi(nameClass) + 11}`);
                    cheophai.style.backgroundColor = "#ff000080";
                    cheophai.onclick = function () {
                        wp7.style.backgroundColor = "transparent";
                        let x = document.querySelector(`.hover11`);
                        div.removeChild(x);
                        let a = diachi(nameClass)
                        banco[a % 10][(a - a % 10) / 10] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        for (let i = 1; i < wwp7; i++) {
                            if (document.querySelector(`.square-${diachi(nameClass) + i}`) != null) {
                                let kiemtra = document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains('hover')
                                if (kiemtra == true) {
                                    let xoamau = document.querySelector(`.square-${diachi(nameClass) + i}`);
                                    div.removeChild(xoamau);
                                }
                            } else break;
                        }
                        if (kt(diachi(nameClass) - 9) == 1) {
                            let trai = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                            if (trai != null) {
                                if (anduoc(trai.className.toString()) == 1) {
                                    let xoatrai = document.querySelector(`.hover9`);
                                    div.removeChild(xoatrai);
                                }
                            }
                        }
                        let b = diachi(nameClass) + 11
                        let an = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                        div.removeChild(an);
                        temp = true;
                        wp7.className = `piece wp square-${b}`
                        wwp7 = 2;
                        dichuyen()
                    }
                    div.appendChild(cheophai);
                }
            }
        }
        if (kt(diachi(nameClass) - 9) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) - 9}`) != null) {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) - 9}`).className.toString()) == 1) {
                    let cheotrai = document.createElement("div")
                    cheotrai.classList.add("piece", "hover9", `square-${diachi(nameClass) - 9}`);
                    cheotrai.style.backgroundColor = "#ff000080";
                    cheotrai.onclick = function () {
                        wp7.style.backgroundColor = "transparent";
                        let x = document.querySelector(`.hover9`);
                        div.removeChild(x);
                        let a = diachi(nameClass)
                        banco[a % 10][(a - a % 10) / 10 - 1 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        for (let i = 1; i < wwp7; i++) {
                            if (document.querySelector(`.square-${diachi(nameClass) + i}`) != null) {
                                let kiemtra = document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains('hover')
                                if (kiemtra == true) {
                                    let xoamau = document.querySelector(`.square-${diachi(nameClass) + i}`);
                                    div.removeChild(xoamau);
                                }
                            } else break;
                        }
                        if (kt(diachi(nameClass) + 11) == 1) {
                            let phai = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                            if (phai != null) {
                                if (anduoc(phai.className.toString()) == 1) {
                                    let xoaphai = document.querySelector(`.hover11`);
                                    div.removeChild(xoaphai);
                                }
                            }
                        }
                        let b = diachi(nameClass) - 9
                        let an = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                        div.removeChild(an);
                        temp = true;
                        wp7.className = `piece wp square-${b}`
                        wwp7 = 2;
                        dichuyen()
                    }
                    div.appendChild(cheotrai)
                }
            }
        }
        temp = false;
    } else {
        wp7.style.backgroundColor = "transparent";
        let nameClass = wp7.className.toString();
        for (let i = 1; i < wwp7; i++) {
            if (document.querySelector(`.square-${diachi(nameClass) + i}`) != null) {
                let kiemtra = document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains('hover');
                if (kiemtra == 1) {
                    let xoamau = document.querySelector(`.square-${diachi(nameClass) + i}`);
                    div.removeChild(xoamau);
                }
            }

        }
        if (kt(diachi(nameClass) + 11) == 1) {
            let phai = document.querySelector(`.square-${diachi(nameClass) + 11}`)
            if (phai != null) {
                if (anduoc(phai.className.toString()) == 1) {
                    let xoaphai = document.querySelector(`.hover11`);
                    div.removeChild(xoaphai);
                }
            }
        }
        if (kt(diachi(nameClass) - 9) == 1) {
            let trai = document.querySelector(`.square-${diachi(nameClass) - 9}`)
            if (trai != null) {
                if (anduoc(trai.className.toString()) == 1) {
                    let xoatrai = document.querySelector(`.hover9`);
                    div.removeChild(xoatrai);
                }
            }
        }
        temp = true;
    }
}
var wwp8 = 3
wp8.onclick = function () {
    if (temp == true) {
        wp8.style.backgroundColor = "#957373ad";
        let nameClass = wp8.className.toString()
        for (let i = 1; i < wwp8; i++) {
            if (kt(diachi(nameClass) + i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) + i}`) == null) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wp8.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        for (let i = 1; i < wwp8; i++) {
                            if (document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains("hover") == true) {
                                let x = document.querySelector(`.square-${diachi(nameClass) + i}`);
                                div.removeChild(x);
                            } else break;
                        }
                        if (kt(diachi(nameClass) + 11) == 1) {
                            let phai = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                            if (phai != null) {
                                if (anduoc(phai.className.toString()) == 1) {
                                    let xoaphai = document.querySelector(`.hover11`);
                                    div.removeChild(xoaphai);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 9) == 1) {
                            let trai = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                            if (trai != null) {
                                if (anduoc(trai.className.toString()) == 1) {
                                    let xoatrai = document.querySelector(`.hover9`);
                                    div.removeChild(xoatrai);
                                }
                            }
                        }
                        temp = true;
                        wp8.className = `piece wp square-${b}`
                        wwp8 = 2;
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    break;
                }
            }
        }
        if (kt(diachi(nameClass) + 11) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) + 11}`) != null) {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) + 11}`).className.toString()) == 1) {
                    let cheophai = document.createElement("div")
                    cheophai.classList.add("piece", "hover11", `square-${diachi(nameClass) + 11}`);
                    cheophai.style.backgroundColor = "#ff000080";
                    cheophai.onclick = function () {
                        wp8.style.backgroundColor = "transparent";
                        let x = document.querySelector(`.hover11`);
                        div.removeChild(x);
                        let a = diachi(nameClass)
                        banco[a % 10][(a - a % 10) / 10] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        for (let i = 1; i < wwp8; i++) {
                            if (document.querySelector(`.square-${diachi(nameClass) + i}`) != null) {
                                let kiemtra = document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains('hover')
                                if (kiemtra == true) {
                                    let xoamau = document.querySelector(`.square-${diachi(nameClass) + i}`);
                                    div.removeChild(xoamau);
                                }
                            } else break;
                        }
                        if (kt(diachi(nameClass) - 9) == 1) {
                            let trai = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                            if (trai != null) {
                                if (anduoc(trai.className.toString()) == 1) {
                                    let xoatrai = document.querySelector(`.hover9`);
                                    div.removeChild(xoatrai);
                                }
                            }
                        }
                        let b = diachi(nameClass) + 11
                        let an = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                        div.removeChild(an);
                        temp = true;
                        wp8.className = `piece wp square-${b}`
                        wwp8 = 2;
                        dichuyen()
                    }
                    div.appendChild(cheophai);
                }
            }
        }
        if (kt(diachi(nameClass) - 9) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) - 9}`) != null) {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) - 9}`).className.toString()) == 1) {
                    let cheotrai = document.createElement("div")
                    cheotrai.classList.add("piece", "hover9", `square-${diachi(nameClass) - 9}`);
                    cheotrai.style.backgroundColor = "#ff000080";
                    cheotrai.onclick = function () {
                        wp8.style.backgroundColor = "transparent";
                        let x = document.querySelector(`.hover9`);
                        div.removeChild(x);
                        let a = diachi(nameClass)
                        banco[a % 10][(a - a % 10) / 10 - 1 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        for (let i = 1; i < wwp8; i++) {
                            if (document.querySelector(`.square-${diachi(nameClass) + i}`) != null) {
                                let kiemtra = document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains('hover')
                                if (kiemtra == true) {
                                    let xoamau = document.querySelector(`.square-${diachi(nameClass) + i}`);
                                    div.removeChild(xoamau);
                                }
                            } else break;
                        }
                        if (kt(diachi(nameClass) + 11) == 1) {
                            let phai = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                            if (phai != null) {
                                if (anduoc(phai.className.toString()) == 1) {
                                    let xoaphai = document.querySelector(`.hover11`);
                                    div.removeChild(xoaphai);
                                }
                            }
                        }
                        let b = diachi(nameClass) - 9
                        let an = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                        div.removeChild(an);
                        temp = true;
                        wp8.className = `piece wp square-${b}`
                        wwp8 = 2;
                        dichuyen()
                    }
                    div.appendChild(cheotrai)
                }
            }
        }
        temp = false;
    } else {
        wp8.style.backgroundColor = "transparent";
        let nameClass = wp8.className.toString();
        for (let i = 1; i < wwp8; i++) {
            if (document.querySelector(`.square-${diachi(nameClass) + i}`) != null) {
                let kiemtra = document.querySelector(`.square-${diachi(nameClass) + i}`).classList.contains('hover');
                if (kiemtra == 1) {
                    let xoamau = document.querySelector(`.square-${diachi(nameClass) + i}`);
                    div.removeChild(xoamau);
                }
            }

        }
        if (kt(diachi(nameClass) + 11) == 1) {
            let phai = document.querySelector(`.square-${diachi(nameClass) + 11}`)
            if (phai != null) {
                if (anduoc(phai.className.toString()) == 1) {
                    let xoaphai = document.querySelector(`.hover11`);
                    div.removeChild(xoaphai);
                }
            }
        }
        if (kt(diachi(nameClass) - 9) == 1) {
            let trai = document.querySelector(`.square-${diachi(nameClass) - 9}`)
            if (trai != null) {
                if (anduoc(trai.className.toString()) == 1) {
                    let xoatrai = document.querySelector(`.hover9`);
                    div.removeChild(xoatrai);
                }
            }
        }
        temp = true;
    }
}
//Di chuyen xe
function xe(nameClass) {
    for (let i = 1; i < tren; i++) {
        let x = document.querySelector(`.square-${diachi(nameClass) + i}`);
        div.removeChild(x);
    }
    for (let i = 1; i < duoi; i++) {
        let x = document.querySelector(`.square-${diachi(nameClass) - i}`);
        div.removeChild(x);
    }
    for (let i = 1; i < trai; i++) {
        let x = document.querySelector(`.square-${diachi(nameClass) - i * 10}`);
        div.removeChild(x);
    }
    for (let i = 1; i < phai; i++) {
        let x = document.querySelector(`.square-${diachi(nameClass) + i * 10}`);
        div.removeChild(x);
    }
    if (kt(diachi(nameClass) + tren) == 1) {
        let tren1 = document.querySelector(`.square-${diachi(nameClass) + tren}`)
        if (tren1 != null) {
            if (anduoc(tren1.className.toString()) == 1) {
                let xoatren = document.querySelector(`.hover1`);
                div.removeChild(xoatren);
            }
        }
    }
    if (kt(diachi(nameClass) - duoi) == 1) {
        let duoi1 = document.querySelector(`.square-${diachi(nameClass) - duoi}`)
        if (duoi1 != null) {
            if (anduoc(duoi1.className.toString()) == 1) {
                let xoaduoi = document.querySelector(`.hover-1`);
                div.removeChild(xoaduoi);
            }
        }
    }
    if (kt(diachi(nameClass) - trai * 10) == 1) {
        let trai1 = document.querySelector(`.square-${diachi(nameClass) - trai * 10}`)
        if (trai1 != null) {
            if (anduoc(trai1.className.toString()) == 1) {
                let xoatrai = document.querySelector(`.hover-10`);
                div.removeChild(xoatrai);
            }
        }
    }
    if (kt(diachi(nameClass) + phai * 10) == 1) {
        let phai1 = document.querySelector(`.square-${diachi(nameClass) + phai * 10}`)
        if (phai1 != null) {
            if (anduoc(phai1.className.toString()) == 1) {
                let xoaphai = document.querySelector(`.hover10`);
                div.removeChild(xoaphai);
            }
        }
    }
}
var tren = 1;
var duoi = 1;
var trai = 1;
var phai = 1;
wr1.onclick = function () {
    if (temp == true) {
        wr1.style.backgroundColor = "#957373ad";
        let nameClass = wr1.className.toString()
        for (let i = 1; i < 8; i++)          //tren
        {
            if (kt(diachi(nameClass) + i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) + i}`) == null) {
                    tren++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wr1.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i;
                        console.log(b)
                        let a = diachi(nameClass)
                        console.log(a)
                        console.log(banco[b % 10 - 1][(b - b % 10) / 10 - 1])
                        console.log(banco[a % 10 - 1][(a - a % 10) / 10 - 1])
                        banco[b % 10 - 1][(b - b % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        console.log(banco)
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        console.log(banco)
                        xe(nameClass)
                        temp = true;
                        tren = 1;
                        duoi = 1;
                        trai = 1;
                        phai = 1;
                        wr1.className = `piece wr square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + tren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover1", `square-${diachi(nameClass) + tren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wr1.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + tren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + tren][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            xe(nameClass)
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + tren}`)
                            div.removeChild(an);
                            tren = 1;
                            duoi = 1;
                            trai = 1;
                            phai = 1;
                            wr1.className = `piece wr square-${b}`
                            dichuyen()
                        }
                        div.appendChild(taoDiv);

                    }
                    break;
                }
            } else break
        }
        for (let i = 1; i < 8; i++)          //duoi
        {
            if (kt(diachi(nameClass) - i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) - i}`) == null) {
                    duoi++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) - i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wr1.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        xe(nameClass)
                        temp = true;
                        tren = 1;
                        duoi = 1;
                        trai = 1;
                        phai = 1;
                        wr1.className = `piece wr square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) - duoi}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover-1", `square-${diachi(nameClass) - duoi}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wr1.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) - duoi;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 - duoi][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            xe(nameClass)
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - duoi}`)
                            div.removeChild(an);
                            tren = 1;
                            duoi = 1;
                            trai = 1;
                            phai = 1;
                            wr1.className = `piece wr square-${b}`
                            dichuyen()
                        }
                        div.appendChild(taoDiv);

                    }
                    break;
                }
            } else break
        }
        for (let i = 1; i < 8; i++)          //trai
        {
            if (kt(diachi(nameClass) - i * 10) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) - i * 10}`) == null) {
                    trai++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) - i * 10}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wr1.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        xe(nameClass)
                        temp = true;
                        tren = 1;
                        duoi = 1;
                        trai = 1;
                        phai = 1;
                        wr1.className = `piece wr square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) - trai * 10}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover-10", `square-${diachi(nameClass) - trai * 10}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wr1.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) - trai * 10;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1 - trai] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            xe(nameClass)
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - trai * 10}`)
                            div.removeChild(an);
                            tren = 1;
                            duoi = 1;
                            trai = 1;
                            phai = 1;
                            wr1.className = `piece wr square-${b}`
                            dichuyen()
                        }
                        div.appendChild(taoDiv);

                    }
                    break;
                }
            } else break
        }
        for (let i = 1; i < 8; i++)          //phai
        {
            if (kt(diachi(nameClass) + i * 10) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) + i * 10}`) == null) {
                    phai++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + i * 10}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wr1.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        xe(nameClass)
                        temp = true;
                        tren = 1;
                        duoi = 1;
                        trai = 1;
                        phai = 1;
                        wr1.className = `piece wr square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + phai * 10}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover10", `square-${diachi(nameClass) + phai * 10}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wr1.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + phai * 10;
                            xe(nameClass)
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phai * 10}`)
                            div.removeChild(an);
                            tren = 1;
                            duoi = 1;
                            trai = 1;
                            phai = 1;
                            wr1.className = `piece wr square-${b}`
                            dichuyen()
                        }
                        div.appendChild(taoDiv);

                    }
                    break;
                }
            } else break
        }
        temp = false;
    } else {
        wr1.style.backgroundColor = "transparent";
        let nameClass = wr1.className.toString()
        xe(nameClass)
        tren = 1;
        duoi = 1;
        trai = 1;
        phai = 1;
        temp = true;
    }
}
wr2.onclick = function () {
    if (temp == true) {
        wr2.style.backgroundColor = "#957373ad";
        let nameClass = wr2.className.toString()
        for (let i = 1; i < 8; i++)          //tren
        {
            if (kt(diachi(nameClass) + i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) + i}`) == null) {
                    tren++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wr2.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i;
                        console.log(b)
                        let a = diachi(nameClass)
                        console.log(a)
                        console.log(banco[b % 10 - 1][(b - b % 10) / 10 - 1])
                        console.log(banco[a % 10 - 1][(a - a % 10) / 10 - 1])
                        banco[b % 10 - 1][(b - b % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        console.log(banco)
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        console.log(banco)
                        xe(nameClass)
                        temp = true;
                        tren = 1;
                        duoi = 1;
                        trai = 1;
                        phai = 1;
                        wr2.className = `piece wr square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + tren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover1", `square-${diachi(nameClass) + tren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wr2.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + tren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + tren][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            xe(nameClass)
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + tren}`)
                            div.removeChild(an);
                            tren = 1;
                            duoi = 1;
                            trai = 1;
                            phai = 1;
                            wr2.className = `piece wr square-${b}`
                            dichuyen()
                        }
                        div.appendChild(taoDiv);

                    }
                    break;
                }
            } else break
        }
        for (let i = 1; i < 8; i++)          //duoi
        {
            if (kt(diachi(nameClass) - i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) - i}`) == null) {
                    duoi++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) - i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wr2.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        xe(nameClass)
                        temp = true;
                        tren = 1;
                        duoi = 1;
                        trai = 1;
                        phai = 1;
                        wr2.className = `piece wr square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) - duoi}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover-1", `square-${diachi(nameClass) - duoi}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wr2.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) - duoi;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 - duoi][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            xe(nameClass)
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - duoi}`)
                            div.removeChild(an);
                            tren = 1;
                            duoi = 1;
                            trai = 1;
                            phai = 1;
                            wr2.className = `piece wr square-${b}`
                            dichuyen()
                        }
                        div.appendChild(taoDiv);

                    }
                    break;
                }
            } else break
        }
        for (let i = 1; i < 8; i++)          //trai
        {
            if (kt(diachi(nameClass) - i * 10) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) - i * 10}`) == null) {
                    trai++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) - i * 10}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wr2.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        xe(nameClass)
                        temp = true;
                        tren = 1;
                        duoi = 1;
                        trai = 1;
                        phai = 1;
                        wr2.className = `piece wr square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) - trai * 10}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover-10", `square-${diachi(nameClass) - trai * 10}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wr2.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) - trai * 10;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1 - trai] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            xe(nameClass)
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - trai * 10}`)
                            div.removeChild(an);
                            tren = 1;
                            duoi = 1;
                            trai = 1;
                            phai = 1;
                            wr2.className = `piece wr square-${b}`
                            dichuyen()
                        }
                        div.appendChild(taoDiv);

                    }
                    break;
                }
            } else break
        }
        for (let i = 1; i < 8; i++)          //phai
        {
            if (kt(diachi(nameClass) + i * 10) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) + i * 10}`) == null) {
                    phai++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + i * 10}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wr2.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        xe(nameClass)
                        temp = true;
                        tren = 1;
                        duoi = 1;
                        trai = 1;
                        phai = 1;
                        wr2.className = `piece wr square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + phai * 10}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover10", `square-${diachi(nameClass) + phai * 10}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wr2.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + phai * 10;
                            xe(nameClass)
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phai * 10}`)
                            div.removeChild(an);
                            tren = 1;
                            duoi = 1;
                            trai = 1;
                            phai = 1;
                            wr2.className = `piece wr square-${b}`
                            dichuyen()
                        }
                        div.appendChild(taoDiv);

                    }
                    break;
                }
            } else break
        }
        temp = false;
    } else {
        wr2.style.backgroundColor = "transparent";
        let nameClass = wr2.className.toString()
        xe(nameClass)
        tren = 1;
        duoi = 1;
        trai = 1;
        phai = 1;
        temp = true;
    }
}
//Di chuyen ma
wn1.onclick = function () {
    if (temp == true) {
        wn1.style.backgroundColor = "#957373ad";
        let nameClass = wn1.className.toString()
        if (kt(diachi(nameClass) + 12) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) + 12}`) == null) {
                let taoDiv = document.createElement("div")
                taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + 12}`);
                taoDiv.style.backgroundColor = "#957373ad";
                taoDiv.onclick = function () {
                    wn1.style.backgroundColor = "transparent";
                    let x = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                    div.removeChild(x);
                    let a = diachi(nameClass)
                    banco[a % 10 - 1 + 2][(a - a % 10) / 10 - 1 + 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                    banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                    console.log(banco)
                    let b = diachi(nameClass) + 12;
                    if (kt(diachi(nameClass) + 21) == 1) {
                        let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                        if (dc21 != null) {
                            if (anduoc(dc21.className.toString()) == 1) {
                                let xoadc21 = document.querySelector(`.hover10`);
                                div.removeChild(xoadc21);
                            }
                            if (dc21.classList.contains('hover') == true) {
                                let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                                div.removeChild(xoadc21);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 19) == 1) {
                        let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                        if (dc19 != null) {
                            if (anduoc(dc19.className.toString()) == 1) {
                                let xoadc19 = document.querySelector(`.hover9`);
                                div.removeChild(xoadc19);
                            }
                            if (dc19.classList.contains('hover') == true) {
                                let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                                div.removeChild(xoadc19);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 8) == 1) {
                        let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                        if (dc8 != null) {
                            if (anduoc(dc8.className.toString()) == 1) {
                                let xoadc8 = document.querySelector(`.hover1`);
                                div.removeChild(xoadc8);
                            }
                            if (dc8.classList.contains('hover') == true) {
                                let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                                div.removeChild(xoadc8);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 8) == 1) {
                        let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                        if (dc_8 != null) {
                            if (anduoc(dc_8.className.toString()) == 1) {
                                let xoadc_8 = document.querySelector(`.hover-1`);
                                div.removeChild(xoadc_8);
                            }
                            if (dc_8.classList.contains('hover') == true) {
                                let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                                div.removeChild(xoadc_8);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 12) == 1) {
                        let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                        if (dc_12 != null) {
                            if (anduoc(dc_12.className.toString()) == 1) {
                                let xoadc_12 = document.querySelector(`.hover-11`);
                                div.removeChild(xoadc_12);
                            }
                            if (dc_12.classList.contains('hover') == true) {
                                let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                                div.removeChild(xoadc_12);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 19) == 1) {
                        let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                        if (dc_19 != null) {
                            if (anduoc(dc_19.className.toString()) == 1) {
                                let xoadc_19 = document.querySelector(`.hover-9`);
                                div.removeChild(xoadc_19);
                            }
                            if (dc_19.classList.contains('hover') == true) {
                                let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                                div.removeChild(xoadc_19);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 21) == 1) {
                        let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                        if (dc_21 != null) {
                            if (anduoc(dc_21.className.toString()) == 1) {
                                let xoadc_21 = document.querySelector(`.hover-10`);
                                div.removeChild(xoadc_21);
                            }
                            if (dc_21.classList.contains('hover') == true) {
                                let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                                div.removeChild(xoadc_21);
                            }
                        }
                    }
                    temp = true;
                    wn1.className = `piece wn square-${b}`
                    dichuyen()
                }
                div.appendChild(taoDiv);
            } else {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) + 12}`).className.toString()) == 1) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover11", `square-${diachi(nameClass) + 12}`);
                    taoDiv.style.backgroundColor = "#ff000080";
                    taoDiv.onclick = function () {
                        wn1.style.backgroundColor = "transparent";
                        div.removeChild(taoDiv);
                        let b = diachi(nameClass) + 12;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + 2][(a - a % 10) / 10 - 1 + 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        if (kt(diachi(nameClass) + 21) == 1) {
                            let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                            if (dc21 != null) {
                                if (anduoc(dc21.className.toString()) == 1) {
                                    let xoadc21 = document.querySelector(`.hover10`);
                                    div.removeChild(xoadc21);
                                }
                                if (dc21.classList.contains('hover') == true) {
                                    let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                                    div.removeChild(xoadc21);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 19) == 1) {
                            let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                            if (dc19 != null) {
                                if (anduoc(dc19.className.toString()) == 1) {
                                    let xoadc19 = document.querySelector(`.hover9`);
                                    div.removeChild(xoadc19);
                                }
                                if (dc19.classList.contains('hover') == true) {
                                    let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                                    div.removeChild(xoadc19);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 8) == 1) {
                            let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                            if (dc8 != null) {
                                if (anduoc(dc8.className.toString()) == 1) {
                                    let xoadc8 = document.querySelector(`.hover1`);
                                    div.removeChild(xoadc8);
                                }
                                if (dc8.classList.contains('hover') == true) {
                                    let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                                    div.removeChild(xoadc8);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 8) == 1) {
                            let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                            if (dc_8 != null) {
                                if (anduoc(dc_8.className.toString()) == 1) {
                                    let xoadc_8 = document.querySelector(`.hover-1`);
                                    div.removeChild(xoadc_8);
                                }
                                if (dc_8.classList.contains('hover') == true) {
                                    let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                                    div.removeChild(xoadc_8);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 12) == 1) {
                            let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                            if (dc_12 != null) {
                                if (anduoc(dc_12.className.toString()) == 1) {
                                    let xoadc_12 = document.querySelector(`.hover-11`);
                                    div.removeChild(xoadc_12);
                                }
                                if (dc_12.classList.contains('hover') == true) {
                                    let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                                    div.removeChild(xoadc_12);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 19) == 1) {
                            let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                            if (dc_19 != null) {
                                if (anduoc(dc_19.className.toString()) == 1) {
                                    let xoadc_19 = document.querySelector(`.hover-9`);
                                    div.removeChild(xoadc_19);
                                }
                                if (dc_19.classList.contains('hover') == true) {
                                    let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                                    div.removeChild(xoadc_19);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 21) == 1) {
                            let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                            if (dc_21 != null) {
                                if (anduoc(dc_21.className.toString()) == 1) {
                                    let xoadc_21 = document.querySelector(`.hover-10`);
                                    div.removeChild(xoadc_21);
                                }
                                if (dc_21.classList.contains('hover') == true) {
                                    let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                                    div.removeChild(xoadc_21);
                                }
                            }
                        }
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                        div.removeChild(an);
                        wn1.className = `piece wn square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);

                }
            }
        }
        if (kt(diachi(nameClass) + 21) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) + 21}`) == null) {
                let taoDiv = document.createElement("div")
                taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + 21}`);
                taoDiv.style.backgroundColor = "#957373ad";
                taoDiv.onclick = function () {
                    wn1.style.backgroundColor = "transparent";
                    div.removeChild(taoDiv);
                    let b = diachi(nameClass) + 21;
                    let a = diachi(nameClass)
                    banco[a % 10 - 1 + 1][(a - a % 10) / 10 - 1 + 2] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                    banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                    if (kt(diachi(nameClass) + 12) == 1) {
                        let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                        if (dc12 != null) {
                            if (anduoc(dc12.className.toString()) == 1) {
                                let xoadc12 = document.querySelector(`.hover11`);
                                div.removeChild(xoadc12);
                            }
                            if (dc12.classList.contains('hover') == true) {
                                let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                                div.removeChild(xoadc12);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 19) == 1) {
                        let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                        if (dc19 != null) {
                            if (anduoc(dc19.className.toString()) == 1) {
                                let xoadc19 = document.querySelector(`.hover9`);
                                div.removeChild(xoadc19);
                            }
                            if (dc19.classList.contains('hover') == true) {
                                let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                                div.removeChild(xoadc19);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 8) == 1) {
                        let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                        if (dc8 != null) {
                            if (anduoc(dc8.className.toString()) == 1) {
                                let xoadc8 = document.querySelector(`.hover1`);
                                div.removeChild(xoadc8);
                            }
                            if (dc8.classList.contains('hover') == true) {
                                let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                                div.removeChild(xoadc8);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 8) == 1) {
                        let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                        if (dc_8 != null) {
                            if (anduoc(dc_8.className.toString()) == 1) {
                                let xoadc_8 = document.querySelector(`.hover-1`);
                                div.removeChild(xoadc_8);
                            }
                            if (dc_8.classList.contains('hover') == true) {
                                let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                                div.removeChild(xoadc_8);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 12) == 1) {
                        let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                        if (dc_12 != null) {
                            if (anduoc(dc_12.className.toString()) == 1) {
                                let xoadc_12 = document.querySelector(`.hover-11`);
                                div.removeChild(xoadc_12);
                            }
                            if (dc_12.classList.contains('hover') == true) {
                                let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                                div.removeChild(xoadc_12);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 19) == 1) {
                        let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                        if (dc_19 != null) {
                            if (anduoc(dc_19.className.toString()) == 1) {
                                let xoadc_19 = document.querySelector(`.hover-9`);
                                div.removeChild(xoadc_19);
                            }
                            if (dc_19.classList.contains('hover') == true) {
                                let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                                div.removeChild(xoadc_19);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 21) == 1) {
                        let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                        if (dc_21 != null) {
                            if (anduoc(dc_21.className.toString()) == 1) {
                                let xoadc_21 = document.querySelector(`.hover-10`);
                                div.removeChild(xoadc_21);
                            }
                            if (dc_21.classList.contains('hover') == true) {
                                let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                                div.removeChild(xoadc_21);
                            }
                        }
                    }
                    temp = true;
                    wn1.className = `piece wn square-${b}`
                    dichuyen()
                }
                div.appendChild(taoDiv);
            } else {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) + 21}`).className.toString()) == 1) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover10", `square-${diachi(nameClass) + 21}`);
                    taoDiv.style.backgroundColor = "#ff000080";
                    taoDiv.onclick = function () {
                        wn1.style.backgroundColor = "transparent";
                        div.removeChild(taoDiv);
                        let b = diachi(nameClass) + 21;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + 1][(a - a % 10) / 10 - 1 + 2] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        if (kt(diachi(nameClass) + 12) == 1) {
                            let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                            if (dc12 != null) {
                                if (anduoc(dc12.className.toString()) == 1) {
                                    let xoadc12 = document.querySelector(`.hover11`);
                                    div.removeChild(xoadc12);
                                }
                                if (dc12.classList.contains('hover') == true) {
                                    let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                                    div.removeChild(xoadc12);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 19) == 1) {
                            let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                            if (dc19 != null) {
                                if (anduoc(dc19.className.toString()) == 1) {
                                    let xoadc19 = document.querySelector(`.hover9`);
                                    div.removeChild(xoadc19);
                                }
                                if (dc19.classList.contains('hover') == true) {
                                    let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                                    div.removeChild(xoadc19);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 8) == 1) {
                            let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                            if (dc8 != null) {
                                if (anduoc(dc8.className.toString()) == 1) {
                                    let xoadc8 = document.querySelector(`.hover1`);
                                    div.removeChild(xoadc8);
                                }
                                if (dc8.classList.contains('hover') == true) {
                                    let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                                    div.removeChild(xoadc8);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 8) == 1) {
                            let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                            if (dc_8 != null) {
                                if (anduoc(dc_8.className.toString()) == 1) {
                                    let xoadc_8 = document.querySelector(`.hover-1`);
                                    div.removeChild(xoadc_8);
                                }
                                if (dc_8.classList.contains('hover') == true) {
                                    let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                                    div.removeChild(xoadc_8);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 12) == 1) {
                            let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                            if (dc_12 != null) {
                                if (anduoc(dc_12.className.toString()) == 1) {
                                    let xoadc_12 = document.querySelector(`.hover-11`);
                                    div.removeChild(xoadc_12);
                                }
                                if (dc_12.classList.contains('hover') == true) {
                                    let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                                    div.removeChild(xoadc_12);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 19) == 1) {
                            let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                            if (dc_19 != null) {
                                if (anduoc(dc_19.className.toString()) == 1) {
                                    let xoadc_19 = document.querySelector(`.hover-9`);
                                    div.removeChild(xoadc_19);
                                }
                                if (dc_19.classList.contains('hover') == true) {
                                    let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                                    div.removeChild(xoadc_19);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 21) == 1) {
                            let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                            if (dc_21 != null) {
                                if (anduoc(dc_21.className.toString()) == 1) {
                                    let xoadc_21 = document.querySelector(`.hover-10`);
                                    div.removeChild(xoadc_21);
                                }
                                if (dc_21.classList.contains('hover') == true) {
                                    let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                                    div.removeChild(xoadc_21);
                                }
                            }
                        }
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                        div.removeChild(an);
                        wn1.className = `piece wn square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                }
            }
        }
        if (kt(diachi(nameClass) + 19) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) + 19}`) == null) {
                let taoDiv = document.createElement("div")
                taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + 19}`);
                taoDiv.style.backgroundColor = "#957373ad";
                taoDiv.onclick = function () {
                    wn1.style.backgroundColor = "transparent";
                    div.removeChild(taoDiv);
                    let b = diachi(nameClass) + 19;
                    let a = diachi(nameClass)
                    banco[a % 10 - 1 - 1][(a - a % 10) / 10 - 1 + 2] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                    banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                    if (kt(diachi(nameClass) + 21) == 1) {
                        let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                        if (dc21 != null) {
                            if (anduoc(dc21.className.toString()) == 1) {
                                let xoadc21 = document.querySelector(`.hover10`);
                                div.removeChild(xoadc21);
                            }
                            if (dc21.classList.contains('hover') == true) {
                                let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                                div.removeChild(xoadc21);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 12) == 1) {
                        let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                        if (dc12 != null) {
                            if (anduoc(dc12.className.toString()) == 1) {
                                let xoadc12 = document.querySelector(`.hover11`);
                                div.removeChild(xoadc12);
                            }
                            if (dc12.classList.contains('hover') == true) {
                                let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                                div.removeChild(xoadc12);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 8) == 1) {
                        let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                        if (dc8 != null) {
                            if (anduoc(dc8.className.toString()) == 1) {
                                let xoadc8 = document.querySelector(`.hover1`);
                                div.removeChild(xoadc8);
                            }
                            if (dc8.classList.contains('hover') == true) {
                                let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                                div.removeChild(xoadc8);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 8) == 1) {
                        let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                        if (dc_8 != null) {
                            if (anduoc(dc_8.className.toString()) == 1) {
                                let xoadc_8 = document.querySelector(`.hover-1`);
                                div.removeChild(xoadc_8);
                            }
                            if (dc_8.classList.contains('hover') == true) {
                                let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                                div.removeChild(xoadc_8);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 12) == 1) {
                        let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                        if (dc_12 != null) {
                            if (anduoc(dc_12.className.toString()) == 1) {
                                let xoadc_12 = document.querySelector(`.hover-11`);
                                div.removeChild(xoadc_12);
                            }
                            if (dc_12.classList.contains('hover') == true) {
                                let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                                div.removeChild(xoadc_12);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 19) == 1) {
                        let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                        if (dc_19 != null) {
                            if (anduoc(dc_19.className.toString()) == 1) {
                                let xoadc_19 = document.querySelector(`.hover-9`);
                                div.removeChild(xoadc_19);
                            }
                            if (dc_19.classList.contains('hover') == true) {
                                let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                                div.removeChild(xoadc_19);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 21) == 1) {
                        let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                        if (dc_21 != null) {
                            if (anduoc(dc_21.className.toString()) == 1) {
                                let xoadc_21 = document.querySelector(`.hover-10`);
                                div.removeChild(xoadc_21);
                            }
                            if (dc_21.classList.contains('hover') == true) {
                                let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                                div.removeChild(xoadc_21);
                            }
                        }
                    }
                    temp = true;
                    wn1.className = `piece wn square-${b}`
                    dichuyen()
                }
                div.appendChild(taoDiv);
            } else {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) + 19}`).className.toString()) == 1) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover9", `square-${diachi(nameClass) + 19}`);
                    taoDiv.style.backgroundColor = "#ff000080";
                    taoDiv.onclick = function () {
                        wn1.style.backgroundColor = "transparent";
                        div.removeChild(taoDiv);
                        let b = diachi(nameClass) + 19;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - 1][(a - a % 10) / 10 - 1 + 2] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        if (kt(diachi(nameClass) + 21) == 1) {
                            let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                            if (dc21 != null) {
                                if (anduoc(dc21.className.toString()) == 1) {
                                    let xoadc21 = document.querySelector(`.hover10`);
                                    div.removeChild(xoadc21);
                                }
                                if (dc21.classList.contains('hover') == true) {
                                    let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                                    div.removeChild(xoadc21);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 12) == 1) {
                            let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                            if (dc12 != null) {
                                if (anduoc(dc12.className.toString()) == 1) {
                                    let xoadc12 = document.querySelector(`.hover11`);
                                    div.removeChild(xoadc12);
                                }
                                if (dc12.classList.contains('hover') == true) {
                                    let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                                    div.removeChild(xoadc12);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 8) == 1) {
                            let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                            if (dc8 != null) {
                                if (anduoc(dc8.className.toString()) == 1) {
                                    let xoadc8 = document.querySelector(`.hover1`);
                                    div.removeChild(xoadc8);
                                }
                                if (dc8.classList.contains('hover') == true) {
                                    let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                                    div.removeChild(xoadc8);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 8) == 1) {
                            let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                            if (dc_8 != null) {
                                if (anduoc(dc_8.className.toString()) == 1) {
                                    let xoadc_8 = document.querySelector(`.hover-1`);
                                    div.removeChild(xoadc_8);
                                }
                                if (dc_8.classList.contains('hover') == true) {
                                    let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                                    div.removeChild(xoadc_8);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 12) == 1) {
                            let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                            if (dc_12 != null) {
                                if (anduoc(dc_12.className.toString()) == 1) {
                                    let xoadc_12 = document.querySelector(`.hover-11`);
                                    div.removeChild(xoadc_12);
                                }
                                if (dc_12.classList.contains('hover') == true) {
                                    let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                                    div.removeChild(xoadc_12);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 19) == 1) {
                            let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                            if (dc_19 != null) {
                                if (anduoc(dc_19.className.toString()) == 1) {
                                    let xoadc_19 = document.querySelector(`.hover-9`);
                                    div.removeChild(xoadc_19);
                                }
                                if (dc_19.classList.contains('hover') == true) {
                                    let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                                    div.removeChild(xoadc_19);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 21) == 1) {
                            let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                            if (dc_21 != null) {
                                if (anduoc(dc_21.className.toString()) == 1) {
                                    let xoadc_21 = document.querySelector(`.hover-10`);
                                    div.removeChild(xoadc_21);
                                }
                                if (dc_21.classList.contains('hover') == true) {
                                    let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                                    div.removeChild(xoadc_21);
                                }
                            }
                        }
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                        div.removeChild(an);
                        wn1.className = `piece wn square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);

                }
            }
        }
        if (kt(diachi(nameClass) + 8) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) + 8}`) == null) {
                let taoDiv = document.createElement("div")
                taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + 8}`);
                taoDiv.style.backgroundColor = "#957373ad";
                taoDiv.onclick = function () {
                    wn1.style.backgroundColor = "transparent";
                    div.removeChild(taoDiv);
                    let b = diachi(nameClass) + 8;
                    let a = diachi(nameClass)
                    banco[a % 10 - 1 - 2][(a - a % 10) / 10 - 1 + 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                    banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                    if (kt(diachi(nameClass) + 21) == 1) {
                        let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                        if (dc21 != null) {
                            if (anduoc(dc21.className.toString()) == 1) {
                                let xoadc21 = document.querySelector(`.hover10`);
                                div.removeChild(xoadc21);
                            }
                            if (dc21.classList.contains('hover') == true) {
                                let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                                div.removeChild(xoadc21);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 19) == 1) {
                        let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                        if (dc19 != null) {
                            if (anduoc(dc19.className.toString()) == 1) {
                                let xoadc19 = document.querySelector(`.hover9`);
                                div.removeChild(xoadc19);
                            }
                            if (dc19.classList.contains('hover') == true) {
                                let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                                div.removeChild(xoadc19);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 12) == 1) {
                        let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                        if (dc12 != null) {
                            if (anduoc(dc12.className.toString()) == 1) {
                                let xoadc12 = document.querySelector(`.hover11`);
                                div.removeChild(xoadc12);
                            }
                            if (dc12.classList.contains('hover') == true) {
                                let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                                div.removeChild(xoadc12);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 8) == 1) {
                        let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                        if (dc_8 != null) {
                            if (anduoc(dc_8.className.toString()) == 1) {
                                let xoadc_8 = document.querySelector(`.hover-1`);
                                div.removeChild(xoadc_8);
                            }
                            if (dc_8.classList.contains('hover') == true) {
                                let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                                div.removeChild(xoadc_8);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 12) == 1) {
                        let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                        if (dc_12 != null) {
                            if (anduoc(dc_12.className.toString()) == 1) {
                                let xoadc_12 = document.querySelector(`.hover-11`);
                                div.removeChild(xoadc_12);
                            }
                            if (dc_12.classList.contains('hover') == true) {
                                let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                                div.removeChild(xoadc_12);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 19) == 1) {
                        let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                        if (dc_19 != null) {
                            if (anduoc(dc_19.className.toString()) == 1) {
                                let xoadc_19 = document.querySelector(`.hover-9`);
                                div.removeChild(xoadc_19);
                            }
                            if (dc_19.classList.contains('hover') == true) {
                                let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                                div.removeChild(xoadc_19);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 21) == 1) {
                        let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                        if (dc_21 != null) {
                            if (anduoc(dc_21.className.toString()) == 1) {
                                let xoadc_21 = document.querySelector(`.hover-10`);
                                div.removeChild(xoadc_21);
                            }
                            if (dc_21.classList.contains('hover') == true) {
                                let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                                div.removeChild(xoadc_21);
                            }
                        }
                    }
                    temp = true;
                    wn1.className = `piece wn square-${b}`
                    dichuyen()
                }
                div.appendChild(taoDiv);
            } else {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) + 8}`).className.toString()) == 1) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover1", `square-${diachi(nameClass) + 8}`);
                    taoDiv.style.backgroundColor = "#ff000080";
                    taoDiv.onclick = function () {
                        wn1.style.backgroundColor = "transparent";
                        div.removeChild(taoDiv);
                        let b = diachi(nameClass) + 8;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - 2][(a - a % 10) / 10 - 1 + 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        if (kt(diachi(nameClass) + 21) == 1) {
                            let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                            if (dc21 != null) {
                                if (anduoc(dc21.className.toString()) == 1) {
                                    let xoadc21 = document.querySelector(`.hover10`);
                                    div.removeChild(xoadc21);
                                }
                                if (dc21.classList.contains('hover') == true) {
                                    let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                                    div.removeChild(xoadc21);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 19) == 1) {
                            let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                            if (dc19 != null) {
                                if (anduoc(dc19.className.toString()) == 1) {
                                    let xoadc19 = document.querySelector(`.hover9`);
                                    div.removeChild(xoadc19);
                                }
                                if (dc19.classList.contains('hover') == true) {
                                    let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                                    div.removeChild(xoadc19);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 12) == 1) {
                            let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                            if (dc12 != null) {
                                if (anduoc(dc12.className.toString()) == 1) {
                                    let xoadc12 = document.querySelector(`.hover11`);
                                    div.removeChild(xoadc12);
                                }
                                if (dc12.classList.contains('hover') == true) {
                                    let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                                    div.removeChild(xoadc12);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 8) == 1) {
                            let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                            if (dc_8 != null) {
                                if (anduoc(dc_8.className.toString()) == 1) {
                                    let xoadc_8 = document.querySelector(`.hover-1`);
                                    div.removeChild(xoadc_8);
                                }
                                if (dc_8.classList.contains('hover') == true) {
                                    let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                                    div.removeChild(xoadc_8);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 12) == 1) {
                            let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                            if (dc_12 != null) {
                                if (anduoc(dc_12.className.toString()) == 1) {
                                    let xoadc_12 = document.querySelector(`.hover-11`);
                                    div.removeChild(xoadc_12);
                                }
                                if (dc_12.classList.contains('hover') == true) {
                                    let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                                    div.removeChild(xoadc_12);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 19) == 1) {
                            let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                            if (dc_19 != null) {
                                if (anduoc(dc_19.className.toString()) == 1) {
                                    let xoadc_19 = document.querySelector(`.hover-9`);
                                    div.removeChild(xoadc_19);
                                }
                                if (dc_19.classList.contains('hover') == true) {
                                    let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                                    div.removeChild(xoadc_19);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 21) == 1) {
                            let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                            if (dc_21 != null) {
                                if (anduoc(dc_21.className.toString()) == 1) {
                                    let xoadc_21 = document.querySelector(`.hover-10`);
                                    div.removeChild(xoadc_21);
                                }
                                if (dc_21.classList.contains('hover') == true) {
                                    let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                                    div.removeChild(xoadc_21);
                                }
                            }
                        }
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                        div.removeChild(an);
                        wn1.className = `piece wn square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);

                }
            }
        }
        if (kt(diachi(nameClass) - 8) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) - 8}`) == null) {
                let taoDiv = document.createElement("div")
                taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) - 8}`);
                taoDiv.style.backgroundColor = "#957373ad";
                taoDiv.onclick = function () {
                    wn1.style.backgroundColor = "transparent";
                    div.removeChild(taoDiv);
                    let b = diachi(nameClass) - 8;
                    let a = diachi(nameClass)
                    banco[a % 10 - 1 + 2][(a - a % 10) / 10 - 1 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                    banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                    if (kt(diachi(nameClass) + 21) == 1) {
                        let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                        if (dc21 != null) {
                            if (anduoc(dc21.className.toString()) == 1) {
                                let xoadc21 = document.querySelector(`.hover10`);
                                div.removeChild(xoadc21);
                            }
                            if (dc21.classList.contains('hover') == true) {
                                let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                                div.removeChild(xoadc21);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 19) == 1) {
                        let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                        if (dc19 != null) {
                            if (anduoc(dc19.className.toString()) == 1) {
                                let xoadc19 = document.querySelector(`.hover9`);
                                div.removeChild(xoadc19);
                            }
                            if (dc19.classList.contains('hover') == true) {
                                let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                                div.removeChild(xoadc19);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 8) == 1) {
                        let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                        if (dc8 != null) {
                            if (anduoc(dc8.className.toString()) == 1) {
                                let xoadc8 = document.querySelector(`.hover1`);
                                div.removeChild(xoadc8);
                            }
                            if (dc8.classList.contains('hover') == true) {
                                let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                                div.removeChild(xoadc8);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 12) == 1) {
                        let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                        if (dc12 != null) {
                            if (anduoc(dc12.className.toString()) == 1) {
                                let xoadc12 = document.querySelector(`.hover11`);
                                div.removeChild(xoadc12);
                            }
                            if (dc12.classList.contains('hover') == true) {
                                let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                                div.removeChild(xoadc12);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 12) == 1) {
                        let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                        if (dc_12 != null) {
                            if (anduoc(dc_12.className.toString()) == 1) {
                                let xoadc_12 = document.querySelector(`.hover-11`);
                                div.removeChild(xoadc_12);
                            }
                            if (dc_12.classList.contains('hover') == true) {
                                let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                                div.removeChild(xoadc_12);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 19) == 1) {
                        let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                        if (dc_19 != null) {
                            if (anduoc(dc_19.className.toString()) == 1) {
                                let xoadc_19 = document.querySelector(`.hover-9`);
                                div.removeChild(xoadc_19);
                            }
                            if (dc_19.classList.contains('hover') == true) {
                                let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                                div.removeChild(xoadc_19);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 21) == 1) {
                        let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                        if (dc_21 != null) {
                            if (anduoc(dc_21.className.toString()) == 1) {
                                let xoadc_21 = document.querySelector(`.hover-10`);
                                div.removeChild(xoadc_21);
                            }
                            if (dc_21.classList.contains('hover') == true) {
                                let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                                div.removeChild(xoadc_21);
                            }
                        }
                    }
                    temp = true;
                    wn1.className = `piece wn square-${b}`
                    dichuyen()
                }
                div.appendChild(taoDiv);
            } else {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) - 8}`).className.toString()) == 1) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover-1", `square-${diachi(nameClass) - 8}`);
                    taoDiv.style.backgroundColor = "#ff000080";
                    taoDiv.onclick = function () {
                        wn1.style.backgroundColor = "transparent";
                        div.removeChild(taoDiv);
                        let b = diachi(nameClass) - 8;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + 2][(a - a % 10) / 10 - 1 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        if (kt(diachi(nameClass) + 21) == 1) {
                            let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                            if (dc21 != null) {
                                if (anduoc(dc21.className.toString()) == 1) {
                                    let xoadc21 = document.querySelector(`.hover10`);
                                    div.removeChild(xoadc21);
                                }
                                if (dc21.classList.contains('hover') == true) {
                                    let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                                    div.removeChild(xoadc21);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 19) == 1) {
                            let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                            if (dc19 != null) {
                                if (anduoc(dc19.className.toString()) == 1) {
                                    let xoadc19 = document.querySelector(`.hover9`);
                                    div.removeChild(xoadc19);
                                }
                                if (dc19.classList.contains('hover') == true) {
                                    let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                                    div.removeChild(xoadc19);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 8) == 1) {
                            let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                            if (dc8 != null) {
                                if (anduoc(dc8.className.toString()) == 1) {
                                    let xoadc8 = document.querySelector(`.hover1`);
                                    div.removeChild(xoadc8);
                                }
                                if (dc8.classList.contains('hover') == true) {
                                    let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                                    div.removeChild(xoadc8);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 12) == 1) {
                            let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                            if (dc12 != null) {
                                if (anduoc(dc12.className.toString()) == 1) {
                                    let xoadc12 = document.querySelector(`.hover11`);
                                    div.removeChild(xoadc12);
                                }
                                if (dc12.classList.contains('hover') == true) {
                                    let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                                    div.removeChild(xoadc12);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 12) == 1) {
                            let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                            if (dc_12 != null) {
                                if (anduoc(dc_12.className.toString()) == 1) {
                                    let xoadc_12 = document.querySelector(`.hover-11`);
                                    div.removeChild(xoadc_12);
                                }
                                if (dc_12.classList.contains('hover') == true) {
                                    let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                                    div.removeChild(xoadc_12);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 19) == 1) {
                            let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                            if (dc_19 != null) {
                                if (anduoc(dc_19.className.toString()) == 1) {
                                    let xoadc_19 = document.querySelector(`.hover-9`);
                                    div.removeChild(xoadc_19);
                                }
                                if (dc_19.classList.contains('hover') == true) {
                                    let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                                    div.removeChild(xoadc_19);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 21) == 1) {
                            let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                            if (dc_21 != null) {
                                if (anduoc(dc_21.className.toString()) == 1) {
                                    let xoadc_21 = document.querySelector(`.hover-10`);
                                    div.removeChild(xoadc_21);
                                }
                                if (dc_21.classList.contains('hover') == true) {
                                    let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                                    div.removeChild(xoadc_21);
                                }
                            }
                        }
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                        div.removeChild(an);
                        wn1.className = `piece wn square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);

                }
            }
        }
        if (kt(diachi(nameClass) - 19) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) - 19}`) == null) {
                let taoDiv = document.createElement("div")
                taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) - 19}`);
                taoDiv.style.backgroundColor = "#957373ad";
                taoDiv.onclick = function () {
                    wn1.style.backgroundColor = "transparent";
                    div.removeChild(taoDiv);
                    let b = diachi(nameClass) - 19;
                    let a = diachi(nameClass)
                    banco[a % 10 - 1 + 1][(a - a % 10) / 10 - 1 - 2] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                    banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                    if (kt(diachi(nameClass) + 21) == 1) {
                        let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                        if (dc21 != null) {
                            if (anduoc(dc21.className.toString()) == 1) {
                                let xoadc21 = document.querySelector(`.hover10`);
                                div.removeChild(xoadc21);
                            }
                            if (dc21.classList.contains('hover') == true) {
                                let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                                div.removeChild(xoadc21);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 19) == 1) {
                        let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                        if (dc19 != null) {
                            if (anduoc(dc19.className.toString()) == 1) {
                                let xoadc19 = document.querySelector(`.hover9`);
                                div.removeChild(xoadc19);
                            }
                            if (dc19.classList.contains('hover') == true) {
                                let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                                div.removeChild(xoadc19);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 8) == 1) {
                        let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                        if (dc8 != null) {
                            if (anduoc(dc8.className.toString()) == 1) {
                                let xoadc8 = document.querySelector(`.hover1`);
                                div.removeChild(xoadc8);
                            }
                            if (dc8.classList.contains('hover') == true) {
                                let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                                div.removeChild(xoadc8);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 8) == 1) {
                        let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                        if (dc_8 != null) {
                            if (anduoc(dc_8.className.toString()) == 1) {
                                let xoadc_8 = document.querySelector(`.hover-1`);
                                div.removeChild(xoadc_8);
                            }
                            if (dc_8.classList.contains('hover') == true) {
                                let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                                div.removeChild(xoadc_8);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 12) == 1) {
                        let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                        if (dc_12 != null) {
                            if (anduoc(dc_12.className.toString()) == 1) {
                                let xoadc_12 = document.querySelector(`.hover-11`);
                                div.removeChild(xoadc_12);
                            }
                            if (dc_12.classList.contains('hover') == true) {
                                let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                                div.removeChild(xoadc_12);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 12) == 1) {
                        let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                        if (dc12 != null) {
                            if (anduoc(dc12.className.toString()) == 1) {
                                let xoadc12 = document.querySelector(`.hover11`);
                                div.removeChild(xoadc12);
                            }
                            if (dc12.classList.contains('hover') == true) {
                                let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                                div.removeChild(xoadc12);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 21) == 1) {
                        let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                        if (dc_21 != null) {
                            if (anduoc(dc_21.className.toString()) == 1) {
                                let xoadc_21 = document.querySelector(`.hover-10`);
                                div.removeChild(xoadc_21);
                            }
                            if (dc_21.classList.contains('hover') == true) {
                                let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                                div.removeChild(xoadc_21);
                            }
                        }
                    }
                    temp = true;
                    wn1.className = `piece wn square-${b}`
                    dichuyen()
                }
                div.appendChild(taoDiv);
            } else {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) - 19}`).className.toString()) == 1) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover-9", `square-${diachi(nameClass) - 19}`);
                    taoDiv.style.backgroundColor = "#ff000080";
                    taoDiv.onclick = function () {
                        wn1.style.backgroundColor = "transparent";
                        div.removeChild(taoDiv);
                        let b = diachi(nameClass) - 19;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + 1][(a - a % 10) / 10 - 1 - 2] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        if (kt(diachi(nameClass) + 21) == 1) {
                            let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                            if (dc21 != null) {
                                if (anduoc(dc21.className.toString()) == 1) {
                                    let xoadc21 = document.querySelector(`.hover10`);
                                    div.removeChild(xoadc21);
                                }
                                if (dc21.classList.contains('hover') == true) {
                                    let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                                    div.removeChild(xoadc21);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 19) == 1) {
                            let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                            if (dc19 != null) {
                                if (anduoc(dc19.className.toString()) == 1) {
                                    let xoadc19 = document.querySelector(`.hover9`);
                                    div.removeChild(xoadc19);
                                }
                                if (dc19.classList.contains('hover') == true) {
                                    let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                                    div.removeChild(xoadc19);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 8) == 1) {
                            let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                            if (dc8 != null) {
                                if (anduoc(dc8.className.toString()) == 1) {
                                    let xoadc8 = document.querySelector(`.hover1`);
                                    div.removeChild(xoadc8);
                                }
                                if (dc8.classList.contains('hover') == true) {
                                    let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                                    div.removeChild(xoadc8);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 8) == 1) {
                            let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                            if (dc_8 != null) {
                                if (anduoc(dc_8.className.toString()) == 1) {
                                    let xoadc_8 = document.querySelector(`.hover-1`);
                                    div.removeChild(xoadc_8);
                                }
                                if (dc_8.classList.contains('hover') == true) {
                                    let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                                    div.removeChild(xoadc_8);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 12) == 1) {
                            let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                            if (dc_12 != null) {
                                if (anduoc(dc_12.className.toString()) == 1) {
                                    let xoadc_12 = document.querySelector(`.hover-11`);
                                    div.removeChild(xoadc_12);
                                }
                                if (dc_12.classList.contains('hover') == true) {
                                    let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                                    div.removeChild(xoadc_12);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 12) == 1) {
                            let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                            if (dc12 != null) {
                                if (anduoc(dc12.className.toString()) == 1) {
                                    let xoadc12 = document.querySelector(`.hover11`);
                                    div.removeChild(xoadc12);
                                }
                                if (dc12.classList.contains('hover') == true) {
                                    let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                                    div.removeChild(xoadc12);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 21) == 1) {
                            let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                            if (dc_21 != null) {
                                if (anduoc(dc_21.className.toString()) == 1) {
                                    let xoadc_21 = document.querySelector(`.hover-10`);
                                    div.removeChild(xoadc_21);
                                }
                                if (dc_21.classList.contains('hover') == true) {
                                    let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                                    div.removeChild(xoadc_21);
                                }
                            }
                        }
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                        div.removeChild(an);
                        wn1.className = `piece wn square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);

                }
            }
        }
        if (kt(diachi(nameClass) - 21) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) - 21}`) == null) {
                let taoDiv = document.createElement("div")
                taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) - 21}`);
                taoDiv.style.backgroundColor = "#957373ad";
                taoDiv.onclick = function () {
                    wn1.style.backgroundColor = "transparent";
                    div.removeChild(taoDiv);
                    let b = diachi(nameClass) - 21;
                    let a = diachi(nameClass)
                    banco[a % 10 - 1 - 1][(a - a % 10) / 10 - 1 - 2] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                    banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                    if (kt(diachi(nameClass) + 21) == 1) {
                        let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                        if (dc21 != null) {
                            if (anduoc(dc21.className.toString()) == 1) {
                                let xoadc21 = document.querySelector(`.hover10`);
                                div.removeChild(xoadc21);
                            }
                            if (dc21.classList.contains('hover') == true) {
                                let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                                div.removeChild(xoadc21);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 19) == 1) {
                        let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                        if (dc19 != null) {
                            if (anduoc(dc19.className.toString()) == 1) {
                                let xoadc19 = document.querySelector(`.hover9`);
                                div.removeChild(xoadc19);
                            }
                            if (dc19.classList.contains('hover') == true) {
                                let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                                div.removeChild(xoadc19);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 8) == 1) {
                        let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                        if (dc8 != null) {
                            if (anduoc(dc8.className.toString()) == 1) {
                                let xoadc8 = document.querySelector(`.hover1`);
                                div.removeChild(xoadc8);
                            }
                            if (dc8.classList.contains('hover') == true) {
                                let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                                div.removeChild(xoadc8);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 8) == 1) {
                        let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                        if (dc_8 != null) {
                            if (anduoc(dc_8.className.toString()) == 1) {
                                let xoadc_8 = document.querySelector(`.hover-1`);
                                div.removeChild(xoadc_8);
                            }
                            if (dc_8.classList.contains('hover') == true) {
                                let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                                div.removeChild(xoadc_8);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 12) == 1) {
                        let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                        if (dc_12 != null) {
                            if (anduoc(dc_12.className.toString()) == 1) {
                                let xoadc_12 = document.querySelector(`.hover-11`);
                                div.removeChild(xoadc_12);
                            }
                            if (dc_12.classList.contains('hover') == true) {
                                let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                                div.removeChild(xoadc_12);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 19) == 1) {
                        let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                        if (dc_19 != null) {
                            if (anduoc(dc_19.className.toString()) == 1) {
                                let xoadc_19 = document.querySelector(`.hover-9`);
                                div.removeChild(xoadc_19);
                            }
                            if (dc_19.classList.contains('hover') == true) {
                                let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                                div.removeChild(xoadc_19);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 12) == 1) {
                        let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                        if (dc12 != null) {
                            if (anduoc(dc12.className.toString()) == 1) {
                                let xoadc12 = document.querySelector(`.hover11`);
                                div.removeChild(xoadc12);
                            }
                            if (dc12.classList.contains('hover') == true) {
                                let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                                div.removeChild(xoadc12);
                            }
                        }
                    }
                    temp = true;
                    wn1.className = `piece wn square-${b}`
                    dichuyen()
                }
                div.appendChild(taoDiv);
            } else {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) - 21}`).className.toString()) == 1) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover-10", `square-${diachi(nameClass) - 21}`);
                    taoDiv.style.backgroundColor = "#ff000080";
                    taoDiv.onclick = function () {
                        wn1.style.backgroundColor = "transparent";
                        div.removeChild(taoDiv);
                        let b = diachi(nameClass) - 21;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - 1][(a - a % 10) / 10 - 1 - 2] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        if (kt(diachi(nameClass) + 21) == 1) {
                            let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                            if (dc21 != null) {
                                if (anduoc(dc21.className.toString()) == 1) {
                                    let xoadc21 = document.querySelector(`.hover10`);
                                    div.removeChild(xoadc21);
                                }
                                if (dc21.classList.contains('hover') == true) {
                                    let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                                    div.removeChild(xoadc21);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 19) == 1) {
                            let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                            if (dc19 != null) {
                                if (anduoc(dc19.className.toString()) == 1) {
                                    let xoadc19 = document.querySelector(`.hover9`);
                                    div.removeChild(xoadc19);
                                }
                                if (dc19.classList.contains('hover') == true) {
                                    let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                                    div.removeChild(xoadc19);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 8) == 1) {
                            let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                            if (dc8 != null) {
                                if (anduoc(dc8.className.toString()) == 1) {
                                    let xoadc8 = document.querySelector(`.hover1`);
                                    div.removeChild(xoadc8);
                                }
                                if (dc8.classList.contains('hover') == true) {
                                    let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                                    div.removeChild(xoadc8);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 8) == 1) {
                            let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                            if (dc_8 != null) {
                                if (anduoc(dc_8.className.toString()) == 1) {
                                    let xoadc_8 = document.querySelector(`.hover-1`);
                                    div.removeChild(xoadc_8);
                                }
                                if (dc_8.classList.contains('hover') == true) {
                                    let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                                    div.removeChild(xoadc_8);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 12) == 1) {
                            let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                            if (dc_12 != null) {
                                if (anduoc(dc_12.className.toString()) == 1) {
                                    let xoadc_12 = document.querySelector(`.hover-11`);
                                    div.removeChild(xoadc_12);
                                }
                                if (dc_12.classList.contains('hover') == true) {
                                    let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                                    div.removeChild(xoadc_12);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 19) == 1) {
                            let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                            if (dc_19 != null) {
                                if (anduoc(dc_19.className.toString()) == 1) {
                                    let xoadc_19 = document.querySelector(`.hover-9`);
                                    div.removeChild(xoadc_19);
                                }
                                if (dc_19.classList.contains('hover') == true) {
                                    let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                                    div.removeChild(xoadc_19);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 12) == 1) {
                            let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                            if (dc12 != null) {
                                if (anduoc(dc12.className.toString()) == 1) {
                                    let xoadc12 = document.querySelector(`.hover11`);
                                    div.removeChild(xoadc12);
                                }
                                if (dc12.classList.contains('hover') == true) {
                                    let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                                    div.removeChild(xoadc12);
                                }
                            }
                        }
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                        div.removeChild(an);
                        wn1.className = `piece wn square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);

                }
            }
        }
        if (kt(diachi(nameClass) - 12) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) - 12}`) == null) {
                let taoDiv = document.createElement("div")
                taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) - 12}`);
                taoDiv.style.backgroundColor = "#957373ad";
                taoDiv.onclick = function () {
                    wn1.style.backgroundColor = "transparent";
                    div.removeChild(taoDiv);
                    let b = diachi(nameClass) - 12;
                    let a = diachi(nameClass)
                    banco[a % 10 - 1 - 2][(a - a % 10) / 10 - 1 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                    banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                    if (kt(diachi(nameClass) + 21) == 1) {
                        let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                        if (dc21 != null) {
                            if (anduoc(dc21.className.toString()) == 1) {
                                let xoadc21 = document.querySelector(`.hover10`);
                                div.removeChild(xoadc21);
                            }
                            if (dc21.classList.contains('hover') == true) {
                                let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                                div.removeChild(xoadc21);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 19) == 1) {
                        let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                        if (dc19 != null) {
                            if (anduoc(dc19.className.toString()) == 1) {
                                let xoadc19 = document.querySelector(`.hover9`);
                                div.removeChild(xoadc19);
                            }
                            if (dc19.classList.contains('hover') == true) {
                                let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                                div.removeChild(xoadc19);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 8) == 1) {
                        let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                        if (dc8 != null) {
                            if (anduoc(dc8.className.toString()) == 1) {
                                let xoadc8 = document.querySelector(`.hover1`);
                                div.removeChild(xoadc8);
                            }
                            if (dc8.classList.contains('hover') == true) {
                                let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                                div.removeChild(xoadc8);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 8) == 1) {
                        let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                        if (dc_8 != null) {
                            if (anduoc(dc_8.className.toString()) == 1) {
                                let xoadc_8 = document.querySelector(`.hover-1`);
                                div.removeChild(xoadc_8);
                            }
                            if (dc_8.classList.contains('hover') == true) {
                                let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                                div.removeChild(xoadc_8);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 12) == 1) {
                        let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                        if (dc12 != null) {
                            if (anduoc(dc12.className.toString()) == 1) {
                                let xoadc12 = document.querySelector(`.hover11`);
                                div.removeChild(xoadc12);
                            }
                            if (dc12.classList.contains('hover') == true) {
                                let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                                div.removeChild(xoadc12);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 19) == 1) {
                        let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                        if (dc_19 != null) {
                            if (anduoc(dc_19.className.toString()) == 1) {
                                let xoadc_19 = document.querySelector(`.hover-9`);
                                div.removeChild(xoadc_19);
                            }
                            if (dc_19.classList.contains('hover') == true) {
                                let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                                div.removeChild(xoadc_19);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 21) == 1) {
                        let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                        if (dc_21 != null) {
                            if (anduoc(dc_21.className.toString()) == 1) {
                                let xoadc_21 = document.querySelector(`.hover-10`);
                                div.removeChild(xoadc_21);
                            }
                            if (dc_21.classList.contains('hover') == true) {
                                let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                                div.removeChild(xoadc_21);
                            }
                        }
                    }
                    temp = true;
                    wn1.className = `piece wn square-${b}`
                    dichuyen()
                }
                div.appendChild(taoDiv);
            } else {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) - 12}`).className.toString()) == 1) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover-11", `square-${diachi(nameClass) - 12}`);
                    taoDiv.style.backgroundColor = "#ff000080";
                    taoDiv.onclick = function () {
                        wn1.style.backgroundColor = "transparent";
                        div.removeChild(taoDiv);
                        let b = diachi(nameClass) - 12;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - 2][(a - a % 10) / 10 - 1 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        if (kt(diachi(nameClass) + 21) == 1) {
                            let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                            if (dc21 != null) {
                                if (anduoc(dc21.className.toString()) == 1) {
                                    let xoadc21 = document.querySelector(`.hover10`);
                                    div.removeChild(xoadc21);
                                }
                                if (dc21.classList.contains('hover') == true) {
                                    let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                                    div.removeChild(xoadc21);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 19) == 1) {
                            let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                            if (dc19 != null) {
                                if (anduoc(dc19.className.toString()) == 1) {
                                    let xoadc19 = document.querySelector(`.hover9`);
                                    div.removeChild(xoadc19);
                                }
                                if (dc19.classList.contains('hover') == true) {
                                    let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                                    div.removeChild(xoadc19);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 8) == 1) {
                            let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                            if (dc8 != null) {
                                if (anduoc(dc8.className.toString()) == 1) {
                                    let xoadc8 = document.querySelector(`.hover1`);
                                    div.removeChild(xoadc8);
                                }
                                if (dc8.classList.contains('hover') == true) {
                                    let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                                    div.removeChild(xoadc8);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 8) == 1) {
                            let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                            if (dc_8 != null) {
                                if (anduoc(dc_8.className.toString()) == 1) {
                                    let xoadc_8 = document.querySelector(`.hover-1`);
                                    div.removeChild(xoadc_8);
                                }
                                if (dc_8.classList.contains('hover') == true) {
                                    let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                                    div.removeChild(xoadc_8);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 12) == 1) {
                            let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                            if (dc12 != null) {
                                if (anduoc(dc12.className.toString()) == 1) {
                                    let xoadc12 = document.querySelector(`.hover11`);
                                    div.removeChild(xoadc12);
                                }
                                if (dc12.classList.contains('hover') == true) {
                                    let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                                    div.removeChild(xoadc12);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 19) == 1) {
                            let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                            if (dc_19 != null) {
                                if (anduoc(dc_19.className.toString()) == 1) {
                                    let xoadc_19 = document.querySelector(`.hover-9`);
                                    div.removeChild(xoadc_19);
                                }
                                if (dc_19.classList.contains('hover') == true) {
                                    let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                                    div.removeChild(xoadc_19);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 21) == 1) {
                            let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                            if (dc_21 != null) {
                                if (anduoc(dc_21.className.toString()) == 1) {
                                    let xoadc_21 = document.querySelector(`.hover-10`);
                                    div.removeChild(xoadc_21);
                                }
                                if (dc_21.classList.contains('hover') == true) {
                                    let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                                    div.removeChild(xoadc_21);
                                }
                            }
                        }
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                        div.removeChild(an);
                        wn1.className = `piece wn square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);

                }
            }
        }
        temp = false;
    } else {
        wn1.style.backgroundColor = "transparent";
        let nameClass = wn1.className.toString()
        if (kt(diachi(nameClass) + 21) == 1) {
            let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
            if (dc21 != null) {
                if (anduoc(dc21.className.toString()) == 1) {
                    let xoadc21 = document.querySelector(`.hover10`);
                    div.removeChild(xoadc21);
                }
                if (dc21.classList.contains('hover') == true) {
                    let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                    div.removeChild(xoadc21);
                }
            }
        }
        if (kt(diachi(nameClass) + 19) == 1) {
            let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
            if (dc19 != null) {
                if (anduoc(dc19.className.toString()) == 1) {
                    let xoadc19 = document.querySelector(`.hover9`);
                    div.removeChild(xoadc19);
                }
                if (dc19.classList.contains('hover') == true) {
                    let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                    div.removeChild(xoadc19);
                }
            }
        }
        if (kt(diachi(nameClass) + 12) == 1) {
            let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
            if (dc12 != null) {
                if (anduoc(dc12.className.toString()) == 1) {
                    let xoadc12 = document.querySelector(`.hover11`);
                    div.removeChild(xoadc12);
                }
                if (dc12.classList.contains('hover') == true) {
                    let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                    div.removeChild(xoadc12);
                }
            }
        }
        if (kt(diachi(nameClass) + 8) == 1) {
            let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
            if (dc8 != null) {
                if (anduoc(dc8.className.toString()) == 1) {
                    let xoadc8 = document.querySelector(`.hover1`);
                    div.removeChild(xoadc8);
                }
                if (dc8.classList.contains('hover') == true) {
                    let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                    div.removeChild(xoadc8);
                }
            }
        }
        if (kt(diachi(nameClass) - 8) == 1) {
            let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
            if (dc_8 != null) {
                if (anduoc(dc_8.className.toString()) == 1) {
                    let xoadc_8 = document.querySelector(`.hover-1`);
                    div.removeChild(xoadc_8);
                }
                if (dc_8.classList.contains('hover') == true) {
                    let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                    div.removeChild(xoadc_8);
                }
            }
        }
        if (kt(diachi(nameClass) - 12) == 1) {
            let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
            if (dc_12 != null) {
                if (anduoc(dc_12.className.toString()) == 1) {
                    let xoadc_12 = document.querySelector(`.hover-11`);
                    div.removeChild(xoadc_12);
                }
                if (dc_12.classList.contains('hover') == true) {
                    let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                    div.removeChild(xoadc_12);
                }
            }
        }
        if (kt(diachi(nameClass) - 19) == 1) {
            let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
            if (dc_19 != null) {
                if (anduoc(dc_19.className.toString()) == 1) {
                    let xoadc_19 = document.querySelector(`.hover-9`);
                    div.removeChild(xoadc_19);
                }
                if (dc_19.classList.contains('hover') == true) {
                    let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                    div.removeChild(xoadc_19);
                }
            }
        }
        if (kt(diachi(nameClass) - 21) == 1) {
            let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
            if (dc_21 != null) {
                if (anduoc(dc_21.className.toString()) == 1) {
                    let xoadc_21 = document.querySelector(`.hover-10`);
                    div.removeChild(xoadc_21);
                }
                if (dc_21.classList.contains('hover') == true) {
                    let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                    div.removeChild(xoadc_21);
                }
            }
        }
        temp = true;
    }
}
wn2.onclick = function () {
    if (temp == true) {
        wn2.style.backgroundColor = "#957373ad";
        let nameClass = wn2.className.toString()
        if (kt(diachi(nameClass) + 12) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) + 12}`) == null) {
                let taoDiv = document.createElement("div")
                taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + 12}`);
                taoDiv.style.backgroundColor = "#957373ad";
                taoDiv.onclick = function () {
                    wn2.style.backgroundColor = "transparent";
                    let x = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                    div.removeChild(x);
                    let a = diachi(nameClass)
                    banco[a % 10 - 1 + 2][(a - a % 10) / 10 - 1 + 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                    banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                    console.log(banco)
                    let b = diachi(nameClass) + 12;
                    if (kt(diachi(nameClass) + 21) == 1) {
                        let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                        if (dc21 != null) {
                            if (anduoc(dc21.className.toString()) == 1) {
                                let xoadc21 = document.querySelector(`.hover10`);
                                div.removeChild(xoadc21);
                            }
                            if (dc21.classList.contains('hover') == true) {
                                let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                                div.removeChild(xoadc21);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 19) == 1) {
                        let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                        if (dc19 != null) {
                            if (anduoc(dc19.className.toString()) == 1) {
                                let xoadc19 = document.querySelector(`.hover9`);
                                div.removeChild(xoadc19);
                            }
                            if (dc19.classList.contains('hover') == true) {
                                let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                                div.removeChild(xoadc19);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 8) == 1) {
                        let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                        if (dc8 != null) {
                            if (anduoc(dc8.className.toString()) == 1) {
                                let xoadc8 = document.querySelector(`.hover1`);
                                div.removeChild(xoadc8);
                            }
                            if (dc8.classList.contains('hover') == true) {
                                let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                                div.removeChild(xoadc8);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 8) == 1) {
                        let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                        if (dc_8 != null) {
                            if (anduoc(dc_8.className.toString()) == 1) {
                                let xoadc_8 = document.querySelector(`.hover-1`);
                                div.removeChild(xoadc_8);
                            }
                            if (dc_8.classList.contains('hover') == true) {
                                let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                                div.removeChild(xoadc_8);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 12) == 1) {
                        let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                        if (dc_12 != null) {
                            if (anduoc(dc_12.className.toString()) == 1) {
                                let xoadc_12 = document.querySelector(`.hover-11`);
                                div.removeChild(xoadc_12);
                            }
                            if (dc_12.classList.contains('hover') == true) {
                                let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                                div.removeChild(xoadc_12);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 19) == 1) {
                        let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                        if (dc_19 != null) {
                            if (anduoc(dc_19.className.toString()) == 1) {
                                let xoadc_19 = document.querySelector(`.hover-9`);
                                div.removeChild(xoadc_19);
                            }
                            if (dc_19.classList.contains('hover') == true) {
                                let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                                div.removeChild(xoadc_19);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 21) == 1) {
                        let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                        if (dc_21 != null) {
                            if (anduoc(dc_21.className.toString()) == 1) {
                                let xoadc_21 = document.querySelector(`.hover-10`);
                                div.removeChild(xoadc_21);
                            }
                            if (dc_21.classList.contains('hover') == true) {
                                let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                                div.removeChild(xoadc_21);
                            }
                        }
                    }
                    temp = true;
                    wn2.className = `piece wn square-${b}`
                    dichuyen()
                }
                div.appendChild(taoDiv);
            } else {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) + 12}`).className.toString()) == 1) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover11", `square-${diachi(nameClass) + 12}`);
                    taoDiv.style.backgroundColor = "#ff000080";
                    taoDiv.onclick = function () {
                        wn2.style.backgroundColor = "transparent";
                        div.removeChild(taoDiv);
                        let b = diachi(nameClass) + 12;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + 2][(a - a % 10) / 10 - 1 + 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        if (kt(diachi(nameClass) + 21) == 1) {
                            let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                            if (dc21 != null) {
                                if (anduoc(dc21.className.toString()) == 1) {
                                    let xoadc21 = document.querySelector(`.hover10`);
                                    div.removeChild(xoadc21);
                                }
                                if (dc21.classList.contains('hover') == true) {
                                    let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                                    div.removeChild(xoadc21);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 19) == 1) {
                            let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                            if (dc19 != null) {
                                if (anduoc(dc19.className.toString()) == 1) {
                                    let xoadc19 = document.querySelector(`.hover9`);
                                    div.removeChild(xoadc19);
                                }
                                if (dc19.classList.contains('hover') == true) {
                                    let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                                    div.removeChild(xoadc19);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 8) == 1) {
                            let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                            if (dc8 != null) {
                                if (anduoc(dc8.className.toString()) == 1) {
                                    let xoadc8 = document.querySelector(`.hover1`);
                                    div.removeChild(xoadc8);
                                }
                                if (dc8.classList.contains('hover') == true) {
                                    let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                                    div.removeChild(xoadc8);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 8) == 1) {
                            let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                            if (dc_8 != null) {
                                if (anduoc(dc_8.className.toString()) == 1) {
                                    let xoadc_8 = document.querySelector(`.hover-1`);
                                    div.removeChild(xoadc_8);
                                }
                                if (dc_8.classList.contains('hover') == true) {
                                    let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                                    div.removeChild(xoadc_8);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 12) == 1) {
                            let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                            if (dc_12 != null) {
                                if (anduoc(dc_12.className.toString()) == 1) {
                                    let xoadc_12 = document.querySelector(`.hover-11`);
                                    div.removeChild(xoadc_12);
                                }
                                if (dc_12.classList.contains('hover') == true) {
                                    let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                                    div.removeChild(xoadc_12);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 19) == 1) {
                            let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                            if (dc_19 != null) {
                                if (anduoc(dc_19.className.toString()) == 1) {
                                    let xoadc_19 = document.querySelector(`.hover-9`);
                                    div.removeChild(xoadc_19);
                                }
                                if (dc_19.classList.contains('hover') == true) {
                                    let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                                    div.removeChild(xoadc_19);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 21) == 1) {
                            let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                            if (dc_21 != null) {
                                if (anduoc(dc_21.className.toString()) == 1) {
                                    let xoadc_21 = document.querySelector(`.hover-10`);
                                    div.removeChild(xoadc_21);
                                }
                                if (dc_21.classList.contains('hover') == true) {
                                    let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                                    div.removeChild(xoadc_21);
                                }
                            }
                        }
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                        div.removeChild(an);
                        wn2.className = `piece wn square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);

                }
            }
        }
        if (kt(diachi(nameClass) + 21) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) + 21}`) == null) {
                let taoDiv = document.createElement("div")
                taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + 21}`);
                taoDiv.style.backgroundColor = "#957373ad";
                taoDiv.onclick = function () {
                    wn2.style.backgroundColor = "transparent";
                    div.removeChild(taoDiv);
                    let b = diachi(nameClass) + 21;
                    let a = diachi(nameClass)
                    banco[a % 10 - 1 + 1][(a - a % 10) / 10 - 1 + 2] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                    banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                    if (kt(diachi(nameClass) + 12) == 1) {
                        let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                        if (dc12 != null) {
                            if (anduoc(dc12.className.toString()) == 1) {
                                let xoadc12 = document.querySelector(`.hover11`);
                                div.removeChild(xoadc12);
                            }
                            if (dc12.classList.contains('hover') == true) {
                                let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                                div.removeChild(xoadc12);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 19) == 1) {
                        let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                        if (dc19 != null) {
                            if (anduoc(dc19.className.toString()) == 1) {
                                let xoadc19 = document.querySelector(`.hover9`);
                                div.removeChild(xoadc19);
                            }
                            if (dc19.classList.contains('hover') == true) {
                                let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                                div.removeChild(xoadc19);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 8) == 1) {
                        let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                        if (dc8 != null) {
                            if (anduoc(dc8.className.toString()) == 1) {
                                let xoadc8 = document.querySelector(`.hover1`);
                                div.removeChild(xoadc8);
                            }
                            if (dc8.classList.contains('hover') == true) {
                                let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                                div.removeChild(xoadc8);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 8) == 1) {
                        let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                        if (dc_8 != null) {
                            if (anduoc(dc_8.className.toString()) == 1) {
                                let xoadc_8 = document.querySelector(`.hover-1`);
                                div.removeChild(xoadc_8);
                            }
                            if (dc_8.classList.contains('hover') == true) {
                                let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                                div.removeChild(xoadc_8);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 12) == 1) {
                        let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                        if (dc_12 != null) {
                            if (anduoc(dc_12.className.toString()) == 1) {
                                let xoadc_12 = document.querySelector(`.hover-11`);
                                div.removeChild(xoadc_12);
                            }
                            if (dc_12.classList.contains('hover') == true) {
                                let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                                div.removeChild(xoadc_12);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 19) == 1) {
                        let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                        if (dc_19 != null) {
                            if (anduoc(dc_19.className.toString()) == 1) {
                                let xoadc_19 = document.querySelector(`.hover-9`);
                                div.removeChild(xoadc_19);
                            }
                            if (dc_19.classList.contains('hover') == true) {
                                let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                                div.removeChild(xoadc_19);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 21) == 1) {
                        let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                        if (dc_21 != null) {
                            if (anduoc(dc_21.className.toString()) == 1) {
                                let xoadc_21 = document.querySelector(`.hover-10`);
                                div.removeChild(xoadc_21);
                            }
                            if (dc_21.classList.contains('hover') == true) {
                                let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                                div.removeChild(xoadc_21);
                            }
                        }
                    }
                    temp = true;
                    wn2.className = `piece wn square-${b}`
                    dichuyen()
                }
                div.appendChild(taoDiv);
            } else {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) + 21}`).className.toString()) == 1) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover10", `square-${diachi(nameClass) + 21}`);
                    taoDiv.style.backgroundColor = "#ff000080";
                    taoDiv.onclick = function () {
                        wn2.style.backgroundColor = "transparent";
                        div.removeChild(taoDiv);
                        let b = diachi(nameClass) + 21;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + 1][(a - a % 10) / 10 - 1 + 2] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        if (kt(diachi(nameClass) + 12) == 1) {
                            let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                            if (dc12 != null) {
                                if (anduoc(dc12.className.toString()) == 1) {
                                    let xoadc12 = document.querySelector(`.hover11`);
                                    div.removeChild(xoadc12);
                                }
                                if (dc12.classList.contains('hover') == true) {
                                    let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                                    div.removeChild(xoadc12);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 19) == 1) {
                            let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                            if (dc19 != null) {
                                if (anduoc(dc19.className.toString()) == 1) {
                                    let xoadc19 = document.querySelector(`.hover9`);
                                    div.removeChild(xoadc19);
                                }
                                if (dc19.classList.contains('hover') == true) {
                                    let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                                    div.removeChild(xoadc19);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 8) == 1) {
                            let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                            if (dc8 != null) {
                                if (anduoc(dc8.className.toString()) == 1) {
                                    let xoadc8 = document.querySelector(`.hover1`);
                                    div.removeChild(xoadc8);
                                }
                                if (dc8.classList.contains('hover') == true) {
                                    let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                                    div.removeChild(xoadc8);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 8) == 1) {
                            let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                            if (dc_8 != null) {
                                if (anduoc(dc_8.className.toString()) == 1) {
                                    let xoadc_8 = document.querySelector(`.hover-1`);
                                    div.removeChild(xoadc_8);
                                }
                                if (dc_8.classList.contains('hover') == true) {
                                    let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                                    div.removeChild(xoadc_8);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 12) == 1) {
                            let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                            if (dc_12 != null) {
                                if (anduoc(dc_12.className.toString()) == 1) {
                                    let xoadc_12 = document.querySelector(`.hover-11`);
                                    div.removeChild(xoadc_12);
                                }
                                if (dc_12.classList.contains('hover') == true) {
                                    let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                                    div.removeChild(xoadc_12);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 19) == 1) {
                            let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                            if (dc_19 != null) {
                                if (anduoc(dc_19.className.toString()) == 1) {
                                    let xoadc_19 = document.querySelector(`.hover-9`);
                                    div.removeChild(xoadc_19);
                                }
                                if (dc_19.classList.contains('hover') == true) {
                                    let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                                    div.removeChild(xoadc_19);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 21) == 1) {
                            let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                            if (dc_21 != null) {
                                if (anduoc(dc_21.className.toString()) == 1) {
                                    let xoadc_21 = document.querySelector(`.hover-10`);
                                    div.removeChild(xoadc_21);
                                }
                                if (dc_21.classList.contains('hover') == true) {
                                    let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                                    div.removeChild(xoadc_21);
                                }
                            }
                        }
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                        div.removeChild(an);
                        wn2.className = `piece wn square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                }
            }
        }
        if (kt(diachi(nameClass) + 19) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) + 19}`) == null) {
                let taoDiv = document.createElement("div")
                taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + 19}`);
                taoDiv.style.backgroundColor = "#957373ad";
                taoDiv.onclick = function () {
                    wn2.style.backgroundColor = "transparent";
                    div.removeChild(taoDiv);
                    let b = diachi(nameClass) + 19;
                    let a = diachi(nameClass)
                    banco[a % 10 - 1 - 1][(a - a % 10) / 10 - 1 + 2] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                    banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                    if (kt(diachi(nameClass) + 21) == 1) {
                        let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                        if (dc21 != null) {
                            if (anduoc(dc21.className.toString()) == 1) {
                                let xoadc21 = document.querySelector(`.hover10`);
                                div.removeChild(xoadc21);
                            }
                            if (dc21.classList.contains('hover') == true) {
                                let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                                div.removeChild(xoadc21);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 12) == 1) {
                        let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                        if (dc12 != null) {
                            if (anduoc(dc12.className.toString()) == 1) {
                                let xoadc12 = document.querySelector(`.hover11`);
                                div.removeChild(xoadc12);
                            }
                            if (dc12.classList.contains('hover') == true) {
                                let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                                div.removeChild(xoadc12);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 8) == 1) {
                        let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                        if (dc8 != null) {
                            if (anduoc(dc8.className.toString()) == 1) {
                                let xoadc8 = document.querySelector(`.hover1`);
                                div.removeChild(xoadc8);
                            }
                            if (dc8.classList.contains('hover') == true) {
                                let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                                div.removeChild(xoadc8);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 8) == 1) {
                        let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                        if (dc_8 != null) {
                            if (anduoc(dc_8.className.toString()) == 1) {
                                let xoadc_8 = document.querySelector(`.hover-1`);
                                div.removeChild(xoadc_8);
                            }
                            if (dc_8.classList.contains('hover') == true) {
                                let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                                div.removeChild(xoadc_8);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 12) == 1) {
                        let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                        if (dc_12 != null) {
                            if (anduoc(dc_12.className.toString()) == 1) {
                                let xoadc_12 = document.querySelector(`.hover-11`);
                                div.removeChild(xoadc_12);
                            }
                            if (dc_12.classList.contains('hover') == true) {
                                let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                                div.removeChild(xoadc_12);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 19) == 1) {
                        let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                        if (dc_19 != null) {
                            if (anduoc(dc_19.className.toString()) == 1) {
                                let xoadc_19 = document.querySelector(`.hover-9`);
                                div.removeChild(xoadc_19);
                            }
                            if (dc_19.classList.contains('hover') == true) {
                                let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                                div.removeChild(xoadc_19);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 21) == 1) {
                        let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                        if (dc_21 != null) {
                            if (anduoc(dc_21.className.toString()) == 1) {
                                let xoadc_21 = document.querySelector(`.hover-10`);
                                div.removeChild(xoadc_21);
                            }
                            if (dc_21.classList.contains('hover') == true) {
                                let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                                div.removeChild(xoadc_21);
                            }
                        }
                    }
                    temp = true;
                    wn2.className = `piece wn square-${b}`
                    dichuyen()
                }
                div.appendChild(taoDiv);
            } else {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) + 19}`).className.toString()) == 1) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover9", `square-${diachi(nameClass) + 19}`);
                    taoDiv.style.backgroundColor = "#ff000080";
                    taoDiv.onclick = function () {
                        wn2.style.backgroundColor = "transparent";
                        div.removeChild(taoDiv);
                        let b = diachi(nameClass) + 19;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - 1][(a - a % 10) / 10 - 1 + 2] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        if (kt(diachi(nameClass) + 21) == 1) {
                            let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                            if (dc21 != null) {
                                if (anduoc(dc21.className.toString()) == 1) {
                                    let xoadc21 = document.querySelector(`.hover10`);
                                    div.removeChild(xoadc21);
                                }
                                if (dc21.classList.contains('hover') == true) {
                                    let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                                    div.removeChild(xoadc21);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 12) == 1) {
                            let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                            if (dc12 != null) {
                                if (anduoc(dc12.className.toString()) == 1) {
                                    let xoadc12 = document.querySelector(`.hover11`);
                                    div.removeChild(xoadc12);
                                }
                                if (dc12.classList.contains('hover') == true) {
                                    let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                                    div.removeChild(xoadc12);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 8) == 1) {
                            let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                            if (dc8 != null) {
                                if (anduoc(dc8.className.toString()) == 1) {
                                    let xoadc8 = document.querySelector(`.hover1`);
                                    div.removeChild(xoadc8);
                                }
                                if (dc8.classList.contains('hover') == true) {
                                    let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                                    div.removeChild(xoadc8);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 8) == 1) {
                            let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                            if (dc_8 != null) {
                                if (anduoc(dc_8.className.toString()) == 1) {
                                    let xoadc_8 = document.querySelector(`.hover-1`);
                                    div.removeChild(xoadc_8);
                                }
                                if (dc_8.classList.contains('hover') == true) {
                                    let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                                    div.removeChild(xoadc_8);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 12) == 1) {
                            let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                            if (dc_12 != null) {
                                if (anduoc(dc_12.className.toString()) == 1) {
                                    let xoadc_12 = document.querySelector(`.hover-11`);
                                    div.removeChild(xoadc_12);
                                }
                                if (dc_12.classList.contains('hover') == true) {
                                    let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                                    div.removeChild(xoadc_12);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 19) == 1) {
                            let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                            if (dc_19 != null) {
                                if (anduoc(dc_19.className.toString()) == 1) {
                                    let xoadc_19 = document.querySelector(`.hover-9`);
                                    div.removeChild(xoadc_19);
                                }
                                if (dc_19.classList.contains('hover') == true) {
                                    let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                                    div.removeChild(xoadc_19);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 21) == 1) {
                            let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                            if (dc_21 != null) {
                                if (anduoc(dc_21.className.toString()) == 1) {
                                    let xoadc_21 = document.querySelector(`.hover-10`);
                                    div.removeChild(xoadc_21);
                                }
                                if (dc_21.classList.contains('hover') == true) {
                                    let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                                    div.removeChild(xoadc_21);
                                }
                            }
                        }
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                        div.removeChild(an);
                        wn2.className = `piece wn square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);

                }
            }
        }
        if (kt(diachi(nameClass) + 8) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) + 8}`) == null) {
                let taoDiv = document.createElement("div")
                taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + 8}`);
                taoDiv.style.backgroundColor = "#957373ad";
                taoDiv.onclick = function () {
                    wn2.style.backgroundColor = "transparent";
                    div.removeChild(taoDiv);
                    let b = diachi(nameClass) + 8;
                    let a = diachi(nameClass)
                    banco[a % 10 - 1 - 2][(a - a % 10) / 10 - 1 + 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                    banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                    if (kt(diachi(nameClass) + 21) == 1) {
                        let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                        if (dc21 != null) {
                            if (anduoc(dc21.className.toString()) == 1) {
                                let xoadc21 = document.querySelector(`.hover10`);
                                div.removeChild(xoadc21);
                            }
                            if (dc21.classList.contains('hover') == true) {
                                let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                                div.removeChild(xoadc21);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 19) == 1) {
                        let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                        if (dc19 != null) {
                            if (anduoc(dc19.className.toString()) == 1) {
                                let xoadc19 = document.querySelector(`.hover9`);
                                div.removeChild(xoadc19);
                            }
                            if (dc19.classList.contains('hover') == true) {
                                let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                                div.removeChild(xoadc19);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 12) == 1) {
                        let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                        if (dc12 != null) {
                            if (anduoc(dc12.className.toString()) == 1) {
                                let xoadc12 = document.querySelector(`.hover11`);
                                div.removeChild(xoadc12);
                            }
                            if (dc12.classList.contains('hover') == true) {
                                let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                                div.removeChild(xoadc12);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 8) == 1) {
                        let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                        if (dc_8 != null) {
                            if (anduoc(dc_8.className.toString()) == 1) {
                                let xoadc_8 = document.querySelector(`.hover-1`);
                                div.removeChild(xoadc_8);
                            }
                            if (dc_8.classList.contains('hover') == true) {
                                let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                                div.removeChild(xoadc_8);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 12) == 1) {
                        let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                        if (dc_12 != null) {
                            if (anduoc(dc_12.className.toString()) == 1) {
                                let xoadc_12 = document.querySelector(`.hover-11`);
                                div.removeChild(xoadc_12);
                            }
                            if (dc_12.classList.contains('hover') == true) {
                                let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                                div.removeChild(xoadc_12);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 19) == 1) {
                        let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                        if (dc_19 != null) {
                            if (anduoc(dc_19.className.toString()) == 1) {
                                let xoadc_19 = document.querySelector(`.hover-9`);
                                div.removeChild(xoadc_19);
                            }
                            if (dc_19.classList.contains('hover') == true) {
                                let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                                div.removeChild(xoadc_19);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 21) == 1) {
                        let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                        if (dc_21 != null) {
                            if (anduoc(dc_21.className.toString()) == 1) {
                                let xoadc_21 = document.querySelector(`.hover-10`);
                                div.removeChild(xoadc_21);
                            }
                            if (dc_21.classList.contains('hover') == true) {
                                let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                                div.removeChild(xoadc_21);
                            }
                        }
                    }
                    temp = true;
                    wn2.className = `piece wn square-${b}`
                    dichuyen()
                }
                div.appendChild(taoDiv);
            } else {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) + 8}`).className.toString()) == 1) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover1", `square-${diachi(nameClass) + 8}`);
                    taoDiv.style.backgroundColor = "#ff000080";
                    taoDiv.onclick = function () {
                        wn2.style.backgroundColor = "transparent";
                        div.removeChild(taoDiv);
                        let b = diachi(nameClass) + 8;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - 2][(a - a % 10) / 10 - 1 + 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        if (kt(diachi(nameClass) + 21) == 1) {
                            let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                            if (dc21 != null) {
                                if (anduoc(dc21.className.toString()) == 1) {
                                    let xoadc21 = document.querySelector(`.hover10`);
                                    div.removeChild(xoadc21);
                                }
                                if (dc21.classList.contains('hover') == true) {
                                    let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                                    div.removeChild(xoadc21);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 19) == 1) {
                            let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                            if (dc19 != null) {
                                if (anduoc(dc19.className.toString()) == 1) {
                                    let xoadc19 = document.querySelector(`.hover9`);
                                    div.removeChild(xoadc19);
                                }
                                if (dc19.classList.contains('hover') == true) {
                                    let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                                    div.removeChild(xoadc19);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 12) == 1) {
                            let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                            if (dc12 != null) {
                                if (anduoc(dc12.className.toString()) == 1) {
                                    let xoadc12 = document.querySelector(`.hover11`);
                                    div.removeChild(xoadc12);
                                }
                                if (dc12.classList.contains('hover') == true) {
                                    let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                                    div.removeChild(xoadc12);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 8) == 1) {
                            let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                            if (dc_8 != null) {
                                if (anduoc(dc_8.className.toString()) == 1) {
                                    let xoadc_8 = document.querySelector(`.hover-1`);
                                    div.removeChild(xoadc_8);
                                }
                                if (dc_8.classList.contains('hover') == true) {
                                    let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                                    div.removeChild(xoadc_8);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 12) == 1) {
                            let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                            if (dc_12 != null) {
                                if (anduoc(dc_12.className.toString()) == 1) {
                                    let xoadc_12 = document.querySelector(`.hover-11`);
                                    div.removeChild(xoadc_12);
                                }
                                if (dc_12.classList.contains('hover') == true) {
                                    let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                                    div.removeChild(xoadc_12);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 19) == 1) {
                            let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                            if (dc_19 != null) {
                                if (anduoc(dc_19.className.toString()) == 1) {
                                    let xoadc_19 = document.querySelector(`.hover-9`);
                                    div.removeChild(xoadc_19);
                                }
                                if (dc_19.classList.contains('hover') == true) {
                                    let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                                    div.removeChild(xoadc_19);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 21) == 1) {
                            let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                            if (dc_21 != null) {
                                if (anduoc(dc_21.className.toString()) == 1) {
                                    let xoadc_21 = document.querySelector(`.hover-10`);
                                    div.removeChild(xoadc_21);
                                }
                                if (dc_21.classList.contains('hover') == true) {
                                    let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                                    div.removeChild(xoadc_21);
                                }
                            }
                        }
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                        div.removeChild(an);
                        wn2.className = `piece wn square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);

                }
            }
        }
        if (kt(diachi(nameClass) - 8) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) - 8}`) == null) {
                let taoDiv = document.createElement("div")
                taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) - 8}`);
                taoDiv.style.backgroundColor = "#957373ad";
                taoDiv.onclick = function () {
                    wn2.style.backgroundColor = "transparent";
                    div.removeChild(taoDiv);
                    let b = diachi(nameClass) - 8;
                    let a = diachi(nameClass)
                    banco[a % 10 - 1 + 2][(a - a % 10) / 10 - 1 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                    banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                    if (kt(diachi(nameClass) + 21) == 1) {
                        let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                        if (dc21 != null) {
                            if (anduoc(dc21.className.toString()) == 1) {
                                let xoadc21 = document.querySelector(`.hover10`);
                                div.removeChild(xoadc21);
                            }
                            if (dc21.classList.contains('hover') == true) {
                                let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                                div.removeChild(xoadc21);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 19) == 1) {
                        let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                        if (dc19 != null) {
                            if (anduoc(dc19.className.toString()) == 1) {
                                let xoadc19 = document.querySelector(`.hover9`);
                                div.removeChild(xoadc19);
                            }
                            if (dc19.classList.contains('hover') == true) {
                                let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                                div.removeChild(xoadc19);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 8) == 1) {
                        let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                        if (dc8 != null) {
                            if (anduoc(dc8.className.toString()) == 1) {
                                let xoadc8 = document.querySelector(`.hover1`);
                                div.removeChild(xoadc8);
                            }
                            if (dc8.classList.contains('hover') == true) {
                                let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                                div.removeChild(xoadc8);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 12) == 1) {
                        let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                        if (dc12 != null) {
                            if (anduoc(dc12.className.toString()) == 1) {
                                let xoadc12 = document.querySelector(`.hover11`);
                                div.removeChild(xoadc12);
                            }
                            if (dc12.classList.contains('hover') == true) {
                                let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                                div.removeChild(xoadc12);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 12) == 1) {
                        let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                        if (dc_12 != null) {
                            if (anduoc(dc_12.className.toString()) == 1) {
                                let xoadc_12 = document.querySelector(`.hover-11`);
                                div.removeChild(xoadc_12);
                            }
                            if (dc_12.classList.contains('hover') == true) {
                                let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                                div.removeChild(xoadc_12);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 19) == 1) {
                        let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                        if (dc_19 != null) {
                            if (anduoc(dc_19.className.toString()) == 1) {
                                let xoadc_19 = document.querySelector(`.hover-9`);
                                div.removeChild(xoadc_19);
                            }
                            if (dc_19.classList.contains('hover') == true) {
                                let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                                div.removeChild(xoadc_19);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 21) == 1) {
                        let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                        if (dc_21 != null) {
                            if (anduoc(dc_21.className.toString()) == 1) {
                                let xoadc_21 = document.querySelector(`.hover-10`);
                                div.removeChild(xoadc_21);
                            }
                            if (dc_21.classList.contains('hover') == true) {
                                let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                                div.removeChild(xoadc_21);
                            }
                        }
                    }
                    temp = true;
                    wn2.className = `piece wn square-${b}`
                    dichuyen()
                }
                div.appendChild(taoDiv);
            } else {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) - 8}`).className.toString()) == 1) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover-1", `square-${diachi(nameClass) - 8}`);
                    taoDiv.style.backgroundColor = "#ff000080";
                    taoDiv.onclick = function () {
                        wn2.style.backgroundColor = "transparent";
                        div.removeChild(taoDiv);
                        let b = diachi(nameClass) - 8;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + 2][(a - a % 10) / 10 - 1 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        if (kt(diachi(nameClass) + 21) == 1) {
                            let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                            if (dc21 != null) {
                                if (anduoc(dc21.className.toString()) == 1) {
                                    let xoadc21 = document.querySelector(`.hover10`);
                                    div.removeChild(xoadc21);
                                }
                                if (dc21.classList.contains('hover') == true) {
                                    let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                                    div.removeChild(xoadc21);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 19) == 1) {
                            let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                            if (dc19 != null) {
                                if (anduoc(dc19.className.toString()) == 1) {
                                    let xoadc19 = document.querySelector(`.hover9`);
                                    div.removeChild(xoadc19);
                                }
                                if (dc19.classList.contains('hover') == true) {
                                    let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                                    div.removeChild(xoadc19);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 8) == 1) {
                            let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                            if (dc8 != null) {
                                if (anduoc(dc8.className.toString()) == 1) {
                                    let xoadc8 = document.querySelector(`.hover1`);
                                    div.removeChild(xoadc8);
                                }
                                if (dc8.classList.contains('hover') == true) {
                                    let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                                    div.removeChild(xoadc8);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 12) == 1) {
                            let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                            if (dc12 != null) {
                                if (anduoc(dc12.className.toString()) == 1) {
                                    let xoadc12 = document.querySelector(`.hover11`);
                                    div.removeChild(xoadc12);
                                }
                                if (dc12.classList.contains('hover') == true) {
                                    let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                                    div.removeChild(xoadc12);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 12) == 1) {
                            let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                            if (dc_12 != null) {
                                if (anduoc(dc_12.className.toString()) == 1) {
                                    let xoadc_12 = document.querySelector(`.hover-11`);
                                    div.removeChild(xoadc_12);
                                }
                                if (dc_12.classList.contains('hover') == true) {
                                    let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                                    div.removeChild(xoadc_12);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 19) == 1) {
                            let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                            if (dc_19 != null) {
                                if (anduoc(dc_19.className.toString()) == 1) {
                                    let xoadc_19 = document.querySelector(`.hover-9`);
                                    div.removeChild(xoadc_19);
                                }
                                if (dc_19.classList.contains('hover') == true) {
                                    let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                                    div.removeChild(xoadc_19);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 21) == 1) {
                            let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                            if (dc_21 != null) {
                                if (anduoc(dc_21.className.toString()) == 1) {
                                    let xoadc_21 = document.querySelector(`.hover-10`);
                                    div.removeChild(xoadc_21);
                                }
                                if (dc_21.classList.contains('hover') == true) {
                                    let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                                    div.removeChild(xoadc_21);
                                }
                            }
                        }
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                        div.removeChild(an);
                        wn2.className = `piece wn square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);

                }
            }
        }
        if (kt(diachi(nameClass) - 19) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) - 19}`) == null) {
                let taoDiv = document.createElement("div")
                taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) - 19}`);
                taoDiv.style.backgroundColor = "#957373ad";
                taoDiv.onclick = function () {
                    wn2.style.backgroundColor = "transparent";
                    div.removeChild(taoDiv);
                    let b = diachi(nameClass) - 19;
                    let a = diachi(nameClass)
                    banco[a % 10 - 1 + 1][(a - a % 10) / 10 - 1 - 2] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                    banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                    if (kt(diachi(nameClass) + 21) == 1) {
                        let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                        if (dc21 != null) {
                            if (anduoc(dc21.className.toString()) == 1) {
                                let xoadc21 = document.querySelector(`.hover10`);
                                div.removeChild(xoadc21);
                            }
                            if (dc21.classList.contains('hover') == true) {
                                let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                                div.removeChild(xoadc21);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 19) == 1) {
                        let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                        if (dc19 != null) {
                            if (anduoc(dc19.className.toString()) == 1) {
                                let xoadc19 = document.querySelector(`.hover9`);
                                div.removeChild(xoadc19);
                            }
                            if (dc19.classList.contains('hover') == true) {
                                let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                                div.removeChild(xoadc19);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 8) == 1) {
                        let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                        if (dc8 != null) {
                            if (anduoc(dc8.className.toString()) == 1) {
                                let xoadc8 = document.querySelector(`.hover1`);
                                div.removeChild(xoadc8);
                            }
                            if (dc8.classList.contains('hover') == true) {
                                let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                                div.removeChild(xoadc8);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 8) == 1) {
                        let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                        if (dc_8 != null) {
                            if (anduoc(dc_8.className.toString()) == 1) {
                                let xoadc_8 = document.querySelector(`.hover-1`);
                                div.removeChild(xoadc_8);
                            }
                            if (dc_8.classList.contains('hover') == true) {
                                let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                                div.removeChild(xoadc_8);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 12) == 1) {
                        let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                        if (dc_12 != null) {
                            if (anduoc(dc_12.className.toString()) == 1) {
                                let xoadc_12 = document.querySelector(`.hover-11`);
                                div.removeChild(xoadc_12);
                            }
                            if (dc_12.classList.contains('hover') == true) {
                                let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                                div.removeChild(xoadc_12);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 12) == 1) {
                        let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                        if (dc12 != null) {
                            if (anduoc(dc12.className.toString()) == 1) {
                                let xoadc12 = document.querySelector(`.hover11`);
                                div.removeChild(xoadc12);
                            }
                            if (dc12.classList.contains('hover') == true) {
                                let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                                div.removeChild(xoadc12);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 21) == 1) {
                        let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                        if (dc_21 != null) {
                            if (anduoc(dc_21.className.toString()) == 1) {
                                let xoadc_21 = document.querySelector(`.hover-10`);
                                div.removeChild(xoadc_21);
                            }
                            if (dc_21.classList.contains('hover') == true) {
                                let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                                div.removeChild(xoadc_21);
                            }
                        }
                    }
                    temp = true;
                    wn2.className = `piece wn square-${b}`
                    dichuyen()
                }
                div.appendChild(taoDiv);
            } else {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) - 19}`).className.toString()) == 1) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover-9", `square-${diachi(nameClass) - 19}`);
                    taoDiv.style.backgroundColor = "#ff000080";
                    taoDiv.onclick = function () {
                        wn2.style.backgroundColor = "transparent";
                        div.removeChild(taoDiv);
                        let b = diachi(nameClass) - 19;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + 1][(a - a % 10) / 10 - 1 - 2] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        if (kt(diachi(nameClass) + 21) == 1) {
                            let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                            if (dc21 != null) {
                                if (anduoc(dc21.className.toString()) == 1) {
                                    let xoadc21 = document.querySelector(`.hover10`);
                                    div.removeChild(xoadc21);
                                }
                                if (dc21.classList.contains('hover') == true) {
                                    let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                                    div.removeChild(xoadc21);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 19) == 1) {
                            let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                            if (dc19 != null) {
                                if (anduoc(dc19.className.toString()) == 1) {
                                    let xoadc19 = document.querySelector(`.hover9`);
                                    div.removeChild(xoadc19);
                                }
                                if (dc19.classList.contains('hover') == true) {
                                    let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                                    div.removeChild(xoadc19);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 8) == 1) {
                            let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                            if (dc8 != null) {
                                if (anduoc(dc8.className.toString()) == 1) {
                                    let xoadc8 = document.querySelector(`.hover1`);
                                    div.removeChild(xoadc8);
                                }
                                if (dc8.classList.contains('hover') == true) {
                                    let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                                    div.removeChild(xoadc8);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 8) == 1) {
                            let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                            if (dc_8 != null) {
                                if (anduoc(dc_8.className.toString()) == 1) {
                                    let xoadc_8 = document.querySelector(`.hover-1`);
                                    div.removeChild(xoadc_8);
                                }
                                if (dc_8.classList.contains('hover') == true) {
                                    let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                                    div.removeChild(xoadc_8);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 12) == 1) {
                            let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                            if (dc_12 != null) {
                                if (anduoc(dc_12.className.toString()) == 1) {
                                    let xoadc_12 = document.querySelector(`.hover-11`);
                                    div.removeChild(xoadc_12);
                                }
                                if (dc_12.classList.contains('hover') == true) {
                                    let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                                    div.removeChild(xoadc_12);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 12) == 1) {
                            let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                            if (dc12 != null) {
                                if (anduoc(dc12.className.toString()) == 1) {
                                    let xoadc12 = document.querySelector(`.hover11`);
                                    div.removeChild(xoadc12);
                                }
                                if (dc12.classList.contains('hover') == true) {
                                    let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                                    div.removeChild(xoadc12);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 21) == 1) {
                            let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                            if (dc_21 != null) {
                                if (anduoc(dc_21.className.toString()) == 1) {
                                    let xoadc_21 = document.querySelector(`.hover-10`);
                                    div.removeChild(xoadc_21);
                                }
                                if (dc_21.classList.contains('hover') == true) {
                                    let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                                    div.removeChild(xoadc_21);
                                }
                            }
                        }
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                        div.removeChild(an);
                        wn2.className = `piece wn square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);

                }
            }
        }
        if (kt(diachi(nameClass) - 21) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) - 21}`) == null) {
                let taoDiv = document.createElement("div")
                taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) - 21}`);
                taoDiv.style.backgroundColor = "#957373ad";
                taoDiv.onclick = function () {
                    wn2.style.backgroundColor = "transparent";
                    div.removeChild(taoDiv);
                    let b = diachi(nameClass) - 21;
                    let a = diachi(nameClass)
                    banco[a % 10 - 1 - 1][(a - a % 10) / 10 - 1 - 2] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                    banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                    if (kt(diachi(nameClass) + 21) == 1) {
                        let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                        if (dc21 != null) {
                            if (anduoc(dc21.className.toString()) == 1) {
                                let xoadc21 = document.querySelector(`.hover10`);
                                div.removeChild(xoadc21);
                            }
                            if (dc21.classList.contains('hover') == true) {
                                let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                                div.removeChild(xoadc21);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 19) == 1) {
                        let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                        if (dc19 != null) {
                            if (anduoc(dc19.className.toString()) == 1) {
                                let xoadc19 = document.querySelector(`.hover9`);
                                div.removeChild(xoadc19);
                            }
                            if (dc19.classList.contains('hover') == true) {
                                let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                                div.removeChild(xoadc19);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 8) == 1) {
                        let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                        if (dc8 != null) {
                            if (anduoc(dc8.className.toString()) == 1) {
                                let xoadc8 = document.querySelector(`.hover1`);
                                div.removeChild(xoadc8);
                            }
                            if (dc8.classList.contains('hover') == true) {
                                let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                                div.removeChild(xoadc8);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 8) == 1) {
                        let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                        if (dc_8 != null) {
                            if (anduoc(dc_8.className.toString()) == 1) {
                                let xoadc_8 = document.querySelector(`.hover-1`);
                                div.removeChild(xoadc_8);
                            }
                            if (dc_8.classList.contains('hover') == true) {
                                let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                                div.removeChild(xoadc_8);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 12) == 1) {
                        let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                        if (dc_12 != null) {
                            if (anduoc(dc_12.className.toString()) == 1) {
                                let xoadc_12 = document.querySelector(`.hover-11`);
                                div.removeChild(xoadc_12);
                            }
                            if (dc_12.classList.contains('hover') == true) {
                                let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                                div.removeChild(xoadc_12);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 19) == 1) {
                        let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                        if (dc_19 != null) {
                            if (anduoc(dc_19.className.toString()) == 1) {
                                let xoadc_19 = document.querySelector(`.hover-9`);
                                div.removeChild(xoadc_19);
                            }
                            if (dc_19.classList.contains('hover') == true) {
                                let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                                div.removeChild(xoadc_19);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 12) == 1) {
                        let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                        if (dc12 != null) {
                            if (anduoc(dc12.className.toString()) == 1) {
                                let xoadc12 = document.querySelector(`.hover11`);
                                div.removeChild(xoadc12);
                            }
                            if (dc12.classList.contains('hover') == true) {
                                let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                                div.removeChild(xoadc12);
                            }
                        }
                    }
                    temp = true;
                    wn2.className = `piece wn square-${b}`
                    dichuyen()
                }
                div.appendChild(taoDiv);
            } else {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) - 21}`).className.toString()) == 1) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover-10", `square-${diachi(nameClass) - 21}`);
                    taoDiv.style.backgroundColor = "#ff000080";
                    taoDiv.onclick = function () {
                        wn2.style.backgroundColor = "transparent";
                        div.removeChild(taoDiv);
                        let b = diachi(nameClass) - 21;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - 1][(a - a % 10) / 10 - 1 - 2] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        if (kt(diachi(nameClass) + 21) == 1) {
                            let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                            if (dc21 != null) {
                                if (anduoc(dc21.className.toString()) == 1) {
                                    let xoadc21 = document.querySelector(`.hover10`);
                                    div.removeChild(xoadc21);
                                }
                                if (dc21.classList.contains('hover') == true) {
                                    let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                                    div.removeChild(xoadc21);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 19) == 1) {
                            let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                            if (dc19 != null) {
                                if (anduoc(dc19.className.toString()) == 1) {
                                    let xoadc19 = document.querySelector(`.hover9`);
                                    div.removeChild(xoadc19);
                                }
                                if (dc19.classList.contains('hover') == true) {
                                    let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                                    div.removeChild(xoadc19);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 8) == 1) {
                            let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                            if (dc8 != null) {
                                if (anduoc(dc8.className.toString()) == 1) {
                                    let xoadc8 = document.querySelector(`.hover1`);
                                    div.removeChild(xoadc8);
                                }
                                if (dc8.classList.contains('hover') == true) {
                                    let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                                    div.removeChild(xoadc8);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 8) == 1) {
                            let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                            if (dc_8 != null) {
                                if (anduoc(dc_8.className.toString()) == 1) {
                                    let xoadc_8 = document.querySelector(`.hover-1`);
                                    div.removeChild(xoadc_8);
                                }
                                if (dc_8.classList.contains('hover') == true) {
                                    let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                                    div.removeChild(xoadc_8);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 12) == 1) {
                            let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                            if (dc_12 != null) {
                                if (anduoc(dc_12.className.toString()) == 1) {
                                    let xoadc_12 = document.querySelector(`.hover-11`);
                                    div.removeChild(xoadc_12);
                                }
                                if (dc_12.classList.contains('hover') == true) {
                                    let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                                    div.removeChild(xoadc_12);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 19) == 1) {
                            let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                            if (dc_19 != null) {
                                if (anduoc(dc_19.className.toString()) == 1) {
                                    let xoadc_19 = document.querySelector(`.hover-9`);
                                    div.removeChild(xoadc_19);
                                }
                                if (dc_19.classList.contains('hover') == true) {
                                    let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                                    div.removeChild(xoadc_19);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 12) == 1) {
                            let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                            if (dc12 != null) {
                                if (anduoc(dc12.className.toString()) == 1) {
                                    let xoadc12 = document.querySelector(`.hover11`);
                                    div.removeChild(xoadc12);
                                }
                                if (dc12.classList.contains('hover') == true) {
                                    let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                                    div.removeChild(xoadc12);
                                }
                            }
                        }
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                        div.removeChild(an);
                        wn2.className = `piece wn square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);

                }
            }
        }
        if (kt(diachi(nameClass) - 12) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) - 12}`) == null) {
                let taoDiv = document.createElement("div")
                taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) - 12}`);
                taoDiv.style.backgroundColor = "#957373ad";
                taoDiv.onclick = function () {
                    wn2.style.backgroundColor = "transparent";
                    div.removeChild(taoDiv);
                    let b = diachi(nameClass) - 12;
                    let a = diachi(nameClass)
                    banco[a % 10 - 1 - 2][(a - a % 10) / 10 - 1 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                    banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                    if (kt(diachi(nameClass) + 21) == 1) {
                        let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                        if (dc21 != null) {
                            if (anduoc(dc21.className.toString()) == 1) {
                                let xoadc21 = document.querySelector(`.hover10`);
                                div.removeChild(xoadc21);
                            }
                            if (dc21.classList.contains('hover') == true) {
                                let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                                div.removeChild(xoadc21);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 19) == 1) {
                        let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                        if (dc19 != null) {
                            if (anduoc(dc19.className.toString()) == 1) {
                                let xoadc19 = document.querySelector(`.hover9`);
                                div.removeChild(xoadc19);
                            }
                            if (dc19.classList.contains('hover') == true) {
                                let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                                div.removeChild(xoadc19);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 8) == 1) {
                        let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                        if (dc8 != null) {
                            if (anduoc(dc8.className.toString()) == 1) {
                                let xoadc8 = document.querySelector(`.hover1`);
                                div.removeChild(xoadc8);
                            }
                            if (dc8.classList.contains('hover') == true) {
                                let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                                div.removeChild(xoadc8);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 8) == 1) {
                        let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                        if (dc_8 != null) {
                            if (anduoc(dc_8.className.toString()) == 1) {
                                let xoadc_8 = document.querySelector(`.hover-1`);
                                div.removeChild(xoadc_8);
                            }
                            if (dc_8.classList.contains('hover') == true) {
                                let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                                div.removeChild(xoadc_8);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 12) == 1) {
                        let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                        if (dc12 != null) {
                            if (anduoc(dc12.className.toString()) == 1) {
                                let xoadc12 = document.querySelector(`.hover11`);
                                div.removeChild(xoadc12);
                            }
                            if (dc12.classList.contains('hover') == true) {
                                let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                                div.removeChild(xoadc12);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 19) == 1) {
                        let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                        if (dc_19 != null) {
                            if (anduoc(dc_19.className.toString()) == 1) {
                                let xoadc_19 = document.querySelector(`.hover-9`);
                                div.removeChild(xoadc_19);
                            }
                            if (dc_19.classList.contains('hover') == true) {
                                let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                                div.removeChild(xoadc_19);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 21) == 1) {
                        let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                        if (dc_21 != null) {
                            if (anduoc(dc_21.className.toString()) == 1) {
                                let xoadc_21 = document.querySelector(`.hover-10`);
                                div.removeChild(xoadc_21);
                            }
                            if (dc_21.classList.contains('hover') == true) {
                                let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                                div.removeChild(xoadc_21);
                            }
                        }
                    }
                    temp = true;
                    wn2.className = `piece wn square-${b}`
                    dichuyen()
                }
                div.appendChild(taoDiv);
            } else {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) - 12}`).className.toString()) == 1) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover-11", `square-${diachi(nameClass) - 12}`);
                    taoDiv.style.backgroundColor = "#ff000080";
                    taoDiv.onclick = function () {
                        wn2.style.backgroundColor = "transparent";
                        div.removeChild(taoDiv);
                        let b = diachi(nameClass) - 12;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - 2][(a - a % 10) / 10 - 1 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        if (kt(diachi(nameClass) + 21) == 1) {
                            let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                            if (dc21 != null) {
                                if (anduoc(dc21.className.toString()) == 1) {
                                    let xoadc21 = document.querySelector(`.hover10`);
                                    div.removeChild(xoadc21);
                                }
                                if (dc21.classList.contains('hover') == true) {
                                    let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                                    div.removeChild(xoadc21);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 19) == 1) {
                            let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                            if (dc19 != null) {
                                if (anduoc(dc19.className.toString()) == 1) {
                                    let xoadc19 = document.querySelector(`.hover9`);
                                    div.removeChild(xoadc19);
                                }
                                if (dc19.classList.contains('hover') == true) {
                                    let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                                    div.removeChild(xoadc19);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 8) == 1) {
                            let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                            if (dc8 != null) {
                                if (anduoc(dc8.className.toString()) == 1) {
                                    let xoadc8 = document.querySelector(`.hover1`);
                                    div.removeChild(xoadc8);
                                }
                                if (dc8.classList.contains('hover') == true) {
                                    let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                                    div.removeChild(xoadc8);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 8) == 1) {
                            let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                            if (dc_8 != null) {
                                if (anduoc(dc_8.className.toString()) == 1) {
                                    let xoadc_8 = document.querySelector(`.hover-1`);
                                    div.removeChild(xoadc_8);
                                }
                                if (dc_8.classList.contains('hover') == true) {
                                    let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                                    div.removeChild(xoadc_8);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 12) == 1) {
                            let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                            if (dc12 != null) {
                                if (anduoc(dc12.className.toString()) == 1) {
                                    let xoadc12 = document.querySelector(`.hover11`);
                                    div.removeChild(xoadc12);
                                }
                                if (dc12.classList.contains('hover') == true) {
                                    let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                                    div.removeChild(xoadc12);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 19) == 1) {
                            let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                            if (dc_19 != null) {
                                if (anduoc(dc_19.className.toString()) == 1) {
                                    let xoadc_19 = document.querySelector(`.hover-9`);
                                    div.removeChild(xoadc_19);
                                }
                                if (dc_19.classList.contains('hover') == true) {
                                    let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                                    div.removeChild(xoadc_19);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 21) == 1) {
                            let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                            if (dc_21 != null) {
                                if (anduoc(dc_21.className.toString()) == 1) {
                                    let xoadc_21 = document.querySelector(`.hover-10`);
                                    div.removeChild(xoadc_21);
                                }
                                if (dc_21.classList.contains('hover') == true) {
                                    let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                                    div.removeChild(xoadc_21);
                                }
                            }
                        }
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                        div.removeChild(an);
                        wn2.className = `piece wn square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);

                }
            }
        }
        temp = false;
    } else {
        wn2.style.backgroundColor = "transparent";
        let nameClass = wn2.className.toString()
        if (kt(diachi(nameClass) + 21) == 1) {
            let dc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`)
            if (dc21 != null) {
                if (anduoc(dc21.className.toString()) == 1) {
                    let xoadc21 = document.querySelector(`.hover10`);
                    div.removeChild(xoadc21);
                }
                if (dc21.classList.contains('hover') == true) {
                    let xoadc21 = document.querySelector(`.square-${diachi(nameClass) + 21}`);
                    div.removeChild(xoadc21);
                }
            }
        }
        if (kt(diachi(nameClass) + 19) == 1) {
            let dc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`)
            if (dc19 != null) {
                if (anduoc(dc19.className.toString()) == 1) {
                    let xoadc19 = document.querySelector(`.hover9`);
                    div.removeChild(xoadc19);
                }
                if (dc19.classList.contains('hover') == true) {
                    let xoadc19 = document.querySelector(`.square-${diachi(nameClass) + 19}`);
                    div.removeChild(xoadc19);
                }
            }
        }
        if (kt(diachi(nameClass) + 12) == 1) {
            let dc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`)
            if (dc12 != null) {
                if (anduoc(dc12.className.toString()) == 1) {
                    let xoadc12 = document.querySelector(`.hover11`);
                    div.removeChild(xoadc12);
                }
                if (dc12.classList.contains('hover') == true) {
                    let xoadc12 = document.querySelector(`.square-${diachi(nameClass) + 12}`);
                    div.removeChild(xoadc12);
                }
            }
        }
        if (kt(diachi(nameClass) + 8) == 1) {
            let dc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`)
            if (dc8 != null) {
                if (anduoc(dc8.className.toString()) == 1) {
                    let xoadc8 = document.querySelector(`.hover1`);
                    div.removeChild(xoadc8);
                }
                if (dc8.classList.contains('hover') == true) {
                    let xoadc8 = document.querySelector(`.square-${diachi(nameClass) + 8}`);
                    div.removeChild(xoadc8);
                }
            }
        }
        if (kt(diachi(nameClass) - 8) == 1) {
            let dc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`)
            if (dc_8 != null) {
                if (anduoc(dc_8.className.toString()) == 1) {
                    let xoadc_8 = document.querySelector(`.hover-1`);
                    div.removeChild(xoadc_8);
                }
                if (dc_8.classList.contains('hover') == true) {
                    let xoadc_8 = document.querySelector(`.square-${diachi(nameClass) - 8}`);
                    div.removeChild(xoadc_8);
                }
            }
        }
        if (kt(diachi(nameClass) - 12) == 1) {
            let dc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`)
            if (dc_12 != null) {
                if (anduoc(dc_12.className.toString()) == 1) {
                    let xoadc_12 = document.querySelector(`.hover-11`);
                    div.removeChild(xoadc_12);
                }
                if (dc_12.classList.contains('hover') == true) {
                    let xoadc_12 = document.querySelector(`.square-${diachi(nameClass) - 12}`);
                    div.removeChild(xoadc_12);
                }
            }
        }
        if (kt(diachi(nameClass) - 19) == 1) {
            let dc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`)
            if (dc_19 != null) {
                if (anduoc(dc_19.className.toString()) == 1) {
                    let xoadc_19 = document.querySelector(`.hover-9`);
                    div.removeChild(xoadc_19);
                }
                if (dc_19.classList.contains('hover') == true) {
                    let xoadc_19 = document.querySelector(`.square-${diachi(nameClass) - 19}`);
                    div.removeChild(xoadc_19);
                }
            }
        }
        if (kt(diachi(nameClass) - 21) == 1) {
            let dc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`)
            if (dc_21 != null) {
                if (anduoc(dc_21.className.toString()) == 1) {
                    let xoadc_21 = document.querySelector(`.hover-10`);
                    div.removeChild(xoadc_21);
                }
                if (dc_21.classList.contains('hover') == true) {
                    let xoadc_21 = document.querySelector(`.square-${diachi(nameClass) - 21}`);
                    div.removeChild(xoadc_21);
                }
            }
        }
        temp = true;
    }
}
//Di chuyen tuong
function tuong(nameClass) {
    for (let i = 1; i < phaitren; i++) {
        let x = document.querySelector(`.square-${diachi(nameClass) + i * 10 + i}`);
        div.removeChild(x);
    }
    for (let i = 1; i < phaiduoi; i++) {
        let x = document.querySelector(`.square-${diachi(nameClass) + i * 10 - i}`);
        div.removeChild(x);
    }
    for (let i = 1; i < traitren; i++) {
        let x = document.querySelector(`.square-${diachi(nameClass) - i * 10 + i}`);
        div.removeChild(x);
    }
    for (let i = 1; i < traiduoi; i++) {
        let x = document.querySelector(`.square-${diachi(nameClass) - i * 10 - i}`);
        div.removeChild(x);
    }
    if (kt(diachi(nameClass) + phaitren * 10 + phaitren) == 1) {
        let phaitren1 = document.querySelector(`.square-${diachi(nameClass) + phaitren * 10 + phaitren}`)
        if (phaitren1 != null) {
            if (anduoc(phaitren1.className.toString()) == 1) {
                let xoaphaitren = document.querySelector(`.hover11`);
                div.removeChild(xoaphaitren);
            }
        }
    }
    if (kt(diachi(nameClass) + phaiduoi * 10 - phaiduoi) == 1) {
        let phaiduoi1 = document.querySelector(`.square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`)
        if (phaiduoi1 != null) {
            if (anduoc(phaiduoi1.className.toString()) == 1) {
                let xoaphaiduoi = document.querySelector(`.hover-9`);
                div.removeChild(xoaphaiduoi);
            }
        }
    }
    if (kt(diachi(nameClass) - traitren * 10 + traitren) == 1) {
        let traitren1 = document.querySelector(`.square-${diachi(nameClass) - traitren * 10 + traitren}`)
        if (traitren1 != null) {
            if (anduoc(traitren1.className.toString()) == 1) {
                let xoatraitren = document.querySelector(`.hover9`);
                div.removeChild(xoatraitren);
            }
        }
    }
    if (kt(diachi(nameClass) - traiduoi * 10 - traiduoi) == 1) {
        let traiduoi1 = document.querySelector(`.square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`)
        if (traiduoi1 != null) {
            if (anduoc(traiduoi1.className.toString()) == 1) {
                let xoatraiduoi = document.querySelector(`.hover-11`);
                div.removeChild(xoatraiduoi);
            }
        }
    }
}
var traitren = 1;
var phaiduoi = 1;
var traiduoi = 1;
var phaitren = 1;
wb1.onclick = function () {
    if (temp == true) {
        wb1.style.backgroundColor = "#957373ad";
        let nameClass = wb1.className.toString()
        for (let i = 1; i < 8; i++)          //phaitren
        {
            if (kt(diachi(nameClass) + i * 10 + i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) + i * 10 + i}`) == null) {
                    phaitren++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + i * 10 + i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wb1.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10 + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        tuong(nameClass)
                        temp = true;
                        traitren = 1;
                        traiduoi = 1;
                        phaitren = 1;
                        phaiduoi = 1;
                        wb1.className = `piece wb square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + phaitren * 10 + phaitren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover11", `square-${diachi(nameClass) + phaitren * 10 + phaitren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wb1.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + phaitren * 10 + phaitren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + phaitren][(a - a % 10) / 10 - 1 + phaitren] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            tuong(nameClass)
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phaitren * 10 + phaitren}`)
                            div.removeChild(an);
                            phaitren = 1;
                            phaiduoi = 1;
                            traitren = 1;
                            traiduoi = 1;
                            wb1.className = `piece wb square-${b}`
                            dichuyen()
                        }
                        div.appendChild(taoDiv);

                    }
                    break;
                }
            } else break
        }
        for (let i = 1; i < 8; i++)          //phaiduoi
        {
            if (kt(diachi(nameClass) + i * 10 - i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) + i * 10 - i}`) == null) {
                    phaiduoi++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + i * 10 - i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wb1.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10 - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        tuong(nameClass)
                        temp = true;
                        traitren = 1;
                        traiduoi = 1;
                        phaitren = 1;
                        phaiduoi = 1;
                        wb1.className = `piece wb square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover-9", `square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wb1.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + phaiduoi * 10 - phaiduoi;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 - phaiduoi][(a - a % 10) / 10 - 1 + phaiduoi] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            tuong(nameClass)
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`)
                            div.removeChild(an);
                            traitren = 1;
                            traiduoi = 1;
                            phaitren = 1;
                            phaiduoi = 1;
                            wb1.className = `piece wb square-${b}`
                            dichuyen()
                        }
                        div.appendChild(taoDiv);

                    }
                    break;
                }
            } else break
        }
        for (let i = 1; i < 8; i++)          //traitren
        {
            if (kt(diachi(nameClass) - i * 10 + i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) - i * 10 + i}`) == null) {
                    traitren++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) - i * 10 + i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wb1.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10 + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        tuong(nameClass)
                        temp = true;
                        traitren = 1;
                        traiduoi = 1;
                        phaitren = 1;
                        phaiduoi = 1;
                        wb1.className = `piece wb square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) - traitren * 10 + traitren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover9", `square-${diachi(nameClass) - traitren * 10 + traitren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wb1.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) - traitren * 10 + traitren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + traitren][(a - a % 10) / 10 - 1 - traitren] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            tuong(nameClass)
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - traitren * 10 + traitren}`)
                            div.removeChild(an);
                            phaitren = 1;
                            phaiduoi = 1;
                            traitren = 1;
                            traiduoi = 1;
                            wb1.className = `piece wb square-${b}`
                            dichuyen()
                        }
                        div.appendChild(taoDiv);

                    }
                    break;
                }
            } else break
        }
        for (let i = 1; i < 8; i++)          //traiduoi
        {
            if (kt(diachi(nameClass) - i * 10 - i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) - i * 10 - i}`) == null) {
                    traiduoi++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) - i * 10 - i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wb1.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10 - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        tuong(nameClass)
                        temp = true;
                        traitren = 1;
                        traiduoi = 1;
                        phaitren = 1;
                        phaiduoi = 1;
                        wb1.className = `piece wb square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover-11", `square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wb1.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) - traiduoi * 10 - traiduoi;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 - traiduoi][(a - a % 10) / 10 - 1 - traiduoi] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            tuong(nameClass)
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`)
                            div.removeChild(an);
                            phaitren = 1;
                            phaiduoi = 1;
                            traitren = 1;
                            traiduoi = 1;
                            wb1.className = `piece wb square-${b}`
                            dichuyen()
                        }
                        div.appendChild(taoDiv);
                    }
                    break;
                }
            } else break
        }
        temp = false;
    } else {
        wb1.style.backgroundColor = "transparent";
        let nameClass = wb1.className.toString()
        tuong(nameClass)
        phaitren = 1;
        phaiduoi = 1;
        traitren = 1;
        traiduoi = 1;
        temp = true;
    }
}
wb2.onclick = function () {
    if (temp == true) {
        wb2.style.backgroundColor = "#957373ad";
        let nameClass = wb2.className.toString()
        for (let i = 1; i < 8; i++)          //phaitren
        {
            if (kt(diachi(nameClass) + i * 10 + i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) + i * 10 + i}`) == null) {
                    phaitren++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + i * 10 + i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wb2.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10 + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        tuong(nameClass)
                        temp = true;
                        traitren = 1;
                        traiduoi = 1;
                        phaitren = 1;
                        phaiduoi = 1;
                        wb2.className = `piece wb square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + phaitren * 10 + phaitren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover11", `square-${diachi(nameClass) + phaitren * 10 + phaitren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wb2.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + phaitren * 10 + phaitren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + phaitren][(a - a % 10) / 10 - 1 + phaitren] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            tuong(nameClass)
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phaitren * 10 + phaitren}`)
                            div.removeChild(an);
                            phaitren = 1;
                            phaiduoi = 1;
                            traitren = 1;
                            traiduoi = 1;
                            wb2.className = `piece wb square-${b}`
                            dichuyen()
                        }
                        div.appendChild(taoDiv);

                    }
                    break;
                }
            } else break
        }
        for (let i = 1; i < 8; i++)          //phaiduoi
        {
            if (kt(diachi(nameClass) + i * 10 - i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) + i * 10 - i}`) == null) {
                    phaiduoi++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + i * 10 - i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wb2.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10 - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        tuong(nameClass)
                        temp = true;
                        traitren = 1;
                        traiduoi = 1;
                        phaitren = 1;
                        phaiduoi = 1;
                        wb2.className = `piece wb square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover-9", `square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wb2.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + phaiduoi * 10 - phaiduoi;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 - phaiduoi][(a - a % 10) / 10 - 1 + phaiduoi] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            tuong(nameClass)
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`)
                            div.removeChild(an);
                            traitren = 1;
                            traiduoi = 1;
                            phaitren = 1;
                            phaiduoi = 1;
                            wb2.className = `piece wb square-${b}`
                            dichuyen()
                        }
                        div.appendChild(taoDiv);

                    }
                    break;
                }
            } else break
        }
        for (let i = 1; i < 8; i++)          //traitren
        {
            if (kt(diachi(nameClass) - i * 10 + i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) - i * 10 + i}`) == null) {
                    traitren++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) - i * 10 + i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wb2.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10 + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        tuong(nameClass)
                        temp = true;
                        traitren = 1;
                        traiduoi = 1;
                        phaitren = 1;
                        phaiduoi = 1;
                        wb2.className = `piece wb square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) - traitren * 10 + traitren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover9", `square-${diachi(nameClass) - traitren * 10 + traitren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wb2.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) - traitren * 10 + traitren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + traitren][(a - a % 10) / 10 - 1 - traitren] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            tuong(nameClass)
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - traitren * 10 + traitren}`)
                            div.removeChild(an);
                            phaitren = 1;
                            phaiduoi = 1;
                            traitren = 1;
                            traiduoi = 1;
                            wb2.className = `piece wb square-${b}`
                            dichuyen()
                        }
                        div.appendChild(taoDiv);

                    }
                    break;
                }
            } else break
        }
        for (let i = 1; i < 8; i++)          //traiduoi
        {
            if (kt(diachi(nameClass) - i * 10 - i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) - i * 10 - i}`) == null) {
                    traiduoi++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) - i * 10 - i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wb2.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10 - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        tuong(nameClass)
                        temp = true;
                        traitren = 1;
                        traiduoi = 1;
                        phaitren = 1;
                        phaiduoi = 1;
                        wb2.className = `piece wb square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover-11", `square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wb2.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) - traiduoi * 10 - traiduoi;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 - traiduoi][(a - a % 10) / 10 - 1 - traiduoi] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            tuong(nameClass)
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`)
                            div.removeChild(an);
                            phaitren = 1;
                            phaiduoi = 1;
                            traitren = 1;
                            traiduoi = 1;
                            wb2.className = `piece wb square-${b}`
                            dichuyen()
                        }
                        div.appendChild(taoDiv);
                    }
                    break;
                }
            } else break
        }
        temp = false;
    } else {
        wb2.style.backgroundColor = "transparent";
        let nameClass = wb2.className.toString()
        tuong(nameClass)
        phaitren = 1;
        phaiduoi = 1;
        traitren = 1;
        traiduoi = 1;
        temp = true;
    }
}
//Di chuyen queen 1
wq1.onclick = function () {
    if (temp == true) {
        wq1.style.backgroundColor = "#957373ad";
        let nameClass = wq1.className.toString()
        for (let i = 1; i < 8; i++)          //tren
        {
            if (kt(diachi(nameClass) + i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) + i}`) == null) {
                    tren++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wq1.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        xe(nameClass)
                        tuong(nameClass)
                        temp = true;
                        tren = 1;
                        duoi = 1;
                        trai = 1;
                        phai = 1;
                        phaitren = 1;
                        phaiduoi = 1;
                        traitren = 1;
                        traiduoi = 1;
                        wq1.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + tren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover1", `square-${diachi(nameClass) + tren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq1.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + tren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + tren][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            xe(nameClass)
                            tuong(nameClass)
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + tren}`)
                            div.removeChild(an);
                            tren = 1;
                            duoi = 1;
                            trai = 1;
                            phai = 1;
                            phaitren = 1;
                            phaiduoi = 1;
                            traitren = 1;
                            traiduoi = 1;
                            wq1.className = `piece wq square-${b}`
                            dichuyen()
                        }
                        div.appendChild(taoDiv);
                    }
                    break;
                }
            } else break
        }
        for (let i = 1; i < 8; i++)          //duoi
        {
            if (kt(diachi(nameClass) - i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) - i}`) == null) {
                    duoi++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) - i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wq1.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        xe(nameClass)
                        tuong(nameClass)
                        temp = true;
                        tren = 1;
                        duoi = 1;
                        trai = 1;
                        phai = 1;
                        phaitren = 1;
                        phaiduoi = 1;
                        traitren = 1;
                        traiduoi = 1;
                        wq1.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) - duoi}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover-1", `square-${diachi(nameClass) - duoi}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wr1.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) - duoi;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 - duoi][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            xe(nameClass)
                            tuong(nameClass)
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - duoi}`)
                            div.removeChild(an);
                            tren = 1;
                            duoi = 1;
                            trai = 1;
                            phai = 1;
                            phaitren = 1;
                            phaiduoi = 1;
                            traitren = 1;
                            traiduoi = 1;
                            wq1.className = `piece wq square-${b}`
                            dichuyen()
                        }
                        div.appendChild(taoDiv);

                    }
                    break;
                }
            } else break
        }
        for (let i = 1; i < 8; i++)          //trai
        {
            if (kt(diachi(nameClass) - i * 10) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) - i * 10}`) == null) {
                    trai++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) - i * 10}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wq1.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        xe(nameClass)
                        tuong(nameClass)
                        temp = true;
                        tren = 1;
                        duoi = 1;
                        trai = 1;
                        phai = 1;
                        phaitren = 1;
                        phaiduoi = 1;
                        traitren = 1;
                        traiduoi = 1;
                        wq1.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) - trai * 10}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover-10", `square-${diachi(nameClass) - trai * 10}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wr1.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) - trai * 10;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1 - trai] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            xe(nameClass)
                            tuong(nameClass)
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - trai * 10}`)
                            div.removeChild(an);
                            tren = 1;
                            duoi = 1;
                            trai = 1;
                            phai = 1;
                            phaitren = 1;
                            phaiduoi = 1;
                            traitren = 1;
                            traiduoi = 1;
                            wq1.className = `piece wq square-${b}`
                            dichuyen()
                        }
                        div.appendChild(taoDiv);

                    }
                    break;
                }
            } else break
        }
        for (let i = 1; i < 8; i++)          //phai
        {
            if (kt(diachi(nameClass) + i * 10) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) + i * 10}`) == null) {
                    phai++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + i * 10}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wq1.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        xe(nameClass)
                        tuong(nameClass)
                        temp = true;
                        tren = 1;
                        duoi = 1;
                        trai = 1;
                        phai = 1;
                        phaitren = 1;
                        phaiduoi = 1;
                        traitren = 1;
                        traiduoi = 1;
                        wq1.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + phai * 10}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover10", `square-${diachi(nameClass) + phai * 10}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wr1.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + phai * 10;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1 + phai] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            xe(nameClass)
                            tuong(nameClass)
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phai * 10}`)
                            div.removeChild(an);
                            tren = 1;
                            duoi = 1;
                            trai = 1;
                            phai = 1;
                            phaitren = 1;
                            phaiduoi = 1;
                            traitren = 1;
                            traiduoi = 1;
                            wq1.className = `piece wq square-${b}`
                            dichuyen()
                        }
                        div.appendChild(taoDiv);

                    }
                    break;
                }
            } else break
        }
        for (let i = 1; i < 8; i++)          //phaitren
        {
            if (kt(diachi(nameClass) + i * 10 + i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) + i * 10 + i}`) == null) {
                    phaitren++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + i * 10 + i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wq1.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10 + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        xe(nameClass)
                        tuong(nameClass)
                        temp = true;
                        tren = 1;
                        duoi = 1;
                        trai = 1;
                        phai = 1;
                        phaitren = 1;
                        phaiduoi = 1;
                        traitren = 1;
                        traiduoi = 1;
                        wq1.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + phaitren * 10 + phaitren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover11", `square-${diachi(nameClass) + phaitren * 10 + phaitren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq1.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + phaitren * 10 + phaitren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + phaitren][(a - a % 10) / 10 - 1 + phaitren] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            xe(nameClass)
                            tuong(nameClass)
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phaitren * 10 + phaitren}`)
                            div.removeChild(an);
                            tren = 1;
                            duoi = 1;
                            trai = 1;
                            phai = 1;
                            phaitren = 1;
                            phaiduoi = 1;
                            traitren = 1;
                            traiduoi = 1;
                            wq1.className = `piece wq square-${b}`
                            dichuyen()
                        }
                        div.appendChild(taoDiv);

                    }
                    break;
                }
            } else break
        }
        for (let i = 1; i < 8; i++)          //phaiduoi
        {
            if (kt(diachi(nameClass) + i * 10 - i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) + i * 10 - i}`) == null) {
                    phaiduoi++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + i * 10 - i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wq1.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10 - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        xe(nameClass)
                        tuong(nameClass)
                        temp = true;
                        tren = 1;
                        duoi = 1;
                        trai = 1;
                        phai = 1;
                        phaitren = 1;
                        phaiduoi = 1;
                        traitren = 1;
                        traiduoi = 1;
                        wq1.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover-9", `square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq1.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + phaiduoi * 10 - phaiduoi;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 - phaiduoi][(a - a % 10) / 10 - 1 + phaiduoi] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            xe(nameClass)
                            tuong(nameClass)
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`)
                            div.removeChild(an);
                            tren = 1;
                            duoi = 1;
                            trai = 1;
                            phai = 1;
                            phaitren = 1;
                            phaiduoi = 1;
                            traitren = 1;
                            traiduoi = 1;
                            wq1.className = `piece wq square-${b}`
                            dichuyen()
                        }
                        div.appendChild(taoDiv);

                    }
                    break;
                }
            } else break
        }
        for (let i = 1; i < 8; i++)          //traitren
        {
            if (kt(diachi(nameClass) - i * 10 + i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) - i * 10 + i}`) == null) {
                    traitren++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) - i * 10 + i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wq1.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10 + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        xe(nameClass)
                        tuong(nameClass)
                        temp = true;
                        tren = 1;
                        duoi = 1;
                        trai = 1;
                        phai = 1;
                        phaitren = 1;
                        phaiduoi = 1;
                        traitren = 1;
                        traiduoi = 1;
                        wq1.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) - traitren * 10 + traitren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover9", `square-${diachi(nameClass) - traitren * 10 + traitren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq1.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) - traitren * 10 + traitren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + traitren][(a - a % 10) / 10 - 1 - traitren] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            xe(nameClass)
                            tuong(nameClass)
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - traitren * 10 + traitren}`)
                            div.removeChild(an);
                            tren = 1;
                            duoi = 1;
                            trai = 1;
                            phai = 1;
                            phaitren = 1;
                            phaiduoi = 1;
                            traitren = 1;
                            traiduoi = 1;
                            wq1.className = `piece wq square-${b}`
                            dichuyen()
                        }
                        div.appendChild(taoDiv);

                    }
                    break;
                }
            } else break
        }
        for (let i = 1; i < 8; i++)          //traiduoi
        {
            if (kt(diachi(nameClass) - i * 10 - i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) - i * 10 - i}`) == null) {
                    traiduoi++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) - i * 10 - i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wq1.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10 - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        xe(nameClass)
                        tuong(nameClass)
                        temp = true;
                        tren = 1;
                        duoi = 1;
                        trai = 1;
                        phai = 1;
                        phaitren = 1;
                        phaiduoi = 1;
                        traitren = 1;
                        traiduoi = 1;
                        wq1.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover-11", `square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq1.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) - traiduoi * 10 - traiduoi;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 - traiduoi][(a - a % 10) / 10 - 1 - traiduoi] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            xe(nameClass)
                            tuong(nameClass)
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`)
                            div.removeChild(an);
                            tren = 1;
                            duoi = 1;
                            trai = 1;
                            phai = 1;
                            phaitren = 1;
                            phaiduoi = 1;
                            traitren = 1;
                            traiduoi = 1;
                            wq1.className = `piece wq square-${b}`
                            dichuyen()
                        }
                        div.appendChild(taoDiv);
                    }
                    break;
                }
            } else break
        }
        temp = false;
    } else {
        wq1.style.backgroundColor = "transparent";
        let nameClass = wq1.className.toString()
        xe(nameClass)
        tuong(nameClass)
        tren = 1;
        duoi = 1
        trai = 1;
        phai = 1;
        phaitren = 1;
        phaiduoi = 1;
        traitren = 1;
        traiduoi = 1;
        temp = true;
    }
}
//Di chuyen king 1
wk1.onclick = function () {
    if (temp == true) {
        wk1.style.backgroundColor = "#957373ad";
        let nameClass = wk1.className.toString()
        if (kt(diachi(nameClass) + 11) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) + 11}`) == null) {
                let taoDiv = document.createElement("div")
                taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + 11}`);
                taoDiv.style.backgroundColor = "#957373ad";
                taoDiv.onclick = function () {
                    wk1.style.backgroundColor = "transparent";
                    let x = document.querySelector(`.square-${diachi(nameClass) + 11}`);
                    div.removeChild(x);
                    let b = diachi(nameClass) + 11;
                    let a = diachi(nameClass)
                    banco[a % 10 - 1 + 1][(a - a % 10) / 10 - 1 + 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                    banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                    if (kt(diachi(nameClass) + 10) == 1) {
                        let dc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`)
                        if (dc10 != null) {
                            if (anduoc(dc10.className.toString()) == 1) {
                                let xoadc10 = document.querySelector(`.hover10`);
                                div.removeChild(xoadc10);
                            }
                            if (dc10.classList.contains('hover') == true) {
                                let xoadc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`);
                                div.removeChild(xoadc10);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 9) == 1) {
                        let dc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`)
                        if (dc9 != null) {
                            if (anduoc(dc9.className.toString()) == 1) {
                                let xoadc9 = document.querySelector(`.hover9`);
                                div.removeChild(xoadc9);
                            }
                            if (dc9.classList.contains('hover') == true) {
                                let xoadc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`);
                                div.removeChild(xoadc9);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 1) == 1) {
                        let dc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`)
                        if (dc1 != null) {
                            if (anduoc(dc1.className.toString()) == 1) {
                                let xoadc1 = document.querySelector(`.hover1`);
                                div.removeChild(xoadc1);
                            }
                            if (dc1.classList.contains('hover') == true) {
                                let xoadc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`);
                                div.removeChild(xoadc1);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 1) == 1) {
                        let dc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`)
                        if (dc_1 != null) {
                            if (anduoc(dc_1.className.toString()) == 1) {
                                let xoadc_1 = document.querySelector(`.hover-1`);
                                div.removeChild(xoadc_1);
                            }
                            if (dc_1.classList.contains('hover') == true) {
                                let xoadc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`);
                                div.removeChild(xoadc_1);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 11) == 1) {
                        let dc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`)
                        if (dc_11 != null) {
                            if (anduoc(dc_11.className.toString()) == 1) {
                                let xoadc_11 = document.querySelector(`.hover-11`);
                                div.removeChild(xoadc_11);
                            }
                            if (dc_11.classList.contains('hover') == true) {
                                let xoadc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`);
                                div.removeChild(xoadc_11);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 9) == 1) {
                        let dc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                        if (dc_9 != null) {
                            if (anduoc(dc_9.className.toString()) == 1) {
                                let xoadc_9 = document.querySelector(`.hover-9`);
                                div.removeChild(xoadc_9);
                            }
                            if (dc_9.classList.contains('hover') == true) {
                                let xoadc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`);
                                div.removeChild(xoadc_9);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 10) == 1) {
                        let dc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`)
                        if (dc_10 != null) {
                            if (anduoc(dc_10.className.toString()) == 1) {
                                let xoadc_10 = document.querySelector(`.hover-10`);
                                div.removeChild(xoadc_10);
                            }
                            if (dc_10.classList.contains('hover') == true) {
                                let xoadc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`);
                                div.removeChild(xoadc_10);
                            }
                        }
                    }
                    temp = true;
                    wk1.className = `piece wk square-${b}`
                    dichuyen()
                }
                div.appendChild(taoDiv);
            } else {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) + 11}`).className.toString()) == 1) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover11", `square-${diachi(nameClass) + 11}`);
                    taoDiv.style.backgroundColor = "#ff000080";
                    taoDiv.onclick = function () {
                        wk1.style.backgroundColor = "transparent";
                        div.removeChild(taoDiv);
                        let b = diachi(nameClass) + 11;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + 1][(a - a % 10) / 10 - 1 + 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        if (kt(diachi(nameClass) + 10) == 1) {
                            let dc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`)
                            if (dc10 != null) {
                                if (anduoc(dc10.className.toString()) == 1) {
                                    let xoadc10 = document.querySelector(`.hover10`);
                                    div.removeChild(xoadc10);
                                }
                                if (dc10.classList.contains('hover') == true) {
                                    let xoadc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`);
                                    div.removeChild(xoadc10);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 9) == 1) {
                            let dc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`)
                            if (dc9 != null) {
                                if (anduoc(dc9.className.toString()) == 1) {
                                    let xoadc9 = document.querySelector(`.hover9`);
                                    div.removeChild(xoadc9);
                                }
                                if (dc9.classList.contains('hover') == true) {
                                    let xoadc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`);
                                    div.removeChild(xoadc9);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 1) == 1) {
                            let dc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`)
                            if (dc1 != null) {
                                if (anduoc(dc1.className.toString()) == 1) {
                                    let xoadc1 = document.querySelector(`.hover1`);
                                    div.removeChild(xoadc1);
                                }
                                if (dc1.classList.contains('hover') == true) {
                                    let xoadc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`);
                                    div.removeChild(xoadc1);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 1) == 1) {
                            let dc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`)
                            if (dc_1 != null) {
                                if (anduoc(dc_1.className.toString()) == 1) {
                                    let xoadc_1 = document.querySelector(`.hover-1`);
                                    div.removeChild(xoadc_1);
                                }
                                if (dc_1.classList.contains('hover') == true) {
                                    let xoadc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`);
                                    div.removeChild(xoadc_1);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 11) == 1) {
                            let dc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`)
                            if (dc_11 != null) {
                                if (anduoc(dc_11.className.toString()) == 1) {
                                    let xoadc_11 = document.querySelector(`.hover-11`);
                                    div.removeChild(xoadc_11);
                                }
                                if (dc_11.classList.contains('hover') == true) {
                                    let xoadc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`);
                                    div.removeChild(xoadc_11);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 9) == 1) {
                            let dc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                            if (dc_9 != null) {
                                if (anduoc(dc_9.className.toString()) == 1) {
                                    let xoadc_9 = document.querySelector(`.hover-9`);
                                    div.removeChild(xoadc_9);
                                }
                                if (dc_9.classList.contains('hover') == true) {
                                    let xoadc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`);
                                    div.removeChild(xoadc_9);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 10) == 1) {
                            let dc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`)
                            if (dc_10 != null) {
                                if (anduoc(dc_10.className.toString()) == 1) {
                                    let xoadc_10 = document.querySelector(`.hover-10`);
                                    div.removeChild(xoadc_10);
                                }
                                if (dc_10.classList.contains('hover') == true) {
                                    let xoadc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`);
                                    div.removeChild(xoadc_10);
                                }
                            }
                        }
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                        div.removeChild(an);
                        wk1.className = `piece wk square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);

                }
            }
        }
        if (kt(diachi(nameClass) + 10) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) + 10}`) == null) {
                let taoDiv = document.createElement("div")
                taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + 10}`);
                taoDiv.style.backgroundColor = "#957373ad";
                taoDiv.onclick = function () {
                    wk1.style.backgroundColor = "transparent";
                    div.removeChild(taoDiv);
                    let b = diachi(nameClass) + 10;
                    let a = diachi(nameClass)
                    banco[a % 10 - 1][(a - a % 10) / 10 - 1 + 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                    banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                    if (kt(diachi(nameClass) + 11) == 1) {
                        let dc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                        if (dc11 != null) {
                            if (anduoc(dc11.className.toString()) == 1) {
                                let xoadc11 = document.querySelector(`.hover11`);
                                div.removeChild(xoadc11);
                            }
                            if (dc11.classList.contains('hover') == true) {
                                let xoadc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`);
                                div.removeChild(xoadc11);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 9) == 1) {
                        let dc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`)
                        if (dc9 != null) {
                            if (anduoc(dc9.className.toString()) == 1) {
                                let xoadc9 = document.querySelector(`.hover9`);
                                div.removeChild(xoadc9);
                            }
                            if (dc9.classList.contains('hover') == true) {
                                let xoadc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`);
                                div.removeChild(xoadc9);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 1) == 1) {
                        let dc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`)
                        if (dc1 != null) {
                            if (anduoc(dc1.className.toString()) == 1) {
                                let xoadc1 = document.querySelector(`.hover1`);
                                div.removeChild(xoadc1);
                            }
                            if (dc1.classList.contains('hover') == true) {
                                let xoadc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`);
                                div.removeChild(xoadc1);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 1) == 1) {
                        let dc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`)
                        if (dc_1 != null) {
                            if (anduoc(dc_1.className.toString()) == 1) {
                                let xoadc_1 = document.querySelector(`.hover-1`);
                                div.removeChild(xoadc_1);
                            }
                            if (dc_1.classList.contains('hover') == true) {
                                let xoadc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`);
                                div.removeChild(xoadc_1);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 11) == 1) {
                        let dc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`)
                        if (dc_11 != null) {
                            if (anduoc(dc_11.className.toString()) == 1) {
                                let xoadc_11 = document.querySelector(`.hover-11`);
                                div.removeChild(xoadc_11);
                            }
                            if (dc_11.classList.contains('hover') == true) {
                                let xoadc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`);
                                div.removeChild(xoadc_11);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 9) == 1) {
                        let dc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                        if (dc_9 != null) {
                            if (anduoc(dc_9.className.toString()) == 1) {
                                let xoadc_9 = document.querySelector(`.hover-9`);
                                div.removeChild(xoadc_9);
                            }
                            if (dc_9.classList.contains('hover') == true) {
                                let xoadc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`);
                                div.removeChild(xoadc_9);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 10) == 1) {
                        let dc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`)
                        if (dc_10 != null) {
                            if (anduoc(dc_10.className.toString()) == 1) {
                                let xoadc_10 = document.querySelector(`.hover-10`);
                                div.removeChild(xoadc_10);
                            }
                            if (dc_10.classList.contains('hover') == true) {
                                let xoadc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`);
                                div.removeChild(xoadc_10);
                            }
                        }
                    }
                    temp = true;
                    wk1.className = `piece wk square-${b}`
                    dichuyen()
                }
                div.appendChild(taoDiv);
            } else {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) + 10}`).className.toString()) == 1) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover10", `square-${diachi(nameClass) + 10}`);
                    taoDiv.style.backgroundColor = "#ff000080";
                    taoDiv.onclick = function () {
                        wk1.style.backgroundColor = "transparent";
                        div.removeChild(taoDiv);
                        let b = diachi(nameClass) + 10;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1 + 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        if (kt(diachi(nameClass) + 11) == 1) {
                            let dc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                            if (dc11 != null) {
                                if (anduoc(dc11.className.toString()) == 1) {
                                    let xoadc11 = document.querySelector(`.hover11`);
                                    div.removeChild(xoadc11);
                                }
                                if (dc11.classList.contains('hover') == true) {
                                    let xoadc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`);
                                    div.removeChild(xoadc11);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 9) == 1) {
                            let dc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`)
                            if (dc9 != null) {
                                if (anduoc(dc9.className.toString()) == 1) {
                                    let xoadc9 = document.querySelector(`.hover9`);
                                    div.removeChild(xoadc9);
                                }
                                if (dc9.classList.contains('hover') == true) {
                                    let xoadc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`);
                                    div.removeChild(xoadc9);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 1) == 1) {
                            let dc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`)
                            if (dc1 != null) {
                                if (anduoc(dc1.className.toString()) == 1) {
                                    let xoadc1 = document.querySelector(`.hover1`);
                                    div.removeChild(xoadc1);
                                }
                                if (dc1.classList.contains('hover') == true) {
                                    let xoadc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`);
                                    div.removeChild(xoadc1);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 1) == 1) {
                            let dc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`)
                            if (dc_1 != null) {
                                if (anduoc(dc_1.className.toString()) == 1) {
                                    let xoadc_1 = document.querySelector(`.hover-1`);
                                    div.removeChild(xoadc_1);
                                }
                                if (dc_1.classList.contains('hover') == true) {
                                    let xoadc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`);
                                    div.removeChild(xoadc_1);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 11) == 1) {
                            let dc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`)
                            if (dc_11 != null) {
                                if (anduoc(dc_11.className.toString()) == 1) {
                                    let xoadc_11 = document.querySelector(`.hover-11`);
                                    div.removeChild(xoadc_11);
                                }
                                if (dc_11.classList.contains('hover') == true) {
                                    let xoadc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`);
                                    div.removeChild(xoadc_11);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 9) == 1) {
                            let dc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                            if (dc_9 != null) {
                                if (anduoc(dc_9.className.toString()) == 1) {
                                    let xoadc_9 = document.querySelector(`.hover-9`);
                                    div.removeChild(xoadc_9);
                                }
                                if (dc_9.classList.contains('hover') == true) {
                                    let xoadc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`);
                                    div.removeChild(xoadc_9);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 10) == 1) {
                            let dc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`)
                            if (dc_10 != null) {
                                if (anduoc(dc_10.className.toString()) == 1) {
                                    let xoadc_10 = document.querySelector(`.hover-10`);
                                    div.removeChild(xoadc_10);
                                }
                                if (dc_10.classList.contains('hover') == true) {
                                    let xoadc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`);
                                    div.removeChild(xoadc_10);
                                }
                            }
                        }
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) + 10}`)
                        div.removeChild(an);
                        wk1.className = `piece wk square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                }
            }
        }
        if (kt(diachi(nameClass) + 9) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) + 9}`) == null) {
                let taoDiv = document.createElement("div")
                taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + 9}`);
                taoDiv.style.backgroundColor = "#957373ad";
                taoDiv.onclick = function () {
                    wk1.style.backgroundColor = "transparent";
                    div.removeChild(taoDiv);
                    let b = diachi(nameClass) + 9;
                    let a = diachi(nameClass)
                    banco[a % 10 - 1 - 1][(a - a % 10) / 10 - 1 + 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                    banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                    if (kt(diachi(nameClass) + 10) == 1) {
                        let dc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`)
                        if (dc10 != null) {
                            if (anduoc(dc10.className.toString()) == 1) {
                                let xoadc10 = document.querySelector(`.hover10`);
                                div.removeChild(xoadc10);
                            }
                            if (dc10.classList.contains('hover') == true) {
                                let xoadc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`);
                                div.removeChild(xoadc10);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 11) == 1) {
                        let dc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                        if (dc11 != null) {
                            if (anduoc(dc11.className.toString()) == 1) {
                                let xoadc11 = document.querySelector(`.hover11`);
                                div.removeChild(xoadc11);
                            }
                            if (dc11.classList.contains('hover') == true) {
                                let xoadc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`);
                                div.removeChild(xoadc11);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 1) == 1) {
                        let dc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`)
                        if (dc1 != null) {
                            if (anduoc(dc1.className.toString()) == 1) {
                                let xoadc1 = document.querySelector(`.hover1`);
                                div.removeChild(xoadc1);
                            }
                            if (dc1.classList.contains('hover') == true) {
                                let xoadc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`);
                                div.removeChild(xoadc1);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 1) == 1) {
                        let dc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`)
                        if (dc_1 != null) {
                            if (anduoc(dc_1.className.toString()) == 1) {
                                let xoadc_1 = document.querySelector(`.hover-1`);
                                div.removeChild(xoadc_1);
                            }
                            if (dc_1.classList.contains('hover') == true) {
                                let xoadc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`);
                                div.removeChild(xoadc_1);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 11) == 1) {
                        let dc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`)
                        if (dc_11 != null) {
                            if (anduoc(dc_11.className.toString()) == 1) {
                                let xoadc_11 = document.querySelector(`.hover-11`);
                                div.removeChild(xoadc_11);
                            }
                            if (dc_11.classList.contains('hover') == true) {
                                let xoadc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`);
                                div.removeChild(xoadc_11);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 9) == 1) {
                        let dc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                        if (dc_9 != null) {
                            if (anduoc(dc_9.className.toString()) == 1) {
                                let xoadc_9 = document.querySelector(`.hover-9`);
                                div.removeChild(xoadc_9);
                            }
                            if (dc_9.classList.contains('hover') == true) {
                                let xoadc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`);
                                div.removeChild(xoadc_9);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 10) == 1) {
                        let dc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`)
                        if (dc_10 != null) {
                            if (anduoc(dc_10.className.toString()) == 1) {
                                let xoadc_10 = document.querySelector(`.hover-10`);
                                div.removeChild(xoadc_10);
                            }
                            if (dc_10.classList.contains('hover') == true) {
                                let xoadc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`);
                                div.removeChild(xoadc_10);
                            }
                        }
                    }
                    temp = true;
                    wk1.className = `piece wk square-${b}`
                    dichuyen()
                }
                div.appendChild(taoDiv);
            } else {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) + 9}`).className.toString()) == 1) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover9", `square-${diachi(nameClass) + 9}`);
                    taoDiv.style.backgroundColor = "#ff000080";
                    taoDiv.onclick = function () {
                        wk1.style.backgroundColor = "transparent";
                        div.removeChild(taoDiv);
                        let b = diachi(nameClass) + 9;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - 1][(a - a % 10) / 10 - 1 + 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        if (kt(diachi(nameClass) + 10) == 1) {
                            let dc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`)
                            if (dc10 != null) {
                                if (anduoc(dc10.className.toString()) == 1) {
                                    let xoadc10 = document.querySelector(`.hover10`);
                                    div.removeChild(xoadc10);
                                }
                                if (dc10.classList.contains('hover') == true) {
                                    let xoadc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`);
                                    div.removeChild(xoadc10);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 11) == 1) {
                            let dc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                            if (dc11 != null) {
                                if (anduoc(dc11.className.toString()) == 1) {
                                    let xoadc11 = document.querySelector(`.hover11`);
                                    div.removeChild(xoadc11);
                                }
                                if (dc11.classList.contains('hover') == true) {
                                    let xoadc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`);
                                    div.removeChild(xoadc11);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 1) == 1) {
                            let dc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`)
                            if (dc1 != null) {
                                if (anduoc(dc1.className.toString()) == 1) {
                                    let xoadc1 = document.querySelector(`.hover1`);
                                    div.removeChild(xoadc1);
                                }
                                if (dc1.classList.contains('hover') == true) {
                                    let xoadc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`);
                                    div.removeChild(xoadc1);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 1) == 1) {
                            let dc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`)
                            if (dc_1 != null) {
                                if (anduoc(dc_1.className.toString()) == 1) {
                                    let xoadc_1 = document.querySelector(`.hover-1`);
                                    div.removeChild(xoadc_1);
                                }
                                if (dc_1.classList.contains('hover') == true) {
                                    let xoadc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`);
                                    div.removeChild(xoadc_1);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 11) == 1) {
                            let dc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`)
                            if (dc_11 != null) {
                                if (anduoc(dc_11.className.toString()) == 1) {
                                    let xoadc_11 = document.querySelector(`.hover-11`);
                                    div.removeChild(xoadc_11);
                                }
                                if (dc_11.classList.contains('hover') == true) {
                                    let xoadc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`);
                                    div.removeChild(xoadc_11);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 9) == 1) {
                            let dc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                            if (dc_9 != null) {
                                if (anduoc(dc_9.className.toString()) == 1) {
                                    let xoadc_9 = document.querySelector(`.hover-9`);
                                    div.removeChild(xoadc_9);
                                }
                                if (dc_9.classList.contains('hover') == true) {
                                    let xoadc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`);
                                    div.removeChild(xoadc_9);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 10) == 1) {
                            let dc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`)
                            if (dc_10 != null) {
                                if (anduoc(dc_10.className.toString()) == 1) {
                                    let xoadc_10 = document.querySelector(`.hover-10`);
                                    div.removeChild(xoadc_10);
                                }
                                if (dc_10.classList.contains('hover') == true) {
                                    let xoadc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`);
                                    div.removeChild(xoadc_10);
                                }
                            }
                        }
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) + 9}`)
                        div.removeChild(an);
                        wk1.className = `piece wk square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);

                }
            }
        }
        if (kt(diachi(nameClass) + 1) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) + 1}`) == null) {
                let taoDiv = document.createElement("div")
                taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + 1}`);
                taoDiv.style.backgroundColor = "#957373ad";
                taoDiv.onclick = function () {
                    wk1.style.backgroundColor = "transparent";
                    div.removeChild(taoDiv);
                    let b = diachi(nameClass) + 1;
                    let a = diachi(nameClass)
                    banco[a % 10 - 1 + 1][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                    banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                    if (kt(diachi(nameClass) + 10) == 1) {
                        let dc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`)
                        if (dc10 != null) {
                            if (anduoc(dc10.className.toString()) == 1) {
                                let xoadc10 = document.querySelector(`.hover10`);
                                div.removeChild(xoadc10);
                            }
                            if (dc10.classList.contains('hover') == true) {
                                let xoadc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`);
                                div.removeChild(xoadc10);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 9) == 1) {
                        let dc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`)
                        if (dc9 != null) {
                            if (anduoc(dc9.className.toString()) == 1) {
                                let xoadc9 = document.querySelector(`.hover9`);
                                div.removeChild(xoadc9);
                            }
                            if (dc9.classList.contains('hover') == true) {
                                let xoadc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`);
                                div.removeChild(xoadc9);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 11) == 1) {
                        let dc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                        if (dc11 != null) {
                            if (anduoc(dc11.className.toString()) == 1) {
                                let xoadc11 = document.querySelector(`.hover11`);
                                div.removeChild(xoadc11);
                            }
                            if (dc11.classList.contains('hover') == true) {
                                let xoadc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`);
                                div.removeChild(xoadc11);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 1) == 1) {
                        let dc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`)
                        if (dc_1 != null) {
                            if (anduoc(dc_1.className.toString()) == 1) {
                                let xoadc_1 = document.querySelector(`.hover-1`);
                                div.removeChild(xoadc_1);
                            }
                            if (dc_1.classList.contains('hover') == true) {
                                let xoadc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`);
                                div.removeChild(xoadc_1);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 11) == 1) {
                        let dc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`)
                        if (dc_11 != null) {
                            if (anduoc(dc_11.className.toString()) == 1) {
                                let xoadc_11 = document.querySelector(`.hover-11`);
                                div.removeChild(xoadc_11);
                            }
                            if (dc_11.classList.contains('hover') == true) {
                                let xoadc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`);
                                div.removeChild(xoadc_11);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 9) == 1) {
                        let dc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                        if (dc_9 != null) {
                            if (anduoc(dc_9.className.toString()) == 1) {
                                let xoadc_9 = document.querySelector(`.hover-9`);
                                div.removeChild(xoadc_9);
                            }
                            if (dc_9.classList.contains('hover') == true) {
                                let xoadc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`);
                                div.removeChild(xoadc_9);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 10) == 1) {
                        let dc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`)
                        if (dc_10 != null) {
                            if (anduoc(dc_10.className.toString()) == 1) {
                                let xoadc_10 = document.querySelector(`.hover-10`);
                                div.removeChild(xoadc_10);
                            }
                            if (dc_10.classList.contains('hover') == true) {
                                let xoadc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`);
                                div.removeChild(xoadc_10);
                            }
                        }
                    }
                    temp = true;
                    wk1.className = `piece wk square-${b}`
                    dichuyen()
                }
                div.appendChild(taoDiv);
            } else {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) + 1}`).className.toString()) == 1) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover1", `square-${diachi(nameClass) + 1}`);
                    taoDiv.style.backgroundColor = "#ff000080";
                    taoDiv.onclick = function () {
                        wk1.style.backgroundColor = "transparent";
                        div.removeChild(taoDiv);
                        let b = diachi(nameClass) + 1;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + 1][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        if (kt(diachi(nameClass) + 10) == 1) {
                            let dc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`)
                            if (dc10 != null) {
                                if (anduoc(dc10.className.toString()) == 1) {
                                    let xoadc10 = document.querySelector(`.hover10`);
                                    div.removeChild(xoadc10);
                                }
                                if (dc10.classList.contains('hover') == true) {
                                    let xoadc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`);
                                    div.removeChild(xoadc10);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 9) == 1) {
                            let dc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`)
                            if (dc9 != null) {
                                if (anduoc(dc9.className.toString()) == 1) {
                                    let xoadc9 = document.querySelector(`.hover9`);
                                    div.removeChild(xoadc9);
                                }
                                if (dc9.classList.contains('hover') == true) {
                                    let xoadc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`);
                                    div.removeChild(xoadc9);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 11) == 1) {
                            let dc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                            if (dc11 != null) {
                                if (anduoc(dc11.className.toString()) == 1) {
                                    let xoadc11 = document.querySelector(`.hover11`);
                                    div.removeChild(xoadc11);
                                }
                                if (dc11.classList.contains('hover') == true) {
                                    let xoadc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`);
                                    div.removeChild(xoadc11);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 1) == 1) {
                            let dc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`)
                            if (dc_1 != null) {
                                if (anduoc(dc_1.className.toString()) == 1) {
                                    let xoadc_1 = document.querySelector(`.hover-1`);
                                    div.removeChild(xoadc_1);
                                }
                                if (dc_1.classList.contains('hover') == true) {
                                    let xoadc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`);
                                    div.removeChild(xoadc_1);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 11) == 1) {
                            let dc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`)
                            if (dc_11 != null) {
                                if (anduoc(dc_11.className.toString()) == 1) {
                                    let xoadc_11 = document.querySelector(`.hover-11`);
                                    div.removeChild(xoadc_11);
                                }
                                if (dc_11.classList.contains('hover') == true) {
                                    let xoadc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`);
                                    div.removeChild(xoadc_11);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 9) == 1) {
                            let dc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                            if (dc_9 != null) {
                                if (anduoc(dc_9.className.toString()) == 1) {
                                    let xoadc_9 = document.querySelector(`.hover-9`);
                                    div.removeChild(xoadc_9);
                                }
                                if (dc_9.classList.contains('hover') == true) {
                                    let xoadc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`);
                                    div.removeChild(xoadc_9);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 10) == 1) {
                            let dc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`)
                            if (dc_10 != null) {
                                if (anduoc(dc_10.className.toString()) == 1) {
                                    let xoadc_10 = document.querySelector(`.hover-10`);
                                    div.removeChild(xoadc_10);
                                }
                                if (dc_10.classList.contains('hover') == true) {
                                    let xoadc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`);
                                    div.removeChild(xoadc_10);
                                }
                            }
                        }
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) + 1}`)
                        div.removeChild(an);
                        wk1.className = `piece wk square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);

                }
            }
        }
        if (kt(diachi(nameClass) - 1) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) - 1}`) == null) {
                let taoDiv = document.createElement("div")
                taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) - 1}`);
                taoDiv.style.backgroundColor = "#957373ad";
                taoDiv.onclick = function () {
                    wk1.style.backgroundColor = "transparent";
                    div.removeChild(taoDiv);
                    let b = diachi(nameClass) - 1;
                    let a = diachi(nameClass)
                    banco[a % 10 - 1 - 1][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                    banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                    if (kt(diachi(nameClass) + 10) == 1) {
                        let dc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`)
                        if (dc10 != null) {
                            if (anduoc(dc10.className.toString()) == 1) {
                                let xoadc10 = document.querySelector(`.hover10`);
                                div.removeChild(xoadc10);
                            }
                            if (dc10.classList.contains('hover') == true) {
                                let xoadc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`);
                                div.removeChild(xoadc10);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 9) == 1) {
                        let dc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`)
                        if (dc9 != null) {
                            if (anduoc(dc9.className.toString()) == 1) {
                                let xoadc9 = document.querySelector(`.hover9`);
                                div.removeChild(xoadc9);
                            }
                            if (dc9.classList.contains('hover') == true) {
                                let xoadc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`);
                                div.removeChild(xoadc9);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 1) == 1) {
                        let dc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`)
                        if (dc1 != null) {
                            if (anduoc(dc1.className.toString()) == 1) {
                                let xoadc1 = document.querySelector(`.hover1`);
                                div.removeChild(xoadc1);
                            }
                            if (dc1.classList.contains('hover') == true) {
                                let xoadc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`);
                                div.removeChild(xoadc1);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 11) == 1) {
                        let dc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                        if (dc11 != null) {
                            if (anduoc(dc11.className.toString()) == 1) {
                                let xoadc11 = document.querySelector(`.hover11`);
                                div.removeChild(xoadc11);
                            }
                            if (dc11.classList.contains('hover') == true) {
                                let xoadc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`);
                                div.removeChild(xoadc11);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 11) == 1) {
                        let dc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`)
                        if (dc_11 != null) {
                            if (anduoc(dc_11.className.toString()) == 1) {
                                let xoadc_11 = document.querySelector(`.hover-11`);
                                div.removeChild(xoadc_11);
                            }
                            if (dc_11.classList.contains('hover') == true) {
                                let xoadc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`);
                                div.removeChild(xoadc_11);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 9) == 1) {
                        let dc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                        if (dc_9 != null) {
                            if (anduoc(dc_9.className.toString()) == 1) {
                                let xoadc_9 = document.querySelector(`.hover-9`);
                                div.removeChild(xoadc_9);
                            }
                            if (dc_9.classList.contains('hover') == true) {
                                let xoadc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`);
                                div.removeChild(xoadc_9);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 10) == 1) {
                        let dc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`)
                        if (dc_10 != null) {
                            if (anduoc(dc_10.className.toString()) == 1) {
                                let xoadc_10 = document.querySelector(`.hover-10`);
                                div.removeChild(xoadc_10);
                            }
                            if (dc_10.classList.contains('hover') == true) {
                                let xoadc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`);
                                div.removeChild(xoadc_10);
                            }
                        }
                    }
                    temp = true;
                    wk1.className = `piece wk square-${b}`
                    dichuyen()
                }
                div.appendChild(taoDiv);
            } else {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) - 1}`).className.toString()) == 1) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover-1", `square-${diachi(nameClass) - 1}`);
                    taoDiv.style.backgroundColor = "#ff000080";
                    taoDiv.onclick = function () {
                        wk1.style.backgroundColor = "transparent";
                        div.removeChild(taoDiv);
                        let b = diachi(nameClass) - 1;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - 1][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        if (kt(diachi(nameClass) + 10) == 1) {
                            let dc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`)
                            if (dc10 != null) {
                                if (anduoc(dc10.className.toString()) == 1) {
                                    let xoadc10 = document.querySelector(`.hover10`);
                                    div.removeChild(xoadc10);
                                }
                                if (dc10.classList.contains('hover') == true) {
                                    let xoadc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`);
                                    div.removeChild(xoadc10);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 9) == 1) {
                            let dc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`)
                            if (dc9 != null) {
                                if (anduoc(dc9.className.toString()) == 1) {
                                    let xoadc9 = document.querySelector(`.hover9`);
                                    div.removeChild(xoadc9);
                                }
                                if (dc9.classList.contains('hover') == true) {
                                    let xoadc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`);
                                    div.removeChild(xoadc9);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 1) == 1) {
                            let dc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`)
                            if (dc1 != null) {
                                if (anduoc(dc1.className.toString()) == 1) {
                                    let xoadc1 = document.querySelector(`.hover1`);
                                    div.removeChild(xoadc1);
                                }
                                if (dc1.classList.contains('hover') == true) {
                                    let xoadc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`);
                                    div.removeChild(xoadc1);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 11) == 1) {
                            let dc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                            if (dc11 != null) {
                                if (anduoc(dc11.className.toString()) == 1) {
                                    let xoadc11 = document.querySelector(`.hover11`);
                                    div.removeChild(xoadc11);
                                }
                                if (dc11.classList.contains('hover') == true) {
                                    let xoadc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`);
                                    div.removeChild(xoadc11);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 11) == 1) {
                            let dc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`)
                            if (dc_11 != null) {
                                if (anduoc(dc_11.className.toString()) == 1) {
                                    let xoadc_11 = document.querySelector(`.hover-11`);
                                    div.removeChild(xoadc_11);
                                }
                                if (dc_11.classList.contains('hover') == true) {
                                    let xoadc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`);
                                    div.removeChild(xoadc_11);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 9) == 1) {
                            let dc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                            if (dc_9 != null) {
                                if (anduoc(dc_9.className.toString()) == 1) {
                                    let xoadc_9 = document.querySelector(`.hover-9`);
                                    div.removeChild(xoadc_9);
                                }
                                if (dc_9.classList.contains('hover') == true) {
                                    let xoadc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`);
                                    div.removeChild(xoadc_9);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 10) == 1) {
                            let dc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`)
                            if (dc_10 != null) {
                                if (anduoc(dc_10.className.toString()) == 1) {
                                    let xoadc_10 = document.querySelector(`.hover-10`);
                                    div.removeChild(xoadc_10);
                                }
                                if (dc_10.classList.contains('hover') == true) {
                                    let xoadc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`);
                                    div.removeChild(xoadc_10);
                                }
                            }
                        }
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) - 1}`)
                        div.removeChild(an);
                        wk1.className = `piece wk square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);

                }
            }
        }
        if (kt(diachi(nameClass) - 9) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) - 9}`) == null) {
                let taoDiv = document.createElement("div")
                taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) - 9}`);
                taoDiv.style.backgroundColor = "#957373ad";
                taoDiv.onclick = function () {
                    wk1.style.backgroundColor = "transparent";
                    div.removeChild(taoDiv);
                    let b = diachi(nameClass) - 9;
                    let a = diachi(nameClass)
                    banco[a % 10 - 1 + 1][(a - a % 10) / 10 - 1 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                    banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                    if (kt(diachi(nameClass) + 10) == 1) {
                        let dc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`)
                        if (dc10 != null) {
                            if (anduoc(dc10.className.toString()) == 1) {
                                let xoadc10 = document.querySelector(`.hover10`);
                                div.removeChild(xoadc10);
                            }
                            if (dc10.classList.contains('hover') == true) {
                                let xoadc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`);
                                div.removeChild(xoadc10);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 9) == 1) {
                        let dc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`)
                        if (dc9 != null) {
                            if (anduoc(dc9.className.toString()) == 1) {
                                let xoadc9 = document.querySelector(`.hover9`);
                                div.removeChild(xoadc9);
                            }
                            if (dc9.classList.contains('hover') == true) {
                                let xoadc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`);
                                div.removeChild(xoadc9);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 1) == 1) {
                        let dc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`)
                        if (dc1 != null) {
                            if (anduoc(dc1.className.toString()) == 1) {
                                let xoadc1 = document.querySelector(`.hover1`);
                                div.removeChild(xoadc1);
                            }
                            if (dc1.classList.contains('hover') == true) {
                                let xoadc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`);
                                div.removeChild(xoadc1);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 1) == 1) {
                        let dc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`)
                        if (dc_1 != null) {
                            if (anduoc(dc_1.className.toString()) == 1) {
                                let xoadc_1 = document.querySelector(`.hover-1`);
                                div.removeChild(xoadc_1);
                            }
                            if (dc_1.classList.contains('hover') == true) {
                                let xoadc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`);
                                div.removeChild(xoadc_1);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 11) == 1) {
                        let dc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`)
                        if (dc_11 != null) {
                            if (anduoc(dc_11.className.toString()) == 1) {
                                let xoadc_11 = document.querySelector(`.hover-11`);
                                div.removeChild(xoadc_11);
                            }
                            if (dc_11.classList.contains('hover') == true) {
                                let xoadc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`);
                                div.removeChild(xoadc_11);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 11) == 1) {
                        let dc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                        if (dc11 != null) {
                            if (anduoc(dc11.className.toString()) == 1) {
                                let xoadc11 = document.querySelector(`.hover11`);
                                div.removeChild(xoadc11);
                            }
                            if (dc11.classList.contains('hover') == true) {
                                let xoadc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`);
                                div.removeChild(xoadc11);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 10) == 1) {
                        let dc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`)
                        if (dc_10 != null) {
                            if (anduoc(dc_10.className.toString()) == 1) {
                                let xoadc_10 = document.querySelector(`.hover-10`);
                                div.removeChild(xoadc_10);
                            }
                            if (dc_10.classList.contains('hover') == true) {
                                let xoadc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`);
                                div.removeChild(xoadc_10);
                            }
                        }
                    }
                    temp = true;
                    wk1.className = `piece wk square-${b}`
                    dichuyen()
                }
                div.appendChild(taoDiv);
            } else {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) - 9}`).className.toString()) == 1) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover-9", `square-${diachi(nameClass) - 9}`);
                    taoDiv.style.backgroundColor = "#ff000080";
                    taoDiv.onclick = function () {
                        wk1.style.backgroundColor = "transparent";
                        div.removeChild(taoDiv);
                        let b = diachi(nameClass) - 9;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + 1][(a - a % 10) / 10 - 1 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        if (kt(diachi(nameClass) + 10) == 1) {
                            let dc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`)
                            if (dc10 != null) {
                                if (anduoc(dc10.className.toString()) == 1) {
                                    let xoadc10 = document.querySelector(`.hover10`);
                                    div.removeChild(xoadc10);
                                }
                                if (dc10.classList.contains('hover') == true) {
                                    let xoadc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`);
                                    div.removeChild(xoadc10);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 9) == 1) {
                            let dc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`)
                            if (dc9 != null) {
                                if (anduoc(dc9.className.toString()) == 1) {
                                    let xoadc9 = document.querySelector(`.hover9`);
                                    div.removeChild(xoadc9);
                                }
                                if (dc9.classList.contains('hover') == true) {
                                    let xoadc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`);
                                    div.removeChild(xoadc9);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 1) == 1) {
                            let dc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`)
                            if (dc1 != null) {
                                if (anduoc(dc1.className.toString()) == 1) {
                                    let xoadc1 = document.querySelector(`.hover1`);
                                    div.removeChild(xoadc1);
                                }
                                if (dc1.classList.contains('hover') == true) {
                                    let xoadc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`);
                                    div.removeChild(xoadc1);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 1) == 1) {
                            let dc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`)
                            if (dc_1 != null) {
                                if (anduoc(dc_1.className.toString()) == 1) {
                                    let xoadc_1 = document.querySelector(`.hover-1`);
                                    div.removeChild(xoadc_1);
                                }
                                if (dc_1.classList.contains('hover') == true) {
                                    let xoadc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`);
                                    div.removeChild(xoadc_1);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 11) == 1) {
                            let dc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`)
                            if (dc_11 != null) {
                                if (anduoc(dc_11.className.toString()) == 1) {
                                    let xoadc_11 = document.querySelector(`.hover-11`);
                                    div.removeChild(xoadc_11);
                                }
                                if (dc_11.classList.contains('hover') == true) {
                                    let xoadc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`);
                                    div.removeChild(xoadc_11);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 11) == 1) {
                            let dc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                            if (dc11 != null) {
                                if (anduoc(dc11.className.toString()) == 1) {
                                    let xoadc11 = document.querySelector(`.hover11`);
                                    div.removeChild(xoadc11);
                                }
                                if (dc11.classList.contains('hover') == true) {
                                    let xoadc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`);
                                    div.removeChild(xoadc11);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 10) == 1) {
                            let dc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`)
                            if (dc_10 != null) {
                                if (anduoc(dc_10.className.toString()) == 1) {
                                    let xoadc_10 = document.querySelector(`.hover-10`);
                                    div.removeChild(xoadc_10);
                                }
                                if (dc_10.classList.contains('hover') == true) {
                                    let xoadc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`);
                                    div.removeChild(xoadc_10);
                                }
                            }
                        }
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                        div.removeChild(an);
                        wk1.className = `piece wk square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);

                }
            }
        }
        if (kt(diachi(nameClass) - 10) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) - 10}`) == null) {
                let taoDiv = document.createElement("div")
                taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) - 10}`);
                taoDiv.style.backgroundColor = "#957373ad";
                taoDiv.onclick = function () {
                    wk1.style.backgroundColor = "transparent";
                    div.removeChild(taoDiv);
                    let b = diachi(nameClass) - 10;
                    let a = diachi(nameClass)
                    banco[a % 10 - 1][(a - a % 10) / 10 - 1 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                    banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                    if (kt(diachi(nameClass) + 10) == 1) {
                        let dc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`)
                        if (dc10 != null) {
                            if (anduoc(dc10.className.toString()) == 1) {
                                let xoadc10 = document.querySelector(`.hover10`);
                                div.removeChild(xoadc10);
                            }
                            if (dc10.classList.contains('hover') == true) {
                                let xoadc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`);
                                div.removeChild(xoadc10);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 9) == 1) {
                        let dc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`)
                        if (dc9 != null) {
                            if (anduoc(dc9.className.toString()) == 1) {
                                let xoadc9 = document.querySelector(`.hover9`);
                                div.removeChild(xoadc9);
                            }
                            if (dc9.classList.contains('hover') == true) {
                                let xoadc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`);
                                div.removeChild(xoadc9);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 1) == 1) {
                        let dc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`)
                        if (dc1 != null) {
                            if (anduoc(dc1.className.toString()) == 1) {
                                let xoadc1 = document.querySelector(`.hover1`);
                                div.removeChild(xoadc1);
                            }
                            if (dc1.classList.contains('hover') == true) {
                                let xoadc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`);
                                div.removeChild(xoadc1);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 1) == 1) {
                        let dc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`)
                        if (dc_1 != null) {
                            if (anduoc(dc_1.className.toString()) == 1) {
                                let xoadc_1 = document.querySelector(`.hover-1`);
                                div.removeChild(xoadc_1);
                            }
                            if (dc_1.classList.contains('hover') == true) {
                                let xoadc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`);
                                div.removeChild(xoadc_1);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 11) == 1) {
                        let dc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`)
                        if (dc_11 != null) {
                            if (anduoc(dc_11.className.toString()) == 1) {
                                let xoadc_11 = document.querySelector(`.hover-11`);
                                div.removeChild(xoadc_11);
                            }
                            if (dc_11.classList.contains('hover') == true) {
                                let xoadc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`);
                                div.removeChild(xoadc_11);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 9) == 1) {
                        let dc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                        if (dc_9 != null) {
                            if (anduoc(dc_9.className.toString()) == 1) {
                                let xoadc_9 = document.querySelector(`.hover-9`);
                                div.removeChild(xoadc_9);
                            }
                            if (dc_9.classList.contains('hover') == true) {
                                let xoadc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`);
                                div.removeChild(xoadc_9);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 11) == 1) {
                        let dc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                        if (dc11 != null) {
                            if (anduoc(dc11.className.toString()) == 1) {
                                let xoadc11 = document.querySelector(`.hover11`);
                                div.removeChild(xoadc11);
                            }
                            if (dc11.classList.contains('hover') == true) {
                                let xoadc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`);
                                div.removeChild(xoadc11);
                            }
                        }
                    }
                    temp = true;
                    wk1.className = `piece wk square-${b}`
                    dichuyen()
                }
                div.appendChild(taoDiv);
            } else {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) - 10}`).className.toString()) == 1) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover-10", `square-${diachi(nameClass) - 10}`);
                    taoDiv.style.backgroundColor = "#ff000080";
                    taoDiv.onclick = function () {
                        wk1.style.backgroundColor = "transparent";
                        div.removeChild(taoDiv);
                        let b = diachi(nameClass) - 10;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        if (kt(diachi(nameClass) + 10) == 1) {
                            let dc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`)
                            if (dc10 != null) {
                                if (anduoc(dc10.className.toString()) == 1) {
                                    let xoadc10 = document.querySelector(`.hover10`);
                                    div.removeChild(xoadc10);
                                }
                                if (dc10.classList.contains('hover') == true) {
                                    let xoadc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`);
                                    div.removeChild(xoadc10);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 9) == 1) {
                            let dc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`)
                            if (dc9 != null) {
                                if (anduoc(dc9.className.toString()) == 1) {
                                    let xoadc9 = document.querySelector(`.hover9`);
                                    div.removeChild(xoadc9);
                                }
                                if (dc9.classList.contains('hover') == true) {
                                    let xoadc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`);
                                    div.removeChild(xoadc9);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 1) == 1) {
                            let dc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`)
                            if (dc1 != null) {
                                if (anduoc(dc1.className.toString()) == 1) {
                                    let xoadc1 = document.querySelector(`.hover1`);
                                    div.removeChild(xoadc1);
                                }
                                if (dc1.classList.contains('hover') == true) {
                                    let xoadc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`);
                                    div.removeChild(xoadc1);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 1) == 1) {
                            let dc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`)
                            if (dc_1 != null) {
                                if (anduoc(dc_1.className.toString()) == 1) {
                                    let xoadc_1 = document.querySelector(`.hover-1`);
                                    div.removeChild(xoadc_1);
                                }
                                if (dc_1.classList.contains('hover') == true) {
                                    let xoadc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`);
                                    div.removeChild(xoadc_1);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 11) == 1) {
                            let dc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`)
                            if (dc_11 != null) {
                                if (anduoc(dc_11.className.toString()) == 1) {
                                    let xoadc_11 = document.querySelector(`.hover-11`);
                                    div.removeChild(xoadc_11);
                                }
                                if (dc_11.classList.contains('hover') == true) {
                                    let xoadc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`);
                                    div.removeChild(xoadc_11);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 9) == 1) {
                            let dc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                            if (dc_9 != null) {
                                if (anduoc(dc_9.className.toString()) == 1) {
                                    let xoadc_9 = document.querySelector(`.hover-9`);
                                    div.removeChild(xoadc_9);
                                }
                                if (dc_9.classList.contains('hover') == true) {
                                    let xoadc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`);
                                    div.removeChild(xoadc_9);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 11) == 1) {
                            let dc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                            if (dc11 != null) {
                                if (anduoc(dc11.className.toString()) == 1) {
                                    let xoadc11 = document.querySelector(`.hover11`);
                                    div.removeChild(xoadc11);
                                }
                                if (dc11.classList.contains('hover') == true) {
                                    let xoadc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`);
                                    div.removeChild(xoadc11);
                                }
                            }
                        }
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) - 10}`)
                        div.removeChild(an);
                        wk1.className = `piece wk square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);

                }
            }
        }
        if (kt(diachi(nameClass) - 11) == 1) {
            if (document.querySelector(`.square-${diachi(nameClass) - 11}`) == null) {
                let taoDiv = document.createElement("div")
                taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) - 11}`);
                taoDiv.style.backgroundColor = "#957373ad";
                taoDiv.onclick = function () {
                    wk1.style.backgroundColor = "transparent";
                    div.removeChild(taoDiv);
                    let b = diachi(nameClass) - 11;
                    let a = diachi(nameClass)
                    banco[a % 10 - 1 - 1][(a - a % 10) / 10 - 1 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                    banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                    if (kt(diachi(nameClass) + 10) == 1) {
                        let dc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`)
                        if (dc10 != null) {
                            if (anduoc(dc10.className.toString()) == 1) {
                                let xoadc10 = document.querySelector(`.hover10`);
                                div.removeChild(xoadc10);
                            }
                            if (dc10.classList.contains('hover') == true) {
                                let xoadc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`);
                                div.removeChild(xoadc10);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 9) == 1) {
                        let dc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`)
                        if (dc9 != null) {
                            if (anduoc(dc9.className.toString()) == 1) {
                                let xoadc9 = document.querySelector(`.hover9`);
                                div.removeChild(xoadc9);
                            }
                            if (dc9.classList.contains('hover') == true) {
                                let xoadc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`);
                                div.removeChild(xoadc9);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 1) == 1) {
                        let dc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`)
                        if (dc1 != null) {
                            if (anduoc(dc1.className.toString()) == 1) {
                                let xoadc1 = document.querySelector(`.hover1`);
                                div.removeChild(xoadc1);
                            }
                            if (dc1.classList.contains('hover') == true) {
                                let xoadc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`);
                                div.removeChild(xoadc1);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 1) == 1) {
                        let dc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`)
                        if (dc_1 != null) {
                            if (anduoc(dc_1.className.toString()) == 1) {
                                let xoadc_1 = document.querySelector(`.hover-1`);
                                div.removeChild(xoadc_1);
                            }
                            if (dc_1.classList.contains('hover') == true) {
                                let xoadc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`);
                                div.removeChild(xoadc_1);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) + 11) == 1) {
                        let dc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                        if (dc11 != null) {
                            if (anduoc(dc11.className.toString()) == 1) {
                                let xoadc11 = document.querySelector(`.hover11`);
                                div.removeChild(xoadc11);
                            }
                            if (dc11.classList.contains('hover') == true) {
                                let xoadc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`);
                                div.removeChild(xoadc11);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 9) == 1) {
                        let dc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                        if (dc_9 != null) {
                            if (anduoc(dc_9.className.toString()) == 1) {
                                let xoadc_9 = document.querySelector(`.hover-9`);
                                div.removeChild(xoadc_9);
                            }
                            if (dc_9.classList.contains('hover') == true) {
                                let xoadc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`);
                                div.removeChild(xoadc_9);
                            }
                        }
                    }
                    if (kt(diachi(nameClass) - 10) == 1) {
                        let dc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`)
                        if (dc_10 != null) {
                            if (anduoc(dc_10.className.toString()) == 1) {
                                let xoadc_10 = document.querySelector(`.hover-10`);
                                div.removeChild(xoadc_10);
                            }
                            if (dc_10.classList.contains('hover') == true) {
                                let xoadc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`);
                                div.removeChild(xoadc_10);
                            }
                        }
                    }
                    temp = true;
                    wk1.className = `piece wk square-${b}`
                    dichuyen()
                }
                div.appendChild(taoDiv);
            } else {
                if (anduoc(document.querySelector(`.square-${diachi(nameClass) - 11}`).className.toString()) == 1) {
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover-11", `square-${diachi(nameClass) - 11}`);
                    taoDiv.style.backgroundColor = "#ff000080";
                    taoDiv.onclick = function () {
                        wk1.style.backgroundColor = "transparent";
                        div.removeChild(taoDiv);
                        let b = diachi(nameClass) - 11;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - 1][(a - a % 10) / 10 - 1 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;

                        if (kt(diachi(nameClass) + 10) == 1) {
                            let dc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`)
                            if (dc10 != null) {
                                if (anduoc(dc10.className.toString()) == 1) {
                                    let xoadc10 = document.querySelector(`.hover10`);
                                    div.removeChild(xoadc10);
                                }
                                if (dc10.classList.contains('hover') == true) {
                                    let xoadc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`);
                                    div.removeChild(xoadc10);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 9) == 1) {
                            let dc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`)
                            if (dc9 != null) {
                                if (anduoc(dc9.className.toString()) == 1) {
                                    let xoadc9 = document.querySelector(`.hover9`);
                                    div.removeChild(xoadc9);
                                }
                                if (dc9.classList.contains('hover') == true) {
                                    let xoadc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`);
                                    div.removeChild(xoadc9);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 1) == 1) {
                            let dc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`)
                            if (dc1 != null) {
                                if (anduoc(dc1.className.toString()) == 1) {
                                    let xoadc1 = document.querySelector(`.hover1`);
                                    div.removeChild(xoadc1);
                                }
                                if (dc1.classList.contains('hover') == true) {
                                    let xoadc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`);
                                    div.removeChild(xoadc1);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 1) == 1) {
                            let dc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`)
                            if (dc_1 != null) {
                                if (anduoc(dc_1.className.toString()) == 1) {
                                    let xoadc_1 = document.querySelector(`.hover-1`);
                                    div.removeChild(xoadc_1);
                                }
                                if (dc_1.classList.contains('hover') == true) {
                                    let xoadc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`);
                                    div.removeChild(xoadc_1);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) + 11) == 1) {
                            let dc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                            if (dc11 != null) {
                                if (anduoc(dc11.className.toString()) == 1) {
                                    let xoadc11 = document.querySelector(`.hover11`);
                                    div.removeChild(xoadc11);
                                }
                                if (dc11.classList.contains('hover') == true) {
                                    let xoadc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`);
                                    div.removeChild(xoadc11);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 9) == 1) {
                            let dc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                            if (dc_9 != null) {
                                if (anduoc(dc_9.className.toString()) == 1) {
                                    let xoadc_9 = document.querySelector(`.hover-9`);
                                    div.removeChild(xoadc_9);
                                }
                                if (dc_9.classList.contains('hover') == true) {
                                    let xoadc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`);
                                    div.removeChild(xoadc_9);
                                }
                            }
                        }
                        if (kt(diachi(nameClass) - 10) == 1) {
                            let dc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`)
                            if (dc_10 != null) {
                                if (anduoc(dc_10.className.toString()) == 1) {
                                    let xoadc_10 = document.querySelector(`.hover-10`);
                                    div.removeChild(xoadc_10);
                                }
                                if (dc_10.classList.contains('hover') == true) {
                                    let xoadc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`);
                                    div.removeChild(xoadc_10);
                                }
                            }
                        }
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) - 11}`)
                        div.removeChild(an);
                        wk1.className = `piece wk square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);

                }
            }
        }
        temp = false;
    } else {
        wk1.style.backgroundColor = "transparent";
        let nameClass = wk1.className.toString()
        if (kt(diachi(nameClass) + 10) == 1) {
            let dc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`)
            if (dc10 != null) {
                if (anduoc(dc10.className.toString()) == 1) {
                    let xoadc10 = document.querySelector(`.hover10`);
                    div.removeChild(xoadc10);
                }
                if (dc10.classList.contains('hover') == true) {
                    let xoadc10 = document.querySelector(`.square-${diachi(nameClass) + 10}`);
                    div.removeChild(xoadc10);
                }
            }
        }
        if (kt(diachi(nameClass) + 9) == 1) {
            let dc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`)
            if (dc9 != null) {
                if (anduoc(dc9.className.toString()) == 1) {
                    let xoadc9 = document.querySelector(`.hover9`);
                    div.removeChild(xoadc9);
                }
                if (dc9.classList.contains('hover') == true) {
                    let xoadc9 = document.querySelector(`.square-${diachi(nameClass) + 9}`);
                    div.removeChild(xoadc9);
                }
            }
        }
        if (kt(diachi(nameClass) + 11) == 1) {
            let dc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`)
            if (dc11 != null) {
                if (anduoc(dc11.className.toString()) == 1) {
                    let xoadc11 = document.querySelector(`.hover11`);
                    div.removeChild(xoadc11);
                }
                if (dc11.classList.contains('hover') == true) {
                    let xoadc11 = document.querySelector(`.square-${diachi(nameClass) + 11}`);
                    div.removeChild(xoadc11);
                }
            }
        }
        if (kt(diachi(nameClass) + 1) == 1) {
            let dc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`)
            if (dc1 != null) {
                if (anduoc(dc1.className.toString()) == 1) {
                    let xoadc1 = document.querySelector(`.hover1`);
                    div.removeChild(xoadc1);
                }
                if (dc1.classList.contains('hover') == true) {
                    let xoadc1 = document.querySelector(`.square-${diachi(nameClass) + 1}`);
                    div.removeChild(xoadc1);
                }
            }
        }
        if (kt(diachi(nameClass) - 1) == 1) {
            let dc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`)
            if (dc_1 != null) {
                if (anduoc(dc_1.className.toString()) == 1) {
                    let xoadc_1 = document.querySelector(`.hover-1`);
                    div.removeChild(xoadc_1);
                }
                if (dc_1.classList.contains('hover') == true) {
                    let xoadc_1 = document.querySelector(`.square-${diachi(nameClass) - 1}`);
                    div.removeChild(xoadc_1);
                }
            }
        }
        if (kt(diachi(nameClass) - 11) == 1) {
            let dc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`)
            if (dc_11 != null) {
                if (anduoc(dc_11.className.toString()) == 1) {
                    let xoadc_11 = document.querySelector(`.hover-11`);
                    div.removeChild(xoadc_11);
                }
                if (dc_11.classList.contains('hover') == true) {
                    let xoadc_11 = document.querySelector(`.square-${diachi(nameClass) - 11}`);
                    div.removeChild(xoadc_11);
                }
            }
        }
        if (kt(diachi(nameClass) - 9) == 1) {
            let dc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`)
            if (dc_9 != null) {
                if (anduoc(dc_9.className.toString()) == 1) {
                    let xoadc_9 = document.querySelector(`.hover-9`);
                    div.removeChild(xoadc_9);
                }
                if (dc_9.classList.contains('hover') == true) {
                    let xoadc_9 = document.querySelector(`.square-${diachi(nameClass) - 9}`);
                    div.removeChild(xoadc_9);
                }
            }
        }
        if (kt(diachi(nameClass) - 10) == 1) {
            let dc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`)
            if (dc_10 != null) {
                if (anduoc(dc_10.className.toString()) == 1) {
                    let xoadc_10 = document.querySelector(`.hover-10`);
                    div.removeChild(xoadc_10);
                }
                if (dc_10.classList.contains('hover') == true) {
                    let xoadc_10 = document.querySelector(`.square-${diachi(nameClass) - 10}`);
                    div.removeChild(xoadc_10);
                }
            }
        }
        temp = true;
    }
}
var ds = 4
function dichuyen() {
    let xetvitri = dendc(ds).toString()
    console.log(xetvitri)
    console.log(banco)
    let dc = document.querySelector(`.square-${xetvitri[1] - '0' + 1}${xetvitri[0] - '0' + 1}`).className.toString()
    let dchi = ''
    for (let i = 0; i < dc.length - 2; i++) {
        dchi = dchi + dc[i]
    }
    dchi = dchi + (xetvitri[3] - '0' + 1).toString() + (xetvitri[2] - '0' + 1).toString()
    if (document.querySelector(`.square-${xetvitri[3] - '0' + 1}${xetvitri[2] - '0' + 1}`) == null) {
        document.querySelector(`.square-${xetvitri[1] - '0' + 1}${xetvitri[0] - '0' + 1}`).className = dchi
    } else {
        div.removeChild(document.querySelector(`.square-${xetvitri[3] - '0' + 1}${xetvitri[2] - '0' + 1}`))
        document.querySelector(`.square-${xetvitri[1] - '0' + 1}${xetvitri[0] - '0' + 1}`).className = dchi
    }
    banco[xetvitri[2]-'0'][xetvitri[3]-'0'] = banco[xetvitri[0]-'0'][xetvitri[1]-'0']
    banco[xetvitri[0]-'0'][xetvitri[1]-'0'] = 0;
}


function diachi(x)    //hàm lấy tọa độ quân cờ
{
    let a
    a=x[x.length-2]+x[x.length-1]
    return a - '0'
}
function anduoc(coden)  //kiểm tra tên class lấy đc có phải là cờ đen ko
{
    for(let i = 0; i < coden.length; i++)
    {
        if((coden[i]==' ')&&(coden[i+1]=='b')&&(coden[i+3]==' '))
        {
            return 1;
        }
    }
    return 0;
}
function kt(id)        //kiểm tra id có hợp lệ trong tọa độ quan cờ
{
    let sodu = id % 10;
    let nguyen = (id-sodu)/10;
    if((sodu<1)||(sodu>8)||(nguyen<1)||(nguyen>8))
    {
        return 0;
    }
    else
        return 1;
}
function kiemtra(a, b) // kieemr tra tọa độ có hợp lệ trong bàn cờ
{
    if((a<0)||(a>7)||(b<0)||(b>7))
    {
        return 0;
    }
    else
        return 1;
}
function diemcong(x, y) //x,y là tọa độ cần xét
{
    if(banco[x][y] == 'wr')
        return 50;
    if(banco[x][y] == 'wp')
        return 10;
    if(banco[x][y] == 'wn')
        return 30;
    if(banco[x][y] == 'wb')
        return 30;
    if(banco[x][y] == 'wq')
        return 90;
    if(banco[x][y] == 'wk')
        return 900;

}
function diemtru(x,y) //x,y là tọa độ cần xét
{
    if(banco[x][y] == 'br')
        return -50;
    if(banco[x][y] == 'bp')
        return -10;
    if(banco[x][y] == 'bn')
        return -30;
    if(banco[x][y] == 'bb')
        return -30;
    if(banco[x][y] == 'bq')
        return -90;
    if(banco[x][y] == 'bk')
        return -900;
}
function endgame()
{
    let n = 0;
    for(let i=0;i<8;i++)
    {
        for(let j=0;j<8;j++)
        {
            if(banco[i][j]=='wk')
                n++;
            if(banco[i][j]=='bk')
                n++;
        }
    }
    if(n==2)
        return 1;
    else return 0;
}
function dendc(dosau)      // hàm xét các nước di chuyển của cờ đen
{
    let max = -9999
    let max1 = 0
    let A, B; //tọa độ đầu
    let C, D; //tọa độ sau //đường đi lợi nhất
    for(let i=0;i<8;i++) {
        for (let j = 0; j < 8; j++) {
            if (banco[i][j] == 'br') {
                for (let ir = 1; ir <= 8; ir++) {
                    if (kiemtra(i + ir, j) == 1) {
                        if (banco[i + ir][j] == 0) {
                            banco[i + ir][j] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = 0;
                            max1 = max1 + trangdc(dosau - 1);
                            if(max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i + ir;
                                D = j;
                            }
                            banco[i][j] = banco[i + ir][j];
                            banco[i + ir][j] = 0;
                        } else {
                            if ((diemcong(i + ir, j) == 10) || (diemcong(i + ir, j) == 30) || (diemcong(i + ir, j) == 50) || (diemcong(i + ir, j) == 90) || (diemcong(i + ir, j) == 900)) {
                                max1 = diemcong(i + ir, j)
                                let x = banco[i + ir][j]
                                banco[i + ir][j] = banco[i][j];
                                banco[i][j] = 0;
                                max1 = max1 + trangdc(dosau - 1)
                                if(max < max1) {
                                    max = max1;
                                    A = i;
                                    B = j;
                                    C = i + ir;
                                    D = j;
                                }
                                banco[i][j] = banco[i + ir][j];
                                banco[i + ir][j] = x;
                            }
                            break;
                        }
                    } else break
                }
                for (let ir = 1; ir <= 8; ir++) {
                    if (kiemtra(i - ir, j) == 1) {
                        if (banco[i - ir][j] == 0) {
                            banco[i - ir][j] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = 0
                            max1 = max1 + trangdc(dosau - 1)
                            if(max<max1 + trangdc(dosau - 1)) {
                                max = max1 + trangdc(dosau - 1);
                                A = i;
                                B = j;
                                C = i - ir;
                                D = j;
                            }
                            banco[i][j] = banco[i - ir][j];
                            banco[i - ir][j] = 0;
                        } else {
                            if ((diemcong(i - ir, j) == 10) || (diemcong(i - ir, j) == 30) || (diemcong(i - ir, j) == 50) || (diemcong(i - ir, j) == 90) || (diemcong(i - ir, j) == 900)) {
                                max1 = diemcong(i - ir, j)
                                let x = banco[i - ir][j]
                                banco[i - ir][j] = banco[i][j];
                                banco[i][j] = 0;
                                max1 = max1 + trangdc(dosau - 1);
                                if(max < max1) {
                                    max = max1;
                                    A = i;
                                    B = j;
                                    C = i - ir;
                                    D = j;
                                }
                                banco[i][j] = banco[i - ir][j];
                                banco[i - ir][j] = x;
                            }
                            break;
                        }
                    } else break
                }
                for (let ir = 1; ir <= 8; ir++) {
                    if (kiemtra(i, j + ir) == 1) {
                        if (banco[i][j + ir] == 0) {
                            banco[i][j + ir] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = 0
                            max1 = max1 + trangdc(dosau - 1)
                            if(max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i ;
                                D = j + ir;
                            }
                            banco[i][j] = banco[i][j + ir];
                            banco[i][j + ir] = 0;
                        } else {
                            if ((diemcong(i, j + ir) == 10) || (diemcong(i, j + ir) == 30) || (diemcong(i, j + ir) == 50) || (diemcong(i, j + ir) == 90) || (diemcong(i, j + ir) == 900)) {
                                max1 = diemcong(i, j + ir)
                                let x = banco[i][j + ir]
                                banco[i][j + ir] = banco[i][j];
                                banco[i][j] = 0;
                                max1 = max1 + trangdc(dosau - 1)
                                if(max < max1) {
                                    max = max1;
                                    A = i;
                                    B = j;
                                    C = i ;
                                    D = j + ir;
                                }
                                banco[i][j] = banco[i][j + ir];
                                banco[i][j + ir] = x;
                            }
                            break;
                        }
                    } else break;
                }
                for (let ir = 1; ir <= 8; ir++) {
                    if (kiemtra(i, j - ir) == 1) {
                        if (banco[i][j - ir] == 0) {
                            banco[i][j - ir] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = 0
                            max1 = max1 + trangdc(dosau - 1)
                            if(max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i ;
                                D = j - ir;
                            }
                            banco[i][j] = banco[i][j - ir];
                            banco[i][j - ir] = 0;
                        } else {
                            if ((diemcong(i, j - ir) == 10) || (diemcong(i, j - ir) == 30) || (diemcong(i, j - ir) == 50) || (diemcong(i, j - ir) == 90) || (diemcong(i, j - ir) == 900)) {
                                max1 = diemcong(i, j - ir)
                                let x = banco[i][j - ir]
                                banco[i][j - ir] = banco[i][j];
                                banco[i][j] = 0;
                                max1 = max1 + trangdc(dosau - 1)
                                if(max < max1) {
                                    max = max1;
                                    A = i;
                                    B = j;
                                    C = i;
                                    D = j - ir;
                                }
                                banco[i][j] = banco[i][j - ir];
                                banco[i][j - ir] = x;
                            }
                            break;
                        }
                    } else break
                }
            }
            if (banco[i][j] == 'bp') {
                if (i == 6) {
                    for (let ir = 1; ir <= 2; ir++) {
                        if (banco[i - ir][j] == 0) {
                            banco[i - ir][j] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = 0;
                            max1 = max1 + trangdc(dosau - 1);
                            if(max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i - ir;
                                D = j;
                            }
                            banco[i][j] = banco[i - ir][j];
                            banco[i - ir][j] = 0;
                        } else break;
                    }
                    if (kiemtra(i - 1, j - 1) == 1) {
                        if ((diemcong(i - 1, j - 1) == 10) || (diemcong(i - 1, j - 1) == 30) || (diemcong(i - 1, j - 1) == 50) || (diemcong(i - 1, j - 1) == 90) || (diemcong(i - 1, j - 1) == 900)) {
                            max1 = diemcong(i - 1, j - 1)
                            let x = banco[i - 1][j - 1]
                            banco[i - 1][j - 1] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = max1 + trangdc(dosau - 1)
                            if(max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i-1;
                                D = j-1;
                            }
                            banco[i][j] = banco[i - 1][j - 1];
                            banco[i - 1][j - 1] = x;
                        }
                    }
                    if (kiemtra(i - 1, j + 1) == 1) {
                        if ((diemcong(i - 1, j + 1) == 10) || (diemcong(i - 1, j + 1) == 30) || (diemcong(i - 1, j + 1) == 50) || (diemcong(i - 1, j + 1) == 90) || (diemcong(i - 1, j + 1) == 900)) {
                            max1 = diemcong(i - 1, j + 1)
                            let x = banco[i - 1][j + 1]
                            banco[i - 1][j + 1] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = max1 + trangdc(dosau - 1)
                            if(max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i - 1;
                                D = j + 1;
                            }
                            banco[i][j] = banco[i - 1][j + 1];
                            banco[i - 1][j + 1] = x;
                        }
                    }
                } else {
                    if (kiemtra(i - 1, j) == 1) {
                        if (banco[i - 1][j] == 0) {
                            banco[i - 1][j] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = 0
                            max1 = max1 + trangdc(dosau - 1)
                            if(max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i - 1;
                                D = j;
                            }
                            banco[i][j] = banco[i - 1][j];
                            banco[i - 1][j] = 0;
                        }
                    }
                    if (kiemtra(i - 1, j - 1) == 1) {
                        if ((diemcong(i - 1, j - 1) == 10) || (diemcong(i - 1, j - 1) == 30) || (diemcong(i - 1, j - 1) == 50) || (diemcong(i - 1, j - 1) == 90) || (diemcong(i - 1, j - 1) == 900)) {
                            max1 = diemcong(i - 1, j - 1)
                            let x = banco[i - 1][j - 1]
                            banco[i - 1][j - 1] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = max1 + trangdc(dosau - 1)
                            if(max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i-1;
                                D = j-1;
                            }
                            banco[i][j] = banco[i - 1][j - 1];
                            banco[i - 1][j - 1] = x;
                        }
                    }
                    if (kiemtra(i - 1, j + 1) == 1) {
                        if ((diemcong(i - 1, j + 1) == 10) || (diemcong(i - 1, j + 1) == 30) || (diemcong(i - 1, j + 1) == 50) || (diemcong(i - 1, j + 1) == 90) || (diemcong(i - 1, j + 1) == 900)) {
                            max1 = diemcong(i - 1, j + 1)
                            let x = banco[i - 1][j + 1]
                            banco[i - 1][j + 1] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = max1 + trangdc(dosau - 1)
                            if(max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i - 1;
                                D = j + 1;
                            }
                            banco[i][j] = banco[i - 1][j + 1];
                            banco[i - 1][j + 1] = x;
                        }
                    }
                }
            }
            if (banco[i][j] == 'bn') {
                if (kiemtra(i + 2, j + 1) == 1) {
                    if (banco[i + 2][j + 1] == 0) {
                        banco[i + 2][j + 1] = banco[i][j];
                        banco[i][j] = 0;
                        max1 = 0
                        max1 = max1 + trangdc(dosau - 1)
                        if (max < max1) {
                            max = max1;
                            A = i;
                            B = j;
                            C = i + 2;
                            D = j + 1;
                        }
                        banco[i][j] = banco[i + 2][j + 1];
                        banco[i + 2][j + 1] = 0;
                    } else {
                        if ((diemcong(i + 2, j + 1) == 10) || (diemcong(i + 2, j + 1) == 30) || (diemcong(i + 2, j + 1) == 50) || (diemcong(i + 2, j + 1) == 90) || (diemcong(i + 2, j + 1) == 900)) {
                            max1 = diemcong(i + 2, j + 1)
                            let x = banco[i + 2][j + 1]
                            banco[i + 2][j + 1] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = max1 + trangdc(dosau - 1)
                            if (max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i + 2;
                                D = j + 1;
                            }
                            banco[i][j] = banco[i + 2][j + 1];
                            banco[i + 2][j + 1] = x;
                        }
                    }
                }
                if (kiemtra(i - 2, j + 1) == 1) {
                    if (banco[i - 2][j + 1] == 0) {
                        banco[i - 2][j + 1] = banco[i][j];
                        banco[i][j] = 0;
                        max1 = 0
                        max1 = max1 + trangdc(dosau - 1)
                        if (max < max1) {
                            max = max1;
                            A = i;
                            B = j;
                            C = i - 2;
                            D = j + 1;
                        }
                        banco[i][j] = banco[i - 2][j + 1];
                        banco[i - 2][j + 1] = 0;
                    } else {
                        if ((diemcong(i - 2, j + 1) == 10) || (diemcong(i - 2, j + 1) == 30) || (diemcong(i - 2, j + 1) == 50) || (diemcong(i - 2, j + 1) == 90) || (diemcong(i - 2, j + 1) == 900)) {
                            max1 = diemcong(i - 2, j + 1)
                            let x = banco[i - 2][j + 1]
                            banco[i - 2][j + 1] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = max1 + trangdc(dosau - 1)
                            if (max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i - 2;
                                D = j + 1;
                            }
                            banco[i][j] = banco[i - 2][j + 1];
                            banco[i - 2][j + 1] = x;
                        }
                    }
                }
                if (kiemtra(i + 2, j - 1) == 1) {
                    if (banco[i + 2][j - 1] == 0) {
                        banco[i + 2][j - 1] = banco[i][j];
                        banco[i][j] = 0;
                        max1 = 0
                        max1 = max1 + trangdc(dosau - 1)
                        if (max < max1) {
                            max = max1;
                            A = i;
                            B = j;
                            C = i + 2;
                            D = j - 1;
                        }
                        banco[i][j] = banco[i + 2][j - 1];
                        banco[i + 2][j - 1] = 0;
                    } else {
                        if ((diemcong(i + 2, j - 1) == 10) || (diemcong(i + 2, j - 1) == 30) || (diemcong(i + 2, j - 1) == 50) || (diemcong(i + 2, j - 1) == 90) || (diemcong(i + 2, j - 1) == 900)) {
                            max1 = diemcong(i + 2, j - 1)
                            let x = banco[i + 2][j - 1]
                            banco[i + 2][j - 1] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = max1 + trangdc(dosau - 1)
                            if (max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i + 2;
                                D = j - 1;
                            }
                            banco[i][j] = banco[i + 2][j - 1];
                            banco[i + 2][j - 1] = x;
                        }
                    }
                }
                if (kiemtra(i - 2, j - 1) == 1) {
                    if (banco[i - 2][j - 1] == 0) {
                        banco[i - 2][j - 1] = banco[i][j];
                        banco[i][j] = 0;
                        max1 = 0
                        max1 = max1 + trangdc(dosau - 1)
                        if (max < max1) {
                            max = max1;
                            A = i;
                            B = j;
                            C = i - 2;
                            D = j - 1;
                        }
                        banco[i][j] = banco[i - 2][j - 1];
                        banco[i - 2][j - 1] = 0;
                    } else {
                        if ((diemcong(i - 2, j - 1) == 10) || (diemcong(i - 2, j - 1) == 30) || (diemcong(i - 2, j - 1) == 50) || (diemcong(i - 2, j - 1) == 90) || (diemcong(i - 2, j - 1) == 900)) {
                            max1 = diemcong(i - 2, j - 1)
                            let x = banco[i - 2][j - 1]
                            banco[i - 2][j - 1] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = max1 + trangdc(dosau - 1)
                            if (max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i - 2;
                                D = j - 1;
                            }
                            banco[i][j] = banco[i - 2][j - 1];
                            banco[i - 2][j - 1] = x;
                        }
                    }
                }
                if (kiemtra(i + 1, j + 2) == 1) {
                    if (banco[i + 1][j + 2] == 0) {
                        banco[i + 1][j + 2] = banco[i][j];
                        banco[i][j] = 0;
                        max1 = 0
                        max1 = max1 + trangdc(dosau - 1)
                        if (max < max1) {
                            max = max1;
                            A = i;
                            B = j;
                            C = i + 1;
                            D = j + 2;
                        }
                        banco[i][j] = banco[i + 1][j + 2];
                        banco[i + 1][j + 2] = 0;
                    } else {
                        if ((diemcong(i + 1, j + 2) == 10) || (diemcong(i + 1, j + 2) == 30) || (diemcong(i + 1, j + 2) == 50) || (diemcong(i + 1, j + 2) == 90) || (diemcong(i + 1, j + 2) == 900)) {
                            max1 = diemcong(i + 1, j + 2)
                            let x = banco[i + 1][j + 2]
                            banco[i + 1][j + 2] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = max1 + trangdc(dosau - 1)
                            if (max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i + 1;
                                D = j + 2;
                            }
                            banco[i][j] = banco[i + 1][j + 2];
                            banco[i + 1][j + 2] = x;
                        }
                    }
                }
                if (kiemtra(i + 1, j - 2) == 1) {
                    if (banco[i + 1][j - 2] == 0) {
                        banco[i + 1][j - 2] = banco[i][j];
                        banco[i][j] = 0;
                        max1 = 0
                        max1 = max1 + trangdc(dosau - 1)
                        if (max < max1) {
                            max = max1;
                            A = i;
                            B = j;
                            C = i + 1;
                            D = j - 2;
                        }
                        banco[i][j] = banco[i + 1][j - 2];
                        banco[i + 1][j - 2] = 0;
                    } else {
                        if ((diemcong(i + 1, j - 2) == 10) || (diemcong(i + 1, j - 2) == 30) || (diemcong(i + 1, j - 2) == 50) || (diemcong(i + 1, j - 2) == 90) || (diemcong(i + 1, j - 2) == 900)) {
                            max1 = diemcong(i + 1, j - 2)
                            let x = banco[i + 1][j - 2]
                            banco[i + 1][j - 2] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = max1 + trangdc(dosau - 1)
                            if (max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i + 1;
                                D = j - 2;
                            }
                            banco[i][j] = banco[i + 1][j - 2];
                            banco[i + 1][j - 2] = x;
                        }
                    }
                }
                if (kiemtra(i - 1, j + 2) == 1) {
                    if (banco[i - 1][j + 2] == 0) {
                        banco[i - 1][j + 2] = banco[i][j];
                        banco[i][j] = 0;
                        max1 = 0
                        max1 = max1 + trangdc(dosau - 1)
                        if (max < max1) {
                            max = max1;
                            A = i;
                            B = j;
                            C = i - 1;
                            D = j + 2;
                        }
                        banco[i][j] = banco[i - 1][j + 2];
                        banco[i - 1][j + 2] = 0;
                    } else {
                        if ((diemcong(i - 1, j + 2) == 10) || (diemcong(i - 1, j + 2) == 30) || (diemcong(i - 1, j + 2) == 50) || (diemcong(i - 1, j + 2) == 90) || (diemcong(i - 1, j + 2) == 900)) {
                            max1 = diemcong(i - 1, j + 2)
                            let x = banco[i - 1][j + 2]
                            banco[i - 1][j + 2] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = max1 + trangdc(dosau - 1)
                            if (max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i - 1;
                                D = j + 2;
                            }
                            banco[i][j] = banco[i - 1][j + 2];
                            banco[i - 1][j + 2] = x;
                        }
                    }
                }
                if (kiemtra(i - 1, j - 2) == 1) {
                    if (banco[i - 1][j - 2] == 0) {
                        banco[i - 1][j - 2] = banco[i][j];
                        banco[i][j] = 0;
                        max1 = 0
                        max1 = max1 + trangdc(dosau - 1)
                        if (max < max1) {
                            max = max1;
                            A = i;
                            B = j;
                            C = i - 1;
                            D = j - 2;
                        }
                        banco[i][j] = banco[i - 1][j - 2];
                        banco[i - 1][j - 2] = 0;
                    } else {
                        if ((diemcong(i - 1, j - 2) == 10) || (diemcong(i - 1, j - 2) == 30) || (diemcong(i - 1, j - 2) == 50) || (diemcong(i - 1, j - 2) == 90) || (diemcong(i - 1, j - 2) == 900)) {
                            max1 = diemcong(i - 1, j - 2)
                            let x = banco[i - 1][j - 2]
                            banco[i - 1][j - 2] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = max1 + trangdc(dosau - 1)
                            if (max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i - 1;
                                D = j - 2;
                            }
                            banco[i][j] = banco[i - 1][j - 2];
                            banco[i - 1][j - 2] = x;
                        }
                    }
                }
            }
            if (banco[i][j] == 'bb') {
                for (let ir = 1; ir <= 8; ir++) {
                    if (kiemtra(i + ir, j + ir) == 1) {
                        if (banco[i + ir][j + ir] == 0) {
                            banco[i + ir][j + ir] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = 0
                            max1 = max1 + trangdc(dosau - 1)
                            if (max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i + ir;
                                D = j + ir;
                            }
                            banco[i][j] = banco[i + ir][j + ir];
                            banco[i + ir][j + ir] = 0;
                        } else {
                            if ((diemcong(i + ir, j + ir) == 10) || (diemcong(i + ir, j + ir) == 30) || (diemcong(i + ir, j + ir) == 50) || (diemcong(i + ir, j + ir) == 90) || (diemcong(i + ir, j + ir) == 900)) {
                                max1 = diemcong(i + ir, j + ir)
                                let x = banco[i + ir][j + ir]
                                banco[i + ir][j + ir] = banco[i][j];
                                banco[i][j] = 0;
                                max1 = max1 + trangdc(dosau - 1)
                                if (max < max1) {
                                    max = max1;
                                    A = i;
                                    B = j;
                                    C = i + ir;
                                    D = j + ir;
                                }
                                banco[i][j] = banco[i + ir][j + ir];
                                banco[i + ir][j + ir] = x;
                            }
                            break;
                        }
                    } else break
                }
                for (let ir = 1; ir <= 8; ir++) {
                    if (kiemtra(i - ir, j + ir) == 1) {
                        if (banco[i - ir][j + ir] == 0) {
                            banco[i - ir][j + ir] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = 0
                            max1 = max1 + trangdc(dosau - 1)
                            if (max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i - ir;
                                D = j + ir;
                            }
                            banco[i][j] = banco[i - ir][j + ir];
                            banco[i - ir][j + ir] = 0;
                        } else {
                            if ((diemcong(i - ir, j + ir) == 10) || (diemcong(i - ir, j + ir) == 30) || (diemcong(i - ir, j + ir) == 50) || (diemcong(i - ir, j + ir) == 90) || (diemcong(i - ir, j + ir) == 900)) {
                                max1 = diemcong(i - ir, j + ir)
                                let x = banco[i - ir][j + ir]
                                banco[i - ir][j + ir] = banco[i][j];
                                banco[i][j] = 0;
                                max1 = max1 + trangdc(dosau - 1)
                                if (max < max1) {
                                    max = max1;
                                    A = i;
                                    B = j;
                                    C = i - ir;
                                    D = j + ir;
                                }
                                banco[i][j] = banco[i - ir][j + ir];
                                banco[i - ir][j + ir] = x;
                            }
                            break;
                        }
                    }
                }
                for (let ir = 1; ir <= 8; ir++) {
                    if (kiemtra(i - ir, j - ir) == 1) {
                        if (banco[i - ir][j - ir] == 0) {
                            banco[i - ir][j - ir] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = 0
                            max1 = max1 + trangdc(dosau - 1)
                            if (max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i - ir;
                                D = j - ir;
                            }
                            banco[i][j] = banco[i - ir][j - ir];
                            banco[i - ir][j - ir] = 0;
                        } else {
                            if ((diemcong(i - ir, j - ir) == 10) || (diemcong(i - ir, j - ir) == 30) || (diemcong(i - ir, j - ir) == 50) || (diemcong(i - ir, j - ir) == 90) || (diemcong(i - ir, j - ir) == 900)) {
                                max1 = diemcong(i - ir, j - ir)
                                let x = banco[i - ir][j - ir]
                                banco[i - ir][j - ir] = banco[i][j];
                                banco[i][j] = 0;
                                max1 = max1 + trangdc(dosau - 1)
                                if (max < max1) {
                                    max = max1;
                                    A = i;
                                    B = j;
                                    C = i - ir;
                                    D = j - ir;
                                }
                                banco[i][j] = banco[i - ir][j - ir];
                                banco[i - ir][j - ir] = x;
                            }
                            break;
                        }
                    }
                }
                for (let ir = 1; ir <= 8; ir++) {
                    if (kiemtra(i + ir, j - ir) == 1) {
                        if (banco[i + ir][j - ir] == 0) {
                            banco[i + ir][j - ir] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = 0
                            max1 = max1 + trangdc(dosau - 1)
                            if (max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i + ir;
                                D = j - ir;
                            }
                            banco[i][j] = banco[i + ir][j - ir];
                            banco[i + ir][j - ir] = 0;
                        } else {
                            if ((diemcong(i + ir, j - ir) == 10) || (diemcong(i + ir, j - ir) == 30) || (diemcong(i + ir, j - ir) == 50) || (diemcong(i + ir, j - ir) == 90) || (diemcong(i + ir, j - ir) == 900)) {
                                max1 = diemcong(i + ir, j - ir)
                                let x = banco[i + ir][j - ir]
                                banco[i + ir][j - ir] = banco[i][j];
                                banco[i][j] = 0;
                                max1 = max1 + trangdc(dosau - 1)
                                if (max < max1) {
                                    max = max1;
                                    A = i;
                                    B = j;
                                    C = i + ir;
                                    D = j - ir;
                                }
                                banco[i][j] = banco[i + ir][j - ir];
                                banco[i + ir][j - ir] = x;
                            }
                            break;
                        }
                    }
                }
            }
            if (banco[i][j] == 'bq') {
                for (let ir = 1; ir <= 8; ir++) {
                    if (kiemtra(i + ir, j) == 1) {
                        if (banco[i + ir][j] == 0) {
                            banco[i + ir][j] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = 0;
                            max1 = max1 + trangdc(dosau - 1);
                            if(max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i + ir;
                                D = j;
                            }
                            banco[i][j] = banco[i + ir][j];
                            banco[i + ir][j] = 0;
                        } else {
                            if ((diemcong(i + ir, j) == 10) || (diemcong(i + ir, j) == 30) || (diemcong(i + ir, j) == 50) || (diemcong(i + ir, j) == 90) || (diemcong(i + ir, j) == 900)) {
                                max1 = diemcong(i + ir, j)
                                let x = banco[i + ir][j]
                                banco[i + ir][j] = banco[i][j];
                                banco[i][j] = 0;
                                max1 = max1 + trangdc(dosau - 1)
                                if(max < max1) {
                                    max = max1;
                                    A = i;
                                    B = j;
                                    C = i + ir;
                                    D = j;
                                }
                                banco[i][j] = banco[i + ir][j];
                                banco[i + ir][j] = x;
                            }
                            break;
                        }
                    } else break
                }
                for (let ir = 1; ir <= 8; ir++) {
                    if (kiemtra(i - ir, j) == 1) {
                        if (banco[i - ir][j] == 0) {
                            banco[i - ir][j] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = 0
                            max1 = max1 + trangdc(dosau - 1)
                            if(max<max1 + trangdc(dosau - 1)) {
                                max = max1 + trangdc(dosau - 1);
                                A = i;
                                B = j;
                                C = i - ir;
                                D = j;
                            }
                            banco[i][j] = banco[i - ir][j];
                            banco[i - ir][j] = 0;
                        } else {
                            if ((diemcong(i - ir, j) == 10) || (diemcong(i - ir, j) == 30) || (diemcong(i - ir, j) == 50) || (diemcong(i - ir, j) == 90) || (diemcong(i - ir, j) == 900)) {
                                max1 = diemcong(i - ir, j)
                                let x = banco[i - ir][j]
                                banco[i - ir][j] = banco[i][j];
                                banco[i][j] = 0;
                                max1 = max1 + trangdc(dosau - 1);
                                if(max < max1) {
                                    max = max1;
                                    A = i;
                                    B = j;
                                    C = i - ir;
                                    D = j;
                                }
                                banco[i][j] = banco[i - ir][j];
                                banco[i - ir][j] = x;
                            }
                            break;
                        }
                    } else break
                }
                for (let ir = 1; ir <= 8; ir++) {
                    if (kiemtra(i, j + ir) == 1) {
                        if (banco[i][j + ir] == 0) {
                            banco[i][j + ir] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = 0
                            max1 = max1 + trangdc(dosau - 1)
                            if(max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i ;
                                D = j + ir;
                            }
                            banco[i][j] = banco[i][j + ir];
                            banco[i][j + ir] = 0;
                        } else {
                            if ((diemcong(i, j + ir) == 10) || (diemcong(i, j + ir) == 30) || (diemcong(i, j + ir) == 50) || (diemcong(i, j + ir) == 90) || (diemcong(i, j + ir) == 900)) {
                                max1 = diemcong(i, j + ir)
                                let x = banco[i][j + ir]
                                banco[i][j + ir] = banco[i][j];
                                banco[i][j] = 0;
                                max1 = max1 + trangdc(dosau - 1)
                                if(max < max1) {
                                    max = max1;
                                    A = i;
                                    B = j;
                                    C = i ;
                                    D = j + ir;
                                }
                                banco[i][j] = banco[i][j + ir];
                                banco[i][j + ir] = x;
                            }
                            break;
                        }
                    } else break;
                }
                for (let ir = 1; ir <= 8; ir++) {
                    if (kiemtra(i, j - ir) == 1) {
                        if (banco[i][j - ir] == 0) {
                            banco[i][j - ir] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = 0
                            max1 = max1 + trangdc(dosau - 1)
                            if(max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i ;
                                D = j - ir;
                            }
                            banco[i][j] = banco[i][j - ir];
                            banco[i][j - ir] = 0;
                        } else {
                            if ((diemcong(i, j - ir) == 10) || (diemcong(i, j - ir) == 30) || (diemcong(i, j - ir) == 50) || (diemcong(i, j - ir) == 90) || (diemcong(i, j - ir) == 900)) {
                                max1 = diemcong(i, j - ir)
                                let x = banco[i][j - ir]
                                banco[i][j - ir] = banco[i][j];
                                banco[i][j] = 0;
                                max1 = max1 + trangdc(dosau - 1)
                                if(max < max1) {
                                    max = max1;
                                    A = i;
                                    B = j;
                                    C = i;
                                    D = j - ir;
                                }
                                banco[i][j] = banco[i][j - ir];
                                banco[i][j - ir] = x;
                            }
                            break;
                        }
                    } else break
                }
                for (let ir = 1; ir <= 8; ir++) {
                    if (kiemtra(i + ir, j + ir) == 1) {
                        if (banco[i + ir][j + ir] == 0) {
                            banco[i + ir][j + ir] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = 0
                            max1 = max1 + trangdc(dosau - 1)
                            if (max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i + ir;
                                D = j + ir;
                            }
                            banco[i][j] = banco[i + ir][j + ir];
                            banco[i + ir][j + ir] = 0;
                        } else {
                            if ((diemcong(i + ir, j + ir) == 10) || (diemcong(i + ir, j + ir) == 30) || (diemcong(i + ir, j + ir) == 50) || (diemcong(i + ir, j + ir) == 90) || (diemcong(i + ir, j + ir) == 900)) {
                                max1 = diemcong(i + ir, j + ir)
                                let x = banco[i + ir][j + ir]
                                banco[i + ir][j + ir] = banco[i][j];
                                banco[i][j] = 0;
                                max1 = max1 + trangdc(dosau - 1)
                                if (max < max1) {
                                    max = max1;
                                    A = i;
                                    B = j;
                                    C = i + ir;
                                    D = j + ir;
                                }
                                banco[i][j] = banco[i + ir][j + ir];
                                banco[i + ir][j + ir] = x;
                            }
                            break;
                        }
                    } else break
                }
                for (let ir = 1; ir <= 8; ir++) {
                    if (kiemtra(i - ir, j + ir) == 1) {
                        if (banco[i - ir][j + ir] == 0) {
                            banco[i - ir][j + ir] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = 0
                            max1 = max1 + trangdc(dosau - 1)
                            if (max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i - ir;
                                D = j + ir;
                            }
                            banco[i][j] = banco[i - ir][j + ir];
                            banco[i - ir][j + ir] = 0;
                        } else {
                            if ((diemcong(i - ir, j + ir) == 10) || (diemcong(i - ir, j + ir) == 30) || (diemcong(i - ir, j + ir) == 50) || (diemcong(i - ir, j + ir) == 90) || (diemcong(i - ir, j + ir) == 900)) {
                                max1 = diemcong(i - ir, j + ir)
                                let x = banco[i - ir][j + ir]
                                banco[i - ir][j + ir] = banco[i][j];
                                banco[i][j] = 0;
                                max1 = max1 + trangdc(dosau - 1)
                                if (max < max1) {
                                    max = max1;
                                    A = i;
                                    B = j;
                                    C = i - ir;
                                    D = j + ir;
                                }
                                banco[i][j] = banco[i - ir][j + ir];
                                banco[i - ir][j + ir] = x;
                            }
                            break;
                        }
                    }
                }
                for (let ir = 1; ir <= 8; ir++) {
                    if (kiemtra(i - ir, j - ir) == 1) {
                        if (banco[i - ir][j - ir] == 0) {
                            banco[i - ir][j - ir] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = 0
                            max1 = max1 + trangdc(dosau - 1)
                            if (max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i - ir;
                                D = j - ir;
                            }
                            banco[i][j] = banco[i - ir][j - ir];
                            banco[i - ir][j - ir] = 0;
                        } else {
                            if ((diemcong(i - ir, j - ir) == 10) || (diemcong(i - ir, j - ir) == 30) || (diemcong(i - ir, j - ir) == 50) || (diemcong(i - ir, j - ir) == 90) || (diemcong(i - ir, j - ir) == 900)) {
                                max1 = diemcong(i - ir, j - ir)
                                let x = banco[i - ir][j - ir]
                                banco[i - ir][j - ir] = banco[i][j];
                                banco[i][j] = 0;
                                max1 = max1 + trangdc(dosau - 1)
                                if (max < max1) {
                                    max = max1;
                                    A = i;
                                    B = j;
                                    C = i - ir;
                                    D = j - ir;
                                }
                                banco[i][j] = banco[i - ir][j - ir];
                                banco[i - ir][j - ir] = x;
                            }
                            break;
                        }
                    }
                }
                for (let ir = 1; ir <= 8; ir++) {
                    if (kiemtra(i + ir, j - ir) == 1) {
                        if (banco[i + ir][j - ir] == 0) {
                            banco[i + ir][j - ir] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = 0
                            max1 = max1 + trangdc(dosau - 1)
                            if (max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i + ir;
                                D = j - ir;
                            }
                            banco[i][j] = banco[i + ir][j - ir];
                            banco[i + ir][j - ir] = 0;
                        } else {
                            if ((diemcong(i + ir, j - ir) == 10) || (diemcong(i + ir, j - ir) == 30) || (diemcong(i + ir, j - ir) == 50) || (diemcong(i + ir, j - ir) == 90) || (diemcong(i + ir, j - ir) == 900)) {
                                max1 = diemcong(i + ir, j - ir)
                                let x = banco[i + ir][j - ir]
                                banco[i + ir][j - ir] = banco[i][j];
                                banco[i][j] = 0;
                                max1 = max1 + trangdc(dosau - 1)
                                if (max < max1) {
                                    max = max1;
                                    A = i;
                                    B = j;
                                    C = i + ir;
                                    D = j - ir;
                                }
                                banco[i][j] = banco[i + ir][j - ir];
                                banco[i + ir][j - ir] = x;
                            }
                            break;
                        }
                    }
                }
            }
            if (banco[i][j] == 'bk') {
                for (let ir = 1; ir <= 1; ir++) {
                    if (kiemtra(i + ir, j) == 1) {
                        if (banco[i + ir][j] == 0) {
                            banco[i + ir][j] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = 0;
                            max1 = max1 + trangdc(dosau - 1);
                            if(max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i + ir;
                                D = j;
                            }
                            banco[i][j] = banco[i + ir][j];
                            banco[i + ir][j] = 0;
                        } else {
                            if ((diemcong(i + ir, j) == 10) || (diemcong(i + ir, j) == 30) || (diemcong(i + ir, j) == 50) || (diemcong(i + ir, j) == 90) || (diemcong(i + ir, j) == 900)) {
                                max1 = diemcong(i + ir, j)
                                let x = banco[i + ir][j]
                                banco[i + ir][j] = banco[i][j];
                                banco[i][j] = 0;
                                max1 = max1 + trangdc(dosau - 1)
                                if(max < max1) {
                                    max = max1;
                                    A = i;
                                    B = j;
                                    C = i + ir;
                                    D = j;
                                }
                                banco[i][j] = banco[i + ir][j];
                                banco[i + ir][j] = x;
                            }
                            break;
                        }
                    } else break
                }
                for (let ir = 1; ir <= 1; ir++) {
                    if (kiemtra(i - ir, j) == 1) {
                        if (banco[i - ir][j] == 0) {
                            banco[i - ir][j] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = 0
                            max1 = max1 + trangdc(dosau - 1)
                            if(max<max1 + trangdc(dosau - 1)) {
                                max = max1 + trangdc(dosau - 1);
                                A = i;
                                B = j;
                                C = i - ir;
                                D = j;
                            }
                            banco[i][j] = banco[i - ir][j];
                            banco[i - ir][j] = 0;
                        } else {
                            if ((diemcong(i - ir, j) == 10) || (diemcong(i - ir, j) == 30) || (diemcong(i - ir, j) == 50) || (diemcong(i - ir, j) == 90) || (diemcong(i - ir, j) == 900)) {
                                max1 = diemcong(i - ir, j)
                                let x = banco[i - ir][j]
                                banco[i - ir][j] = banco[i][j];
                                banco[i][j] = 0;
                                max1 = max1 + trangdc(dosau - 1);
                                if(max < max1) {
                                    max = max1;
                                    A = i;
                                    B = j;
                                    C = i - ir;
                                    D = j;
                                }
                                banco[i][j] = banco[i - ir][j];
                                banco[i - ir][j] = x;
                            }
                            break;
                        }
                    } else break
                }
                for (let ir = 1; ir <= 1; ir++) {
                    if (kiemtra(i, j + ir) == 1) {
                        if (banco[i][j + ir] == 0) {
                            banco[i][j + ir] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = 0
                            max1 = max1 + trangdc(dosau - 1)
                            if(max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i ;
                                D = j + ir;
                            }
                            banco[i][j] = banco[i][j + ir];
                            banco[i][j + ir] = 0;
                        } else {
                            if ((diemcong(i, j + ir) == 10) || (diemcong(i, j + ir) == 30) || (diemcong(i, j + ir) == 50) || (diemcong(i, j + ir) == 90) || (diemcong(i, j + ir) == 900)) {
                                max1 = diemcong(i, j + ir)
                                let x = banco[i][j + ir]
                                banco[i][j + ir] = banco[i][j];
                                banco[i][j] = 0;
                                max1 = max1 + trangdc(dosau - 1)
                                if(max < max1) {
                                    max = max1;
                                    A = i;
                                    B = j;
                                    C = i ;
                                    D = j + ir;
                                }
                                banco[i][j] = banco[i][j + ir];
                                banco[i][j + ir] = x;
                            }
                            break;
                        }
                    } else break;
                }
                for (let ir = 1; ir <= 1; ir++) {
                    if (kiemtra(i, j - ir) == 1) {
                        if (banco[i][j - ir] == 0) {
                            banco[i][j - ir] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = 0
                            max1 = max1 + trangdc(dosau - 1)
                            if(max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i ;
                                D = j - ir;
                            }
                            banco[i][j] = banco[i][j - ir];
                            banco[i][j - ir] = 0;
                        } else {
                            if ((diemcong(i, j - ir) == 10) || (diemcong(i, j - ir) == 30) || (diemcong(i, j - ir) == 50) || (diemcong(i, j - ir) == 90) || (diemcong(i, j - ir) == 900)) {
                                max1 = diemcong(i, j - ir)
                                let x = banco[i][j - ir]
                                banco[i][j - ir] = banco[i][j];
                                banco[i][j] = 0;
                                max1 = max1 + trangdc(dosau - 1)
                                if(max < max1) {
                                    max = max1;
                                    A = i;
                                    B = j;
                                    C = i;
                                    D = j - ir;
                                }
                                banco[i][j] = banco[i][j - ir];
                                banco[i][j - ir] = x;
                            }
                            break;
                        }
                    } else break
                }
                for (let ir = 1; ir <= 1; ir++) {
                    if (kiemtra(i + ir, j + ir) == 1) {
                        if (banco[i + ir][j + ir] == 0) {
                            banco[i + ir][j + ir] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = 0
                            max1 = max1 + trangdc(dosau - 1)
                            if (max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i + ir;
                                D = j + ir;
                            }
                            banco[i][j] = banco[i + ir][j + ir];
                            banco[i + ir][j + ir] = 0;
                        } else {
                            if ((diemcong(i + ir, j + ir) == 10) || (diemcong(i + ir, j + ir) == 30) || (diemcong(i + ir, j + ir) == 50) || (diemcong(i + ir, j + ir) == 90) || (diemcong(i + ir, j + ir) == 900)) {
                                max1 = diemcong(i + ir, j + ir)
                                let x = banco[i + ir][j + ir]
                                banco[i + ir][j + ir] = banco[i][j];
                                banco[i][j] = 0;
                                max1 = max1 + trangdc(dosau - 1)
                                if (max < max1) {
                                    max = max1;
                                    A = i;
                                    B = j;
                                    C = i + ir;
                                    D = j + ir;
                                }
                                banco[i][j] = banco[i + ir][j + ir];
                                banco[i + ir][j + ir] = x;
                            }
                            break;
                        }
                    } else break
                }
                for (let ir = 1; ir <= 1; ir++) {
                    if (kiemtra(i - ir, j + ir) == 1) {
                        if (banco[i - ir][j + ir] == 0) {
                            banco[i - ir][j + ir] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = 0
                            max1 = max1 + trangdc(dosau - 1)
                            if (max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i - ir;
                                D = j + ir;
                            }
                            banco[i][j] = banco[i - ir][j + ir];
                            banco[i - ir][j + ir] = 0;
                        } else {
                            if ((diemcong(i - ir, j + ir) == 10) || (diemcong(i - ir, j + ir) == 30) || (diemcong(i - ir, j + ir) == 50) || (diemcong(i - ir, j + ir) == 90) || (diemcong(i - ir, j + ir) == 900)) {
                                max1 = diemcong(i - ir, j + ir)
                                let x = banco[i - ir][j + ir]
                                banco[i - ir][j + ir] = banco[i][j];
                                banco[i][j] = 0;
                                max1 = max1 + trangdc(dosau - 1)
                                if (max < max1) {
                                    max = max1;
                                    A = i;
                                    B = j;
                                    C = i - ir;
                                    D = j + ir;
                                }
                                banco[i][j] = banco[i - ir][j + ir];
                                banco[i - ir][j + ir] = x;
                            }
                            break;
                        }
                    }
                }
                for (let ir = 1; ir <= 1; ir++) {
                    if (kiemtra(i - ir, j - ir) == 1) {
                        if (banco[i - ir][j - ir] == 0) {
                            banco[i - ir][j - ir] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = 0
                            max1 = max1 + trangdc(dosau - 1)
                            if (max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i - ir;
                                D = j - ir;
                            }
                            banco[i][j] = banco[i - ir][j - ir];
                            banco[i - ir][j - ir] = 0;
                        } else {
                            if ((diemcong(i - ir, j - ir) == 10) || (diemcong(i - ir, j - ir) == 30) || (diemcong(i - ir, j - ir) == 50) || (diemcong(i - ir, j - ir) == 90) || (diemcong(i - ir, j - ir) == 900)) {
                                max1 = diemcong(i - ir, j - ir)
                                let x = banco[i - ir][j - ir]
                                banco[i - ir][j - ir] = banco[i][j];
                                banco[i][j] = 0;
                                max1 = max1 + trangdc(dosau - 1)
                                if (max < max1) {
                                    max = max1;
                                    A = i;
                                    B = j;
                                    C = i - ir;
                                    D = j - ir;
                                }
                                banco[i][j] = banco[i - ir][j - ir];
                                banco[i - ir][j - ir] = x;
                            }
                            break;
                        }
                    }
                }
                for (let ir = 1; ir <= 1; ir++) {
                    if (kiemtra(i + ir, j - ir) == 1) {
                        if (banco[i + ir][j - ir] == 0) {
                            banco[i + ir][j - ir] = banco[i][j];
                            banco[i][j] = 0;
                            max1 = 0
                            max1 = max1 + trangdc(dosau - 1)
                            if (max < max1) {
                                max = max1;
                                A = i;
                                B = j;
                                C = i + ir;
                                D = j - ir;
                            }
                            banco[i][j] = banco[i + ir][j - ir];
                            banco[i + ir][j - ir] = 0;
                        } else {
                            if ((diemcong(i + ir, j - ir) == 10) || (diemcong(i + ir, j - ir) == 30) || (diemcong(i + ir, j - ir) == 50) || (diemcong(i + ir, j - ir) == 90) || (diemcong(i + ir, j - ir) == 900)) {
                                max1 = diemcong(i + ir, j - ir)
                                let x = banco[i + ir][j - ir]
                                banco[i + ir][j - ir] = banco[i][j];
                                banco[i][j] = 0;
                                max1 = max1 + trangdc(dosau - 1)
                                if (max < max1) {
                                    max = max1;
                                    A = i;
                                    B = j;
                                    C = i + ir;
                                    D = j - ir;
                                }
                                banco[i][j] = banco[i + ir][j - ir];
                                banco[i + ir][j - ir] = x;
                            }
                            break;
                        }
                    }
                }
            }
        }
    }

    if(dosau == ds) {
        let a = A.toString()+B.toString()+C.toString()+D.toString();
        return a
    }
    else {
        return max
    }
}
function trangdc(dosau)
{
    let min = 99999999999;
    let min1 = 0;
    if(dosau == 1)
    {
        for(let i=0;i<8;i++)
        {
            for(let j=0;j<8;j++)
            {
                if(banco[i][j] == 'wr') {
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i + ir, j) == 1) {
                            if (banco[i + ir][j] == 0) {
                                banco[i + ir][j] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + ir][j];
                                banco[i + ir][j] = 0;
                            } else {
                                if ((diemtru(i + ir, j) == -10) || (diemtru(i + ir, j) == -30) || (diemtru(i + ir, j) == -50) || (diemtru(i + ir, j) == -90) || (diemtru(i + ir, j) == -900)) {
                                    min1 = diemtru(i + ir, j)
                                    let x = banco[i + ir][j]
                                    banco[i + ir][j] = banco[i][j];
                                    banco[i][j] = 0;
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i + ir][j];
                                    banco[i + ir][j] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i - ir, j) == 1) {
                            if (banco[i - ir][j] == 0) {
                                banco[i - ir][j] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                if(min>min1) {
                                    min = min1
                                }
                                banco[i][j] = banco[i - ir][j];
                                banco[i - ir][j] = 0;
                            } else {
                                if ((diemtru(i - ir, j) == -10) || (diemtru(i - ir, j) == -30) || (diemtru(i - ir, j) == -50) || (diemtru(i - ir, j) == -90) || (diemtru(i - ir, j) == -900)) {
                                    min1 = diemtru(i - ir, j)
                                    let x = banco[i - ir][j]
                                    banco[i - ir][j] = banco[i][j];
                                    banco[i][j] = 0;
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i - ir][j];
                                    banco[i - ir][j] = x;
                                }
                                break;
                            }
                        } else break
                    }
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i, j + ir) == 1) {
                            if (banco[i][j + ir] == 0) {
                                banco[i][j + ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i][j + ir];
                                banco[i][j + ir] = 0;
                            } else {
                                if ((diemtru(i, j + ir) == -10) || (diemtru(i, j + ir) == -30) || (diemtru(i, j + ir) == -50) || (diemtru(i, j + ir) == -90) || (diemtru(i, j + ir) == -900)) {
                                    min1 = diemtru(i, j + ir)
                                    let x = banco[i][j + ir]
                                    banco[i][j + ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i][j + ir];
                                    banco[i][j + ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i, j - ir) == 1) {
                            if (banco[i][j - ir] == 0) {
                                banco[i][j - ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i][j - ir];
                                banco[i][j - ir] = 0;
                            } else {
                                if ((diemtru(i, j - ir) == -10) || (diemtru(i, j - ir) == -30) || (diemtru(i, j - ir) == -50) || (diemtru(i, j - ir) == -90) || (diemtru(i, j - ir) == -900)) {
                                    min1 = diemtru(i, j - ir)
                                    let x = banco[i][j - ir]
                                    banco[i][j - ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i][j - ir];
                                    banco[i][j - ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                }
                if(banco[i][j] == 'wp') {
                    if (i == 1) {
                        for (let ip = 1; ip <= 2; ip++) {
                            if (banco[i + ip][j] == 0) {
                                banco[i + ip][j] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + ip][j];
                                banco[i + ip][j] = 0;
                            } else break;
                        }
                        if (kiemtra(i + 1, j - 1) == 1) {
                            if ((diemtru(i + 1, j - 1) == -10) || (diemtru(i + 1, j - 1) == -30) || (diemtru(i + 1, j - 1) == -50) || (diemtru(i + 1, j - 1) == -90) || (diemtru(i + 1, j - 1) == -900)) {
                                min1 = diemtru(i + 1, j - 1)
                                let x = banco[i + 1][j - 1]
                                banco[i + 1][j - 1] = banco[i][j];
                                banco[i][j] = 0;
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + 1][j - 1];
                                banco[i + 1][j - 1] = x;
                            }
                        }
                        if (kiemtra(i + 1, j + 1) == 1) {
                            if ((diemtru(i + 1, j + 1) == -10) || (diemtru(i + 1, j + 1) == -30) || (diemtru(i + 1, j + 1) == -50) || (diemtru(i + 1, j + 1) == -90) || (diemtru(i + 1, j + 1) == -900)) {
                                min1 = diemtru(i + 1, j + 1)
                                let x = banco[i + 1][j + 1]
                                banco[i + 1][j + 1] = banco[i][j];
                                banco[i][j] = 0;
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + 1][j + 1];
                                banco[i + 1][j + 1] = x;
                            }
                        }
                    } else {
                        if (kiemtra(i + 1, j) == 1) {
                            if (banco[i + 1][j] == 0) {
                                banco[i + 1][j] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + 1][j];
                                banco[i + 1][j] = 0;
                            }
                        }
                        if (kiemtra(i + 1, j - 1) == 1) {
                            if ((diemtru(i + 1, j - 1) == -10) || (diemtru(i + 1, j - 1) == -30) || (diemtru(i + 1, j - 1) == -50) || (diemtru(i + 1, j - 1) == -90) || (diemtru(i + 1, j - 1) == -900)) {
                                min1 = diemtru(i + 1, j - 1)
                                let x = banco[i + 1][j - 1]
                                banco[i + 1][j - 1] = banco[i][j];
                                banco[i][j] = 0;
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + 1][j - 1];
                                banco[i + 1][j - 1] = x;
                            }
                        }
                        if (kiemtra(i + 1, j + 1) == 1) {
                            if ((diemtru(i + 1, j + 1) == -10) || (diemtru(i + 1, j + 1) == -30) || (diemtru(i + 1, j + 1) == -50) || (diemtru(i + 1, j + 1) == -90) || (diemtru(i + 1, j + 1) == -900)) {
                                min1 = diemtru(i + 1, j + 1)
                                let x = banco[i + 1][j + 1]
                                banco[i + 1][j + 1] = banco[i][j];
                                banco[i][j] = 0;
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + 1][j + 1];
                                banco[i + 1][j + 1] = x;
                            }
                        }
                    }
                }
                if(banco[i][j] == 'wn') {
                    if (kiemtra(i + 2, j + 1) == 1) {
                        if (banco[i + 2][j + 1] == 0) {
                            banco[i + 2][j + 1] = banco[i][j];
                            banco[i][j] = 0;
                            min1 = 0
                            if(min>min1) {
                                min = min1
                            }
                            banco[i][j] = banco[i + 2][j + 1];
                            banco[i + 2][j + 1] = 0;
                        } else {
                            if ((diemtru(i + 2, j + 1) == -10) || (diemtru(i + 2, j + 1) == -30) || (diemtru(i + 2, j + 1) == -50) || (diemtru(i + 2, j + 1) == -90) || (diemtru(i + 2, j + 1) == -900)) {
                                min1 = diemtru(i + 2, j + 1)
                                let x = banco[i + 2][j + 1]
                                banco[i + 2][j + 1] = banco[i][j];
                                banco[i][j] = 0;
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + 2][j + 1];
                                banco[i + 2][j + 1] = x;
                            }
                        }
                    }
                    if (kiemtra(i - 2, j + 1) == 1) {
                        if (banco[i - 2][j + 1] == 0) {
                            banco[i - 2][j + 1] = banco[i][j];
                            banco[i][j] = 0;
                            min1 = 0
                            if(min>min1) {
                                min = min1
                            }
                            banco[i][j] = banco[i - 2][j + 1];
                            banco[i - 2][j + 1] = 0;
                        } else {
                            if ((diemtru(i - 2, j + 1) == -10) || (diemtru(i - 2, j + 1) == -30) || (diemtru(i - 2, j + 1) == -50) || (diemtru(i - 2, j + 1) == -90) || (diemtru(i - 2, j + 1) == -900)) {
                                min1 = diemtru(i - 2, j + 1)
                                let x = banco[i - 2][j + 1]
                                banco[i - 2][j + 1] = banco[i][j];
                                banco[i][j] = 0;
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i - 2][j + 1];
                                banco[i - 2][j + 1] = x;
                            }
                        }
                    }
                    if (kiemtra(i + 2, j - 1) == 1) {
                        if (banco[i + 2][j - 1] == 0) {
                            banco[i + 2][j - 1] = banco[i][j];
                            banco[i][j] = 0;
                            min1 = 0
                            if(min>min1) {
                                min = min1
                            }
                            banco[i][j] = banco[i + 2][j - 1];
                            banco[i + 2][j - 1] = 0;
                        } else {
                            if ((diemtru(i + 2, j - 1) == -10) || (diemtru(i + 2, j - 1) == -30) || (diemtru(i + 2, j - 1) == -50) || (diemtru(i + 2, j - 1) == -90) || (diemtru(i + 2, j - 1) == -900)) {
                                min1 = diemtru(i + 2, j - 1)
                                let x = banco[i + 2][j - 1]
                                banco[i + 2][j - 1] = banco[i][j];
                                banco[i][j] = 0;
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + 2][j - 1];
                                banco[i + 2][j - 1] = x;
                            }
                        }
                    }
                    if (kiemtra(i - 2, j - 1) == 1) {
                        if (banco[i - 2][j - 1] == 0) {
                            banco[i - 2][j - 1] = banco[i][j];
                            banco[i][j] = 0;
                            min1 = 0
                            if(min>min1) {
                                min = min1
                            }
                            banco[i][j] = banco[i - 2][j - 1];
                            banco[i - 2][j - 1] = 0;
                        } else {
                            if ((diemtru(i - 2, j - 1) == -10) || (diemtru(i - 2, j - 1) == -30) || (diemtru(i - 2, j - 1) == -50) || (diemtru(i - 2, j - 1) == -90) || (diemtru(i - 2, j - 1) == -900)) {
                                min1 = diemtru(i - 2, j - 1)
                                let x = banco[i - 2][j - 1]
                                banco[i - 2][j - 1] = banco[i][j];
                                banco[i][j] = 0;
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i - 2][j - 1];
                                banco[i - 2][j - 1] = x;
                            }
                        }
                    }
                    if (kiemtra(i + 1, j + 2) == 1) {
                        if (banco[i + 1][j + 2] == 0) {
                            banco[i + 1][j + 2] = banco[i][j];
                            banco[i][j] = 0;
                            min1 = 0
                            if(min>min1) {
                                min = min1
                            }
                            banco[i][j] = banco[i + 1][j + 2];
                            banco[i + 1][j + 2] = 0;
                        } else {
                            if ((diemtru(i + 1, j + 2) == -10) || (diemtru(i + 1, j + 2) == -30) || (diemtru(i + 1, j + 2) == -50) || (diemtru(i + 1, j + 2) == -90) || (diemtru(i + 1, j + 2) == -900)) {
                                min1 = diemtru(i + 1, j + 2)
                                let x = banco[i + 1][j + 2]
                                banco[i + 1][j + 2] = banco[i][j];
                                banco[i][j] = 0;
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + 1][j + 2];
                                banco[i + 1][j + 2] = x;
                            }
                        }
                    }
                    if (kiemtra(i + 1, j - 2) == 1) {
                        if (banco[i + 1][j - 2] == 0) {
                            banco[i + 1][j - 2] = banco[i][j];
                            banco[i][j] = 0;
                            min1 = 0
                            if(min>min1) {
                                min = min1
                            }
                            banco[i][j] = banco[i + 1][j - 2];
                            banco[i + 1][j - 2] = 0;
                        } else {
                            if ((diemtru(i + 1, j - 2) == -10) || (diemtru(i + 1, j - 2) == -30) || (diemtru(i + 1, j - 2) == -50) || (diemtru(i + 1, j - 2) == -90) || (diemtru(i + 1, j + 2) == -900)) {
                                min1 = diemtru(i + 1, j - 2)
                                let x = banco[i + 1][j - 2]
                                banco[i + 1][j - 2] = banco[i][j];
                                banco[i][j] = 0;
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + 1][j - 2];
                                banco[i + 1][j - 2] = x;
                            }
                        }
                    }
                    if (kiemtra(i - 1, j + 2) == 1) {
                        if (banco[i - 1][j + 2] == 0) {
                            banco[i - 1][j + 2] = banco[i][j];
                            banco[i][j] = 0;
                            min1 = 0
                            if(min>min1){
                                min = min1
                            }
                            banco[i][j] = banco[i - 1][j + 2];
                            banco[i - 1][j + 2] = 0;
                        } else {
                            if ((diemtru(i - 1, j + 2) == -10) || (diemtru(i - 1, j + 2) == -30) || (diemtru(i - 1, j + 2) == -50) || (diemtru(i - 1, j + 2) == -90) || (diemtru(i - 1, j + 2) == -900)) {
                                min1 = diemtru(i - 1, j + 2)
                                let x = banco[i - 1][j + 2]
                                banco[i - 1][j + 2] = banco[i][j];
                                banco[i][j] = 0;
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i - 1][j + 2];
                                banco[i - 1][j + 2] = x;
                            }
                        }
                    }
                    if (kiemtra(i - 1, j - 2) == 1) {
                        if (banco[i - 1][j - 2] == 0) {
                            banco[i - 1][j - 2] = banco[i][j];
                            banco[i][j] = 0;
                            min1 = 0
                            if(min>min1){
                                    min = min1
                                }
                            banco[i][j] = banco[i - 1][j - 2];
                            banco[i - 1][j - 2] = 0;
                        } else {
                            if ((diemtru(i - 1, j - 2) == -10) || (diemtru(i - 1, j - 2) == -30) || (diemtru(i - 1, j - 2) == -50) || (diemtru(i - 1, j - 2) == -90) || (diemtru(i - 1, j - 2) == -900)) {
                                min1 = diemtru(i - 1, j - 2)
                                let x = banco[i - 1][j - 2]
                                banco[i - 1][j - 2] = banco[i][j];
                                banco[i][j] = 0;
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i - 1][j - 2];
                                banco[i - 1][j - 2] = x;
                            }
                        }
                    }
                }
                if(banco[i][j] == 'wb') {
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i + ir, j + ir) == 1) {
                            if (banco[i + ir][j + ir] == 0) {
                                banco[i + ir][j + ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + ir][j + ir];
                                banco[i + ir][j + ir] = 0;
                            } else {
                                if ((diemtru(i + ir, j + ir) == -10) || (diemtru(i + ir, j + ir) == -30) || (diemtru(i + ir, j + ir) == -50) || (diemtru(i + ir, j + ir) == -90) || (diemtru(i + ir, j + ir) == -900)) {
                                    min1 = diemtru(i + ir, j + ir)
                                    let x = banco[i + ir][j + ir]
                                    banco[i + ir][j + ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i + ir][j + ir];
                                    banco[i + ir][j + ir] = x;
                                }
                                break;
                            }
                        } else break
                    }
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i - ir, j + ir) == 1) {
                            if (banco[i - ir][j + ir] == 0) {
                                banco[i - ir][j + ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i - ir][j + ir];
                                banco[i - ir][j + ir] = 0;
                            } else {
                                if ((diemtru(i - ir, j + ir) == -10) || (diemtru(i - ir, j + ir) == -30) || (diemtru(i - ir, j + ir) == -50) || (diemtru(i - ir, j + ir) == -90) || (diemtru(i - ir, j + ir) == -900)) {
                                    min1 = diemtru(i - ir, j + ir)
                                    let x = banco[i - ir][j + ir]
                                    banco[i - ir][j + ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i - ir][j + ir];
                                    banco[i - ir][j + ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i - ir, j - ir) == 1) {
                            if (banco[i - ir][j - ir] == 0) {
                                banco[i - ir][j - ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i - ir][j - ir];
                                banco[i - ir][j - ir] = 0;
                            } else {
                                if ((diemtru(i - ir, j - ir) == -10) || (diemtru(i - ir, j - ir) == -30) || (diemtru(i - ir, j - ir) == -50) || (diemtru(i - ir, j - ir) == -90) || (diemtru(i - ir, j - ir) == -900)) {
                                    min1 = diemtru(i - ir, j - ir)
                                    let x = banco[i - ir][j - ir]
                                    banco[i - ir][j - ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i - ir][j - ir];
                                    banco[i - ir][j - ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i + ir, j - ir) == 1) {
                            if (banco[i + ir][j - ir] == 0) {
                                banco[i + ir][j - ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + ir][j - ir];
                                banco[i + ir][j - ir] = 0;
                            } else {
                                if ((diemtru(i + ir, j - ir) == -10) || (diemtru(i + ir, j - ir) == -30) || (diemtru(i + ir, j - ir) == -50) || (diemtru(i + ir, j - ir) == -90) || (diemtru(i + ir, j - ir) == -900)) {
                                    min1 = diemtru(i + ir, j - ir)
                                    let x = banco[i + ir][j - ir]
                                    banco[i + ir][j - ir] = banco[i][j];
                                    banco[i][j] = 0
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i + ir][j - ir];
                                    banco[i + ir][j - ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                }
                if(banco[i][j] == 'wq') {
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i + ir, j) == 1) {
                            if (banco[i + ir][j] == 0) {
                                banco[i + ir][j] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + ir][j];
                                banco[i + ir][j] = 0;
                            } else {
                                if ((diemtru(i + ir, j) == -10) || (diemtru(i + ir, j) == -30) || (diemtru(i + ir, j) == -50) || (diemtru(i + ir, j) == -90) || (diemtru(i + ir, j) == -900)) {
                                    min1 = diemtru(i + ir, j)
                                    let x = banco[i + ir][j]
                                    banco[i + ir][j] = banco[i][j];
                                    banco[i][j] = 0;
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i + ir][j];
                                    banco[i + ir][j] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i - ir, j) == 1) {
                            if (banco[i - ir][j] == 0) {
                                banco[i - ir][j] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                if(min>min1) {
                                    min = min1
                                }
                                banco[i][j] = banco[i - ir][j];
                                banco[i - ir][j] = 0;
                            } else {
                                if ((diemtru(i - ir, j) == -10) || (diemtru(i - ir, j) == -30) || (diemtru(i - ir, j) == -50) || (diemtru(i - ir, j) == -90) || (diemtru(i - ir, j) == -900)) {
                                    min1 = diemtru(i - ir, j)
                                    let x = banco[i - ir][j]
                                    banco[i - ir][j] = banco[i][j];
                                    banco[i][j] = 0;
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i - ir][j];
                                    banco[i - ir][j] = x;
                                }
                                break;
                            }
                        } else break
                    }
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i, j + ir) == 1) {
                            if (banco[i][j + ir] == 0) {
                                banco[i][j + ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i][j + ir];
                                banco[i][j + ir] = 0;
                            } else {
                                if ((diemtru(i, j + ir) == -10) || (diemtru(i, j + ir) == -30) || (diemtru(i, j + ir) == -50) || (diemtru(i, j + ir) == -90) || (diemtru(i, j + ir) == -900)) {
                                    min1 = diemtru(i, j + ir)
                                    let x = banco[i][j + ir]
                                    banco[i][j + ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i][j + ir];
                                    banco[i][j + ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i, j - ir) == 1) {
                            if (banco[i][j - ir] == 0) {
                                banco[i][j - ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i][j - ir];
                                banco[i][j - ir] = 0;
                            } else {
                                if ((diemtru(i, j - ir) == -10) || (diemtru(i, j - ir) == -30) || (diemtru(i, j - ir) == -50) || (diemtru(i, j - ir) == -90) || (diemtru(i, j - ir) == -900)) {
                                    min1 = diemtru(i, j - ir)
                                    let x = banco[i][j - ir]
                                    banco[i][j - ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i][j - ir];
                                    banco[i][j - ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i + ir, j + ir) == 1) {
                            if (banco[i + ir][j + ir] == 0) {
                                banco[i + ir][j + ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + ir][j + ir];
                                banco[i + ir][j + ir] = 0;
                            } else {
                                if ((diemtru(i + ir, j + ir) == -10) || (diemtru(i + ir, j + ir) == -30) || (diemtru(i + ir, j + ir) == -50) || (diemtru(i + ir, j + ir) == -90) || (diemtru(i + ir, j + ir) == -900)) {
                                    min1 = diemtru(i + ir, j + ir)
                                    let x = banco[i + ir][j + ir]
                                    banco[i + ir][j + ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i + ir][j + ir];
                                    banco[i + ir][j + ir] = x;
                                }
                                break;
                            }
                        } else break
                    }
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i - ir, j + ir) == 1) {
                            if (banco[i - ir][j + ir] == 0) {
                                banco[i - ir][j + ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i - ir][j + ir];
                                banco[i - ir][j + ir] = 0;
                            } else {
                                if ((diemtru(i - ir, j + ir) == -10) || (diemtru(i - ir, j + ir) == -30) || (diemtru(i - ir, j + ir) == -50) || (diemtru(i - ir, j + ir) == -90) || (diemtru(i - ir, j + ir) == -900)) {
                                    min1 = diemtru(i - ir, j + ir)
                                    let x = banco[i - ir][j + ir]
                                    banco[i - ir][j + ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i - ir][j + ir];
                                    banco[i - ir][j + ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i - ir, j - ir) == 1) {
                            if (banco[i - ir][j - ir] == 0) {
                                banco[i - ir][j - ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i - ir][j - ir];
                                banco[i - ir][j - ir] = 0;
                            } else {
                                if ((diemtru(i - ir, j - ir) == -10) || (diemtru(i - ir, j - ir) == -30) || (diemtru(i - ir, j - ir) == -50) || (diemtru(i - ir, j - ir) == -90) || (diemtru(i - ir, j - ir) == -900)) {
                                    min1 = diemtru(i - ir, j - ir)
                                    let x = banco[i - ir][j - ir]
                                    banco[i - ir][j - ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i - ir][j - ir];
                                    banco[i - ir][j - ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i + ir, j - ir) == 1) {
                            if (banco[i + ir][j - ir] == 0) {
                                banco[i + ir][j - ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + ir][j - ir];
                                banco[i + ir][j - ir] = 0;
                            } else {
                                if ((diemtru(i + ir, j - ir) == -10) || (diemtru(i + ir, j - ir) == -30) || (diemtru(i + ir, j - ir) == -50) || (diemtru(i + ir, j - ir) == -90) || (diemtru(i + ir, j - ir) == -900)) {
                                    min1 = diemtru(i + ir, j - ir)
                                    let x = banco[i + ir][j - ir]
                                    banco[i + ir][j - ir] = banco[i][j];
                                    banco[i][j] = 0
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i + ir][j - ir];
                                    banco[i + ir][j - ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                }
                if(banco[i][j] == 'wk') {
                    for (let ir = 1; ir <= 1; ir++) {
                        if (kiemtra(i + ir, j) == 1) {
                            if (banco[i + ir][j] == 0) {
                                banco[i + ir][j] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + ir][j];
                                banco[i + ir][j] = 0;
                            } else {
                                if ((diemtru(i + ir, j) == -10) || (diemtru(i + ir, j) == -30) || (diemtru(i + ir, j) == -50) || (diemtru(i + ir, j) == -90) || (diemtru(i + ir, j) == -900)) {
                                    min1 = diemtru(i + ir, j)
                                    let x = banco[i + ir][j]
                                    banco[i + ir][j] = banco[i][j];
                                    banco[i][j] = 0;
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i + ir][j];
                                    banco[i + ir][j] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                    for (let ir = 1; ir <= 1; ir++) {
                        if (kiemtra(i - ir, j) == 1) {
                            if (banco[i - ir][j] == 0) {
                                banco[i - ir][j] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                if(min>min1) {
                                    min = min1
                                }
                                banco[i][j] = banco[i - ir][j];
                                banco[i - ir][j] = 0;
                            } else {
                                if ((diemtru(i - ir, j) == -10) || (diemtru(i - ir, j) == -30) || (diemtru(i - ir, j) == -50) || (diemtru(i - ir, j) == -90) || (diemtru(i - ir, j) == -900)) {
                                    min1 = diemtru(i - ir, j)
                                    let x = banco[i - ir][j]
                                    banco[i - ir][j] = banco[i][j];
                                    banco[i][j] = 0;
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i - ir][j];
                                    banco[i - ir][j] = x;
                                }
                                break;
                            }
                        } else break
                    }
                    for (let ir = 1; ir <= 1; ir++) {
                        if (kiemtra(i, j + ir) == 1) {
                            if (banco[i][j + ir] == 0) {
                                banco[i][j + ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i][j + ir];
                                banco[i][j + ir] = 0;
                            } else {
                                if ((diemtru(i, j + ir) == -10) || (diemtru(i, j + ir) == -30) || (diemtru(i, j + ir) == -50) || (diemtru(i, j + ir) == -90) || (diemtru(i, j + ir) == -900)) {
                                    min1 = diemtru(i, j + ir)
                                    let x = banco[i][j + ir]
                                    banco[i][j + ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i][j + ir];
                                    banco[i][j + ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                    for (let ir = 1; ir <= 1; ir++) {
                        if (kiemtra(i, j - ir) == 1) {
                            if (banco[i][j - ir] == 0) {
                                banco[i][j - ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i][j - ir];
                                banco[i][j - ir] = 0;
                            } else {
                                if ((diemtru(i, j - ir) == -10) || (diemtru(i, j - ir) == -30) || (diemtru(i, j - ir) == -50) || (diemtru(i, j - ir) == -90) || (diemtru(i, j - ir) == -900)) {
                                    min1 = diemtru(i, j - ir)
                                    let x = banco[i][j - ir]
                                    banco[i][j - ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i][j - ir];
                                    banco[i][j - ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                    for (let ir = 1; ir <= 1; ir++) {
                        if (kiemtra(i + ir, j + ir) == 1) {
                            if (banco[i + ir][j + ir] == 0) {
                                banco[i + ir][j + ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + ir][j + ir];
                                banco[i + ir][j + ir] = 0;
                            } else {
                                if ((diemtru(i + ir, j + ir) == -10) || (diemtru(i + ir, j + ir) == -30) || (diemtru(i + ir, j + ir) == -50) || (diemtru(i + ir, j + ir) == -90) || (diemtru(i + ir, j + ir) == -900)) {
                                    min1 = diemtru(i + ir, j + ir)
                                    let x = banco[i + ir][j + ir]
                                    banco[i + ir][j + ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i + ir][j + ir];
                                    banco[i + ir][j + ir] = x;
                                }
                                break;
                            }
                        } else break
                    }
                    for (let ir = 1; ir <= 1; ir++) {
                        if (kiemtra(i - ir, j + ir) == 1) {
                            if (banco[i - ir][j + ir] == 0) {
                                banco[i - ir][j + ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i - ir][j + ir];
                                banco[i - ir][j + ir] = 0;
                            } else {
                                if ((diemtru(i - ir, j + ir) == -10) || (diemtru(i - ir, j + ir) == -30) || (diemtru(i - ir, j + ir) == -50) || (diemtru(i - ir, j + ir) == -90) || (diemtru(i - ir, j + ir) == -900)) {
                                    min1 = diemtru(i - ir, j + ir)
                                    let x = banco[i - ir][j + ir]
                                    banco[i - ir][j + ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i - ir][j + ir];
                                    banco[i - ir][j + ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                    for (let ir = 1; ir <= 1; ir++) {
                        if (kiemtra(i - ir, j - ir) == 1) {
                            if (banco[i - ir][j - ir] == 0) {
                                banco[i - ir][j - ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i - ir][j - ir];
                                banco[i - ir][j - ir] = 0;
                            } else {
                                if ((diemtru(i - ir, j - ir) == -10) || (diemtru(i - ir, j - ir) == -30) || (diemtru(i - ir, j - ir) == -50) || (diemtru(i - ir, j - ir) == -90) || (diemtru(i - ir, j - ir) == -900)) {
                                    min1 = diemtru(i - ir, j - ir)
                                    let x = banco[i - ir][j - ir]
                                    banco[i - ir][j - ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i - ir][j - ir];
                                    banco[i - ir][j - ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                    for (let ir = 1; ir <= 1; ir++) {
                        if (kiemtra(i + ir, j - ir) == 1) {
                            if (banco[i + ir][j - ir] == 0) {
                                banco[i + ir][j - ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + ir][j - ir];
                                banco[i + ir][j - ir] = 0;
                            } else {
                                if ((diemtru(i + ir, j - ir) == -10) || (diemtru(i + ir, j - ir) == -30) || (diemtru(i + ir, j - ir) == -50) || (diemtru(i + ir, j - ir) == -90) || (diemtru(i + ir, j - ir) == -900)) {
                                    min1 = diemtru(i + ir, j - ir)
                                    let x = banco[i + ir][j - ir]
                                    banco[i + ir][j - ir] = banco[i][j];
                                    banco[i][j] = 0
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i + ir][j - ir];
                                    banco[i + ir][j - ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                }
            }
        }
    }
    else
    {
        for(let i=0;i<8;i++)
        {
            for(let j=0;j<8;j++)
            {
                if(banco[i][j] == 'wr') {
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i + ir, j) == 1) {
                            if (banco[i + ir][j] == 0) {
                                banco[i + ir][j] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                min1 = min1 + dendc(dosau-1)
                                if(min > min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + ir][j];
                                banco[i + ir][j] = 0;
                            } else {
                                if ((diemtru(i + ir, j) == -10) || (diemtru(i + ir, j) == -30) || (diemtru(i + ir, j) == -50) || (diemtru(i + ir, j) == -90) || (diemtru(i + ir, j) == -900)) {
                                    min1 = diemtru(i + ir, j)
                                    let x = banco[i + ir][j]
                                    banco[i + ir][j] = banco[i][j];
                                    banco[i][j] = 0;
                                    min1 = min1 + dendc(dosau-1)
                                    if(min > min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i + ir][j];
                                    banco[i + ir][j] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i - ir, j) == 1) {
                            if (banco[i - ir][j] == 0) {
                                banco[i - ir][j] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                min1 = min1 + dendc(dosau-1)
                                if(min > min1) {
                                    min = min1
                                }
                                banco[i][j] = banco[i - ir][j];
                                banco[i - ir][j] = 0;
                            } else {
                                if ((diemtru(i - ir, j) == -10) || (diemtru(i - ir, j) == -30) || (diemtru(i - ir, j) == -50) || (diemtru(i - ir, j) == -90) || (diemtru(i - ir, j) == -900)) {
                                    min1 = diemtru(i - ir, j)
                                    let x = banco[i - ir][j]
                                    banco[i - ir][j] = banco[i][j];
                                    banco[i][j] = 0;
                                    min1 = min1 + dendc(dosau-1)
                                    if(min > min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i - ir][j];
                                    banco[i - ir][j] = x;
                                }
                                break;
                            }
                        } else break
                    }
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i, j + ir) == 1) {
                            if (banco[i][j + ir] == 0) {
                                banco[i][j + ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                min1 = min1 + dendc(dosau-1)
                                if(min > min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i][j + ir];
                                banco[i][j + ir] = 0;
                            } else {
                                if ((diemtru(i, j + ir) == -10) || (diemtru(i, j + ir) == -30) || (diemtru(i, j + ir) == -50) || (diemtru(i, j + ir) == -90) || (diemtru(i, j + ir) == -900)) {
                                    min1 = diemtru(i, j + ir)
                                    let x = banco[i][j + ir]
                                    banco[i][j + ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    min1 = min1 + dendc(dosau-1)
                                    if(min > min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i][j + ir];
                                    banco[i][j + ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i, j - ir) == 1) {
                            if (banco[i][j - ir] == 0) {
                                banco[i][j - ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                min1 = min1 + dendc(dosau-1)
                                if(min > min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i][j - ir];
                                banco[i][j - ir] = 0;
                            } else {
                                if ((diemtru(i, j - ir) == -10) || (diemtru(i, j - ir) == -30) || (diemtru(i, j - ir) == -50) || (diemtru(i, j - ir) == -90) || (diemtru(i, j - ir) == -900)) {
                                    min1 = diemtru(i, j - ir)
                                    let x = banco[i][j - ir]
                                    banco[i][j - ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    min1 = min1 + dendc(dosau-1)
                                    if(min > min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i][j - ir];
                                    banco[i][j - ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                }
                if(banco[i][j] == 'wp') {
                    if (i == 1) {
                        for (let ip = 1; ip <= 2; ip++) {
                            if (banco[i + ip][j] == 0) {
                                banco[i + ip][j] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                min1 = min1 + dendc(dosau-1)
                                if(min > min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + ip][j];
                                banco[i + ip][j] = 0;
                            } else break;
                        }
                        if (kiemtra(i + 1, j - 1) == 1) {
                            if ((diemtru(i + 1, j - 1) == -10) || (diemtru(i + 1, j - 1) == -30) || (diemtru(i + 1, j - 1) == -50) || (diemtru(i + 1, j - 1) == -90) || (diemtru(i + 1, j - 1) == -900)) {
                                min1 = diemtru(i + 1, j - 1)
                                let x = banco[i + 1][j - 1]
                                banco[i + 1][j - 1] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = min1 + dendc(dosau-1)
                                if(min > min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + 1][j - 1];
                                banco[i + 1][j - 1] = x;
                            }
                        }
                        if (kiemtra(i + 1, j + 1) == 1) {
                            if ((diemtru(i + 1, j + 1) == -10) || (diemtru(i + 1, j + 1) == -30) || (diemtru(i + 1, j + 1) == -50) || (diemtru(i + 1, j + 1) == -90) || (diemtru(i + 1, j + 1) == -900)) {
                                min1 = diemtru(i + 1, j + 1)
                                let x = banco[i + 1][j + 1]
                                banco[i + 1][j + 1] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = min1 + dendc(dosau-1)
                                if(min > min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + 1][j + 1];
                                banco[i + 1][j + 1] = x;
                            }
                        }
                    } else {
                        if (kiemtra(i + 1, j) == 1) {
                            if (banco[i + 1][j] == 0) {
                                banco[i + 1][j] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                min1 = min1 + dendc(dosau-1)
                                if(min > min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + 1][j];
                                banco[i + 1][j] = 0;
                            }
                        }
                        if (kiemtra(i + 1, j - 1) == 1) {
                            if ((diemtru(i + 1, j - 1) == -10) || (diemtru(i + 1, j - 1) == -30) || (diemtru(i + 1, j - 1) == -50) || (diemtru(i + 1, j - 1) == -90) || (diemtru(i + 1, j - 1) == -900)) {
                                min1 = diemtru(i + 1, j - 1)
                                let x = banco[i + 1][j - 1]
                                banco[i + 1][j - 1] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = min1 + dendc(dosau-1)
                                if(min > min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + 1][j - 1];
                                banco[i + 1][j - 1] = x;
                            }
                        }
                        if (kiemtra(i + 1, j + 1) == 1) {
                            if ((diemtru(i + 1, j + 1) == -10) || (diemtru(i + 1, j + 1) == -30) || (diemtru(i + 1, j + 1) == -50) || (diemtru(i + 1, j + 1) == -90) || (diemtru(i + 1, j + 1) == -900)) {
                                min1 = diemtru(i + 1, j + 1)
                                let x = banco[i + 1][j + 1]
                                banco[i + 1][j + 1] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = min1 + dendc(dosau-1)
                                if(min > min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + 1][j + 1];
                                banco[i + 1][j + 1] = x;
                            }
                        }
                    }
                }
                if(banco[i][j] == 'wn') {
                    if (kiemtra(i + 2, j + 1) == 1) {
                        if (banco[i + 2][j + 1] == 0) {
                            banco[i + 2][j + 1] = banco[i][j];
                            banco[i][j] = 0;
                            min1 = 0
                            min1 = min1 + dendc(dosau-1)
                            if(min>min1) {
                                min = min1
                            }
                            banco[i][j] = banco[i + 2][j + 1];
                            banco[i + 2][j + 1] = 0;
                        } else {
                            if ((diemtru(i + 2, j + 1) == -10) || (diemtru(i + 2, j + 1) == -30) || (diemtru(i + 2, j + 1) == -50) || (diemtru(i + 2, j + 1) == -90) || (diemtru(i + 2, j + 1) == -900)) {
                                min1 = diemtru(i + 2, j + 1)
                                let x = banco[i + 2][j + 1]
                                banco[i + 2][j + 1] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = min1 + dendc(dosau-1)
                                if(min > min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + 2][j + 1];
                                banco[i + 2][j + 1] = x;
                            }
                        }
                    }
                    if (kiemtra(i - 2, j + 1) == 1) {
                        if (banco[i - 2][j + 1] == 0) {
                            banco[i - 2][j + 1] = banco[i][j];
                            banco[i][j] = 0;
                            min1 = 0
                            min1 = min1 + dendc(dosau-1)
                            if(min>min1) {
                                min = min1
                            }
                            banco[i][j] = banco[i - 2][j + 1];
                            banco[i - 2][j + 1] = 0;
                        } else {
                            if ((diemtru(i - 2, j + 1) == -10) || (diemtru(i - 2, j + 1) == -30) || (diemtru(i - 2, j + 1) == -50) || (diemtru(i - 2, j + 1) == -90) || (diemtru(i - 2, j + 1) == -900)) {
                                min1 = diemtru(i - 2, j + 1)
                                let x = banco[i - 2][j + 1]
                                banco[i - 2][j + 1] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = min1 + dendc(dosau-1)
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i - 2][j + 1];
                                banco[i - 2][j + 1] = x;
                            }
                        }
                    }
                    if (kiemtra(i + 2, j - 1) == 1) {
                        if (banco[i + 2][j - 1] == 0) {
                            banco[i + 2][j - 1] = banco[i][j];
                            banco[i][j] = 0;
                            min1 = 0
                            min1 = min1 + dendc(dosau-1)
                            if(min>min1) {
                                min = min1
                            }
                            banco[i][j] = banco[i + 2][j - 1];
                            banco[i + 2][j - 1] = 0;
                        } else {
                            if ((diemtru(i + 2, j - 1) == -10) || (diemtru(i + 2, j - 1) == -30) || (diemtru(i + 2, j - 1) == -50) || (diemtru(i + 2, j - 1) == -90) || (diemtru(i + 2, j - 1) == -900)) {
                                min1 = diemtru(i + 2, j - 1)
                                let x = banco[i + 2][j - 1]
                                banco[i + 2][j - 1] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = min1 + dendc(dosau-1)
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + 2][j - 1];
                                banco[i + 2][j - 1] = x;
                            }
                        }
                    }
                    if (kiemtra(i - 2, j - 1) == 1) {
                        if (banco[i - 2][j - 1] == 0) {
                            banco[i - 2][j - 1] = banco[i][j];
                            banco[i][j] = 0;
                            min1 = 0
                            min1 = min1 + dendc(dosau-1)
                            if(min>min1) {
                                min = min1
                            }
                            banco[i][j] = banco[i - 2][j - 1];
                            banco[i - 2][j - 1] = 0;
                        } else {
                            if ((diemtru(i - 2, j - 1) == -10) || (diemtru(i - 2, j - 1) == -30) || (diemtru(i - 2, j - 1) == -50) || (diemtru(i - 2, j - 1) == -90) || (diemtru(i - 2, j - 1) == -900)) {
                                min1 = diemtru(i - 2, j - 1)
                                let x = banco[i - 2][j - 1]
                                banco[i - 2][j - 1] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = min1 + dendc(dosau-1)
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i - 2][j - 1];
                                banco[i - 2][j - 1] = x;
                            }
                        }
                    }
                    if (kiemtra(i + 1, j + 2) == 1) {
                        if (banco[i + 1][j + 2] == 0) {
                            banco[i + 1][j + 2] = banco[i][j];
                            banco[i][j] = 0;
                            min1 = 0
                            min1 = min1 + dendc(dosau-1)
                            if(min>min1) {
                                min = min1
                            }
                            banco[i][j] = banco[i + 1][j + 2];
                            banco[i + 1][j + 2] = 0;
                        } else {
                            if ((diemtru(i + 1, j + 2) == -10) || (diemtru(i + 1, j + 2) == -30) || (diemtru(i + 1, j + 2) == -50) || (diemtru(i + 1, j + 2) == -90) || (diemtru(i + 1, j + 2) == -900)) {
                                min1 = diemtru(i + 1, j + 2)
                                let x = banco[i + 1][j + 2]
                                banco[i + 1][j + 2] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = min1 + dendc(dosau-1)
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + 1][j + 2];
                                banco[i + 1][j + 2] = x;
                            }
                        }
                    }
                    if (kiemtra(i + 1, j - 2) == 1) {
                        if (banco[i + 1][j - 2] == 0) {
                            banco[i + 1][j - 2] = banco[i][j];
                            banco[i][j] = 0;
                            min1 = 0
                            min1 = min1 + dendc(dosau-1)
                            if(min>min1) {
                                min = min1
                            }
                            banco[i][j] = banco[i + 1][j - 2];
                            banco[i + 1][j - 2] = 0;
                        } else {
                            if ((diemtru(i + 1, j - 2) == -10) || (diemtru(i + 1, j - 2) == -30) || (diemtru(i + 1, j - 2) == -50) || (diemtru(i + 1, j - 2) == -90) || (diemtru(i + 1, j + 2) == -900)) {
                                min1 = diemtru(i + 1, j - 2)
                                let x = banco[i + 1][j - 2]
                                banco[i + 1][j - 2] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = min1 + dendc(dosau-1)
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + 1][j - 2];
                                banco[i + 1][j - 2] = x;
                            }
                        }
                    }
                    if (kiemtra(i - 1, j + 2) == 1) {
                        if (banco[i - 1][j + 2] == 0) {
                            banco[i - 1][j + 2] = banco[i][j];
                            banco[i][j] = 0;
                            min1 = 0
                            min1 = min1 + dendc(dosau-1)
                            if(min>min1){
                                min = min1
                            }
                            banco[i][j] = banco[i - 1][j + 2];
                            banco[i - 1][j + 2] = 0;
                        } else {
                            if ((diemtru(i - 1, j + 2) == -10) || (diemtru(i - 1, j + 2) == -30) || (diemtru(i - 1, j + 2) == -50) || (diemtru(i - 1, j + 2) == -90) || (diemtru(i - 1, j + 2) == -900)) {
                                min1 = diemtru(i - 1, j + 2)
                                let x = banco[i - 1][j + 2]
                                banco[i - 1][j + 2] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = min1 + dendc(dosau-1)
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i - 1][j + 2];
                                banco[i - 1][j + 2] = x;
                            }
                        }
                    }
                    if (kiemtra(i - 1, j - 2) == 1) {
                        if (banco[i - 1][j - 2] == 0) {
                            banco[i - 1][j - 2] = banco[i][j];
                            banco[i][j] = 0;
                            min1 = 0
                            min1 = min1 + dendc(dosau-1)
                            if(min > min1) {
                                min = min1
                            }
                            banco[i][j] = banco[i - 1][j - 2];
                            banco[i - 1][j - 2] = 0;
                        } else {
                            if ((diemtru(i - 1, j - 2) == -10) || (diemtru(i - 1, j - 2) == -30) || (diemtru(i - 1, j - 2) == -50) || (diemtru(i - 1, j - 2) == -90) || (diemtru(i - 1, j - 2) == -900)) {
                                min1 = diemtru(i - 1, j - 2)
                                let x = banco[i - 1][j - 2]
                                banco[i - 1][j - 2] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = min1 + dendc(dosau-1)
                                if(min > min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i - 1][j - 2];
                                banco[i - 1][j - 2] = x;
                            }
                        }
                    }
                }
                if(banco[i][j] == 'wb') {
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i + ir, j + ir) == 1) {
                            if (banco[i + ir][j + ir] == 0) {
                                banco[i + ir][j + ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                min1 = min1 + dendc(dosau-1)
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + ir][j + ir];
                                banco[i + ir][j + ir] = 0;
                            } else {
                                if ((diemtru(i + ir, j + ir) == -10) || (diemtru(i + ir, j + ir) == -30) || (diemtru(i + ir, j + ir) == -50) || (diemtru(i + ir, j + ir) == -90) || (diemtru(i + ir, j + ir) == -900)) {
                                    min1 = diemtru(i + ir, j + ir)
                                    let x = banco[i + ir][j + ir]
                                    banco[i + ir][j + ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    min1 = min1 + dendc(dosau-1)
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i + ir][j + ir];
                                    banco[i + ir][j + ir] = x;
                                }
                                break;
                            }
                        } else break
                    }
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i - ir, j + ir) == 1) {
                            if (banco[i - ir][j + ir] == 0) {
                                banco[i - ir][j + ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                min1 = min1 + dendc(dosau-1)
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i - ir][j + ir];
                                banco[i - ir][j + ir] = 0;
                            } else {
                                if ((diemtru(i - ir, j + ir) == -10) || (diemtru(i - ir, j + ir) == -30) || (diemtru(i - ir, j + ir) == -50) || (diemtru(i - ir, j + ir) == -90) || (diemtru(i - ir, j + ir) == -900)) {
                                    min1 = diemtru(i - ir, j + ir)
                                    let x = banco[i - ir][j + ir]
                                    banco[i - ir][j + ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    min1 = min1 + dendc(dosau-1)
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i - ir][j + ir];
                                    banco[i - ir][j + ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i - ir, j - ir) == 1) {
                            if (banco[i - ir][j - ir] == 0) {
                                banco[i - ir][j - ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                min1 = min1 + dendc(dosau-1)
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i - ir][j - ir];
                                banco[i - ir][j - ir] = 0;
                            } else {
                                if ((diemtru(i - ir, j - ir) == -10) || (diemtru(i - ir, j - ir) == -30) || (diemtru(i - ir, j - ir) == -50) || (diemtru(i - ir, j - ir) == -90) || (diemtru(i - ir, j - ir) == -900)) {
                                    min1 = diemtru(i - ir, j - ir)
                                    let x = banco[i - ir][j - ir]
                                    banco[i - ir][j - ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    min1 = min1 + dendc(dosau-1)
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i - ir][j - ir];
                                    banco[i - ir][j - ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i + ir, j - ir) == 1) {
                            if (banco[i + ir][j - ir] == 0) {
                                banco[i + ir][j - ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                min1 = min1 + dendc(dosau-1)
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + ir][j - ir];
                                banco[i + ir][j - ir] = 0;
                            } else {
                                if ((diemtru(i + ir, j - ir) == -10) || (diemtru(i + ir, j - ir) == -30) || (diemtru(i + ir, j - ir) == -50) || (diemtru(i + ir, j - ir) == -90) || (diemtru(i + ir, j - ir) == -900)) {
                                    min1 = diemtru(i + ir, j - ir)
                                    let x = banco[i + ir][j - ir]
                                    banco[i + ir][j - ir] = banco[i][j];
                                    banco[i][j] = 0
                                    min1 = min1 + dendc(dosau-1)
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i + ir][j - ir];
                                    banco[i + ir][j - ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                }
                if(banco[i][j] == 'wq') {
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i + ir, j) == 1) {
                            if (banco[i + ir][j] == 0) {
                                banco[i + ir][j] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                min1 = min1 + dendc(dosau-1)
                                if(min > min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + ir][j];
                                banco[i + ir][j] = 0;
                            } else {
                                if ((diemtru(i + ir, j) == -10) || (diemtru(i + ir, j) == -30) || (diemtru(i + ir, j) == -50) || (diemtru(i + ir, j) == -90) || (diemtru(i + ir, j) == -900)) {
                                    min1 = diemtru(i + ir, j)
                                    let x = banco[i + ir][j]
                                    banco[i + ir][j] = banco[i][j];
                                    banco[i][j] = 0;
                                    min1 = min1 + dendc(dosau-1)
                                    if(min > min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i + ir][j];
                                    banco[i + ir][j] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i - ir, j) == 1) {
                            if (banco[i - ir][j] == 0) {
                                banco[i - ir][j] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                min1 = min1 + dendc(dosau-1)
                                if(min > min1) {
                                    min = min1
                                }
                                banco[i][j] = banco[i - ir][j];
                                banco[i - ir][j] = 0;
                            } else {
                                if ((diemtru(i - ir, j) == -10) || (diemtru(i - ir, j) == -30) || (diemtru(i - ir, j) == -50) || (diemtru(i - ir, j) == -90) || (diemtru(i - ir, j) == -900)) {
                                    min1 = diemtru(i - ir, j)
                                    let x = banco[i - ir][j]
                                    banco[i - ir][j] = banco[i][j];
                                    banco[i][j] = 0;
                                    min1 = min1 + dendc(dosau-1)
                                    if(min > min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i - ir][j];
                                    banco[i - ir][j] = x;
                                }
                                break;
                            }
                        } else break
                    }
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i, j + ir) == 1) {
                            if (banco[i][j + ir] == 0) {
                                banco[i][j + ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                min1 = min1 + dendc(dosau-1)
                                if(min > min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i][j + ir];
                                banco[i][j + ir] = 0;
                            } else {
                                if ((diemtru(i, j + ir) == -10) || (diemtru(i, j + ir) == -30) || (diemtru(i, j + ir) == -50) || (diemtru(i, j + ir) == -90) || (diemtru(i, j + ir) == -900)) {
                                    min1 = diemtru(i, j + ir)
                                    let x = banco[i][j + ir]
                                    banco[i][j + ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    min1 = min1 + dendc(dosau-1)
                                    if(min > min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i][j + ir];
                                    banco[i][j + ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i, j - ir) == 1) {
                            if (banco[i][j - ir] == 0) {
                                banco[i][j - ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                min1 = min1 + dendc(dosau-1)
                                if(min > min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i][j - ir];
                                banco[i][j - ir] = 0;
                            } else {
                                if ((diemtru(i, j - ir) == -10) || (diemtru(i, j - ir) == -30) || (diemtru(i, j - ir) == -50) || (diemtru(i, j - ir) == -90) || (diemtru(i, j - ir) == -900)) {
                                    min1 = diemtru(i, j - ir)
                                    let x = banco[i][j - ir]
                                    banco[i][j - ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    min1 = min1 + dendc(dosau-1)
                                    if(min > min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i][j - ir];
                                    banco[i][j - ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i + ir, j + ir) == 1) {
                            if (banco[i + ir][j + ir] == 0) {
                                banco[i + ir][j + ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                min1 = min1 + dendc(dosau-1)
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + ir][j + ir];
                                banco[i + ir][j + ir] = 0;
                            } else {
                                if ((diemtru(i + ir, j + ir) == -10) || (diemtru(i + ir, j + ir) == -30) || (diemtru(i + ir, j + ir) == -50) || (diemtru(i + ir, j + ir) == -90) || (diemtru(i + ir, j + ir) == -900)) {
                                    min1 = diemtru(i + ir, j + ir)
                                    let x = banco[i + ir][j + ir]
                                    banco[i + ir][j + ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    min1 = min1 + dendc(dosau-1)
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i + ir][j + ir];
                                    banco[i + ir][j + ir] = x;
                                }
                                break;
                            }
                        } else break
                    }
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i - ir, j + ir) == 1) {
                            if (banco[i - ir][j + ir] == 0) {
                                banco[i - ir][j + ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                min1 = min1 + dendc(dosau-1)
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i - ir][j + ir];
                                banco[i - ir][j + ir] = 0;
                            } else {
                                if ((diemtru(i - ir, j + ir) == -10) || (diemtru(i - ir, j + ir) == -30) || (diemtru(i - ir, j + ir) == -50) || (diemtru(i - ir, j + ir) == -90) || (diemtru(i - ir, j + ir) == -900)) {
                                    min1 = diemtru(i - ir, j + ir)
                                    let x = banco[i - ir][j + ir]
                                    banco[i - ir][j + ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    min1 = min1 + dendc(dosau-1)
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i - ir][j + ir];
                                    banco[i - ir][j + ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i - ir, j - ir) == 1) {
                            if (banco[i - ir][j - ir] == 0) {
                                banco[i - ir][j - ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                min1 = min1 + dendc(dosau-1)
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i - ir][j - ir];
                                banco[i - ir][j - ir] = 0;
                            } else {
                                if ((diemtru(i - ir, j - ir) == -10) || (diemtru(i - ir, j - ir) == -30) || (diemtru(i - ir, j - ir) == -50) || (diemtru(i - ir, j - ir) == -90) || (diemtru(i - ir, j - ir) == -900)) {
                                    min1 = diemtru(i - ir, j - ir)
                                    let x = banco[i - ir][j - ir]
                                    banco[i - ir][j - ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    min1 = min1 + dendc(dosau-1)
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i - ir][j - ir];
                                    banco[i - ir][j - ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                    for (let ir = 1; ir <= 8; ir++) {
                        if (kiemtra(i + ir, j - ir) == 1) {
                            if (banco[i + ir][j - ir] == 0) {
                                banco[i + ir][j - ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                min1 = min1 + dendc(dosau-1)
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + ir][j - ir];
                                banco[i + ir][j - ir] = 0;
                            } else {
                                if ((diemtru(i + ir, j - ir) == -10) || (diemtru(i + ir, j - ir) == -30) || (diemtru(i + ir, j - ir) == -50) || (diemtru(i + ir, j - ir) == -90) || (diemtru(i + ir, j - ir) == -900)) {
                                    min1 = diemtru(i + ir, j - ir)
                                    let x = banco[i + ir][j - ir]
                                    banco[i + ir][j - ir] = banco[i][j];
                                    banco[i][j] = 0
                                    min1 = min1 + dendc(dosau-1)
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i + ir][j - ir];
                                    banco[i + ir][j - ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                }
                if(banco[i][j] == 'wk') {
                    for (let ir = 1; ir <= 1; ir++) {
                        if (kiemtra(i + ir, j) == 1) {
                            if (banco[i + ir][j] == 0) {
                                banco[i + ir][j] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                min1 = min1 + dendc(dosau-1)
                                if(min > min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + ir][j];
                                banco[i + ir][j] = 0;
                            } else {
                                if ((diemtru(i + ir, j) == -10) || (diemtru(i + ir, j) == -30) || (diemtru(i + ir, j) == -50) || (diemtru(i + ir, j) == -90) || (diemtru(i + ir, j) == -900)) {
                                    min1 = diemtru(i + ir, j)
                                    let x = banco[i + ir][j]
                                    banco[i + ir][j] = banco[i][j];
                                    banco[i][j] = 0;
                                    min1 = min1 + dendc(dosau-1)
                                    if(min > min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i + ir][j];
                                    banco[i + ir][j] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                    for (let ir = 1; ir <= 1; ir++) {
                        if (kiemtra(i - ir, j) == 1) {
                            if (banco[i - ir][j] == 0) {
                                banco[i - ir][j] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                min1 = min1 + dendc(dosau-1)
                                if(min > min1) {
                                    min = min1
                                }
                                banco[i][j] = banco[i - ir][j];
                                banco[i - ir][j] = 0;
                            } else {
                                if ((diemtru(i - ir, j) == -10) || (diemtru(i - ir, j) == -30) || (diemtru(i - ir, j) == -50) || (diemtru(i - ir, j) == -90) || (diemtru(i - ir, j) == -900)) {
                                    min1 = diemtru(i - ir, j)
                                    let x = banco[i - ir][j]
                                    banco[i - ir][j] = banco[i][j];
                                    banco[i][j] = 0;
                                    min1 = min1 + dendc(dosau-1)
                                    if(min > min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i - ir][j];
                                    banco[i - ir][j] = x;
                                }
                                break;
                            }
                        } else break
                    }
                    for (let ir = 1; ir <= 1; ir++) {
                        if (kiemtra(i, j + ir) == 1) {
                            if (banco[i][j + ir] == 0) {
                                banco[i][j + ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                min1 = min1 + dendc(dosau-1)
                                if(min > min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i][j + ir];
                                banco[i][j + ir] = 0;
                            } else {
                                if ((diemtru(i, j + ir) == -10) || (diemtru(i, j + ir) == -30) || (diemtru(i, j + ir) == -50) || (diemtru(i, j + ir) == -90) || (diemtru(i, j + ir) == -900)) {
                                    min1 = diemtru(i, j + ir)
                                    let x = banco[i][j + ir]
                                    banco[i][j + ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    min1 = min1 + dendc(dosau-1)
                                    if(min > min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i][j + ir];
                                    banco[i][j + ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                    for (let ir = 1; ir <= 1; ir++) {
                        if (kiemtra(i, j - ir) == 1) {
                            if (banco[i][j - ir] == 0) {
                                banco[i][j - ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                min1 = min1 + dendc(dosau-1)
                                if(min > min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i][j - ir];
                                banco[i][j - ir] = 0;
                            } else {
                                if ((diemtru(i, j - ir) == -10) || (diemtru(i, j - ir) == -30) || (diemtru(i, j - ir) == -50) || (diemtru(i, j - ir) == -90) || (diemtru(i, j - ir) == -900)) {
                                    min1 = diemtru(i, j - ir)
                                    let x = banco[i][j - ir]
                                    banco[i][j - ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    min1 = min1 + dendc(dosau-1)
                                    if(min > min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i][j - ir];
                                    banco[i][j - ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                    for (let ir = 1; ir <= 1; ir++) {
                        if (kiemtra(i + ir, j + ir) == 1) {
                            if (banco[i + ir][j + ir] == 0) {
                                banco[i + ir][j + ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                min1 = min1 + dendc(dosau-1)
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + ir][j + ir];
                                banco[i + ir][j + ir] = 0;
                            } else {
                                if ((diemtru(i + ir, j + ir) == -10) || (diemtru(i + ir, j + ir) == -30) || (diemtru(i + ir, j + ir) == -50) || (diemtru(i + ir, j + ir) == -90) || (diemtru(i + ir, j + ir) == -900)) {
                                    min1 = diemtru(i + ir, j + ir)
                                    let x = banco[i + ir][j + ir]
                                    banco[i + ir][j + ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    min1 = min1 + dendc(dosau-1)
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i + ir][j + ir];
                                    banco[i + ir][j + ir] = x;
                                }
                                break;
                            }
                        } else break
                    }
                    for (let ir = 1; ir <= 1; ir++) {
                        if (kiemtra(i - ir, j + ir) == 1) {
                            if (banco[i - ir][j + ir] == 0) {
                                banco[i - ir][j + ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                min1 = min1 + dendc(dosau-1)
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i - ir][j + ir];
                                banco[i - ir][j + ir] = 0;
                            } else {
                                if ((diemtru(i - ir, j + ir) == -10) || (diemtru(i - ir, j + ir) == -30) || (diemtru(i - ir, j + ir) == -50) || (diemtru(i - ir, j + ir) == -90) || (diemtru(i - ir, j + ir) == -900)) {
                                    min1 = diemtru(i - ir, j + ir)
                                    let x = banco[i - ir][j + ir]
                                    banco[i - ir][j + ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    min1 = min1 + dendc(dosau-1)
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i - ir][j + ir];
                                    banco[i - ir][j + ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                    for (let ir = 1; ir <= 1; ir++) {
                        if (kiemtra(i - ir, j - ir) == 1) {
                            if (banco[i - ir][j - ir] == 0) {
                                banco[i - ir][j - ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                min1 = min1 + dendc(dosau-1)
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i - ir][j - ir];
                                banco[i - ir][j - ir] = 0;
                            } else {
                                if ((diemtru(i - ir, j - ir) == -10) || (diemtru(i - ir, j - ir) == -30) || (diemtru(i - ir, j - ir) == -50) || (diemtru(i - ir, j - ir) == -90) || (diemtru(i - ir, j - ir) == -900)) {
                                    min1 = diemtru(i - ir, j - ir)
                                    let x = banco[i - ir][j - ir]
                                    banco[i - ir][j - ir] = banco[i][j];
                                    banco[i][j] = 0;
                                    min1 = min1 + dendc(dosau-1)
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i - ir][j - ir];
                                    banco[i - ir][j - ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                    for (let ir = 1; ir <= 1; ir++) {
                        if (kiemtra(i + ir, j - ir) == 1) {
                            if (banco[i + ir][j - ir] == 0) {
                                banco[i + ir][j - ir] = banco[i][j];
                                banco[i][j] = 0;
                                min1 = 0
                                min1 = min1 + dendc(dosau-1)
                                if(min>min1){
                                    min = min1
                                }
                                banco[i][j] = banco[i + ir][j - ir];
                                banco[i + ir][j - ir] = 0;
                            } else {
                                if ((diemtru(i + ir, j - ir) == -10) || (diemtru(i + ir, j - ir) == -30) || (diemtru(i + ir, j - ir) == -50) || (diemtru(i + ir, j - ir) == -90) || (diemtru(i + ir, j - ir) == -900)) {
                                    min1 = diemtru(i + ir, j - ir)
                                    let x = banco[i + ir][j - ir]
                                    banco[i + ir][j - ir] = banco[i][j];
                                    banco[i][j] = 0
                                    min1 = min1 + dendc(dosau-1)
                                    if(min>min1) {
                                        min = min1
                                    }
                                    banco[i][j] = banco[i + ir][j - ir];
                                    banco[i + ir][j - ir] = x;
                                }
                                break;
                            }
                        } else break;
                    }
                }
            }
        }
    }
    return min
}




