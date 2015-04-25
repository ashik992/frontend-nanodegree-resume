var formatedName = HTMLheaderName.replace("%data%", "Ashik Ahmed");

var skills = ["Awesomeness", "Programming", "Photography", "Skateboarding"];
var role ="programmer";
var formatedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formatedRole);
$("#header").prepend(formatedName);
