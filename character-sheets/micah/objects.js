let nameDisplay = document.getElementById('charname');
let raceDisplay = document.getElementById('race');
let alignDisplay = document.getElementById('alignment');
let levelDisplay = document.getElementById('level');
let classDisplay = document.getElementById('class');
let strDisplay = document.getElementById('str');
let dexDisplay = document.getElementById('dex');
let conDisplay = document.getElementById('con');
let intDisplay = document.getElementById('int');
let wisDisplay = document.getElementById('wis');
let chaDisplay = document.getElementById('cha');
let strModDisplay = document.getElementById('strmod');
let dexModDisplay = document.getElementById('dexmod');
let conModDisplay = document.getElementById('conmod');
let intModDisplay = document.getElementById('intmod');
let wisModDisplay = document.getElementById('wismod');
let chaModDisplay = document.getElementById('chamod');

let yorim = {
    name : 'Yorim',
    race : 'Wood Elf',
    alignment : 'Chaotic Good',
    level : 8,
    class : 'Rogue',
    stats : {
        str : 10,
        dex : 20,
        con : 12,
        int : 13,
        wis : 14,
        cha : 10,
    },

    statMod : function(stat) {
        let mod = Math.floor((stat - 10) / 2);
        return mod;
    },
    hpCalc : function() {
        let totalHP = 8 + (this.level - 1) * 5 + this.statMod(this.stats.con) * this.level;
        return totalHP;
    },
    profMod : function() {
        let mod = Math.floor(this.level / 4) + 1;
        return mod;
    },
}

nameDisplay.innerHTML = yorim.name;
raceDisplay.innerHTML = yorim.race;
alignDisplay.innerHTML = yorim.alignment;
levelDisplay.innerHTML = yorim.level;
classDisplay.innerHTML = yorim.class;
strDisplay.innerHTML = yorim.stats.str;
dexDisplay.innerHTML = yorim.stats.dex;
conDisplay.innerHTML = yorim.stats.con;
intDisplay.innerHTML = yorim.stats.int;
wisDisplay.innerHTML = yorim.stats.wis;
chaDisplay.innerHTML = yorim.stats.cha;
strModDisplay.innerHTML = yorim.statMod(yorim.stats.str);
dexModDisplay.innerHTML = yorim.statMod(yorim.stats.dex);
conModDisplay.innerHTML = yorim.statMod(yorim.stats.con);
intModDisplay.innerHTML = yorim.statMod(yorim.stats.int);
wisModDisplay.innerHTML = yorim.statMod(yorim.stats.wis);
chaModDisplay.innerHTML = yorim.statMod(yorim.stats.cha);

//console.log(yorim.statMod(yorim.stats.dex));
//console.log(yorim.hpCalc());
//console.log(yorim.profMod());
