function takeANumber(katzDeli, name) {
katzDeli.push(`${name}`);
return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}


function nowServing(katzDeli, name) {
let i = 0;
while (i < katzDeli.length) {
i++;
}
if katDeli.length === 0) {
return "There is nobody waiting to be served!";
} 
else {
return (`Currently serving ${katzDeli.shift()}.`);
}
}


function currentLine(katzDeliLine) {
let i = 0;
while (i < katzDeliLine.length) {
katzDeliLine.push(` `+[i + 1]+`. `+ katzDeli[i])
i++;

}
if (katzDeli.length === 0) {
return "The line is currently empty.";

} else
return (`Currently ${line} in line`);
}