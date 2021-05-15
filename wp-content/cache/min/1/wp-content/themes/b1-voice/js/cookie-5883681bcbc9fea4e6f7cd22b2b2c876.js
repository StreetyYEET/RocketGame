function setCookie(name,value,options){options=options||{};var expires=options.expires;if(typeof expires=="number"&&expires){var d=new Date();d.setTime(d.getTime()+expires*1000);expires=options.expires=d}
if(expires&&expires.toUTCString){options.expires=expires.toUTCString()}
value=encodeURIComponent(value);var updatedCookie=name+"="+value;for(var propName in options){updatedCookie+="; "+propName;var propValue=options[propName];if(propValue!==!0){updatedCookie+="="+propValue}}
document.cookie=updatedCookie}
function getCookie(c_name){var c_value=document.cookie,c_start=c_value.indexOf(" "+c_name+"=");if(c_start==-1)c_start=c_value.indexOf(c_name+"=");if(c_start==-1){c_value=null}else{c_start=c_value.indexOf("=",c_start)+1;var c_end=c_value.indexOf(";",c_start);if(c_end==-1){c_end=c_value.length}
c_value=unescape(c_value.substring(c_start,c_end))}
return c_value}
jQuery(document).ready(function($){if(!getCookie('cookiesAllowed')){$('.cookie-bar').addClass('visible')}
$('#cookieAccept').click(function(){setCookie('cookiesAllowed','1',{expires:3600*24*365,path:'/'});$('.cookie-bar').removeClass('visible')})})
