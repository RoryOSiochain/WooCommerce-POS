!function(a){"use strict";a.fn.select2.locales.fr={formatMatches:function(a){return a+" résultats sont disponibles, utilisez les flèches haut et bas pour naviguer."},formatNoMatches:function(){return"Aucun résultat trouvé"},formatInputTooShort:function(a,b){var c=b-a.length;return"Saisissez "+c+" caractère"+(1==c?"":"s")+" supplémentaire"+(1==c?"":"s")},formatInputTooLong:function(a,b){var c=a.length-b;return"Supprimez "+c+" caractère"+(1==c?"":"s")},formatSelectionTooBig:function(a){return"Vous pouvez seulement sélectionner "+a+" élément"+(1==a?"":"s")},formatLoadMore:function(){return"Chargement de résultats supplémentaires…"},formatSearching:function(){return"Recherche en cours…"}},a.extend(a.fn.select2.defaults,a.fn.select2.locales.fr)}(jQuery),function(a){"function"==typeof define&&define.amd?define(["moment"],a):"object"==typeof exports?module.exports=a(require("../moment")):a(("undefined"!=typeof global?global:this).moment)}(function(a){return a.defineLocale("fr-ca",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|)/,ordinal:function(a){return a+(1===a?"er":"")}})});