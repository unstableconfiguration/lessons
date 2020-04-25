let yorim = {
    name : 'yorim',
    race : 'wood elf',
    alignment : 'chaotic good',
    level : 8,
    class : 'rogue',
    stats = {
        str : 10,
        dex : 20,
        con : 12,
        int : 13,
        wis : 14,
        cha : 10,
    },
    statMod = function(stat) {
        let mod = Math.floor((stat - 10) / 2);
        return mod;
    },
    hpCalc = function() {
        let totalHP = 8 + (yorim.level - 1) * 5 + modBonus(con) * yorim.level;
        return totalHP;
    },
    profBonus = function() {
        let bonus = Math.floor(yorim.level / 4) + 1;
        return bonus;
    },
}

console.log(yorim.statMod(dex));
console.log(yorim.hpCalc);
console.log(yorim.profBonus);