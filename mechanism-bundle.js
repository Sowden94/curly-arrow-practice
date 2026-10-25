// mechanism-bank.js
const MECHANISM_BANK = {
  "easy": [
    {
      "id": "classify-easy-5",
      "graph": {
        "name": "Alcohol",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "O",
            "x": 160.6217782649107,
            "y": 185,
            "h": 1,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Nucleophilic"
        }
      },
      "marked": "a1",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "Oxygen can donate a lone pair to an electrophile.",
      "kind": "classify"
    },
    {
      "id": "classify-easy-8",
      "graph": {
        "name": "Ether",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "O",
            "x": 221.24355652982138,
            "y": 220,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.86533479473206,
            "y": 185,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Nucleophilic"
        }
      },
      "marked": "a2",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "Oxygen can donate a lone pair to an electrophile.",
      "kind": "classify"
    },
    {
      "id": "classify-easy-4",
      "graph": {
        "name": "Alkane",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {}
      },
      "marked": "a2",
      "answer": "Neither",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "This saturated carbon is neither a typical electron-pair donor nor acceptor in introductory polar mechanisms.",
      "kind": "classify"
    },
    {
      "id": "label-easy-4",
      "graph": {
        "name": "Alkane",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {}
      },
      "sites": {},
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "No principal nucleophilic or electrophilic site is shown in this introductory example.",
      "kind": "label"
    },
    {
      "id": "pair-easy-8",
      "graph": {
        "name": "Alkoxide",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 342.4871130596428,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a4": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Alkyl Cl",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "Cl",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Electrophilic"
        }
      },
      "sites": {
        "left:a4": "Nucleophilic",
        "right:a2": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "classify-easy-6",
      "graph": {
        "name": "Ion",
        "atoms": [
          {
            "id": "a0",
            "e": "Br",
            "x": 180,
            "y": 200,
            "h": 0,
            "lp": 4,
            "charge": -1
          }
        ],
        "bonds": [],
        "sites": {
          "a0": "Nucleophilic"
        }
      },
      "marked": "a0",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "The halide ion can donate a lone pair to an electrophile.",
      "kind": "classify"
    },
    {
      "id": "pair-easy-1",
      "graph": {
        "name": "Primary amine",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "N",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Ketone",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a1",
            "b": "a3",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a3": "Nucleophilic"
        }
      },
      "sites": {
        "left:a1": "Nucleophilic",
        "right:a1": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "classify-easy-14",
      "graph": {
        "name": "Quaternary ammonium",
        "atoms": [
          {
            "id": "a0",
            "e": "N",
            "x": 220,
            "y": 200,
            "h": 0,
            "lp": 0,
            "charge": 1
          },
          {
            "id": "a1",
            "e": "C",
            "x": 220,
            "y": 130,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 290,
            "y": 200,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 220,
            "y": 270,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 150,
            "y": 200,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a0",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a0",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a0",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {}
      },
      "marked": "a0",
      "answer": "Neither",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "This nitrogen has four bonds, a full octet and no lone pair. Positive charge alone does not make the nitrogen a typical electrophilic site.",
      "kind": "classify"
    },
    {
      "id": "label-easy-15",
      "graph": {
        "name": "Aldehyde",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "O",
            "x": 160.6217782649107,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a2": "Nucleophilic"
        }
      },
      "sites": {
        "a1": "Electrophilic",
        "a2": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "pair-easy-18",
      "graph": {
        "name": "Ether",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Aldehyde",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          }
        ],
        "sites": {
          "a3": "Electrophilic",
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "left:a3": "Nucleophilic",
        "right:a3": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "classify-easy-3",
      "graph": {
        "name": "Primary amine",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "N",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Nucleophilic"
        }
      },
      "marked": "a1",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "Nitrogen can donate a lone pair to an electrophile.",
      "kind": "classify"
    },
    {
      "id": "pair-easy-4",
      "graph": {
        "name": "Primary amine",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "N",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a4": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Ketone",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a1",
            "b": "a3",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a3": "Nucleophilic"
        }
      },
      "sites": {
        "left:a4": "Nucleophilic",
        "right:a1": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "label-easy-5",
      "graph": {
        "name": "Alcohol",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "O",
            "x": 160.6217782649107,
            "y": 185,
            "h": 1,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Nucleophilic"
        }
      },
      "sites": {
        "a1": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "pair-easy-5",
      "graph": {
        "name": "Alkoxide",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "O",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Alkyl Cl",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "Cl",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Electrophilic"
        }
      },
      "sites": {
        "left:a1": "Nucleophilic",
        "right:a2": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "label-easy-19",
      "graph": {
        "name": "Alcohol",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Nucleophilic"
        }
      },
      "sites": {
        "a3": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "classify-easy-15",
      "graph": {
        "name": "Aldehyde",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "O",
            "x": 160.6217782649107,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a2": "Nucleophilic"
        }
      },
      "marked": "a1",
      "answer": "Electrophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "The C=O bond is polarised toward oxygen, making the carbonyl carbon electrophilic.",
      "kind": "classify"
    },
    {
      "id": "label-easy-6",
      "graph": {
        "name": "Ion",
        "atoms": [
          {
            "id": "a0",
            "e": "Br",
            "x": 180,
            "y": 200,
            "h": 0,
            "lp": 4,
            "charge": -1
          }
        ],
        "bonds": [],
        "sites": {
          "a0": "Nucleophilic"
        }
      },
      "sites": {
        "a0": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "label-easy-8",
      "graph": {
        "name": "Ether",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "O",
            "x": 221.24355652982138,
            "y": 220,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.86533479473206,
            "y": 185,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Nucleophilic"
        }
      },
      "sites": {
        "a2": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "label-easy-3",
      "graph": {
        "name": "Primary amine",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "N",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Nucleophilic"
        }
      },
      "sites": {
        "a1": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "label-easy-12",
      "graph": {
        "name": "Ion",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 180,
            "y": 200,
            "h": 3,
            "lp": 1,
            "charge": -1
          }
        ],
        "bonds": [],
        "sites": {
          "a0": "Nucleophilic"
        }
      },
      "sites": {
        "a0": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "pair-easy-14",
      "graph": {
        "name": "Alkoxide",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "O",
            "x": 221.24355652982138,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Alkyl Cl",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "Cl",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Electrophilic"
        }
      },
      "sites": {
        "left:a2": "Nucleophilic",
        "right:a2": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "classify-easy-1",
      "graph": {
        "name": "Ion",
        "atoms": [
          {
            "id": "a0",
            "e": "O",
            "x": 180,
            "y": 200,
            "h": 1,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [],
        "sites": {
          "a0": "Nucleophilic"
        }
      },
      "marked": "a0",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "Oxygen can donate a lone pair to an electrophile. Its negative charge makes it electron-rich.",
      "kind": "classify"
    },
    {
      "id": "classify-easy-18",
      "graph": {
        "name": "Alkyl Cl",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "Cl",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Electrophilic"
        }
      },
      "marked": "a2",
      "answer": "Electrophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "The carbon attached to the halogen is an electrophilic site; the halogen can leave when a nucleophile bonds to that carbon.",
      "kind": "classify"
    },
    {
      "id": "pair-easy-12",
      "graph": {
        "name": "Ether",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Aldehyde",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          }
        ],
        "sites": {
          "a3": "Electrophilic",
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "left:a3": "Nucleophilic",
        "right:a3": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "label-easy-18",
      "graph": {
        "name": "Alkyl Cl",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "Cl",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Electrophilic"
        }
      },
      "sites": {
        "a2": "Electrophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "pair-easy-17",
      "graph": {
        "name": "Alkoxide",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "O",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Alkyl Cl",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "Cl",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Electrophilic"
        }
      },
      "sites": {
        "left:a1": "Nucleophilic",
        "right:a2": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "label-easy-7",
      "graph": {
        "name": "Alkyl Br",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "Br",
            "x": 221.24355652982138,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic"
        }
      },
      "sites": {
        "a1": "Electrophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "classify-easy-17",
      "graph": {
        "name": "Alkane",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          }
        ],
        "sites": {}
      },
      "marked": "a1",
      "answer": "Neither",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "This saturated carbon is neither a typical electron-pair donor nor acceptor in introductory polar mechanisms.",
      "kind": "classify"
    },
    {
      "id": "classify-easy-9",
      "graph": {
        "name": "Trialkylborane",
        "atoms": [
          {
            "id": "a0",
            "e": "B",
            "x": 220,
            "y": 200,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 220,
            "y": 130,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 280.6217782649107,
            "y": 235,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 159.37822173508928,
            "y": 235,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a0",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a0",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a0": "Electrophilic"
        }
      },
      "marked": "a0",
      "answer": "Electrophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "Boron has only six valence-shell electrons and an empty orbital that can accept an electron pair.",
      "kind": "classify"
    },
    {
      "id": "pair-easy-16",
      "graph": {
        "name": "Primary amine",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "N",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a4": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Ketone",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a1",
            "b": "a3",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a3": "Nucleophilic"
        }
      },
      "sites": {
        "left:a4": "Nucleophilic",
        "right:a1": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "pair-easy-2",
      "graph": {
        "name": "Alkoxide",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "O",
            "x": 221.24355652982138,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Alkyl Cl",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "Cl",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Electrophilic"
        }
      },
      "sites": {
        "left:a2": "Nucleophilic",
        "right:a2": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "label-easy-11",
      "graph": {
        "name": "Alkoxide",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "O",
            "x": 221.24355652982138,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Nucleophilic"
        }
      },
      "sites": {
        "a2": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "label-easy-14",
      "graph": {
        "name": "Alkane",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {}
      },
      "sites": {},
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "No principal nucleophilic or electrophilic site is shown in this introductory example.",
      "kind": "label"
    },
    {
      "id": "label-easy-10",
      "graph": {
        "name": "Alkene",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 2
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          }
        ],
        "sites": {
          "b0": "Nucleophilic"
        }
      },
      "sites": {
        "b0": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "pair-easy-20",
      "graph": {
        "name": "Alkoxide",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 342.4871130596428,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a4": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Alkyl Cl",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "Cl",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Electrophilic"
        }
      },
      "sites": {
        "left:a4": "Nucleophilic",
        "right:a2": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "pair-easy-7",
      "graph": {
        "name": "Primary amine",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "N",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Ketone",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a1",
            "b": "a3",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a3": "Nucleophilic"
        }
      },
      "sites": {
        "left:a3": "Nucleophilic",
        "right:a1": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "pair-easy-9",
      "graph": {
        "name": "Ether",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Aldehyde",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          }
        ],
        "sites": {
          "a3": "Electrophilic",
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "left:a3": "Nucleophilic",
        "right:a3": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "classify-easy-11",
      "graph": {
        "name": "Alkoxide",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "O",
            "x": 221.24355652982138,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Nucleophilic"
        }
      },
      "marked": "a2",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "Oxygen can donate a lone pair to an electrophile. Its negative charge makes it electron-rich.",
      "kind": "classify"
    },
    {
      "id": "pair-easy-19",
      "graph": {
        "name": "Primary amine",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "N",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Ketone",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a1",
            "b": "a3",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a3": "Nucleophilic"
        }
      },
      "sites": {
        "left:a3": "Nucleophilic",
        "right:a1": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "pair-easy-3",
      "graph": {
        "name": "Ether",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Aldehyde",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          }
        ],
        "sites": {
          "a3": "Electrophilic",
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "left:a3": "Nucleophilic",
        "right:a3": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "label-easy-1",
      "graph": {
        "name": "Ion",
        "atoms": [
          {
            "id": "a0",
            "e": "O",
            "x": 180,
            "y": 200,
            "h": 1,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [],
        "sites": {
          "a0": "Nucleophilic"
        }
      },
      "sites": {
        "a0": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "label-easy-20",
      "graph": {
        "name": "Ketone",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a1",
            "b": "a4",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "a1": "Electrophilic",
        "a4": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "label-easy-16",
      "graph": {
        "name": "Primary amine",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "N",
            "x": 221.24355652982138,
            "y": 220,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Nucleophilic"
        }
      },
      "sites": {
        "a2": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "classify-easy-13",
      "graph": {
        "name": "Ion",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 180,
            "y": 200,
            "h": 3,
            "lp": 0,
            "charge": 1
          }
        ],
        "bonds": [],
        "sites": {
          "a0": "Electrophilic"
        }
      },
      "marked": "a0",
      "answer": "Electrophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "The carbocation has an incomplete octet and can accept an electron pair.",
      "kind": "classify"
    },
    {
      "id": "label-easy-2",
      "graph": {
        "name": "Ketone",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a1",
            "b": "a3",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a3": "Nucleophilic"
        }
      },
      "sites": {
        "a1": "Electrophilic",
        "a3": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "classify-easy-16",
      "graph": {
        "name": "Primary amine",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "N",
            "x": 221.24355652982138,
            "y": 220,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Nucleophilic"
        }
      },
      "marked": "a2",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "Nitrogen can donate a lone pair to an electrophile.",
      "kind": "classify"
    },
    {
      "id": "pair-easy-10",
      "graph": {
        "name": "Primary amine",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "N",
            "x": 221.24355652982138,
            "y": 220,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Ketone",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a1",
            "b": "a3",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a3": "Nucleophilic"
        }
      },
      "sites": {
        "left:a2": "Nucleophilic",
        "right:a1": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "pair-easy-11",
      "graph": {
        "name": "Alkoxide",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Alkyl Cl",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "Cl",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Electrophilic"
        }
      },
      "sites": {
        "left:a3": "Nucleophilic",
        "right:a2": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "label-easy-9",
      "graph": {
        "name": "Trialkylborane",
        "atoms": [
          {
            "id": "a0",
            "e": "B",
            "x": 220,
            "y": 200,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 220,
            "y": 130,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 280.6217782649107,
            "y": 235,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 159.37822173508928,
            "y": 235,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a0",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a0",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a0": "Electrophilic"
        }
      },
      "sites": {
        "a0": "Electrophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "pair-easy-13",
      "graph": {
        "name": "Primary amine",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "N",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Ketone",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a1",
            "b": "a3",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a3": "Nucleophilic"
        }
      },
      "sites": {
        "left:a1": "Nucleophilic",
        "right:a1": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "classify-easy-10",
      "graph": {
        "name": "Alkene",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 2
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          }
        ],
        "sites": {
          "b0": "Nucleophilic"
        }
      },
      "marked": "b0",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "The C=C π bond can donate an electron pair to an electrophile.",
      "kind": "classify"
    },
    {
      "id": "label-easy-13",
      "graph": {
        "name": "Ion",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 180,
            "y": 200,
            "h": 3,
            "lp": 0,
            "charge": 1
          }
        ],
        "bonds": [],
        "sites": {
          "a0": "Electrophilic"
        }
      },
      "sites": {
        "a0": "Electrophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "label-easy-17",
      "graph": {
        "name": "Alkane",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          }
        ],
        "sites": {}
      },
      "sites": {},
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "No principal nucleophilic or electrophilic site is shown in this introductory example.",
      "kind": "label"
    },
    {
      "id": "classify-easy-19",
      "graph": {
        "name": "Alcohol",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Nucleophilic"
        }
      },
      "marked": "a3",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "Oxygen can donate a lone pair to an electrophile.",
      "kind": "classify"
    },
    {
      "id": "classify-easy-20",
      "graph": {
        "name": "Ketone",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a1",
            "b": "a4",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a4": "Nucleophilic"
        }
      },
      "marked": "a1",
      "answer": "Electrophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "The C=O bond is polarised toward oxygen, making the carbonyl carbon electrophilic.",
      "kind": "classify"
    },
    {
      "id": "pair-easy-6",
      "graph": {
        "name": "Ether",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Aldehyde",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          }
        ],
        "sites": {
          "a3": "Electrophilic",
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "left:a3": "Nucleophilic",
        "right:a3": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "pair-easy-15",
      "graph": {
        "name": "Ether",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Aldehyde",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          }
        ],
        "sites": {
          "a3": "Electrophilic",
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "left:a3": "Nucleophilic",
        "right:a3": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "classify-easy-7",
      "graph": {
        "name": "Alkyl Br",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "Br",
            "x": 221.24355652982138,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic"
        }
      },
      "marked": "a1",
      "answer": "Electrophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "The carbon attached to the halogen is an electrophilic site; the halogen can leave when a nucleophile bonds to that carbon.",
      "kind": "classify"
    },
    {
      "id": "classify-easy-12",
      "graph": {
        "name": "Ion",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 180,
            "y": 200,
            "h": 3,
            "lp": 1,
            "charge": -1
          }
        ],
        "bonds": [],
        "sites": {
          "a0": "Nucleophilic"
        }
      },
      "marked": "a0",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "The negatively charged carbon has a lone pair it can donate.",
      "kind": "classify"
    },
    {
      "id": "classify-easy-2",
      "graph": {
        "name": "Ketone",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a1",
            "b": "a3",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a3": "Nucleophilic"
        }
      },
      "marked": "a1",
      "answer": "Electrophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "The C=O bond is polarised toward oxygen, making the carbonyl carbon electrophilic.",
      "kind": "classify"
    }
  ],
  "moderate": [
    {
      "id": "label-moderate-16",
      "graph": {
        "name": "Trialkylborane",
        "atoms": [
          {
            "id": "a0",
            "e": "B",
            "x": 220,
            "y": 200,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 220,
            "y": 130,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 280.6217782649107,
            "y": 235,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 159.37822173508928,
            "y": 235,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a0",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a0",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a0": "Electrophilic"
        }
      },
      "sites": {
        "a0": "Electrophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "pair-moderate-14",
      "graph": {
        "name": "Alkoxide",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "O",
            "x": 221.24355652982138,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Alkyl Cl",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "Cl",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Electrophilic"
        }
      },
      "sites": {
        "left:a2": "Nucleophilic",
        "right:a2": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "pair-moderate-1",
      "graph": {
        "name": "Primary amine",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "N",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Ester",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 221.2435565298214,
            "y": 290,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 2
          },
          {
            "id": "b3",
            "a": "a2",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Electrophilic",
          "a3": "Nucleophilic",
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "left:a1": "Nucleophilic",
        "right:a2": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "label-moderate-10",
      "graph": {
        "name": "Alkane",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          }
        ],
        "sites": {}
      },
      "sites": {},
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "No principal nucleophilic or electrophilic site is shown in this introductory example.",
      "kind": "label"
    },
    {
      "id": "classify-moderate-6",
      "graph": {
        "name": "Cyclic ether",
        "atoms": [
          {
            "id": "a0",
            "e": "O",
            "x": 220,
            "y": 140.45444341535722,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 276.6311896062463,
            "y": 181.59941107583032,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 255,
            "y": 248.17336721649107,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 185,
            "y": 248.17336721649107,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 163.36881039375368,
            "y": 181.59941107583035,
            "h": 2,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a0",
            "order": 1
          }
        ],
        "sites": {
          "a0": "Nucleophilic"
        }
      },
      "marked": "a1",
      "answer": "Neither",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "This saturated carbon is neither a typical electron-pair donor nor acceptor in introductory polar mechanisms.",
      "kind": "classify"
    },
    {
      "id": "pair-moderate-4",
      "graph": {
        "name": "Primary amine",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "N",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a4": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Ketone",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a1",
            "b": "a3",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a3": "Nucleophilic"
        }
      },
      "sites": {
        "left:a4": "Nucleophilic",
        "right:a1": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "classify-moderate-19",
      "graph": {
        "name": "Nitrile",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "N",
            "x": 342.48711305964287,
            "y": 150,
            "h": 0,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 3
          }
        ],
        "sites": {
          "a3": "Electrophilic",
          "a4": "Nucleophilic"
        }
      },
      "marked": "a3",
      "answer": "Electrophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "The C≡N bond is polarised toward nitrogen, making the nitrile carbon electrophilic.",
      "kind": "classify"
    },
    {
      "id": "classify-moderate-14",
      "graph": {
        "name": "Quaternary ammonium",
        "atoms": [
          {
            "id": "a0",
            "e": "N",
            "x": 220,
            "y": 200,
            "h": 0,
            "lp": 0,
            "charge": 1
          },
          {
            "id": "a1",
            "e": "C",
            "x": 220,
            "y": 130,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 290,
            "y": 200,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 220,
            "y": 270,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 150,
            "y": 200,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a0",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a0",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a0",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {}
      },
      "marked": "a0",
      "answer": "Neither",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "This nitrogen has four bonds, a full octet and no lone pair. Positive charge alone does not make the nitrogen a typical electrophilic site.",
      "kind": "classify"
    },
    {
      "id": "classify-moderate-9",
      "graph": {
        "name": "Ketone",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a1",
            "b": "a5",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a5": "Nucleophilic"
        }
      },
      "marked": "a1",
      "answer": "Electrophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "The C=O bond is polarised toward oxygen, making the carbonyl carbon electrophilic.",
      "kind": "classify"
    },
    {
      "id": "pair-moderate-8",
      "graph": {
        "name": "Alkoxide",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 342.4871130596428,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a4": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Alkyl Cl",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "Cl",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Electrophilic"
        }
      },
      "sites": {
        "left:a4": "Nucleophilic",
        "right:a2": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "label-moderate-6",
      "graph": {
        "name": "Cyclic ether",
        "atoms": [
          {
            "id": "a0",
            "e": "O",
            "x": 220,
            "y": 140.45444341535722,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 276.6311896062463,
            "y": 181.59941107583032,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 255,
            "y": 248.17336721649107,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 185,
            "y": 248.17336721649107,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 163.36881039375368,
            "y": 181.59941107583035,
            "h": 2,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a0",
            "order": 1
          }
        ],
        "sites": {
          "a0": "Nucleophilic"
        }
      },
      "sites": {
        "a0": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "label-moderate-4",
      "graph": {
        "name": "Lactone",
        "atoms": [
          {
            "id": "a0",
            "e": "O",
            "x": 220,
            "y": 130,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 280.62177826491074,
            "y": 165,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 280.62177826491074,
            "y": 235,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 220,
            "y": 270,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 159.37822173508928,
            "y": 235.00000000000003,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 159.37822173508928,
            "y": 165,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "O",
            "x": 341.24355652982143,
            "y": 130.00000000000003,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a0",
            "order": 1
          },
          {
            "id": "b6",
            "a": "a1",
            "b": "a6",
            "order": 2
          }
        ],
        "sites": {
          "a0": "Nucleophilic",
          "a1": "Electrophilic",
          "a6": "Nucleophilic"
        }
      },
      "sites": {
        "a0": "Nucleophilic",
        "a1": "Electrophilic",
        "a6": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "label-moderate-8",
      "graph": {
        "name": "Alkoxide",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 342.4871130596428,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "a4": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "label-moderate-17",
      "graph": {
        "name": "Aldehyde",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          }
        ],
        "sites": {
          "a3": "Electrophilic",
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "a3": "Electrophilic",
        "a4": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "classify-moderate-8",
      "graph": {
        "name": "Alkoxide",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 342.4871130596428,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a4": "Nucleophilic"
        }
      },
      "marked": "a4",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "Oxygen can donate a lone pair to an electrophile. Its negative charge makes it electron-rich.",
      "kind": "classify"
    },
    {
      "id": "pair-moderate-2",
      "graph": {
        "name": "Alkoxide",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "O",
            "x": 221.24355652982138,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Alkyl Cl",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "Cl",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Electrophilic"
        }
      },
      "sites": {
        "left:a2": "Nucleophilic",
        "right:a2": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "classify-moderate-3",
      "graph": {
        "name": "Nitrile",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "N",
            "x": 281.8653347947321,
            "y": 255,
            "h": 0,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 3
          }
        ],
        "sites": {
          "a2": "Electrophilic",
          "a3": "Nucleophilic"
        }
      },
      "marked": "a2",
      "answer": "Electrophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "The C≡N bond is polarised toward nitrogen, making the nitrile carbon electrophilic.",
      "kind": "classify"
    },
    {
      "id": "classify-moderate-18",
      "graph": {
        "name": "Cyclic amine",
        "atoms": [
          {
            "id": "a0",
            "e": "N",
            "x": 220,
            "y": 140.45444341535722,
            "h": 1,
            "lp": 1,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 276.6311896062463,
            "y": 181.59941107583032,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 255,
            "y": 248.17336721649107,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 185,
            "y": 248.17336721649107,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 163.36881039375368,
            "y": 181.59941107583035,
            "h": 2,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a0",
            "order": 1
          }
        ],
        "sites": {
          "a0": "Nucleophilic"
        }
      },
      "marked": "a0",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "Nitrogen can donate a lone pair to an electrophile.",
      "kind": "classify"
    },
    {
      "id": "pair-moderate-13",
      "graph": {
        "name": "Primary amine",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "N",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Ester",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 221.2435565298214,
            "y": 290,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 2
          },
          {
            "id": "b3",
            "a": "a2",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Electrophilic",
          "a3": "Nucleophilic",
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "left:a1": "Nucleophilic",
        "right:a2": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "classify-moderate-1",
      "graph": {
        "name": "Ester",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 221.2435565298214,
            "y": 290,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 2
          },
          {
            "id": "b3",
            "a": "a2",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Electrophilic",
          "a3": "Nucleophilic",
          "a4": "Nucleophilic"
        }
      },
      "marked": "a2",
      "answer": "Electrophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "The C=O bond is polarised toward oxygen, making the carbonyl carbon electrophilic.",
      "kind": "classify"
    },
    {
      "id": "classify-moderate-5",
      "graph": {
        "name": "Secondary amine",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "N",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 1,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Nucleophilic"
        }
      },
      "marked": "a3",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "Nitrogen can donate a lone pair to an electrophile.",
      "kind": "classify"
    },
    {
      "id": "label-moderate-2",
      "graph": {
        "name": "Cyclic amine",
        "atoms": [
          {
            "id": "a0",
            "e": "N",
            "x": 220,
            "y": 130,
            "h": 1,
            "lp": 1,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 280.62177826491074,
            "y": 165,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 280.62177826491074,
            "y": 235,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 220,
            "y": 270,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 159.37822173508928,
            "y": 235.00000000000003,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 159.37822173508928,
            "y": 165,
            "h": 2,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a0",
            "order": 1
          }
        ],
        "sites": {
          "a0": "Nucleophilic"
        }
      },
      "sites": {
        "a0": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "label-moderate-14",
      "graph": {
        "name": "Alkane",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {}
      },
      "sites": {},
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "No principal nucleophilic or electrophilic site is shown in this introductory example.",
      "kind": "label"
    },
    {
      "id": "label-moderate-11",
      "graph": {
        "name": "Ester",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "O",
            "x": 342.4871130596428,
            "y": 220,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          },
          {
            "id": "b4",
            "a": "a3",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a6",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Electrophilic",
          "a4": "Nucleophilic",
          "a5": "Nucleophilic"
        }
      },
      "sites": {
        "a3": "Electrophilic",
        "a4": "Nucleophilic",
        "a5": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "label-moderate-7",
      "graph": {
        "name": "Alkyl I",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "I",
            "x": 342.4871130596428,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Electrophilic"
        }
      },
      "sites": {
        "a3": "Electrophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "pair-moderate-17",
      "graph": {
        "name": "Alkoxide",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "O",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Ester",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 221.2435565298214,
            "y": 290,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 2
          },
          {
            "id": "b3",
            "a": "a2",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Electrophilic",
          "a3": "Nucleophilic",
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "left:a1": "Nucleophilic",
        "right:a2": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "classify-moderate-2",
      "graph": {
        "name": "Cyclic amine",
        "atoms": [
          {
            "id": "a0",
            "e": "N",
            "x": 220,
            "y": 130,
            "h": 1,
            "lp": 1,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 280.62177826491074,
            "y": 165,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 280.62177826491074,
            "y": 235,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 220,
            "y": 270,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 159.37822173508928,
            "y": 235.00000000000003,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 159.37822173508928,
            "y": 165,
            "h": 2,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a0",
            "order": 1
          }
        ],
        "sites": {
          "a0": "Nucleophilic"
        }
      },
      "marked": "a0",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "Nitrogen can donate a lone pair to an electrophile.",
      "kind": "classify"
    },
    {
      "id": "label-moderate-9",
      "graph": {
        "name": "Ketone",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a1",
            "b": "a5",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a5": "Nucleophilic"
        }
      },
      "sites": {
        "a1": "Electrophilic",
        "a5": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "label-moderate-19",
      "graph": {
        "name": "Nitrile",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "N",
            "x": 342.48711305964287,
            "y": 150,
            "h": 0,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 3
          }
        ],
        "sites": {
          "a3": "Electrophilic",
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "a3": "Electrophilic",
        "a4": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "classify-moderate-16",
      "graph": {
        "name": "Trialkylborane",
        "atoms": [
          {
            "id": "a0",
            "e": "B",
            "x": 220,
            "y": 200,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 220,
            "y": 130,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 280.6217782649107,
            "y": 235,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 159.37822173508928,
            "y": 235,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a0",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a0",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a0": "Electrophilic"
        }
      },
      "marked": "a0",
      "answer": "Electrophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "Boron has only six valence-shell electrons and an empty orbital that can accept an electron pair.",
      "kind": "classify"
    },
    {
      "id": "pair-moderate-3",
      "graph": {
        "name": "Ether",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Aldehyde",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          }
        ],
        "sites": {
          "a3": "Electrophilic",
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "left:a3": "Nucleophilic",
        "right:a3": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "label-moderate-3",
      "graph": {
        "name": "Nitrile",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "N",
            "x": 281.8653347947321,
            "y": 255,
            "h": 0,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 3
          }
        ],
        "sites": {
          "a2": "Electrophilic",
          "a3": "Nucleophilic"
        }
      },
      "sites": {
        "a2": "Electrophilic",
        "a3": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "label-moderate-20",
      "graph": {
        "name": "Primary amine",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "N",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "a4": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "pair-moderate-19",
      "graph": {
        "name": "Primary amine",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "N",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Ketone",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a1",
            "b": "a3",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a3": "Nucleophilic"
        }
      },
      "sites": {
        "left:a3": "Nucleophilic",
        "right:a1": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "pair-moderate-9",
      "graph": {
        "name": "Ether",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Ester",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 221.2435565298214,
            "y": 290,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 2
          },
          {
            "id": "b3",
            "a": "a2",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Electrophilic",
          "a3": "Nucleophilic",
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "left:a3": "Nucleophilic",
        "right:a2": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "classify-moderate-17",
      "graph": {
        "name": "Aldehyde",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          }
        ],
        "sites": {
          "a3": "Electrophilic",
          "a4": "Nucleophilic"
        }
      },
      "marked": "a3",
      "answer": "Electrophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "The C=O bond is polarised toward oxygen, making the carbonyl carbon electrophilic.",
      "kind": "classify"
    },
    {
      "id": "classify-moderate-7",
      "graph": {
        "name": "Alkyl I",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "I",
            "x": 342.4871130596428,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Electrophilic"
        }
      },
      "marked": "a3",
      "answer": "Electrophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "The carbon attached to the halogen is an electrophilic site; the halogen can leave when a nucleophile bonds to that carbon.",
      "kind": "classify"
    },
    {
      "id": "label-moderate-1",
      "graph": {
        "name": "Ester",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 221.2435565298214,
            "y": 290,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 2
          },
          {
            "id": "b3",
            "a": "a2",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Electrophilic",
          "a3": "Nucleophilic",
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "a2": "Electrophilic",
        "a3": "Nucleophilic",
        "a4": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "classify-moderate-4",
      "graph": {
        "name": "Lactone",
        "atoms": [
          {
            "id": "a0",
            "e": "O",
            "x": 220,
            "y": 130,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 280.62177826491074,
            "y": 165,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 280.62177826491074,
            "y": 235,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 220,
            "y": 270,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 159.37822173508928,
            "y": 235.00000000000003,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 159.37822173508928,
            "y": 165,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "O",
            "x": 341.24355652982143,
            "y": 130.00000000000003,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a0",
            "order": 1
          },
          {
            "id": "b6",
            "a": "a1",
            "b": "a6",
            "order": 2
          }
        ],
        "sites": {
          "a0": "Nucleophilic",
          "a1": "Electrophilic",
          "a6": "Nucleophilic"
        }
      },
      "marked": "a0",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "Oxygen can donate a lone pair to an electrophile.",
      "kind": "classify"
    },
    {
      "id": "classify-moderate-10",
      "graph": {
        "name": "Alkane",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          }
        ],
        "sites": {}
      },
      "marked": "a3",
      "answer": "Neither",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "This saturated carbon is neither a typical electron-pair donor nor acceptor in introductory polar mechanisms.",
      "kind": "classify"
    },
    {
      "id": "classify-moderate-11",
      "graph": {
        "name": "Ester",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "O",
            "x": 342.4871130596428,
            "y": 220,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          },
          {
            "id": "b4",
            "a": "a3",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a6",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Electrophilic",
          "a4": "Nucleophilic",
          "a5": "Nucleophilic"
        }
      },
      "marked": "a3",
      "answer": "Electrophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "The C=O bond is polarised toward oxygen, making the carbonyl carbon electrophilic.",
      "kind": "classify"
    },
    {
      "id": "label-moderate-13",
      "graph": {
        "name": "Alkene",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 2
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "b0": "Nucleophilic"
        }
      },
      "sites": {
        "b0": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "classify-moderate-13",
      "graph": {
        "name": "Alkene",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 2
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "b0": "Nucleophilic"
        }
      },
      "marked": "b0",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "The C=C π bond can donate an electron pair to an electrophile.",
      "kind": "classify"
    },
    {
      "id": "classify-moderate-12",
      "graph": {
        "name": "Ether",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 342.4871130596428,
            "y": 220,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          }
        ],
        "sites": {
          "a4": "Nucleophilic"
        }
      },
      "marked": "a4",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "Oxygen can donate a lone pair to an electrophile.",
      "kind": "classify"
    },
    {
      "id": "label-moderate-18",
      "graph": {
        "name": "Cyclic amine",
        "atoms": [
          {
            "id": "a0",
            "e": "N",
            "x": 220,
            "y": 140.45444341535722,
            "h": 1,
            "lp": 1,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 276.6311896062463,
            "y": 181.59941107583032,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 255,
            "y": 248.17336721649107,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 185,
            "y": 248.17336721649107,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 163.36881039375368,
            "y": 181.59941107583035,
            "h": 2,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a0",
            "order": 1
          }
        ],
        "sites": {
          "a0": "Nucleophilic"
        }
      },
      "sites": {
        "a0": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "pair-moderate-10",
      "graph": {
        "name": "Primary amine",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "N",
            "x": 221.24355652982138,
            "y": 220,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Ketone",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a1",
            "b": "a3",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a3": "Nucleophilic"
        }
      },
      "sites": {
        "left:a2": "Nucleophilic",
        "right:a1": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "label-moderate-5",
      "graph": {
        "name": "Secondary amine",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "N",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 1,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Nucleophilic"
        }
      },
      "sites": {
        "a3": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "classify-moderate-15",
      "graph": {
        "name": "Alcohol",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Nucleophilic"
        }
      },
      "marked": "a3",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "Oxygen can donate a lone pair to an electrophile.",
      "kind": "classify"
    },
    {
      "id": "pair-moderate-6",
      "graph": {
        "name": "Ether",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Aldehyde",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          }
        ],
        "sites": {
          "a3": "Electrophilic",
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "left:a3": "Nucleophilic",
        "right:a3": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "pair-moderate-18",
      "graph": {
        "name": "Ether",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Aldehyde",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          }
        ],
        "sites": {
          "a3": "Electrophilic",
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "left:a3": "Nucleophilic",
        "right:a3": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "pair-moderate-11",
      "graph": {
        "name": "Alkoxide",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Alkyl Cl",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "Cl",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Electrophilic"
        }
      },
      "sites": {
        "left:a3": "Nucleophilic",
        "right:a2": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "pair-moderate-20",
      "graph": {
        "name": "Alkoxide",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 342.4871130596428,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a4": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Alkyl Cl",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "Cl",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Electrophilic"
        }
      },
      "sites": {
        "left:a4": "Nucleophilic",
        "right:a2": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "pair-moderate-16",
      "graph": {
        "name": "Primary amine",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "N",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a4": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Ketone",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a1",
            "b": "a3",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a3": "Nucleophilic"
        }
      },
      "sites": {
        "left:a4": "Nucleophilic",
        "right:a1": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "label-moderate-12",
      "graph": {
        "name": "Ether",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 342.4871130596428,
            "y": 220,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          }
        ],
        "sites": {
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "a4": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "classify-moderate-20",
      "graph": {
        "name": "Primary amine",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "N",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a4": "Nucleophilic"
        }
      },
      "marked": "a4",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "Nitrogen can donate a lone pair to an electrophile.",
      "kind": "classify"
    },
    {
      "id": "pair-moderate-5",
      "graph": {
        "name": "Alkoxide",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "O",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Ester",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 221.2435565298214,
            "y": 290,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 2
          },
          {
            "id": "b3",
            "a": "a2",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Electrophilic",
          "a3": "Nucleophilic",
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "left:a1": "Nucleophilic",
        "right:a2": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "pair-moderate-7",
      "graph": {
        "name": "Primary amine",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "N",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Ketone",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a1",
            "b": "a3",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a3": "Nucleophilic"
        }
      },
      "sites": {
        "left:a3": "Nucleophilic",
        "right:a1": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "pair-moderate-12",
      "graph": {
        "name": "Ether",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Aldehyde",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          }
        ],
        "sites": {
          "a3": "Electrophilic",
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "left:a3": "Nucleophilic",
        "right:a3": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "label-moderate-15",
      "graph": {
        "name": "Alcohol",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Nucleophilic"
        }
      },
      "sites": {
        "a3": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "pair-moderate-15",
      "graph": {
        "name": "Ether",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Aldehyde",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          }
        ],
        "sites": {
          "a3": "Electrophilic",
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "left:a3": "Nucleophilic",
        "right:a3": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    }
  ],
  "hard": [
    {
      "id": "label-hard-18",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "C",
            "x": 463.73066958946424,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "C",
            "x": 524.352447854375,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a9",
            "e": "O",
            "x": 584.9742261192857,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": -1
          },
          {
            "id": "a10",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a6",
            "order": 1
          },
          {
            "id": "b6",
            "a": "a6",
            "b": "a7",
            "order": 1
          },
          {
            "id": "b7",
            "a": "a1",
            "b": "a8",
            "order": 2
          },
          {
            "id": "b8",
            "a": "a7",
            "b": "a9",
            "order": 1
          },
          {
            "id": "b9",
            "a": "a3",
            "b": "a10",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a8": "Nucleophilic",
          "a9": "Nucleophilic",
          "a3": "Electrophilic",
          "a10": "Nucleophilic"
        }
      },
      "sites": {
        "a1": "Electrophilic",
        "a8": "Nucleophilic",
        "a9": "Nucleophilic",
        "a3": "Electrophilic",
        "a10": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "classify-hard-2",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "C",
            "x": 463.73066958946424,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "O",
            "x": 524.352447854375,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a6",
            "order": 1
          },
          {
            "id": "b6",
            "a": "a1",
            "b": "a7",
            "order": 2
          },
          {
            "id": "b7",
            "a": "a6",
            "b": "a8",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a7": "Nucleophilic",
          "a8": "Nucleophilic",
          "b3": "Nucleophilic"
        }
      },
      "marked": "a0",
      "answer": "Neither",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "This saturated carbon is neither a typical electron-pair donor nor acceptor in introductory polar mechanisms.",
      "kind": "classify"
    },
    {
      "id": "pair-hard-7",
      "graph": {
        "name": "Cyclic amine",
        "atoms": [
          {
            "id": "a0",
            "e": "N",
            "x": 220,
            "y": 140.45444341535722,
            "h": 1,
            "lp": 1,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 276.6311896062463,
            "y": 181.59941107583032,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 255,
            "y": 248.17336721649107,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 185,
            "y": 248.17336721649107,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 163.36881039375368,
            "y": 181.59941107583035,
            "h": 2,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a0",
            "order": 1
          }
        ],
        "sites": {
          "a0": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Ketone",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a1",
            "b": "a3",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a3": "Nucleophilic"
        }
      },
      "sites": {
        "left:a0": "Nucleophilic",
        "right:a1": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "classify-hard-17",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "C",
            "x": 463.73066958946424,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "O",
            "x": 524.352447854375,
            "y": 185,
            "h": 1,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a6",
            "order": 1
          },
          {
            "id": "b6",
            "a": "a1",
            "b": "a7",
            "order": 2
          },
          {
            "id": "b7",
            "a": "a6",
            "b": "a8",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a7": "Nucleophilic",
          "a8": "Nucleophilic",
          "b3": "Nucleophilic"
        }
      },
      "marked": "a8",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "Oxygen can donate a lone pair to an electrophile.",
      "kind": "classify"
    },
    {
      "id": "classify-hard-16",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "O",
            "x": 463.7306695894642,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": -1
          },
          {
            "id": "a8",
            "e": "N",
            "x": 281.8653347947321,
            "y": 115,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a1",
            "b": "a6",
            "order": 2
          },
          {
            "id": "b6",
            "a": "a5",
            "b": "a7",
            "order": 1
          },
          {
            "id": "b7",
            "a": "a3",
            "b": "a8",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a6": "Nucleophilic",
          "a7": "Nucleophilic",
          "a8": "Nucleophilic"
        }
      },
      "marked": "a6",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "Oxygen can donate a lone pair to an electrophile.",
      "kind": "classify"
    },
    {
      "id": "classify-hard-20",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "C",
            "x": 463.73066958946424,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "O",
            "x": 524.352447854375,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a6",
            "order": 1
          },
          {
            "id": "b6",
            "a": "a1",
            "b": "a7",
            "order": 2
          },
          {
            "id": "b7",
            "a": "a6",
            "b": "a8",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a7": "Nucleophilic",
          "a8": "Nucleophilic",
          "b3": "Nucleophilic"
        }
      },
      "marked": "a7",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "Oxygen can donate a lone pair to an electrophile.",
      "kind": "classify"
    },
    {
      "id": "classify-hard-7",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "O",
            "x": 463.7306695894642,
            "y": 220,
            "h": 1,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "N",
            "x": 281.8653347947321,
            "y": 115,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a1",
            "b": "a6",
            "order": 2
          },
          {
            "id": "b6",
            "a": "a5",
            "b": "a7",
            "order": 1
          },
          {
            "id": "b7",
            "a": "a3",
            "b": "a8",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a6": "Nucleophilic",
          "a7": "Nucleophilic",
          "a8": "Nucleophilic"
        }
      },
      "marked": "a1",
      "answer": "Electrophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "The C=O bond is polarised toward oxygen, making the carbonyl carbon electrophilic.",
      "kind": "classify"
    },
    {
      "id": "classify-hard-12",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "C",
            "x": 463.73066958946424,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "C",
            "x": 524.352447854375,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a9",
            "e": "O",
            "x": 584.9742261192857,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": -1
          },
          {
            "id": "a10",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a6",
            "order": 1
          },
          {
            "id": "b6",
            "a": "a6",
            "b": "a7",
            "order": 1
          },
          {
            "id": "b7",
            "a": "a1",
            "b": "a8",
            "order": 2
          },
          {
            "id": "b8",
            "a": "a7",
            "b": "a9",
            "order": 1
          },
          {
            "id": "b9",
            "a": "a3",
            "b": "a10",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a8": "Nucleophilic",
          "a9": "Nucleophilic",
          "a3": "Electrophilic",
          "a10": "Nucleophilic"
        }
      },
      "marked": "a8",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "Oxygen can donate a lone pair to an electrophile.",
      "kind": "classify"
    },
    {
      "id": "pair-hard-2",
      "graph": {
        "name": "Alkoxide",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "O",
            "x": 221.24355652982138,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Alkyl Cl",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "Cl",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Electrophilic"
        }
      },
      "sites": {
        "left:a2": "Nucleophilic",
        "right:a2": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "pair-hard-16",
      "graph": {
        "name": "Primary amine",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "N",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a4": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Ketone",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a1",
            "b": "a3",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a3": "Nucleophilic"
        }
      },
      "sites": {
        "left:a4": "Nucleophilic",
        "right:a1": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "label-hard-2",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "C",
            "x": 463.73066958946424,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "O",
            "x": 524.352447854375,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a6",
            "order": 1
          },
          {
            "id": "b6",
            "a": "a1",
            "b": "a7",
            "order": 2
          },
          {
            "id": "b7",
            "a": "a6",
            "b": "a8",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a7": "Nucleophilic",
          "a8": "Nucleophilic",
          "b3": "Nucleophilic"
        }
      },
      "sites": {
        "a1": "Electrophilic",
        "a7": "Nucleophilic",
        "a8": "Nucleophilic",
        "b3": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "pair-hard-17",
      "graph": {
        "name": "Cyclic amine",
        "atoms": [
          {
            "id": "a0",
            "e": "N",
            "x": 220,
            "y": 140.45444341535722,
            "h": 1,
            "lp": 1,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 276.6311896062463,
            "y": 181.59941107583032,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 255,
            "y": 248.17336721649107,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 185,
            "y": 248.17336721649107,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 163.36881039375368,
            "y": 181.59941107583035,
            "h": 2,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a0",
            "order": 1
          }
        ],
        "sites": {
          "a0": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Alkyl Cl",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "Cl",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Electrophilic"
        }
      },
      "sites": {
        "left:a0": "Nucleophilic",
        "right:a2": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "label-hard-9",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "C",
            "x": 463.73066958946424,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "C",
            "x": 524.352447854375,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a9",
            "e": "O",
            "x": 584.9742261192857,
            "y": 220,
            "h": 1,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a10",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a6",
            "order": 1
          },
          {
            "id": "b6",
            "a": "a6",
            "b": "a7",
            "order": 1
          },
          {
            "id": "b7",
            "a": "a1",
            "b": "a8",
            "order": 2
          },
          {
            "id": "b8",
            "a": "a7",
            "b": "a9",
            "order": 1
          },
          {
            "id": "b9",
            "a": "a3",
            "b": "a10",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a8": "Nucleophilic",
          "a9": "Nucleophilic",
          "a3": "Electrophilic",
          "a10": "Nucleophilic"
        }
      },
      "sites": {
        "a1": "Electrophilic",
        "a8": "Nucleophilic",
        "a9": "Nucleophilic",
        "a3": "Electrophilic",
        "a10": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "classify-hard-14",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "C",
            "x": 463.73066958946424,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "O",
            "x": 524.352447854375,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a6",
            "order": 1
          },
          {
            "id": "b6",
            "a": "a1",
            "b": "a7",
            "order": 2
          },
          {
            "id": "b7",
            "a": "a6",
            "b": "a8",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a7": "Nucleophilic",
          "a8": "Nucleophilic",
          "b3": "Nucleophilic"
        }
      },
      "marked": "a0",
      "answer": "Neither",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "This saturated carbon is neither a typical electron-pair donor nor acceptor in introductory polar mechanisms.",
      "kind": "classify"
    },
    {
      "id": "classify-hard-13",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "O",
            "x": 463.7306695894642,
            "y": 220,
            "h": 1,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "N",
            "x": 281.8653347947321,
            "y": 115,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a1",
            "b": "a6",
            "order": 2
          },
          {
            "id": "b6",
            "a": "a5",
            "b": "a7",
            "order": 1
          },
          {
            "id": "b7",
            "a": "a3",
            "b": "a8",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a6": "Nucleophilic",
          "a7": "Nucleophilic",
          "a8": "Nucleophilic"
        }
      },
      "marked": "a7",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "Oxygen can donate a lone pair to an electrophile.",
      "kind": "classify"
    },
    {
      "id": "label-hard-10",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "O",
            "x": 463.7306695894642,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": -1
          },
          {
            "id": "a8",
            "e": "N",
            "x": 281.8653347947321,
            "y": 115,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a1",
            "b": "a6",
            "order": 2
          },
          {
            "id": "b6",
            "a": "a5",
            "b": "a7",
            "order": 1
          },
          {
            "id": "b7",
            "a": "a3",
            "b": "a8",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a6": "Nucleophilic",
          "a7": "Nucleophilic",
          "a8": "Nucleophilic"
        }
      },
      "sites": {
        "a1": "Electrophilic",
        "a6": "Nucleophilic",
        "a7": "Nucleophilic",
        "a8": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "pair-hard-19",
      "graph": {
        "name": "Cyclic amine",
        "atoms": [
          {
            "id": "a0",
            "e": "N",
            "x": 220,
            "y": 140.45444341535722,
            "h": 1,
            "lp": 1,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 276.6311896062463,
            "y": 181.59941107583032,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 255,
            "y": 248.17336721649107,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 185,
            "y": 248.17336721649107,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 163.36881039375368,
            "y": 181.59941107583035,
            "h": 2,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a0",
            "order": 1
          }
        ],
        "sites": {
          "a0": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Ketone",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a1",
            "b": "a3",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a3": "Nucleophilic"
        }
      },
      "sites": {
        "left:a0": "Nucleophilic",
        "right:a1": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "classify-hard-3",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "C",
            "x": 463.73066958946424,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "C",
            "x": 524.352447854375,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a9",
            "e": "O",
            "x": 584.9742261192857,
            "y": 220,
            "h": 1,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a10",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a6",
            "order": 1
          },
          {
            "id": "b6",
            "a": "a6",
            "b": "a7",
            "order": 1
          },
          {
            "id": "b7",
            "a": "a1",
            "b": "a8",
            "order": 2
          },
          {
            "id": "b8",
            "a": "a7",
            "b": "a9",
            "order": 1
          },
          {
            "id": "b9",
            "a": "a3",
            "b": "a10",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a8": "Nucleophilic",
          "a9": "Nucleophilic",
          "a3": "Electrophilic",
          "a10": "Nucleophilic"
        }
      },
      "marked": "a1",
      "answer": "Electrophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "The C=O bond is polarised toward oxygen, making the carbonyl carbon electrophilic.",
      "kind": "classify"
    },
    {
      "id": "classify-hard-4",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "O",
            "x": 463.7306695894642,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": -1
          },
          {
            "id": "a8",
            "e": "N",
            "x": 281.8653347947321,
            "y": 115,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a1",
            "b": "a6",
            "order": 2
          },
          {
            "id": "b6",
            "a": "a5",
            "b": "a7",
            "order": 1
          },
          {
            "id": "b7",
            "a": "a3",
            "b": "a8",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a6": "Nucleophilic",
          "a7": "Nucleophilic",
          "a8": "Nucleophilic"
        }
      },
      "marked": "a6",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "Oxygen can donate a lone pair to an electrophile.",
      "kind": "classify"
    },
    {
      "id": "pair-hard-13",
      "graph": {
        "name": "Cyclic amine",
        "atoms": [
          {
            "id": "a0",
            "e": "N",
            "x": 220,
            "y": 140.45444341535722,
            "h": 1,
            "lp": 1,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 276.6311896062463,
            "y": 181.59941107583032,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 255,
            "y": 248.17336721649107,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 185,
            "y": 248.17336721649107,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 163.36881039375368,
            "y": 181.59941107583035,
            "h": 2,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a0",
            "order": 1
          }
        ],
        "sites": {
          "a0": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Ketone",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a1",
            "b": "a3",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a3": "Nucleophilic"
        }
      },
      "sites": {
        "left:a0": "Nucleophilic",
        "right:a1": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "pair-hard-14",
      "graph": {
        "name": "Alkoxide",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "O",
            "x": 221.24355652982138,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Alkyl Cl",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "Cl",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Electrophilic"
        }
      },
      "sites": {
        "left:a2": "Nucleophilic",
        "right:a2": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "pair-hard-9",
      "graph": {
        "name": "Cyclic amine",
        "atoms": [
          {
            "id": "a0",
            "e": "N",
            "x": 220,
            "y": 140.45444341535722,
            "h": 1,
            "lp": 1,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 276.6311896062463,
            "y": 181.59941107583032,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 255,
            "y": 248.17336721649107,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 185,
            "y": 248.17336721649107,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 163.36881039375368,
            "y": 181.59941107583035,
            "h": 2,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a0",
            "order": 1
          }
        ],
        "sites": {
          "a0": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Aldehyde",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          }
        ],
        "sites": {
          "a3": "Electrophilic",
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "left:a0": "Nucleophilic",
        "right:a3": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "pair-hard-3",
      "graph": {
        "name": "Cyclic amine",
        "atoms": [
          {
            "id": "a0",
            "e": "N",
            "x": 220,
            "y": 140.45444341535722,
            "h": 1,
            "lp": 1,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 276.6311896062463,
            "y": 181.59941107583032,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 255,
            "y": 248.17336721649107,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 185,
            "y": 248.17336721649107,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 163.36881039375368,
            "y": 181.59941107583035,
            "h": 2,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a0",
            "order": 1
          }
        ],
        "sites": {
          "a0": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Aldehyde",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          }
        ],
        "sites": {
          "a3": "Electrophilic",
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "left:a0": "Nucleophilic",
        "right:a3": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "label-hard-19",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "O",
            "x": 463.7306695894642,
            "y": 220,
            "h": 1,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "N",
            "x": 281.8653347947321,
            "y": 115,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a1",
            "b": "a6",
            "order": 2
          },
          {
            "id": "b6",
            "a": "a5",
            "b": "a7",
            "order": 1
          },
          {
            "id": "b7",
            "a": "a3",
            "b": "a8",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a6": "Nucleophilic",
          "a7": "Nucleophilic",
          "a8": "Nucleophilic"
        }
      },
      "sites": {
        "a1": "Electrophilic",
        "a6": "Nucleophilic",
        "a7": "Nucleophilic",
        "a8": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "classify-hard-11",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "C",
            "x": 463.73066958946424,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "O",
            "x": 524.352447854375,
            "y": 185,
            "h": 1,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a6",
            "order": 1
          },
          {
            "id": "b6",
            "a": "a1",
            "b": "a7",
            "order": 2
          },
          {
            "id": "b7",
            "a": "a6",
            "b": "a8",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a7": "Nucleophilic",
          "a8": "Nucleophilic",
          "b3": "Nucleophilic"
        }
      },
      "marked": "a1",
      "answer": "Electrophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "The C=O bond is polarised toward oxygen, making the carbonyl carbon electrophilic.",
      "kind": "classify"
    },
    {
      "id": "label-hard-5",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "C",
            "x": 463.73066958946424,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "O",
            "x": 524.352447854375,
            "y": 185,
            "h": 1,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a6",
            "order": 1
          },
          {
            "id": "b6",
            "a": "a1",
            "b": "a7",
            "order": 2
          },
          {
            "id": "b7",
            "a": "a6",
            "b": "a8",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a7": "Nucleophilic",
          "a8": "Nucleophilic",
          "b3": "Nucleophilic"
        }
      },
      "sites": {
        "a1": "Electrophilic",
        "a7": "Nucleophilic",
        "a8": "Nucleophilic",
        "b3": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "classify-hard-19",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "O",
            "x": 463.7306695894642,
            "y": 220,
            "h": 1,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "N",
            "x": 281.8653347947321,
            "y": 115,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a1",
            "b": "a6",
            "order": 2
          },
          {
            "id": "b6",
            "a": "a5",
            "b": "a7",
            "order": 1
          },
          {
            "id": "b7",
            "a": "a3",
            "b": "a8",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a6": "Nucleophilic",
          "a7": "Nucleophilic",
          "a8": "Nucleophilic"
        }
      },
      "marked": "a1",
      "answer": "Electrophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "The C=O bond is polarised toward oxygen, making the carbonyl carbon electrophilic.",
      "kind": "classify"
    },
    {
      "id": "pair-hard-11",
      "graph": {
        "name": "Cyclic amine",
        "atoms": [
          {
            "id": "a0",
            "e": "N",
            "x": 220,
            "y": 140.45444341535722,
            "h": 1,
            "lp": 1,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 276.6311896062463,
            "y": 181.59941107583032,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 255,
            "y": 248.17336721649107,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 185,
            "y": 248.17336721649107,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 163.36881039375368,
            "y": 181.59941107583035,
            "h": 2,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a0",
            "order": 1
          }
        ],
        "sites": {
          "a0": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Alkyl Cl",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "Cl",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Electrophilic"
        }
      },
      "sites": {
        "left:a0": "Nucleophilic",
        "right:a2": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "label-hard-11",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "C",
            "x": 463.73066958946424,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "O",
            "x": 524.352447854375,
            "y": 185,
            "h": 1,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a6",
            "order": 1
          },
          {
            "id": "b6",
            "a": "a1",
            "b": "a7",
            "order": 2
          },
          {
            "id": "b7",
            "a": "a6",
            "b": "a8",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a7": "Nucleophilic",
          "a8": "Nucleophilic",
          "b3": "Nucleophilic"
        }
      },
      "sites": {
        "a1": "Electrophilic",
        "a7": "Nucleophilic",
        "a8": "Nucleophilic",
        "b3": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "label-hard-12",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "C",
            "x": 463.73066958946424,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "C",
            "x": 524.352447854375,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a9",
            "e": "O",
            "x": 584.9742261192857,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": -1
          },
          {
            "id": "a10",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a6",
            "order": 1
          },
          {
            "id": "b6",
            "a": "a6",
            "b": "a7",
            "order": 1
          },
          {
            "id": "b7",
            "a": "a1",
            "b": "a8",
            "order": 2
          },
          {
            "id": "b8",
            "a": "a7",
            "b": "a9",
            "order": 1
          },
          {
            "id": "b9",
            "a": "a3",
            "b": "a10",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a8": "Nucleophilic",
          "a9": "Nucleophilic",
          "a3": "Electrophilic",
          "a10": "Nucleophilic"
        }
      },
      "sites": {
        "a1": "Electrophilic",
        "a8": "Nucleophilic",
        "a9": "Nucleophilic",
        "a3": "Electrophilic",
        "a10": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "pair-hard-18",
      "graph": {
        "name": "Ether",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Aldehyde",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          }
        ],
        "sites": {
          "a3": "Electrophilic",
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "left:a3": "Nucleophilic",
        "right:a3": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "pair-hard-15",
      "graph": {
        "name": "Cyclic amine",
        "atoms": [
          {
            "id": "a0",
            "e": "N",
            "x": 220,
            "y": 140.45444341535722,
            "h": 1,
            "lp": 1,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 276.6311896062463,
            "y": 181.59941107583032,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 255,
            "y": 248.17336721649107,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 185,
            "y": 248.17336721649107,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 163.36881039375368,
            "y": 181.59941107583035,
            "h": 2,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a0",
            "order": 1
          }
        ],
        "sites": {
          "a0": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Aldehyde",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          }
        ],
        "sites": {
          "a3": "Electrophilic",
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "left:a0": "Nucleophilic",
        "right:a3": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "pair-hard-6",
      "graph": {
        "name": "Ether",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Aldehyde",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          }
        ],
        "sites": {
          "a3": "Electrophilic",
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "left:a3": "Nucleophilic",
        "right:a3": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "pair-hard-5",
      "graph": {
        "name": "Cyclic amine",
        "atoms": [
          {
            "id": "a0",
            "e": "N",
            "x": 220,
            "y": 140.45444341535722,
            "h": 1,
            "lp": 1,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 276.6311896062463,
            "y": 181.59941107583032,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 255,
            "y": 248.17336721649107,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 185,
            "y": 248.17336721649107,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 163.36881039375368,
            "y": 181.59941107583035,
            "h": 2,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a0",
            "order": 1
          }
        ],
        "sites": {
          "a0": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Alkyl Cl",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "Cl",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Electrophilic"
        }
      },
      "sites": {
        "left:a0": "Nucleophilic",
        "right:a2": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "classify-hard-1",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "O",
            "x": 463.7306695894642,
            "y": 220,
            "h": 1,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "N",
            "x": 281.8653347947321,
            "y": 115,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a1",
            "b": "a6",
            "order": 2
          },
          {
            "id": "b6",
            "a": "a5",
            "b": "a7",
            "order": 1
          },
          {
            "id": "b7",
            "a": "a3",
            "b": "a8",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a6": "Nucleophilic",
          "a7": "Nucleophilic",
          "a8": "Nucleophilic"
        }
      },
      "marked": "a7",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "Oxygen can donate a lone pair to an electrophile.",
      "kind": "classify"
    },
    {
      "id": "label-hard-16",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "O",
            "x": 463.7306695894642,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": -1
          },
          {
            "id": "a8",
            "e": "N",
            "x": 281.8653347947321,
            "y": 115,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a1",
            "b": "a6",
            "order": 2
          },
          {
            "id": "b6",
            "a": "a5",
            "b": "a7",
            "order": 1
          },
          {
            "id": "b7",
            "a": "a3",
            "b": "a8",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a6": "Nucleophilic",
          "a7": "Nucleophilic",
          "a8": "Nucleophilic"
        }
      },
      "sites": {
        "a1": "Electrophilic",
        "a6": "Nucleophilic",
        "a7": "Nucleophilic",
        "a8": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "label-hard-17",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "C",
            "x": 463.73066958946424,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "O",
            "x": 524.352447854375,
            "y": 185,
            "h": 1,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a6",
            "order": 1
          },
          {
            "id": "b6",
            "a": "a1",
            "b": "a7",
            "order": 2
          },
          {
            "id": "b7",
            "a": "a6",
            "b": "a8",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a7": "Nucleophilic",
          "a8": "Nucleophilic",
          "b3": "Nucleophilic"
        }
      },
      "sites": {
        "a1": "Electrophilic",
        "a7": "Nucleophilic",
        "a8": "Nucleophilic",
        "b3": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "classify-hard-6",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "C",
            "x": 463.73066958946424,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "C",
            "x": 524.352447854375,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a9",
            "e": "O",
            "x": 584.9742261192857,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": -1
          },
          {
            "id": "a10",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a6",
            "order": 1
          },
          {
            "id": "b6",
            "a": "a6",
            "b": "a7",
            "order": 1
          },
          {
            "id": "b7",
            "a": "a1",
            "b": "a8",
            "order": 2
          },
          {
            "id": "b8",
            "a": "a7",
            "b": "a9",
            "order": 1
          },
          {
            "id": "b9",
            "a": "a3",
            "b": "a10",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a8": "Nucleophilic",
          "a9": "Nucleophilic",
          "a3": "Electrophilic",
          "a10": "Nucleophilic"
        }
      },
      "marked": "a0",
      "answer": "Neither",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "This saturated carbon is neither a typical electron-pair donor nor acceptor in introductory polar mechanisms.",
      "kind": "classify"
    },
    {
      "id": "pair-hard-10",
      "graph": {
        "name": "Primary amine",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "N",
            "x": 221.24355652982138,
            "y": 220,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Ketone",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a1",
            "b": "a3",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a3": "Nucleophilic"
        }
      },
      "sites": {
        "left:a2": "Nucleophilic",
        "right:a1": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "label-hard-4",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "O",
            "x": 463.7306695894642,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": -1
          },
          {
            "id": "a8",
            "e": "N",
            "x": 281.8653347947321,
            "y": 115,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a1",
            "b": "a6",
            "order": 2
          },
          {
            "id": "b6",
            "a": "a5",
            "b": "a7",
            "order": 1
          },
          {
            "id": "b7",
            "a": "a3",
            "b": "a8",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a6": "Nucleophilic",
          "a7": "Nucleophilic",
          "a8": "Nucleophilic"
        }
      },
      "sites": {
        "a1": "Electrophilic",
        "a6": "Nucleophilic",
        "a7": "Nucleophilic",
        "a8": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "label-hard-7",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "O",
            "x": 463.7306695894642,
            "y": 220,
            "h": 1,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "N",
            "x": 281.8653347947321,
            "y": 115,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a1",
            "b": "a6",
            "order": 2
          },
          {
            "id": "b6",
            "a": "a5",
            "b": "a7",
            "order": 1
          },
          {
            "id": "b7",
            "a": "a3",
            "b": "a8",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a6": "Nucleophilic",
          "a7": "Nucleophilic",
          "a8": "Nucleophilic"
        }
      },
      "sites": {
        "a1": "Electrophilic",
        "a6": "Nucleophilic",
        "a7": "Nucleophilic",
        "a8": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "label-hard-6",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "C",
            "x": 463.73066958946424,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "C",
            "x": 524.352447854375,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a9",
            "e": "O",
            "x": 584.9742261192857,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": -1
          },
          {
            "id": "a10",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a6",
            "order": 1
          },
          {
            "id": "b6",
            "a": "a6",
            "b": "a7",
            "order": 1
          },
          {
            "id": "b7",
            "a": "a1",
            "b": "a8",
            "order": 2
          },
          {
            "id": "b8",
            "a": "a7",
            "b": "a9",
            "order": 1
          },
          {
            "id": "b9",
            "a": "a3",
            "b": "a10",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a8": "Nucleophilic",
          "a9": "Nucleophilic",
          "a3": "Electrophilic",
          "a10": "Nucleophilic"
        }
      },
      "sites": {
        "a1": "Electrophilic",
        "a8": "Nucleophilic",
        "a9": "Nucleophilic",
        "a3": "Electrophilic",
        "a10": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "classify-hard-5",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "C",
            "x": 463.73066958946424,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "O",
            "x": 524.352447854375,
            "y": 185,
            "h": 1,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a6",
            "order": 1
          },
          {
            "id": "b6",
            "a": "a1",
            "b": "a7",
            "order": 2
          },
          {
            "id": "b7",
            "a": "a6",
            "b": "a8",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a7": "Nucleophilic",
          "a8": "Nucleophilic",
          "b3": "Nucleophilic"
        }
      },
      "marked": "a8",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "Oxygen can donate a lone pair to an electrophile.",
      "kind": "classify"
    },
    {
      "id": "pair-hard-20",
      "graph": {
        "name": "Alkoxide",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 342.4871130596428,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a4": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Alkyl Cl",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "Cl",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Electrophilic"
        }
      },
      "sites": {
        "left:a4": "Nucleophilic",
        "right:a2": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "pair-hard-8",
      "graph": {
        "name": "Alkoxide",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 342.4871130596428,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a4": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Alkyl Cl",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "Cl",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          }
        ],
        "sites": {
          "a2": "Electrophilic"
        }
      },
      "sites": {
        "left:a4": "Nucleophilic",
        "right:a2": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "pair-hard-4",
      "graph": {
        "name": "Primary amine",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "N",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a4": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Ketone",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a1",
            "b": "a3",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a3": "Nucleophilic"
        }
      },
      "sites": {
        "left:a4": "Nucleophilic",
        "right:a1": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "classify-hard-9",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "C",
            "x": 463.73066958946424,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "C",
            "x": 524.352447854375,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a9",
            "e": "O",
            "x": 584.9742261192857,
            "y": 220,
            "h": 1,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a10",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a6",
            "order": 1
          },
          {
            "id": "b6",
            "a": "a6",
            "b": "a7",
            "order": 1
          },
          {
            "id": "b7",
            "a": "a1",
            "b": "a8",
            "order": 2
          },
          {
            "id": "b8",
            "a": "a7",
            "b": "a9",
            "order": 1
          },
          {
            "id": "b9",
            "a": "a3",
            "b": "a10",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a8": "Nucleophilic",
          "a9": "Nucleophilic",
          "a3": "Electrophilic",
          "a10": "Nucleophilic"
        }
      },
      "marked": "a9",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "Oxygen can donate a lone pair to an electrophile.",
      "kind": "classify"
    },
    {
      "id": "label-hard-20",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "C",
            "x": 463.73066958946424,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "O",
            "x": 524.352447854375,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a6",
            "order": 1
          },
          {
            "id": "b6",
            "a": "a1",
            "b": "a7",
            "order": 2
          },
          {
            "id": "b7",
            "a": "a6",
            "b": "a8",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a7": "Nucleophilic",
          "a8": "Nucleophilic",
          "b3": "Nucleophilic"
        }
      },
      "sites": {
        "a1": "Electrophilic",
        "a7": "Nucleophilic",
        "a8": "Nucleophilic",
        "b3": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "label-hard-13",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "O",
            "x": 463.7306695894642,
            "y": 220,
            "h": 1,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "N",
            "x": 281.8653347947321,
            "y": 115,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a1",
            "b": "a6",
            "order": 2
          },
          {
            "id": "b6",
            "a": "a5",
            "b": "a7",
            "order": 1
          },
          {
            "id": "b7",
            "a": "a3",
            "b": "a8",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a6": "Nucleophilic",
          "a7": "Nucleophilic",
          "a8": "Nucleophilic"
        }
      },
      "sites": {
        "a1": "Electrophilic",
        "a6": "Nucleophilic",
        "a7": "Nucleophilic",
        "a8": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "label-hard-8",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "C",
            "x": 463.73066958946424,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "O",
            "x": 524.352447854375,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a6",
            "order": 1
          },
          {
            "id": "b6",
            "a": "a1",
            "b": "a7",
            "order": 2
          },
          {
            "id": "b7",
            "a": "a6",
            "b": "a8",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a7": "Nucleophilic",
          "a8": "Nucleophilic",
          "b3": "Nucleophilic"
        }
      },
      "sites": {
        "a1": "Electrophilic",
        "a7": "Nucleophilic",
        "a8": "Nucleophilic",
        "b3": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "label-hard-1",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "O",
            "x": 463.7306695894642,
            "y": 220,
            "h": 1,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "N",
            "x": 281.8653347947321,
            "y": 115,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a1",
            "b": "a6",
            "order": 2
          },
          {
            "id": "b6",
            "a": "a5",
            "b": "a7",
            "order": 1
          },
          {
            "id": "b7",
            "a": "a3",
            "b": "a8",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a6": "Nucleophilic",
          "a7": "Nucleophilic",
          "a8": "Nucleophilic"
        }
      },
      "sites": {
        "a1": "Electrophilic",
        "a6": "Nucleophilic",
        "a7": "Nucleophilic",
        "a8": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "classify-hard-10",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "O",
            "x": 463.7306695894642,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": -1
          },
          {
            "id": "a8",
            "e": "N",
            "x": 281.8653347947321,
            "y": 115,
            "h": 2,
            "lp": 1,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a1",
            "b": "a6",
            "order": 2
          },
          {
            "id": "b6",
            "a": "a5",
            "b": "a7",
            "order": 1
          },
          {
            "id": "b7",
            "a": "a3",
            "b": "a8",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a6": "Nucleophilic",
          "a7": "Nucleophilic",
          "a8": "Nucleophilic"
        }
      },
      "marked": "a0",
      "answer": "Neither",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "This saturated carbon is neither a typical electron-pair donor nor acceptor in introductory polar mechanisms.",
      "kind": "classify"
    },
    {
      "id": "classify-hard-18",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "C",
            "x": 463.73066958946424,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "C",
            "x": 524.352447854375,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a9",
            "e": "O",
            "x": 584.9742261192857,
            "y": 220,
            "h": 0,
            "lp": 3,
            "charge": -1
          },
          {
            "id": "a10",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a6",
            "order": 1
          },
          {
            "id": "b6",
            "a": "a6",
            "b": "a7",
            "order": 1
          },
          {
            "id": "b7",
            "a": "a1",
            "b": "a8",
            "order": 2
          },
          {
            "id": "b8",
            "a": "a7",
            "b": "a9",
            "order": 1
          },
          {
            "id": "b9",
            "a": "a3",
            "b": "a10",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a8": "Nucleophilic",
          "a9": "Nucleophilic",
          "a3": "Electrophilic",
          "a10": "Nucleophilic"
        }
      },
      "marked": "a0",
      "answer": "Neither",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "This saturated carbon is neither a typical electron-pair donor nor acceptor in introductory polar mechanisms.",
      "kind": "classify"
    },
    {
      "id": "classify-hard-15",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "C",
            "x": 463.73066958946424,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "C",
            "x": 524.352447854375,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a9",
            "e": "O",
            "x": 584.9742261192857,
            "y": 220,
            "h": 1,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a10",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a6",
            "order": 1
          },
          {
            "id": "b6",
            "a": "a6",
            "b": "a7",
            "order": 1
          },
          {
            "id": "b7",
            "a": "a1",
            "b": "a8",
            "order": 2
          },
          {
            "id": "b8",
            "a": "a7",
            "b": "a9",
            "order": 1
          },
          {
            "id": "b9",
            "a": "a3",
            "b": "a10",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a8": "Nucleophilic",
          "a9": "Nucleophilic",
          "a3": "Electrophilic",
          "a10": "Nucleophilic"
        }
      },
      "marked": "a1",
      "answer": "Electrophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "The C=O bond is polarised toward oxygen, making the carbonyl carbon electrophilic.",
      "kind": "classify"
    },
    {
      "id": "label-hard-14",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "C",
            "x": 463.73066958946424,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "O",
            "x": 524.352447854375,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a6",
            "order": 1
          },
          {
            "id": "b6",
            "a": "a1",
            "b": "a7",
            "order": 2
          },
          {
            "id": "b7",
            "a": "a6",
            "b": "a8",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a7": "Nucleophilic",
          "a8": "Nucleophilic",
          "b3": "Nucleophilic"
        }
      },
      "sites": {
        "a1": "Electrophilic",
        "a7": "Nucleophilic",
        "a8": "Nucleophilic",
        "b3": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "label-hard-15",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "C",
            "x": 463.73066958946424,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "C",
            "x": 524.352447854375,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a9",
            "e": "O",
            "x": 584.9742261192857,
            "y": 220,
            "h": 1,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a10",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a6",
            "order": 1
          },
          {
            "id": "b6",
            "a": "a6",
            "b": "a7",
            "order": 1
          },
          {
            "id": "b7",
            "a": "a1",
            "b": "a8",
            "order": 2
          },
          {
            "id": "b8",
            "a": "a7",
            "b": "a9",
            "order": 1
          },
          {
            "id": "b9",
            "a": "a3",
            "b": "a10",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a8": "Nucleophilic",
          "a9": "Nucleophilic",
          "a3": "Electrophilic",
          "a10": "Nucleophilic"
        }
      },
      "sites": {
        "a1": "Electrophilic",
        "a8": "Nucleophilic",
        "a9": "Nucleophilic",
        "a3": "Electrophilic",
        "a10": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "label-hard-3",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "C",
            "x": 463.73066958946424,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "C",
            "x": 524.352447854375,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a9",
            "e": "O",
            "x": 584.9742261192857,
            "y": 220,
            "h": 1,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a10",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a6",
            "order": 1
          },
          {
            "id": "b6",
            "a": "a6",
            "b": "a7",
            "order": 1
          },
          {
            "id": "b7",
            "a": "a1",
            "b": "a8",
            "order": 2
          },
          {
            "id": "b8",
            "a": "a7",
            "b": "a9",
            "order": 1
          },
          {
            "id": "b9",
            "a": "a3",
            "b": "a10",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a8": "Nucleophilic",
          "a9": "Nucleophilic",
          "a3": "Electrophilic",
          "a10": "Nucleophilic"
        }
      },
      "sites": {
        "a1": "Electrophilic",
        "a8": "Nucleophilic",
        "a9": "Nucleophilic",
        "a3": "Electrophilic",
        "a10": "Nucleophilic"
      },
      "prompt": "Label the main nucleophilic and electrophilic sites.",
      "hint": "Focus on the main heavy-atom sites and C=C π bonds. Carbonyl and nitrile carbons, and carbons bonded to leaving groups, can accept electron pairs.",
      "explanation": "Nucleophilic sites donate electron pairs; electrophilic sites accept them. The labelled sites match these roles.",
      "kind": "label"
    },
    {
      "id": "classify-hard-8",
      "graph": {
        "name": "Multifunctional compound",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a5",
            "e": "C",
            "x": 403.1088913245535,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a6",
            "e": "C",
            "x": 463.73066958946424,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a7",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a8",
            "e": "O",
            "x": 524.352447854375,
            "y": 185,
            "h": 0,
            "lp": 3,
            "charge": -1
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a5",
            "order": 1
          },
          {
            "id": "b5",
            "a": "a5",
            "b": "a6",
            "order": 1
          },
          {
            "id": "b6",
            "a": "a1",
            "b": "a7",
            "order": 2
          },
          {
            "id": "b7",
            "a": "a6",
            "b": "a8",
            "order": 1
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a7": "Nucleophilic",
          "a8": "Nucleophilic",
          "b3": "Nucleophilic"
        }
      },
      "marked": "a7",
      "answer": "Nucleophilic",
      "prompt": "Classify the marked site.",
      "hint": "Ask whether this site can donate an electron pair, accept one, or neither.",
      "explanation": "Oxygen can donate a lone pair to an electrophile.",
      "kind": "classify"
    },
    {
      "id": "pair-hard-1",
      "graph": {
        "name": "Cyclic amine",
        "atoms": [
          {
            "id": "a0",
            "e": "N",
            "x": 220,
            "y": 140.45444341535722,
            "h": 1,
            "lp": 1,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 276.6311896062463,
            "y": 181.59941107583032,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 255,
            "y": 248.17336721649107,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 185,
            "y": 248.17336721649107,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 163.36881039375368,
            "y": 181.59941107583035,
            "h": 2,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          },
          {
            "id": "b4",
            "a": "a4",
            "b": "a0",
            "order": 1
          }
        ],
        "sites": {
          "a0": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Ketone",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 0,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 160.62177826491066,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a1",
            "b": "a3",
            "order": 2
          }
        ],
        "sites": {
          "a1": "Electrophilic",
          "a3": "Nucleophilic"
        }
      },
      "sites": {
        "left:a0": "Nucleophilic",
        "right:a1": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    },
    {
      "id": "pair-hard-12",
      "graph": {
        "name": "Ether",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "O",
            "x": 281.8653347947321,
            "y": 185,
            "h": 0,
            "lp": 2,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "C",
            "x": 342.4871130596428,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 1
          }
        ],
        "sites": {
          "a3": "Nucleophilic"
        }
      },
      "secondGraph": {
        "name": "Aldehyde",
        "atoms": [
          {
            "id": "a0",
            "e": "C",
            "x": 100,
            "y": 220,
            "h": 3,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a1",
            "e": "C",
            "x": 160.6217782649107,
            "y": 185,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a2",
            "e": "C",
            "x": 221.2435565298214,
            "y": 220,
            "h": 2,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a3",
            "e": "C",
            "x": 281.8653347947321,
            "y": 185,
            "h": 1,
            "lp": 0,
            "charge": 0
          },
          {
            "id": "a4",
            "e": "O",
            "x": 281.8653347947321,
            "y": 115,
            "h": 0,
            "lp": 2,
            "charge": 0
          }
        ],
        "bonds": [
          {
            "id": "b0",
            "a": "a0",
            "b": "a1",
            "order": 1
          },
          {
            "id": "b1",
            "a": "a1",
            "b": "a2",
            "order": 1
          },
          {
            "id": "b2",
            "a": "a2",
            "b": "a3",
            "order": 1
          },
          {
            "id": "b3",
            "a": "a3",
            "b": "a4",
            "order": 2
          }
        ],
        "sites": {
          "a3": "Electrophilic",
          "a4": "Nucleophilic"
        }
      },
      "sites": {
        "left:a3": "Nucleophilic",
        "right:a3": "Electrophilic"
      },
      "prompt": "Select an electron donor on the left and an acceptor on the right.",
      "hint": "The donor supplies an electron pair. The acceptor is an electron-poor atom.",
      "explanation": "The selected nucleophilic site donates an electron pair to the selected electrophilic site.",
      "kind": "pair"
    }
  ]
};
if(typeof module!=="undefined")module.exports=MECHANISM_BANK;

