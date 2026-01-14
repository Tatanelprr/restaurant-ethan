function calculerAddition(prixPlat, prixBoisson) {
  return prixPlat + prixBoisson;
}

// nouvelle fonction pour la réduction
function appliquerReduction(total, pourcentage) {
  return total - (total * pourcentage / 100);
}

module.exports = { calculerAddition, appliquerReduction };
