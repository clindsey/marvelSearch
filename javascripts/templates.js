window.require.register("templates", function(require, module) {module.exports = function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["app/templates/characterDetails.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    ";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n    Description unavailable.\n  ";
  }

  buffer += "<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n  <h4 class=\"modal-title\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n</div>\n<div class=\"modal-body\">\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.description), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n</div>\n";
  return buffer;
  });

this["JST"]["app/templates/charactersList.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showLoading), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = (helper = helpers.buildPagination || (depth0 && depth0.buildPagination),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.collection), options) : helperMissing.call(depth0, "buildPagination", (depth0 && depth0.collection), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n    <h3 class=\"text-info\"><span class=\"loading-spinner glyphicon glyphicon-refresh\"></span> Loading Search Results...</h3>\n  ";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.buildMediaList || (depth0 && depth0.buildMediaList),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.collection), options) : helperMissing.call(depth0, "buildMediaList", (depth0 && depth0.collection), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <div class=\"characters-list-item media-list-item\" style=\"background-image: url("
    + escapeExpression((helper = helpers.thumbnailSrc || (depth0 && depth0.thumbnailSrc),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.thumbnail), options) : helperMissing.call(depth0, "thumbnailSrc", (depth0 && depth0.thumbnail), options)))
    + ");\" data-character-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        <h4>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n      </div>\n    ";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "\n  <h3>Fetching Data...</h3>\n";
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.collection), {hash:{},inverse:self.program(7, program7, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["app/templates/comicDetails.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    ";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n    Description unavailable.\n  ";
  }

  buffer += "<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n  <h4 class=\"modal-title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n</div>\n<div class=\"modal-body\">\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.description), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n</div>\n";
  return buffer;
  });

this["JST"]["app/templates/comicsList.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showLoading), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = (helper = helpers.buildPagination || (depth0 && depth0.buildPagination),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.collection), options) : helperMissing.call(depth0, "buildPagination", (depth0 && depth0.collection), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n    <h3 class=\"text-info\"><span class=\"loading-spinner glyphicon glyphicon-refresh\"></span> Loading Search Results...</h3>\n  ";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.buildMediaList || (depth0 && depth0.buildMediaList),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.collection), options) : helperMissing.call(depth0, "buildMediaList", (depth0 && depth0.collection), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <div class=\"comics-list-item media-list-item\" style=\"background-image: url("
    + escapeExpression((helper = helpers.thumbnailImageSrc || (depth0 && depth0.thumbnailImageSrc),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.images), options) : helperMissing.call(depth0, "thumbnailImageSrc", (depth0 && depth0.images), options)))
    + ");\" data-comic-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        <h4>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n      </div>\n    ";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "\n  <h3>Loading...</h3>\n";
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.collection), {hash:{},inverse:self.program(7, program7, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["app/templates/creatorDetails.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    ";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n    Description unavailable.\n  ";
  }

  buffer += "<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n  <h4 class=\"modal-title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n</div>\n<div class=\"modal-body\">\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.description), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n</div>\n";
  return buffer;
  });

this["JST"]["app/templates/creatorsList.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showLoading), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = (helper = helpers.buildPagination || (depth0 && depth0.buildPagination),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.collection), options) : helperMissing.call(depth0, "buildPagination", (depth0 && depth0.collection), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n    <h3 class=\"text-info\"><span class=\"loading-spinner glyphicon glyphicon-refresh\"></span> Loading Search Results...</h3>\n  ";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.buildMediaList || (depth0 && depth0.buildMediaList),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.collection), options) : helperMissing.call(depth0, "buildMediaList", (depth0 && depth0.collection), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <div class=\"creators-list-item media-list-item\" style=\"background-image: url("
    + escapeExpression((helper = helpers.thumbnailSrc || (depth0 && depth0.thumbnailSrc),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.thumbnail), options) : helperMissing.call(depth0, "thumbnailSrc", (depth0 && depth0.thumbnail), options)))
    + ");\" data-creator-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        <h4>\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.fullName), {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </h4>\n      </div>\n    ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            ";
  if (helper = helpers.fullName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fullName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n          ";
  return buffer;
  }

function program8(depth0,data) {
  
  
  return "\n            &nbsp;\n          ";
  }

function program10(depth0,data) {
  
  
  return "\n  <h3>Loading...</h3>\n";
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.collection), {hash:{},inverse:self.program(10, program10, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["app/templates/mediaTabs.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<ul class=\"nav nav-pills\">\n  <li class=\"active\"><a href=\"#characters\" data-toggle=\"tab\">Characters <span class=\"badge\"></span></a></li>\n  <li><a href=\"#comics\" data-toggle=\"tab\">Comics <span class=\"badge\"></span></a></li>\n  <li><a href=\"#creators\" data-toggle=\"tab\">Creators <span class=\"badge\"></span></a></li>\n</ul>\n\n<div class=\"tab-content\">\n  <div class=\"tab-pane active\" id=\"characters\">\n    <div class=\"characters-list media-list\">\n    </div>\n  </div>\n  <div class=\"tab-pane\" id=\"comics\">\n    <div class=\"comics-list media-list\">\n    </div>\n  </div>\n  <div class=\"tab-pane\" id=\"creators\">\n    <div class=\"creators-list media-list\">\n    </div>\n  </div>\n</div>\n";
  });

this["JST"]["app/templates/searchArea.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<form class=\"form-horizontal\">\n  <div class=\"form-group\">\n    <label for=\"inputSearch\" class=\"col-sm-2 control-label\">Search</label>\n    <div class=\"col-sm-10\">\n      <input class=\"form-control\" id=\"inputSearch\" type=\"text\" placeholder=\"Character, Comic or Creator\" />\n    </div>\n  </div>\n</form>\n";
  });

return this["JST"];

};});
