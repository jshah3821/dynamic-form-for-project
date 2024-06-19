export const hexToRGBA = (hex, a) => {
  // Remove '#' if it's included
  hex = hex.replace("#", "");

  let r, g, b;

  // Handle different formats (#RRGGBB, #RGB)
  if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else if (hex.length === 6) {
    r = parseInt(hex.slice(0, 2), 16);
    g = parseInt(hex.slice(2, 4), 16);
    b = parseInt(hex.slice(4, 6), 16);
  } else {
    return null; // Invalid hex
  }

  // Return RGB string
  return `rgba(${r}, ${g}, ${b},${a})`;
};
