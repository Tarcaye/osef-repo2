import {romanConverter} from "../../main/es/main";

describe('Conversion', () => {
    describe('To Roman', () => {
        describe('Simplest numbers (I & V)', () => {
            describe('Solo', () => {
                test.each([
                    [1, `I`],
                    [5, `V`]
                ])(
                    "%p => %p",
                    (arabic, roman) => {
                        expect(romanConverter.toRoman(arabic)).toEqual(roman);
                    });
            });
            describe('Pair', () => {
                test.each([
                    [2, `II`]
                ])(
                    "%p => %p",
                    (arabic, roman) => {
                        expect(romanConverter.toRoman(arabic)).toEqual(roman);
                    });
            });
            describe('Triplet', () => {
                test.each([
                    [3, `III`]
                ])(
                    "%p => %p",
                    (arabic, roman) => {
                        expect(romanConverter.toRoman(arabic)).toEqual(roman);
                    });
            });
            describe('Additions', () => {
                test.each([
                    [6, `VI`],
                    [7, `VII`],
                    [8, `VIII`]
                ])(
                    "%p => %p",
                    (arabic, roman) => {
                        expect(romanConverter.toRoman(arabic)).toEqual(roman);
                    });
            });
            describe('Subtraction', () => {
                test.each([
                    [4, `IV`]
                ])(
                    "%p => %p",
                    (arabic, roman) => {
                        expect(romanConverter.toRoman(arabic)).toEqual(roman);
                    });
            });
        });
        describe('Getting harder (X)', () => {
            describe('Solo', () => {
                test.each([
                    [10, `X`]
                ])(
                    "%p => %p",
                    (arabic, roman) => {
                        expect(romanConverter.toRoman(arabic)).toEqual(roman);
                    });
            });
            describe('Pair', () => {
                test.each([
                    [20, `XX`]
                ])(
                    "%p => %p",
                    (arabic, roman) => {
                        expect(romanConverter.toRoman(arabic)).toEqual(roman);
                    });
            });
            describe('Triplet', () => {
                test.each([
                    [30, `XXX`]
                ])(
                    "%p => %p",
                    (arabic, roman) => {
                        expect(romanConverter.toRoman(arabic)).toEqual(roman);
                    });
            });
            describe('Additions', () => {
                test.each([
                    [11, `XI`],
                    [12, `XII`],
                    [13, `XIII`],
                    [15, `XV`],
                    [16, `XVI`],
                    [17, `XVII`],
                    [18, `XVIII`]
                ])(
                    "%p => %p",
                    (arabic, roman) => {
                        expect(romanConverter.toRoman(arabic)).toEqual(roman);
                    });
            });
            describe('Subtraction', () => {
                test.each([
                    [9, `IX`]
                ])(
                    "%p => %p",
                    (arabic, roman) => {
                        expect(romanConverter.toRoman(arabic)).toEqual(roman);
                    });
            });
        });
        describe(`You get the spirit don't you ? (L)`, () => {
            describe('Solo', () => {
                test.each([
                    [50, `L`]
                ])(
                    "%p => %p",
                    (arabic, roman) => {
                        expect(romanConverter.toRoman(arabic)).toEqual(roman);
                    });
            });
            describe('Additions', () => {
                test.each([
                    [51, `LI`],
                    [52, `LII`],
                    [53, `LIII`],
                    [55, `LV`],
                    [56, `LVI`],
                    [57, `LVII`],
                    [58, `LVIII`],
                    [60, `LX`],
                    [61, `LXI`],
                    [62, `LXII`],
                    [63, `LXIII`],
                    [65, `LXV`],
                    [66, `LXVI`],
                    [67, `LXVII`],
                    [68, `LXVIII`],
                ])(
                    "%p => %p",
                    (arabic, roman) => {
                        expect(romanConverter.toRoman(arabic)).toEqual(roman);
                    });
            });
            describe('Subtractions', () => {
                test.each([
                    [40, `XL`]
                ])(
                    "%p => %p",
                    (arabic, roman) => {
                        expect(romanConverter.toRoman(arabic)).toEqual(roman);
                    });
            });
            describe(`🤯 (un-obvious subtractions)`, () => {
                test.each([
                    [45, `XLV`],
                    [49, `XLIX`]
                ])(
                    "%p => %p",
                    (arabic, roman) => {
                        expect(romanConverter.toRoman(arabic)).toEqual(roman);
                    });
            });
        });
        describe(`Pas l'tenmps d'niaiser ... (C,D & M tout d'un coup)`, () => {
            describe('Solo', () => {
                test.each([
                    [100, `C`],
                    [500, `D`],
                    [1000, `M`]
                ])(
                    "%p => %p",
                    (arabic, roman) => {
                        expect(romanConverter.toRoman(arabic)).toEqual(roman);
                    });
            });
            describe('Additions', () => {
                test.each([
                    [101, `CI`],
                    [105, `CV`],
                    [106, `CVI`],
                    [110, `CX`],
                    [111, `CXI`],
                    [115, `CXV`],
                    [116, `CXVI`],
                    [150, `CL`],
                    [151, `CLI`],
                    [155, `CLV`],
                    [156, `CLVI`],
                    [160, `CLX`],
                    [161, `CLXI`],
                    [165, `CLXV`],
                    [166, `CLXVI`],
                    [501, `DI`],
                    [505, `DV`],
                    [506, `DVI`],
                    [510, `DX`],
                    [511, `DXI`],
                    [515, `DXV`],
                    [516, `DXVI`],
                    [550, `DL`],
                    [551, `DLI`],
                    [555, `DLV`],
                    [556, `DLVI`],
                    [560, `DLX`],
                    [561, `DLXI`],
                    [565, `DLXV`],
                    [566, `DLXVI`],
                    [600, `DC`],
                    [601, `DCI`],
                    [605, `DCV`],
                    [606, `DCVI`],
                    [610, `DCX`],
                    [611, `DCXI`],
                    [615, `DCXV`],
                    [616, `DCXVI`],
                    [650, `DCL`],
                    [651, `DCLI`],
                    [655, `DCLV`],
                    [656, `DCLVI`],
                    [660, `DCLX`],
                    [661, `DCLXI`],
                    [665, `DCLXV`],
                    [666, `DCLXVI`],
                    [1001, `MI`],
                    [1005, `MV`],
                    [1006, `MVI`],
                    [1010, `MX`],
                    [1011, `MXI`],
                    [1015, `MXV`],
                    [1016, `MXVI`],
                    [1050, `ML`],
                    [1051, `MLI`],
                    [1055, `MLV`],
                    [1056, `MLVI`],
                    [1060, `MLX`],
                    [1061, `MLXI`],
                    [1065, `MLXV`],
                    [1066, `MLXVI`],
                    [1100, `MC`],
                    [1101, `MCI`],
                    [1105, `MCV`],
                    [1106, `MCVI`],
                    [1110, `MCX`],
                    [1111, `MCXI`],
                    [1115, `MCXV`],
                    [1116, `MCXVI`],
                    [1150, `MCL`],
                    [1151, `MCLI`],
                    [1155, `MCLV`],
                    [1156, `MCLVI`],
                    [1160, `MCLX`],
                    [1161, `MCLXI`],
                    [1165, `MCLXV`],
                    [1166, `MCLXVI`],
                    [1500, `MD`],
                    [1501, `MDI`],
                    [1505, `MDV`],
                    [1506, `MDVI`],
                    [1510, `MDX`],
                    [1511, `MDXI`],
                    [1515, `MDXV`],
                    [1516, `MDXVI`],
                    [1550, `MDL`],
                    [1551, `MDLI`],
                    [1555, `MDLV`],
                    [1556, `MDLVI`],
                    [1560, `MDLX`],
                    [1561, `MDLXI`],
                    [1565, `MDLXV`],
                    [1566, `MDLXVI`],
                    [1600, `MDC`],
                    [1601, `MDCI`],
                    [1605, `MDCV`],
                    [1606, `MDCVI`],
                    [1610, `MDCX`],
                    [1611, `MDCXI`],
                    [1615, `MDCXV`],
                    [1616, `MDCXVI`],
                    [1650, `MDCL`],
                    [1651, `MDCLI`],
                    [1655, `MDCLV`],
                    [1656, `MDCLVI`],
                    [1660, `MDCLX`],
                    [1661, `MDCLXI`],
                    [1665, `MDCLXV`],
                    [1666, `MDCLXVI`]
                ])(
                    "%p => %p",
                    (arabic, roman) => {
                        expect(romanConverter.toRoman(arabic)).toEqual(roman);
                    });
            });
            describe('Subtractions', () => {
                test.each([
                    [90, `XC`],
                    [400, `CD`],
                    [900, `CM`]
                ])(
                    "%p => %p",
                    (arabic, roman) => {
                        expect(romanConverter.toRoman(arabic)).toEqual(roman);
                    });
            });
            describe(`🤯 (un-obvious subtractions)`, () => {
                test.each([
                    [95, `XCV`],
                    [99, `XCIX`],
                    [490, `CDXC`],
                    [495, `CDXCV`],
                    [494, `CDXCIV`],
                    [499, `CDXCIX`],
                    [999, `CMXCIX`]
                ])(
                    "%p => %p",
                    (arabic, roman) => {
                        expect(romanConverter.toRoman(arabic)).toEqual(roman);
                    });
            });
            describe(`4 teh lulz (if you got here everything works already and those are just numbers that are funny for any number of reasons)`, () => {
                test.each([
                    [509, `DIX`],
                    [69, `LXIX`],
                    [42, `XLII`],
                    [666, `DCLXVI`]
                ])(
                    "%p => %p",
                    (arabic, roman) => {
                        expect(romanConverter.toRoman(arabic)).toEqual(roman);
                    });
            });
        });


        // describe('To Arabic', () => {
        //     // describe('Simplest numbers (I & V)', () => {
        //     //     describe('Solo', () => {
        //     //         test.each([
        //     //             [1, `I`],
        //     //             [5, `V`]
        //     //         ])(
        //     //             "%p => %p",
        //     //             (arabic, roman) => {
        //     //                 expect(romanConverter.toRoman(arabic)).toEqual(roman);
        //     //             });
        //     //     });
        //     //     describe('Pair', () => {
        //     //         test.each([
        //     //             [2, `II`]
        //     //         ])(
        //     //             "%p => %p",
        //     //             (arabic, roman) => {
        //     //                 expect(romanConverter.toRoman(arabic)).toEqual(roman);
        //     //             });
        //     //     });
        //     //     describe('Triplet', () => {
        //     //         test.each([
        //     //             [3, `III`]
        //     //         ])(
        //     //             "%p => %p",
        //     //             (arabic, roman) => {
        //     //                 expect(romanConverter.toRoman(arabic)).toEqual(roman);
        //     //             });
        //     //     });
        //     //     describe('Additions', () => {
        //     //         test.each([
        //     //             [6, `VI`],
        //     //             [7, `VII`],
        //     //             [8, `VIII`]
        //     //         ])(
        //     //             "%p => %p",
        //     //             (arabic, roman) => {
        //     //                 expect(romanConverter.toRoman(arabic)).toEqual(roman);
        //     //             });
        //     //     });
        //     //     describe('Subtraction', () => {
        //     //         test.each([
        //     //             [4, `IV`]
        //     //         ])(
        //     //             "%p => %p",
        //     //             (arabic, roman) => {
        //     //                 expect(romanConverter.toRoman(arabic)).toEqual(roman);
        //     //             });
        //     //     });
        //     // });
        //     // describe('Getting harder (X)', () => {
        //     //     describe('Solo', () => {
        //     //         test.each([
        //     //             [10, `X`]
        //     //         ])(
        //     //             "%p => %p",
        //     //             (arabic, roman) => {
        //     //                 expect(romanConverter.toRoman(arabic)).toEqual(roman);
        //     //             });
        //     //     });
        //     //     describe('Pair', () => {
        //     //         test.each([
        //     //             [20, `XX`]
        //     //         ])(
        //     //             "%p => %p",
        //     //             (arabic, roman) => {
        //     //                 expect(romanConverter.toRoman(arabic)).toEqual(roman);
        //     //             });
        //     //     });
        //     //     describe('Triplet', () => {
        //     //         test.each([
        //     //             [30, `XXX`]
        //     //         ])(
        //     //             "%p => %p",
        //     //             (arabic, roman) => {
        //     //                 expect(romanConverter.toRoman(arabic)).toEqual(roman);
        //     //             });
        //     //     });
        //     //     describe('Additions', () => {
        //     //         test.each([
        //     //             [11, `XI`],
        //     //             [12, `XII`],
        //     //             [13, `XIII`],
        //     //             [15, `XV`],
        //     //             [16, `XVI`],
        //     //             [17, `XVII`],
        //     //             [18, `XVIII`]
        //     //         ])(
        //     //             "%p => %p",
        //     //             (arabic, roman) => {
        //     //                 expect(romanConverter.toRoman(arabic)).toEqual(roman);
        //     //             });
        //     //     });
        //     //     describe('Subtraction', () => {
        //     //         test.each([
        //     //             [9, `IX`]
        //     //         ])(
        //     //             "%p => %p",
        //     //             (arabic, roman) => {
        //     //                 expect(romanConverter.toRoman(arabic)).toEqual(roman);
        //     //             });
        //     //     });
        //     // });
        //     // describe(`You get the spirit don't you ? (L)`, () => {
        //     //     describe('Solo', () => {
        //     //         test.each([
        //     //             [50, `L`]
        //     //         ])(
        //     //             "%p => %p",
        //     //             (arabic, roman) => {
        //     //                 expect(romanConverter.toRoman(arabic)).toEqual(roman);
        //     //             });
        //     //     });
        //     //     describe('Additions', () => {
        //     //         test.each([
        //     //             [51, `LI`],
        //     //             [52, `LII`],
        //     //             [53, `LIII`],
        //     //             [55, `LV`],
        //     //             [56, `LVI`],
        //     //             [57, `LVII`],
        //     //             [58, `LVIII`],
        //     //             [60, `LX`],
        //     //             [61, `LXI`],
        //     //             [62, `LXII`],
        //     //             [63, `LXIII`],
        //     //             [65, `LXV`],
        //     //             [66, `LXVI`],
        //     //             [67, `LXVII`],
        //     //             [68, `LXVIII`],
        //     //         ])(
        //     //             "%p => %p",
        //     //             (arabic, roman) => {
        //     //                 expect(romanConverter.toRoman(arabic)).toEqual(roman);
        //     //             });
        //     //     });
        //     //     describe('Subtractions', () => {
        //     //         test.each([
        //     //             [40, `XL`]
        //     //         ])(
        //     //             "%p => %p",
        //     //             (arabic, roman) => {
        //     //                 expect(romanConverter.toRoman(arabic)).toEqual(roman);
        //     //             });
        //     //     });
        //     //     describe(`🤯 (un-obvious subtractions)`, () => {
        //     //         test.each([
        //     //             [45, `XLV`],
        //     //             [49, `XLIX`]
        //     //         ])(
        //     //             "%p => %p",
        //     //             (arabic, roman) => {
        //     //                 expect(romanConverter.toRoman(arabic)).toEqual(roman);
        //     //             });
        //     //     });
        //     // });
        //     // describe(`Pas l'tenmps d'niaiser ... (C,D & M tout d'un coup)`, () => {
        //     //     describe('Solo', () => {
        //     //         test.each([
        //     //             [100, `C`],
        //     //             [500, `D`],
        //     //             [1000, `M`]
        //     //         ])(
        //     //             "%p => %p",
        //     //             (arabic, roman) => {
        //     //                 expect(romanConverter.toRoman(arabic)).toEqual(roman);
        //     //             });
        //     //     });
        //     //     describe('Additions', () => {
        //     //         test.each([
        //     //             [101, `CI`],
        //     //             [105, `CV`],
        //     //             [106, `CVI`],
        //     //             [110, `CX`],
        //     //             [111, `CXI`],
        //     //             [115, `CXV`],
        //     //             [116, `CXVI`],
        //     //             [150, `CL`],
        //     //             [151, `CLI`],
        //     //             [155, `CLV`],
        //     //             [156, `CLVI`],
        //     //             [160, `CLX`],
        //     //             [161, `CLXI`],
        //     //             [165, `CLXV`],
        //     //             [166, `CLXVI`],
        //     //             [501, `DI`],
        //     //             [505, `DV`],
        //     //             [506, `DVI`],
        //     //             [510, `DX`],
        //     //             [511, `DXI`],
        //     //             [515, `DXV`],
        //     //             [516, `DXVI`],
        //     //             [550, `DL`],
        //     //             [551, `DLI`],
        //     //             [555, `DLV`],
        //     //             [556, `DLVI`],
        //     //             [560, `DLX`],
        //     //             [561, `DLXI`],
        //     //             [565, `DLXV`],
        //     //             [566, `DLXVI`],
        //     //             [600, `DC`],
        //     //             [601, `DCI`],
        //     //             [605, `DCV`],
        //     //             [606, `DCVI`],
        //     //             [610, `DCX`],
        //     //             [611, `DCXI`],
        //     //             [615, `DCXV`],
        //     //             [616, `DCXVI`],
        //     //             [650, `DCL`],
        //     //             [651, `DCLI`],
        //     //             [655, `DCLV`],
        //     //             [656, `DCLVI`],
        //     //             [660, `DCLX`],
        //     //             [661, `DCLXI`],
        //     //             [665, `DCLXV`],
        //     //             [666, `DCLXVI`],
        //     //             [1001, `MI`],
        //     //             [1005, `MV`],
        //     //             [1006, `MVI`],
        //     //             [1010, `MX`],
        //     //             [1011, `MXI`],
        //     //             [1015, `MXV`],
        //     //             [1016, `MXVI`],
        //     //             [1050, `ML`],
        //     //             [1051, `MLI`],
        //     //             [1055, `MLV`],
        //     //             [1056, `MLVI`],
        //     //             [1060, `MLX`],
        //     //             [1061, `MLXI`],
        //     //             [1065, `MLXV`],
        //     //             [1066, `MLXVI`],
        //     //             [1100, `MC`],
        //     //             [1101, `MCI`],
        //     //             [1105, `MCV`],
        //     //             [1106, `MCVI`],
        //     //             [1110, `MCX`],
        //     //             [1111, `MCXI`],
        //     //             [1115, `MCXV`],
        //     //             [1116, `MCXVI`],
        //     //             [1150, `MCL`],
        //     //             [1151, `MCLI`],
        //     //             [1155, `MCLV`],
        //     //             [1156, `MCLVI`],
        //     //             [1160, `MCLX`],
        //     //             [1161, `MCLXI`],
        //     //             [1165, `MCLXV`],
        //     //             [1166, `MCLXVI`],
        //     //             [1500, `MD`],
        //     //             [1501, `MDI`],
        //     //             [1505, `MDV`],
        //     //             [1506, `MDVI`],
        //     //             [1510, `MDX`],
        //     //             [1511, `MDXI`],
        //     //             [1515, `MDXV`],
        //     //             [1516, `MDXVI`],
        //     //             [1550, `MDL`],
        //     //             [1551, `MDLI`],
        //     //             [1555, `MDLV`],
        //     //             [1556, `MDLVI`],
        //     //             [1560, `MDLX`],
        //     //             [1561, `MDLXI`],
        //     //             [1565, `MDLXV`],
        //     //             [1566, `MDLXVI`],
        //     //             [1600, `MDC`],
        //     //             [1601, `MDCI`],
        //     //             [1605, `MDCV`],
        //     //             [1606, `MDCVI`],
        //     //             [1610, `MDCX`],
        //     //             [1611, `MDCXI`],
        //     //             [1615, `MDCXV`],
        //     //             [1616, `MDCXVI`],
        //     //             [1650, `MDCL`],
        //     //             [1651, `MDCLI`],
        //     //             [1655, `MDCLV`],
        //     //             [1656, `MDCLVI`],
        //     //             [1660, `MDCLX`],
        //     //             [1661, `MDCLXI`],
        //     //             [1665, `MDCLXV`],
        //     //             [1666, `MDCLXVI`]
        //     //         ])(
        //     //             "%p => %p",
        //     //             (arabic, roman) => {
        //     //                 expect(romanConverter.toRoman(arabic)).toEqual(roman);
        //     //             });
        //     //     });
        //     //     describe('Subtractions', () => {
        //     //         test.each([
        //     //             [90, `XC`],
        //     //             [400, `CD`],
        //     //             [900, `CM`]
        //     //         ])(
        //     //             "%p => %p",
        //     //             (arabic, roman) => {
        //     //                 expect(romanConverter.toRoman(arabic)).toEqual(roman);
        //     //             });
        //     //     });
        //     //     describe(`🤯 (un-obvious subtractions)`, () => {
        //     //         test.each([
        //     //             [95, `XCV`],
        //     //             [99, `XCIX`],
        //     //             [490, `CDXC`],
        //     //             [495, `CDXCV`],
        //     //             [494, `CDXCIV`],
        //     //             [499, `CDXCIX`],
        //     //             [999, `CMXCIX`]
        //     //         ])(
        //     //             "%p => %p",
        //     //             (arabic, roman) => {
        //     //                 expect(romanConverter.toRoman(arabic)).toEqual(roman);
        //     //             });
        //     //     });
        //     //     describe(`4 teh lulz (if you got here everything works already and those are just numbers that are funny for any number of reasons)`, () => {
        //     //         test.each([
        //     //             [509, `DIX`],
        //     //             [69, `LXIX`],
        //     //             [42, `XLII`],
        //     //             [666, `DCLXVI`]
        //     //         ])(
        //     //             "%p => %p",
        //     //             (arabic, roman) => {
        //     //                 expect(romanConverter.toRoman(arabic)).toEqual(roman);
        //     //             });
        //     //     });
        //     // });
        //
        //     // describe('Corner cases chelous', () => {
        //     //     describe('Forbidden romans', () => {
        //     //         describe('Overlapped pairs', () => {
        //     //             test.each([
        //     //                 [`VV`, `ERROR : You should write it X`],
        //     //                 [`LL`, `ERROR : You should write it C`],
        //     //                 [`DD`, `ERROR : You should write it M`]
        //     //             ])(
        //     //                 "%p => %p",
        //     //                 (roman, error) => {
        //     //                     expect(romanConverter.toArabic(roman)).toEqual(error);
        //     //                 });
        //     //         });
        //     //     });
        //     // });
        //
        // })
    });

});

