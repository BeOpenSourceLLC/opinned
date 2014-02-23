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
description: "Two other children are still hospitalized with serious injuries",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/nation/2014/02/22/indiana-fire-deaths/5727179/?kjnd=Aov1%2FFHyBc4HofeqgzDZCYZmOa5noAPIvH1zyXPEZGGDIhVJ7ch4sGUvO7xLfNl0-8af81fd3-f45b-461d-afc4-4e65454314bf_CcdkANLf4dyO%2Bp55fLOFyFKJR4vsdlYS3Pry7rWstuYBfATtOX%2BrO4Szt6tk9GSL"
}
],
link: "http://apidata.usatoday.com/story/news/nation/2014/02/22/indiana-fire-deaths/5727179/?kjnd=ozWf2jIU5DTB8S%2Fx6o34PzGd%2BL%2FUfWf0Ff6dQT7Kr9%2FX%2FxQLRe%2FF5vCFmLR7RM9g-8af81fd3-f45b-461d-afc4-4e65454314bf_tAgCdf45Ef5mMB2IoCHpJmSimbTUKLvWu6wl4rBbsqg3y3ZgQbTSX%2BFpCAhDOWKM",
pubDate: "Sat, 22 Feb 2014 01:49:53 GMT",
title: "2 adults, 2 children die in Indianapolis fire"
},
{
description: "Joaquan ­El Chapo GuzmÃ¡n is captured by Mexican and U.S. officials 13 years after escaping prison.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/world/2014/02/22/drug-cartel-arrested/5725169/?kjnd=i%2FZjZFItxHf6sJLF7Z%2BV%2B3ZA4yrcsHmvl%2FaZS0PYF%2FCWZBCapJcF%2BsThvZZqvnI2-8af81fd3-f45b-461d-afc4-4e65454314bf_dpk9euM0d201PVw21iwZTX333JECV9mZS1qB4FceANCqw68%2FZD3wIGkoaNOlAj9d"
}
],
link: "http://apidata.usatoday.com/story/news/world/2014/02/22/drug-cartel-arrested/5725169/?kjnd=dMuOJkCXwtpElBbMmWU60zw7RuwOHbTsYuM8E2JG4sd83Ne11Oqo4NtbfyRP1K8o-8af81fd3-f45b-461d-afc4-4e65454314bf_W%2FJCh3uoSQHDFYlV3kv3qEpRYJS53whrtP7EOpjlvjUDDkAsvwT%2FA3yhyfoni4ZH",
pubDate: "Sat, 22 Feb 2014 11:17:35 GMT",
title: "Notorious Mexican drug cartel leader arrested"
},
{
description: "As Miami seeks to raise its global profile, an act of vandalism raises questions.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/nation/2014/02/22/miami-art-museum-vandal/5588301/?kjnd=X%2BlYtnSMJ05Lj4pvSvRZfR1Qlxg9KSAf6xEzmMAi%2FRlGNQch92%2F9seI01uLZ1WSk-8af81fd3-f45b-461d-afc4-4e65454314bf_1IEyVyY%2BFJ3Ba1O%2Fpz42UTJMiYXyS7rA87olaao%2FPhrsABNjw19e628JEgMa4gxe"
}
],
link: "http://apidata.usatoday.com/story/news/nation/2014/02/22/miami-art-museum-vandal/5588301/?kjnd=fuywLY3G09ZRR64D%2Bx93i51z4dt47mIJ7NSGjQDZU8DEj56XkZkdIbhx726raA%2FM-8af81fd3-f45b-461d-afc4-4e65454314bf_Z9TH2v5FqKcfapKApycs5vL4FgCnciLL%2BNY7Qk0A5SUJN%2B1kOaXhH1DZb5ihPx%2Fz",
pubDate: "Sat, 22 Feb 2014 09:20:40 GMT",
title: "A broken vase sparks a cultural debate in Miami"
},
{
description: "Icy roads were a factor in Friday night's collision.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/nation/2014/02/22/one-dead-in-vermont-car-crash/5725219/?kjnd=9C72Da4JXIB7laukQ2P0QOWJJOm6Bmiijgj09CjKhn6%2BHzLxsSEMGG1P8it8DGiq-8af81fd3-f45b-461d-afc4-4e65454314bf_E%2FRl0o2QC7GQxAjopJ1VJFKepp0MYMIkeFSmTCX9c6euOqnuqoMoH17nE1l5PyBy"
}
],
link: "http://apidata.usatoday.com/story/news/nation/2014/02/22/one-dead-in-vermont-car-crash/5725219/?kjnd=oE1kfFc2hEmGe%2BwGAFdZWm81jIB3OOJ9ccYGMHKrzZc1wyJ4GtuKcPS4UN5pWM9H-8af81fd3-f45b-461d-afc4-4e65454314bf_hv0pK%2Bk0xBalNAvzokbruVLJQQ1s1%2BoINTvW4KJ0Fk%2BQLhHurgxyVGBmZSeGRLci",
pubDate: "Sat, 22 Feb 2014 11:45:09 GMT",
title: "Tour bus driver dead, dozens injured in Vt. crash"
},
{
description: "Upon release from prison Saturday, Tymoshenko expressed relief and hope for the future.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/world/2014/02/22/yulia-tymoshenko-ukraine/5727621/?kjnd=ZqUzqwXlR4eNEAJDiYZVgqm2ElFTsSuLeGvs9UZz5RptfcXSuPPl5WztIU9HDdhp-8af81fd3-f45b-461d-afc4-4e65454314bf_nLb3GS%2F57gMPuj74FAnsH9Pomjm6sJrYi%2BzNM1He9Ln3RvL3xRf4VofiDaQ9IF6R"
}
],
link: "http://apidata.usatoday.com/story/news/world/2014/02/22/yulia-tymoshenko-ukraine/5727621/?kjnd=WZF1OSrOBX7IHzdAkSY9ThuVi3yMt7PkTZ8dUKP%2BdC0xVmhr%2FqFVhYkqpMraqLH3-8af81fd3-f45b-461d-afc4-4e65454314bf_q87DXTINZRncaynYW26aYsHp775Oo2Y0zEPoafUphrzbmKIQOvDr4%2FyyOauLVOQo",
pubDate: "Sat, 22 Feb 2014 02:58:17 GMT",
title: "Will freed opposition leader cause more division in Ukraine?"
},
{
description: "Tens of thousands of supporters and opponents of Maduro took to the streets Saturday.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/world/2014/02/22/protesters-in-venezuela-call-for-end-to-rioting/5730297/?kjnd=s%2FdoUJ3W2mSrDF4sQz70Av%2FwJm6O5TVS9DeeyjYF34VnIlRhf4IQZi5yQRHjT2KD-8af81fd3-f45b-461d-afc4-4e65454314bf_j%2BurjT%2FbyOCpu3uQ3Q9mBA2toWqi6mmO1cc3KCjQqI0KBQ8Alt9wt%2B7fWJh80l6Z"
}
],
link: "http://apidata.usatoday.com/story/news/world/2014/02/22/protesters-in-venezuela-call-for-end-to-rioting/5730297/?kjnd=vsCDug2LUbvset%2BIztIqoYDbbVjyH%2BBNw9dRmK1bSEFGtKwvhOwd8VyP3p7So0cf-8af81fd3-f45b-461d-afc4-4e65454314bf_T0BZra9tAiIuJVhMe5zQ6uBkT%2F2Ow2t8F2OBUuRlBoAuG6tYkn5zH44KRBovoi8N",
pubDate: "Sat, 22 Feb 2014 06:01:13 GMT",
title: "Protesters in Venezuela call for end to rioting"
},
{
description: "Yanukovych remained defiant Saturday, saying he has no intention of resigning or leaving the country.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/world/2014/02/22/ukraine-protests-kiev-president/5723135/?kjnd=9mV%2FDKa9h%2Buw%2B5nzDh4UhJ87UFGRd6JX7sVDQKBsLgRRHNUX4kqMRGmPsoomkkut-8af81fd3-f45b-461d-afc4-4e65454314bf_GZlwlEkvOpp%2Fy5hcnXMDUCPTnpbIq1ZBgIglMI7DbSx5eeuCFAxBSw03%2BmCBB3eu"
}
],
link: "http://apidata.usatoday.com/story/news/world/2014/02/22/ukraine-protests-kiev-president/5723135/?kjnd=uLFMZ7nl56w%2BKSRSeCi4hIcIOykcHFJ4PMRMXViDY3koASAckte0ITjSoYjxjnLj-8af81fd3-f45b-461d-afc4-4e65454314bf_UQ09zPKjXF1ZLCO9rFYlTxWEgNWUouyXhm8UEamxtjV5TQY1UAfj84SbqUiv653%2B",
pubDate: "Sat, 22 Feb 2014 03:08:31 GMT",
title: "Ukraine parliament votes to remove president"
},
{
description: "Protesters proposed presidential residence be transformed into a Museum of Corruption.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/world/2014/02/22/ukraine-future-presidential-residence/5726711/?kjnd=C%2F1zukXAbtwHh%2FRZSco19Qfrfsh8dx4nDKUgb4q%2FCjOYlDMxEKhqVVwfcA1%2FfClI-8af81fd3-f45b-461d-afc4-4e65454314bf_iGHWkQ%2FJVELWsOR4V7dVmBF8yFjv2%2BWLPJSDKAclHBlpcp%2BhokC3DqH0vG%2F0SnUG"
}
],
link: "http://apidata.usatoday.com/story/news/world/2014/02/22/ukraine-future-presidential-residence/5726711/?kjnd=PI9Do4NFMMgAbloiZtEtDB7ob%2FsBHB475%2BavG%2BNbzeTp5XZPL0gGkkHm4O5HxHHT-8af81fd3-f45b-461d-afc4-4e65454314bf_l7Xhii1%2Fs5pv6EUtEpNImHlK4L0N8sKfy15zWYjwFhCfOP0o3hiqAS%2BkMxa%2BbSrt",
pubDate: "Sat, 22 Feb 2014 02:01:38 GMT",
title: "Palace takeover a symbol of change for Ukraine's future"
},
{
description: "All eyes on Russia as Kiev ushers in a tumultuous period of transition.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/world/2014/02/22/ukraine-russia-usa-european-union/5727105/?kjnd=VX7Au0Ewd52rMm3iMv6HD5%2BUAVKsV8w5IOpgjidaC0VE2q2Pc9kMozOkPKX2r%2FdA-8af81fd3-f45b-461d-afc4-4e65454314bf_GSjVCY8gJwXyplFYNmcSCe7gc5Zi%2B5AiWEIbpAB56AbV3dVaf0Cn5N2vMFYlxKtX"
}
],
link: "http://apidata.usatoday.com/story/news/world/2014/02/22/ukraine-russia-usa-european-union/5727105/?kjnd=6Anz37J1H%2FYz7X6VQUsnXpW8Fss2FqT5By4parJ%2Fu6%2Bbh7YVAW1228PLJPj8rwcf-8af81fd3-f45b-461d-afc4-4e65454314bf_pxOASfhXcu7HUsfBXyBwB8gk174rvwqmJ6X3hJC0A44K474nP177d3Vev%2Bq7NlIB",
pubDate: "Sat, 22 Feb 2014 03:44:25 GMT",
title: "A 'dangerous' moment as dust settles in Ukraine"
},
{
description: "Governors say they need more flexibility from the federal government and less red tape.",
guid: [
{
isPermalink: "true",
value: "http://apidata.usatoday.com/story/news/politics/2014/02/22/flexible-federalism-from-washington/5727111/?kjnd=4sCR29eI5vbUcdfdPelepxoy72IIeJIwShPAYSiukh2%2BpVE83BD%2FV1HwlCT03XHR-8af81fd3-f45b-461d-afc4-4e65454314bf_DvqlZlKS5AmYjZWpxUPhA61fKki26emrriCWdRIZ1KVemFEs9HVhVwKzxk9TjLAt"
}
],
link: "http://apidata.usatoday.com/story/news/politics/2014/02/22/flexible-federalism-from-washington/5727111/?kjnd=1mRP0oGNQaW1t7294kzkBeGR9fFIBuS%2BSS9iF8x1EWxm%2BMHDTmVVpX%2FHiwajRkoy-8af81fd3-f45b-461d-afc4-4e65454314bf_soWVrXaaBxBHdCo%2B2pynMX6H%2BwFBJWi7PnjKdpXAPq14kmfDgHGwUqLQZDi6G7Bt",
pubDate: "Sat, 22 Feb 2014 03:56:02 GMT",
title: "Governors to Washington: We'll show you how it's done"
}
];
