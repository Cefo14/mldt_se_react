export default {
  MONEY: {
    offset: 0x91C, // short
    bits: 16,
  },

  MARIO: {
    CURENT_LV: {
      offset: 0x77B, // tiny
      bits: 8,
    },
    CURENT_EXP: {
      offset: 0x778, // short
      bits: 16,
    },
    NEXT_EXP: {
      offset: 0x77C, // short
      bits: 16,
    },
    CURENT_HP: {
      offset: 0x74E, // short
      bits: 16,
    },
    MAX_HP: {
      offset: 0x752, // short
      bits: 16,
    },
    CURENT_BP: {
      offset: 0x750, // short
      bits: 16,
    },
    MAX_BP: {
      offset: 0x754, // short
      bits: 16,
    },
    POW: {
      offset: 0x756, // short
      bits: 16,
    },
    DEF: {
      offset: 0x758, // short
      bits: 16,
    },
    SPEED: {
      offset: 0x75A, // short
      bits: 16,
    },
    MUSTACHE: {
      offset: 0x75C, // short
      bits: 16,
    },
  },

  LUIGI: {
    CURENT_LV: {
      offset: 0x863, // tiny
      bits: 8,
    },
    CURENT_EXP: {
      offset: 0x860, // short
      bits: 16,
    },
    NEXT_EXP: {
      offset: 0x864, // short
      bits: 16,
    },
    CURENT_HP: {
      offset: 0x836, // short
      bits: 16,
    },
    MAX_HP: {
      offset: 0x83A, // short
      bits: 16,
    },
    CURENT_BP: {
      offset: 0x838, // short
      bits: 16,
    },
    MAX_BP: {
      offset: 0x83C, // short
      bits: 16,
    },
    POW: {
      offset: 0x83E, // short
      bits: 16,
    },
    DEF: {
      offset: 0x840, // short
      bits: 16,
    },
    SPEED: {
      offset: 0x842, // short
      bits: 16,
    },
    MUSTACHE: {
      offset: 0x844, // short
      bits: 16,
    },
  },

  ITEMS: {
    MUSHROOM: {
      offset: 0x920,
      bits: 8,
    },
    SUPER_MUSHROOM: {
      offset: 0x921,
      bits: 8,
    },
    ULTRA_MUSHROOM: {
      offset: 0x922,
      bits: 8,
    },
    MAX_MUSHROOM: {
      offset: 0x923,
      bits: 8,
    },
    NUT: {
      offset: 0x924,
      bits: 8,
    },
    SUPER_NUT: {
      offset: 0x925,
      bits: 8,
    },
    ULTRA_NUT: {
      offset: 0x926,
      bits: 8,
    },
    MAX_NUT: {
      offset: 0x927,
      bits: 8,
    },
    SYRUP_JAR: {
      offset: 0x928,
      bits: 8,
    },
    SUPER_SYRUP_JAR: {
      offset: 0x929,
      bits: 8,
    },
    ULTRA_SYRUP_JAR: {
      offset: 0x92a,
      bits: 8,
    },
    MAX_SYRUP_JAR: {
      offset: 0x92b,
      bits: 8,
    },
    CANDY: {
      offset: 0x92c,
      bits: 8,
    },
    SUPER_CANDY: {
      offset: 0x92d,
      bits: 8,
    },
    ULTRA_CANDY: {
      offset: 0x92e,
      bits: 8,
    },
    MAX_CANDY: {
      offset: 0x92f,
      bits: 8,
    },
    '1P_MUSHROOM': {
      offset: 0x930,
      bits: 8,
    },
    '1P_DELUXE': {
      offset: 0x931,
      bits: 8,
    },
    REFRESHING_HERB: {
      offset: 0x932,
      bits: 8,
    },
    TAUNT_BALL: {
      offset: 0x939,
      bits: 8,
    },
    SHOCK_BOMB: {
      offset: 0x93a,
      bits: 8,
    },
    BOO_BISCUIT: {
      offset: 0x93b,
      bits: 8,
    },
    SECRET_BOX: {
      offset: 0x93c,
      bits: 8,
    },
  }, // tiny

  BEANS: {
    HP_BEAN: {
      offset: 0x933,
      bits: 8,
    },
    BROS_BEAN: {
      offset: 0x934,
      bits: 8,
    },
    POWER_BEAN: {
      offset: 0x935,
      bits: 8,
    },
    DEFENSE_BEAN: {
      offset: 0x936,
      bits: 8,
    },
    SPPED_BEAN: {
      offset: 0x937,
      bits: 8,
    },
    STACHE_BEAN: {
      offset: 0x938,
      bits: 8,
    },
    SUPER_HP_BEAN: {
      offset: 0x93d,
      bits: 8,
    },
    SUPER_BROS_BEAN: {
      offset: 0x93e,
      bits: 8,
    },
    SUPER_POWER_BEAN: {
      offset: 0x93f,
      bits: 8,
    },
    SUPER_DEFENSE_BEAN: {
      offset: 0x940,
      bits: 8,
    },
    SUPER_SPPED_BEAN: {
      offset: 0x941,
      bits: 8,
    },
    SUPER_STACHE_BEAN: {
      offset: 0x942,
      bits: 8,
    },
  }, // tiny

  BOOTS: {
    BOOT_GASTADA: {
      offset: 0x948,
      bits: 8,
    },
    BOOT_BARATA: {
      offset: 0x949,
      bits: 8,
    },
    BOOT_ORDINARIA: {
      offset: 0x94a,
      bits: 8,
    },
    BOOT_PICNIC: {
      offset: 0x94b,
      bits: 8,
    },
    BOOT_BASICAS: {
      offset: 0x94c,
      bits: 8,
    },
    BOOT_CANON: {
      offset: 0x94d,
      bits: 8,
    },
    BOOT_CERTERA: {
      offset: 0x94e,
      bits: 8,
    },
    BOOT_ACECHO: {
      offset: 0x94f,
      bits: 8,
    },
    BOOT_MONEDAS: {
      offset: 0x950,
      bits: 8,
    },
    BOOT_EXPLORADOR: {
      offset: 0x951,
      bits: 8,
    },
    BOOT_EXP: {
      offset: 0x952,
      bits: 8,
    },
    BOOT_JUSTICIERAS: {
      offset: 0x953,
      bits: 8,
    },
    BOOT_CORAZON: {
      offset: 0x954,
      bits: 8,
    },
    BOOT_ELITE: {
      offset: 0x955,
      bits: 8,
    },
    BOOT_ANTI_AEREAS: {
      offset: 0x956,
      bits: 8,
    },
    BOOT_ACCION: {
      offset: 0x957,
      bits: 8,
    },
    BOOT_TANDEM: {
      offset: 0x958,
      bits: 8,
    },
    BOOT_UNICAS: {
      offset: 0x959,
      bits: 8,
    },
    BOOT_VIDRIO: {
      offset: 0x95a,
      bits: 8,
    },
    SUPER_BOOT_MONEDAS: {
      offset: 0x95b,
      bits: 8,
    },
    SUPER_BOOT_CANON: {
      offset: 0x95c,
      bits: 8,
    },
    BOOT_FAMOSAS: {
      offset: 0x95d,
      bits: 8,
    },
    SUPER_BOOT_EXP: {
      offset: 0x95e,
      bits: 8,
    },
    SUPER_BOOT_ANTI_AEREAS: {
      offset: 0x95f,
      bits: 8,
    },
    SUPER_BOOT_BASICAS: {
      offset: 0x960,
      bits: 8,
    },
    BOOT_ESTRELLA: {
      offset: 0x961,
      bits: 8,
    },
    BOOT_OSCURAS: {
      offset: 0x962,
      bits: 8,
    },
    BOOT_CRISTAL: {
      offset: 0x963,
      bits: 8,
    },
    BOOT_GRANJERO: {
      offset: 0x964,
      bits: 8,
    },
    BOOT_MAESTRA: {
      offset: 0x965,
      bits: 8,
    },
    BOOT_EXCELENTE: {
      offset: 0x966,
      bits: 8,
    },
    BOOT_EXPERTAS: {
      offset: 0x967,
      bits: 8,
    },
    BOOT_MONTANA: {
      offset: 0x968,
      bits: 8,
    },
    BOOT_CUMPLEANOS: {
      offset: 0x969,
      bits: 8,
    },
    BOOT_MINI: {
      offset: 0x96a,
      bits: 8,
    },
  }, // tiny

  HAMMERS: {
    HAMMER_GASTADO: {
      offset: 0x96b,
      bits: 8,
    },
    HAMMER_BARATO: {
      offset: 0x96c,
      bits: 8,
    },
    HAMMER_ORDINARIO: {
      offset: 0x96d,
      bits: 8,
    },
    HAMMER_PICNIC: {
      offset: 0x96e,
      bits: 8,
    },
    HAMMER_BASICO: {
      offset: 0x96f,
      bits: 8,
    },
    HAMMER_CANON: {
      offset: 0x970,
      bits: 8,
    },
    HAMMER_CERTERO: {
      offset: 0x971,
      bits: 8,
    },
    HAMMER_BATALLA: {
      offset: 0x972,
      bits: 8,
    },
    HAMMER_USADO: {
      offset: 0x973,
      bits: 8,
    },
    HAMMER_EXPLORADOR: {
      offset: 0x974,
      bits: 8,
    },
    HAMMER_BLANDENGUE: {
      offset: 0x975,
      bits: 8,
    },
    HAMMER_JUSTICIERO: {
      offset: 0x976,
      bits: 8,
    },
    HAMMER_LLAMARADA: {
      offset: 0x977,
      bits: 8,
    },
    HAMMER_SUPERIOR: {
      offset: 0x978,
      bits: 8,
    },
    HAMMER_ROMPE_ESPINA: {
      offset: 0x979,
      bits: 8,
    },
    HAMMER_ACCION: {
      offset: 0x97a,
      bits: 8,
    },
    HAMMER_REMOLINO: {
      offset: 0x97b,
      bits: 8,
    },
    HAMMER_UNICO: {
      offset: 0x97c,
      bits: 8,
    },
    HAMMER_VIDRIO: {
      offset: 0x97d,
      bits: 8,
    },
    SUPER_HAMMER_USADO: {
      offset: 0x97e,
      bits: 8,
    },
    SUPER_HAMMER_CANON: {
      offset: 0x97f,
      bits: 8,
    },
    HAMMER_FAMOSO: {
      offset: 0x980,
      bits: 8,
    },
    SUPER_HAMMER_LLAMARADA: {
      offset: 0x981,
      bits: 8,
    },
    SUPER_HAMMER_ROMPE_ESPINA: {
      offset: 0x982,
      bits: 8,
    },
    SUPER_HAMMER_BASICOS: {
      offset: 0x983,
      bits: 8,
    },
    HAMMER_ESTRELLA: {
      offset: 0x984,
      bits: 8,
    },
    HAMMER_OSCURO: {
      offset: 0x985,
      bits: 8,
    },
    HAMMER_CRISTAL: {
      offset: 0x986,
      bits: 8,
    },
    SUPER_HAMMER_BLANDENGUE: {
      offset: 0x987,
      bits: 8,
    },
    HAMMER_MAESTRO: {
      offset: 0x988,
      bits: 8,
    },
    HAMMER_EXCELENTE: {
      offset: 0x989,
      bits: 8,
    },
    HAMMER_EXPERTO: {
      offset: 0x98a,
      bits: 8,
    },
    HAMMER_DORADO: {
      offset: 0x98b,
      bits: 8,
    },
    HAMMER_CUMPLEANOS: {
      offset: 0x98c,
      bits: 8,
    },
    HAMMER_MINI: {
      offset: 0x98d,
      bits: 8,
    },
  }, // tiny

  WEARS: {
    WEAR_1: {
      offset: 0x98e,
      bits: 8,
    },
    WEAR_2: {
      offset: 0x98f,
      bits: 8,
    },
    WEAR_3: {
      offset: 0x990,
      bits: 8,
    },
    WEAR_4: {
      offset: 0x991,
      bits: 8,
    },
    WEAR_5: {
      offset: 0x992,
      bits: 8,
    },
    WEAR_6: {
      offset: 0x993,
      bits: 8,
    },
    WEAR_7: {
      offset: 0x994,
      bits: 8,
    },
    WEAR_8: {
      offset: 0x995,
      bits: 8,
    },
    WEAR_9: {
      offset: 0x996,
      bits: 8,
    },
    WEAR_10: {
      offset: 0x997,
      bits: 8,
    },
    WEAR_11: {
      offset: 0x998,
      bits: 8,
    },
    WEAR_12: {
      offset: 0x999,
      bits: 8,
    },
    WEAR_13: {
      offset: 0x99a,
      bits: 8,
    },
    WEAR_14: {
      offset: 0x99b,
      bits: 8,
    },
    WEAR_15: {
      offset: 0x99c,
      bits: 8,
    },
    WEAR_16: {
      offset: 0x99d,
      bits: 8,
    },
    WEAR_17: {
      offset: 0x99e,
      bits: 8,
    },
    WEAR_18: {
      offset: 0x99f,
      bits: 8,
    },
    WEAR_19: {
      offset: 0x9a0,
      bits: 8,
    },
    WEAR_20: {
      offset: 0x9a1,
      bits: 8,
    },
    WEAR_21: {
      offset: 0x9a2,
      bits: 8,
    },
    WEAR_22: {
      offset: 0x9a3,
      bits: 8,
    },
    WEAR_23: {
      offset: 0x9a4,
      bits: 8,
    },
    WEAR_24: {
      offset: 0x9a5,
      bits: 8,
    },
    WEAR_25: {
      offset: 0x9a6,
      bits: 8,
    },
    WEAR_26: {
      offset: 0x9a7,
      bits: 8,
    },
    WEAR_27: {
      offset: 0x9a8,
      bits: 8,
    },
    WEAR_28: {
      offset: 0x9a9,
      bits: 8,
    },
    WEAR_29: {
      offset: 0x9aa,
      bits: 8,
    },
    WEAR_30: {
      offset: 0x9ab,
      bits: 8,
    },
  }, // tiny

  GLOVES: {
    GLOVE_1: {
      offset: 0x9ac,
      bits: 8,
    },
    GLOVE_2: {
      offset: 0x9ad,
      bits: 8,
    },
    GLOVE_3: {
      offset: 0x9ae,
      bits: 8,
    },
    GLOVE_4: {
      offset: 0x9af,
      bits: 8,
    },
    GLOVE_5: {
      offset: 0x9b0,
      bits: 8,
    },
    GLOVE_6: {
      offset: 0x9b1,
      bits: 8,
    },
    GLOVE_7: {
      offset: 0x9b2,
      bits: 8,
    },
    GLOVE_8: {
      offset: 0x9b3,
      bits: 8,
    },
    GLOVE_9: {
      offset: 0x9b4,
      bits: 8,
    },
    GLOVE_10: {
      offset: 0x9b5,
      bits: 8,
    },
    GLOVE_11: {
      offset: 0x9b6,
      bits: 8,
    },
    GLOVE_12: {
      offset: 0x9b7,
      bits: 8,
    },
    GLOVE_13: {
      offset: 0x9b8,
      bits: 8,
    },
    GLOVE_14: {
      offset: 0x9b9,
      bits: 8,
    },
    GLOVE_15: {
      offset: 0x9ba,
      bits: 8,
    },
    GLOVE_16: {
      offset: 0x9bb,
      bits: 8,
    },
    GLOVE_17: {
      offset: 0x9bc,
      bits: 8,
    },
    GLOVE_18: {
      offset: 0x9bd,
      bits: 8,
    },
    GLOVE_19: {
      offset: 0x9be,
      bits: 8,
    },
    GLOVE_20: {
      offset: 0x9bf,
      bits: 8,
    },
    GLOVE_21: {
      offset: 0x9c0,
      bits: 8,
    },
    GLOVE_22: {
      offset: 0x9c1,
      bits: 8,
    },
    GLOVE_23: {
      offset: 0x9c2,
      bits: 8,
    },
    GLOVE_24: {
      offset: 0x9c3,
      bits: 8,
    },
    GLOVE_25: {
      offset: 0x9c4,
      bits: 8,
    },
    GLOVE_26: {
      offset: 0x9c5,
      bits: 8,
    },
    GLOVE_27: {
      offset: 0x9c6,
      bits: 8,
    },
    GLOVE_28: {
      offset: 0x9c7,
      bits: 8,
    },
    GLOVE_29: {
      offset: 0x9c8,
      bits: 8,
    },
    GLOVE_30: {
      offset: 0x9c9,
      bits: 8,
    },
  },

  AMULETS: {
    AMULET_1: {
      offset: 0x9ca,
      bits: 8,
    },
    AMULET_2: {
      offset: 0x9cb,
      bits: 8,
    },
    AMULET_3: {
      offset: 0x9cc,
      bits: 8,
    },
    AMULET_4: {
      offset: 0x9cd,
      bits: 8,
    },
    AMULET_5: {
      offset: 0x9ce,
      bits: 8,
    },
    AMULET_6: {
      offset: 0x9cf,
      bits: 8,
    },
    AMULET_7: {
      offset: 0x9d0,
      bits: 8,
    },
    AMULET_8: {
      offset: 0x9d1,
      bits: 8,
    },
    AMULET_9: {
      offset: 0x9d2,
      bits: 8,
    },
    AMULET_10: {
      offset: 0x9d3,
      bits: 8,
    },
    AMULET_11: {
      offset: 0x9d4,
      bits: 8,
    },
    AMULET_12: {
      offset: 0x9d5,
      bits: 8,
    },
    AMULET_13: {
      offset: 0x9d6,
      bits: 8,
    },
    AMULET_14: {
      offset: 0x9d7,
      bits: 8,
    },
    AMULET_15: {
      offset: 0x9d8,
      bits: 8,
    },
    AMULET_16: {
      offset: 0x9d9,
      bits: 8,
    },
    AMULET_17: {
      offset: 0x9da,
      bits: 8,
    },
    AMULET_18: {
      offset: 0x9db,
      bits: 8,
    },
    AMULET_19: {
      offset: 0x9dc,
      bits: 8,
    },
    AMULET_20: {
      offset: 0x9dd,
      bits: 8,
    },
    AMULET_21: {
      offset: 0x9de,
      bits: 8,
    },
    AMULET_22: {
      offset: 0x9df,
      bits: 8,
    },
    AMULET_23: {
      offset: 0x9e0,
      bits: 8,
    },
    AMULET_24: {
      offset: 0x9e1,
      bits: 8,
    },
    AMULET_25: {
      offset: 0x9e2,
      bits: 8,
    },
    AMULET_26: {
      offset: 0x9e3,
      bits: 8,
    },
    AMULET_27: {
      offset: 0x9e4,
      bits: 8,
    },
    AMULET_28: {
      offset: 0x9e5,
      bits: 8,
    },
    AMULET_29: {
      offset: 0x9e6,
      bits: 8,
    },
    AMULET_30: {
      offset: 0x9e7,
      bits: 8,
    },
  }, // tiny
};

// eslint-disable-next-line no-unused-vars
const RANKS = {
  shell: {
    lv: 7,
    exp: [1220, 1290], // [0] = Mario [1] = Luigi
    next: 1,
  },

  flower: {
    lv: 15,
    exp: [9930, 10210], // [0] = Mario [1] = Luigi
    next: 1,
  },

  star: {
    lv: 25,
    exp: [49490, 50560], // [0] = Mario [1] = Luigi
    next: 1,
  },

  rainbow: {
    lv: 39,
    exp: [231160, 233360], // [0] = Mario [1] = Luigi
    next: 1,
  },

  final: {
    lv: 99,
    exp: [3000000, 3002500], // [0] = Mario [1] = Luigi
    next: 1,
  },
};
