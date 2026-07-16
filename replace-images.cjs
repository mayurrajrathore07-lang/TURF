const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');
content = content.replace(/(<img\s+)(?:src="[^"]*"|href="[^"]*")/g, '$1src="src/cric.png"');
fs.writeFileSync('index.html', content);
