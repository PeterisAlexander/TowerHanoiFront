let towers = [[5,4,3,2,1],[],[]];
let positions = ['p1', 'p2', 'p3', 'p4', 'p5', 'p0', 't1', 't2', 't3'];
let movements = [];
function render() {
    towers.forEach((tower, towerId) => {
        tower.forEach((disk, position) => {
            let d = document.querySelector('.d'+disk);
            positions.forEach(position => {
                d.classList.remove(position);
            })
            d.classList.add('t'+(towerId+1));
            d.classList.add('p'+(position+1));
        })
    })
}
    
function move(fromTower, toTower) {
    if(!towers[fromTower].length) {
        return
    }
    let disk = towers[fromTower].pop();
    if(towers[fromTower].length){
        if(towers[toTower][towers[toTower].length-1]<disk) {
            return toTowers[fromTower].push(disk);
        }
    }
    let d = document.querySelector('.d'+disk);
    d.classList.add('p0');
    towers[toTower].push(disk);
    setTimeout(render,400);
}

function clickTower(n) {
    if(movements.length && movements[0].length ==1) {
        movements[0].push(n);
    }
    else {
        movements.unshift([n]);
    }
}

setInterval(() => {
    if(movements.length && movements[movements.length-1].length==2) {
        let m = movements.pop();
        move(m[0], m[1]);
    }
}, 600)

render()

function solve(size, fromTower, toTower) {
    if(size ==1 ) {
        return movements.unshift([fromTower, toTower]);
    }
    let other = 3-fromTower-toTower;
    solve(size-1, fromTower, other);
    movements.unshift([fromTower, toTower]);
    solve(size-1, other, toTower)
}

setTimeout(() => { solve(5,0,1)}, 2000)