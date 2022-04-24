var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
      var matches, substringRegex;

      // an array that will be populated with substring matches
      matches = [];

      // regex used to determine if a string contains the substring `q`
      substrRegex = new RegExp(q, 'i');

      // iterate through the pool of strings and for any string that
      // contains the substring `q`, add it to the `matches` array
      $.each(strs, function(i, str) {
          if (substrRegex.test(str)) {
              matches.push(str);
          }
      });

      cb(matches);
  };
};

var names = [
  "EcoFlow delta mini power station",
  "Natureshead composting toilet",
  "Maxxair fan",
  "Roo Double XL Hammock",
  "Sawyer mini water filtration system",
  "REI Co-op Kingdom Cot 3",
];

var urls = [
  "https://us.ecoflow.com/products/delta-mini-portable-power-station",
  "https://natureshead.net/",
  "https://www.airxcel.com/rv/maxxair/products/fans",
  "https://kammok.com/products/roo-double-xl-camping-hammock",
  "https://www.sawyer.com/products/mini-water-filtration-system",
  "https://www.rei.com/product/892837/rei-co-op-kingdom-cot-3?CAWELAID=120217890000792434&CAGPSPN=pla&CAAGID=136853395114&CATCI=pla-829959012868&cm_mmc=PLA_Google%7C21700000001700551_8928370001%7C92700069717260804%7CPB%7C71700000074212062&gclid=EAIaIQobChMI0dWG4IaI9wIViO6zCh1WQwqbEAQYASABEgLAD_D_BwE&gclsrc=aw.ds",
]

$('.typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'urls',
  source: substringMatcher(names)
});

function openPage() {
  var selected_page_value = document.getElementById("gotopage").value;
  if(selected_page_value) {
      window.open(urls[names.indexOf(selected_page_value)], '_blank').focus();
  } else {
      alert('Please select a valid page.')
  }
}