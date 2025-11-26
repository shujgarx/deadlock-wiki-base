
import { Category, DeadlockEntity } from '../types';

// Helper for Hero images (using placeholders for now as specific hero URLs weren't provided in detail, 
// but keeping the structure ready if we switch source)
const getHeroImg = (name: string) => {
    return `https://placehold.co/400x300/2c3e50/ffffff?text=${encodeURIComponent(name)}`;
};

// Helper for Item images using the deadlock.one pattern
const getRealItemImage = (name: string, specificSlug?: string) => {
    let slug = specificSlug;
    
    if (!slug) {
        // Default slug generation if not provided
        slug = name.toLowerCase()
            .replace(/'/g, '') // Remove apostrophes
            .replace(/ /g, '_') // Replace spaces with underscores
            .replace(/-/g, '_'); // Replace hyphens with underscores
    }

    // Base URL from the provided HTML examples
    // Note: real tokens are dynamic, so we rely on the fallback in EntityCard if this fails.
    return `https://deadlock.one/sites/default/files/styles/preview_items/public/items/${slug}.png`;
};

const HEROES_DATA: DeadlockEntity[] = [
  {
    name: "Abrams",
    description: "Герой ближнего боя и танк, специализирующийся на затяжных сражениях. Он восстанавливает здоровье от полученного урона и может врываться в гущу врагов.",
    tags: ["Tank", "Melee", "Initiator"],
    stat1: "Low", 
    stat2: "Frontline Brawler",
    tips: "Используйте рывок (2), чтобы прижать врага к стене и оглушить его, затем заряженную атаку ближнего боя.",
    image: getHeroImg("Abrams")
  },
  {
    name: "Seven",
    description: "Маг с мощным AOE-уроном. Способен контролировать зоны и наносить колоссальный урон в командных битвах с помощью своей ульты-шторма.",
    tags: ["DPS", "Nuker", "Crowd Control"],
    stat1: "Medium",
    stat2: "Area Damage",
    tips: "Ваш ультимейт наносит огромный урон, но делает вас неподвижным. Используйте его с высоты или под защитой союзников.",
    image: getHeroImg("Seven")
  },
  {
    name: "Haze",
    description: "Скрытный убийца, полагающийся на незаметность и высокую скорострельность. Может усыплять врагов и становиться невидимой.",
    tags: ["Carry", "Ganker", "Stealth"],
    stat1: "High",
    stat2: "Assassin",
    tips: "Накапливайте стаки пассивной способности перед ультой для максимального урона.",
    image: getHeroImg("Haze")
  },
  {
    name: "Vindicta",
    description: "Снайпер, способная летать и добивать врагов на большом расстоянии. Слаба в ближнем бою, но смертоносна издалека.",
    tags: ["Sniper", "DPS", "Mobile"],
    stat1: "High",
    stat2: "Long Range",
    tips: "Добивайте врагов ультой, чтобы получить дополнительные души для себя и команды.",
    image: getHeroImg("Vindicta")
  },
  {
    name: "Pocket",
    description: "Неуловимый маг с высокой мобильностью. Использует чемодан и плащ для телепортации и нанесения урона по области.",
    tags: ["Nuker", "Mobile", "Elusive"],
    stat1: "High",
    stat2: "Hit & Run",
    tips: "Используйте чемодан (2) для инициации, а плащ (3) для избегания урона в критические моменты.",
    image: getHeroImg("Pocket")
  },
  {
    name: "Infernus",
    description: "Быстрый герой, поджигающий врагов. Наносит периодический урон огнем и может быстро перемещаться по карте.",
    tags: ["DPS", "DoT", "Skirmisher"],
    stat1: "Medium",
    stat2: "Aggressive",
    tips: "Ваш рывок оставляет огненный след. Используйте его, чтобы отрезать пути отступления врагам.",
    image: getHeroImg("Infernus")
  },
  {
    name: "Grey Talon",
    description: "Лучник, использующий ловушки и управляемую духовную сову для разведки и убийств на дальних дистанциях.",
    tags: ["Sniper", "Poke", "Scout"],
    stat1: "High",
    stat2: "Artillery",
    tips: "Заряженный выстрел пробивает несколько целей. Отлично подходит для зачистки волн крипов.",
    image: getHeroImg("Grey+Talon")
  },
  {
    name: "McGinnis",
    description: "Инженер, создающий турели и стены. Отлично подходит для контроля территории и защиты объектов.",
    tags: ["Pusher", "Defense", "Summoner"],
    stat1: "Low",
    stat2: "Zone Control",
    tips: "Размещайте турели на возвышенностях или за укрытиями, чтобы их было сложнее уничтожить.",
    image: getHeroImg("McGinnis")
  },
  {
    name: "Lady Geist",
    description: "Маг, использующий свое здоровье для применения способностей. Может меняться здоровьем с врагами, переворачивая исход дуэли.",
    tags: ["Sustain", "Nuker", "Duelist"],
    stat1: "Medium",
    stat2: "Drain Tank",
    tips: "Используйте Soul Exchange (ульту) когда у вас мало здоровья, а у врага много, чтобы мгновенно восстановиться.",
    image: getHeroImg("Lady+Geist")
  },
  {
    name: "Bebop",
    description: "Робот с крюком, способный притягивать врагов и союзников. Обладает мощным лазером и бомбами-липучками.",
    tags: ["Initiator", "Utility", "Burst"],
    stat1: "Medium",
    stat2: "Hooker",
    tips: "Комбинация: Крюк -> Апперкот -> Бомба. Это почти гарантированное убийство тонких целей.",
    image: getHeroImg("Bebop")
  }
];

const ITEMS_DATA: DeadlockEntity[] = [
  // --- WEAPON (Оружие) ---
  {
    name: "Rapid Rounds",
    description: "Увеличивает скорострельность.",
    tags: ["Weapon", "T1"],
    stat1: "500",
    stat2: "Tier 1",
    itemType: "Weapon",
    image: getRealItemImage("Rapid Rounds", "rapid_rounds")
  },
  {
    name: "High-Velocity Rounds",
    description: "Увеличивает скорость полета пули и урон.",
    tags: ["Weapon", "T1"],
    stat1: "500",
    stat2: "Tier 1",
    itemType: "Weapon",
    image: getRealItemImage("High-Velocity Rounds", "high_velocity_rounds")
  },
  {
    name: "Basic Magazine",
    description: "Увеличивает боезапас и урон от оружия.",
    tags: ["Weapon", "T1"],
    stat1: "500",
    stat2: "Tier 1",
    itemType: "Weapon",
    image: getRealItemImage("Basic Magazine", "basic_magazine")
  },
  {
    name: "Close Quarters",
    description: "Увеличивает урон по целям вблизи.",
    tags: ["Weapon", "T1"],
    stat1: "500",
    stat2: "Tier 1",
    itemType: "Weapon",
    image: getRealItemImage("Close Quarters", "close_quarters")
  },
  {
    name: "Headshot Booster",
    description: "Увеличивает урон при попадании в голову.",
    tags: ["Weapon", "T1"],
    stat1: "500",
    stat2: "Tier 1",
    itemType: "Weapon",
    image: getRealItemImage("Headshot Booster", "headshot_booster")
  },
  {
    name: "Restorative Shot",
    description: "Выстрелы лечат вас при попадании.",
    tags: ["Weapon", "T1"],
    stat1: "500",
    stat2: "Tier 1",
    itemType: "Weapon",
    image: getRealItemImage("Restorative Shot", "restorative_shot")
  },
  {
    name: "Monster Rounds",
    description: "Урон по NPC и объектам.",
    tags: ["Weapon", "T1"],
    stat1: "500",
    stat2: "Tier 1",
    itemType: "Weapon",
    image: getRealItemImage("Monster Rounds", "monster_rounds")
  },
  {
    name: "Hollow Point Ward",
    description: "Увеличивает урон первого выстрела и дает щит.",
    tags: ["Weapon", "T1"],
    stat1: "500",
    stat2: "Tier 1",
    itemType: "Weapon",
    image: getRealItemImage("Hollow Point Ward", "hollow_point")
  },
  {
    name: "Active Reload",
    description: "Позволяет перезарядиться быстрее и получить бафф.",
    tags: ["Weapon", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Weapon",
    image: getRealItemImage("Active Reload", "active_reload")
  },
  {
    name: "Kinetic Dash",
    description: "Улучшает рывок и дает скорострельность после него.",
    tags: ["Weapon", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Weapon",
    image: getRealItemImage("Kinetic Dash", "kinetic_dash")
  },
  {
    name: "Long Range",
    description: "Увеличивает урон по далеким целям.",
    tags: ["Weapon", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Weapon",
    image: getRealItemImage("Long Range", "long_range")
  },
  {
    name: "Melee Charge",
    description: "Усиливает атаку ближнего боя.",
    tags: ["Weapon", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Weapon",
    image: getRealItemImage("Melee Charge", "melee_charge")
  },
  {
    name: "Mystic Shot",
    description: "Периодически добавляет спиритический урон к выстрелам.",
    tags: ["Weapon", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Weapon",
    image: getRealItemImage("Mystic Shot", "mystic_shot")
  },
  {
    name: "Slowing Bullets",
    description: "Попадания замедляют врага.",
    tags: ["Weapon", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Weapon",
    image: getRealItemImage("Slowing Bullets", "slowing_bullets")
  },
  {
    name: "Fleetfoot",
    description: "Снимает замедление и ускоряет.",
    tags: ["Weapon", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Weapon",
    image: getRealItemImage("Fleetfoot", "fleetfoot")
  },
  {
    name: "Berserker",
    description: "Увеличивает урон по мере получения урона.",
    tags: ["Weapon", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Weapon",
    image: getRealItemImage("Berserker", "berserker")
  },
  {
    name: "Swift Striker",
    description: "Пассивно увеличивает скорострельность.",
    tags: ["Weapon", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Weapon",
    image: getRealItemImage("Swift Striker", "swift_striker")
  },
  {
    name: "Tesla Bullets",
    description: "Цепная молния при попадании.",
    tags: ["Weapon", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Weapon",
    image: getRealItemImage("Tesla Bullets", "tesla_bullets")
  },
  {
    name: "Alchemical Fire",
    description: "Бросает колбу с огнем.",
    tags: ["Weapon", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Weapon",
    image: getRealItemImage("Alchemical Fire", "alchemical_fire")
  },
  {
    name: "Heroic Aura",
    description: "Аура на скорострельность и урон.",
    tags: ["Weapon", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Weapon",
    image: getRealItemImage("Heroic Aura", "heroic_aura")
  },
  {
    name: "Headhunter",
    description: "Бонус за хэдшоты и лечение.",
    tags: ["Weapon", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Weapon",
    image: getRealItemImage("Headhunter", "headhunter")
  },
  {
    name: "Point Blank",
    description: "Огромный урон в упор и замедление.",
    tags: ["Weapon", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Weapon",
    image: getRealItemImage("Point Blank", "point_blank")
  },
  {
    name: "Sharpshooter",
    description: "Урон при прицеливании и зум.",
    tags: ["Weapon", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Weapon",
    image: getRealItemImage("Sharpshooter", "sharpshooter")
  },
  {
    name: "Toxic Bullets",
    description: "Накладывает отравление и уменьшение лечения.",
    tags: ["Weapon", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Weapon",
    image: getRealItemImage("Toxic Bullets", "toxic_bullets")
  },
  {
    name: "Burst Fire",
    description: "Увеличивает скорострельность и скорость полета пуль при активации.",
    tags: ["Weapon", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Weapon",
    image: getRealItemImage("Burst Fire", "burst_fire")
  },
  {
    name: "Escalating Resilience",
    description: "Увеличивает сопротивление урону при попаданиях по врагу.",
    tags: ["Weapon", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Weapon",
    image: getRealItemImage("Escalating Resilience", "escalating_resilience")
  },
  {
    name: "Hunters Aura",
    description: "Аура, снижающая сопротивление и скорострельность врагов.",
    tags: ["Weapon", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Weapon",
    image: getRealItemImage("Hunter's Aura", "hunters_aura")
  },
  {
    name: "Intensifying Magazine",
    description: "Урон увеличивается по мере опустошения магазина.",
    tags: ["Weapon", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Weapon",
    image: getRealItemImage("Intensifying Magazine", "intensifying_magazine")
  },
  {
    name: "Pristine Emblem",
    description: "Увеличивает урон по целям с полным здоровьем.",
    tags: ["Weapon", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Weapon",
    image: getRealItemImage("Pristine Emblem", "pristine_emblem")
  },
   {
    name: "Titanic Magazine",
    description: "Значительно увеличивает боезапас.",
    tags: ["Weapon", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Weapon",
    image: getRealItemImage("Titanic Magazine", "titanic_magazine")
  },
  {
    name: "Crippling Headshot",
    description: "Снижает резисты врага при хэдшоте.",
    tags: ["Weapon", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Weapon",
    image: getRealItemImage("Crippling Headshot", "crippling_headshot")
  },
  {
    name: "Frenzy",
    description: "Бонусы при низком здоровье.",
    tags: ["Weapon", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Weapon",
    image: getRealItemImage("Frenzy", "frenzy")
  },
  {
    name: "Glass Cannon",
    description: "Меньше HP, больше урона.",
    tags: ["Weapon", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Weapon",
    image: getRealItemImage("Glass Cannon", "glass_cannon")
  },
  {
    name: "Lucky Shot",
    description: "Шанс на критический урон и замедление.",
    tags: ["Weapon", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Weapon",
    image: getRealItemImage("Lucky Shot", "lucky_shot")
  },
  {
    name: "Ricochet",
    description: "Пули отскакивают во врагов.",
    tags: ["Weapon", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Weapon",
    image: getRealItemImage("Ricochet", "ricochet")
  },
  {
    name: "Silencer",
    description: "Атака накладывает безмолвие.",
    tags: ["Weapon", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Weapon",
    image: getRealItemImage("Silencer", "silencer")
  },
  {
    name: "Siphon Bullets",
    description: "Крадет здоровье при стрельбе.",
    tags: ["Weapon", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Weapon",
    image: getRealItemImage("Siphon Bullets", "siphon_bullets")
  },
  {
    name: "Spiritual Overflow",
    description: "Преобразует спиритическую силу в скорострельность.",
    tags: ["Weapon", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Weapon",
    image: getRealItemImage("Spiritual Overflow", "spiritual_overflow")
  },
  {
    name: "Vampiric Burst",
    description: "Активный вампиризм и скорострельность.",
    tags: ["Weapon", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Weapon",
    image: getRealItemImage("Vampiric Burst", "vampiric_burst")
  },

  // --- VITALITY (Выживаемость) ---
  {
    name: "Sprint Boots",
    description: "Увеличивает скорость бега.",
    tags: ["Vitality", "T1"],
    stat1: "500",
    stat2: "Tier 1",
    itemType: "Vitality",
    image: getRealItemImage("Sprint Boots", "sprint_boots")
  },
  {
    name: "Healing Rite",
    description: "Активный: лечит цель.",
    tags: ["Vitality", "T1"],
    stat1: "500",
    stat2: "Tier 1",
    itemType: "Vitality",
    image: getRealItemImage("Healing Rite", "healing_rite")
  },
  {
    name: "Extra Health",
    description: "Бонус к здоровью.",
    tags: ["Vitality", "T1"],
    stat1: "500",
    stat2: "Tier 1",
    itemType: "Vitality",
    image: getRealItemImage("Extra Health", "extra_health")
  },
  {
    name: "Extra Regen",
    description: "Регенерация здоровья.",
    tags: ["Vitality", "T1"],
    stat1: "500",
    stat2: "Tier 1",
    itemType: "Vitality",
    image: getRealItemImage("Extra Regen", "extra_regen")
  },
  {
    name: "Extra Stamina",
    description: "Бонус к стамине.",
    tags: ["Vitality", "T1"],
    stat1: "500",
    stat2: "Tier 1",
    itemType: "Vitality",
    image: getRealItemImage("Extra Stamina", "extra_stamina")
  },
  {
    name: "Melee Lifesteal",
    description: "Вампиризм от атак ближнего боя.",
    tags: ["Vitality", "T1"],
    stat1: "500",
    stat2: "Tier 1",
    itemType: "Vitality",
    image: getRealItemImage("Melee Lifesteal", "melee_lifesteal")
  },
  {
    name: "Enduring Spirit",
    description: "Здоровье и спиритический вампиризм.",
    tags: ["Vitality", "T1"],
    stat1: "500",
    stat2: "Tier 1",
    itemType: "Vitality",
    image: getRealItemImage("Enduring Spirit", "enduring_spirit")
  },
  {
    name: "Bullet Armor",
    description: "Сопротивление пулям.",
    tags: ["Vitality", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Vitality",
    image: getRealItemImage("Bullet Armor", "bullet_armor")
  },
  {
    name: "Spirit Armor",
    description: "Сопротивление спиритизму.",
    tags: ["Vitality", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Vitality",
    image: getRealItemImage("Spirit Armor", "spirit_armor")
  },
  {
    name: "Debuff Reducer",
    description: "Снижает длительность негативных эффектов.",
    tags: ["Vitality", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Vitality",
    image: getRealItemImage("Debuff Reducer", "debuff_reducer")
  },
  {
    name: "Enchanter's Barrier",
    description: "Щит от спиритического урона и бонус к спиритизму.",
    tags: ["Vitality", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Vitality",
    image: getRealItemImage("Enchanter's Barrier", "enchanters_emblem")
  },
  {
    name: "Enduring Speed",
    description: "Бонус к скорости и сопротивление замедлению.",
    tags: ["Vitality", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Vitality",
    image: getRealItemImage("Enduring Speed", "enduring_speed")
  },
  {
    name: "Healbane",
    description: "Снижает лечение врагов.",
    tags: ["Vitality", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Vitality",
    image: getRealItemImage("Healbane", "healbane")
  },
  {
    name: "Healing Booster",
    description: "Усиливает входящее и исходящее лечение.",
    tags: ["Vitality", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Vitality",
    image: getRealItemImage("Healing Booster", "healing_booster")
  },
  {
    name: "Reactive Barrier",
    description: "Щит при получении контроля.",
    tags: ["Vitality", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Vitality",
    image: getRealItemImage("Reactive Barrier", "reactive_barrier")
  },
  {
    name: "Combat Barrier",
    description: "Щит от пуль и бонус к урону оружия.",
    tags: ["Vitality", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Vitality",
    image: getRealItemImage("Combat Barrier", "battle_vest")
  },
  {
    name: "Health Nova",
    description: "Лечит союзников вокруг.",
    tags: ["Vitality", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Vitality",
    image: getRealItemImage("Health Nova", "healing_nova")
  },
  {
    name: "Restorative Locket",
    description: "Накапливает заряды для лечения.",
    tags: ["Vitality", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Vitality",
    image: getRealItemImage("Restorative Locket", "restorative_locket")
  },
  {
    name: "Return Fire",
    description: "Возвращает часть полученного урона.",
    tags: ["Vitality", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Vitality",
    image: getRealItemImage("Return Fire", "return_fire")
  },
  {
    name: "Divine Barrier",
    description: "Дает щит и скорость передвижения.",
    tags: ["Vitality", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Vitality",
    image: getRealItemImage("Divine Barrier", "divine_barrier")
  },
  {
    name: "Witchmail",
    description: "Увеличение сопротивления к магии.",
    tags: ["Vitality", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Vitality",
    image: getRealItemImage("Witchmail", "witchmail")
  },
  {
    name: "Healing Tempo",
    description: "Ускорение при лечении.",
    tags: ["Vitality", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Vitality",
    image: getRealItemImage("Healing Tempo", "healing_tempo")
  },
  {
    name: "Fortitude",
    description: "Регенерация вне боя.",
    tags: ["Vitality", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Vitality",
    image: getRealItemImage("Fortitude", "fortitude")
  },
  {
    name: "Lifestrike",
    description: "Удар ближнего боя лечит.",
    tags: ["Vitality", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Vitality",
    image: getRealItemImage("Lifestrike", "lifestrike")
  },
  {
    name: "Majestic Leap",
    description: "Высокий прыжок вверх.",
    tags: ["Vitality", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Vitality",
    image: getRealItemImage("Majestic Leap", "majestic_leap")
  },
  {
    name: "Metal Skin",
    description: "Иммунитет к пулям.",
    tags: ["Vitality", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Vitality",
    image: getRealItemImage("Metal Skin", "metal_skin")
  },
  {
    name: "Rescue Beam",
    description: "Притягивает и лечит союзника.",
    tags: ["Vitality", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Vitality",
    image: getRealItemImage("Rescue Beam", "rescue_beam")
  },
  {
    name: "Superior Stamina",
    description: "Много стамины и быстрый рывок.",
    tags: ["Vitality", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Vitality",
    image: getRealItemImage("Superior Stamina", "stamina_mastery")
  },
  {
    name: "Debuff Remover",
    description: "Снимает негативные эффекты.",
    tags: ["Vitality", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Vitality",
    image: getRealItemImage("Debuff Remover", "debuff_remover")
  },
  {
    name: "Colossus",
    description: "Увеличивает размер и здоровье, дает сопротивление.",
    tags: ["Vitality", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Vitality",
    image: getRealItemImage("Colossus", "colossus")
  },
  {
    name: "Inhibitor",
    description: "Атаки уменьшают урон врага.",
    tags: ["Vitality", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Vitality",
    image: getRealItemImage("Inhibitor", "inhibitor")
  },
  {
    name: "Leech",
    description: "Вампиризм от всего урона.",
    tags: ["Vitality", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Vitality",
    image: getRealItemImage("Leech", "leech")
  },
  {
    name: "Phantom Strike",
    description: "Телепорт к врагу и обезоруживание.",
    tags: ["Vitality", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Vitality",
    image: getRealItemImage("Phantom Strike", "phantom_strike")
  },
  {
    name: "Unstoppable",
    description: "Иммунитет к контролю (BKB).",
    tags: ["Vitality", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Vitality",
    image: getRealItemImage("Unstoppable", "unstoppable")
  },
  {
    name: "Cheat Death",
    description: "Шанс выжить при смертельном уроне.",
    tags: ["Vitality", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Vitality",
    image: getRealItemImage("Cheat Death", "cheat_death")
  },
  {
    name: "Martyr's Plate",
    description: "Перенаправляет урон союзников на себя.",
    tags: ["Vitality", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Vitality",
    image: getRealItemImage("Martyr's Plate", "martyrs_plate")
  },
  {
    name: "Plated Armor",
    description: "Броня с повышенной защитой.",
    tags: ["Vitality", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Vitality",
    image: getRealItemImage("Plated Armor", "plated_armor")
  },
  {
    name: "Juggernaut",
    description: "Превращает в неудержимую силу.",
    tags: ["Vitality", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Vitality",
    image: getRealItemImage("Juggernaut", "juggernaut")
  },

  // --- SPIRIT (Спиритизм) ---
  {
    name: "Rusted Barrel",
    description: "Наносит урон.",
    tags: ["Spirit", "T1"],
    stat1: "500",
    stat2: "Tier 1",
    itemType: "Spirit",
    image: getRealItemImage("Rusted Barrel", "rusted_barrel")
  },
  {
    name: "Mystic Burst",
    description: "Доп. урон к способностям.",
    tags: ["Spirit", "T1"],
    stat1: "500",
    stat2: "Tier 1",
    itemType: "Spirit",
    image: getRealItemImage("Mystic Burst", "mystic_burst")
  },
  {
    name: "Extra Charge",
    description: "Добавляет заряд способности.",
    tags: ["Spirit", "T1"],
    stat1: "500",
    stat2: "Tier 1",
    itemType: "Spirit",
    image: getRealItemImage("Extra Charge", "extra_charge")
  },
  {
    name: "Extra Spirit",
    description: "Увеличивает силу спиритизма.",
    tags: ["Spirit", "T1"],
    stat1: "500",
    stat2: "Tier 1",
    itemType: "Spirit",
    image: getRealItemImage("Extra Spirit", "extra_spirit")
  },
  {
    name: "Mystic Reach",
    description: "Увеличивает дальность/радиус способностей.",
    tags: ["Spirit", "T1"],
    stat1: "500",
    stat2: "Tier 1",
    itemType: "Spirit",
    image: getRealItemImage("Mystic Expansion", "mystic_reach")
  },
  {
    name: "Spirit Strike",
    description: "Удар ближнего боя наносит спиритический урон.",
    tags: ["Spirit", "T1"],
    stat1: "500",
    stat2: "Tier 1",
    itemType: "Spirit",
    image: getRealItemImage("Spirit Strike", "spirit_strike")
  },
  {
    name: "Ammo Scavenger",
    description: "Дает боеприпасы за добивание душ.",
    tags: ["Spirit", "T1"],
    stat1: "500",
    stat2: "Tier 1",
    itemType: "Spirit",
    image: getRealItemImage("Ammo Scavenger", "ammo_scavenger")
  },
  {
    name: "Infuser",
    description: "Активный: усиливает следующую способность.",
    tags: ["Spirit", "T1"],
    stat1: "500",
    stat2: "Tier 1",
    itemType: "Spirit",
    image: getRealItemImage("Infuser", "infuser")
  },
  {
    name: "Mystic Regeneration",
    description: "Регенерация от способностей.",
    tags: ["Spirit", "T1"],
    stat1: "500",
    stat2: "Tier 1",
    itemType: "Spirit",
    image: getRealItemImage("Mystic Regeneration", "mystic_regen")
  },
  {
    name: "Duration Extender",
    description: "Продлевает действие способностей.",
    tags: ["Spirit", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Spirit",
    image: getRealItemImage("Duration Extender", "duration_extender")
  },
  {
    name: "Bullet Resist Shredder",
    description: "Спиритический урон снижает сопротивление пулям.",
    tags: ["Spirit", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Spirit",
    image: getRealItemImage("Bullet Resist Shredder", "bullet_resist_shredder")
  },
  {
    name: "Mystic Vulnerability",
    description: "Снижает сопротивление к спиритизму.",
    tags: ["Spirit", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Spirit",
    image: getRealItemImage("Mystic Vulnerability", "mystic_vulnerability")
  },
  {
    name: "Quicksilver Reload",
    description: "Перезаряжает оружие при использовании способности.",
    tags: ["Spirit", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Spirit",
    image: getRealItemImage("Quicksilver Reload", "quicksilver_reload")
  },
  {
    name: "Suppressor",
    description: "Наносит урон и замедляет скорострельность врага.",
    tags: ["Spirit", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Spirit",
    image: getRealItemImage("Suppressor", "suppressor")
  },
  {
    name: "Cold Front",
    description: "AOE урон и замедление вокруг себя.",
    tags: ["Spirit", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Spirit",
    image: getRealItemImage("Cold Front", "cold_front")
  },
  {
    name: "Decay",
    description: "Снижает лечение и наносит урон.",
    tags: ["Spirit", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Spirit",
    image: getRealItemImage("Decay", "decay")
  },
  {
    name: "Slowing Hex",
    description: "Замедляет врага и запрещает рывки.",
    tags: ["Spirit", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Spirit",
    image: getRealItemImage("Slowing Hex", "slowing_hex")
  },
  {
    name: "Withering Whip",
    description: "Снижает скорострельность и наносит урон.",
    tags: ["Spirit", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Spirit",
    image: getRealItemImage("Withering Whip", "withering_whip")
  },
  {
    name: "Spirit Sap",
    description: "Высасывает силу духа.",
    tags: ["Spirit", "T2"],
    stat1: "1250",
    stat2: "Tier 2",
    itemType: "Spirit",
    image: getRealItemImage("Spirit Sap", "spirit_sap")
  },
  {
    name: "Improved Burst",
    description: "Урон способностей зависит от здоровья врага.",
    tags: ["Spirit", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Spirit",
    image: getRealItemImage("Improved Burst", "tankbuster")
  },
  {
    name: "Improved Reach",
    description: "Значительное увеличение радиуса.",
    tags: ["Spirit", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Spirit",
    image: getRealItemImage("Greater Expansion", "greater_expansion")
  },
  {
    name: "Improved Spirit",
    description: "Большой бонус к силе спиритизма.",
    tags: ["Spirit", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Spirit",
    image: getRealItemImage("Improved Spirit", "improved_spirit")
  },
  {
    name: "Rapid Recharge",
    description: "Быстрое восстановление зарядов.",
    tags: ["Spirit", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Spirit",
    image: getRealItemImage("Rapid Recharge", "rapid_recharge")
  },
  {
    name: "Superior Cooldown",
    description: "Сильное сокращение перезарядки.",
    tags: ["Spirit", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Spirit",
    image: getRealItemImage("Superior Cooldown", "superior_cooldown")
  },
  {
    name: "Superior Duration",
    description: "Сильное увеличение длительности.",
    tags: ["Spirit", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Spirit",
    image: getRealItemImage("Superior Duration", "superior_duration")
  },
  {
    name: "Surge of Power",
    description: "Бафф при использовании способностей.",
    tags: ["Spirit", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Spirit",
    image: getRealItemImage("Surge of Power", "surge_of_power")
  },
  {
    name: "Torment Pulse",
    description: "Периодический урон вокруг героя.",
    tags: ["Spirit", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Spirit",
    image: getRealItemImage("Torment Pulse", "torment_pulse")
  },
  {
    name: "Silence Glyph",
    description: "Накладывает сайленс по области.",
    tags: ["Spirit", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Spirit",
    image: getRealItemImage("Silence Wave", "silence_glyph")
  },
  {
    name: "Knockdown",
    description: "Подбрасывает врага в воздух.",
    tags: ["Spirit", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Spirit",
    image: getRealItemImage("Knockdown", "knockdown")
  },
  {
    name: "Mystic Slow",
    description: "Способности замедляют врагов.",
    tags: ["Spirit", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Spirit",
    image: getRealItemImage("Mystic Slow", "mystic_slow")
  },
  {
    name: "Arcane Surge",
    description: "Колдовской порыв.",
    tags: ["Spirit", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Spirit",
    image: getRealItemImage("Arcane Surge", "arcane_surge")
  },
  {
    name: "Spirit Snatch",
    description: "Похищение спиритизма.",
    tags: ["Spirit", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Spirit",
    image: getRealItemImage("Spirit Snatch", "spirit_snatch")
  },
  {
    name: "Improved Cooldown",
    description: "Сжатая перезарядка умений.",
    tags: ["Spirit", "T3"],
    stat1: "3000",
    stat2: "Tier 3",
    itemType: "Spirit",
    image: getRealItemImage("Compress Cooldown", "improved_cooldown")
  },
  {
    name: "Boundless Spirit",
    description: "Огромный бонус к силе спиритизма.",
    tags: ["Spirit", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Spirit",
    image: getRealItemImage("Boundless Spirit", "boundless_spirit")
  },
  {
    name: "Curse",
    description: "Превращает врага в животное (контроль).",
    tags: ["Spirit", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Spirit",
    image: getRealItemImage("Curse", "curse")
  },
  {
    name: "Diviner's Kevlar",
    description: "Щит и спиритизм при использовании ульты.",
    tags: ["Spirit", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Spirit",
    image: getRealItemImage("Diviner's Kevlar", "diviners_kevlar")
  },
  {
    name: "Echo Shard",
    description: "Сбрасывает перезарядку последней способности.",
    tags: ["Spirit", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Spirit",
    image: getRealItemImage("Echo Shard", "echo_shard")
  },
  {
    name: "Magic Carpet",
    description: "Полет и иммунитет к замедлению.",
    tags: ["Spirit", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Spirit",
    image: getRealItemImage("Magic Carpet", "magic_carpet")
  },
  {
    name: "Mystic Reverb",
    description: "Замедление и урон по области от способностей.",
    tags: ["Spirit", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Spirit",
    image: getRealItemImage("Mystic Reverb", "mystic_reverb")
  },
  {
    name: "Refresher",
    description: "Сбрасывает перезарядку всех умений.",
    tags: ["Spirit", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Spirit",
    image: getRealItemImage("Refresher", "refresher")
  },
  {
    name: "Escalating Exposure",
    description: "Каждое попадание способностью увеличивает получаемый врагом спиритический урон.",
    tags: ["Spirit", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Spirit",
    image: getRealItemImage("Escalating Exposure", "escalating_exposure")
  },
  {
    name: "Lightning Scroll",
    description: "Свиток молнии.",
    tags: ["Spirit", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Spirit",
    image: getRealItemImage("Lightning Scroll", "lightning_scroll")
  },
  {
    name: "Scourge",
    description: "Кара.",
    tags: ["Spirit", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Spirit",
    image: getRealItemImage("Scourge", "scourge")
  },
  {
    name: "Vortex Web",
    description: "Паутинный вихрь.",
    tags: ["Spirit", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Spirit",
    image: getRealItemImage("Vortex Web", "vortex_web")
  },
  {
    name: "Arctic Blast",
    description: "Арктический взрыв.",
    tags: ["Spirit", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Spirit",
    image: getRealItemImage("Arctic Blast", "arctic_blast")
  },
  {
    name: "Mercurial Magnum",
    description: "Ртутный «Магнум».",
    tags: ["Spirit", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Spirit",
    image: getRealItemImage("Mercurial Magnum", "mercurial_magnum")
  },
  {
    name: "Spirit Burn",
    description: "Спиритический ожог.",
    tags: ["Spirit", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Spirit",
    image: getRealItemImage("Spirit Burn", "spirit_burn")
  },
  {
    name: "Transcendent Cooldown",
    description: "Трансцендентная перезарядка.",
    tags: ["Spirit", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Spirit",
    image: getRealItemImage("Transcendent Cooldown", "transcendent_cooldown")
  },
  {
    name: "Focus Lens",
    description: "Фокусная линза.",
    tags: ["Spirit", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Spirit",
    image: getRealItemImage("Focus Lens", "focus_lens")
  },
  {
    name: "Ethereal Shift",
    description: "Развоплощение.",
    tags: ["Spirit", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Spirit",
    image: getRealItemImage("Ethereal Shift", "ethereal_shift")
  },
  {
    name: "Radiant Regeneration",
    description: "Сияющее восстановление.",
    tags: ["Spirit", "T4"],
    stat1: "6000+",
    stat2: "Tier 4",
    itemType: "Spirit",
    image: getRealItemImage("Radiant Regeneration", "radiant_regeneration")
  }
];

const TERMS_DATA: DeadlockEntity[] = [
  {
    name: "Souls (Души)",
    description: "Основная валюта в игре. Души используются для покупки предметов и прокачки способностей. Выпадают из крипов и героев.",
    tags: ["Economy"],
    image: "https://deadlock.one/sites/default/files/misc/souls.png"
  },
  {
    name: "Patron (Покровитель)",
    description: "Главная цель игры. Находится на базе каждой команды. Уничтожение вражеского Покровителя приносит победу.",
    tags: ["Objective"],
    image: "https://placehold.co/400x300/2c3e50/ffffff?text=Patron"
  },
  {
    name: "Mid Boss (Босс)",
    description: "Мощный нейтральный крип в центре карты. Убийство дает команде значительные бонусы.",
    tags: ["Objective", "Boss"],
    image: "https://placehold.co/400x300/2c3e50/ffffff?text=Mid+Boss"
  },
  {
    name: "Urn (Урна)",
    description: "Объект, который появляется на карте. Доставка урны к точке сброса дает всей команде души.",
    tags: ["Objective"],
    image: "https://placehold.co/400x300/2c3e50/ffffff?text=Urn"
  }
];

const BUILDS_DATA: DeadlockEntity[] = [
  {
    name: "Abrams - Бессмертный Танк",
    description: "Сборка, фокусирующаяся на регенерации и ближнем бое. Позволяет выживать в центре сражения.",
    stat1: "Abrams",
    stat2: "Melee Lifesteal, Extra Health",
    tags: ["Tank", "Melee"],
    image: getHeroImg("Abrams")
  },
  {
    name: "Seven - Грозовой Шторм",
    description: "Максимизация урона от ультимейта и способностей по области.",
    stat1: "Seven",
    stat2: "Mystic Burst, Spirit Reach",
    tags: ["DPS", "Nuker"],
    image: getHeroImg("Seven")
  },
  {
    name: "Haze - Скрытный Убийца",
    description: "Упор на урон от пуль и скорость атаки для быстрой ликвидации целей.",
    stat1: "Haze",
    stat2: "Ricochet, Silencer",
    tags: ["Carry", "Stealth"],
    image: getHeroImg("Haze")
  },
  {
    name: "Vindicta - Снайпер",
    description: "Сборка для максимального урона с дальней дистанции. Требует хорошего позиционирования.",
    stat1: "Vindicta",
    stat2: "Long Range, Headshot Booster",
    tags: ["Sniper", "Glass Cannon"],
    image: getHeroImg("Vindicta")
  }
];

export const fetchDeadlockData = async (category: Category): Promise<DeadlockEntity[]> => {
  await new Promise(resolve => setTimeout(resolve, 300));

  switch (category) {
    case Category.HEROES:
      return HEROES_DATA;
    case Category.ITEMS:
      return ITEMS_DATA;
    case Category.TERMS:
      return TERMS_DATA;
    case Category.BUILDS:
      return BUILDS_DATA;
    default:
      return [];
  }
};