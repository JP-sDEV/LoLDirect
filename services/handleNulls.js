module.exports = handleNulls = response => {
  var fixedNulls = [];
  for (var i = 0; i < response.length; i++) {
    var player = response[i];
    Object.keys(player).forEach(
      key =>
        (player[key] &&
          typeof player[key] === "object" &&
          handleNulls(player[key])) ||
        ((player[key] === undefined || player[key] === null) &&
          (player[key] = " "))
    );
    fixedNulls.push(player);
  }
  return fixedNulls;
};
