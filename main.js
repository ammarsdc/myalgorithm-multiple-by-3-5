var dividable = [];
var total = 0;

for (i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        dividable.push(i);
        total += i;
    }
}

document.write("<p>");
document.write("Sum:");
document.write("<br />");
document.write(total);
document.write("</p>");

document.write("<p>");
document.write("List (multiples of 3 or 5):");
document.write("<br />");
document.write(dividable.join(", "));
document.write("</p>");
