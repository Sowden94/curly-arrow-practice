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
