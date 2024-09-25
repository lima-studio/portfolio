
const articulatCF = [
  {
    path: "./49645.otf",
    weight: "400",
    style: "normal",
  },
  {
    path: "./49646.otf",
    weight: "400",
    style: "italic",
  },
  {
    path: "./49647.otf",
    weight: "500",
    style: "normal",
  },
  {
    path: "./49648.otf",
    weight: "500",
    style: "italic",
  },
  {
    path: "./49649.otf",
    weight: "600",
    style: "normal",
  },
  {
    path: "./49650.otf",
    weight: "600",
    style: "italic",
  },
  {
    path: "./49651.otf",
    weight: "700",
    style: "normal",
  },
  {
    path: "./49652.otf",
    weight: "700",
    style: "italic",
  },
  {
    path: "./49653.otf",
    weight: "800",
    style: "normal",
  },
  {
    path: "./49654.otf",
    weight: "800",
    style: "italic",
  },
  {
    path: "./51646.otf",
    weight: "400",
    style: "normal",
  },
  {
    path: "./51647.otf",
    weight: "400",
    style: "italic",
  },
  {
    path: "./51648.otf",
    weight: "500",
    style: "normal",
  },
  {
    path: "./51649.otf",
    weight: "500",
    style: "italic",
  },
  {
    path: "./51650.otf",
    weight: "600",
    style: "normal",
  },
  {
    path: "./51651.otf",
    weight: "600",
    style: "italic",
  },
  {
    path: "./51652.otf",
    weight: "700",
    style: "normal",
  },
  {
    path: "./51653.otf",
    weight: "700",
    style: "italic",
  },
  {
    path: "./51654.otf",
    weight: "800",
    style: "normal",
  },
  {
    path: "./51655.otf",
    weight: "800",
    style: "italic",
  },
];

const generateFontFace = (font) => `
@font-face {
  font-family: 'ArticulatCF';
  src: url('${font.path}') format('opentype');
  font-weight: ${font.weight};
  font-style: ${font.style};
}
`;

const fontFaces = articulatCF.map(generateFontFace).join('\n');

const fs = require('fs');
fs.writeFileSync('./src/fonts.css', fontFaces);

