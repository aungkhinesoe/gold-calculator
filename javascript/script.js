document.getElementById('gold-calculator').addEventListener('submit', function(event) {
  event.preventDefault();

  const weightInGram = document.getElementById('gram-weight').value;
  const weightInPae = weightInGram / 1.0205;
  document.getElementById('pae-weight').innerHTML = weightInPae.toFixed(2);

  const marketPrice = document.getElementById('market-price').value;
  const actualPrice = weightInPae * (marketPrice / 16);
  document.getElementById('actual-price').innerHTML = actualPrice.toFixed(0);

  const sellingPrice = document.getElementById('selling-price').value;
  const serviceCharge = sellingPrice - actualPrice;
  document.getElementById('service-charge').innerHTML = serviceCharge.toFixed(0);
});
