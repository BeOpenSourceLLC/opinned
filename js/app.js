App = Ember.Application.create();

App.Router.map(function() {
	this.resource('articles');
	this.route('sports');
	this.resource('politics');
  	this.resource('topics');
  	this.route('entertainment');
  	this.route('tech');
	this.route('most');
	this.route('tags');
});


App.IndexRoute = Ember.Route.extend({
  model: function() {
    return App.ARTICLES;
  }
});

App.TechRoute = Ember.Route.extend({});

App.PoliticsRoute = Ember.Route.extend({});

App.SportsRoute = Ember.Route.extend({});

App.TopicsRoute = Ember.Route.extend({});

App.MostRoute = Ember.Route.extend({});

App.ArticlesRoute = Ember.Route.extend({
	model: function(){
		return App.ARTICLES;
	}
});

App.ARTICLES = [{
description: "New domain will let almost anyone get a .gop Web address.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/politics/2014/02/22/gop-web-address-suffix/5650385/?kjnd=BFS0eiicii%2FyrTzL4c843uiP8iTX87UkZKJJttillXjCy8H%2F5%2FmHBn0%2FdnwI69qO-0faa45b8-eb73-43d6-a5ad-797f8413900d_G%2F3gPOFzXi%2FoRq7MfGRKsT%2BZCD7cBxBclz7nHXkBYaytsMKrWkkn8MgObGx9630Z"
}
],
link: "http://apidata.usatoday.com/story/news/politics/2014/02/22/gop-web-address-suffix/5650385/?kjnd=3ba4LLFkdjY72KoL5fzOGmzHlBSpbNE7hzgW15Std1aSDUni9e8Vhz25A43wiMuZ-0faa45b8-eb73-43d6-a5ad-797f8413900d_KlnbED3cLgD6uqHK0FscBF9vI9biUq%2FPgDrENq4u3midI5Fb%2BBXFsheLxUk57PJl",
pubDate: "Sat, 22 Feb 2014 07:03:24 GMT",
title: "GOP set to launch first partisan Web domain"
},
{
description: "GuzmÃ¡n's arrest could also signal the end of an era as cartels are cut down in size or dismantled.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/world/2014/02/23/mexico-drug-lord-guzman/5757795/?kjnd=FGuiEIzrV2A58ekDthBXqml2bzeYHCUJz91h7A7FE34JWKvuwhzDZCLm1frB1wRE-0faa45b8-eb73-43d6-a5ad-797f8413900d_6gsBP9%2BnY89phaBpiuXGvlTlkfmnLrq27jnexUtiFeO%2F55p2Mk72QRVMq4Y6Ia%2Fy"
}
],
link: "http://apidata.usatoday.com/story/news/world/2014/02/23/mexico-drug-lord-guzman/5757795/?kjnd=5RJhJvz0gutnlpQGXKEcWXi2i5xFv3sahgSdWFmFhjIGHv9%2FgLtvWELAJBY94PgX-0faa45b8-eb73-43d6-a5ad-797f8413900d_AIVWpppLpFpq%2B%2FaZkXD3KJGGgUiznco1iqsVhN2uzaVmIh%2FdmyH9OoMyUGcUEdxw",
pubDate: "Sun, 23 Feb 2014 02:15:43 GMT",
title: "Cartel leader's capture may stir violence in Mexico"
},
{
description: "Maria von Trapp was the basis for the Louisa character in 'The Sound of Music.'",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/nation/2014/02/22/maria-von-trapp-99-dies-in-vermont/5738009/?kjnd=YoO6OZ2n13aq4fO9eVwochTHoz5uWHfvUqBcksHtiY3wC0mOHNc2GjER5144%2B4RR-0faa45b8-eb73-43d6-a5ad-797f8413900d_zT1oWj3hBJZGuPHrTfTzs%2B0VXEk6uRw4j1mRfYsyFqgPZfjKQmJvL7yQaw%2BWsgQT"
}
],
link: "http://apidata.usatoday.com/story/news/nation/2014/02/22/maria-von-trapp-99-dies-in-vermont/5738009/?kjnd=EZ4nXTyjogIG%2BSqOT0iakM4XAiSaoUuaJ8qIF3PL5KU8wTDB8fcMBl5Hb2DTQ5pY-0faa45b8-eb73-43d6-a5ad-797f8413900d_K0aYmXdbMR0dTxiGCF%2BUHFkGtRPamDNHJsTbZpcDPlCd%2Bj5wjcQd32n3wpVF6gNL",
pubDate: "Sat, 22 Feb 2014 08:16:14 GMT",
title: "So long, farewell: Last of the Trapp Family Singers dies"
},
{
description: "Parliament appointed an interim president.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/world/2014/02/23/ukraine-kiev-protest-president/5752351/?kjnd=sYiYlHb4bRm8yXW5w3qONNTb%2B7fTD1NbA1WI1314gR%2BvDVgVd43mbEqTtV7BymAB-0faa45b8-eb73-43d6-a5ad-797f8413900d_%2B%2F7ex9OXLjof0QkCtLnoLUzQ8SH3BxvYjfULZH4xzihSe2q3a8mZSvJYaXhizw8X"
}
],
link: "http://apidata.usatoday.com/story/news/world/2014/02/23/ukraine-kiev-protest-president/5752351/?kjnd=pT8Kd42A3vcJ5InvKL96bZhhuBmNi5GNWaarEMkMcwSKslIrlsF6UKURnVMyl1CP-0faa45b8-eb73-43d6-a5ad-797f8413900d_%2ByATjSMTrls%2BFi0D9Vr584c8nGZ7oAS6nl3WeHhEkBYnUqFNabyfiCaDVnYY0xMr",
pubDate: "Sun, 23 Feb 2014 02:07:06 GMT",
title: "Kiev calm as protesters turn focus to justice"
},
{
description: "Former president urges viewing PTSD as an injury, not a disorder.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/politics/2014/02/23/president-bush-seeks-to-remove-d-from-ptsd/5756331/?kjnd=CQcwFWDwCuhiiApqfiTfjWAo6eFy3mF2bybopzT6AAoaYh6sJzdHoxhHlBtOMeul-0faa45b8-eb73-43d6-a5ad-797f8413900d_IU8vklIPf8TqbBaPLgBhKiC5SDaS2952UbAndQWO9Sl0fWAmn0793%2FsgHgt8Ox4e"
}
],
link: "http://apidata.usatoday.com/story/news/politics/2014/02/23/president-bush-seeks-to-remove-d-from-ptsd/5756331/?kjnd=KlHPAEjIzjNn3Sl9ep9zEJT9Lfo6hkV2kgLJd%2B1zAqHxm0XtXUsfr%2BU%2BsrUEqzdi-0faa45b8-eb73-43d6-a5ad-797f8413900d_%2B%2FnQ69iAvEUtrcVowVhRMsFHKznonvyzRg%2FRse1Ag7J6tOkYv8GEA44AxYr0VDS9",
pubDate: "Sun, 23 Feb 2014 02:36:52 GMT",
title: "George W. Bush encourages civilians to hire veterans"
},
{
description: "Capriles led a rally of thousands and offered up a unified opposition.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/world/2014/02/23/venezuela-opposition/5757375/?kjnd=9VCRwyVA8yX2K1XDwneaRL9qo2uNw7O70meONveCdmS3Y3V9V3yDFROo5ffhQgqm-0faa45b8-eb73-43d6-a5ad-797f8413900d_EgyIzBCO%2ByO1emZvTLip4%2Fk6o2dBVUWwMZxwwGTRbw8AA4Ry1fhKOIRaLWCqyVWt"
}
],
link: "http://apidata.usatoday.com/story/news/world/2014/02/23/venezuela-opposition/5757375/?kjnd=lrB1srklIPT%2B3wHZ59WDJAcixsChJTiPWPaUA5%2B2BvsUuOJuKPZoZUhDwCxSXDLJ-0faa45b8-eb73-43d6-a5ad-797f8413900d_gTsRXSkE01vzRF%2FQjuNpH7eAQnMzB2va%2B3FBKT%2BaiWAlZrc6OySP%2BO5jvwueS3q3",
pubDate: "Sun, 23 Feb 2014",
title: "Venezuelan opposition leader shifts tactics"
},
{
description: "Physicians Ian Smith and Travis Stork of 'The Doctors' share their weight-loss ideas.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/nation/2014/02/23/super-shred-ian-smith-doctors-diet/5365293/?kjnd=KrRzCx3ClWkJb0kTcGkSlefaOxIi7FjF0eIK3VVif29TteRq%2BQsP83EAaRBA0xy2-0faa45b8-eb73-43d6-a5ad-797f8413900d_ULG5ui9%2BqNFUo%2F34rrmY3TWxDtEoK97N6qSIcH6ecnLKBNvwAaGBLwCudfuPEp7V"
}
],
link: "http://apidata.usatoday.com/story/news/nation/2014/02/23/super-shred-ian-smith-doctors-diet/5365293/?kjnd=%2FvyhINLsq8fP6DFl38Aby0Nnb%2B9mB9T%2FIxUtgqrxLQ9EwfDOxN4tUT3AVwglcqZj-0faa45b8-eb73-43d6-a5ad-797f8413900d_jgdqwrW4CPqIiVK1NK22O701AuSlt6u2nUJ2Tg0B8Jaz4OjJ60b2yCi6bqn%2B3WA8",
pubDate: "Sun, 23 Feb 2014 06:03:10 GMT",
title: "Best tips from 'Super Shred,'  'Doctor's Diet' authors"
},
{
description: "Russians are no longer second-class citizens in their own country.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/world/2014/02/23/moscow-ruble-voice-foreign-currency/5533629/?kjnd=hiWTSyWVqAXCu1j6627IhjVknDRbgGnR%2BDwI%2FvGqMAUe0ljRypTS5uFklyxk70FE-0faa45b8-eb73-43d6-a5ad-797f8413900d_NaDerhHWRE4hikUlArvSS88y7PQuia7Olzag3FfrUNPXxiYgSUb1%2BJGj6t8R6KhP"
}
],
link: "http://apidata.usatoday.com/story/news/world/2014/02/23/moscow-ruble-voice-foreign-currency/5533629/?kjnd=21q4j9KT%2B4dtZd1ooiEQp2A7oMYQYr6Svsk35mP%2BysSmgf26QY7%2Fk%2F7tnrF5Ksdv-0faa45b8-eb73-43d6-a5ad-797f8413900d_M5Jei1y9q62r02ldst0XjIOcHcQdGYnI2zvS2eDd%2FcuEiL4%2FCWPTlCRCspmzDzhK",
pubDate: "Sun, 23 Feb 2014 09:00:42 GMT",
title: "Voices: Return to Moscow finds things looking up"
},
{
description: "Some rural schools are recruiting international students to help keep their doors open.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/nation/2014/02/23/public-schools-selling-seats/5553119/?kjnd=IaZIlMns2jkaRj2S19azbqdL8BS8wbtBng2cv4kdSac1d%2BFdiMOuSgd6fk2OGxvO-0faa45b8-eb73-43d6-a5ad-797f8413900d_9RWLhuH4J1acaantvNSEX9U9VCRQ%2FTXePDaZXDEaZswd%2FD68r7hsSP2myc6i6gM5"
}
],
link: "http://apidata.usatoday.com/story/news/nation/2014/02/23/public-schools-selling-seats/5553119/?kjnd=hKbUJIQu2u9j7BUq0s3rQO4qekMWNYgMDtx9V7DQD%2BX5TUVmR4BwCr1UnrqBBpbQ-0faa45b8-eb73-43d6-a5ad-797f8413900d_rFBza1pe3tN75aslSUJ7Wh6yGa8QcsVYshEpn9F7%2Fn8n4HIGQYWgFZjEGfJRWbjt",
pubDate: "Sun, 23 Feb 2014 09:07:22 GMT",
title: "Public schools recruiting international high schoolers"
},
{
description: "Extrajudicial killings have been occurring in a climate of growing intolerance",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/world/2014/02/23/pakistan-blasphemy-law-quran-religion/5641827/?kjnd=TfJR8m6qHkkl7m40ioAfYGzQyB%2F9vzaUpV%2F4nFI40ItM%2BFGaCb%2Bux95D5mKnPtNE-0faa45b8-eb73-43d6-a5ad-797f8413900d_o3ZhQsgQzVy1b3zh85Y1zaTZIPMtpTJ1bwdTnveuAcMQLfovREr2No7mhVaxe5ve"
}
],
link: "http://apidata.usatoday.com/story/news/world/2014/02/23/pakistan-blasphemy-law-quran-religion/5641827/?kjnd=pX4S1zAehT2v2h9ltS%2F2gFrrcBGfK8%2BjrG6mfksI%2FFJMGOvGmEufNipbowaBDNkE-0faa45b8-eb73-43d6-a5ad-797f8413900d_078wUhu58Njv3wqSKpkVRy%2FTB0JRX03BHzgXTENPihIzuKwJbZuaPIMQDPQyGd31",
pubDate: "Sun, 23 Feb 2014 10:00:14 GMT",
title: "Pakistan's harsh blasphemy law under scrutiny"
},
{
description: "The Delaware attorney general has steadfastly refused to discuss his medical condition.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/politics/2014/02/23/questions-remain-about-beau-bidens-health/5733275/?kjnd=tWn6bcJ8W%2BpLPGUOjInuJy2ckg7yK8S5dttVEghoikvB7tkS7TrRFXEtVCrdgLBH-0faa45b8-eb73-43d6-a5ad-797f8413900d_ptnCfwYCTrLllMANpN8DESYqUDr1y68DA%2F80%2BxbdFxGWqYI7yzPC7%2Fdhzqg4LFZF"
}
],
link: "http://apidata.usatoday.com/story/news/politics/2014/02/23/questions-remain-about-beau-bidens-health/5733275/?kjnd=l%2FDihTt5icy1DXDJwDNksQn4s8kPktTiql2AnVLZMkUSHJNUq8UZbANqcqPDUA8K-0faa45b8-eb73-43d6-a5ad-797f8413900d_VEcnoaBM3iFG29GT9DzR5pIT%2BmaGTHQvaRUcq4w0UoDLBrT%2BIuqDaH7k0K%2FyzMwV",
pubDate: "Sun, 23 Feb 2014 06:03:43 GMT",
title: "Questions remain about Beau Biden's health"
},
{
description: "The bikes' 4-inch-wide tires let riders float over snow and other difficult surfaces.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/nation/2014/02/23/fatbikes-are-big-with-winter-riders/5737585/?kjnd=UsvmazP0h625DSPsVhV7i%2Bvj0boo%2FxdK1sliLnrPldrqbrTaXZ5buXQIctWHUgKM-0faa45b8-eb73-43d6-a5ad-797f8413900d_lPnlCKWd4AP8kyTaTUgIuTxEW6KEl7P6qp3br9xHn%2BSYQD6b7EbFL8e6yWs44IMc"
}
],
link: "http://apidata.usatoday.com/story/news/nation/2014/02/23/fatbikes-are-big-with-winter-riders/5737585/?kjnd=oT%2Fh5%2BsVAIDhC%2FgzUOoQYibFLp6J2g6uwuTU9YZiK52Fw3%2FLxo%2BkcrRXUjXj8t9D-0faa45b8-eb73-43d6-a5ad-797f8413900d_qwJPSG1VYWSvwoOrxe6H6p5uceuTnXEy41rjgUI%2FUmhO0YJUL9lQ7dYS8G3NNS%2FW",
pubDate: "Sun, 23 Feb 2014 05:03:26 GMT",
title: "Fatbikes are big with winter riders"
},
{
description: "Louisville's cold-case squad works to end the heartache of unsolved crimes.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/nation/2014/02/23/detectives-follow-up-on-homicides-after-trail-goes-cold/5745557/?kjnd=WZKUbvBUjAhodgfmlPvtYKOlfwC4qYKwBvHFHipgeV%2BhBo%2BcpGqJjYLQzW1G7HyK-0faa45b8-eb73-43d6-a5ad-797f8413900d_fzrbH47ZzkVseOIHyB%2BCHK5BC1QLTTOFARhOrw%2FzMk%2B3ASyN%2BxcTIjWJ5BiVtPeg"
}
],
link: "http://apidata.usatoday.com/story/news/nation/2014/02/23/detectives-follow-up-on-homicides-after-trail-goes-cold/5745557/?kjnd=Id7MBYU5cBdHG4o%2FshQ3yvdwpQt5rJasn49sQXEweows9tF4fL38LJJwmgZ040Q8-0faa45b8-eb73-43d6-a5ad-797f8413900d_RtHxelG3nTIow2PiV%2Br%2BT341WdljXBfIAqd405tqhYXfIRUqoItq%2FJFJll4ohl1g",
pubDate: "Sun, 23 Feb 2014 07:00:38 GMT",
title: "Detectives look for leads after trail goes cold"
},
{
description: "Police are concentrating on the heating system of Legal Sea Foods.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/nation/2014/02/23/carbon-monoxide-leak-mall/5754893/?kjnd=CKzut4oP6oWIsRRxafjlKoJbK89Gk%2BmC4uGPEnJcXbGviYiw89fWu98XcokJiXCy-0faa45b8-eb73-43d6-a5ad-797f8413900d_z4JTpTyBssEv%2BiP70V%2BX7g%2B31n%2FR2V5ExmH9ee1fr0N2BPKLDEijy%2BDV8feElzGt"
}
],
link: "http://apidata.usatoday.com/story/news/nation/2014/02/23/carbon-monoxide-leak-mall/5754893/?kjnd=I5ZQM46iRNYXNeuRqzl8Og3RLpWSIUTUXEyyRlEJBwpxxlTHi3ENOQILHP%2BkWzBX-0faa45b8-eb73-43d6-a5ad-797f8413900d_JBuc6UoZlaPbFPAa5PT16FoHfh3%2FkflKb8btELIjHCyNJSZsIKjj%2BU%2F1Gfccokpw",
pubDate: "Sun, 23 Feb 2014 09:00:06 GMT",
title: "Probe begins into deadly carbon monoxide leak at mall"
},
{
description: "As Miami seeks to raise its global profile, an act of vandalism raises questions.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/nation/2014/02/22/miami-art-museum-vandal/5588301/?kjnd=nqE%2BtX6nZUoYwgVBqs9VGZvNGpcOEBOsWfjmIBdTXVjfqW%2FK%2FUFlGvIumdLY5f2k-0faa45b8-eb73-43d6-a5ad-797f8413900d_%2FD6T4hp3Ri8tLJiIUISXNUw6GF6sn6Ra03htQXzk5XW8nNET2ihNv5CQmi1J1UeF"
}
],
link: "http://apidata.usatoday.com/story/news/nation/2014/02/22/miami-art-museum-vandal/5588301/?kjnd=XyaAKYbd6dBfQmoVKqcP6LKQI98mHxoLi9HyM25hxKRbwWV9yfsqwg7enkMT9Ul%2F-0faa45b8-eb73-43d6-a5ad-797f8413900d_wwTM2geORyNzztxDoa%2BqGHlcmNnUslNeS2T05QU9WXgOXwvarrQ29C%2BUEreSNdI9",
pubDate: "Sat, 22 Feb 2014 09:20:40 GMT",
title: "A broken vase sparks a cultural debate in Miami"
},
{
description: "Apocalypse should not be underestimated, Viking festival director says.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/world/2014/02/20/viking-apocalypse-end-of-the-world-saturday/5643717/?kjnd=yaSWsUVvMBzoUTEY8O2s2wpcwMs%2FgQmT0K8oTe58RsUScfLUsgABpmjx66yaaf8Z-0faa45b8-eb73-43d6-a5ad-797f8413900d_MiNjVV9eh4NW%2BDsyhWxVQZNbHxL09bXpQ20ifLIkJUCUjCdd1SBADE5%2Fxa%2Byjpjz"
}
],
link: "http://apidata.usatoday.com/story/news/world/2014/02/20/viking-apocalypse-end-of-the-world-saturday/5643717/?kjnd=WiNLGVilgqZgEnVEKSQSEFkGcwPqiu0o0O9fA9kq3KRfb%2BOnVKE%2FoVFkyTd4Llf1-0faa45b8-eb73-43d6-a5ad-797f8413900d_%2FurT7bivimJQLNnL1N%2BPoRvCF2gdKXe4cHudAeIonBbAVI4%2BQedeP5%2Byof2V%2BbdG",
pubDate: "Thu, 20 Feb 2014 04:13:27 GMT",
title: "Viking calendar predicts the world will end Saturday"
},
{
description: "Shows will focus on Ukraine, where protests have led to deadly violence.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/politics/onpolitics/2014/02/22/sunday-talk-shows/5703715/?kjnd=IDKpftaGMr0tizqGKygQ5kGk9GtIrEWAZrhysFnfNUDm5KDRtRK9G%2FFnHuYS8Z5B-0faa45b8-eb73-43d6-a5ad-797f8413900d_wZn02poJB6tQVyHsBvQTOjwZbPVin4nt9exzsacOxv4xJ70PrxmHxjpqnQq0QsXo"
}
],
link: "http://apidata.usatoday.com/story/news/politics/onpolitics/2014/02/22/sunday-talk-shows/5703715/?kjnd=JUvF6SuTQKu7uXn9i%2B3CBV8KtmF1h%2Bxbv1siim0rfnRj%2FQOW8CEZ%2BQtZED3VecY0-0faa45b8-eb73-43d6-a5ad-797f8413900d_HShEF2apIooPGINixixA2PfPBFyOmWzm1QhpBvWA7ybgpIirj79777b%2BjmZlvU4q",
pubDate: "Sat, 22 Feb 2014 02:57:40 GMT",
title: "Ukraine, governors headline Sunday talk shows"
},
{
description: "Yanukovych remained defiant Saturday, saying he has no intention of resigning or leaving the country.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/world/2014/02/22/ukraine-protests-kiev-president/5723135/?kjnd=9bO0HI5oVaM9wWOQBqgWCM1ZERyoc%2FQDkFaVu5qB2jmIa4L639t%2BzMaaUUQDHJut-0faa45b8-eb73-43d6-a5ad-797f8413900d_Xy1%2BVxBVEvfuZ9VjWL3f9R85IcyRrh99mnDgIn6JInTgBP2QGZgTRiFoNVfBtNMD"
}
],
link: "http://apidata.usatoday.com/story/news/world/2014/02/22/ukraine-protests-kiev-president/5723135/?kjnd=d5EigZttzH7eZCg6JmbWlYPcWGXjrzaaFt0buOfGSjc6RrSJtU%2BH8dF4t5ZNEy%2Br-0faa45b8-eb73-43d6-a5ad-797f8413900d_wARcK6Mvq0seVjkmZ9BPA48h4aFZdQDtnHj8as%2BBFDYkDu8iKyqNI9WP3CkQFde7",
pubDate: "Sat, 22 Feb 2014 03:08:31 GMT",
title: "Ukraine parliament votes to remove president"
},
{
description: "As the nation spirals out of control, people on both sides are calling for a breakup.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/world/2014/02/22/lvov-ukraine-protests/5724589/?kjnd=4hRA3puuvBkSTkyTb%2BdqNKYlDxjuDUStGAe%2Bj9Yri8Zzi1f6Vpe4bwyXNDRIR5kz-0faa45b8-eb73-43d6-a5ad-797f8413900d_lToTYXgOBE1q1KAetkrkkCAoL%2BV%2FeMxiAo7HGaPYCO8eObdpmaBv3hZ20My%2Fxw7I"
}
],
link: "http://apidata.usatoday.com/story/news/world/2014/02/22/lvov-ukraine-protests/5724589/?kjnd=pNQ5FPEl0hKIJFRuEQYifZTnDkCIifnhs8swhwfcZ3i8U3QyPbZIIceOZhnfBkHW-0faa45b8-eb73-43d6-a5ad-797f8413900d_SC7ByZeGtjYOpzG%2FPVsfHknLAkf6z74wuV5f6SXMxHjDBTe2i56eg1UM4MUd%2FOke",
pubDate: "Sat, 22 Feb 2014 11:01:44 GMT",
title: "Ukraine at crossroads as talks of split increase"
},
{
description: "JoaquÃ­n El Chap GuzmÃ¡n is captured by Mexican and U.S. officials 13 years after escaping prison.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/world/2014/02/22/drug-cartel-arrested/5725169/?kjnd=WgxjO2aNAlKb236JU1o141J1b5Rylq2lzcOnt8U6q1ObUIkMU4506RDDxFpMpCDL-0faa45b8-eb73-43d6-a5ad-797f8413900d_fgmXmsBo1%2FbPUD%2BZQpdngnDruRSpqtQjkjvyd8hy5Xth83MqCoYqhMtooBtvDn56"
}
],
link: "http://apidata.usatoday.com/story/news/world/2014/02/22/drug-cartel-arrested/5725169/?kjnd=aEeo5eycgrE286%2FiV9JjzKEDl2OB%2B21StST3CGkvm6en2r%2BID92rbpaO6b40IWBF-0faa45b8-eb73-43d6-a5ad-797f8413900d_Se7hfHDX49QXe%2FsgqqrfEa1STOlusK1z6LW6zBY1AZV%2Bm5rInOHw%2Btv320S7W%2Fr1",
pubDate: "Sat, 22 Feb 2014 11:17:35 GMT",
title: "Notorious Mexican drug cartel leader arrested"
},
{
description: "Icy roads were a factor in Friday night's collision.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/nation/2014/02/22/one-dead-in-vermont-car-crash/5725219/?kjnd=uGVapvwS%2FBckYJRyKqDCRtJFNlqBh40Gdd1wqcY%2F7X4aQUPOf1%2FaX1yw4vT9xwqE-0faa45b8-eb73-43d6-a5ad-797f8413900d_dItELUJUSsTjceAOWmQROjyxd2ONEADJu4xT7bw0JeMRl2sW0OZvxVcKw2TeqQLc"
}
],
link: "http://apidata.usatoday.com/story/news/nation/2014/02/22/one-dead-in-vermont-car-crash/5725219/?kjnd=Rl09DKTWsfzZnv7Bep4tB7NLOBglysAQ9oqzWhAc8XEuVmX4dnFH8YgckrCMe%2F4b-0faa45b8-eb73-43d6-a5ad-797f8413900d_4wE424yrl15pQhOjXaHCTxf93yiCjNZxtTQqFpSMasa7rqqE%2FPl%2F3AtCHcFVY1qY",
pubDate: "Sat, 22 Feb 2014 11:45:09 GMT",
title: "Tour bus driver dead, dozens injured in Vt. crash"
},
{
description: "John Durkin disappeared two days ago while he was in Rome.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/2014/02/22/missing-student-italy/5726619/?kjnd=ZwKfF7tB2a6cAvyfJ16fZaiQoktFJtm2ZC9fGRnLVGf%2FnAudrLZfmHzQSGHITM9N-0faa45b8-eb73-43d6-a5ad-797f8413900d_u2ClVXyjHZ8XcQi3B8WjYwzhKAcXncdrpg19iCiCW%2BnEq4EzQEw01bILdgPoMQqL"
}
],
link: "http://apidata.usatoday.com/story/news/2014/02/22/missing-student-italy/5726619/?kjnd=yD8qZNcoxL9sguW85OO%2BRZHRJ6isuJR612fvG%2BA7Nf%2BXp4SLzgR3MdeQRdemCQbw-0faa45b8-eb73-43d6-a5ad-797f8413900d_MHKL6bYrRGCun0IOh9AFzhfv8MmkguoRQBas3j8EaGZfm3Lh2z2y2WBeB16vGXJV",
pubDate: "Sat, 22 Feb 2014 02:10:42 GMT",
title: "Missing U.S. student in Italy found dead"
},
{
description: "Protesters proposed presidential residence be transformed into a Museum of Corruption.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/world/2014/02/22/ukraine-future-presidential-residence/5726711/?kjnd=losWx8LVnF38dJg9BxZWSpZaPBH3huJwWbuG2TMqnbozNcRjSksp5Ua3fJ4kpQlF-0faa45b8-eb73-43d6-a5ad-797f8413900d_2h4pj%2B22BAQA2L6fKh9cG%2F7SddRnUP5hYNDBwQKUdyDLSEoBssEIisKXCPzcLsyi"
}
],
link: "http://apidata.usatoday.com/story/news/world/2014/02/22/ukraine-future-presidential-residence/5726711/?kjnd=w1N7qLvukvMru1fNveI0gP7XlaeP9s1NyEdHPcpl9Km%2BE%2F48Pjgycgo5UAzdHIVd-0faa45b8-eb73-43d6-a5ad-797f8413900d_2jhEWVwlMMs3eMczeO5z2PcT9p%2BENdcfc7eeGyQ%2FvtjarYympWD5NqjseCXFt9bw",
pubDate: "Sat, 22 Feb 2014 02:01:38 GMT",
title: "Palace takeover a symbol of change for Ukraine's future"
},
{
description: "All eyes on Russia as Kiev ushers in a tumultuous period of transition.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/world/2014/02/22/ukraine-russia-usa-european-union/5727105/?kjnd=t1V33pAkY%2Bdnc1VzR5gbeRkmJbl83oSANPzZcHqW9hXIu0uF57MZjgKiDoQi0gWw-0faa45b8-eb73-43d6-a5ad-797f8413900d_Og9vvzQ3e9nZVqkNHzBE6vFDKf92TKKLxaBxuCvcvOq5MR5jjUKHsS7H8KH25Zkn"
}
],
link: "http://apidata.usatoday.com/story/news/world/2014/02/22/ukraine-russia-usa-european-union/5727105/?kjnd=7vDNAzh3ilnmZvT9%2FoGoi%2FOs6HK%2FBRDIlranmF901eolARdxUZ2UUIHat3t3KKG0-0faa45b8-eb73-43d6-a5ad-797f8413900d_LdvqoaHaMuCm%2BmTLIA4hE823A1SWRM06hlTXXpd8MX5PIvJ4XuIt%2B%2FMq%2BcudxOur",
pubDate: "Sat, 22 Feb 2014 03:44:25 GMT",
title: "A 'dangerous' moment as dust settles in Ukraine"
},
{
description: "Governors say they need more flexibility from the federal government and less red tape.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/politics/2014/02/22/flexible-federalism-from-washington/5727111/?kjnd=0xLWwCPl8R%2BteZNUkixek5mPLUNFiaCToSZhFDjdu4kMSovOy55QcktvCYr54J8Z-0faa45b8-eb73-43d6-a5ad-797f8413900d_xvLlMsQKRyJnbO%2BGxfQh%2BGxwpOvVN%2B9WRCW5JAQiETGug3fEkZlwD3UThtVOwGUv"
}
],
link: "http://apidata.usatoday.com/story/news/politics/2014/02/22/flexible-federalism-from-washington/5727111/?kjnd=%2FV0JBIj1LcbSRtSzmFofRNktefMYw7PssvBNPuTBczAdzi06avXTV15pYFvS7YmT-0faa45b8-eb73-43d6-a5ad-797f8413900d_UHIeC6srJHhlGjBDscNSK8MIh6zBtYlzfmfx6ZOTvuEprzxUFN0Y0RBSOi7ZWAo6",
pubDate: "Sat, 22 Feb 2014 03:56:02 GMT",
title: "Governors to Washington: We'll show you how it's done"
},
{
description: "Two other children are still hospitalized with serious injuries",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/nation/2014/02/22/indiana-fire-deaths/5727179/?kjnd=8GFQxWPyu15pxTCh8enMPsIbX5j8iBnvVCfOno1j4nkPZ%2FX51RZ2Xp6fdGY8XA76-0faa45b8-eb73-43d6-a5ad-797f8413900d_1D7tlu16d%2BHOTL1W5aIlojKXyT5xs4lfoJN3DZrlBvoR%2Fdj3Gri%2FPfU7Bvuay4uH"
}
],
link: "http://apidata.usatoday.com/story/news/nation/2014/02/22/indiana-fire-deaths/5727179/?kjnd=rgJ8CxAbukq3x41ZXccouqUY0SeZir8WZEd9%2BLlLM46NdIujamvOnWRysGYQf13y-0faa45b8-eb73-43d6-a5ad-797f8413900d_7MVyMvA0RFpGyOFj%2BZSlou4C7d9cogoomvT51SCA4op%2F%2Fs4ZJwqtXSdjS1aF0FRC",
pubDate: "Sat, 22 Feb 2014 01:49:53 GMT",
title: "2 adults, 2 children die in Indianapolis fire"
},
{
description: "Upon release from prison Saturday, Tymoshenko expressed relief and hope for the future.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/world/2014/02/22/yulia-tymoshenko-ukraine/5727621/?kjnd=6Id5Rdh3x81mrBMc80uNmrgUP1Fvy6temvEZoT7myNhOCZQdlfUFOX9xay1uZ%2B5U-0faa45b8-eb73-43d6-a5ad-797f8413900d_DBERcSNL%2FfBZyaz%2Bg%2BIdINarXI0UFCeMfrpjTijL2JqGKFDAiQ4KmUwgwNuxwsVV"
}
],
link: "http://apidata.usatoday.com/story/news/world/2014/02/22/yulia-tymoshenko-ukraine/5727621/?kjnd=NqagFr0Ym3c%2BI65vvAFcn%2FJVkJroVI%2BqhGJm7fiJpHPW7C6VHVYh0v%2B6Ia15%2BFMT-0faa45b8-eb73-43d6-a5ad-797f8413900d_FgJddfRMY4MpGIQ3vbmKvTcAdGatS%2FfNpJGH043StIysxxnREBxdmMkB2V%2FCPZTD",
pubDate: "Sat, 22 Feb 2014 02:58:17 GMT",
title: "Will freed opposition leader cause more division in Ukraine?"
},
{
description: "Ukraine clashes over choice between Russia, West.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/world/2014/02/22/ukraine-interactive/5728851/?kjnd=39%2BPIqjogZIqafayKtIEufF89YZy3q6%2BhGJJHDHDmli5d1MmSAvkJ3MScZygL9uk-0faa45b8-eb73-43d6-a5ad-797f8413900d_4aabJ5CZyBujfLYfU56aG%2BK6LHSOCKtATO%2FeJCnVYIzCj8fbUIqxXHuJxk98gm0e"
}
],
link: "http://apidata.usatoday.com/story/news/world/2014/02/22/ukraine-interactive/5728851/?kjnd=FPqO9xquZ%2FcFfnVxUwx6oBvC137Z9xq6geYvJ6Vq9ssfyG2MFsLMyNEUJGDbdRw0-0faa45b8-eb73-43d6-a5ad-797f8413900d_xLekJNX8h65r7eRQSmeZKt7xUtnNcADyi1hhUYsfd3EU9R5qtDm9fqmVy79f4Yv8",
pubDate: "Sat, 22 Feb 2014 03:02:45 GMT",
title: "Interactive: Key dates in Ukrainian political crisis"
},
{
description: "Tens of thousands of supporters and opponents of Maduro took to the streets Saturday.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/world/2014/02/22/protesters-in-venezuela-call-for-end-to-rioting/5730297/?kjnd=AQ1I1vhNRwAzl5c7kRnEINlyLldbT1nXJrZKVxwrfYBMnuGuwSCPBDTzSgCco61B-0faa45b8-eb73-43d6-a5ad-797f8413900d_Y6uYQ%2BXfncEKnzlbM0t14usxdFnouHxWZ6c9ta2%2BDpUdBCF67GQitqVrGRUZgIiI"
}
],
link: "http://apidata.usatoday.com/story/news/world/2014/02/22/protesters-in-venezuela-call-for-end-to-rioting/5730297/?kjnd=R6xlZKtXG9RdzI1dmfXEXYyFMJIqZuvJbFGAAF1dnAqMLBNw6lTHvi7uhy2KBP1X-0faa45b8-eb73-43d6-a5ad-797f8413900d_GGGHuf3bIbr0QRwzN3v425Hyzt4%2FsJsgiunYLlgPQMogzKt1yDsvnwuEz7HAc1AX",
pubDate: "Sat, 22 Feb 2014 06:01:13 GMT",
title: "Protesters in Venezuela call for end to rioting"
},
{
description: "A woman on a business trip decided to bring the dogs to the U.S.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/nation/2014/02/23/stray-puppies-from-india-find-shelter-in-minn/5730769/?kjnd=oUgVxQBnYJq6CH%2FlqbFXTGNmsFtamDruGifjqBl5srFy5LBURo4RY9r8xKUv0rri-0faa45b8-eb73-43d6-a5ad-797f8413900d_6A78m%2FWaFDycNxrhQtjEDp5BOYEMIa6rtedGgpUqi99hZPWQj8HrCe7gB0zTd2WI"
}
],
link: "http://apidata.usatoday.com/story/news/nation/2014/02/23/stray-puppies-from-india-find-shelter-in-minn/5730769/?kjnd=gmUlc8LcXvzb9ZxAOpPAVNoX8SlPW09ly%2BihQdBIsOgZ75pORCCAn5yLX7vl3kQZ-0faa45b8-eb73-43d6-a5ad-797f8413900d_V5ebAq2MBRKVafxZzMQ%2B6kidm7UD6%2Fa8d77wTncIqmq%2FoBGK8mD8VdJ%2BXMzi%2FKk8",
pubDate: "Sun, 23 Feb 2014 05:03:21 GMT",
title: "Stray puppies from India find shelter in Minn."
},
{
description: "The resuscitation of the infant was documented by Miami Herald photographer Al Diaz.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/nation-now/2014/02/21/miami-baby-expressway-drivers/5675181/?kjnd=Z97vfFuKVubGeYjInZEsXGCSYAuJk1Mqh%2F3TN9fHWEE0kaZUPJ55u4D0wXHvCL2b-0faa45b8-eb73-43d6-a5ad-797f8413900d_pP36R6Ziq6OzH56hiDSkLzLypFhWgTEpWvuL4hUhrEc27tgwdaZw2GjjGaq6oO%2Fu"
}
],
link: "http://apidata.usatoday.com/story/news/nation-now/2014/02/21/miami-baby-expressway-drivers/5675181/?kjnd=Y%2Fc8M5BdQhMBt7wZ8EKQJ9ozpwjlMjdL8YzFLA%2BP%2BeK1XKv03Ffn9Sdr%2BLQ9Sh8X-0faa45b8-eb73-43d6-a5ad-797f8413900d_vaUVlgEXmrhwNwzLg%2Bwt4NhXdZOeStS3oKm%2BMKqTxfKSVBj0eT%2BhOSCKcueFJMm8",
pubDate: "Fri, 21 Feb 2014 11:35:13 GMT",
title: "Roadside rescue of baby captured in photos"
},
{
description: "Judge said city met Chapter 9 criteria in Dec. 3 ruling.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/nation/2014/02/21/detroit-bankruptcy-appeal/5677417/?kjnd=PUJDXN5KH6q5wWelwK%2FoptLisL5QWlf0gPIoss7dVDfL8IlVfs3Yn3xDUSD9J%2Fa1-0faa45b8-eb73-43d6-a5ad-797f8413900d_gumc2iv2xJT0rfg8PMAvcHggi%2FBfR63FhaQajrjSHCHLAnZ9rIoNz77Py6jFsQtV"
}
],
link: "http://apidata.usatoday.com/story/news/nation/2014/02/21/detroit-bankruptcy-appeal/5677417/?kjnd=5b%2FOdIKMMSWs5gUCLUOZhiCuvuDyVbxX7MkNGCPNfrZaVD4H5B6T4ZZVjSZvUu73-0faa45b8-eb73-43d6-a5ad-797f8413900d_TPMnxXE8KJYRMdB7OyOB%2Fs%2B0DLsAKDTu9GfVb53Ausk5THyBWWuX2mRBvOwb%2FPUQ",
pubDate: "Fri, 21 Feb 2014 11:01:38 GMT",
title: "Appeals court to hear Detroit bankruptcy case"
},
{
description: "But some retirees could lose a third of pension.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/nation/2014/02/21/detroit-bankruptcy-exit-plan/5679189/?kjnd=y%2B6mzAnl%2FJNjcGE9wnk3wGAriCbYJXYcabCk2kdH8uazTdamFa2BrX5s44fcovWt-0faa45b8-eb73-43d6-a5ad-797f8413900d_23TgGyfr82F5tjnipAcSKb5F9Zj6CjuFDe5YTbvFNYvm%2FuJmF8%2FgGT5NPWAEWVdE"
}
],
link: "http://apidata.usatoday.com/story/news/nation/2014/02/21/detroit-bankruptcy-exit-plan/5679189/?kjnd=cqfbSNrsoQ7juhFPVp%2FtGRJoioibt05TQVCaTNwzeHRRsRkdNfm9K28md7tULCSj-0faa45b8-eb73-43d6-a5ad-797f8413900d_M7rlGt1xOMJKTM7o0Riv7SILj0t%2FmrKjW9fc0jkenWD3oQiUYEDTZ5lbVSikPNfC",
pubDate: "Fri, 21 Feb 2014 11:17:39 GMT",
title: "Detroit bankruptcy exit plan spotlights blight removal"
},
{
description: "USA TODAY's bite-size look at the past week's top stories from around the world.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/world/2014/02/22/global-roundup-around-the-world-in-180-characters/5682649/?kjnd=wKP90jFW9ed6CUVsJYpb1AXp30nZ1qr2LqHmNjpvfF8xd1O3EhIneqT4RQxx%2B7kB-0faa45b8-eb73-43d6-a5ad-797f8413900d_EGfnOjQsUxpO4eCKlpO7rZSG4aEpLOluyilFHRpvbOkBNqkfCJNcRWXW9VY%2FTsew"
}
],
link: "http://apidata.usatoday.com/story/news/world/2014/02/22/global-roundup-around-the-world-in-180-characters/5682649/?kjnd=Lsn0gAhRgTUgKz84rzXxQ7rO7%2FThJkUnw4s3EN1gpnVooTuGm%2Bts87RIKudd5i46-0faa45b8-eb73-43d6-a5ad-797f8413900d_40f0oDeNuPtZi6c%2FPcVesd1OSe%2Fkrz78kdKeUBO6HacBcJVkVdwAbytzyTeFjZDm",
pubDate: "Sat, 22 Feb 2014 12:08:29 GMT",
title: "Around the world in 180 characters"
},
{
description: "Photographers Davide Luciano and Claudia Ficca turn problems into art.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/nation-now/2014/02/21/pothole-photos-luciano-ficca/5697317/?kjnd=OvDFiMH6kkHyQb68IJN95%2FjFkxNGDr2mQOVPRu5UIwTvu9yw%2F5lIr%2FJbAqIzZG0Q-0faa45b8-eb73-43d6-a5ad-797f8413900d_KkHbQV2US7xcvQRfY3e3JElhdtLITEcQz1%2B97TVVCUI7ICaicC%2BsWo5t3uAOdzuc"
}
],
link: "http://apidata.usatoday.com/story/news/nation-now/2014/02/21/pothole-photos-luciano-ficca/5697317/?kjnd=8OKLy6iZBh%2FXCouVF0rVWpsypjN8MkxcQwQV8lKsgbTF9yK8Wwav3Q5mLXoy43Dt-0faa45b8-eb73-43d6-a5ad-797f8413900d_zMu8cqB6lV8dARNgo1VbQ%2Fm1ax4oKz%2BOEddjCgEOVkEn5dte9Oajv%2FmhwLp9SDpG",
pubDate: "Fri, 21 Feb 2014 03:24:03 GMT",
title: "Photos: Potholes reimagined in whimsical scenes"
},
{
description: "States could be first to regulate tobacco like alcohol.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/nation/2014/02/21/states-smoking-age-21/5698227/?kjnd=bLJPKMFrnPTCAu6iKuMWk6q5h1p3CskMlBcT4vZxsj%2FaUrWLsT0mRsJWJob%2F%2F2ph-0faa45b8-eb73-43d6-a5ad-797f8413900d_9ubnYhocpKd6KRIbDBAIq%2BpGEc6MNzqS6803Pf2TDPVuVez2JgBw3YavG5UdRtb6"
}
],
link: "http://apidata.usatoday.com/story/news/nation/2014/02/21/states-smoking-age-21/5698227/?kjnd=zFclIepy0cGwZSS6oiHL%2Fr9L4tz8lrbR9Qw3HkHOgvPF4fFTMbFfcYreLvBuX3gn-0faa45b8-eb73-43d6-a5ad-797f8413900d_yAMkyAs94KgiwwN6SdhoLajxxEg0Ww9IOCETVF2W3co10j3jbjLv2bGNlt6qEcJt",
pubDate: "Fri, 21 Feb 2014 02:38:44 GMT",
title: "Utah, Colorado move to hike smoking age to 21"
},
{
description: "Soldiers were given a lesser award, but deserved a Medal of Honor, review shows.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/nation/2014/02/21/medal-of-honor-vietnam-world-war-ii-korea/5705953/?kjnd=IpJO9MT1zqMLXNFJq2sl8LMZ%2BubBr8xxu2kfMgHmnLLTeYSh6vdEep79rnHiNLWJ-0faa45b8-eb73-43d6-a5ad-797f8413900d_p6QottolkhIZVDBvMmtstohs50vmPgTSX3qjbRE9%2FyhVzscbTSDddhaF1ORyzkT1"
}
],
link: "http://apidata.usatoday.com/story/news/nation/2014/02/21/medal-of-honor-vietnam-world-war-ii-korea/5705953/?kjnd=n5nd53ZLmYGGo7Hhl1QQTRNgWr4SN8cVTJSnI07u6ndREw0vrSuvorPkwSJ%2BM8f%2B-0faa45b8-eb73-43d6-a5ad-797f8413900d_cRrJI3Ek%2BblI1Cc2u9EGSxzWiQKgKny4vwO9xqHJiaD1MknCA4VQOgjszmXwGcUE",
pubDate: "Fri, 21 Feb 2014 05:17:06 GMT",
title: "Obama to award Medals of Honor to overlooked veterans"
},
{
description: "The White House said Obama and Putin also talked about Syria and Iran's nuclear program.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/politics/2014/02/21/obama-putin-ukraine-accord/5706915/?kjnd=udCzbjAaj0eiQ6whvAlv2eYWqPhN2pPn5mxuQ9%2BR5Os38lXRGPVtXsQz2FgzYYCH-0faa45b8-eb73-43d6-a5ad-797f8413900d_BNoSKWn2X0WFOkrK8HWiuT18jTOujUEwmqLdThDcvst6vmtO7vBvKUVchUvt2cG5"
}
],
link: "http://apidata.usatoday.com/story/news/politics/2014/02/21/obama-putin-ukraine-accord/5706915/?kjnd=zr3bFQQLYJXZRgWSo8HkgbHLnuarrF%2FJODpaoHj6YEESrixV0fi7hb7SVOgM3DBv-0faa45b8-eb73-43d6-a5ad-797f8413900d_XYkL2oUvyFvF0Pt%2FSsA0f2Q4H9vHz2qzd8EGg0LTLIa645lae5LTNuPEq6iVLgWm",
pubDate: "Fri, 21 Feb 2014 06:43:22 GMT",
title: "Obama, Putin have long talk after Ukraine accord"
},
{
description: "Ukrainians refuse to leave square until hated president is gone.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/world/2014/02/21/ukraine-protesters-life-in-square/5707265/?kjnd=xY2qRb7raajmXUhRgwFL7yXKad9a25LTKAkJl9srPGi6JCqhpq4%2FYP%2Ft5G4PLGMq-0faa45b8-eb73-43d6-a5ad-797f8413900d_UeO2YIYsVaqmJeFLXxFP3sykdJ97cdGmOZSe0ix%2BZC%2BUmIjinBaWg1eHv6iDkhEn"
}
],
link: "http://apidata.usatoday.com/story/news/world/2014/02/21/ukraine-protesters-life-in-square/5707265/?kjnd=sakl0uKWKJzXPDMuVNTlAtYF1tA14icKX5XMVhlBjYaKMc4f6sp%2BOlhVqVaERnEZ-0faa45b8-eb73-43d6-a5ad-797f8413900d_Tj%2BzS%2BzOlIxIZzecvxG6dF18SXehrqiLGniXBIjVRvwQaYmiEeHA2GVOq66KAAGH",
pubDate: "Fri, 21 Feb 2014 06:57:39 GMT",
title: "In Kiev square, protesters hold together"
},
{
description: "New rules follow outcry last year when reporters' phone records were secretly gathered.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/nation/2014/02/21/justice-reporters-records-subpoenas/5707777/?kjnd=0o1yXdrIOAfkod5IyKIUmp5hX3b3WMI4OJc4XEws0nTuLmKKKj%2BjYzcsozRQM4As-0faa45b8-eb73-43d6-a5ad-797f8413900d_MyqQmNpR449jFPrWy5KfLq%2B7zcrzSX3pRuJ2hDoJ2lJgxmFZi5iVVj9sts41uxYC"
}
],
link: "http://apidata.usatoday.com/story/news/nation/2014/02/21/justice-reporters-records-subpoenas/5707777/?kjnd=PwgeETWQnda0056s7fzNpczpU2tUYS2dymJrjfzK%2Bv%2BfYXMhjIH33rEJwExbvbyR-0faa45b8-eb73-43d6-a5ad-797f8413900d_gtEt3J4DSwUn%2BCCWlQubvb4lHV24ouAZFugeRVxk763PozyHSK2zt8nknafOUSpJ",
pubDate: "Fri, 21 Feb 2014 06:02:42 GMT",
title: "Justice issues new rules for seizing reporter records"
},
{
description: "The violence is in Kiev, but the anguish is in the U.S., too.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/nation/2014/02/21/new-york-ukrainian-reax/5707861/?kjnd=yzSEDfR77uNGXkZuqHHP%2Bh8s1Z3rYgj7F3YyWcn1XFCxew7BaNUlXPxnfqgdtLVZ-0faa45b8-eb73-43d6-a5ad-797f8413900d_DAjXEIQF4qdm31tht2FAIXb1BE6%2FayBgsaynCKGjhpeK2J0bnlNbELST5PTnxxgJ"
}
],
link: "http://apidata.usatoday.com/story/news/nation/2014/02/21/new-york-ukrainian-reax/5707861/?kjnd=f9zOXhGZ2QOkXRTAF7R6qA9s3ZUPgPJ7TlWamcakq9WUvNhj4QDWUYKpH%2FCqxKKV-0faa45b8-eb73-43d6-a5ad-797f8413900d_XxnQtg3H3vtD2BmbcTg%2FEHO9wpF5ZXHXOpRAKqJqk4ta0PURCI63upmx4OPh9m7h",
pubDate: "Fri, 21 Feb 2014 06:33:59 GMT",
title: "New York's Ukrainians 'pray every day' for loved ones"
},
{
description: "Take a look at the nominees for five of the night's major categories.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/nation-now/2014/02/21/oscar-nominees-interactive/5708135/?kjnd=K4%2FVGw%2F4S6%2FmsNXjDHfOSzAtMmH5lVnGdhrqBigTVldy9bJrk65KgZSwXxi6HGEp-0faa45b8-eb73-43d6-a5ad-797f8413900d_2mwFjgzrvVTd9HXhsZzIFqotleXVRE2iuOXteqdlvxMHnXGuYGib6Y853M2awTos"
}
],
link: "http://apidata.usatoday.com/story/news/nation-now/2014/02/21/oscar-nominees-interactive/5708135/?kjnd=hisKcAB5meRqoJi6uObk1BqRGYrC5qUEcyCKBHCsdjSA52CT26%2B9EFqNA8eWYbei-0faa45b8-eb73-43d6-a5ad-797f8413900d_W1cNhXygf%2ByTky4%2BtDnI0qhsTj8QIiOa%2FHrHXz9x4RItI7xcRz3logMDnn3hwhi9",
pubDate: "Fri, 21 Feb 2014 06:28:01 GMT",
title: "Interactive: Get to know the 2014 Oscar nominees"
},
{
description: "Freshmen from Georgia implicated in placing noose on statue of civil rights icon James Meredith",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/nation/2014/02/21/university-mississippi-james-meredith-statue/5709979/?kjnd=cEnonMG9klC9GLXXrBU%2F8bzFVEVXcfNX44LdwkfAOxtzURHaaq6gtMiw4pCHJMTJ-0faa45b8-eb73-43d6-a5ad-797f8413900d_Jh1zNMAcJjuehbqx8CaCsbUujtlPpQziUCKWVNxOGhF3cxfWG%2FVs4M3k23Ga9KX8"
}
],
link: "http://apidata.usatoday.com/story/news/nation/2014/02/21/university-mississippi-james-meredith-statue/5709979/?kjnd=pI5F8R77CIA6Suzoi9Mys716eglVg1VQzvDkn9T0tZxvjGA252al7WstQBVbzWo6-0faa45b8-eb73-43d6-a5ad-797f8413900d_Xp2KqnZtNkKrGhtwepW1yJ%2B%2F5TSvKEhqYp32PMy0GO8iqhFluVJz4O%2F9We1ZMjOK",
pubDate: "Fri, 21 Feb 2014 07:26:42 GMT",
title: "3 booted from Ole Miss frat, chapter suspended"
},
{
description: "Bill headed to governor's desk would allow using religious beliefs as defense in lawsuit.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/politics/2014/02/21/arizona-religion-bills/5710111/?kjnd=7NSNJDD93j3f4TVfp%2BpyvapeyDly1DowPe%2BlAeiNbmpsFXU%2F%2B6k%2B%2BYdeaSDcV9aU-0faa45b8-eb73-43d6-a5ad-797f8413900d_FsPdWGVAzLnJX4KHs2hrQx4hXvdQXYy3lNVL0y4g6Pn%2FAR5y2ox2Ki%2FdgGyUvTKw"
}
],
link: "http://apidata.usatoday.com/story/news/politics/2014/02/21/arizona-religion-bills/5710111/?kjnd=YZIpHaRTj38jkaDksL6vUKDMo8xHrhzHRXpLLZNeF3T1dg5AkNx848YjpbOUS6H4-0faa45b8-eb73-43d6-a5ad-797f8413900d_V7JjBpueJ0I55XV%2BHBX7lNYEKhwX3N82tKCadnXlBoctfT%2BTMlkW3W4EFJ4k6GOf",
pubDate: "Fri, 21 Feb 2014 07:51:54 GMT",
title: "Ariz. governor not saying if she'll sign religion bill"
},
{
description: "Defense secretary says evidence does not meet standard of proof.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/nation/2014/02/21/medal-of-honor-rafael-peralta/5711947/?kjnd=LqnLmUg4cCqTHJkT9whxE%2F%2ByCDa1JIwlNaqd7Q9aL990ormQycXdwPpcfCLibhgH-0faa45b8-eb73-43d6-a5ad-797f8413900d_l7bGg18TIFh3gTE0R0q%2Bx5KNqU%2FTl9ZRS9t%2FR136jAx9syk1x9x4XyUB517y7yG5"
}
],
link: "http://apidata.usatoday.com/story/news/nation/2014/02/21/medal-of-honor-rafael-peralta/5711947/?kjnd=reV15LfLGB2D3qxZS5C%2BOFZZOn8m2nx5U4QbX444yBdhIAaM7ITLCtvsLCLLBWfj-0faa45b8-eb73-43d6-a5ad-797f8413900d_9bPSvBwc9Ze84XZjafQxNdGAlKwhfC9VehAao5zWU%2BxOJRMfCkRXkXnqh5LZniZE",
pubDate: "Fri, 21 Feb 2014 08:41:05 GMT",
title: "Hagel won't reopen Medal of Honor case"
},
{
description: "Jason Michael Hann has been convicted of killing a 2-month-old and a 10-month old.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/nation/2014/02/21/man-who-killed-2-infants-gets-death-penalty/5712317/?kjnd=582usiDHPDoQcCLx60JEktwwnhXdXWuhEMDtFCnD3eTDEbelW8HHibfIv2%2FPZwXo-0faa45b8-eb73-43d6-a5ad-797f8413900d_hd6j8efvHyvSAjQ6RVLD4JH9U7MmmZPP%2BRhOhBBGEkK5ROrQIDZ84443nAYeVTj3"
}
],
link: "http://apidata.usatoday.com/story/news/nation/2014/02/21/man-who-killed-2-infants-gets-death-penalty/5712317/?kjnd=RLlsY9Gesx9%2B6uFD2nEh6BBLIC%2FXwktq8k98odlOSeW6mcqN9S3PzIKNcq5IuCf0-0faa45b8-eb73-43d6-a5ad-797f8413900d_vCQ1055WL6ttP4xBa4kNMAhzb0PqFcakgtj6RWvUbLsFIBzbuYQz5TQb7ROM1O3X",
pubDate: "Fri, 21 Feb 2014 08:51:17 GMT",
title: "Man who killed 2 infants gets death penalty"
},
{
description: "Parts and machinery from the closed San Onofre nuclear plant are going up for auction.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/nation/2014/02/21/san-onofre-nuclear-auction/5719015/?kjnd=VuAlJZtqtziYGYN4mpiWVtB4H0RUXUfewQYhjUPuahVmNikW%2BjC%2BwGZQH1fFO4l9-0faa45b8-eb73-43d6-a5ad-797f8413900d_xcNmbgZCOTKj4gP3dcJqM99rMScYQcFFwJF2ZBUn9mjZvOOYv7vEVUCEjxv%2Fb72%2B"
}
],
link: "http://apidata.usatoday.com/story/news/nation/2014/02/21/san-onofre-nuclear-auction/5719015/?kjnd=06%2BWoFi1ejIaEHngdmBc%2FI0tc3tCfp9JfplSrCfqMFK7lGqkH1Yp0bhvbVcU%2F9Zy-0faa45b8-eb73-43d6-a5ad-797f8413900d_RZt0R9Ww4GapnS12%2BUlzAvXlTaNyGXeaYKK01CZAwCRDwkp7YEMCTdf0f%2BLS0NSR",
pubDate: "Fri, 21 Feb 2014 11:43:36 GMT",
title: "Closed San Onofre nuclear plant auctions machinery"
},
{
description: "Opponents say the bill  would allow discrimination against gays.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/nation/2014/02/21/ariz-business-leaders-urge-veto-of-religion-bill/5719235/?kjnd=Hb6zG%2BkDg0iqzMx3srz80SHQ6aadbC2UsQmsGUkmuvYw%2FffrxZR5nCA5uM%2Blyks%2F-0faa45b8-eb73-43d6-a5ad-797f8413900d_QCUQbt9z%2BJedSLU2nhgJJ7P7cIKt%2FSpGQs0mox19EpBTLIzpTFPZCkLC7x4h%2Bnst"
}
],
link: "http://apidata.usatoday.com/story/news/nation/2014/02/21/ariz-business-leaders-urge-veto-of-religion-bill/5719235/?kjnd=EH2i6GDjNEX4MMCwhfPiDu8XaB45G52kRvxXMCoZ8WBXaJhLSd7ICUHepPdjCIng-0faa45b8-eb73-43d6-a5ad-797f8413900d_FJ%2FpBl%2FD9PDjgPdM4q6VqxXQcGVgL4rLPoDZRT4xhFG8PPFNJ5c97ZWN5AcoAZTh",
pubDate: "Fri, 21 Feb 2014 11:54:19 GMT",
title: "Ariz. business leaders urge veto of religion bill"
},
{
description: "Francis greeted Benedict, who sat in the front row of St. Peter's Basilica with the cardinals.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/world/2014/02/22/benedict-cardinal-francis-pope/5723237/?kjnd=q%2Fl6%2Fuj7XACbd8pVfpmTzSzD1BqugEq7ZEbbF%2BccPa7TL6k28Tec8ZJn1tGEpYLf-0faa45b8-eb73-43d6-a5ad-797f8413900d_viCT8AzyBwaSQhChXY%2BoEE8fPFXM4VLpKq7I4esrz5JL%2BqrNL%2B8IcAXlXTsmeHQw"
}
],
link: "http://apidata.usatoday.com/story/news/world/2014/02/22/benedict-cardinal-francis-pope/5723237/?kjnd=ob5pkBJvFhKFGbWFfT26KJXw5EjhSowjVS2Dg95MwjWQPfEYN5lWmzZggYYubGDk-0faa45b8-eb73-43d6-a5ad-797f8413900d_9vmSzjpxO0llR0JftP5OE0w9sKEO0iKKwV2z9LSJXP0FplOhOuJ02J%2B%2BDsz30aUy",
pubDate: "Sat, 22 Feb 2014 05:11:47 GMT",
title: "Benedict joins Francis as pope installs new cardinals"
},
{
description: "Grand old flags remade: Flags over military bases now must be 100% American-produced.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/nation/2014/02/22/american-made-flags-military/5725165/?kjnd=R9fSNDYUyaUBWo7u03U4TevyZsyyvvDpXZfwFHtylDVifgTC07fOdio%2BYH8%2BFwgt-0faa45b8-eb73-43d6-a5ad-797f8413900d_OkaY606eWH9j5kQagPvXIcgoKm1I5FO7%2FCQGkc3qPh1Ywxnp0DqbhjtIGOu6E8gM"
}
],
link: "http://apidata.usatoday.com/story/news/nation/2014/02/22/american-made-flags-military/5725165/?kjnd=y68AqWgn1jTwwWlLvw670LF4VptHroowp3ylQQFqqejuOWwQkC0lpRyjK2mWk1gh-0faa45b8-eb73-43d6-a5ad-797f8413900d_YLMHjnnA9I1xVjTw8kys15lgBhvrNXGGAlZmbkGk7037UBOxsMBla3lF%2BR%2FMF3gJ",
pubDate: "Sat, 22 Feb 2014 12:49:04 GMT",
title: "U.S. flags at military bases must be 100% American-made"
}];

Ember.Handlebars.registerBoundHelper('currentDate', function() {
  return moment().format('LL');
});
