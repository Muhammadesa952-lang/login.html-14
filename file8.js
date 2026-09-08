// 4. Character RPG Stats & Combat System
class Character {
  constructor(name, className, hp, attackPower) {
    this.name = name;
    this.className = className;
    this.maxHp = hp;
    this.hp = hp;
    this.attackPower = attackPower;
    this.level = 1;
  }

  attack(target) {
    const damage = Math.floor(Math.random() * this.attackPower) + 5;
    console.log(`${this.name} attacks ${target.name} for ${damage} damage!`);
    target.takeDamage(damage);
  }

  takeDamage(amount) {
    this.hp -= amount;
    if (this.hp <= 0) {
      this.hp = 0;
      console.log(`${this.name} has been defeated!`);
    } else {
      console.log(`${this.name} has ${this.hp}/${this.maxHp} HP remaining.`);
    }
  }

  heal() {
    const healAmount = 15;
    this.hp = Math.min(this.maxHp, this.hp + healAmount);
    console.log(
      `${this.name} heals for ${healAmount} HP. Current HP: ${this.hp}`,
    );
  }

  isAlive() {
    return this.hp > 0;
  }
}

// Combat Simulation
const hero = new Character("Aria", "Knight", 100, 20);
const monster = new Character("Goblin", "Monster", 50, 10);

console.log("--- Battle Start ---");
while (hero.isAlive() && monster.isAlive()) {
  hero.attack(monster);
  if (monster.isAlive()) {
    monster.attack(hero);
  }
}
console.log("--- Battle End ---");
