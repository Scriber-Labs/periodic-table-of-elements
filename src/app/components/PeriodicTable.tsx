import { useState } from 'react';

interface Element {
  number: number;
  symbol: string;
  name: string;
  mass: number;
  category: string;
  gridRow: number;
  gridCol: number;
  electronConfig?: string;
  description?: string;
}

const elements: Element[] = [
  { number: 1, symbol: 'H', name: 'Hydrogen', mass: 1.008, category: 'nonmetal', gridRow: 1, gridCol: 1, electronConfig: '1s¹', description: 'Lightest and most abundant element in the universe' },
  { number: 2, symbol: 'He', name: 'Helium', mass: 4.003, category: 'noble-gas', gridRow: 1, gridCol: 18, electronConfig: '1s²', description: 'Second lightest element, used in balloons and cooling' },

  { number: 3, symbol: 'Li', name: 'Lithium', mass: 6.941, category: 'alkali-metal', gridRow: 2, gridCol: 1, electronConfig: '[He] 2s¹' },
  { number: 4, symbol: 'Be', name: 'Beryllium', mass: 9.012, category: 'alkaline-earth', gridRow: 2, gridCol: 2, electronConfig: '[He] 2s²' },
  { number: 5, symbol: 'B', name: 'Boron', mass: 10.81, category: 'metalloid', gridRow: 2, gridCol: 13, electronConfig: '[He] 2s² 2p¹' },
  { number: 6, symbol: 'C', name: 'Carbon', mass: 12.01, category: 'nonmetal', gridRow: 2, gridCol: 14, electronConfig: '[He] 2s² 2p²' },
  { number: 7, symbol: 'N', name: 'Nitrogen', mass: 14.01, category: 'nonmetal', gridRow: 2, gridCol: 15, electronConfig: '[He] 2s² 2p³' },
  { number: 8, symbol: 'O', name: 'Oxygen', mass: 16.00, category: 'nonmetal', gridRow: 2, gridCol: 16, electronConfig: '[He] 2s² 2p⁴' },
  { number: 9, symbol: 'F', name: 'Fluorine', mass: 19.00, category: 'halogen', gridRow: 2, gridCol: 17, electronConfig: '[He] 2s² 2p⁵' },
  { number: 10, symbol: 'Ne', name: 'Neon', mass: 20.18, category: 'noble-gas', gridRow: 2, gridCol: 18, electronConfig: '[He] 2s² 2p⁶' },

  { number: 11, symbol: 'Na', name: 'Sodium', mass: 22.99, category: 'alkali-metal', gridRow: 3, gridCol: 1, electronConfig: '[Ne] 3s¹' },
  { number: 12, symbol: 'Mg', name: 'Magnesium', mass: 24.31, category: 'alkaline-earth', gridRow: 3, gridCol: 2, electronConfig: '[Ne] 3s²' },
  { number: 13, symbol: 'Al', name: 'Aluminum', mass: 26.98, category: 'post-transition', gridRow: 3, gridCol: 13, electronConfig: '[Ne] 3s² 3p¹' },
  { number: 14, symbol: 'Si', name: 'Silicon', mass: 28.09, category: 'metalloid', gridRow: 3, gridCol: 14, electronConfig: '[Ne] 3s² 3p²' },
  { number: 15, symbol: 'P', name: 'Phosphorus', mass: 30.97, category: 'nonmetal', gridRow: 3, gridCol: 15, electronConfig: '[Ne] 3s² 3p³' },
  { number: 16, symbol: 'S', name: 'Sulfur', mass: 32.07, category: 'nonmetal', gridRow: 3, gridCol: 16, electronConfig: '[Ne] 3s² 3p⁴' },
  { number: 17, symbol: 'Cl', name: 'Chlorine', mass: 35.45, category: 'halogen', gridRow: 3, gridCol: 17, electronConfig: '[Ne] 3s² 3p⁵' },
  { number: 18, symbol: 'Ar', name: 'Argon', mass: 39.95, category: 'noble-gas', gridRow: 3, gridCol: 18, electronConfig: '[Ne] 3s² 3p⁶' },

  { number: 19, symbol: 'K', name: 'Potassium', mass: 39.10, category: 'alkali-metal', gridRow: 4, gridCol: 1, electronConfig: '[Ar] 4s¹' },
  { number: 20, symbol: 'Ca', name: 'Calcium', mass: 40.08, category: 'alkaline-earth', gridRow: 4, gridCol: 2, electronConfig: '[Ar] 4s²' },
  { number: 21, symbol: 'Sc', name: 'Scandium', mass: 44.96, category: 'transition-metal', gridRow: 4, gridCol: 3, electronConfig: '[Ar] 3d¹ 4s²' },
  { number: 22, symbol: 'Ti', name: 'Titanium', mass: 47.87, category: 'transition-metal', gridRow: 4, gridCol: 4, electronConfig: '[Ar] 3d² 4s²' },
  { number: 23, symbol: 'V', name: 'Vanadium', mass: 50.94, category: 'transition-metal', gridRow: 4, gridCol: 5, electronConfig: '[Ar] 3d³ 4s²' },
  { number: 24, symbol: 'Cr', name: 'Chromium', mass: 52.00, category: 'transition-metal', gridRow: 4, gridCol: 6, electronConfig: '[Ar] 3d⁵ 4s¹' },
  { number: 25, symbol: 'Mn', name: 'Manganese', mass: 54.94, category: 'transition-metal', gridRow: 4, gridCol: 7, electronConfig: '[Ar] 3d⁵ 4s²' },
  { number: 26, symbol: 'Fe', name: 'Iron', mass: 55.85, category: 'transition-metal', gridRow: 4, gridCol: 8, electronConfig: '[Ar] 3d⁶ 4s²' },
  { number: 27, symbol: 'Co', name: 'Cobalt', mass: 58.93, category: 'transition-metal', gridRow: 4, gridCol: 9, electronConfig: '[Ar] 3d⁷ 4s²' },
  { number: 28, symbol: 'Ni', name: 'Nickel', mass: 58.69, category: 'transition-metal', gridRow: 4, gridCol: 10, electronConfig: '[Ar] 3d⁸ 4s²' },
  { number: 29, symbol: 'Cu', name: 'Copper', mass: 63.55, category: 'transition-metal', gridRow: 4, gridCol: 11, electronConfig: '[Ar] 3d¹⁰ 4s¹' },
  { number: 30, symbol: 'Zn', name: 'Zinc', mass: 65.38, category: 'transition-metal', gridRow: 4, gridCol: 12, electronConfig: '[Ar] 3d¹⁰ 4s²' },
  { number: 31, symbol: 'Ga', name: 'Gallium', mass: 69.72, category: 'post-transition', gridRow: 4, gridCol: 13, electronConfig: '[Ar] 3d¹⁰ 4s² 4p¹' },
  { number: 32, symbol: 'Ge', name: 'Germanium', mass: 72.63, category: 'metalloid', gridRow: 4, gridCol: 14, electronConfig: '[Ar] 3d¹⁰ 4s² 4p²' },
  { number: 33, symbol: 'As', name: 'Arsenic', mass: 74.92, category: 'metalloid', gridRow: 4, gridCol: 15, electronConfig: '[Ar] 3d¹⁰ 4s² 4p³' },
  { number: 34, symbol: 'Se', name: 'Selenium', mass: 78.97, category: 'nonmetal', gridRow: 4, gridCol: 16, electronConfig: '[Ar] 3d¹⁰ 4s² 4p⁴' },
  { number: 35, symbol: 'Br', name: 'Bromine', mass: 79.90, category: 'halogen', gridRow: 4, gridCol: 17, electronConfig: '[Ar] 3d¹⁰ 4s² 4p⁵' },
  { number: 36, symbol: 'Kr', name: 'Krypton', mass: 83.80, category: 'noble-gas', gridRow: 4, gridCol: 18, electronConfig: '[Ar] 3d¹⁰ 4s² 4p⁶' },

  { number: 37, symbol: 'Rb', name: 'Rubidium', mass: 85.47, category: 'alkali-metal', gridRow: 5, gridCol: 1 },
  { number: 38, symbol: 'Sr', name: 'Strontium', mass: 87.62, category: 'alkaline-earth', gridRow: 5, gridCol: 2 },
  { number: 39, symbol: 'Y', name: 'Yttrium', mass: 88.91, category: 'transition-metal', gridRow: 5, gridCol: 3 },
  { number: 40, symbol: 'Zr', name: 'Zirconium', mass: 91.22, category: 'transition-metal', gridRow: 5, gridCol: 4 },
  { number: 41, symbol: 'Nb', name: 'Niobium', mass: 92.91, category: 'transition-metal', gridRow: 5, gridCol: 5 },
  { number: 42, symbol: 'Mo', name: 'Molybdenum', mass: 95.95, category: 'transition-metal', gridRow: 5, gridCol: 6 },
  { number: 43, symbol: 'Tc', name: 'Technetium', mass: 98, category: 'transition-metal', gridRow: 5, gridCol: 7 },
  { number: 44, symbol: 'Ru', name: 'Ruthenium', mass: 101.1, category: 'transition-metal', gridRow: 5, gridCol: 8 },
  { number: 45, symbol: 'Rh', name: 'Rhodium', mass: 102.9, category: 'transition-metal', gridRow: 5, gridCol: 9 },
  { number: 46, symbol: 'Pd', name: 'Palladium', mass: 106.4, category: 'transition-metal', gridRow: 5, gridCol: 10 },
  { number: 47, symbol: 'Ag', name: 'Silver', mass: 107.9, category: 'transition-metal', gridRow: 5, gridCol: 11 },
  { number: 48, symbol: 'Cd', name: 'Cadmium', mass: 112.4, category: 'transition-metal', gridRow: 5, gridCol: 12 },
  { number: 49, symbol: 'In', name: 'Indium', mass: 114.8, category: 'post-transition', gridRow: 5, gridCol: 13 },
  { number: 50, symbol: 'Sn', name: 'Tin', mass: 118.7, category: 'post-transition', gridRow: 5, gridCol: 14 },
  { number: 51, symbol: 'Sb', name: 'Antimony', mass: 121.8, category: 'metalloid', gridRow: 5, gridCol: 15 },
  { number: 52, symbol: 'Te', name: 'Tellurium', mass: 127.6, category: 'metalloid', gridRow: 5, gridCol: 16 },
  { number: 53, symbol: 'I', name: 'Iodine', mass: 126.9, category: 'halogen', gridRow: 5, gridCol: 17 },
  { number: 54, symbol: 'Xe', name: 'Xenon', mass: 131.3, category: 'noble-gas', gridRow: 5, gridCol: 18 },

  { number: 55, symbol: 'Cs', name: 'Cesium', mass: 132.9, category: 'alkali-metal', gridRow: 6, gridCol: 1 },
  { number: 56, symbol: 'Ba', name: 'Barium', mass: 137.3, category: 'alkaline-earth', gridRow: 6, gridCol: 2 },
  { number: 57, symbol: 'La', name: 'Lanthanum', mass: 138.9, category: 'lanthanide', gridRow: 8, gridCol: 3 },
  { number: 58, symbol: 'Ce', name: 'Cerium', mass: 140.1, category: 'lanthanide', gridRow: 8, gridCol: 4 },
  { number: 59, symbol: 'Pr', name: 'Praseodymium', mass: 140.9, category: 'lanthanide', gridRow: 8, gridCol: 5 },
  { number: 60, symbol: 'Nd', name: 'Neodymium', mass: 144.2, category: 'lanthanide', gridRow: 8, gridCol: 6 },
  { number: 61, symbol: 'Pm', name: 'Promethium', mass: 145, category: 'lanthanide', gridRow: 8, gridCol: 7 },
  { number: 62, symbol: 'Sm', name: 'Samarium', mass: 150.4, category: 'lanthanide', gridRow: 8, gridCol: 8 },
  { number: 63, symbol: 'Eu', name: 'Europium', mass: 152.0, category: 'lanthanide', gridRow: 8, gridCol: 9 },
  { number: 64, symbol: 'Gd', name: 'Gadolinium', mass: 157.3, category: 'lanthanide', gridRow: 8, gridCol: 10 },
  { number: 65, symbol: 'Tb', name: 'Terbium', mass: 158.9, category: 'lanthanide', gridRow: 8, gridCol: 11 },
  { number: 66, symbol: 'Dy', name: 'Dysprosium', mass: 162.5, category: 'lanthanide', gridRow: 8, gridCol: 12 },
  { number: 67, symbol: 'Ho', name: 'Holmium', mass: 164.9, category: 'lanthanide', gridRow: 8, gridCol: 13 },
  { number: 68, symbol: 'Er', name: 'Erbium', mass: 167.3, category: 'lanthanide', gridRow: 8, gridCol: 14 },
  { number: 69, symbol: 'Tm', name: 'Thulium', mass: 168.9, category: 'lanthanide', gridRow: 8, gridCol: 15 },
  { number: 70, symbol: 'Yb', name: 'Ytterbium', mass: 173.0, category: 'lanthanide', gridRow: 8, gridCol: 16 },
  { number: 71, symbol: 'Lu', name: 'Lutetium', mass: 175.0, category: 'lanthanide', gridRow: 8, gridCol: 17 },
  { number: 72, symbol: 'Hf', name: 'Hafnium', mass: 178.5, category: 'transition-metal', gridRow: 6, gridCol: 4 },
  { number: 73, symbol: 'Ta', name: 'Tantalum', mass: 180.9, category: 'transition-metal', gridRow: 6, gridCol: 5 },
  { number: 74, symbol: 'W', name: 'Tungsten', mass: 183.8, category: 'transition-metal', gridRow: 6, gridCol: 6 },
  { number: 75, symbol: 'Re', name: 'Rhenium', mass: 186.2, category: 'transition-metal', gridRow: 6, gridCol: 7 },
  { number: 76, symbol: 'Os', name: 'Osmium', mass: 190.2, category: 'transition-metal', gridRow: 6, gridCol: 8 },
  { number: 77, symbol: 'Ir', name: 'Iridium', mass: 192.2, category: 'transition-metal', gridRow: 6, gridCol: 9 },
  { number: 78, symbol: 'Pt', name: 'Platinum', mass: 195.1, category: 'transition-metal', gridRow: 6, gridCol: 10 },
  { number: 79, symbol: 'Au', name: 'Gold', mass: 197.0, category: 'transition-metal', gridRow: 6, gridCol: 11 },
  { number: 80, symbol: 'Hg', name: 'Mercury', mass: 200.6, category: 'transition-metal', gridRow: 6, gridCol: 12 },
  { number: 81, symbol: 'Tl', name: 'Thallium', mass: 204.4, category: 'post-transition', gridRow: 6, gridCol: 13 },
  { number: 82, symbol: 'Pb', name: 'Lead', mass: 207.2, category: 'post-transition', gridRow: 6, gridCol: 14 },
  { number: 83, symbol: 'Bi', name: 'Bismuth', mass: 209.0, category: 'post-transition', gridRow: 6, gridCol: 15 },
  { number: 84, symbol: 'Po', name: 'Polonium', mass: 209, category: 'metalloid', gridRow: 6, gridCol: 16 },
  { number: 85, symbol: 'At', name: 'Astatine', mass: 210, category: 'halogen', gridRow: 6, gridCol: 17 },
  { number: 86, symbol: 'Rn', name: 'Radon', mass: 222, category: 'noble-gas', gridRow: 6, gridCol: 18 },

  { number: 87, symbol: 'Fr', name: 'Francium', mass: 223, category: 'alkali-metal', gridRow: 7, gridCol: 1 },
  { number: 88, symbol: 'Ra', name: 'Radium', mass: 226, category: 'alkaline-earth', gridRow: 7, gridCol: 2 },
  { number: 89, symbol: 'Ac', name: 'Actinium', mass: 227, category: 'actinide', gridRow: 9, gridCol: 3 },
  { number: 90, symbol: 'Th', name: 'Thorium', mass: 232.0, category: 'actinide', gridRow: 9, gridCol: 4 },
  { number: 91, symbol: 'Pa', name: 'Protactinium', mass: 231.0, category: 'actinide', gridRow: 9, gridCol: 5 },
  { number: 92, symbol: 'U', name: 'Uranium', mass: 238.0, category: 'actinide', gridRow: 9, gridCol: 6 },
  { number: 93, symbol: 'Np', name: 'Neptunium', mass: 237, category: 'actinide', gridRow: 9, gridCol: 7 },
  { number: 94, symbol: 'Pu', name: 'Plutonium', mass: 244, category: 'actinide', gridRow: 9, gridCol: 8 },
  { number: 95, symbol: 'Am', name: 'Americium', mass: 243, category: 'actinide', gridRow: 9, gridCol: 9 },
  { number: 96, symbol: 'Cm', name: 'Curium', mass: 247, category: 'actinide', gridRow: 9, gridCol: 10 },
  { number: 97, symbol: 'Bk', name: 'Berkelium', mass: 247, category: 'actinide', gridRow: 9, gridCol: 11 },
  { number: 98, symbol: 'Cf', name: 'Californium', mass: 251, category: 'actinide', gridRow: 9, gridCol: 12 },
  { number: 99, symbol: 'Es', name: 'Einsteinium', mass: 252, category: 'actinide', gridRow: 9, gridCol: 13 },
  { number: 100, symbol: 'Fm', name: 'Fermium', mass: 257, category: 'actinide', gridRow: 9, gridCol: 14 },
  { number: 101, symbol: 'Md', name: 'Mendelevium', mass: 258, category: 'actinide', gridRow: 9, gridCol: 15 },
  { number: 102, symbol: 'No', name: 'Nobelium', mass: 259, category: 'actinide', gridRow: 9, gridCol: 16 },
  { number: 103, symbol: 'Lr', name: 'Lawrencium', mass: 262, category: 'actinide', gridRow: 9, gridCol: 17 },
  { number: 104, symbol: 'Rf', name: 'Rutherfordium', mass: 267, category: 'transition-metal', gridRow: 7, gridCol: 4 },
  { number: 105, symbol: 'Db', name: 'Dubnium', mass: 268, category: 'transition-metal', gridRow: 7, gridCol: 5 },
  { number: 106, symbol: 'Sg', name: 'Seaborgium', mass: 269, category: 'transition-metal', gridRow: 7, gridCol: 6 },
  { number: 107, symbol: 'Bh', name: 'Bohrium', mass: 270, category: 'transition-metal', gridRow: 7, gridCol: 7 },
  { number: 108, symbol: 'Hs', name: 'Hassium', mass: 277, category: 'transition-metal', gridRow: 7, gridCol: 8 },
  { number: 109, symbol: 'Mt', name: 'Meitnerium', mass: 278, category: 'transition-metal', gridRow: 7, gridCol: 9 },
  { number: 110, symbol: 'Ds', name: 'Darmstadtium', mass: 281, category: 'transition-metal', gridRow: 7, gridCol: 10 },
  { number: 111, symbol: 'Rg', name: 'Roentgenium', mass: 282, category: 'transition-metal', gridRow: 7, gridCol: 11 },
  { number: 112, symbol: 'Cn', name: 'Copernicium', mass: 285, category: 'transition-metal', gridRow: 7, gridCol: 12 },
  { number: 113, symbol: 'Nh', name: 'Nihonium', mass: 286, category: 'post-transition', gridRow: 7, gridCol: 13 },
  { number: 114, symbol: 'Fl', name: 'Flerovium', mass: 289, category: 'post-transition', gridRow: 7, gridCol: 14 },
  { number: 115, symbol: 'Mc', name: 'Moscovium', mass: 290, category: 'post-transition', gridRow: 7, gridCol: 15 },
  { number: 116, symbol: 'Lv', name: 'Livermorium', mass: 293, category: 'post-transition', gridRow: 7, gridCol: 16 },
  { number: 117, symbol: 'Ts', name: 'Tennessine', mass: 294, category: 'halogen', gridRow: 7, gridCol: 17 },
  { number: 118, symbol: 'Og', name: 'Oganesson', mass: 294, category: 'noble-gas', gridRow: 7, gridCol: 18 },
];

