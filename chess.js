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
var wq2 = document.querySelector('.square-0');
var wq3 = document.querySelector('.square-1');
var wq4 = document.querySelector('.square-2');
var wq5 = document.querySelector('.square-3');
var wq6 = document.querySelector('.square-4');
var wq7 = document.querySelector('.square-5');
var wq8 = document.querySelector('.square-6');
var wq9 = document.querySelector('.square-7');


//Toa do king
var wk1 = document.querySelector('.square-51');

var div = document.querySelector(".banCo")
var temp = true
var ds = 2
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
                        xoadiv()
                        temp = true;
                        if(b%10 == 8)
                        {
                            div.removeChild(wp1)
                            wq2.className = `piece wq square-${b}`
                            wq2.style.display = "block";
                            banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1] = 'wq'
                        }
                        else
                        {
                            wp1.className = `piece wp square-${b}`
                        }
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
                        let b = diachi(nameClass) + 11
                        let an = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                        div.removeChild(an);
                        xoadiv()
                        temp = true;
                        if(b%10 == 8)
                        {
                            div.removeChild(wp1)
                            wq2.className = `piece wq square-${b}`
                            wq2.style.display = "block";
                            banco[a % 10][(a - a % 10) / 10] = 'wq'
                        }
                        else
                        {
                            wp1.className = `piece wp square-${b}`
                        }
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
                        let b = diachi(nameClass) - 9
                        let an = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                        div.removeChild(an);
                        xoadiv()
                        temp = true;
                        if(b%10 == 8)
                        {
                            div.removeChild(wp1)
                            wq2.className = `piece wq square-${b}`
                            wq2.style.display = "block";
                            banco[a % 10][(a - a % 10) / 10 - 1 - 1] = 'wq'
                        }
                        else
                        {
                            wp1.className = `piece wp square-${b}`
                        }
                        wwp1 = 2;
                        dichuyen()
                    }
                    div.appendChild(cheotrai)
                }
            }
        }
        temp = false;
    } else {
        xoadiv();
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
                        xoadiv()
                        temp = true;
                        if(b%10 == 8)
                        {
                            div.removeChild(wp2)
                            wq3.className = `piece wq square-${b}`
                            wq3.style.display = "block";
                            banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1] = 'wq'
                        }
                        else
                        {
                            wp2.className = `piece wp square-${b}`
                        }
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
                        let b = diachi(nameClass) + 11
                        let an = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                        div.removeChild(an);
                        xoadiv()
                        temp = true;
                        if(b%10 == 8)
                        {
                            div.removeChild(wp2)
                            wq3.className = `piece wq square-${b}`
                            wq3.style.display = "block";
                            banco[a % 10][(a - a % 10) / 10] = 'wq'
                        }
                        else
                        {
                            wp2.className = `piece wp square-${b}`
                        }
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
                        let b = diachi(nameClass) - 9
                        let an = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                        div.removeChild(an);
                        xoadiv()
                        temp = true;
                        if(b%10 == 8)
                        {
                            div.removeChild(wp2)
                            wq3.className = `piece wq square-${b}`
                            wq3.style.display = "block";
                            banco[a % 10][(a - a % 10) / 10 - 1 - 1] = 'wq'
                        }
                        else
                        {
                            wp2.className = `piece wp square-${b}`
                        }
                        wwp2 = 2;
                        dichuyen()
                    }
                    div.appendChild(cheotrai)
                }
            }
        }
        temp = false;
    } else {
        xoadiv();
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
                        xoadiv()
                        temp = true;
                        if(b%10 == 8)
                        {
                            div.removeChild(wp3)
                            wq4.className = `piece wq square-${b}`
                            wq4.style.display = "block";
                            banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1] = 'wq'
                        }
                        else
                        {
                            wp3.className = `piece wp square-${b}`
                        }
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
                        let b = diachi(nameClass) + 11
                        let an = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                        div.removeChild(an);
                        xoadiv()
                        temp = true;
                        if(b%10 == 8)
                        {
                            div.removeChild(wp3)
                            wq4.className = `piece wq square-${b}`
                            wq4.style.display = "block";
                            banco[a % 10][(a - a % 10) / 10] = 'wq'
                        }
                        else
                        {
                            wp3.className = `piece wp square-${b}`
                        }
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
                        let b = diachi(nameClass) - 9
                        let an = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                        div.removeChild(an);
                        xoadiv()
                        temp = true;
                        if(b%10 == 8)
                        {
                            div.removeChild(wp3)
                            wq4.className = `piece wq square-${b}`
                            wq4.style.display = "block";
                            banco[a % 10][(a - a % 10) / 10 - 1 - 1] = 'wq'
                        }
                        else
                        {
                            wp3.className = `piece wp square-${b}`
                        }
                        wwp3 = 2;
                        dichuyen()
                    }
                    div.appendChild(cheotrai)
                }
            }
        }
        temp = false;
    } else {
        xoadiv();
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
                        xoadiv()
                        temp = true;
                        if(b%10 == 8)
                        {
                            div.removeChild(wp4)
                            wq5.className = `piece wq square-${b}`
                            wq5.style.display = "block";
                            banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1] = 'wq'
                        }
                        else
                        {
                            wp4.className = `piece wp square-${b}`
                        }
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
                        let b = diachi(nameClass) + 11
                        let an = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                        div.removeChild(an);
                        xoadiv()
                        temp = true;
                        if(b%10 == 8)
                        {
                            div.removeChild(wp4)
                            wq5.className = `piece wq square-${b}`
                            wq5.style.display = "block";
                            banco[a % 10][(a - a % 10) / 10] = 'wq'
                        }
                        else
                        {
                            wp4.className = `piece wp square-${b}`
                        }
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
                        let b = diachi(nameClass) - 9
                        let an = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                        div.removeChild(an);
                        xoadiv()
                        temp = true;
                        if(b%10 == 8)
                        {
                            div.removeChild(wp4)
                            wq5.className = `piece wq square-${b}`
                            wq5.style.display = "block";
                            banco[a % 10][(a - a % 10) / 10 - 1 - 1] = 'wq'
                        }
                        else
                        {
                            wp4.className = `piece wp square-${b}`
                        }
                        wwp4 = 2;
                        dichuyen()
                    }
                    div.appendChild(cheotrai)
                }
            }
        }
        temp = false;
    } else {
        xoadiv();
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
                        xoadiv()
                        temp = true;
                        if(b%10 == 8)
                        {
                            div.removeChild(wp5)
                            wq6.className = `piece wq square-${b}`
                            wq6.style.display = "block";
                            banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1] = 'wq'
                        }
                        else
                        {
                            wp5.className = `piece wp square-${b}`
                        }
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
                        let b = diachi(nameClass) + 11
                        let an = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                        div.removeChild(an);
                        xoadiv()
                        temp = true;
                        if(b%10 == 8)
                        {
                            div.removeChild(wp5)
                            wq6.className = `piece wq square-${b}`
                            wq6.style.display = "block";
                            banco[a % 10][(a - a % 10) / 10] = 'wq'
                        }
                        else
                        {
                            wp5.className = `piece wp square-${b}`
                        }
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
                        let b = diachi(nameClass) - 9
                        let an = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                        div.removeChild(an);
                        xoadiv()
                        temp = true;
                        if(b%10 == 8)
                        {
                            div.removeChild(wp5)
                            wq6.className = `piece wq square-${b}`
                            wq6.style.display = "block";
                            banco[a % 10][(a - a % 10) / 10 - 1 - 1] = 'wq'
                        }
                        else
                        {
                            wp5.className = `piece wp square-${b}`
                        }
                        wwp5 = 2;
                        dichuyen()
                    }
                    div.appendChild(cheotrai)
                }
            }
        }
        temp = false;
    } else {
        xoadiv();
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
                        xoadiv()
                        temp = true;
                        if(b%10 == 8)
                        {
                            div.removeChild(wp6)
                            wq7.className = `piece wq square-${b}`
                            wq7.style.display = "block";
                            banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1] = 'wq'
                        }
                        else
                        {
                            wp6.className = `piece wp square-${b}`
                        }
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
                        let b = diachi(nameClass) + 11
                        let an = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                        div.removeChild(an);
                        xoadiv()
                        temp = true;
                        if(b%10 == 8)
                        {
                            div.removeChild(wp6)
                            wq7.className = `piece wq square-${b}`
                            wq7.style.display = "block";
                            banco[a % 10][(a - a % 10) / 10] = 'wq'
                        }
                        else
                        {
                            wp6.className = `piece wp square-${b}`
                        }
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
                        let b = diachi(nameClass) - 9
                        let an = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                        div.removeChild(an);
                        xoadiv()
                        temp = true;
                        if(b%10 == 8)
                        {
                            div.removeChild(wp6)
                            wq7.className = `piece wq square-${b}`
                            wq7.style.display = "block";
                            banco[a % 10][(a - a % 10) / 10 - 1 - 1] = 'wq'
                        }
                        else
                        {
                            wp6.className = `piece wp square-${b}`
                        }
                        wwp6 = 2;
                        dichuyen()
                    }
                    div.appendChild(cheotrai)
                }
            }
        }
        temp = false;
    } else {
        xoadiv();
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
                        xoadiv()
                        temp = true;
                        if(b%10 == 8)
                        {
                            div.removeChild(wp7)
                            wq8.className = `piece wq square-${b}`
                            wq8.style.display = "block";
                            banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1] = 'wq'
                        }
                        else
                        {
                            wp7.className = `piece wp square-${b}`
                        }
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
                        let b = diachi(nameClass) + 11
                        let an = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                        div.removeChild(an);
                        xoadiv()
                        temp = true;
                        if(b%10 == 8)
                        {
                            div.removeChild(wp7)
                            wq8.className = `piece wq square-${b}`
                            wq8.style.display = "block";
                            banco[a % 10][(a - a % 10) / 10] = 'wq'
                        }
                        else
                        {
                            wp7.className = `piece wp square-${b}`
                        }
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
                        let b = diachi(nameClass) - 9
                        let an = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                        div.removeChild(an);
                        xoadiv()
                        temp = true;
                        if(b%10 == 8)
                        {
                            div.removeChild(wp7)
                            wq8.className = `piece wq square-${b}`
                            wq8.style.display = "block";
                            banco[a % 10][(a - a % 10) / 10 - 1 - 1] = 'wq'
                        }
                        else
                        {
                            wp7.className = `piece wp square-${b}`
                        }
                        wwp7 = 2;
                        dichuyen()
                    }
                    div.appendChild(cheotrai)
                }
            }
        }
        temp = false;
    } else {
        xoadiv();
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
                        xoadiv()
                        temp = true;
                        if(b%10 == 8)
                        {
                            div.removeChild(wp8)
                            wq9.className = `piece wq square-${b}`
                            wq9.style.display = "block";
                            banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1] = 'wq'
                        }
                        else
                        {
                            wp8.className = `piece wp square-${b}`
                        }
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
                        let b = diachi(nameClass) + 11
                        let an = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                        div.removeChild(an);
                        xoadiv()
                        temp = true;
                        if(b%10 == 8)
                        {
                            div.removeChild(wp8)
                            wq9.className = `piece wq square-${b}`
                            wq9.style.display = "block";
                            banco[a % 10][(a - a % 10) / 10] = 'wq'
                        }
                        else
                        {
                            wp8.className = `piece wp square-${b}`
                        }
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
                        let b = diachi(nameClass) - 9
                        let an = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                        div.removeChild(an);
                        xoadiv()
                        temp = true;
                        if(b%10 == 8)
                        {
                            div.removeChild(wp8)
                            wq9.className = `piece wq square-${b}`
                            wq9.style.display = "block";
                            banco[a % 10][(a - a % 10) / 10 - 1 - 1] = 'wq'
                        }
                        else
                        {
                            wp8.className = `piece wp square-${b}`
                        }
                        wwp8 = 2;
                        dichuyen()
                    }
                    div.appendChild(cheotrai)
                }
            }
        }
        temp = false;
    } else {
        xoadiv();
        temp = true;
    }
}
//Di chuyen xe
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
                        let a = diachi(nameClass)
                        banco[b % 10 - 1][(b - b % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        console.log(banco)
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        xoadiv();
                        temp = true;
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + tren}`)
                            div.removeChild(an);
                            xoadiv();
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
                        xoadiv();
                        temp = true;
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - duoi}`)
                            div.removeChild(an);
                            xoadiv();
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
                        xoadiv();
                        temp = true;
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - trai * 10}`)
                            div.removeChild(an);
                            xoadiv();
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
                        temp = true;
                        xoadiv();
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phai * 10}`)
                            div.removeChild(an);
                            xoadiv();
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
        xoadiv();
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
                        let a = diachi(nameClass)
                        banco[b % 10 - 1][(b - b % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        xoadiv()
                        temp = true;
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + tren}`)
                            div.removeChild(an);
                            xoadiv()
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
                        xoadiv()
                        temp = true;
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - duoi}`)
                            div.removeChild(an);
                            xoadiv()
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
                        xoadiv()
                        temp = true;
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - trai * 10}`)
                            div.removeChild(an);
                            xoadiv()
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
                        xoadiv()
                        temp = true;
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phai * 10}`)
                            div.removeChild(an);
                            xoadiv()
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
        xoadiv();
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
                    let b = diachi(nameClass) + 12;
                    xoadiv()
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
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                        div.removeChild(an);
                        xoadiv()
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
                    xoadiv()
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
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                        div.removeChild(an);
                        xoadiv()
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
                    xoadiv()
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
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                        div.removeChild(an);
                        xoadiv()
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
                    xoadiv()
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
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                        div.removeChild(an);
                        xoadiv()
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
                    xoadiv()
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
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                        div.removeChild(an);
                        xoadiv()
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
                    xoadiv()
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
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                        div.removeChild(an);
                        xoadiv()
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
                    xoadiv()
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
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                        div.removeChild(an);
                        xoadiv()
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
                    xoadiv()
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
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                        div.removeChild(an);
                        xoadiv()
                        wn1.className = `piece wn square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);

                }
            }
        }
        temp = false;
    } else {
        xoadiv()
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
                    let b = diachi(nameClass) + 12;
                    xoadiv()
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
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) + 12}`)
                        div.removeChild(an);
                        xoadiv()
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
                    xoadiv()
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
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) + 21}`)
                        div.removeChild(an);
                        xoadiv()
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
                    xoadiv()
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
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) + 19}`)
                        div.removeChild(an);
                        xoadiv()
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
                    xoadiv()
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
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) + 8}`)
                        div.removeChild(an);
                        xoadiv()
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
                    xoadiv()
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
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) - 8}`)
                        div.removeChild(an);
                        xoadiv()
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
                    xoadiv()
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
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) - 19}`)
                        div.removeChild(an);
                        xoadiv()
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
                    xoadiv()
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
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) - 21}`)
                        div.removeChild(an);
                        xoadiv()
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
                    xoadiv()
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
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) - 12}`)
                        div.removeChild(an);
                        xoadiv()
                        wn2.className = `piece wn square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);

                }
            }
        }
        temp = false;
    } else {
        xoadiv()
        temp = true;
    }
}
//Di chuyen tuong
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
                        temp = true;
                        xoadiv();
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phaitren * 10 + phaitren}`)
                            div.removeChild(an);
                            xoadiv()
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
                        xoadiv()
                        temp = true;
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`)
                            div.removeChild(an);
                            xoadiv()
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
                        temp = true;
                        xoadiv()
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - traitren * 10 + traitren}`)
                            div.removeChild(an);
                            xoadiv()
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
                        temp = true;
                        xoadiv()
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`)
                            div.removeChild(an);
                            xoadiv()
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
        xoadiv();
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
                        temp = true;
                        xoadiv()
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phaitren * 10 + phaitren}`)
                            div.removeChild(an);
                            xoadiv()
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
                        temp = true;
                        xoadiv()
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`)
                            div.removeChild(an);
                            xoadiv()
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
                        temp = true;
                        xoadiv()
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - traitren * 10 + traitren}`)
                            div.removeChild(an);
                            xoadiv()
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
                        temp = true;
                        xoadiv()
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`)
                            div.removeChild(an);
                            xoadiv()
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
        xoadiv()
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
                        temp = true;
                        xoadiv()
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + tren}`)
                            div.removeChild(an);
                            xoadiv()
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
                        temp = true;
                        xoadiv()
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - duoi}`)
                            div.removeChild(an);
                            xoadiv()
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
                        temp = true;
                        xoadiv()
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - trai * 10}`)
                            div.removeChild(an);
                            xoadiv()
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
                        temp = true;
                        xoadiv()
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phai * 10}`)
                            div.removeChild(an);
                            xoadiv()
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
                        temp = true;
                        xoadiv()
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phaitren * 10 + phaitren}`)
                            div.removeChild(an);
                            xoadiv()
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
                        temp = true;
                        xoadiv()
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`)
                            div.removeChild(an);
                            xoadiv()
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
                        temp = true;
                        xoadiv()
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - traitren * 10 + traitren}`)
                            div.removeChild(an);
                            xoadiv()
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
                        temp = true;
                        xoadiv()
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`)
                            div.removeChild(an);
                            xoadiv()
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
        xoadiv()
        temp = true;
    }
}
wq2.onclick = function () {
    if (temp == true) {
        wq2.style.backgroundColor = "#957373ad";
        let nameClass = wq2.className.toString()
        for (let i = 1; i < 8; i++)          //tren
        {
            if (kt(diachi(nameClass) + i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) + i}`) == null) {
                    tren++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wq2.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv()
                        wq2.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + tren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover1", `square-${diachi(nameClass) + tren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq2.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + tren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + tren][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + tren}`)
                            div.removeChild(an);
                            xoadiv()
                            wq2.className = `piece wq square-${b}`
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
                        wq2.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv()
                        wq2.className = `piece wq square-${b}`
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - duoi}`)
                            div.removeChild(an);
                            xoadiv()
                            wq2.className = `piece wq square-${b}`
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
                        wq2.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv()
                        wq2.className = `piece wq square-${b}`
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - trai * 10}`)
                            div.removeChild(an);
                            xoadiv()
                            wq2.className = `piece wq square-${b}`
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
                        wq2.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv()
                        wq2.className = `piece wq square-${b}`
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phai * 10}`)
                            div.removeChild(an);
                            xoadiv()
                            wq2.className = `piece wq square-${b}`
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
                        wq2.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10 + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq2.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + phaitren * 10 + phaitren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover11", `square-${diachi(nameClass) + phaitren * 10 + phaitren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq2.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + phaitren * 10 + phaitren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + phaitren][(a - a % 10) / 10 - 1 + phaitren] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phaitren * 10 + phaitren}`)
                            div.removeChild(an);
                            xoadiv();
                            wq2.className = `piece wq square-${b}`
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
                        wq2.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10 - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq2.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover-9", `square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq2.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + phaiduoi * 10 - phaiduoi;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 - phaiduoi][(a - a % 10) / 10 - 1 + phaiduoi] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`)
                            div.removeChild(an);
                            xoadiv();
                            wq2.className = `piece wq square-${b}`
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
                        wq2.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10 + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq2.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) - traitren * 10 + traitren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover9", `square-${diachi(nameClass) - traitren * 10 + traitren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq2.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) - traitren * 10 + traitren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + traitren][(a - a % 10) / 10 - 1 - traitren] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - traitren * 10 + traitren}`)
                            div.removeChild(an);
                            xoadiv();
                            wq2.className = `piece wq square-${b}`
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
                        wq2.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10 - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq2.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover-11", `square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq2.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) - traiduoi * 10 - traiduoi;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 - traiduoi][(a - a % 10) / 10 - 1 - traiduoi] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`)
                            div.removeChild(an);
                            xoadiv();
                            wq2.className = `piece wq square-${b}`
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
        xoadiv()
        temp = true;
    }
}
wq3.onclick = function () {
    if (temp == true) {
        wq3.style.backgroundColor = "#957373ad";
        let nameClass = wq3.className.toString()
        for (let i = 1; i < 8; i++)          //tren
        {
            if (kt(diachi(nameClass) + i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) + i}`) == null) {
                    tren++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wq3.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq3.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + tren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover1", `square-${diachi(nameClass) + tren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq3.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + tren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + tren][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + tren}`)
                            div.removeChild(an);
                            xoadiv();
                            wq3.className = `piece wq square-${b}`
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
                        wq3.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq3.className = `piece wq square-${b}`
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - duoi}`)
                            div.removeChild(an);
                            xoadiv();
                            wq3.className = `piece wq square-${b}`
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
                        wq3.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq3.className = `piece wq square-${b}`
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - trai * 10}`)
                            div.removeChild(an);
                            xoadiv();
                            wq3.className = `piece wq square-${b}`
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
                        wq3.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq3.className = `piece wq square-${b}`
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phai * 10}`)
                            div.removeChild(an);
                            xoadiv();
                            traiduoi = 1;
                            wq3.className = `piece wq square-${b}`
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
                        wq3.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10 + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq3.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + phaitren * 10 + phaitren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover11", `square-${diachi(nameClass) + phaitren * 10 + phaitren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq3.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + phaitren * 10 + phaitren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + phaitren][(a - a % 10) / 10 - 1 + phaitren] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phaitren * 10 + phaitren}`)
                            div.removeChild(an);
                            xoadiv();
                            wq3.className = `piece wq square-${b}`
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
                        wq3.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10 - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq3.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover-9", `square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq3.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + phaiduoi * 10 - phaiduoi;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 - phaiduoi][(a - a % 10) / 10 - 1 + phaiduoi] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`)
                            div.removeChild(an);
                            xoadiv();
                            wq3.className = `piece wq square-${b}`
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
                        wq3.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10 + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq3.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) - traitren * 10 + traitren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover9", `square-${diachi(nameClass) - traitren * 10 + traitren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq3.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) - traitren * 10 + traitren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + traitren][(a - a % 10) / 10 - 1 - traitren] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - traitren * 10 + traitren}`)
                            div.removeChild(an);
                            xoadiv();
                            wq3.className = `piece wq square-${b}`
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
                        wq3.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10 - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq3.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover-11", `square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq3.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) - traiduoi * 10 - traiduoi;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 - traiduoi][(a - a % 10) / 10 - 1 - traiduoi] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`)
                            div.removeChild(an);
                            xoadiv();
                            wq3.className = `piece wq square-${b}`
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
        xoadiv()
        temp = true;
    }
}
wq4.onclick = function () {
    if (temp == true) {
        wq4.style.backgroundColor = "#957373ad";
        let nameClass = wq4.className.toString()
        for (let i = 1; i < 8; i++)          //tren
        {
            if (kt(diachi(nameClass) + i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) + i}`) == null) {
                    tren++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wq4.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq4.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + tren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover1", `square-${diachi(nameClass) + tren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq4.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + tren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + tren][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + tren}`)
                            div.removeChild(an);
                            xoadiv();
                            wq4.className = `piece wq square-${b}`
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
                        wq4.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq4.className = `piece wq square-${b}`
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - duoi}`)
                            div.removeChild(an);
                            xoadiv();
                            wq4.className = `piece wq square-${b}`
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
                        wq4.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq4.className = `piece wq square-${b}`
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - trai * 10}`)
                            div.removeChild(an);
                            xoadiv();
                            wq4.className = `piece wq square-${b}`
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
                        wq4.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq4.className = `piece wq square-${b}`
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phai * 10}`)
                            div.removeChild(an);
                            xoadiv();
                            wq4.className = `piece wq square-${b}`
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
                        wq4.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10 + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq4.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + phaitren * 10 + phaitren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover11", `square-${diachi(nameClass) + phaitren * 10 + phaitren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq4.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + phaitren * 10 + phaitren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + phaitren][(a - a % 10) / 10 - 1 + phaitren] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phaitren * 10 + phaitren}`)
                            div.removeChild(an);
                            xoadiv();
                            wq4.className = `piece wq square-${b}`
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
                        wq4.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10 - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq4.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover-9", `square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq4.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + phaiduoi * 10 - phaiduoi;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 - phaiduoi][(a - a % 10) / 10 - 1 + phaiduoi] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`)
                            div.removeChild(an);
                            xoadiv();
                            wq4.className = `piece wq square-${b}`
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
                        wq4.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10 + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq4.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) - traitren * 10 + traitren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover9", `square-${diachi(nameClass) - traitren * 10 + traitren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq4.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) - traitren * 10 + traitren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + traitren][(a - a % 10) / 10 - 1 - traitren] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - traitren * 10 + traitren}`)
                            div.removeChild(an);
                            xoadiv();
                            wq4.className = `piece wq square-${b}`
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
                        wq4.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10 - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq4.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover-11", `square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq4.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) - traiduoi * 10 - traiduoi;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 - traiduoi][(a - a % 10) / 10 - 1 - traiduoi] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`)
                            div.removeChild(an);
                            xoadiv();
                            wq4.className = `piece wq square-${b}`
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
        xoadiv()
        temp = true;
    }
}
wq5.onclick = function () {
    if (temp == true) {
        wq5.style.backgroundColor = "#957373ad";
        let nameClass = wq5.className.toString()
        for (let i = 1; i < 8; i++)          //tren
        {
            if (kt(diachi(nameClass) + i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) + i}`) == null) {
                    tren++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wq5.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq5.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + tren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover1", `square-${diachi(nameClass) + tren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq5.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + tren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + tren][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + tren}`)
                            div.removeChild(an);
                            xoadiv();
                            wq5.className = `piece wq square-${b}`
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
                        wq5.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq5.className = `piece wq square-${b}`
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - duoi}`)
                            div.removeChild(an);
                            xoadiv();
                            wq5.className = `piece wq square-${b}`
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
                        wq5.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq5.className = `piece wq square-${b}`
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - trai * 10}`)
                            div.removeChild(an);
                            xoadiv();
                            wq5.className = `piece wq square-${b}`
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
                        wq5.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq5.className = `piece wq square-${b}`
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phai * 10}`)
                            div.removeChild(an);
                            xoadiv();
                            wq5.className = `piece wq square-${b}`
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
                        wq5.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10 + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq5.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + phaitren * 10 + phaitren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover11", `square-${diachi(nameClass) + phaitren * 10 + phaitren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq5.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + phaitren * 10 + phaitren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + phaitren][(a - a % 10) / 10 - 1 + phaitren] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phaitren * 10 + phaitren}`)
                            div.removeChild(an);
                            xoadiv();
                            wq5.className = `piece wq square-${b}`
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
                        wq5.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10 - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq5.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover-9", `square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq5.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + phaiduoi * 10 - phaiduoi;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 - phaiduoi][(a - a % 10) / 10 - 1 + phaiduoi] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`)
                            div.removeChild(an);
                            xoadiv();
                            wq5.className = `piece wq square-${b}`
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
                        wq5.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10 + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq5.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) - traitren * 10 + traitren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover9", `square-${diachi(nameClass) - traitren * 10 + traitren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq5.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) - traitren * 10 + traitren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + traitren][(a - a % 10) / 10 - 1 - traitren] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - traitren * 10 + traitren}`)
                            div.removeChild(an);
                            xoadiv();
                            wq5.className = `piece wq square-${b}`
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
                        wq5.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10 - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq5.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover-11", `square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq5.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) - traiduoi * 10 - traiduoi;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 - traiduoi][(a - a % 10) / 10 - 1 - traiduoi] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`)
                            div.removeChild(an);
                            xoadiv();
                            wq5.className = `piece wq square-${b}`
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
        xoadiv()
        temp = true;
    }
}
wq6.onclick = function () {
    if (temp == true) {
        wq6.style.backgroundColor = "#957373ad";
        let nameClass = wq6.className.toString()
        for (let i = 1; i < 8; i++)          //tren
        {
            if (kt(diachi(nameClass) + i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) + i}`) == null) {
                    tren++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wq6.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq6.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + tren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover1", `square-${diachi(nameClass) + tren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq6.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + tren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + tren][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + tren}`)
                            div.removeChild(an);
                            xoadiv();
                            wq6.className = `piece wq square-${b}`
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
                        wq6.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq6.className = `piece wq square-${b}`
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - duoi}`)
                            div.removeChild(an);
                            xoadiv();
                            wq6.className = `piece wq square-${b}`
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
                        wq6.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq6.className = `piece wq square-${b}`
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - trai * 10}`)
                            div.removeChild(an);
                            xoadiv();
                            wq6.className = `piece wq square-${b}`
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
                        wq6.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq6.className = `piece wq square-${b}`
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phai * 10}`)
                            div.removeChild(an);
                            xoadiv();
                            wq6.className = `piece wq square-${b}`
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
                        wq6.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10 + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq6.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + phaitren * 10 + phaitren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover11", `square-${diachi(nameClass) + phaitren * 10 + phaitren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq6.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + phaitren * 10 + phaitren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + phaitren][(a - a % 10) / 10 - 1 + phaitren] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phaitren * 10 + phaitren}`)
                            div.removeChild(an);
                            xoadiv();
                            wq6.className = `piece wq square-${b}`
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
                        wq6.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10 - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq6.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover-9", `square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq6.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + phaiduoi * 10 - phaiduoi;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 - phaiduoi][(a - a % 10) / 10 - 1 + phaiduoi] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`)
                            div.removeChild(an);
                            xoadiv();
                            wq6.className = `piece wq square-${b}`
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
                        wq6.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10 + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq6.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) - traitren * 10 + traitren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover9", `square-${diachi(nameClass) - traitren * 10 + traitren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq6.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) - traitren * 10 + traitren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + traitren][(a - a % 10) / 10 - 1 - traitren] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - traitren * 10 + traitren}`)
                            div.removeChild(an);
                            xoadiv();
                            wq6.className = `piece wq square-${b}`
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
                        wq6.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10 - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq6.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover-11", `square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq6.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) - traiduoi * 10 - traiduoi;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 - traiduoi][(a - a % 10) / 10 - 1 - traiduoi] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`)
                            div.removeChild(an);
                            xoadiv();
                            wq6.className = `piece wq square-${b}`
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
        xoadiv()
        temp = true;
    }
}
wq7.onclick = function () {
    if (temp == true) {
        wq7.style.backgroundColor = "#957373ad";
        let nameClass = wq7.className.toString()
        for (let i = 1; i < 8; i++)          //tren
        {
            if (kt(diachi(nameClass) + i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) + i}`) == null) {
                    tren++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wq7.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq7.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + tren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover1", `square-${diachi(nameClass) + tren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq7.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + tren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + tren][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + tren}`)
                            div.removeChild(an);
                            xoadiv();
                            wq7.className = `piece wq square-${b}`
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
                        wq7.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq7.className = `piece wq square-${b}`
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - duoi}`)
                            div.removeChild(an);
                            xoadiv();
                            wq7.className = `piece wq square-${b}`
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
                        wq7.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq7.className = `piece wq square-${b}`
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - trai * 10}`)
                            div.removeChild(an);
                            xoadiv();
                            wq7.className = `piece wq square-${b}`
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
                        wq7.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq7.className = `piece wq square-${b}`
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phai * 10}`)
                            div.removeChild(an);
                            xoadiv();
                            wq7.className = `piece wq square-${b}`
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
                        wq7.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10 + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq7.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + phaitren * 10 + phaitren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover11", `square-${diachi(nameClass) + phaitren * 10 + phaitren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq7.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + phaitren * 10 + phaitren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + phaitren][(a - a % 10) / 10 - 1 + phaitren] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phaitren * 10 + phaitren}`)
                            div.removeChild(an);
                            xoadiv();
                            wq7.className = `piece wq square-${b}`
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
                        wq7.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10 - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq7.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover-9", `square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq7.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + phaiduoi * 10 - phaiduoi;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 - phaiduoi][(a - a % 10) / 10 - 1 + phaiduoi] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`)
                            div.removeChild(an);
                            xoadiv();
                            wq7.className = `piece wq square-${b}`
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
                        wq7.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10 + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq7.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) - traitren * 10 + traitren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover9", `square-${diachi(nameClass) - traitren * 10 + traitren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq7.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) - traitren * 10 + traitren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + traitren][(a - a % 10) / 10 - 1 - traitren] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - traitren * 10 + traitren}`)
                            div.removeChild(an);
                            xoadiv();
                            wq7.className = `piece wq square-${b}`
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
                        wq7.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10 - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq7.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover-11", `square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq7.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) - traiduoi * 10 - traiduoi;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 - traiduoi][(a - a % 10) / 10 - 1 - traiduoi] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`)
                            div.removeChild(an);
                            xoadiv();
                            wq7.className = `piece wq square-${b}`
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
        xoadiv()
        temp = true;
    }
}
wq8.onclick = function () {
    if (temp == true) {
        wq8.style.backgroundColor = "#957373ad";
        let nameClass = wq8.className.toString()
        for (let i = 1; i < 8; i++)          //tren
        {
            if (kt(diachi(nameClass) + i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) + i}`) == null) {
                    tren++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wq8.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq8.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + tren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover1", `square-${diachi(nameClass) + tren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq8.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + tren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + tren][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + tren}`)
                            div.removeChild(an);
                            xoadiv();
                            wq8.className = `piece wq square-${b}`
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
                        wq8.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq8.className = `piece wq square-${b}`
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - duoi}`)
                            div.removeChild(an);
                            xoadiv();
                            wq8.className = `piece wq square-${b}`
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
                        wq8.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq8.className = `piece wq square-${b}`
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - trai * 10}`)
                            div.removeChild(an);
                            xoadiv();
                            wq8.className = `piece wq square-${b}`
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
                        wq8.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq8.className = `piece wq square-${b}`
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phai * 10}`)
                            div.removeChild(an);
                            xoadiv();
                            wq8.className = `piece wq square-${b}`
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
                        wq8.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10 + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq8.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + phaitren * 10 + phaitren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover11", `square-${diachi(nameClass) + phaitren * 10 + phaitren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq8.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + phaitren * 10 + phaitren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + phaitren][(a - a % 10) / 10 - 1 + phaitren] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phaitren * 10 + phaitren}`)
                            div.removeChild(an);
                            xoadiv();
                            wq8.className = `piece wq square-${b}`
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
                        wq8.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10 - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq8.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover-9", `square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq8.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + phaiduoi * 10 - phaiduoi;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 - phaiduoi][(a - a % 10) / 10 - 1 + phaiduoi] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`)
                            div.removeChild(an);
                            xoadiv();
                            wq8.className = `piece wq square-${b}`
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
                        wq8.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10 + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq8.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) - traitren * 10 + traitren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover9", `square-${diachi(nameClass) - traitren * 10 + traitren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq8.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) - traitren * 10 + traitren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + traitren][(a - a % 10) / 10 - 1 - traitren] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - traitren * 10 + traitren}`)
                            div.removeChild(an);
                            xoadiv();
                            wq8.className = `piece wq square-${b}`
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
                        wq8.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10 - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq8.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover-11", `square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq8.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) - traiduoi * 10 - traiduoi;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 - traiduoi][(a - a % 10) / 10 - 1 - traiduoi] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`)
                            div.removeChild(an);
                            xoadiv();
                            wq8.className = `piece wq square-${b}`
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
        xoadiv()
        temp = true;
    }
}
wq9.onclick = function () {
    if (temp == true) {
        wq9.style.backgroundColor = "#957373ad";
        let nameClass = wq9.className.toString()
        for (let i = 1; i < 8; i++)          //tren
        {
            if (kt(diachi(nameClass) + i) == 1) {
                if (document.querySelector(`.square-${diachi(nameClass) + i}`) == null) {
                    tren++;
                    let taoDiv = document.createElement("div")
                    taoDiv.classList.add("piece", "hover", `square-${diachi(nameClass) + i}`);
                    taoDiv.style.backgroundColor = "#957373ad";
                    taoDiv.onclick = function () {
                        wq9.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq9.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + tren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover1", `square-${diachi(nameClass) + tren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq9.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + tren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + tren][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + tren}`)
                            div.removeChild(an);
                            xoadiv();
                            wq9.className = `piece wq square-${b}`
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
                        wq9.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq9.className = `piece wq square-${b}`
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - duoi}`)
                            div.removeChild(an);
                            xoadiv();
                            wq9.className = `piece wq square-${b}`
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
                        wq9.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq9.className = `piece wq square-${b}`
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - trai * 10}`)
                            div.removeChild(an);
                            xoadiv();
                            wq9.className = `piece wq square-${b}`
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
                        wq9.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq9.className = `piece wq square-${b}`
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
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phai * 10}`)
                            div.removeChild(an);
                            xoadiv();
                            wq9.className = `piece wq square-${b}`
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
                        wq9.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10 + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq9.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + phaitren * 10 + phaitren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover11", `square-${diachi(nameClass) + phaitren * 10 + phaitren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq9.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + phaitren * 10 + phaitren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + phaitren][(a - a % 10) / 10 - 1 + phaitren] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phaitren * 10 + phaitren}`)
                            div.removeChild(an);
                            xoadiv();
                            wq9.className = `piece wq square-${b}`
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
                        wq9.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) + i * 10 - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1 + i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq9.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover-9", `square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq9.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) + phaiduoi * 10 - phaiduoi;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 - phaiduoi][(a - a % 10) / 10 - 1 + phaiduoi] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) + phaiduoi * 10 - phaiduoi}`)
                            div.removeChild(an);
                            xoadiv();
                            wq9.className = `piece wq square-${b}`
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
                        wq9.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10 + i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 + i][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq9.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) - traitren * 10 + traitren}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover9", `square-${diachi(nameClass) - traitren * 10 + traitren}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq9.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) - traitren * 10 + traitren;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 + traitren][(a - a % 10) / 10 - 1 - traitren] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - traitren * 10 + traitren}`)
                            div.removeChild(an);
                            xoadiv();
                            wq9.className = `piece wq square-${b}`
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
                        wq9.style.backgroundColor = "transparent";
                        let b = diachi(nameClass) - i * 10 - i;
                        let a = diachi(nameClass)
                        banco[a % 10 - 1 - i][(a - a % 10) / 10 - 1 - i] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                        banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                        temp = true;
                        xoadiv();
                        wq9.className = `piece wq square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                } else {
                    if (anduoc(document.querySelector(`.square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`).className.toString()) == 1) {
                        let taoDiv = document.createElement("div")
                        taoDiv.classList.add("piece", "hover-11", `square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`);
                        taoDiv.style.backgroundColor = "#ff000080";
                        taoDiv.onclick = function () {
                            wq9.style.backgroundColor = "transparent";
                            let b = diachi(nameClass) - traiduoi * 10 - traiduoi;
                            let a = diachi(nameClass)
                            banco[a % 10 - 1 - traiduoi][(a - a % 10) / 10 - 1 - traiduoi] = banco[a % 10 - 1][(a - a % 10) / 10 - 1];
                            banco[a % 10 - 1][(a - a % 10) / 10 - 1] = 0;
                            temp = true;
                            let an = document.querySelector(`.square-${diachi(nameClass) - traiduoi * 10 - traiduoi}`)
                            div.removeChild(an);
                            xoadiv();
                            wq9.className = `piece wq square-${b}`
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
        xoadiv()
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
                    xoadiv();
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
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) + 11}`)
                        div.removeChild(an);
                        xoadiv();
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
                    xoadiv();
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
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) + 10}`)
                        div.removeChild(an);
                        xoadiv();
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
                    xoadiv();
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
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) + 9}`)
                        div.removeChild(an);
                        xoadiv();
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
                    xoadiv();
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
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) + 1}`)
                        div.removeChild(an);
                        xoadiv();
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
                    xoadiv();
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
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) - 1}`)
                        div.removeChild(an);
                        xoadiv();
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
                    xoadiv();
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
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) - 9}`)
                        div.removeChild(an);
                        xoadiv();
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
                    xoadiv();
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
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) - 10}`)
                        div.removeChild(an);
                        xoadiv();
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
                    xoadiv();
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
                        temp = true;
                        let an = document.querySelector(`.square-${diachi(nameClass) - 11}`)
                        div.removeChild(an);
                        xoadiv();
                        wk1.className = `piece wk square-${b}`
                        dichuyen()
                    }
                    div.appendChild(taoDiv);
                }
            }
        }
        temp = false;
    } else {
        xoadiv()
        temp = true;
    }
}
function xoadiv()
{
    for(let i=1;i<=8;i++)
    {
        for(let j=1;j<=8;j++)
        {
            let dc = document.querySelector(`.square-${i}${j}`)
            if (dc != null) {
                dc.style.backgroundColor = "transparent";
                if (document.querySelector('.hover1') != null) {
                    let xoadc = document.querySelector(`.hover1`);
                    div.removeChild(xoadc);
                }
                if (document.querySelector('.hover-1') != null) {
                    let xoadc = document.querySelector(`.hover-1`);
                    div.removeChild(xoadc);
                }
                if (document.querySelector('.hover10') != null) {
                    let xoadc = document.querySelector(`.hover10`);
                    div.removeChild(xoadc);
                }
                if (document.querySelector('.hover-10') != null) {
                    let xoadc = document.querySelector(`.hover-10`);
                    div.removeChild(xoadc);
                }
                if (document.querySelector('.hover11') != null) {
                    let xoadc = document.querySelector(`.hover11`);
                    div.removeChild(xoadc);
                }
                if (document.querySelector('.hover-11') != null) {
                    let xoadc = document.querySelector(`.hover-11`);
                    div.removeChild(xoadc);
                }
                if (document.querySelector('.hover9') != null) {
                    let xoadc = document.querySelector(`.hover9`);
                    div.removeChild(xoadc);
                }
                if (document.querySelector('.hover-9') != null) {
                    let xoadc = document.querySelector(`.hover-9`);
                    div.removeChild(xoadc);
                }
                if (dc.classList.contains('hover') == true) {
                    let xoadc = document.querySelector(`.square-${i}${j}`);
                    div.removeChild(xoadc);
                }
            }
        }
    }
    tren = 1;
    duoi = 1
    trai = 1;
    phai = 1;
    phaitren = 1;
    phaiduoi = 1;
    traitren = 1;
    traiduoi = 1;
}
function ok()
{
    ds = document.querySelector('.textbox1').value
    ds = (ds - '0') * 2;
    console.log(ds)
}
function dichuyen() {
    if(endgame()==0)
    {
        alert("You Win")
        location.reload();
    }
    let xetvitri = dendc(ds).toString()
    console.log(xetvitri)
    console.log(banco)
    let dc = document.querySelector(`.square-${xetvitri[1] - '0' + 1}${xetvitri[0] - '0' + 1}`).className.toString()
    if((kttot(dc) == 1)&&(xetvitri[2]) == 0)
    {
        if (document.querySelector(`.square-${xetvitri[3] - '0' + 1}${xetvitri[2] - '0' + 1}`) == null) {
            document.querySelector(`.square-${xetvitri[1] - '0' + 1}${xetvitri[0] - '0' + 1}`).className = `piece bq square-${xetvitri[3] - '0' + 1}${xetvitri[2] - '0' + 1}`
        } else {
            div.removeChild(document.querySelector(`.square-${xetvitri[3] - '0' + 1}${xetvitri[2] - '0' + 1}`))
            document.querySelector(`.square-${xetvitri[1] - '0' + 1}${xetvitri[0] - '0' + 1}`).className = `piece bq square-${xetvitri[3] - '0' + 1}${xetvitri[2] - '0' + 1}`
        }
        banco[xetvitri[2]-'0'][xetvitri[3]-'0'] = 'bq';
        banco[xetvitri[0]-'0'][xetvitri[1]-'0'] = 0;
    }
    else {
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
    if(endgame()==0)
    {
        alert("You Lose")
        location.reload();
    }
}


function diachi(x)    //hàm lấy tọa độ quân cờ
{
    let a
    a=x[x.length-2]+x[x.length-1]
    return a - '0'
}
function kttot(toado)  //kiểm tra tên class lấy đc có phải là cờ đen ko
{
    for(let i = 0; i < toado.length; i++)
    {
        if((toado[i]==' ')&&(toado[i+1]=='b')&&(toado[i+2]=='p'))
        {
            return 1;
        }
    }
    return 0;
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
                            if(i-1 == 0)
                            {
                                let x = banco[i - 1][j]
                                let y = banco[i][j]
                                banco[i - 1][j] = 'bq';
                                banco[i][j] = 0;
                                max1 = 80
                                max1 = max1 + trangdc(dosau - 1)
                                if(max < max1) {
                                    max = max1;
                                    A = i;
                                    B = j;
                                    C = i - 1;
                                    D = j;
                                }
                                banco[i][j] = y;
                                banco[i - 1][j] = x;
                            }
                            else {
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
                    }
                    if (kiemtra(i - 1, j - 1) == 1) {
                        if ((diemcong(i - 1, j - 1) == 10) || (diemcong(i - 1, j - 1) == 30) || (diemcong(i - 1, j - 1) == 50) || (diemcong(i - 1, j - 1) == 90) || (diemcong(i - 1, j - 1) == 900)) {
                            if(i-1 == 0)
                            {
                                max1 = diemcong(i - 1, j - 1) + 80;
                                let x = banco[i - 1][j - 1]
                                let y = banco[i][j]
                                banco[i - 1][j - 1] = 'bq';
                                banco[i][j] = 0;
                                max1 = max1 + trangdc(dosau - 1)
                                if(max < max1) {
                                    max = max1;
                                    A = i;
                                    B = j;
                                    C = i-1;
                                    D = j-1;
                                }
                                banco[i][j] = y;
                                banco[i - 1][j - 1] = x;
                            }
                            else
                            {
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
                    }
                    if (kiemtra(i - 1, j + 1) == 1) {
                        if ((diemcong(i - 1, j + 1) == 10) || (diemcong(i - 1, j + 1) == 30) || (diemcong(i - 1, j + 1) == 50) || (diemcong(i - 1, j + 1) == 90) || (diemcong(i - 1, j + 1) == 900)) {
                            if(i-1 == 0)
                            {
                                max1 = diemcong(i - 1, j + 1) + 80
                                let x = banco[i - 1][j + 1]
                                let y = banco[i][j]
                                banco[i - 1][j + 1] = 'bq';
                                banco[i][j] = 0;
                                max1 = max1 + trangdc(dosau - 1)
                                if(max < max1) {
                                    max = max1;
                                    A = i;
                                    B = j;
                                    C = i - 1;
                                    D = j + 1;
                                }
                                banco[i][j] = y;
                                banco[i - 1][j + 1] = x;
                            }
                            else {
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
                                if(i+1 == 7)
                                {
                                    let x = banco[i + 1][j];
                                    let y = banco[i][j];
                                    banco[i + 1][j] = 'wq';
                                    banco[i][j] = 0;
                                    min1 = -80
                                    if(min>min1){
                                        min = min1
                                    }
                                    banco[i][j] = y;
                                    banco[i + 1][j] = x;
                                }
                                else {
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
                        }
                        if (kiemtra(i + 1, j - 1) == 1) {
                            if ((diemtru(i + 1, j - 1) == -10) || (diemtru(i + 1, j - 1) == -30) || (diemtru(i + 1, j - 1) == -50) || (diemtru(i + 1, j - 1) == -90) || (diemtru(i + 1, j - 1) == -900)) {
                                if(i+1 == 7)
                                {
                                    min1 = diemtru(i + 1, j - 1) - 80
                                    let x = banco[i + 1][j - 1]
                                    let y = banco[i][j]
                                    banco[i + 1][j - 1] = 'wq';
                                    banco[i][j] = 0;
                                    if(min>min1){
                                        min = min1
                                    }
                                    banco[i][j] = y;
                                    banco[i + 1][j - 1] = x;
                                }
                                else {
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
                        }
                        if (kiemtra(i + 1, j + 1) == 1) {
                            if ((diemtru(i + 1, j + 1) == -10) || (diemtru(i + 1, j + 1) == -30) || (diemtru(i + 1, j + 1) == -50) || (diemtru(i + 1, j + 1) == -90) || (diemtru(i + 1, j + 1) == -900)) {
                                if(i+1 == 7)
                                {
                                    min1 = diemtru(i + 1, j + 1) - 80
                                    let x = banco[i + 1][j + 1]
                                    let y = banco[i][j]
                                    banco[i + 1][j + 1] = 'wq';
                                    banco[i][j] = 0;
                                    if(min>min1){
                                        min = min1
                                    }
                                    banco[i][j] = y;
                                    banco[i + 1][j + 1] = x;
                                }
                                else {
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
                                if(i+1 == 7)
                                {
                                    let x = banco[i + 1][j]
                                    let y = banco[i][j]
                                    banco[i + 1][j] = 'wq';
                                    banco[i][j] = 0;
                                    min1 = -80
                                    min1 = min1 + dendc(dosau-1)
                                    if(min>min1){
                                        min = min1
                                    }
                                    banco[i][j] = y;
                                    banco[i + 1][j] = x;
                                }
                                else
                                {
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
                        }
                        if (kiemtra(i + 1, j - 1) == 1) {
                            if ((diemtru(i + 1, j - 1) == -10) || (diemtru(i + 1, j - 1) == -30) || (diemtru(i + 1, j - 1) == -50) || (diemtru(i + 1, j - 1) == -90) || (diemtru(i + 1, j - 1) == -900)) {
                                if(i+1 == 7){
                                    min1 = diemtru(i + 1, j - 1) - 80
                                    let x = banco[i + 1][j - 1]
                                    let y = banco[i][j]
                                    banco[i + 1][j - 1] = 'wq';
                                    banco[i][j] = 0;
                                    min1 = min1 + dendc(dosau-1)
                                    if(min > min1){
                                        min = min1
                                    }
                                    banco[i][j] = y;
                                    banco[i + 1][j - 1] = x;
                                }
                                else {
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
                        }
                        if (kiemtra(i + 1, j + 1) == 1) {
                            if ((diemtru(i + 1, j + 1) == -10) || (diemtru(i + 1, j + 1) == -30) || (diemtru(i + 1, j + 1) == -50) || (diemtru(i + 1, j + 1) == -90) || (diemtru(i + 1, j + 1) == -900)) {
                                if(i+1 == 7)
                                {
                                    min1 = diemtru(i + 1, j + 1) - 80
                                    let x = banco[i + 1][j + 1]
                                    let y = banco[i][j]
                                    banco[i + 1][j + 1] = 'wq';
                                    banco[i][j] = 0;
                                    min1 = min1 + dendc(dosau-1)
                                    if(min > min1){
                                        min = min1
                                    }
                                    banco[i][j] = y;
                                    banco[i + 1][j + 1] = x;
                                }
                                else {
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


