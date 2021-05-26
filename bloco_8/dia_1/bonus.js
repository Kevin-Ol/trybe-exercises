const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const calcDragonDamage = (min, strength) => Math.ceil(Math.random()*(strength - min)+min);
  
  const calcWarriorDamage = (strength, weapon) => Math.ceil(Math.random()*((strength * weapon) - strength) + strength);

  const calcMageDamage = (intelligence) => Math.ceil(Math.random()*((intelligence * 2) - intelligence) + intelligence);

  const calcMageMana = (mana) => {
    if (mana < 15) {
        return 'Não possui mana suficiente';
    }
    return mana -= 15;
  }

  const mageStats = (intelligence, mana) => {
      const status = {
          damage: calcMageDamage(intelligence),
          mana: calcMageMana(mana),
      }
      return status
  }


const gameActions = {
    // Crie as HOFs neste objeto.
    warriorTurn: (callback) => {
        const damage = callback(warrior.strength, warrior.weaponDmg);
        warrior.damage = damage;
        dragon.healthPoints -= damage;
    },
    mageTurn: (callback) => {
        const damageAndMana = callback(mage.intelligence, mage.mana);
        mage.damage = damageAndMana.damage;
        mage.mana = damageAndMana.mana;
        dragon.healthPoints -= mage.damage;
    },
    dragonTurn: (callback) => {
        const damage = callback(15, dragon.strength);
        dragon.damage = damage;
        warrior.healthPoints -= damage;
        mage.healthPoints -= damage;
    },
    turnResults: () =>  battleMembers
    
  };

gameActions.dragonTurn(calcDragonDamage);
gameActions.warriorTurn(calcWarriorDamage);
gameActions.mageTurn(mageStats)
console.log('----------------Turn 1 -------------------')
console.log(gameActions.turnResults());
