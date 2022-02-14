import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TowerHanoiService } from '../services/tower-hanoi.service';

@Component({
  selector: 'app-tower-hanoi',
  templateUrl: './tower-hanoi.component.html',
  styleUrls: ['./tower-hanoi.component.css']
})
export class TowerHanoiComponent implements OnInit {
  array : any = [];

  nbDisk: number = 1;

  start: string = "A";
  middle: string = "B";
  end: string = "C";

  nbDiskForm = new FormGroup({
    nbDisk : new FormControl(""),
  });

  towers = [[5,4,3,2,1],[],[]];

  positions = ['p5', 'p4', 'p3', 'p2', 'p1', 'p0', 't3', 't2', 't1'];
  
  movements = [];

  constructor(private ths : TowerHanoiService, private activatedRoute : ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(data => {
     console.log(data);
    });
  }

  ngOnInit(): void {
    setInterval(() => {
      if(this.movements.length && this.movements[this.movements.length-1] == 2) {
        let m = this.movements.pop();
        this.move(m![0], m![1]);
      }
    }, 600);
    this.render();
    this.resolve(this.nbDisk, this.start, this.middle, this.end);
  }


  public onKeyUp(val:any) {
    this.array = [];
    for(let i=1; i<=val; i++) {
      this.array.push(i)
    }
    console.log(this.array);
  }

  public render() {
    this.towers.forEach((tower, towerId) => {
        tower.forEach((disk, position) => {
            const d = document.querySelector('.d'+disk);
            this.positions.forEach(position => {
                d?.classList.remove(position);
            })
            d?.classList.add('t'+(towerId+1));
            d?.classList.add('p'+(position+1));
        })
    })
  }
  
  public move(fromTower: number, toTower: number) {
    if(!this.towers[fromTower].length) {
      return
    }
    const toTowers: any = [];
    const disk = this.towers[fromTower].pop();
    
    if(this.towers[fromTower].length){
      if(this.towers[toTower][this.towers[toTower].length-1]<= disk!) {
        return toTowers[fromTower].push(disk);
      }
    }
    
    const d = document.querySelector('.d'+disk);
    d?.classList.add('p0');
    this.towers[toTower].push(disk!);
    setTimeout(this.render,400);
  }

  public clickTower(n: never) {
    if(this.movements.length && this.movements.length == 1) {
        this.movements.push(n);
    }
    else {
        this.movements.unshift(n);
    }
  }


public solve(): void {
  this.nbDisk = this.nbDiskForm.get('nbDisk')?.value;
  console.log(this.nbDisk.valueOf());
  this.ths.stepMoveHanoiTower(this.nbDisk).subscribe();
}


public resolve(nbDisk: number, start: string, middle:string, end:string): void {
  this.nbDisk = this.nbDiskForm.get('nbDisk')?.value;
  if (nbDisk >= 1) {
    this.resolve(this.nbDisk - 1, start, middle, end);
    console.log("Disk " + this.nbDisk + " from " + start + " to " + end);
    this.resolve(this.nbDisk - 1, middle, end, start);
  }
}

public solveHanoi(count: number,from: string,to: string,other: string,move: (from: string, to: string) => void) {
  if (count > 0) {
      this.solveHanoi(count - 1, from, other, to, move)
      move(from, to)
      this.solveHanoi(count - 1, other, to, from, move)
  }
}
}