const categoryColors = {
  'alkali-metal': 'from-[#F75594] to-[#F76755]',
  'alkaline-earth': 'from-[#F78F55] to-[#F7B855]',
  'transition-metal': 'from-[#00FF97] to-[#00FFD6]',
  'post-transition': 'from-[#00E8FF] to-[#00A8FF]',
  'metalloid': 'from-[#52D6FF] to-[#52ABFF]',
  'nonmetal': 'from-[#5280FF] to-[#5255FF]',
  'halogen': 'from-[#7A52FF] to-[#7952F5]',
  'noble-gas': 'from-[#A252F5] to-[#CA52F5]',
  'lanthanide': 'from-[#81FE38] to-[#50FE38]',
  'actinide': 'from-[#F7B855] to-[#F78F55]',
};

export function PeriodicTable() {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen w-full p-8 bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/src/imports/spacebackground.png')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-[url('/src/imports/vanilla_galaxy.png')] bg-cover bg-center opacity-10" />

      {/* Title */}
      <div className="relative z-10 mb-8 text-center" style={{ fontFamily: 'Aclonica, sans-serif' }}>
        <h1 className="text-6xl font-bold bg-gradient-to-r from-[#14b5ff] via-[#5280ff] to-[#7952f5] bg-clip-text text-transparent mb-4 drop-shadow-[0_4px_12px_rgba(20,181,255,0.6)]"
          style={{
            WebkitTextStroke: '1px rgba(255,255,255,0.2)',
            paintOrder: 'stroke fill',
          }}
        >
          Interactive Periodic Table
        </h1>
        <p className="text-xl text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">Eigenscribe Glassmorphic Edition</p>
      </div>

      {/* Legend */}
      <div className="relative z-10 mb-8 flex flex-wrap justify-center gap-3" style={{ fontFamily: 'Aclonica, sans-serif' }}>
        {Object.entries(categoryColors).map(([category, gradient]) => (
          <button
            key={category}
            onMouseEnter={() => setHoveredCategory(category)}
            onMouseLeave={() => setHoveredCategory(null)}
            className={`px-5 py-3 rounded-xl backdrop-blur-xl bg-gradient-to-r ${gradient} bg-opacity-20 border-2 border-white/40 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:border-white/70 active:scale-95`}
            style={{
              boxShadow: '0 4px 20px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.2)',
            }}
          >
            <span className="text-base font-semibold text-white capitalize drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              style={{
                WebkitTextStroke: '0.3px rgba(255,255,255,0.4)',
                paintOrder: 'stroke fill',
              }}
            >
              {category.replace('-', ' ')}
            </span>
          </button>
        ))}
      </div>

      {/* Periodic Table Grid */}
      <div className="relative z-10 max-w-[1800px] mx-auto">
        <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(18, minmax(0, 1fr))' }}>
          {elements.map((element) => {
            const isHovered = hoveredCategory === element.category;
            const isDimmed = hoveredCategory && hoveredCategory !== element.category;

            return (
              <button
                key={element.number}
                onClick={() => setSelectedElement(element)}
                className={`
                  aspect-square p-3 rounded-xl backdrop-blur-xl
                  bg-gradient-to-br ${categoryColors[element.category as keyof typeof categoryColors]}
                  bg-opacity-10 border-2 border-white/40
                  transition-all duration-300 ease-out
                  hover:scale-110 hover:z-20 hover:shadow-2xl hover:border-white/70
                  active:scale-95
                  ${isHovered ? 'ring-2 ring-white/70 scale-105 shadow-xl' : ''}
                  ${isDimmed ? 'opacity-30' : 'opacity-100'}
                  group cursor-pointer relative
                `}
                style={{
                  gridColumn: element.gridCol,
                  gridRow: element.gridRow,
                  fontFamily: 'Aclonica, sans-serif',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.15)',
                }}
              >
                {/* Flowing gradient overlay */}
                <div
                  className="absolute inset-0 rounded-xl opacity-20 pointer-events-none"
                  style={{
                    background: `linear-gradient(${(element.gridCol * 20 + element.gridRow * 10)}deg,
                      rgba(20, 181, 255, 0.3),
                      rgba(82, 128, 255, 0.2),
                      rgba(121, 82, 245, 0.3))`,
                  }}
                />

                <div className="h-full flex flex-col justify-between items-center text-center overflow-hidden relative z-10">
                  <div className="text-xs font-semibold text-white group-hover:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
                    style={{
                      WebkitTextStroke: '0.3px rgba(255,255,255,0.4)',
                      paintOrder: 'stroke fill',
                    }}
                  >
                    {element.number}
                  </div>
                  <div className={`font-bold bg-gradient-to-br ${categoryColors[element.category as keyof typeof categoryColors]} bg-clip-text text-transparent group-hover:scale-110 transition-transform drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)] ${element.symbol.length > 1 ? 'text-3xl' : 'text-4xl'}`}
                    style={{
                      WebkitTextStroke: '0.8px rgba(255,255,255,0.4)',
                      paintOrder: 'stroke fill',
                    }}
                  >
                    {element.symbol}
                  </div>
                  <div className="text-xs text-white group-hover:text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] truncate max-w-full px-1"
                    style={{
                      WebkitTextStroke: '0.3px rgba(255,255,255,0.3)',
                      paintOrder: 'stroke fill',
                    }}
                  >
                    {element.name}
                  </div>
                  <div className="text-[10px] text-white/90 group-hover:text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)]"
                    style={{
                      WebkitTextStroke: '0.2px rgba(255,255,255,0.3)',
                      paintOrder: 'stroke fill',
                    }}
                  >
                    {element.mass}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Lanthanides and Actinides Separator */}
        <div className="mt-8 text-center text-base text-white mb-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]" style={{ fontFamily: 'Aclonica, sans-serif' }}>
          Lanthanides & Actinides
        </div>
      </div>

      {/* Element Detail Modal */}
      {selectedElement && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg"
          onClick={() => setSelectedElement(null)}
        >
          <div
            className={`
              relative max-w-2xl w-full p-8 rounded-3xl backdrop-blur-2xl
              bg-gradient-to-br ${categoryColors[selectedElement.category as keyof typeof categoryColors]}
              bg-opacity-10 border-2 border-white/50
              shadow-2xl animate-in fade-in zoom-in duration-300
            `}
            onClick={(e) => e.stopPropagation()}
            style={{
              fontFamily: 'Aclonica, sans-serif',
              boxShadow: '0 8px 40px rgba(0,0,0,0.7), inset 0 2px 4px rgba(255,255,255,0.2)',
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedElement(null)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full backdrop-blur-md bg-white/10 border-2 border-white/40 hover:bg-white/20 hover:scale-110 transition-all"
              style={{
                boxShadow: '0 4px 12px rgba(0,0,0,0.6)',
              }}
            >
              <span className="text-white text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">×</span>
            </button>

            {/* Element Symbol Large */}
            <div className="text-center mb-6">
              <div className={`text-9xl font-bold bg-gradient-to-br ${categoryColors[selectedElement.category as keyof typeof categoryColors]} bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]`}
                style={{
                  WebkitTextStroke: '2px rgba(255,255,255,0.3)',
                  paintOrder: 'stroke fill',
                }}
              >
                {selectedElement.symbol}
              </div>
              <div className="text-4xl font-semibold text-white mt-2 drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]"
                style={{
                  WebkitTextStroke: '0.5px rgba(255,255,255,0.3)',
                  paintOrder: 'stroke fill',
                }}
              >
                {selectedElement.name}
              </div>
              <div className="text-xl text-white mt-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
                Atomic Number: {selectedElement.number}
              </div>
            </div>

            {/* Element Details */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-5 border-2 border-white/30"
                style={{
                  boxShadow: '0 4px 16px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.15)',
                }}
              >
                <div className="text-sm text-white/80 mb-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">Atomic Mass</div>
                <div className="text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{selectedElement.mass}</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-5 border-2 border-white/30"
                style={{
                  boxShadow: '0 4px 16px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.15)',
                }}
              >
                <div className="text-sm text-white/80 mb-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">Category</div>
                <div className="text-xl font-semibold text-white capitalize drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {selectedElement.category.replace('-', ' ')}
                </div>
              </div>
              {selectedElement.electronConfig && (
                <div className="col-span-2 bg-white/5 backdrop-blur-md rounded-xl p-5 border-2 border-white/30"
                  style={{
                    boxShadow: '0 4px 16px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.15)',
                  }}
                >
                  <div className="text-sm text-white/80 mb-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">Electron Configuration</div>
                  <div className="text-lg font-mono text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{selectedElement.electronConfig}</div>
                </div>
              )}
              {selectedElement.description && (
                <div className="col-span-2 bg-white/5 backdrop-blur-md rounded-xl p-5 border-2 border-white/30"
                  style={{
                    boxShadow: '0 4px 16px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.15)',
                  }}
                >
                  <div className="text-sm text-white/80 mb-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">Description</div>
                  <div className="text-base text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">{selectedElement.description}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
