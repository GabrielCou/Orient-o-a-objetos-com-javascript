class Carro{
    #personagem
    constructor (Motor, Personagem){
            this.motor = Motor;
            this.#personagem = Personagem;
    }

    acelerar(){
        return this.motor.acelerar();
    }

    get perso(){
        return this.#personagem;
    }

    set perso(perso){
        this.#personagem = perso
    }
}

class Motor{

    acelerar(){
        return " ";
    }

}

class motorMuttley extends Motor{
    acelerar(){
        return "HiHiHiHiHi Vrum-vrum  "
    }
}

class motorPenelope extends Motor{
    acelerar(){
        return "Vrum-vrum Coitadinha de Euzinha"
    }
}