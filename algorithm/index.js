var minEatingSpeed = function(piles,H = 8){
    let lo = 1,
        hi = Math.max(...piles);//max
    while(lo <= hi){
        lo++;
        if(canEatAllBananas(piles,H,lo)){
            return lo;
        }
    }
    return lo;
    
}
function canEatAllBananas(piles,H,low){
    let sum = 0 ;
    for(let pile of piles){
        sum += Math.ceil(pile/low);
    }
    return sum<=H;
}
console.log(minEatingSpeed([312884470],968709470))