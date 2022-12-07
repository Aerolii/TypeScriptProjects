// 抽象类

abstract class StreetFighter {
  move() {}

  fight() {
    console.log(`${this.name} attacks with ${this.specialAttack()}`)
  }

  abstract get name(): string

  abstract specialAttack(): string
}

class Ryu extends StreetFighter {
  specialAttack(): string {
    return 'Hadoken'
  }

  get name() {
    return 'Ryu'
  }
}

class ChunLi extends StreetFighter {
  specialAttack(): string {
    return 'Chun-Li'
  }

  get name() {
    return 'Lightning Kick'
  }
}

const ryu = new Ryu()

console.log(ryu.specialAttack()) // Hadoken

ryu.fight() // Ryu attacks with Hadoken

const chunli = new ChunLi()

console.log(chunli.specialAttack()) // Chun-Li

chunli.fight() // Lightning Kick attacks with Chun-Li
