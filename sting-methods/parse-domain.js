// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url) {
  let start;
  //if url starts with https , check if there is www
  if (url.startsWith("https://")) {
    start = url.substring(8);
    if (start.startsWith("www.")) {
      start = start.substring(4);
    }
  } else if (url.startsWith("http://")) {
    start = url.substring(7);
    if (start.startsWith("www.")) {
      start = start.substring(4);
    }
  }

  let endIndex = start.indexOf(".com");

  return start.substring(0, endIndex);
}

//console.log(domainName("http://github.com/carbonfive/raygun"));

console.log(domainName("http://www.cnet.net"));
