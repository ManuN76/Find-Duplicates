window.function = function (tab, txt, option) {
  if (tab.value === undefined) return;

  tab = tab.value;
  txt = txt.value ?? "";
  option = option.value ?? 0;

  let ret = "";

  let idx = 0;

  for (i in tab) {
    if (noAccent(tab[i], option) == noAccent(txt, option)) {
      idx += 1;
    }
  }

  if (idx > 1) {
    ret = txt;
  }
  return ret;
};

/**
 * Supprime les accents, ponctuations
 */
function noAccent(str, option) {
  if (!option) {
    // Remplace Accent
    str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Supprime ponctuation
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

    // Convertion en minuscule
    str = str.toLowerCase();
  }

  // Supprime les espaces et multiligne
  str = str.trim();

  return str;
}
