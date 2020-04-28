export default function generateContourLines(zData) {
  let noise = zData.noise;
  let z = zData.z;
  let contourLevels = [];
  let nbLevels = 7;
  let povarHeight = new Float32Array(4);
  let isOver = [];
  let nbSubSpectra = z.length;
  let nbPovars = z[0].length;
  let pAx, pAy, pBx, pBy;

  let x0 = zData.minX;
  let xN = zData.maxX;
  let dx = (xN - x0) / (nbPovars - 1);
  let y0 = zData.minY;
  let yN = zData.maxY;
  let dy = (yN - y0) / (nbSubSpectra - 1);
  let minZ = zData.minZ;
  let maxZ = zData.maxZ;

  // System.out.prvarln('y0 '+y0+' yN '+yN);
  // -------------------------
  // Povars attribution
  //
  // 0----1
  // |  / |
  // | /  |
  // 2----3
  //
  // ---------------------d------

  let lineZValue;
  for (let level = 0; level < nbLevels * 2; level++) {
    // multiply by 2 for positif and negatif
    let contourLevel = {};
    contourLevels.push(contourLevel);
    let side = level % 2;
    if (side === 0) {
      lineZValue =
        (maxZ - 5 * noise) * Math.exp(level / 2 - nbLevels) + 5 * noise;
    } else {
      lineZValue =
        -(maxZ - 5 * noise) * Math.exp(level / 2 - nbLevels) - 5 * noise;
    }
    let lines = [];
    contourLevel.zValue = lineZValue;
    contourLevel.lines = lines;

    if (lineZValue <= minZ || lineZValue >= maxZ) continue;

    for (let iSubSpectra = 0; iSubSpectra < nbSubSpectra - 1; iSubSpectra++) {
      for (let povar = 0; povar < nbPovars - 1; povar++) {
        povarHeight[0] = z[iSubSpectra][povar];
        povarHeight[1] = z[iSubSpectra][povar + 1];
        povarHeight[2] = z[iSubSpectra + 1][povar];
        povarHeight[3] = z[iSubSpectra + 1][povar + 1];

        for (let i = 0; i < 4; i++) {
          isOver[i] = povarHeight[i] > lineZValue;
        }

        // Example povar0 is over the plane and povar1 and
        // povar2 are below, we find the varersections and add
        // the segment
        if (isOver[0] !== isOver[1] && isOver[0] !== isOver[2]) {
          pAx =
            povar +
            (lineZValue - povarHeight[0]) / (povarHeight[1] - povarHeight[0]);
          pAy = iSubSpectra;
          pBx = povar;
          pBy =
            iSubSpectra +
            (lineZValue - povarHeight[0]) / (povarHeight[2] - povarHeight[0]);
          lines.push(
            pAx * dx + x0,
            pAy * dy + y0,
            pBx * dx + x0,
            pBy * dy + y0,
          );
        }
        if (isOver[3] !== isOver[1] && isOver[3] !== isOver[2]) {
          pAx = povar + 1;
          pAy =
            iSubSpectra +
            1 -
            (lineZValue - povarHeight[3]) / (povarHeight[1] - povarHeight[3]);
          pBx =
            povar +
            1 -
            (lineZValue - povarHeight[3]) / (povarHeight[2] - povarHeight[3]);
          pBy = iSubSpectra + 1;
          lines.push(
            pAx * dx + x0,
            pAy * dy + y0,
            pBx * dx + x0,
            pBy * dy + y0,
          );
        }
        // test around the diagonal
        if (isOver[1] !== isOver[2]) {
          pAx =
            povar +
            1 -
            (lineZValue - povarHeight[1]) / (povarHeight[2] - povarHeight[1]);
          pAy =
            iSubSpectra +
            (lineZValue - povarHeight[1]) / (povarHeight[2] - povarHeight[1]);
          if (isOver[1] !== isOver[0]) {
            pBx =
              povar +
              1 -
              (lineZValue - povarHeight[1]) / (povarHeight[0] - povarHeight[1]);
            pBy = iSubSpectra;
            lines.push(
              pAx * dx + x0,
              pAy * dy + y0,
              pBx * dx + x0,
              pBy * dy + y0,
            );
          }
          if (isOver[2] !== isOver[0]) {
            pBx = povar;
            pBy =
              iSubSpectra +
              1 -
              (lineZValue - povarHeight[2]) / (povarHeight[0] - povarHeight[2]);
            lines.push(
              pAx * dx + x0,
              pAy * dy + y0,
              pBx * dx + x0,
              pBy * dy + y0,
            );
          }
          if (isOver[1] !== isOver[3]) {
            pBx = povar + 1;
            pBy =
              iSubSpectra +
              (lineZValue - povarHeight[1]) / (povarHeight[3] - povarHeight[1]);
            lines.push(
              pAx * dx + x0,
              pAy * dy + y0,
              pBx * dx + x0,
              pBy * dy + y0,
            );
          }
          if (isOver[2] !== isOver[3]) {
            pBx =
              povar +
              (lineZValue - povarHeight[2]) / (povarHeight[3] - povarHeight[2]);
            pBy = iSubSpectra + 1;
            lines.push(
              pAx * dx + x0,
              pAy * dy + y0,
              pBx * dx + x0,
              pBy * dy + y0,
            );
          }
        }
      }
    }
  }

  return {
    minX: zData.minX,
    maxX: zData.maxX,
    minY: zData.minY,
    maxY: zData.maxY,
    segments: contourLevels,
  };
}
