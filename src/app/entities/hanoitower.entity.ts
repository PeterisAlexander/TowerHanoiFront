export class HanoiTowerEntity {
    nbDisk?: number;
    start?: string;
    middle? : string;
    end?: string;
    
    constructor( _nbDisk ?: number, _start ?: string, _middle ?: string, _end ?: string) {
        this.nbDisk = _nbDisk
        this.start = _start
        this.middle = _middle
        this.end = _end
    }
}