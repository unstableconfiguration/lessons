let yorim = {
    name : 'yorim',
    race : 'wood elf',
    alignment : 'chaotic good',
    level : 8,
    class : 'rogue',
    /* property : value 
        You have a = sign here instead of a :
    */
    stats : {
        str : 10,
        dex : 20,
        con : 12,
        int : 13,
        wis : 14,
        cha : 10,
    },
    // Same thing for these. 
        // statMod : function(...
    statMod : function(stat) {
        let mod = Math.floor((stat - 10) / 2);
        return mod;
    },
    hpCalc : function() {
        let totalHP = 8 + (this.level - 1) * 5 + this.statMod(this.stats.con) * this.level;
        return totalHP;
    },
    profBonus : function() {
        let bonus = Math.floor(this.level / 4) + 1;
        return bonus;
    },
}

console.log(yorim.statMod(yorim.stats.dex));
console.log(yorim.hpCalc());
console.log(yorim.profBonus());
