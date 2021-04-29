export function mergeMetadata(main, complement) {
  for (let key in complement.meta) {
    if (main.meta[key]) {
      if (!Array.isArray(main.meta[key])) {
        main.meta[key] = [main.meta[key]];
      }
      main.meta[key].push(complement.meta[key]);
    } else if (main.meta[key] === undefined) {
      main.meta[key] = [complement.meta[key]];
    }
  }
  return main;
}
