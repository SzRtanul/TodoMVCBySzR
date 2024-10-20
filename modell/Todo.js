export default class Todo{
    constructor(feladatlista = [{feladat: "", statusz: false}]){
        this.feladatlista = feladatlista != null && feladatlista.length() > 0 && feladatlista[0].feladat != ""? feladatlista : [];
    }

    addFeladat(szoveg, status=false){
        this.feladatlista.push({feladat: szoveg, statusz: status});
    }

    deleteFeladat(itemcount){
        this.feladatlista.splice(itemcount, 1);
    }

    setFeladat(itemCount, feladat){
        this.feladatlista[itemCount].feladat = feladat;
    }

    setStatus(itemCount, status){
        this.feladatlista[itemCount].statusz = status;
    }

    getFeladat(itemcount){
        return this.feladatlista[itemcount];
    }

    getFeladatok(){
        return this.feladatlista;
    }
}