;
// mechanism.js
(function(){
'use strict';
const byId=id=>document.getElementById(id),escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const state={level:'easy',index:0,answers:new Map(),solved:new Set(),tool:'Nucleophilic'};
const current=()=>MECHANISM_BANK[state.level][state.index];
const total=Object.values(MECHANISM_BANK).reduce((n,qs)=>n+qs.length,0);
const measure=document.createElement('canvas').getContext('2d');measure.font='26px Arial';
function labelWidth(text){let width=0;for(const part of text.split(/(\d+)/).filter(Boolean)){measure.font=/^\d+$/.test(part)?'18px Arial':'26px Arial';width+=measure.measureText(part).width;}measure.font='26px Arial';return width;}
function labelMarkup(text){let lowered=false;return text.split(/(\d+)/).filter(Boolean).map(part=>{if(/^\d+$/.test(part)){lowered=true;return `<tspan font-size="18" dy="5">${part}</tspan>`;}const dy=lowered?' dy="-5"':'';lowered=false;return `<tspan${dy}>${escape(part)}</tspan>`;}).join('');}
function atomLabel(g,a){
 if(a.e==='C'&&!a.charge&&a.h===3)return {text:'Me',prefix:'',group:true};
 if(a.e==='C'&&!a.charge)return {text:'',prefix:''};
 const ns=g.bonds.filter(b=>b.a===a.id||b.b===a.id).map(b=>g.atoms.find(n=>n.id===(b.a===a.id?b.b:b.a)));
 const hyd=a.h?'H'+(a.h>1?String(a.h):''):'';
 const prefix=hyd&&ns.length&&ns.reduce((s,n)=>s+n.x-a.x,0)>1?hyd:'';
 return {text:prefix?prefix+a.e:a.e+hyd,prefix};
}
function model(g){
 const atoms=g.atoms.map(a=>{const label=atomLabel(g,a),prefix=labelWidth(label.prefix),core=label.group?labelWidth(label.text):measure.measureText(a.e).width,full=labelWidth(label.text);return {...a,...label,left:label.text?prefix+core/2+4:0,right:label.text?full-prefix-core/2+4:0,top:label.text?18:0,bottom:label.text?20:0};});
 const lookup=new Map(atoms.map(a=>[a.id,a]));
 const bounds={left:Math.min(...atoms.map(a=>a.x-a.left))-28,right:Math.max(...atoms.map(a=>a.x+a.right))+28,top:Math.min(...atoms.map(a=>a.y-a.top))-28,bottom:Math.max(...atoms.map(a=>a.y+a.bottom))+28};
 return {atoms,lookup,bounds};
}
function trim(a,ux,uy){if(!a.text)return 0;return Math.min(Math.abs(ux)>1e-6?(ux<0?a.left:a.right)/Math.abs(ux):Infinity,Math.abs(uy)>1e-6?20/Math.abs(uy):Infinity);}
function distanceToSegment(p,a,b){const dx=b.x-a.x,dy=b.y-a.y,t=Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.y-a.y)*dy)/(dx*dx+dy*dy)));return Math.hypot(p.x-a.x-t*dx,p.y-a.y-t*dy);}
function marker(a){return {x:a.x+(a.right-a.left)/2,y:a.y,rx:Math.max(22,(a.left+a.right)/2+5),ry:23};}
function openDirection(g,atoms,lookup,target,caption=false){
 const ring=caption?marker(target):null,origin=ring||target;
 const angles=[Math.PI/2,-Math.PI/2,Math.PI,0,Math.PI*3/4,-Math.PI*3/4,Math.PI/4,-Math.PI/4];
 const reach=angle=>{const ux=Math.cos(angle),uy=Math.sin(angle);return caption?1/Math.sqrt(ux*ux/(ring.rx*ring.rx)+uy*uy/(ring.ry*ring.ry)):target.text?trim(target,ux,uy):target.id?4:0;};
 let best;
 for(const angle of angles){const ux=Math.cos(angle),uy=Math.sin(angle),gap=reach(angle)+(caption?8+10*Math.abs(ux)+8*Math.abs(uy):12),end={x:origin.x+ux*gap,y:origin.y+uy*gap},start={x:end.x+ux*30,y:end.y+uy*30};let penalty=0;
  const points=caption?[end,...[-10,10].flatMap(x=>[-8,8].map(y=>({x:end.x+x,y:end.y+y})))]:Array.from({length:7},(_,i)=>({x:end.x+ux*i*5,y:end.y+uy*i*5}));
  for(const point of points){for(const a of atoms){if(a.id!==target.id){const dx=Math.max(a.x-a.left-point.x,0,point.x-a.x-a.right),dy=Math.max(a.y-a.top-point.y,0,point.y-a.y-a.bottom);penalty+=Math.max(0,12-Math.hypot(dx,dy))*10;}if(a.charge)penalty+=Math.max(0,16-Math.hypot(point.x-(a.x+a.right+8),point.y-(a.y-20)))*12;}
   for(const b of g.bonds)penalty+=Math.max(0,12-distanceToSegment(point,lookup.get(b.a),lookup.get(b.b)))*5;
  }
  if(!best||penalty<best.penalty-.01)best={angle,ux,uy,end,start,penalty};
 }
 return best;
}
function selected(q,key){return state.answers.get(q.id)?.sites?.[key];}
function drawing(g,q,prefix=''){
 const {atoms,lookup,bounds}=model(g),locked=state.solved.has(q.id),isMarked=q.kind==='classify';
 let svg='';const include=(x,y,pad=12)=>{bounds.left=Math.min(bounds.left,x-pad);bounds.right=Math.max(bounds.right,x+pad);bounds.top=Math.min(bounds.top,y-pad);bounds.bottom=Math.max(bounds.bottom,y+pad);};

 for(const b of g.bonds){const a=lookup.get(b.a),c=lookup.get(b.b),length=Math.hypot(c.x-a.x,c.y-a.y),ux=(c.x-a.x)/length,uy=(c.y-a.y)/length,sa=trim(a,ux,uy),sc=trim(c,-ux,-uy);
  for(const off of b.order===1?[0]:b.order===2?[-3.4,3.4]:[-5,0,5])svg+=`<path class="mechanism-bond" stroke="#172532" stroke-width="2" fill="none" d="M ${a.x+ux*sa-uy*off} ${a.y+uy*sa+ux*off} L ${c.x-ux*sc-uy*off} ${c.y-uy*sc+ux*off}"/>`;
 }
 for(const a of atoms){
  if(a.text){const tx=a.x-labelWidth(a.prefix)-(a.group?labelWidth(a.text):measure.measureText(a.e).width)/2;svg+=`<text class="mechanism-atom" font-family="Arial,sans-serif" font-size="26" fill="#172532" x="${tx}" y="${a.y+9}">${labelMarkup(a.text)}</text>`;}
  if(a.charge){const x=a.x+a.right+8,y=a.y-20;include(x,y,12);svg+=`<g class="mechanism-charge" stroke="#172532" stroke-width="1.4" fill="white" aria-label="${a.charge>0?'Positive':'Negative'} charge"><circle cx="${x}" cy="${y}" r="8"/><path fill="none" d="M ${x-3.5} ${y} H ${x+3.5}${a.charge>0?` M ${x} ${y-3.5} V ${y+3.5}`:''}"/></g>`;}
 }
 // All atoms and pi bonds are selectable; no correct-site hints are shown before selection.
 if(!isMarked){
  for(const b of g.bonds.filter(b=>b.order>1)){const a=lookup.get(b.a),c=lookup.get(b.b),key=prefix+b.id,value=selected(q,key);svg+=`<g class="site-target ${value?'site-'+value.toLowerCase():''}" role="button" tabindex="${locked?-1:0}" data-site="${key}" aria-label="${b.order===2?'Double':'Triple'} bond between atoms ${g.atoms.indexOf(a)+1||g.atoms.findIndex(x=>x.id===a.id)+1} and ${g.atoms.findIndex(x=>x.id===c.id)+1}${value?', labelled '+value:''}" aria-pressed="${Boolean(value)}"><path class="pi-hit" fill="none" stroke="#ffffff" stroke-opacity="0" stroke-width="20" d="M ${a.x+20*(c.x-a.x)/70} ${a.y+20*(c.y-a.y)/70} L ${c.x-20*(c.x-a.x)/70} ${c.y-20*(c.y-a.y)/70}"/>${value?`<path class="pi-selection" fill="none" stroke="${value==='Nucleophilic'?'#1265c6':'#b34614'}" stroke-width="13" opacity=".25" d="M ${a.x} ${a.y} L ${c.x} ${c.y}"/>`:''}</g>`;}
  for(const a of atoms){const key=prefix+a.id,value=selected(q,key),spot=value?openDirection(g,atoms,lookup,a,true).end:null; if(spot)include(spot.x,spot.y,18);svg+=`<g class="site-target ${value?'site-'+value.toLowerCase():''}" role="button" tabindex="${locked?-1:0}" data-site="${key}" aria-label="Atom ${g.atoms.findIndex(x=>x.id===a.id)+1}: ${escape(a.e)}${value?', labelled '+value:''}" aria-pressed="${Boolean(value)}"><circle class="atom-hit" fill="#ffffff" fill-opacity="0" cx="${a.x}" cy="${a.y}" r="20"/>${value?`<ellipse class="atom-selection" fill="none" stroke="${value==='Nucleophilic'?'#1265c6':'#b34614'}" stroke-width="2" cx="${a.x+(a.right-a.left)/2}" cy="${a.y}" rx="${Math.max(22,(a.left+a.right)/2+5)}" ry="23"/><text class="site-caption" font-family="Arial,sans-serif" font-size="15" text-anchor="middle" fill="${value==='Nucleophilic'?'#1265c6':'#b34614'}" x="${spot.x}" y="${spot.y+5}">${value==='Nucleophilic'?'Nu':'E'}</text>`:''}</g>`;}
 }
 if(isMarked){let target=lookup.get(q.marked);if(!target){const b=g.bonds.find(b=>b.id===q.marked),a=lookup.get(b.a),c=lookup.get(b.b);target={x:(a.x+c.x)/2,y:(a.y+c.y)/2};}
  const {ux,uy,end,start}=openDirection(g,atoms,lookup,target);include(start.x,start.y,10);include(end.x,end.y,10);svg+=`<path class="marked-site-arrow" stroke="#c54c19" stroke-width="2.5" fill="none" stroke-linejoin="round" stroke-linecap="round" d="M ${start.x} ${start.y} L ${end.x} ${end.y} M ${end.x+ux*8-uy*5.5} ${end.y+uy*8+ux*5.5} L ${end.x} ${end.y} L ${end.x+ux*8+uy*5.5} ${end.y+uy*8-ux*5.5}"/>`;
 }

 const opening=`<svg xmlns="http://www.w3.org/2000/svg" class="mechanism-structure" width="${bounds.right-bounds.left}" height="${bounds.bottom-bounds.top}" viewBox="${bounds.left} ${bounds.top} ${bounds.right-bounds.left} ${bounds.bottom-bounds.top}" style="width:${bounds.right-bounds.left}px;max-width:100%" role="group" aria-label="${escape(g.name)}. ${isMarked?'Classify the site indicated by the arrow.':'Select atoms or pi bonds to label their roles.'}">`;
 return opening+svg+'</svg>';
}
function getAnswer(q=current()){return state.answers.get(q.id)||{choice:'',sites:{},none:false};}
function canonical(q,key){const isRight=key.startsWith('right:'),prefix=q.kind==='pair'?(isRight?'right:':'left:'):'',id=key.slice(prefix.length),g=isRight?q.secondGraph:q.graph;if(q.kind==='pair')return key;
 const bonds=g.bonds.filter(b=>b.order>1&&(b.a===id||b.b===id)&&g.sites[b.id]==='Nucleophilic'&&!g.sites[id]);return bonds.length===1?bonds[0].id:key;
}
function grade(q,a){if(q.kind==='classify')return a.choice===q.answer;const expected=q.sites,keys=Object.keys(expected);if(!keys.length)return Boolean(a.none)&&!Object.keys(a.sites).length;if(a.none)return false;return Object.keys(a.sites).length===keys.length&&keys.every(k=>a.sites[k]===expected[k]);}
function message(text,kind='hint'){byId('m-feedback').textContent=text;byId('m-feedback').dataset.state=kind;}
function render(){
 const q=current(),qs=MECHANISM_BANK[state.level],a=getAnswer(q),locked=state.solved.has(q.id);
 byId('m-count').textContent=`Question ${state.index+1} of ${qs.length}`;byId('m-score').textContent=`Completed: ${state.solved.size} / ${total}`;byId('m-progress').style.width=100*qs.filter(q=>state.solved.has(q.id)).length/qs.length+'%';byId('m-prompt').textContent=q.prompt;
 document.querySelectorAll('[data-m-level]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mLevel===state.level)));
 byId('m-question').innerHTML=qs.map((_,i)=>`<option value="${i}">Question ${i+1}</option>`).join('');byId('m-question').value=state.index;
 byId('m-diagram').innerHTML=q.kind==='pair'?`<div class="mechanism-pair"><div>${drawing(q.graph,q,'left:')}</div><div>${drawing(q.secondGraph,q,'right:')}</div></div>`:drawing(q.graph,q);
 byId('m-tools').hidden=q.kind==='classify';byId('m-choice').hidden=q.kind!=='classify';byId('m-none-wrap').hidden=q.kind!=='label';byId('m-none').checked=a.none;byId('m-none').disabled=locked;
 document.querySelectorAll('[name="m-classification"]').forEach(r=>{r.checked=r.value===a.choice;r.disabled=locked;});
 document.querySelectorAll('[data-m-tool]').forEach(b=>{b.setAttribute('aria-pressed',String(b.dataset.mTool===state.tool));b.disabled=locked;});
 byId('m-help').textContent=q.kind==='classify'?'':q.kind==='pair'?'Choose a label, then select an atom.':'Choose a label, then click atoms or π bonds. Click a labelled site again to remove it.';
 document.querySelectorAll('[data-site]').forEach(el=>{const select=()=>{if(locked)return;const key=canonical(q,el.dataset.site),next={...getAnswer(),sites:{...getAnswer().sites},none:false};if(next.sites[key]===state.tool)delete next.sites[key];else next.sites[key]=state.tool;state.answers.set(q.id,next);render();};el.addEventListener('click',select);el.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();const key=el.dataset.site;select();document.querySelector(`[data-site="${key}"]`)?.focus();}});});
 byId('m-check').disabled=locked;byId('m-clear').disabled=locked;byId('m-previous').disabled=state.index===0;byId('m-next').disabled=state.index===qs.length-1;message(locked?'Correct. '+q.explanation:'',locked?'correct':'hint');
}
document.querySelectorAll('[name="m-classification"]').forEach(r=>r.addEventListener('change',()=>state.answers.set(current().id,{...getAnswer(),choice:r.value})));
document.querySelectorAll('[data-m-tool]').forEach(b=>b.addEventListener('click',()=>{state.tool=b.dataset.mTool;document.querySelectorAll('[data-m-tool]').forEach(t=>t.setAttribute('aria-pressed',String(t.dataset.mTool===state.tool)));}));
document.querySelectorAll('[data-m-level]').forEach(b=>b.addEventListener('click',()=>{state.level=b.dataset.mLevel;state.index=0;render();}));
byId('m-question').addEventListener('change',e=>{state.index=Number(e.target.value);render();});
byId('m-none').addEventListener('change',e=>{state.answers.set(current().id,{...getAnswer(),none:e.target.checked,sites:{}});render();});
byId('m-hint').addEventListener('click',()=>message('Hint: '+current().hint));
byId('m-clear').addEventListener('click',()=>{if(!state.solved.has(current().id)){state.answers.delete(current().id);render();}});
byId('m-check').addEventListener('click',()=>{const q=current(),a=getAnswer();if(state.solved.has(q.id))return;if(q.kind==='classify'?!a.choice:!a.none&&!Object.keys(a.sites).length){message('Choose your answer before checking.');return;}if(grade(q,a)){state.solved.add(q.id);render();}else message('Incorrect—try again. Hint: '+q.hint,'incorrect');});
byId('m-previous').addEventListener('click',()=>{if(state.index>0){state.index--;render();}});byId('m-next').addEventListener('click',()=>{if(state.index<MECHANISM_BANK[state.level].length-1){state.index++;render();}});
if(typeof globalThis!=='undefined'&&globalThis.__MECHANISM_TEST__)globalThis.mechanismApi={drawing,model,canonical,grade,state,render,getAnswer};
render();
})();
